'use client';

import React from 'react';
import {
  GraduationCap,
  Phone,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
} from 'lucide-react';

export default function CtaBand({ onOpenEnroll }) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Admissions 2026–2027 Open</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Begin Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
            Academic Journey?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of motivated students at JMT Public Higher Secondary School &amp; College. Secure your admission under <strong>Ziauddin Examination Board (ZUEB)</strong> today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            type="button"
            onClick={onOpenEnroll}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 text-base cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Apply for Admission</span>
          </button>

          <a
            href="tel:03424049132"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 text-base"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call Admissions: 0342-4049132</span>
          </a>
        </div>

        {/* Trust Badges Row */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-center flex-wrap gap-4 sm:gap-8 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ZUEB Certified Center</span>
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-blue-400" />
            <span>1,000+ Students Guided</span>
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>10+ Years Experience</span>
          </span>
        </div>

      </div>
    </section>
  );
}
