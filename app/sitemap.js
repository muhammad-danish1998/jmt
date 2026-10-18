import { SITE } from '../src/lib/site';
import { getSupabase } from '../src/lib/supabase';

export const revalidate = 3600; // revalidate sitemap every hour

export default async function sitemap() {
  const baseUrl = SITE.url;
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/eligibility`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eligibility/annual-1-2027`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eligibility/annual-2-2026`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/date-sheet`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/date-sheet/annual-2-2026/hssc`,
      lastModified: new Date('2026-10-01').toISOString(),
      changeFrequency: 'weekly',
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
      priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch (err) {
    console.error('Error generating dynamic sitemap:', err);
    return staticRoutes;
  }
}
