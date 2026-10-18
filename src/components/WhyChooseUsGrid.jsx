'use client';

import React from 'react';
import { SITE } from '../lib/site';

const WHY_REASONS = [
  {
    title: 'Fast-track combined exams',
    description: 'Appear in the ZUEB combined exam in as little as 4 months, if you are eligible.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    title: 'Eligibility check first',
    description: 'We confirm your age and previous result before you apply, so there are no surprises.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
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
    title: 'Experienced faculty',
    description: 'Teachers focused on clear concepts and good exam technique.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
  },
  {
    title: 'Board exam focus',
    description: 'Preparation built around ZUEB paper patterns, with past papers and mock tests.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
  },
  {
    title: 'Affordable fees',
    description: 'Reasonable fees with installment options, plus scholarships for deserving students.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    ),
  },
  {
    title: 'Personal guidance',
    description: 'Help from enrollment to admit card to exam day, with academic counseling when you need it.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const SCHOLARSHIP_ROUTES = [
  {
    title: 'Merit scholarship',
    description: 'Based on your previous result. Bring your last result card when you apply.',
    icon: (
      <svg
        aria-hidden="true"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3D26"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Need-based support',
    description: 'For families who need financial help. Apply with your supporting documents.',
    icon: (
      <svg
        aria-hidden="true"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3D26"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

const SCHOLARSHIP_STEPS = [
  'Message us on WhatsApp',
  'Share your result card or supporting documents',
  'Our admissions team replies with next steps',
];

export default function WhyChooseUsGrid() {
  return (
    <section id="why" className="w-full bg-[#0B3D26] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className="reveal flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-5 sm:w-7 h-[2px] bg-[#C89B3C] block" />
            <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C89B3C]">
              Why choose JMT
            </p>
            <span className="w-5 sm:w-7 h-[2px] bg-[#C89B3C] block" />
          </div>

          <h2 className="m-0 mt-3 sm:mt-4 text-[30px] sm:text-[36px] lg:text-[40px] leading-[38px] sm:leading-[44px] lg:leading-[48px] font-extrabold tracking-[-0.01em] text-white">
            Why students choose JMT
          </h2>

          <p className="m-0 mt-3 max-w-[560px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#CFE0D6]">
            A focused path to your Ziauddin Board exams, with support at every step.
          </p>
        </div>

        {/* 6 Reason Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-14">
          {WHY_REASONS.map((reason, idx) => (
            <div
              key={reason.title}
              className="reveal flex items-start sm:flex-col gap-4 sm:gap-5 p-5 sm:p-7 rounded-2xl bg-white/[0.06] border border-white/14 hover:border-white/25 transition-all"
              style={{ '--i': idx }}
            >
              <span className="w-12 h-12 rounded-xl bg-[#C89B3C]/16 flex items-center justify-center shrink-0">
                {reason.icon}
              </span>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <h3 className="m-0 text-lg sm:text-[19px] leading-[26px] sm:leading-7 font-bold text-white">
                  {reason.title}
                </h3>
                <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#CFE0D6]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Scholarship Block */}
        <div
          id="scholarship"
          className="reveal mt-10 sm:mt-14 p-6 sm:p-10 lg:p-12 rounded-2xl bg-[#EAF2ED] text-[#17202A]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scholarship Narrative, Steps & Button */}
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-3">
                <span className="w-6 sm:w-7 h-[2px] bg-[#C89B3C] block shrink-0" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#2E6B4A]">
                  Scholarships
                </p>
              </div>

              <h3 className="m-0 mt-3 sm:mt-4 text-[26px] sm:text-[30px] lg:text-[32px] leading-[34px] sm:leading-[38px] lg:leading-10 font-extrabold tracking-[-0.01em] text-[#17202A]">
                Making admission affordable for deserving students
              </h3>

              <p className="m-0 mt-3 sm:mt-4 max-w-[480px] text-base leading-[26px] text-[#3A4551]">
                We offer two scholarship routes. Message our admissions team to find out which one fits you.
              </p>

              {/* Desktop-only placement of Steps + CTA + Note */}
              <div className="hidden lg:flex flex-col items-start w-full mt-6">
                <ol className="m-0 p-0 list-none flex flex-col gap-3 w-full">
                  {SCHOLARSHIP_STEPS.map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#C89B3C] text-[#17202A] flex items-center justify-center text-sm leading-5 font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[15px] leading-6 font-medium text-[#17202A]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-8 inline-flex items-center justify-center gap-2.5 h-14 px-7 rounded-lg bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base leading-5 font-bold transition-all shadow-xs"
                >
                  <span>Apply for Scholarship</span>
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

                <p className="m-0 mt-4 text-sm leading-[22px] text-[#5E6873]">
                  Scholarship criteria and amounts are decided by JMT administration.
                </p>
              </div>
            </div>

            {/* Right Column: Scholarship Cards (and Mobile Steps + CTA) */}
            <div className="flex flex-col gap-4 w-full">
              {SCHOLARSHIP_ROUTES.map((route) => (
                <div
                  key={route.title}
                  className="flex items-start gap-4 sm:gap-5 p-5 sm:p-7 rounded-2xl bg-white border border-[#CFE0D6] shadow-xs"
                >
                  <span className="w-12 sm:w-13 h-12 sm:h-13 rounded-xl bg-[#EAF2ED] flex items-center justify-center shrink-0">
                    {route.icon}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="m-0 text-lg sm:text-xl leading-7 font-bold text-[#17202A]">
                      {route.title}
                    </h4>
                    <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#5E6873]">
                      {route.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Mobile-only placement of Steps + CTA + Note (matching 03-mobile mockup) */}
              <div className="flex lg:hidden flex-col items-start w-full mt-2">
                <ol className="m-0 mt-4 p-0 list-none flex flex-col gap-3 w-full">
                  {SCHOLARSHIP_STEPS.map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#C89B3C] text-[#17202A] flex items-center justify-center text-sm leading-5 font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[15px] leading-6 font-medium text-[#17202A]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-7 w-full inline-flex items-center justify-center gap-2.5 h-14 px-6 rounded-lg bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base leading-5 font-bold transition-all shadow-xs"
                >
                  <span>Apply for Scholarship</span>
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

                <p className="m-0 mt-4 text-sm leading-[22px] text-[#5E6873]">
                  Scholarship criteria and amounts are decided by JMT administration.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
