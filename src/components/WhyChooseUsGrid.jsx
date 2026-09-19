'use client';

import React from 'react';
import {
  GraduationCap,
  Users,
  FileText,
  Banknote,
  TrendingUp,
  Target,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function WhyChooseUsGrid({ onOpenEnroll }) {
  const features = [
    {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description: 'Highly qualified teachers dedicated to student success and concept building.',
      iconBg: 'bg-purple-600 text-white',
      cardBorder: 'hover:border-purple-300',
    },
    {
      icon: Users,
      title: 'Small Batch Classes',
      description: 'Limited students per class to ensure individual attention and better understanding.',
      iconBg: 'bg-emerald-600 text-white',
      cardBorder: 'hover:border-emerald-300',
    },
    {
      icon: FileText,
      title: 'Board Exam Focus',
      description: 'Special preparation for Ziauddin Board with model past papers and mock tests.',
      iconBg: 'bg-blue-600 text-white',
      cardBorder: 'hover:border-blue-300',
    },
    {
      icon: Banknote,
      title: 'Affordable Fees',
      description: 'Quality education at reasonable and student-friendly installment fee structure.',
      iconBg: 'bg-amber-500 text-slate-950',
      cardBorder: 'hover:border-amber-300',
    },
    {
      icon: TrendingUp,
      title: 'Regular Tests',
      description: 'Weekly and monthly assessments to track student progress and exam speed.',
      iconBg: 'bg-rose-500 text-white',
      cardBorder: 'hover:border-rose-300',
    },
    {
      icon: Target,
      title: 'Personalized Attention',
      description: 'Customized guidance and academic counseling tailored to each student’s needs.',
      iconBg: 'bg-cyan-600 text-white',
      cardBorder: 'hover:border-cyan-300',
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#070b19] text-white relative overflow-hidden border-b border-slate-800">
      {/* Ambient Background Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Why Choose Us</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">JMT?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            At JMT Public Higher Secondary School &amp; College, we provide quality education with a student-centered approach, following Ziauddin Board standards. Our programs focus on academic excellence and prepare students for admission processes — ensuring they are confident, capable, and ready to succeed.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenEnroll}
              className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-7 py-3 rounded-full shadow-lg transition-all duration-200 active:scale-95 text-sm cursor-pointer"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 transition-all duration-300 flex items-start gap-4 group ${item.cardBorder}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
