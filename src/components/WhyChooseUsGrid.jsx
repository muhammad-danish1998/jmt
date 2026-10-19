'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Full syllabus & exam support',
    description: 'Clear model papers, past questions, and coaching for matric & intermediate students.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    ),
  },
  {
    title: 'Recognized authentic result',
    description: 'Your marksheet and certificate are issued by ZUEB, recognized across Pakistan by IBCC & HEC.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Affordable fees & installments',
    description: 'Transparent fees with flexible installment options, plus scholarships for deserving candidates.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Personal guidance at every step',
    description: 'One-on-one help from enrollment to roll number slip, admit card, and exam hall venue.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="2"
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
    title: 'Merit Scholarship',
    description: 'Based on your previous academic result. Bring your last result card when you apply.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3D26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Need-Based Support',
    description: 'For deserving families requiring financial support. Apply with income/supporting documents.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3D26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

const SCHOLARSHIP_STEPS = [
  'Message our admissions counselor on WhatsApp',
  'Share your result card or supporting documents',
  'Our committee verifies eligibility and finalizes your fee plan',
];

export default function WhyChooseUsGrid() {
  return (
    <section id="why" className="relative w-full bg-[#0B3D26] text-white overflow-hidden pt-14 sm:pt-20 lg:pt-24">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#2E6B4A]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-[#C89B3C]/12 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pb-14 sm:pb-20 lg:pb-24 relative z-10">
        
        {/* Section Header */}
        <div className="reveal flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-pulse" />
            <p className="m-0 text-xs sm:text-[13px] leading-none font-bold tracking-[0.08em] uppercase text-[#C89B3C]">
              Why Choose JMT College
            </p>
          </div>

          <h2 className="m-0 mt-4 sm:mt-5 text-[30px] sm:text-[38px] lg:text-[44px] leading-[38px] sm:leading-[46px] lg:leading-[52px] font-extrabold tracking-[-0.015em] text-white">
            Why students &amp; parents choose JMT
          </h2>

          <p className="m-0 mt-3 sm:mt-4 max-w-[560px] text-base sm:text-lg leading-[26px] sm:leading-[29px] text-[#CFE0D6] font-medium">
            An official, supportive path to your Ziauddin Board examinations, with academic guidance at every step.
          </p>
        </div>

        {/* 6 Reason Cards Grid — Smarty-inspired rounded glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-14">
          {WHY_REASONS.map((reason, idx) => (
            <div
              key={reason.title}
              className="reveal flex items-start gap-4 sm:gap-5 p-5 sm:p-7 rounded-3xl bg-white/[0.07] border border-white/15 hover:bg-white/[0.12] hover:border-[#C89B3C]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm group"
              style={{ '--i': idx }}
            >
              <span className="w-12 h-12 rounded-2xl bg-[#C89B3C]/18 text-[#C89B3C] group-hover:scale-105 flex items-center justify-center shrink-0 transition-transform shadow-xs">
                {reason.icon}
              </span>
              <div className="flex flex-col gap-1.5 text-left">
                <h3 className="m-0 text-lg sm:text-[19px] leading-[26px] sm:leading-7 font-bold text-white">
                  {reason.title}
                </h3>
                <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#CFE0D6] font-medium">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Scholarship Block — Smarty-style Rounded Container */}
        <div
          id="scholarship"
          className="reveal mt-12 sm:mt-16 p-6 sm:p-10 lg:p-12 rounded-[28px] sm:rounded-[36px] bg-[#EAF2ED] text-[#17202A] shadow-xl border border-[#CFE0D6]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scholarship Narrative, Steps & Button */}
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CFE0D6] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                <p className="m-0 text-xs font-bold tracking-[0.06em] uppercase text-[#0B3D26]">
                  Fee Assistance &amp; Scholarships
                </p>
              </div>

              <h3 className="m-0 mt-3 sm:mt-4 text-[26px] sm:text-[32px] lg:text-[34px] leading-[34px] sm:leading-[40px] lg:leading-[42px] font-extrabold tracking-[-0.01em] text-[#17202A]">
                Making admission affordable for deserving students
              </h3>

              <p className="m-0 mt-3 sm:mt-4 max-w-[500px] text-base leading-[26px] text-[#3A4551] font-medium">
                We offer merit scholarships and financial assistance programs. Message our admissions desk to find the right pathway for you.
              </p>

              {/* Desktop Steps & CTA */}
              <div className="hidden lg:flex flex-col items-start w-full mt-6">
                <ol className="m-0 p-0 list-none flex flex-col gap-3 w-full">
                  {SCHOLARSHIP_STEPS.map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                        {idx + 1}
                      </span>
                      <span className="text-[15px] leading-6 font-semibold text-[#17202A]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-7 flex items-center gap-4">
                  <a
                    href={SITE.whatsappApplyMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-7 rounded-[14px_30px_14px_30px] bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base font-bold transition-all shadow-[0_4px_16px_rgba(11,61,38,0.25)] hover:-translate-y-0.5"
                  >
                    <span>Apply for Scholarship</span>
                    <ArrowRight className="w-4 h-4 text-[#C89B3C]" strokeWidth={2.5} />
                  </a>

                  <Link
                    href="/eligibility"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B3D26] hover:text-[#2E6B4A] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2E6B4A]" />
                    <span>View criteria</span>
                  </Link>
                </div>

                <p className="m-0 mt-3 text-xs leading-[20px] text-[#5E6873]">
                  * Scholarship allocations are decided upon verification by JMT administration.
                </p>
              </div>
            </div>

            {/* Right Column: Scholarship Cards (and Mobile Steps + CTA) */}
            <div className="flex flex-col gap-4 w-full">
              {SCHOLARSHIP_ROUTES.map((route) => (
                <div
                  key={route.title}
                  className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-[#CFE0D6] shadow-xs hover:-translate-y-0.5 transition-all"
                >
                  <span className="w-12 h-12 rounded-xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-2xs">
                    {route.icon}
                  </span>
                  <div className="flex flex-col gap-1 text-left">
                    <h4 className="m-0 text-lg sm:text-[19px] leading-snug font-bold text-[#17202A]">
                      {route.title}
                    </h4>
                    <p className="m-0 text-sm leading-[22px] text-[#5E6873] font-medium">
                      {route.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Mobile Steps + CTA */}
              <div className="flex lg:hidden flex-col items-start w-full mt-3">
                <ol className="m-0 p-0 list-none flex flex-col gap-2.5 w-full">
                  {SCHOLARSHIP_STEPS.map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-[#17202A]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <a
                  href={SITE.whatsappApplyMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-[14px_30px_14px_30px] bg-[#0B3D26] text-white text-base font-bold shadow-md"
                >
                  <span>Apply for Scholarship</span>
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Smarty Organic Wave Divider transitioning into FAQ (#FAFAF7) */}
      <div className="w-full overflow-hidden leading-none -mb-[1px]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 lg:h-16 text-[#FAFAF7] block"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
