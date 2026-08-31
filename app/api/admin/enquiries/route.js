import { NextResponse } from 'next/server';
import { getSupabase } from '../../../../src/lib/supabase';

// Helper to check authentication
function isAuthenticated(request) {
  const cookieToken = request.cookies.get('admin_auth_token')?.value;
  const headerToken = request.headers.get('x-admin-token');
  return (
    cookieToken === 'jmt_authenticated_session_token_2026' ||
    headerToken === 'jmt_authenticated_session_token_2026'
  );
}

export async function GET(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Please login.' },
        { status: 401 }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Supabase is not configured.' },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from('admission_enquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase fetch error:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, enquiries: data || [] });
  } catch (err) {
    console.error('Error fetching enquiries:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch enquiries.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized.' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing enquiry ID.' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Supabase is not configured.' },
        { status: 500 }
      );
    }

    const { error } = await supabase
      .from('admission_enquiries')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase delete error:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Enquiry deleted successfully.' });
  } catch (err) {
    console.error('Error deleting enquiry:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to delete enquiry.' },
      { status: 500 }
    );
  }
}
