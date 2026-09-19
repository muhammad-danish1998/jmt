'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import TopBar from '../../../src/components/TopBar';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import ScrollToTop from '../../../src/components/ScrollToTop';
import FloatingWhatsApp from '../../../src/components/FloatingWhatsApp';
import EnrollmentModal from '../../../src/components/EnrollmentModal';
import { BLOG_CATEGORIES } from '../../../src/data/blogsData';
import { sanitizeHtml } from '../../../src/lib/sanitizeHtml';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Share2,
  CheckCircle2,
  Tag,
  BookOpen,
  ChevronRight,
  Loader2,
} from 'lucide-react';

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params?.slug;

  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const handleOpenEnroll = () => setIsEnrollModalOpen(true);
  const handleCloseEnroll = () => setIsEnrollModalOpen(false);

  const [article, setArticle] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleAndBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success && Array.isArray(data.blogs)) {
          setAllBlogs(data.blogs);
          const found = data.blogs.find((p) => p.slug === slug);
          setArticle(found || null);
        }
      } catch (err) {
        console.error('Failed to load article:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticleAndBlogs();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 text-center space-y-3">
        <Loader2 className="w-9 h-9 animate-spin text-indigo-600" />
        <p className="text-sm font-semibold text-slate-600">Loading Article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h2>
        <p className="text-slate-600 mb-6 max-w-md">
          The requested article could not be located or may have been updated.
        </p>
        <a
          href="/blogs"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-md transition-all"
        >
          ← Return to All Blogs
        </a>
      </div>
    );
  }

  // Recent Articles (excluding current)
  const recentArticles = allBlogs.filter((p) => p.id !== article.id).slice(0, 4);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jmt-pink.vercel.app';
  const articleUrl = `${siteUrl}/blogs/${article.slug}`;

  // Article JSON-LD Structured Data Schema for Google Search
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    headline: article.title,
    description: article.excerpt || article.title,
    image: article.image?.startsWith('http') ? article.image : `${siteUrl}${article.image || '/hero-students.jpg'}`,
    author: {
      '@type': 'Person',
      name: article.author || 'JMT Academic Team',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'JMT Public Higher Secondary School & College',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/hero-students.jpg`,
      },
    },
    datePublished: article.created_at,
    dateModified: article.updated_at || article.created_at,
    articleSection: article.category || 'Education',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogs',
        item: `${siteUrl}/blogs`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Top Announcement & Header */}
      <TopBar onOpenEnroll={handleOpenEnroll} />
      <Navbar onOpenEnroll={handleOpenEnroll} />

      {/* 2. Article Hero Banner */}
      <header className="relative bg-gradient-to-br from-[#0c0422] via-[#1a0b3e] to-[#2d0e5e] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="/blogs" className="hover:text-white transition-colors">Blogs</a>
            <span>/</span>
            <span className="text-amber-400 truncate max-w-xs">{article.title}</span>
          </div>

          {/* Category Tag */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wide shadow-sm">
              <Tag className="w-3 h-3" />
              <span>{article.category}</span>
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] max-w-4xl">
            {article.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-300 border-t border-white/10 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[10px] shadow-xs">
                {article.author_avatar || 'JA'}
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">WRITTEN BY</span>
                <strong className="text-white text-xs font-semibold">{article.author || 'JMT Academic Team'}</strong>
              </div>
            </div>

            <div className="h-6 w-px bg-white/15" />

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">PUBLISHED</span>
                <strong className="text-white text-xs font-semibold">
                  {new Date(article.created_at).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </strong>
              </div>
            </div>

            <div className="h-6 w-px bg-white/15" />

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">READ TIME</span>
                <strong className="text-white text-xs font-semibold">{article.read_time || '5 min read'}</strong>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 3. Main Body Container (2-Columns Layout) */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left / Main Article Column (8 Cols) */}
          <article className="lg:col-span-8 space-y-8 text-left">
            
            {/* Top Primary Featured Image */}
            <div className="bg-white rounded-[24px] sm:rounded-[30px] p-2.5 shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
              <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[16/10] bg-slate-900">
                <img
                  src={article.image || '/hero-students.jpg'}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Secondary Visual Image (if exists) */}
            {article.secondary_image && (
              <div className="bg-white rounded-[24px] sm:rounded-[30px] p-2.5 shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
                <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src={article.secondary_image}
                    alt={`${article.title} Visual Guide`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Introduction Excerpt */}
            {article.excerpt && (
              <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-sm border border-slate-100">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {article.excerpt}
                </p>
              </div>
            )}

            {/* Featured Snippet Answer Callout Box */}
            {article.snippet_answer && (
              <div className="bg-gradient-to-r from-indigo-50/90 via-purple-50/70 to-indigo-50/90 rounded-[24px] p-6 sm:p-8 border-2 border-indigo-200 shadow-sm relative space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-base sm:text-lg font-black text-indigo-950">
                    Featured Snippet Answer
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  {article.snippet_answer}
                </p>
              </div>
            )}

            {/* Key Takeaways Box */}
            {article.key_takeaways && article.key_takeaways.length > 0 && (
              <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  Key Takeaways
                </h3>
                <ul className="space-y-2.5">
                  {article.key_takeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Rich Article Body */}
            <div
              className="bg-white rounded-[28px] p-6 sm:p-10 shadow-sm border border-slate-100 text-slate-700 leading-relaxed space-y-5 text-sm sm:text-base prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
            />

            {/* Article Footer Actions */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="/blogs"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-xs sm:text-sm font-bold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </a>

              <button
                type="button"
                onClick={handleOpenEnroll}
                className="btn-shine bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-7 py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Apply for Admission Now
              </button>
            </div>

          </article>

          {/* Right Sidebar Column (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 text-left">
            
            {/* Top Back Pill Button */}
            <a
              href="/blogs"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-xs sm:text-sm transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Blogs</span>
            </a>

            {/* Widget 1: Quick Info Card */}
            <div className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-md">
              <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <span>📊 Quick Info</span>
              </div>
              <div className="p-5 space-y-3.5 text-xs text-slate-700 divide-y divide-slate-100">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>PUBLISHED</span>
                  </span>
                  <strong className="text-slate-900">
                    {new Date(article.created_at).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </strong>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
                    <span>READ TIME</span>
                  </span>
                  <strong className="text-slate-900">{article.read_time || '5 min read'}</strong>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-indigo-500" />
                    <span>CATEGORY</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[11px]">
                    {article.category}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-indigo-500" />
                    <span>AUTHOR</span>
                  </span>
                  <strong className="text-slate-900">{article.author || 'JMT Academic Team'}</strong>
                </div>
              </div>
            </div>

            {/* Widget 2: Recent Articles Card */}
            {recentArticles.length > 0 && (
              <div className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-md">
                <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                  <span>🔥 Recent Articles</span>
                </div>
                <div className="p-4 space-y-3 divide-y divide-slate-100">
                  {recentArticles.map((rec) => (
                    <a
                      key={rec.id}
                      href={`/blogs/${rec.slug}`}
                      className="pt-3 first:pt-0 flex items-center gap-3 group hover:bg-slate-50/80 p-2 rounded-xl transition-colors"
                    >
                      <div className="w-14 h-12 rounded-lg overflow-hidden bg-slate-800 shrink-0">
                        <img
                          src={rec.image || '/hero-students.jpg'}
                          alt={rec.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-tight">
                          {rec.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5" />
                          {new Date(rec.created_at).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                          })}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Widget 3: Categories Card */}
            <div className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-md">
              <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <span>📂 Categories</span>
              </div>
              <div className="p-4 space-y-2">
                {BLOG_CATEGORIES.filter((c) => c !== 'All Posts').map((cat) => (
                  <a
                    key={cat}
                    href="/blogs"
                    className="flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cat}</span>
                    </div>
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-[10px] flex items-center justify-center font-bold">
                      {allBlogs.filter((p) => p.category === cat).length}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Widget 4: Admissions Open CTA Card */}
            <div className="bg-gradient-to-br from-[#4323b6] via-[#6335d8] to-[#361a99] text-white rounded-[24px] p-6 shadow-xl shadow-indigo-500/20 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-amber-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">
                Admissions Open!
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Join JMT Academy &amp; College today and build a bright academic future with Ziauddin Board.
              </p>
              <button
                type="button"
                onClick={handleOpenEnroll}
                className="w-full btn-shine bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 px-4 rounded-full text-xs shadow-md transition-all active:scale-95 cursor-pointer mt-2"
              >
                Apply Now →
              </button>
            </div>

          </aside>

        </div>
      </main>

      {/* 4. Footer & Modals */}
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={handleCloseEnroll}
      />
    </div>
  );
}

