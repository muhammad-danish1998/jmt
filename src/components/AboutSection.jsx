'use client';

import React from 'react';
import {
  GraduationCap,
  Users,
  Award,
  Chalkboard,
  ShieldCheck,
  Star,
  ArrowRight,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export default function AboutSection({ onOpenEnroll }) {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Qualified Faculty',
      desc: 'Highly experienced educators dedicated to student conceptual clarity.',
      color: 'bg-blue-50 text-blue-900 border-blue-200',
    },
    {
      icon: BookOpen,
      title: 'Modern Classrooms',
      desc: 'Interactive smart learning spaces and equipped science laboratories.',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      desc: 'Consistent top grades and tailored guidance for board examinations.',
      color: 'bg-amber-50 text-amber-900 border-amber-200',
    },
    {
      icon: ShieldCheck,
      title: 'Safe Environment',
      desc: 'Disciplined, supportive, and holistic campus culture.',
      color: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    },
  ];

  return (
    <section id="about-leadership" className="py-16 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Media with Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-[4/3] group">
                <img
                  src="/hm.jpg"
                  alt="Academic Leadership - JMT Public Higher Secondary School & College Karachi"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Academic Leadership
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Committed to Student Mentorship &amp; Growth
                  </h4>
                </div>
              </div>

              {/* Experience Badge (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-4 shadow-xl border border-blue-950 flex items-center gap-3">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 leading-none">
                  10+
                </div>
                <div className="text-xs font-bold leading-tight">
                  Years of<br />Excellence
                </div>
              </div>

              {/* Active Students Mini Card (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200 shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-black text-slate-900 block leading-tight">
                    650+ Active
                  </strong>
                  <span className="text-xs text-slate-500 font-medium">Enrolled Students</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-900" />
                <span>About JMT Public School &amp; College</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building Future Leaders Under{' '}
                <span className="text-blue-900">Ziauddin Board (ZUEB)</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                JMT Public Higher Secondary School &amp; College is committed to delivering quality education with rigorous academic standards in Karachi. Affiliated with <strong>Ziauddin Examination Board (ZUEB)</strong>, we nurture critical thinking, ethical integrity, and exam mastery to prepare every student for higher professional careers.
              </p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action & Trust Reviews */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenEnroll}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold px-6 py-3 rounded-xl shadow-xs transition-all duration-200 active:scale-95 text-sm cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Trusted by 650+ Families
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
