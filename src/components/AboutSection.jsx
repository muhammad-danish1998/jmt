'use client';

import React from 'react';
import Image from 'next/image';
import { SITE } from '../lib/site';

const ABOUT_FEATURES = [
  {
    title: 'ZUEB-affiliated',
    description: 'Officially affiliated with the Ziauddin University Examination Board.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3D26"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Clear eligibility check',
    description: 'We confirm your age and previous result before you apply.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3D26"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Support to exam day',
    description: 'Help with enrollment, admit card, and exam details.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3D26"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: 'Matric and Intermediate',
    description: 'Classes IX–X and XI–XII, including combined (gap) candidates.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3D26"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white text-[#17202A] overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          
          {/* Left Column: Director Photo & Credential Card */}
          <figure className="reveal m-0 flex flex-col gap-3 sm:gap-4">
            <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[500px] rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#FAFAF7]">
              <Image
                src="/director.jpg"
                alt="The Chief Executive Director of JMT Public Higher Secondary School and College at his desk"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                className="object-cover object-[center_30%]"
                priority={false}
              />
            </div>

            <figcaption className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 px-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] leading-6 font-bold text-[#17202A]">
                  Chief Executive Director
                </span>
                <span className="text-sm leading-[22px] text-[#5E6873]">
                  JMT Public Higher Secondary School &amp; College, Karachi
                </span>
              </div>

              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-6 border-t sm:border-t-0 sm:border-l border-[#E5E7EB] shrink-0">
                <span className="text-[36px] sm:text-[40px] leading-[40px] sm:leading-[44px] font-extrabold text-[#0B3D26]">
                  28+
                </span>
                <span className="text-sm leading-5 font-semibold text-[#17202A]">
                  Years of<br />experience
                </span>
              </div>
            </figcaption>
          </figure>

          {/* Right Column: About Content */}
          <div className="reveal flex flex-col items-start text-left" style={{ '--i': 1 }}>
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-6 sm:w-7 h-[2px] bg-[#C89B3C] block shrink-0" />
              <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#2E6B4A]">
                About JMT
              </p>
            </div>

            {/* Headline H2 */}
            <h2 className="m-0 mt-3 sm:mt-4 text-[26px] sm:text-[32px] lg:text-[36px] leading-[34px] sm:leading-[40px] lg:leading-[44px] font-extrabold tracking-[-0.01em] text-[#17202A]">
              Guiding students through their Ziauddin Board exams, step by step
            </h2>

            {/* Narrative text */}
            <p className="m-0 mt-4 sm:mt-5 max-w-[540px] text-base sm:text-[17px] leading-[26px] sm:leading-7 font-normal text-[#3A4551]">
              JMT Public Higher Secondary School &amp; College is affiliated with the Ziauddin University Examination Board (ZUEB). We help students, especially those returning after a gap, to enroll, prepare, and appear in their Matric and Intermediate exams with clear guidance at every stage.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-7 sm:mt-8 w-full">
              {ABOUT_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start sm:flex-col lg:flex-row gap-3 sm:gap-3.5 p-4 sm:p-5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] transition-all hover:border-[#CFE0D6]"
                >
                  <span className="w-11 h-11 rounded-10 bg-[#EAF2ED] flex items-center justify-center shrink-0">
                    {feature.icon}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="m-0 text-base leading-6 font-bold text-[#17202A]">
                      {feature.title}
                    </h3>
                    <p className="m-0 text-sm leading-[22px] text-[#5E6873]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Talk to Admissions Button */}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-7 sm:mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-14 px-6 sm:px-7 rounded-lg bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base leading-5 font-bold transition-all shadow-xs"
            >
              <span>Talk to Admissions</span>
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
