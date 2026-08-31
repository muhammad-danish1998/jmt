'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, GraduationCap } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Real campus, administration & faculty visual slides
  const slides = [
    {
      title: 'JMT School & College Campus',
      subtitle: 'State-of-the-art infrastructure fostering quality education.',
      image: '/school.jpg',
    },
    {
      title: 'Academic Leadership & Excellence',
      subtitle: 'Experienced administration committed to student career growth.',
      image: '/hm.jpg',
    },
    {
      title: 'Dedicated & Qualified Faculty',
      subtitle: 'Interactive learning environment shaping future leaders.',
      image: '/teacher.jpg',
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative bg-white py-12 lg:py-20 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Academic Session 2026 - 2027
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Admissions Open <br className="hidden sm:inline" />
                <span className="text-blue-900">for 2026-27</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-700 tracking-tight">
                Classes IX, X, XI & XII
              </p>
            </div>

            {/* Value Proposition Highlight Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug">
                    Complete Your Matriculation or <br className="hidden sm:inline" />
                    Intermediate in Just <span className="text-blue-900 font-extrabold">3 Months</span>*
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                    *Subject to eligibility and applicable examination/board requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#eligibility"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-950 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 text-base"
              >
                <span>Check Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-slate-400 font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 active:scale-95 text-base"
              >
                <span>Explore Our College</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Campus Image Carousel Slider */}
          <div className="lg:col-span-6">
            <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-[4/3] sm:aspect-[16/10]">
              {/* Slide Images */}
              {slides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1">
                      Campus Life
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold">{slide.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mt-1">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* Prev / Next Controls */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md focus:outline-none"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md focus:outline-none"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 right-6 z-20 flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                      idx === currentSlide ? 'w-8 bg-white shadow-xs' : 'w-2.5 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Pagination dots below matching wireframe */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-slate-900 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Slide bullet ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
