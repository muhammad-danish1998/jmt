import { NextResponse } from 'next/server';
import { getSupabase } from '../../../../src/lib/supabase';
import { verifyAdminToken } from '../../../../src/lib/auth';
import { sanitizeHtml } from '../../../../src/lib/sanitizeHtml';

// PUT: Update an existing blog (Admin only)
export async function PUT(request, { params }) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, error: 'Missing blog ID.' }, { status: 400 });
    }

    const body = await request.json();
    const {
      title,
      slug,
      category,
      excerpt,
      snippet_answer,
      key_takeaways,
      content,
      image,
      secondary_image,
      author,
      read_time,
      featured,
    } = body;

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ success: false, error: 'Supabase is not configured.' }, { status: 500 });
    }

    const updateFields = {
      updated_at: new Date().toISOString(),
    };

    if (title !== undefined) updateFields.title = title.trim();
    if (slug !== undefined) updateFields.slug = slug.trim();
    if (category !== undefined) updateFields.category = category;
    if (excerpt !== undefined) updateFields.excerpt = excerpt ? excerpt.trim() : '';
    if (snippet_answer !== undefined) updateFields.snippet_answer = snippet_answer ? snippet_answer.trim() : null;
    if (key_takeaways !== undefined) {
      updateFields.key_takeaways = Array.isArray(key_takeaways)
        ? key_takeaways.map((t) => (typeof t === 'string' ? t.trim() : '')).filter(Boolean)
        : [];
    }
    if (content !== undefined) updateFields.content = sanitizeHtml(content.trim());
    if (image !== undefined) updateFields.image = image || '/hero-students.jpg';
    if (secondary_image !== undefined) updateFields.secondary_image = secondary_image || null;
    if (author !== undefined) updateFields.author = author || 'JMT Academic Team';
    if (read_time !== undefined) updateFields.read_time = read_time || '5 min read';
    if (featured !== undefined) updateFields.featured = Boolean(featured);

    const { data, error } = await supabase
      .from('blogs')
      .update(updateFields)
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase update blog error:', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to update blog post.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Blog post updated successfully!',
      blog: data?.[0],
    });
  } catch (err) {
    console.error('Error updating blog:', err);
    return NextResponse.json({ success: false, error: 'Failed to update blog.' }, { status: 500 });
  }
}

// DELETE: Remove a blog post (Admin only)
export async function DELETE(request, { params }) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, error: 'Missing blog ID.' }, { status: 400 });
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ success: false, error: 'Supabase is not configured.' }, { status: 500 });
    }

    const { error } = await supabase.from('blogs').delete().eq('id', id);

    if (error) {
      console.error('Supabase delete blog error:', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to delete blog post.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully.' });
  } catch (err) {
    console.error('Error deleting blog:', err);
    return NextResponse.json({ success: false, error: 'Failed to delete blog.' }, { status: 500 });
  }
}
