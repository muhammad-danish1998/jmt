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
  Sparkles,
  UserCheck,
} from 'lucide-react';

export default function Hero({ onOpenEnroll }) {
  return (
    <section id="home" className="relative bg-[#070b19] text-white pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Decorative Gradient Orbs & Dots Background */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Live Welcome Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Welcome to JMT Public School &amp; College</span>
            </div>

            {/* Main Primary H1 Title */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Quality Education &amp; Bright Futures with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Ziauddin Board
              </span>
            </h1>

            {/* 4 Feature Bullet Points */}
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
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black px-8 py-3.5 rounded-full shadow-lg hover:shadow-amber-500/20 transition-all duration-200 active:scale-95 text-base cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 text-base backdrop-blur-xs"
              >
                <span>Learn More</span>
              </a>
            </div>

            {/* Stats Row with Vertical Separators */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between sm:justify-start sm:gap-6 text-center sm:text-left">
              <div>
                <strong className="text-xl sm:text-2xl font-black text-white block leading-tight">1,000+</strong>
                <span className="text-[11px] sm:text-xs text-slate-300">Students</span>
              </div>
              <span className="h-8 w-px bg-white/15" />
              <div>
                <strong className="text-xl sm:text-2xl font-black text-white block leading-tight">10+</strong>
                <span className="text-[11px] sm:text-xs text-slate-300">Years</span>
              </div>
              <span className="h-8 w-px bg-white/15" />
              <div>
                <strong className="text-xl sm:text-2xl font-black text-amber-400 block leading-tight">ZUEB</strong>
                <span className="text-[11px] sm:text-xs text-slate-300">Affiliation</span>
              </div>
              <span className="h-8 w-px bg-white/15" />
              <div>
                <strong className="text-xl sm:text-2xl font-black text-emerald-400 block leading-tight">20+</strong>
                <span className="text-[11px] sm:text-xs text-slate-300">Services</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Frame with Corner Brackets & Floating Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame Container with Corner Bracket Accents */}
              <div className="relative p-2">
                <div className="corner-bracket corner-bracket-tl" />
                <div className="corner-bracket corner-bracket-tr" />
                <div className="corner-bracket corner-bracket-bl" />
                <div className="corner-bracket corner-bracket-br" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 aspect-[4/3] group">
                  <img
                    src="/school.jpg"
                    alt="JMT Public Higher Secondary School & College Karachi - Ziauddin Board (ZUEB) Campus"
                    width={800}
                    height={600}
                    fetchPriority="high"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />

                  {/* Inside-Image Badge */}
                  <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md border border-amber-400/40 rounded-xl p-3 flex items-center gap-2.5 text-white shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold leading-tight">
                      <span>Ziauddin Board</span><br />
                      <em className="text-amber-300 font-normal not-italic text-[11px]">Certified Academy</em>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 — Student Review (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white text-slate-900 rounded-2xl p-3.5 shadow-2xl border border-slate-100 flex items-center gap-3 animate-float-1 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                  MF
                </div>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <strong className="text-xs font-bold block leading-tight">Muhammad Farhan</strong>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400" />
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500">Top Matric Student</span>
                </div>
              </div>

              {/* Floating Card 2 — Student Count (Bottom Right) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white text-slate-900 rounded-2xl p-3.5 shadow-2xl border border-slate-100 flex items-center gap-3 animate-float-2 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <strong className="text-sm font-black text-slate-900">650+</strong>
                    <span className="text-[10px] font-bold text-emerald-600">Active</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Ziauddin Students</span>
                </div>
              </div>

              {/* Floating Card 3 — Trophy Results (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-slate-900 rounded-2xl p-3.5 shadow-2xl border border-slate-100 flex items-center gap-3 animate-float-1 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block leading-tight">
                    Top Results
                  </strong>
                  <span className="text-[10px] text-slate-500">Every Session</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Wave Transition Divider into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 text-white fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,36 C180,72 360,0 540,36 C720,72 900,0 1080,36 C1260,72 1380,18 1440,36 L1440,72 L0,72 Z" />
        </svg>
      </div>
    </section>
  );
}
