'use client';

import React from 'react';
import { Users, Award, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      icon: Users,
      value: '1,000+',
      label: 'Enrolled Students',
      description: 'Secondary & Higher Secondary',
      color: 'from-blue-600 to-blue-900',
      iconBg: 'bg-blue-100 text-blue-900 border-blue-200',
    },
    {
      icon: Building2,
      value: '10+',
      label: 'Years of Excellence',
      description: 'Educational leadership in Karachi',
      color: 'from-emerald-600 to-teal-900',
      iconBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      icon: Award,
      value: '100%',
      label: 'Board Exam Guidance',
      description: 'Comprehensive past paper practice',
      color: 'from-amber-500 to-amber-700',
      iconBg: 'bg-amber-100 text-amber-900 border-amber-200',
    },
    {
      icon: ShieldCheck,
      value: '20+',
      label: 'Facilities & Labs',
      description: 'Modern high-tech campus',
      color: 'from-indigo-600 to-slate-900',
      iconBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 border transition-transform duration-300 group-hover:scale-110 shadow-xs ${stat.iconBg}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-bold text-slate-800 mb-0.5">
                  {stat.label}
                </p>
                <span className="text-[11px] sm:text-xs text-slate-500">
                  {stat.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
