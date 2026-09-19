'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const reviews = [
    {
      name: 'Usman Malik',
      role: 'Matric (SSC) Student',
      quote:
        'Regular tests and excellent guidance helped me build confidence for my exams. I highly recommend JMT School & College to serious students who want to excel under Ziauddin Board.',
      avatarBg: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
      initials: 'UM',
    },
    {
      name: 'Duaa Rana',
      role: 'Intermediate Pre-Medical Student',
      quote:
        'The teachers explain every topic clearly and help us prepare for board exams with past papers and weekly assessments. The digital classrooms and supportive faculty made a huge difference.',
      avatarBg: 'bg-purple-50 text-purple-700 border border-purple-200',
      initials: 'DR',
    },
    {
      name: 'Ali Khan',
      role: 'Parent of Grade X Student',
      quote:
        'JMT Public Higher Secondary School & College provides a safe, disciplined and top-quality learning environment. My son\'s academic performance and exam results improved remarkably.',
      avatarBg: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      initials: 'AK',
    },
    {
      name: 'Hamza Tariq',
      role: 'Fast Track Combine HSSC Student',
      quote:
        'After a 2-year educational gap, JMT helped me clear my intermediate exams smoothly through Ziauddin Examination Board. The flexible schedule and notes were extremely helpful.',
      avatarBg: 'bg-amber-50 text-amber-700 border border-amber-200',
      initials: 'HT',
    },
    {
      name: 'Ayesha Siddiqui',
      role: 'FSC Pre-Engineering Student',
      quote:
        'Well-equipped science labs, experienced faculty, and regular mock exams gave me the practical knowledge and high scores needed for top university admissions.',
      avatarBg: 'bg-blue-50 text-blue-700 border border-blue-200',
      initials: 'AS',
    },
  ];

  // Auto slide timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fbfbfe] border-b border-slate-200 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
            <span>STUDENT STORIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
            What Parents &amp; Students Say
          </h2>
          
          <p className="text-slate-500 text-sm sm:text-base italic max-w-xl mx-auto">
            &ldquo;Real experiences from our students and parents about the quality education and guidance at JMT Public School &amp; College.&rdquo;
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-[28px] sm:rounded-[32px] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden transition-all duration-300">
            
            {/* Top Rainbow/Gradient Accent Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 via-purple-600 to-amber-400" />

            <div className="px-6 py-10 sm:px-14 sm:py-14 text-center">
              
              {/* Avatar Initial Circle with Animation */}
              <div className="flex justify-center mb-4">
                <div
                  key={`avatar-${currentIndex}`}
                  className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center font-black text-lg sm:text-xl shadow-md transition-all duration-500 animate-in zoom-in-75 ${currentReview.avatarBg}`}
                >
                  {currentReview.initials}
                </div>
              </div>

              {/* 5 Gold Stars */}
              <div className="flex items-center justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <div key={`quote-${currentIndex}`} className="min-h-[110px] sm:min-h-[90px] flex items-center justify-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal max-w-xl mx-auto">
                  &ldquo;{currentReview.quote}&rdquo;
                </p>
              </div>

              {/* Author & Role */}
              <div key={`author-${currentIndex}`} className="mt-6 pt-5 border-t border-slate-100 animate-in fade-in duration-300">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  {currentReview.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {currentReview.role}
                </p>
              </div>

            </div>
          </div>

          {/* Floating Left Navigation Arrow Button */}
          <button
            onClick={handlePrev}
            type="button"
            className="absolute left-0 -translate-x-3 sm:-translate-x-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 shadow-lg hover:shadow-xl text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Floating Right Navigation Arrow Button */}
          <button
            onClick={handleNext}
            type="button"
            className="absolute right-0 translate-x-3 sm:translate-x-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 shadow-lg hover:shadow-xl text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                type="button"
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-indigo-600 shadow-sm shadow-indigo-500/30'
                    : 'w-2.5 h-2.5 bg-indigo-200/80 hover:bg-indigo-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

