'use client';

import React, { useState } from 'react';
import { Star, Quote, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: 'Ali Khan',
      role: 'Parent of Matric Student',
      quote:
        'JMT Public Higher Secondary School & College provides an excellent learning environment. The teachers are highly professional and very supportive. My child\'s academic performance improved significantly under Ziauddin Board curriculum.',
      avatarColor: 'bg-purple-600 text-white',
      initials: 'AK',
    },
    {
      name: 'Sara Ahmed',
      role: 'Intermediate Student',
      quote:
        'The small class sizes and personal attention make learning much easier. The teachers explain every topic clearly and help us prepare for board exams with past papers and regular assessments.',
      avatarColor: 'bg-emerald-600 text-white',
      initials: 'SA',
    },
    {
      name: 'Usman Malik',
      role: 'Combine Gap Student',
      quote:
        'Regular tests and excellent guidance helped me build confidence for my exams. I completed my matriculation gap requirements smoothly. I highly recommend JMT School & College to serious students.',
      avatarColor: 'bg-blue-600 text-white',
      initials: 'UM',
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600">
            <Heart className="w-4 h-4 fill-rose-600" />
            <span>Student Stories</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Parents &amp; Students Say
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base italic">
            "Real experiences from our students and parents about the quality education and guidance at JMT School &amp; College."
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <article
              key={idx}
              className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-center relative group"
            >
              <div>
                {/* Top Avatar & Stars */}
                <div className="flex flex-col items-center justify-center gap-2.5 mb-4">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-base shadow-sm ${rev.avatarColor}`}
                  >
                    {rev.initials}
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <Quote className="w-6 h-6 text-slate-300 mx-auto mb-3" />

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-200">
                <h5 className="text-base font-bold text-slate-900">
                  {rev.name}
                </h5>
                <span className="text-xs text-slate-500 font-medium">
                  {rev.role}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
