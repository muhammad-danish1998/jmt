'use client';

import React from 'react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Muhammad Farhan',
      role: 'Parent of Grade X Student',
      stream: 'Matric Science (ZUEB)',
      quote:
        'JMT Public School & College provides a disciplined and supportive academic environment. The teachers give individual attention to students, and my son passed his board exams with outstanding grades.',
      rating: 5,
      avatarBg: 'bg-blue-900 text-white',
      initials: 'MF',
    },
    {
      name: 'Ayesha Siddiqui',
      role: 'Intermediate Student',
      stream: 'FSC Pre-Medical (HSSC)',
      quote:
        'The fast-track coaching and weekly mock tests made a huge difference. Conceptual clarity in biology and chemistry helped me prepare confidently for both board and medical university entrance exams.',
      rating: 5,
      avatarBg: 'bg-amber-500 text-slate-950',
      initials: 'AS',
    },
    {
      name: 'Bilal Ahmed',
      role: 'Private Candidate',
      stream: 'Combine Gap (SSC I & II)',
      quote:
        'After a 3-year gap, I was worried about completing my matriculation. JMT administration guided me step-by-step through the Ziauddin Board combine gap registration and admit card process without any hassle.',
      rating: 5,
      avatarBg: 'bg-emerald-700 text-white',
      initials: 'BA',
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Student &amp; Parent Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Parents &amp; Students Say
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Real experiences from students and families about the quality education and board coaching at JMT School &amp; College.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-slate-300 group-hover:text-blue-200 transition-colors mb-4" />

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                "{rev.quote}"
              </p>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-xs ${rev.avatarBg}`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {rev.name}
                    </h4>
                    <span className="text-xs text-slate-500 block">
                      {rev.role}
                    </span>
                    <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 inline-block mt-1">
                      {rev.stream}
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
