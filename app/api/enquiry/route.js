import { NextResponse } from 'next/server';
import { getSupabase } from '../../../src/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const { studentName, parentName, age, classInterested, contactNumber, email, message } = body;

    // Server-side Validation
    if (!studentName || !classInterested || !contactNumber) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields (Student Name, Class, and Contact Number).' },
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

    // Insert into Supabase admission_enquiries table
    const { data, error } = await supabase
      .from('admission_enquiries')
      .insert([
        {
          student_name: studentName.trim(),
          parent_name: parentName ? parentName.trim() : null,
          age: age ? parseInt(age, 10) || null : null,
          class_interested: classInterested,
          contact_number: contactNumber.trim(),
          email: email ? email.trim() : null,
          message: message ? message.trim() : null,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Supabase Insertion Error:', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to submit admission enquiry to database.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your admission enquiry has been submitted successfully.',
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
