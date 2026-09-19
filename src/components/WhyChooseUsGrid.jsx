'use client';

import React from 'react';
import {
  GraduationCap,
  Users2,
  FileCheck2,
  BadgePercent,
  TrendingUp,
  Target,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function WhyChooseUsGrid({ onOpenEnroll }) {
  const features = [
    {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description: 'Qualified subject specialists and dedicated educators with proven mentoring track records.',
      tag: 'Faculty',
      color: 'bg-blue-50 text-blue-900 border-blue-200',
    },
    {
      icon: Users2,
      title: 'Small Batch Classes',
      description: 'Limited students per class to ensure personalized attention and clear concept building.',
      tag: 'Batches',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      icon: FileCheck2,
      title: 'Board Exam Focus',
      description: 'Specialized syllabus coverage, model papers, and rigorous board examination practice.',
      tag: 'ZUEB',
      color: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    },
    {
      icon: BadgePercent,
      title: 'Affordable Fee Plan',
      description: 'Student-friendly and transparent installment options designed for family convenience.',
      tag: 'Pricing',
      color: 'bg-amber-50 text-amber-900 border-amber-200',
    },
    {
      icon: TrendingUp,
      title: 'Regular Mock Tests',
      description: 'Weekly and monthly assessment tests to monitor student progress and improve exam speed.',
      tag: 'Tests',
      color: 'bg-rose-50 text-rose-800 border-rose-200',
    },
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'Tailored academic counseling for entrance exams, gap recovery, and career pathways.',
      tag: 'Counseling',
      color: 'bg-cyan-50 text-cyan-900 border-cyan-200',
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-900" />
            <span>Why Choose JMT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Study at <span className="text-blue-900">JMT School &amp; College?</span>
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering students with structured Ziauddin Board curriculum, individual mentorship, and career-driven academic excellence.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 ${feature.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    Feature 0{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={onOpenEnroll}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-950 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
