'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';

export default function BlogPreviewSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success && Array.isArray(data.blogs)) {
          setBlogs(data.blogs.slice(0, 3));
        }
      } catch (err) {
        console.error('Failed to load latest blog preview:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestBlogs();
  }, []);

  if (loading || blogs.length === 0) {
    return null; // Only show on homepage if there are published blogs
  }

  return (
    <section id="blogs" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>POSTS &amp; INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
              Latest <span className="text-amber-500">Blogs</span> &amp; Articles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Educational insights, exam tips, and board guidance from JMT Public School &amp; College.
            </p>
          </div>

          <div>
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-indigo-900 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <a
                  href={`/blogs/${post.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-slate-900"
                >
                  <img
                    src={post.image || '/hero-students.jpg'}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                    {post.category}
                  </div>
                </a>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  {/* Meta: Date & Read Time */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-indigo-500" />
                      {new Date(post.created_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-indigo-500" />
                      {post.read_time || '5 min read'}
                    </span>
                  </div>

                  {/* Title */}
                  <a href={`/blogs/${post.slug}`} className="block">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </a>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-50 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px]">
                    {post.author_avatar || 'JA'}
                  </div>
                  <span className="text-xs font-bold text-slate-700">{post.author || 'JMT Academic Team'}</span>
                </div>

                <a
                  href={`/blogs/${post.slug}`}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 transition-colors group-hover:translate-x-1"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

