'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '../lib/site';

export default function Hero() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="w-full bg-[#FAFAF7] text-[#17202A] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-10 sm:py-16 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Hero Content with CSS entrance animation */}
            <div className="hero-enter flex flex-col items-start text-left">
              
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3">
                <span className="w-6 sm:w-7 h-[2px] bg-[#C89B3C] block shrink-0" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#2E6B4A]">
                  Admissions 2026–27 open · Karachi
                </p>
              </div>

              {/* Main Headline H1 */}
              <h1 className="m-0 mt-4 sm:mt-5 text-[34px] sm:text-[44px] lg:text-[52px] leading-[40px] sm:leading-[50px] lg:leading-[58px] font-extrabold tracking-[-0.015em] text-[#17202A]">
                Complete Your Matric or Intermediate in as Little as{' '}
                <span className="text-[#0B3D26] hl inline-block">
                  4 Months
                </span>
              </h1>

              {/* Subtext Paragraph */}
              <p className="m-0 mt-5 sm:mt-6 max-w-[540px] text-base sm:text-lg leading-[26px] sm:leading-[30px] font-normal text-[#3A4551]">
                Passed Grade VIII or Matric with a gap of 2+ years? Appear in the Part I &amp; II Combined Exam under the Ziauddin University Examination Board (ZUEB) and get your result in months, not years.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/eligibility"
                  className="btn inline-flex items-center justify-center gap-2.5 h-14 px-6 sm:px-7 rounded-lg bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base leading-5 font-bold transition-all shadow-xs"
                >
                  <span>Check Your Eligibility</span>
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
                </Link>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center justify-center gap-2.5 h-14 px-6 sm:px-7 rounded-lg border-[1.5px] border-[#2E6B4A] hover:bg-[#2E6B4A]/5 active:scale-98 text-[#2E6B4A] text-base leading-5 font-bold transition-all bg-transparent"
                >
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E6B4A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Badge & Exam Note */}
              <div className="mt-6 pt-5 sm:pt-6 border-t border-[#E5E7EB] w-full max-w-[540px] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#EAF2ED] border border-[#CFE0D6] shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#C89B3C] block" />
                  <span className="text-[13px] leading-[18px] font-semibold tracking-[0.02em] text-[#17202A]">
                    JMT College — ZUEB-affiliated institution
                  </span>
                </div>
                <p className="m-0 text-xs sm:text-sm leading-[22px] text-[#5E6873]">
                  Exam and result dates are set by ZUEB.
                </p>
              </div>

            </div>

            {/* Right Column: Hero Classroom Photo */}
            <div className="mt-6 sm:mt-8 lg:mt-0 relative w-full h-[280px] sm:h-[380px] lg:h-[480px] xl:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CFE0D6] shadow-[0_16px_40px_-12px_rgba(11,61,38,0.12)] bg-[#EAF2ED] group">
              <Image
                src="/teacher.jpg"
                alt="Interactive smart classroom teaching session with faculty and students at JMT Public Higher Secondary School & College Karachi"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 620px"
                className="object-cover object-[center_42%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS STRIP */}
      <section id="how" className="w-full bg-[#EAF2ED] text-[#17202A]">
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-24">
          
          {/* Section Header */}
          <div className="reveal flex flex-col items-center text-center">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-5 sm:w-7 h-[2px] bg-[#C89B3C] block" />
              <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#2E6B4A]">
                How it works
              </p>
              <span className="w-5 sm:w-7 h-[2px] bg-[#C89B3C] block" />
            </div>

            <h2 className="m-0 mt-3 sm:mt-4 text-[26px] sm:text-[32px] lg:text-[36px] leading-[34px] sm:leading-[40px] lg:leading-[44px] font-extrabold tracking-[-0.01em] text-[#17202A]">
              From admission to result in 3 simple steps
            </h2>

            <p className="m-0 mt-2.5 sm:mt-3 max-w-[520px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#3A4551]">
              A clear path for eligible students. We guide you at every step.
            </p>
          </div>

          {/* 3 Step Cards Flow */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)_44px_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)] items-stretch mt-8 sm:mt-12 lg:mt-14">
            
            {/* Step 01 */}
            <div className="reveal flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#CFE0D6] shadow-xs" style={{ '--i': 0 }}>
              <div className="flex items-start justify-between">
                <span className="w-13 sm:w-14 h-13 sm:h-14 rounded-xl bg-[#EAF2ED] flex items-center justify-center shrink-0">
                  <svg
                    aria-hidden="true"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B3D26"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </span>
                <span className="text-[36px] sm:text-[44px] leading-none font-extrabold text-[#CFE0D6]">
                  01
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-xl sm:text-[22px] leading-[28px] sm:leading-[30px] font-extrabold text-[#17202A]">
                  Take admission
                </h3>
                <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#5E6873]">
                  Tell us when you passed your last exam and your age. We confirm your eligibility.
                </p>
              </div>
            </div>

            {/* Connecting Arrow 1 -> 2 (Down on mobile, Right on tablet/desktop) */}
            <div className="reveal flex items-center justify-center py-3 md:py-0" style={{ '--i': 1 }}>
              <span className="w-10 h-10 rounded-full bg-[#0B3D26] flex items-center justify-center text-white shrink-0 shadow-xs">
                {/* Desktop/Tablet Arrow Right */}
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden md:block"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                {/* Mobile Arrow Down */}
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="block md:hidden"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </span>
            </div>

            {/* Step 02 */}
            <div className="reveal flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#CFE0D6] shadow-xs" style={{ '--i': 2 }}>
              <div className="flex items-start justify-between">
                <span className="w-13 sm:w-14 h-13 sm:h-14 rounded-xl bg-[#EAF2ED] flex items-center justify-center shrink-0">
                  <svg
                    aria-hidden="true"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B3D26"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                </span>
                <span className="text-[36px] sm:text-[44px] leading-none font-extrabold text-[#CFE0D6]">
                  02
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-xl sm:text-[22px] leading-[28px] sm:leading-[30px] font-extrabold text-[#17202A]">
                  Appear in the exam
                </h3>
                <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#5E6873]">
                  Your enrollment and admit card arrive, then you sit the combined exam.
                </p>
              </div>
            </div>

            {/* Connecting Arrow 2 -> 3 (Down on mobile, Right on tablet/desktop) */}
            <div className="reveal flex items-center justify-center py-3 md:py-0" style={{ '--i': 3 }}>
              <span className="w-10 h-10 rounded-full bg-[#0B3D26] flex items-center justify-center text-white shrink-0 shadow-xs">
                {/* Desktop/Tablet Arrow Right */}
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden md:block"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                {/* Mobile Arrow Down */}
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="block md:hidden"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </span>
            </div>

            {/* Step 03 */}
            <div className="reveal flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#CFE0D6] shadow-xs" style={{ '--i': 4 }}>
              <div className="flex items-start justify-between">
                <span className="w-13 sm:w-14 h-13 sm:h-14 rounded-xl bg-[#EAF2ED] flex items-center justify-center shrink-0">
                  <svg
                    aria-hidden="true"
                    width="28"
                    height="28"
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
                </span>
                <span className="text-[36px] sm:text-[44px] leading-none font-extrabold text-[#CFE0D6]">
                  03
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-xl sm:text-[22px] leading-[28px] sm:leading-[30px] font-extrabold text-[#17202A]">
                  Get your result
                </h3>
                <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#5E6873]">
                  ZUEB announces your result after the exam.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Clarification Strip */}
          <div className="reveal flex items-center justify-center gap-3 sm:gap-4 mt-9 sm:mt-12 flex-wrap text-center" style={{ '--i': 5 }}>
            <p className="m-0 text-base leading-[26px] text-[#3A4551]">
              Not sure if you qualify?
            </p>
            <Link
              href="/eligibility"
              className="btn inline-flex items-center gap-2 text-base leading-[26px] font-bold text-[#0B3D26] hover:underline"
            >
              <span>Check your eligibility</span>
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3D26"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
