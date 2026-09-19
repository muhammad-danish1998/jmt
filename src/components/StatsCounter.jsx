'use client';

import React from 'react';
import { Users, MapPin, Award, Star } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      icon: Users,
      value: '1,000+',
      label: 'Happy Students',
      theme: 'border-purple-200 hover:border-purple-400',
      iconWrap: 'bg-purple-100 text-purple-700',
      accentLine: 'bg-purple-600',
      glow: 'from-purple-50 to-white',
    },
    {
      icon: MapPin,
      value: '4+',
      label: 'Academic Streams',
      theme: 'border-emerald-200 hover:border-emerald-400',
      iconWrap: 'bg-emerald-100 text-emerald-700',
      accentLine: 'bg-emerald-600',
      glow: 'from-emerald-50 to-white',
    },
    {
      icon: Star,
      value: '20+',
      label: 'Special Services',
      theme: 'border-amber-200 hover:border-amber-400',
      iconWrap: 'bg-amber-100 text-amber-800',
      accentLine: 'bg-amber-500',
      glow: 'from-amber-50 to-white',
    },
    {
      icon: Award,
      value: '10+',
      label: 'Years of Experience',
      theme: 'border-blue-200 hover:border-blue-400',
      iconWrap: 'bg-blue-100 text-blue-700',
      accentLine: 'bg-blue-600',
      glow: 'from-blue-50 to-white',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#070b19] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Ambient Orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden shadow-lg"
              >
                {/* Colored Icon Wrap */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md ${item.iconWrap}`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Number */}
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="text-xs sm:text-sm font-semibold text-slate-300">
                  {item.label}
                </p>

                {/* Bottom Decorative Color Line */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-t-full transition-all duration-300 group-hover:w-full ${item.accentLine}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
