'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '../lib/site';

export default function Hero() {
  return (
    <>
      {/* 1. HERO SECTION — Smarty-inspired School Theme */}
      <section
        id="home"
        className="relative w-full bg-[#FAFAF7] text-[#17202A] overflow-hidden"
      >
        {/* Subtle Ambient Background Gradient Orbs */}
        <div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#EAF2ED]/60 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -top-12 left-10 w-80 h-80 rounded-full bg-[#C89B3C]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pt-8 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Content with Quicksand Typography */}
            <div className="hero-enter flex flex-col items-start text-left">
              
              {/* Eyebrow Label with Live Glowing Pulse Dot */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] shadow-xs">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C89B3C]" />
                </span>
                <p className="m-0 text-xs sm:text-[13px] leading-none font-bold tracking-[0.06em] uppercase text-[#0B3D26]">
                  Admissions 2026–27 Open · ZUEB Karachi
                </p>
              </div>

              {/* Main Headline H1 */}
              <h1 className="m-0 mt-4 sm:mt-5 text-[32px] sm:text-[44px] lg:text-[50px] leading-[38px] sm:leading-[50px] lg:leading-[58px] font-extrabold tracking-[-0.015em] text-[#17202A]">
                Complete Your Matric or Intermediate in as Little as{' '}
                <span className="text-[#0B3D26] bg-[#EAF2ED] px-2.5 py-0.5 rounded-2xl border border-[#CFE0D6]/80 shadow-xs inline-block my-1">
                  4 Months
                </span>
              </h1>

              {/* Subtext Paragraph */}
              <p className="m-0 mt-4 sm:mt-5 max-w-[560px] text-base sm:text-lg leading-[26px] sm:leading-[30px] font-medium text-[#3A4551]">
                Passed Grade VIII or Matric with a gap of 2+ years? Appear in the Part I &amp; II Combined Examination under the <strong>Ziauddin University Examination Board (ZUEB)</strong> and complete your qualification with verified results.
              </p>

              {/* Smarty-style Playful Asymmetrical Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/eligibility"
                  className="inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-7 rounded-[14px_30px_14px_30px] bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base font-bold transition-all shadow-[0_4px_16px_rgba(11,61,38,0.25)] hover:shadow-[0_8px_24px_rgba(11,61,38,0.35)] hover:-translate-y-0.5"
                >
                  <span>Check Your Eligibility</span>
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C89B3C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>

                <a
                  href={SITE.whatsappApplyMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-6 sm:px-7 rounded-[14px_30px_14px_30px] border-2 border-[#2E6B4A]/50 bg-white hover:bg-[#EAF2ED]/60 active:scale-98 text-[#0B3D26] text-base font-bold transition-all shadow-xs hover:-translate-y-0.5"
                >
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E6B4A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* 3 Smarty Quick Highlights Badges */}
              <div className="mt-6 pt-5 border-t border-[#CFE0D6]/70 w-full max-w-[560px] flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-[13px] font-semibold text-[#17202A]">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#CFE0D6] shadow-2xs">
                  <span className="text-[#2E6B4A] font-bold">✓</span>
                  <span>IBCC &amp; HEC Recognized</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#CFE0D6] shadow-2xs">
                  <span className="text-[#2E6B4A] font-bold">✓</span>
                  <span>1-Year Fast-Track Exam</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#CFE0D6] shadow-2xs">
                  <span className="text-[#2E6B4A] font-bold">✓</span>
                  <span>Flexible Study Support</span>
                </div>
              </div>

            </div>

            {/* Right Column: Refined Gallery Mat Frame with Clean Floating Trust Badges */}
            <div className="mt-8 sm:mt-12 lg:mt-0 relative w-full max-w-[540px] mx-auto lg:max-w-none pt-4 pb-6 sm:py-6">
              
              {/* Ambient Glowing Blobs */}
              <div
                className="absolute -top-6 -right-6 w-64 h-64 rounded-full bg-[#C89B3C]/18 blur-3xl pointer-events-none animate-pulse-slow"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 -left-6 w-72 h-72 rounded-full bg-[#0B3D26]/18 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Offset Designer Backdrop Slab */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-[34px] sm:rounded-[40px] bg-gradient-to-br from-[#0B3D26] via-[#2E6B4A] to-[#C89B3C]/80 opacity-90 shadow-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Top-Left Trust Pill — 1,000+ Students */}
              <div className="absolute -top-3 left-4 sm:-top-4 sm:left-6 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3D26] text-white border-2 border-white shadow-lg animate-float-slow">
                <span className="w-5 h-5 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center text-xs">
                  🎓
                </span>
                <span className="text-xs font-bold tracking-tight">
                  1,000+ Enrolled Students
                </span>
              </div>

              {/* Top-Right Achievement Card — Top Results */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 z-30 hidden sm:flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#CFE0D6] shadow-[0_14px_35px_rgba(11,61,38,0.16)] animate-float-delayed">
                <div className="w-9 h-9 rounded-xl bg-[#FBF1D8] text-[#8A6425] flex items-center justify-center shrink-0 shadow-2xs">
                  <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 2h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V2zm14 3h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h0a6.002 6.002 0 0 1-2-1V5zM4 5H2a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h0a6.002 6.002 0 0 0 2-1V5zm8 8a6 6 0 0 0 4-1.54V17h2v2H6v-2h2v-2.54A6 6 0 0 0 12 13zm-2 8h4v2h-4v-2z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <strong className="text-xs font-bold text-[#17202A] leading-tight">Top Board Results</strong>
                  <div className="flex items-center gap-1 text-[#C89B3C] text-[11px] mt-0.5 font-bold">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    <span className="text-[#5E6873] font-medium ml-0.5">5.0 / 5.0</span>
                  </div>
                </div>
              </div>

              {/* Pristine White Photo Mat Frame */}
              <div className="relative p-2.5 sm:p-3 bg-white rounded-[32px] sm:rounded-[38px] shadow-[0_24px_55px_-12px_rgba(11,61,38,0.25)] border border-[#CFE0D6] z-10 group">
                <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] xl:h-[475px] rounded-[24px] sm:rounded-[30px] overflow-hidden bg-[#EAF2ED]">
                  <Image
                    src="/teacher.jpg"
                    alt="Interactive smart classroom teaching session with faculty and students at JMT Public Higher Secondary School & College Karachi"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 620px"
                    className="object-cover object-[center_35%] brightness-[1.02] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Subtle Gradient at Bottom for official badge contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Bottom-Left: IBCC & HEC Recognized Official Badge */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                    <span className="w-7 h-7 rounded-lg bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center shrink-0 shadow-xs font-bold text-xs">
                      ✓
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] sm:text-[11px] font-bold leading-tight text-[#17202A]">
                        IBCC &amp; HEC Recognized
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-semibold leading-tight text-[#2E6B4A]">
                        Verified &amp; Authentic
                      </span>
                    </div>
                  </div>

                  {/* Bottom-Right: Official Ziauddin Board Crest Badge */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/25 text-white shadow-md">
                    <span className="w-7 h-7 rounded-lg bg-[#C89B3C] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-xs font-extrabold text-xs">
                      ★
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] sm:text-[11px] font-bold leading-tight text-white">
                        Ziauddin Board
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-medium leading-tight text-[#EAF2ED]">
                        Affiliated Center
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Smarty Organic Wave Divider ("Wase design") transitioning into #how (#EAF2ED) */}
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

      {/* 2. HOW IT WORKS STRIP — Smarty 3-Step Flow */}
      <section id="how" className="w-full bg-[#EAF2ED] text-[#17202A]">
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-24">
          
          {/* Section Header */}
          <div className="reveal flex flex-col items-center text-center">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-6 sm:w-8 h-[2.5px] bg-[#C89B3C] rounded-full block" />
              <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#2E6B4A]">
                How it works
              </p>
              <span className="w-6 sm:w-8 h-[2.5px] bg-[#C89B3C] rounded-full block" />
            </div>

            <h2 className="m-0 mt-3 sm:mt-4 text-[26px] sm:text-[32px] lg:text-[38px] leading-[34px] sm:leading-[40px] lg:leading-[46px] font-extrabold tracking-[-0.01em] text-[#17202A]">
              From admission to result in 3 simple steps
            </h2>

            <p className="m-0 mt-2.5 sm:mt-3 max-w-[540px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#3A4551] font-medium">
              A transparent, supported path for eligible students. We guide you at every step.
            </p>
          </div>

          {/* 3 Step Cards Flow */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)_44px_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)] items-stretch mt-8 sm:mt-12 lg:mt-14">
            
            {/* Step 01 */}
            <div className="reveal flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#CFE0D6] shadow-xs hover:-translate-y-1 transition-transform duration-200" style={{ '--i': 0 }}>
              <div className="flex items-start justify-between">
                <span className="w-13 sm:w-14 h-13 sm:h-14 rounded-2xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-2xs">
                  <svg
                    aria-hidden="true"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </span>
                <span className="text-[38px] sm:text-[46px] leading-none font-extrabold text-[#CFE0D6]">
                  01
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-xl sm:text-[22px] leading-[28px] sm:leading-[30px] font-extrabold text-[#17202A]">
                  Take admission
                </h3>
                <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#5E6873] font-medium">
                  Share when you passed your last exam and your age. Our desk confirms your exact eligibility.
                </p>
              </div>
            </div>

            {/* Connecting Arrow 1 -> 2 */}
            <div className="reveal flex items-center justify-center py-3 md:py-0" style={{ '--i': 1 }}>
              <span className="w-10 h-10 rounded-full bg-[#0B3D26] flex items-center justify-center text-[#C89B3C] shrink-0 shadow-xs">
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden md:block"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
            <div className="reveal flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#CFE0D6] shadow-xs hover:-translate-y-1 transition-transform duration-200" style={{ '--i': 2 }}>
              <div className="flex items-start justify-between">
                <span className="w-13 sm:w-14 h-13 sm:h-14 rounded-2xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-2xs">
                  <svg
                    aria-hidden="true"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
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
                <span className="text-[38px] sm:text-[46px] leading-none font-extrabold text-[#CFE0D6]">
                  02
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-xl sm:text-[22px] leading-[28px] sm:leading-[30px] font-extrabold text-[#17202A]">
                  Appear in the exam
                </h3>
                <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#5E6873] font-medium">
                  Your enrollment and official admit card arrive, then you appear in the scheduled ZUEB examination.
                </p>
              </div>
            </div>

            {/* Connecting Arrow 2 -> 3 */}
            <div className="reveal flex items-center justify-center py-3 md:py-0" style={{ '--i': 3 }}>
              <span className="w-10 h-10 rounded-full bg-[#0B3D26] flex items-center justify-center text-[#C89B3C] shrink-0 shadow-xs">
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden md:block"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
            <div className="reveal flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#CFE0D6] shadow-xs hover:-translate-y-1 transition-transform duration-200" style={{ '--i': 4 }}>
              <div className="flex items-start justify-between">
                <span className="w-13 sm:w-14 h-13 sm:h-14 rounded-2xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-2xs">
                  <svg
                    aria-hidden="true"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </span>
                <span className="text-[38px] sm:text-[46px] leading-none font-extrabold text-[#CFE0D6]">
                  03
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-xl sm:text-[22px] leading-[28px] sm:leading-[30px] font-extrabold text-[#17202A]">
                  Get your result
                </h3>
                <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#5E6873] font-medium">
                  ZUEB officially publishes your marksheet and certification, recognized nationwide by IBCC &amp; HEC.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Clarification Strip */}
          <div className="reveal flex items-center justify-center gap-3 sm:gap-4 mt-9 sm:mt-12 flex-wrap text-center" style={{ '--i': 5 }}>
            <p className="m-0 text-base leading-[26px] text-[#3A4551] font-medium">
              Not sure if you qualify?
            </p>
            <Link
              href="/eligibility"
              className="btn inline-flex items-center gap-2 text-base leading-[26px] font-bold text-[#0B3D26] hover:text-[#2E6B4A] transition-colors"
            >
              <span className="underline decoration-[#C89B3C] underline-offset-4">Check your eligibility</span>
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C89B3C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
