'use client';

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  User,
  Search,
  Tag,
  Loader2,
  ChevronRight,
  PenSquare,
} from 'lucide-react';
import { BLOG_CATEGORIES } from '../data/blogsData';

export default function BlogsSection({ onOpenEnroll }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.success && Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const featuredPost = blogs.find((post) => post.featured) || blogs[0];

  const filteredPosts = blogs.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch =
      (post.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.category || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/50">
      
      {/* 1. Blogs Hero Header */}
      <section className="relative bg-gradient-to-br from-[#0c0422] via-[#1a0b3e] to-[#2d0e5e] text-white pt-14 pb-20 lg:pt-18 lg:pb-24 overflow-hidden text-center">
        {/* Ambient Glow & Dots Pattern */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          
          {/* Breadcrumb & Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Latest Blogs</span>
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>POSTS &amp; INSIGHTS</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Latest <span className="text-amber-400">Blogs</span> &amp; Articles
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Stay updated with educational insights, exam tips, school news, and academic guidance from <strong>JMT Public School &amp; College</strong>.
          </p>

          {/* 3 Quick Benefit Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-300 font-medium">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              🎓 Educational Insights
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              📝 Exam Tips
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              🏫 School News
            </span>
          </div>

        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-20 pb-24 space-y-12">
        
        {loading ? (
          <div className="bg-white rounded-[28px] p-16 shadow-xl border border-slate-100 text-center space-y-3">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-600" />
            <p className="text-sm font-semibold text-slate-600">Loading Articles from Database...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-white rounded-[28px] p-12 sm:p-16 shadow-xl border border-slate-100 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">No Articles Published Yet</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              All demo articles have been cleared. As an admin, you can write and publish rich blog posts directly from your Admin Dashboard.
            </p>
            <div className="pt-2">
              <a
                href="/admin"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-7 py-3 rounded-full text-sm shadow-md transition-all active:scale-95"
              >
                <PenSquare className="w-4 h-4" />
                <span>Open Admin Portal to Write a Blog</span>
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* 2. Featured Post Spotlight Card */}
            {featuredPost && (
              <div className="bg-white rounded-[28px] sm:rounded-[32px] shadow-xl shadow-slate-200/70 border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Featured Image */}
                  <div className="lg:col-span-6 relative bg-slate-900 min-h-[260px] sm:min-h-[320px] overflow-hidden group">
                    <img
                      src={featuredPost.image || '/hero-students.jpg'}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>FEATURED</span>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-100">
                          📌 Featured Post
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                          {featuredPost.category}
                        </span>
                      </div>

                      <a
                        href={`/blogs/${featuredPost.slug}`}
                        className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer leading-snug block"
                      >
                        {featuredPost.title}
                      </a>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                          {featuredPost.author_avatar || 'JA'}
                        </div>
                        <div className="text-left">
                          <strong className="text-xs font-bold text-slate-900 block leading-tight">
                            {featuredPost.author || 'JMT Academic Team'}
                          </strong>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(featuredPost.created_at).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>

                      <a
                        href={`/blogs/${featuredPost.slug}`}
                        className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* 3. Filter Category Tabs & Count */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-b border-slate-200/80 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-full border border-slate-200">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>{filteredPosts.length} Articles Found</span>
              </div>
            </div>

            {/* 4. Blog Posts Grid (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <a
                      href={`/blogs/${post.slug}`}
                      className="block relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
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
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 cursor-pointer transition-colors group-hover:translate-x-1"
                    >
                      <span>Read More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </article>
              ))}
            </div>
          </>
        )}

      </div>

    </div>
  );
}
