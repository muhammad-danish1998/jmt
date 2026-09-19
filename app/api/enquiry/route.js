import { NextResponse } from 'next/server';
import { getSupabase } from '../../../src/lib/supabase';
import { checkRateLimit, getClientIp } from '../../../src/lib/rateLimit';

export async function POST(request) {
  try {
    const clientIp = getClientIp(request);

    // Rate limit: Max 10 admission submissions per 15 minutes per IP
    const rateLimit = checkRateLimit(`enquiry_${clientIp}`, 10, 15 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions from this connection. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      firstName,
      lastName,
      studentName,
      parentName,
      dob,
      gender,
      classInterested,
      classProgram,
      address,
      contactNumber,
      email,
      photoName,
      message,
    } = body;

    // Resolve full student name
    const rawName =
      (firstName && lastName ? `${firstName.trim()} ${lastName.trim()}` : '') ||
      (studentName ? studentName.trim() : '') ||
      (firstName ? firstName.trim() : '');

    const resolvedName = rawName.slice(0, 150); // limit string length
    const resolvedClass = (classProgram || classInterested || '').slice(0, 100);
    const resolvedContact = (contactNumber ? contactNumber.trim() : '').slice(0, 30);
    const resolvedEmail = email && typeof email === 'string' ? email.trim().slice(0, 120) : null;

    // Validation
    if (!resolvedName || !resolvedContact || !resolvedClass) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please fill in all required fields (Name, Class/Program, and Contact Number).',
        },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          error: 'Supabase is not configured yet. Please check your environment configuration.',
        },
        { status: 503 }
      );
    }

    // Build structured sanitized details string
    const details = [];
    if (address) details.push(`Address: ${String(address).trim().slice(0, 200)}`);
    if (dob) details.push(`DOB: ${String(dob).trim().slice(0, 50)}`);
    if (gender) details.push(`Gender: ${String(gender).slice(0, 20)}`);
    if (photoName) details.push(`Photo: ${String(photoName).slice(0, 100)}`);
    if (message) details.push(`Notes: ${String(message).trim().slice(0, 500)}`);

    const fullMessage = details.length > 0 ? details.join(' | ') : 'Online Admission Form Submission';

    // Insert into Supabase admission_enquiries table
    const { data, error } = await supabase
      .from('admission_enquiries')
      .insert([
        {
          student_name: resolvedName,
          parent_name: parentName ? String(parentName).trim().slice(0, 150) : (gender ? `Gender: ${gender}` : null),
          class_interested: resolvedClass,
          contact_number: resolvedContact,
          email: resolvedEmail,
          message: fullMessage,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Supabase Insertion Error:', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to submit admission to database.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your admission application has been submitted successfully.',
        data,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('API Error in /api/enquiry:', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected server error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
