'use client';

import React from 'react';
import {
  GraduationCap,
  School,
  Award,
  BookOpen,
  ArrowRight,
  BookOpenCheck,
} from 'lucide-react';

export default function ClassesWeOffer({ onOpenEnroll }) {
  const programs = [
    {
      id: 'zueb-board',
      title: 'Ziauddin Board',
      badge: 'Board Certified',
      icon: GraduationCap,
      description:
        'Complete preparation for Ziauddin Board (ZUEB) exams with focused curriculum, fast-track streams, and past paper practice.',
      theme: {
        border: 'hover:border-purple-300',
        badge: 'bg-purple-100 text-purple-800 border-purple-200',
        icon: 'bg-purple-600 text-white',
        link: 'text-purple-700 hover:text-purple-900',
      },
    },
    {
      id: 'matric-board',
      title: 'Matric Board',
      badge: 'SSC I & II',
      icon: School,
      description:
        'Comprehensive Matric-level education from Class 9 to 10 (Science & General) with rigorous board exam coaching.',
      theme: {
        border: 'hover:border-emerald-300',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        icon: 'bg-emerald-600 text-white',
        link: 'text-emerald-700 hover:text-emerald-900',
      },
    },
    {
      id: 'intermediate-board',
      title: 'Intermediate',
      badge: 'HSC I & II',
      icon: Award,
      description:
        'Intermediate Pre-Medical & Pre-Engineering with result-oriented coaching for high grades and university entrance.',
      theme: {
        border: 'hover:border-blue-300',
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        icon: 'bg-blue-600 text-white',
        link: 'text-blue-700 hover:text-blue-900',
      },
    },
    {
      id: 'commerce-ics',
      title: 'Commerce & ICS',
      badge: 'I.Com & Science',
      icon: BookOpen,
      description:
        'Specialized Commerce (I.Com) and General Science (ICS) programs providing strong analytical and business fundamentals.',
      theme: {
        border: 'hover:border-amber-300',
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        icon: 'bg-amber-500 text-slate-950',
        link: 'text-amber-700 hover:text-amber-900',
      },
    },
  ];

  return (
    <section id="classes" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <BookOpenCheck className="w-4 h-4 text-indigo-700" />
            <span>Academic Programs</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Academic Programs
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base italic">
            "Providing Quality Education for All Major Boards with Expert Faculty and Modern Learning Methods."
          </p>
        </div>

        {/* 4-Card Grid matching Reference Site */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className={`bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${item.theme.border}`}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 ${item.theme.icon}`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${item.theme.badge}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  {/* Program Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Explore Program CTA Link */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onOpenEnroll}
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:translate-x-1 cursor-pointer ${item.theme.link}`}
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#eligibility"
                    className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    View Criteria
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
