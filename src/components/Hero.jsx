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
              
              {/* Eyebrow Label with live pulse dot */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E6B4A] shadow-[0_0_0_3px_rgba(46,107,74,0.2)] animate-pulse shrink-0" />
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

            {/* Right Column: High-End Dimensional Image Frame with Animated Rings, Badges & Floating Cards */}
            <div className="mt-8 sm:mt-12 lg:mt-0 relative w-full max-w-[560px] mx-auto lg:max-w-none pt-4 pb-6 sm:py-8 lg:py-6">
              
              {/* Ambient Glowing Blobs Behind Image */}
              <div
                className="absolute -top-6 -right-6 w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-[#C89B3C]/18 blur-3xl pointer-events-none animate-pulse-slow"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 -left-6 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#0B3D26]/20 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Offset Decorative Colored Slab Behind Image */}
              <div
                className="absolute top-4 -right-2 -bottom-2 left-4 sm:top-6 sm:-right-4 sm:-bottom-4 sm:left-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#C89B3C]/20 via-[#2E6B4A]/15 to-[#0B3D26]/25 border border-[#C89B3C]/30 shadow-lg pointer-events-none"
                aria-hidden="true"
              />

              {/* Breathing Glowing Frame Rings */}
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-3xl border-2 border-[#C89B3C]/40 shadow-[0_0_20px_rgba(200,155,60,0.18)] pointer-events-none animate-ring-breathe"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-2xl sm:rounded-3xl border border-[#2E6B4A]/30 shadow-[0_0_24px_rgba(46,107,74,0.12)] pointer-events-none animate-ring-breathe-delayed"
                aria-hidden="true"
              />

              {/* Corner Accent L-Brackets (Gold top, Forest Green bottom) */}
              <span
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 sm:w-7 h-6 sm:h-7 border-t-[3px] border-l-[3px] border-[#C89B3C] rounded-tl-sm pointer-events-none z-20"
                aria-hidden="true"
              />
              <span
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 sm:w-7 h-6 sm:h-7 border-t-[3px] border-r-[3px] border-[#C89B3C] rounded-tr-sm pointer-events-none z-20"
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 sm:w-7 h-6 sm:h-7 border-b-[3px] border-l-[3px] border-[#0B3D26] rounded-bl-sm pointer-events-none z-20"
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-6 sm:w-7 h-6 sm:h-7 border-b-[3px] border-r-[3px] border-[#0B3D26] rounded-br-sm pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[510px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CFE0D6] shadow-[0_20px_50px_-15px_rgba(11,61,38,0.22)] bg-[#EAF2ED] z-10 group">
                <Image
                  src="/teacher.jpg"
                  alt="Interactive smart classroom teaching session with faculty and students at JMT Public Higher Secondary School & College Karachi"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 620px"
                  className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle Bottom Vignette */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Inside-Image Glassmorphism Certified Badge (Bottom-Right) */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-md z-20">
                  <span className="w-8 h-8 rounded-lg bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center shrink-0 shadow-xs">
                    <svg aria-hidden="true" className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 16.1l-4.8 2.5.9-5.3-3.8-3.7 5.3-.8L12 2z" />
                    </svg>
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] sm:text-xs font-bold leading-tight text-[#17202A]">
                      Ziauddin Board
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium leading-tight text-[#2E6B4A]">
                      Affiliated Institution
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 — Top Student Review (Top-Left) */}
              <div className="absolute -top-3 -left-2 sm:-top-5 sm:-left-5 hidden sm:flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#CFE0D6] shadow-[0_14px_35px_rgba(11,61,38,0.14)] z-30 animate-float-slow">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0B3D26] to-[#2E6B4A] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                  DR
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <strong className="text-xs font-bold text-[#17202A]">Duaa Rana</strong>
                    <span className="text-[10px] text-[#2E6B4A] font-semibold bg-[#EAF2ED] px-1.5 py-0.5 rounded">Top Student</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#C89B3C] text-xs mt-1">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    <span className="text-[10px] font-bold text-[#5E6873] ml-0.5">5.0 / 5.0</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 — Enrolled Student Count (Bottom-Left) */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 flex items-center gap-3 p-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#CFE0D6] shadow-[0_14px_35px_rgba(11,61,38,0.14)] z-30 animate-float-delayed">
                <div className="w-9 h-9 rounded-xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-xs">
                  <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <strong className="text-sm sm:text-base font-extrabold text-[#17202A]">1,000+</strong>
                    <span className="text-[11px] font-bold text-[#0B3D26]">Enrolled</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#5E6873]">ZUEB Students</span>
                </div>
              </div>

              {/* Floating Card 3 — Trophy / Top Results (Top-Right) */}
              <div className="absolute top-10 -right-2 sm:top-12 sm:-right-5 hidden sm:flex items-center gap-2.5 p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#CFE0D6] shadow-[0_14px_35px_rgba(11,61,38,0.14)] z-30 animate-float-mid">
                <div className="w-8 h-8 rounded-lg bg-[#C89B3C]/15 text-[#C89B3C] flex items-center justify-center shrink-0">
                  <svg aria-hidden="true" className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 2h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V2zm14 3h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h0a6.002 6.002 0 0 1-2-1V5zM4 5H2a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h0a6.002 6.002 0 0 0 2-1V5zm8 8a6 6 0 0 0 4-1.54V17h2v2H6v-2h2v-2.54A6 6 0 0 0 12 13zm-2 8h4v2h-4v-2z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <strong className="text-xs font-bold text-[#17202A] leading-tight">Top Results</strong>
                  <span className="text-[10px] text-[#5E6873] leading-tight font-medium">Every Exam Session</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Wave Section Divider transitioning into How It Works (#EAF2ED) */}
        <div className="w-full overflow-hidden leading-none -mb-[1px] pt-4 sm:pt-6" aria-hidden="true">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-8 sm:h-12 lg:h-16 text-[#EAF2ED] block"
          >
            <path
              d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
              fill="currentColor"
            />
          </svg>
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
