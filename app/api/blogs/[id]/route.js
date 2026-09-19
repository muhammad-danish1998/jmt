import { NextResponse } from 'next/server';
import { getSupabase } from '../../../../src/lib/supabase';

function isAuthenticated(request) {
  const cookieToken = request.cookies.get('admin_auth_token')?.value;
  const headerToken = request.headers.get('x-admin-token');
  return (
    cookieToken === 'jmt_authenticated_session_token_2026' ||
    headerToken === 'jmt_authenticated_session_token_2026'
  );
}

// PUT: Update an existing blog
export async function PUT(request, { params }) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ success: false, error: 'Supabase is not configured.' }, { status: 500 });
    }

    const updates = {
      ...body,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('blogs')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Blog updated successfully.', blog: data?.[0] });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to update blog.' }, { status: 500 });
  }
}

// DELETE: Delete a blog
export async function DELETE(request, { params }) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = await params;
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ success: false, error: 'Supabase is not configured.' }, { status: 500 });
    }

    const { error } = await supabase.from('blogs').delete().eq('id', id);

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully.' });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to delete blog.' }, { status: 500 });
  }
}
