'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
  ChevronRight,
  PenSquare,
} from 'lucide-react';
import { BLOG_CATEGORIES } from '../data/blogsData';

export default function BlogsSection({ initialBlogs = [] }) {
  const [blogs] = useState(initialBlogs);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogs.find((post) => post.featured) || blogs[0];

  const filteredPosts = blogs.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Posts' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      (post.title || '').toLowerCase().includes(q) ||
      (post.excerpt || '').toLowerCase().includes(q) ||
      (post.category || '').toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FAFAF7] text-[#17202A]">
      {/* 1. Header Hero */}
      <section className="w-full bg-white border-b border-[#E5E7EB] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="w-6 sm:w-7 h-[2px] bg-[#C89B3C] block" />
            <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
              Academic Insights &amp; Guidance
            </p>
            <span className="w-6 sm:w-7 h-[2px] bg-[#C89B3C] block" />
          </div>

          {/* Heading */}
          <h1 className="m-0 mt-3 sm:mt-4 text-[30px] sm:text-[40px] lg:text-[48px] leading-[38px] sm:leading-[48px] lg:leading-[56px] font-extrabold tracking-[-0.015em] text-[#17202A]">
            Educational Blogs &amp;{' '}
            <span className="text-[#0B3D26]">Examination Guides</span>
          </h1>

          {/* Subtext */}
          <p className="m-0 mt-3 sm:mt-4 max-w-[620px] mx-auto text-base sm:text-lg leading-[26px] sm:leading-7 text-[#3A4551]">
            Official information on Ziauddin Board (ZUEB) admissions, Matric vs O-Level comparisons, exam preparation tips, and student guidance.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-[#8291A3] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, topics, or board rules..."
              className="w-full h-12 pl-11 pr-4 rounded-full bg-[#FAFAF7] border border-[#CFE0D6] text-sm text-[#17202A] placeholder-[#8291A3] focus:outline-none focus:border-[#0B3D26] focus:ring-2 focus:ring-[#C89B3C] transition-all shadow-2xs"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-10 sm:py-14 space-y-10 sm:space-y-12">
        {blogs.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 sm:p-14 border border-[#CFE0D6] text-center max-w-xl mx-auto space-y-4 shadow-xs">
            <div className="w-14 h-14 bg-[#EAF2ED] text-[#0B3D26] rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#17202A]">
              Articles Loading or Empty
            </h3>
            <p className="text-sm text-[#5E6873] leading-relaxed">
              New articles are published through the JMT admin portal.
            </p>
            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 bg-[#0B3D26] hover:bg-[#082d1c] text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-xs transition-all active:scale-95"
              >
                <PenSquare className="w-4 h-4" />
                <span>Open Admin Portal</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Featured Post Card */}
            {featuredPost && selectedCategory === 'All Posts' && !searchQuery && (
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#CFE0D6] shadow-sm overflow-hidden hover:shadow-md transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Featured Image */}
                  <div className="lg:col-span-6 relative bg-[#EAF2ED] min-h-[240px] sm:min-h-[300px] overflow-hidden group">
                    <Image
                      src={featuredPost.image || '/hero-students.jpg'}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B3D26] text-white text-[11px] font-bold uppercase tracking-wide px-3.5 py-1 rounded-full shadow-xs">
                      Featured Guide
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between gap-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EAF2ED] text-[#0B3D26] border border-[#CFE0D6]">
                          {featuredPost.category}
                        </span>
                      </div>

                      <Link
                        href={`/blogs/${featuredPost.slug}`}
                        className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#17202A] hover:text-[#0B3D26] transition-colors leading-snug block"
                      >
                        {featuredPost.title}
                      </Link>

                      <p className="text-sm sm:text-base text-[#3A4551] leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-[#0B3D26] font-bold flex items-center justify-center text-xs">
                          {featuredPost.author_avatar || 'JA'}
                        </div>
                        <div className="text-left">
                          <strong className="text-xs font-bold text-[#17202A] block leading-tight">
                            {featuredPost.author || 'JMT Academic Team'}
                          </strong>
                          <span className="text-[11px] text-[#5E6873] flex items-center gap-1 mt-0.5">
                            <Calendar className="w-3 h-3 text-[#2E6B4A]" />
                            {new Date(featuredPost.created_at).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/blogs/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 bg-[#0B3D26] hover:bg-[#082d1c] text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-xs transition-all active:scale-95"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Category Filter Tabs & Article Count */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-b border-[#E5E7EB] pb-5">
              <div className="flex flex-wrap items-center gap-2">
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`min-h-[38px] px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0B3D26] text-white shadow-xs'
                        : 'bg-white hover:bg-[#EAF2ED]/60 text-[#3A4551] border border-[#CFE0D6]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="text-xs font-bold text-[#5E6873] flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-full border border-[#CFE0D6] shrink-0">
                <BookOpen className="w-3.5 h-3.5 text-[#2E6B4A]" />
                <span>{filteredPosts.length} Guides Available</span>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#CFE0D6] shadow-2xs hover:shadow-md hover:border-[#2E6B4A] transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="block relative aspect-[16/10] overflow-hidden bg-[#EAF2ED]"
                    >
                      <Image
                        src={post.image || '/hero-students.jpg'}
                        alt={post.title}
                        fill
                        unoptimized={Boolean(post.image && (post.image.startsWith('http') || post.image.startsWith('data:')))}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-[#CFE0D6] text-[#0B3D26] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                        {post.category}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-[#5E6873] font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#2E6B4A]" />
                          {new Date(post.created_at).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#2E6B4A]" />
                          {post.read_time || '5 min read'}
                        </span>
                      </div>

                      <Link href={`/blogs/${post.slug}`} className="block">
                        <h3 className="text-base sm:text-lg font-bold text-[#17202A] group-hover:text-[#0B3D26] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm text-[#3A4551] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-[#E5E7EB] mt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#5E6873]">
                      {post.author || 'JMT Academic Team'}
                    </span>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-xs sm:text-sm font-bold text-[#0B3D26] hover:text-[#2E6B4A] inline-flex items-center gap-1 transition-colors group-hover:translate-x-1"
                    >
                      <span>Read Guide</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
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
