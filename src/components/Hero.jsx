'use client';

import React from 'react';
import {
  ArrowRight,
  GraduationCap,
  Check,
  Award,
  Trophy,
  Star,
} from 'lucide-react';

export default function Hero({ onOpenEnroll }) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#0c0422] via-[#1a0b3e] to-[#2d0e5e] text-white pt-16 pb-28 lg:pt-20 lg:pb-36 overflow-hidden"
    >
      {/* Decorative Gradient Orbs & Subtle Dots Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Live Welcome Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>👋 Welcome to JMT Public School</span>
            </div>

            {/* Main Primary H1 Title */}
            <h1 className="text-3xl sm:text-5xl xl:text-[54px] font-extrabold tracking-tight text-white leading-[1.15]">
              Quality Education &amp; Bright Futures with{' '}
              <span className="text-amber-400 font-extrabold">
                Zia Uddin Board
              </span>
            </h1>

            {/* 4 Feature Bullet Points with Green Checkmark Circles */}
            <ul className="space-y-2.5 text-left text-xs sm:text-sm text-slate-200 font-medium max-w-lg mx-auto lg:mx-0">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Experienced &amp; Qualified Teachers</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Modern Classrooms and Digital Learning</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Strong Academic Results and Exam Support</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Safe, Disciplined and Supportive Environment</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-lg shadow-amber-400/20 transition-all duration-200 active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2a1354]/70 hover:bg-[#341866] text-white border border-purple-400/30 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 text-sm sm:text-base backdrop-blur-sm"
              >
                <span>Learn More</span>
              </a>
            </div>

            {/* Stats Row with Vertical Separators */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between sm:justify-start sm:gap-7 text-center sm:text-left">
              <div>
                <strong className="text-xl sm:text-2xl font-black text-white block leading-tight">1,000+</strong>
                <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold">STUDENTS</span>
              </div>
              <span className="h-8 w-px bg-white/15" />
              <div>
                <strong className="text-xl sm:text-2xl font-black text-white block leading-tight">10+</strong>
                <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold">YEARS</span>
              </div>
              <span className="h-8 w-px bg-white/15" />
              <div>
                <strong className="text-xl sm:text-2xl font-black text-white block leading-tight">4+</strong>
                <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold">CENTERS</span>
              </div>
              <span className="h-8 w-px bg-white/15" />
              <div>
                <strong className="text-xl sm:text-2xl font-black text-white block leading-tight">20+</strong>
                <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold">SERVICES</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Frame with Corner Brackets & 3 Floating Cards */}
          <div className="lg:col-span-6 relative pt-6 sm:pt-10 lg:pt-0">
            <div className="relative mx-auto max-w-md lg:max-w-[480px]">
              
              {/* Image Frame Container with Golden Corner Bracket Accents */}
              <div className="relative p-2.5">
                <div className="corner-bracket corner-bracket-tl" />
                <div className="corner-bracket corner-bracket-tr" />
                <div className="corner-bracket corner-bracket-bl" />
                <div className="corner-bracket corner-bracket-br" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40 bg-slate-900 aspect-[4/3] group">
                  <img
                    src="/hero-students.jpg"
                    alt="JMT Public Higher Secondary School & College Karachi - Ziauddin Board (ZUEB) Students"
                    width={800}
                    height={600}
                    fetchPriority="high"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Inside-Image Bottom Right Badge */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md border border-amber-400/50 rounded-xl px-3 py-2 flex items-center gap-2 text-white shadow-lg">
                    <div className="w-6 h-6 rounded-md bg-amber-400/20 text-amber-400 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="text-[11px] font-bold leading-tight text-left">
                      <span>Zia Uddin Board</span><br />
                      <span className="text-amber-300 font-normal text-[10px]">Certified Academy</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 — Top Left: Duaa Rana / Top Student */}
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-white text-slate-900 rounded-2xl px-4 py-3 shadow-2xl border border-slate-100 flex items-center gap-3 animate-float-1 z-20">
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                  DR
                </div>
                <div className="text-left">
                  <strong className="text-xs font-bold block leading-tight text-slate-900">Duaa Rana</strong>
                  <span className="text-[10px] text-slate-500 block leading-tight">Top Student</span>
                  <div className="flex text-amber-400 mt-0.5">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <Star className="w-3 h-3 fill-amber-400" />
                    <Star className="w-3 h-3 fill-amber-400" />
                    <Star className="w-3 h-3 fill-amber-400" />
                    <Star className="w-3 h-3 fill-amber-400" />
                  </div>
                </div>
              </div>

              {/* Floating Card 2 — Right Center: 650+ Zia Uddin Students */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-8 bg-white text-slate-900 rounded-2xl px-4 py-3 shadow-2xl border border-slate-100 flex items-center gap-3 animate-float-2 z-20">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <strong className="text-sm font-black text-slate-900 leading-tight block">650+</strong>
                  <span className="text-[10px] text-slate-500 font-medium leading-tight">Zia Uddin Students</span>
                </div>
              </div>

              {/* Floating Card 3 — Bottom Left: Top Results / Every Session */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 bg-white text-slate-900 rounded-2xl px-4 py-3 shadow-2xl border border-slate-100 flex items-center gap-3 animate-float-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-xs">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <strong className="text-xs font-bold text-slate-900 block leading-tight">
                    Top Results
                  </strong>
                  <span className="text-[10px] text-slate-500 leading-tight">Every Session</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Smooth White Wave Transition Divider into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-16 text-slate-50 fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,75 480,10 720,40 C960,70 1200,15 1440,35 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
