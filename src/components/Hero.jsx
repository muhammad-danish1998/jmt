'use client';

import React from 'react';
import {
  ArrowRight,
  GraduationCap,
  Check,
  Award,
  Trophy,
  Users,
  Star,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

export default function Hero({ onOpenEnroll }) {
  return (
    <section id="home" className="relative bg-white py-12 lg:py-20 overflow-hidden border-b border-slate-200">
      {/* Decorative Background Orbs & Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Session Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Academic Session 2026 - 2027 • Ziauddin Board (ZUEB)</span>
            </div>

            {/* Main Primary H1 Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Quality Education &amp; Bright Futures with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950">
                  Ziauddin Board
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-700 tracking-tight">
                Classes IX, X, XI &amp; XII • Regular, Private &amp; Combine Gap Streams
              </p>
            </div>

            {/* 4 Feature Bullet Points inspired by Reference Site */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left text-sm text-slate-700 font-medium pt-1">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Experienced &amp; Qualified Educators</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Modern Labs &amp; Digital Classrooms</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Proven Results &amp; Past Paper Coaching</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Safe, Disciplined &amp; Ethical Campus</span>
              </li>
            </ul>

            {/* Value Proposition Highlight Card */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    Complete Your Matriculation or Intermediate in Just{' '}
                    <span className="text-blue-900 font-black underline decoration-amber-400 decoration-2">
                      3 Months*
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 leading-normal">
                    *Fast-track preparation subject to Ziauddin Board eligibility guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 text-base cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#eligibility"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-950 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xs hover:shadow transition-all duration-200 active:scale-95 text-base"
              >
                <span>Check Eligibility Criteria</span>
              </a>
            </div>

            {/* Quick Hero Statistics Strip */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto lg:mx-0 text-center sm:text-left">
              <div>
                <strong className="text-lg sm:text-2xl font-black text-slate-900 block leading-tight">1,000+</strong>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Enrolled Students</span>
              </div>
              <div className="border-l border-slate-200 pl-2 sm:pl-4">
                <strong className="text-lg sm:text-2xl font-black text-slate-900 block leading-tight">10+</strong>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Years Excellence</span>
              </div>
              <div className="border-l border-slate-200 pl-2 sm:pl-4">
                <strong className="text-lg sm:text-2xl font-black text-blue-900 block leading-tight">ZUEB</strong>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Certified Center</span>
              </div>
              <div className="border-l border-slate-200 pl-2 sm:pl-4">
                <strong className="text-lg sm:text-2xl font-black text-amber-600 block leading-tight">100%</strong>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Board Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Frame with Corner Accents & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16/12] group">
                <img
                  src="/school.jpg"
                  alt="JMT Public Higher Secondary School & College Karachi - Ziauddin Board (ZUEB) Campus"
                  width={800}
                  height={600}
                  fetchPriority="high"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/90 text-amber-300 text-xs font-bold border border-blue-700/60 w-fit mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Ziauddin Board Certified Center</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    JMT Public Higher Secondary School &amp; College
                  </h3>
                  <p className="text-xs text-slate-200">
                    Quaidabad, Bin Qasim, Malir, Karachi
                  </p>
                </div>
              </div>

              {/* Floating Card 1 — Top Board Results (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200 shadow-xs">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block leading-tight">
                    Top Board Results
                  </strong>
                  <span className="text-[11px] text-slate-500">Every Exam Session</span>
                </div>
              </div>

              {/* Floating Card 2 — Active Students (Bottom Right) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-700 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200 shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <strong className="text-xs font-black text-slate-900">650+</strong>
                    <span className="text-[11px] font-bold text-emerald-600">Active</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Ziauddin Board Students</span>
                </div>
              </div>

              {/* Floating Card 3 — 5 Star Rating (Bottom Left) */}
              <div className="absolute -bottom-6 left-4 bg-slate-900/90 backdrop-blur-md text-white rounded-xl px-3.5 py-2 shadow-lg border border-slate-700 flex items-center gap-2 hidden lg:flex">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="text-[11px] font-semibold text-slate-200">
                  Trusted by Parents
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
