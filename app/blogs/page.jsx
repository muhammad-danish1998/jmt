import React from 'react';
import Navbar from '../../src/components/Navbar';
import BlogsSection from '../../src/components/BlogsSection';
import Footer from '../../src/components/Footer';
import ScrollToTop from '../../src/components/ScrollToTop';
import FloatingWhatsApp from '../../src/components/FloatingWhatsApp';
import { getSupabase } from '../../src/lib/supabase';

export const revalidate = 3600;

async function getBlogs() {
  try {
    const supabase = getSupabase();
    if (!supabase) return [];
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Server error fetching blogs:', error);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error('Unexpected error in getBlogs server component:', err);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] selection:bg-[#0B3D26] selection:text-white">
      {/* Header / Navbar */}
      <Navbar />

      {/* Blogs Section (Server rendered with client interactivity) */}
      <main id="main-content" className="flex-grow">
        <BlogsSection initialBlogs={blogs} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Utility Floating Widgets */}
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}
