'use client';

import React from 'react';
import {
  PenSquare,
  PhoneCall,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
} from 'lucide-react';

export default function CtaBand({ onOpenEnroll }) {
  return (
    <section className="py-20 bg-[#070b19] text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Admissions 2026–27 Open</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Begin Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
            Academic Journey?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Join hundreds of bright students at JMT Public Higher Secondary School &amp; College. Secure your seat today — limited spots available for each program.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={onOpenEnroll}
            className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black px-8 py-3.5 rounded-full shadow-lg hover:shadow-amber-500/20 transition-all duration-200 active:scale-95 text-base cursor-pointer"
          >
            <PenSquare className="w-5 h-5" />
            <span>Apply Now</span>
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95 text-base backdrop-blur-xs"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Trust Points with Separators */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-center flex-wrap gap-4 sm:gap-8 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ziauddin Board Certified</span>
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span>1,000+ Students</span>
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>10+ Years Experience</span>
          </span>
        </div>

      </div>
    </section>
  );
}
