import { NextResponse } from 'next/server';
import { getSupabase } from '../../../src/lib/supabase';

// Helper to check admin authentication
function isAuthenticated(request) {
  const cookieToken = request.cookies.get('admin_auth_token')?.value;
  const headerToken = request.headers.get('x-admin-token');
  return (
    cookieToken === 'jmt_authenticated_session_token_2026' ||
    headerToken === 'jmt_authenticated_session_token_2026'
  );
}

// GET: Fetch all published blogs (or all for admin)
export async function GET(request) {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ success: true, blogs: [] });
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const slug = searchParams.get('slug');

    let query = supabase.from('blogs').select('*').order('created_at', { ascending: false });

    if (slug) {
      query = query.eq('slug', slug);
    }
    if (category && category !== 'All Posts') {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase fetch blogs error:', error);
      return NextResponse.json({ success: false, error: error.message, blogs: [] }, { status: 500 });
    }

    return NextResponse.json({ success: true, blogs: data || [] });
  } catch (err) {
    console.error('API Error in /api/blogs:', err);
    return NextResponse.json({ success: false, error: 'Failed to fetch blogs', blogs: [] }, { status: 500 });
  }
}

// POST: Create a new blog (Admin only)
export async function POST(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
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

    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: 'Title and Content are required.' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ success: false, error: 'Supabase is not configured.' }, { status: 500 });
    }

    // Generate slug if not provided
    const resolvedSlug = (
      slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
    ).trim();

    const newBlog = {
      title: title.trim(),
      slug: resolvedSlug,
      category: category || 'Education',
      excerpt: excerpt ? excerpt.trim() : '',
      snippet_answer: snippet_answer ? snippet_answer.trim() : null,
      key_takeaways: Array.isArray(key_takeaways) ? key_takeaways : [],
      content: content.trim(),
      image: image || '/hero-students.jpg',
      secondary_image: secondary_image || null,
      author: author || 'JMT Academic Team',
      author_avatar: (author || 'JMT')
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
      read_time: read_time || '5 min read',
      featured: Boolean(featured),
      published: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase.from('blogs').insert([newBlog]).select();

    if (error) {
      console.error('Supabase insert blog error:', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Failed to create blog post.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Blog post published successfully!', blog: data?.[0] },
      { status: 201 }
    );
  } catch (err) {
    console.error('Error creating blog:', err);
    return NextResponse.json({ success: false, error: 'Failed to create blog.' }, { status: 500 });
  }
}
