import { NextResponse } from 'next/server';
import { getSupabase } from '../../../src/lib/supabase';

export async function POST(request) {
  try {
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
    const resolvedName =
      (firstName && lastName ? `${firstName.trim()} ${lastName.trim()}` : '') ||
      (studentName ? studentName.trim() : '') ||
      (firstName ? firstName.trim() : '');

    const resolvedClass = classProgram || classInterested;
    const resolvedContact = contactNumber ? contactNumber.trim() : '';

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
          error: 'Supabase is not configured yet. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env file.',
        },
        { status: 503 }
      );
    }

    // Build comprehensive structured details string
    const details = [];
    if (address) details.push(`Address: ${address.trim()}`);
    if (dob) details.push(`DOB: ${dob.trim()}`);
    if (gender) details.push(`Gender: ${gender}`);
    if (photoName) details.push(`Photo Uploaded: ${photoName}`);
    if (message) details.push(`Notes: ${message.trim()}`);

    const fullMessage = details.length > 0 ? details.join(' | ') : 'Online Admission Form Submission';

    // Insert into Supabase admission_enquiries table
    const { data, error } = await supabase
      .from('admission_enquiries')
      .insert([
        {
          student_name: resolvedName,
          parent_name: parentName ? parentName.trim() : (gender ? `Gender: ${gender}` : null),
          class_interested: resolvedClass,
          contact_number: resolvedContact,
          email: email ? email.trim() : null,
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

