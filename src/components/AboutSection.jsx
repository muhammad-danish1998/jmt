'use client';

import React from 'react';
import {
  GraduationCap,
  Users,
  Trophy,
  ShieldCheck,
  Star,
  ArrowRight,
  Sparkles,
  Chalkboard,
  BookOpen,
} from 'lucide-react';

export default function AboutSection({ onOpenEnroll }) {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Media / Image Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Corner Bracket Frame */}
              <div className="relative p-2">
                <div className="corner-bracket corner-bracket-tl" />
                <div className="corner-bracket corner-bracket-tr" />
                <div className="corner-bracket corner-bracket-bl" />
                <div className="corner-bracket corner-bracket-br" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-[4/3] group">
                  <img
                    src="/hm.jpg"
                    alt="JMT Public Higher Secondary School & College Campus Building"
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Academic Leadership
                    </span>
                    <h4 className="text-base font-bold text-white">
                      Committed to Student Mentorship &amp; Board Excellence
                    </h4>
                  </div>
                </div>
              </div>

              {/* Experience Badge (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-4 shadow-xl border border-blue-900 flex items-center gap-3">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 leading-none">
                  10+
                </div>
                <div className="text-xs font-bold leading-tight text-slate-100">
                  Years of<br />Excellence
                </div>
              </div>

              {/* Mini Active Students Card (Bottom Left) */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-black text-slate-900 block leading-tight">
                    650+
                  </strong>
                  <span className="text-[11px] text-slate-500 font-medium">Active Students</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content Side */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-indigo-600 rounded-full inline-block" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                About JMT Public School &amp; College
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Building Future Leaders Under{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-700">
                Ziauddin Board
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              JMT Public Higher Secondary School &amp; College proudly delivers high-quality education under the <strong>Ziauddin Examination Board (ZUEB)</strong>. We focus on academic excellence, character development, and modern learning to prepare every student for a confident and successful future.
            </p>

            {/* 4 Colored Feature Boxes matching Reference Site */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left pt-1">
              
              {/* Feature 1: Purple */}
              <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Qualified Faculty</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600">Experienced teachers dedicated to student excellence.</p>
                </div>
              </div>

              {/* Feature 2: Green */}
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Modern Classrooms</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600">Smart boards and digital learning environment.</p>
                </div>
              </div>

              {/* Feature 3: Amber */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Academic Excellence</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600">Consistent top results in board examinations.</p>
                </div>
              </div>

              {/* Feature 4: Pink / Rose */}
              <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Safe Environment</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600">Disciplined, inclusive and supportive campus.</p>
                </div>
              </div>

            </div>

            {/* CTA + Trust Reviews */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-950 hover:to-indigo-950 text-white font-bold px-7 py-3 rounded-full shadow-md transition-all duration-200 active:scale-95 text-sm cursor-pointer"
              >
                <span>Explore Academy</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Trusted by 650+ families
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
