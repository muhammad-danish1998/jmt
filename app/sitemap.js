import { getSupabase } from '../src/lib/supabase';

export const revalidate = 3600; // revalidate sitemap every hour

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jmt-pink.vercel.app';
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  try {
    const supabase = getSupabase();
    if (!supabase) return staticRoutes;

    const { data: blogs } = await supabase
      .from('blogs')
      .select('slug, updated_at, created_at')
      .order('created_at', { ascending: false });

    if (!blogs || blogs.length === 0) {
      return staticRoutes;
    }

    const blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: blog.updated_at || blog.created_at || currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch (err) {
    console.error('Error generating dynamic sitemap:', err);
    return staticRoutes;
  }
}
