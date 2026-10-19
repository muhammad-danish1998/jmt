'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE } from '../lib/site';

const ABOUT_FEATURES = [
  {
    title: 'ZUEB-Affiliated Center',
    description: 'Officially affiliated with the Ziauddin University Examination Board.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Fast-Track Combined Exams',
    description: 'Appear in Part I & II combined exams in as little as 4 months if eligible.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Pre-Admission Verification',
    description: 'We confirm your age, eligibility, and previous transcripts before you apply.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
    title: 'Full Support to Exam Day',
    description: 'Dedicated guidance from enrollment and admit card to exam center logistics.',
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white text-[#17202A] overflow-hidden scroll-mt-20 sm:scroll-mt-24 pt-14 sm:pt-20 lg:pt-24">
      {/* Subtle Ambient Background Gradient Orbs */}
      <div
        className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#EAF2ED]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#C89B3C]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          
          {/* Left Column: Refined Gallery Mat Frame with Director & Trust Badges */}
          <div className="reveal relative w-full max-w-[540px] mx-auto lg:max-w-none pt-4 pb-6 sm:py-6" style={{ '--i': 0 }}>
            
            {/* Ambient Glowing Blobs */}
            <div
              className="absolute -top-6 -right-6 w-64 h-64 rounded-full bg-[#C89B3C]/16 blur-3xl pointer-events-none animate-pulse-slow"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -left-6 w-72 h-72 rounded-full bg-[#0B3D26]/16 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Offset Designer Backdrop Slab */}
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-[34px] sm:rounded-[40px] bg-gradient-to-br from-[#0B3D26] via-[#2E6B4A] to-[#C89B3C]/80 opacity-90 shadow-xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Top-Left Trust Pill — 28+ Years Experience */}
            <div className="absolute -top-3 left-4 sm:-top-4 sm:left-6 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3D26] text-white border-2 border-white shadow-lg animate-float-slow">
              <span className="w-5 h-5 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center text-xs">
                ★
              </span>
              <span className="text-xs font-bold tracking-tight">
                28+ Years Educational Leadership
              </span>
            </div>

            {/* Top-Right Achievement Card — Verified Center */}
            <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 z-30 hidden sm:flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#CFE0D6] shadow-[0_14px_35px_rgba(11,61,38,0.16)] animate-float-delayed">
              <div className="w-9 h-9 rounded-xl bg-[#FBF1D8] text-[#8A6425] flex items-center justify-center shrink-0 shadow-2xs font-extrabold text-sm">
                🏆
              </div>
              <div className="flex flex-col text-left">
                <strong className="text-xs font-bold text-[#17202A] leading-tight">Official Board Center</strong>
                <span className="text-[11px] text-[#2E6B4A] font-semibold leading-tight mt-0.5">
                  ZUEB Affiliated · Karachi
                </span>
              </div>
            </div>

            {/* Pristine White Photo Mat Frame */}
            <div className="relative p-2.5 sm:p-3 bg-white rounded-[32px] sm:rounded-[38px] shadow-[0_24px_55px_-12px_rgba(11,61,38,0.25)] border border-[#CFE0D6] z-10 group">
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] xl:h-[480px] rounded-[24px] sm:rounded-[30px] overflow-hidden bg-[#FAFAF7]">
                <Image
                  src="/director.jpg"
                  alt="Chief Executive Director of JMT Public Higher Secondary School & College Karachi at his executive desk"
                  fill
                  priority={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 620px"
                  className="object-cover object-[center_28%] brightness-[1.02] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle Gradient at Bottom for official badge contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Bottom-Left: IBCC & HEC Attestation Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                  <span className="w-7 h-7 rounded-lg bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center shrink-0 shadow-xs font-bold text-xs">
                    ✓
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-[11px] font-bold leading-tight text-[#17202A]">
                      100% Recognized &amp; Attested
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold leading-tight text-[#2E6B4A]">
                      IBCC &amp; HEC Verification
                    </span>
                  </div>
                </div>

                {/* Bottom-Right: Executive Director Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-black/55 backdrop-blur-md border border-white/25 text-white shadow-md">
                  <span className="w-7 h-7 rounded-lg bg-[#C89B3C] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-xs font-extrabold text-xs">
                    ★
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-[11px] font-bold leading-tight text-white">
                      Executive Director
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-medium leading-tight text-[#EAF2ED]">
                      JMT School &amp; College
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: About Content with Quicksand Typography */}
          <div className="reveal flex flex-col items-start text-left" style={{ '--i': 1 }}>
            
            {/* Eyebrow Label with Live Glowing Pulse Dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] shadow-xs">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C89B3C]" />
              </span>
              <p className="m-0 text-xs sm:text-[13px] leading-none font-bold tracking-[0.06em] uppercase text-[#0B3D26]">
                About JMT School &amp; College
              </p>
            </div>

            {/* Headline H2 */}
            <h2 className="m-0 mt-4 sm:mt-5 text-[28px] sm:text-[36px] lg:text-[42px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-extrabold tracking-[-0.015em] text-[#17202A]">
              Guiding students through their Ziauddin Board exams,{' '}
              <span className="text-[#0B3D26] bg-[#EAF2ED] px-2.5 py-0.5 rounded-2xl border border-[#CFE0D6]/80 shadow-xs inline-block my-1">
                step by step
              </span>
            </h2>

            {/* Narrative text */}
            <p className="m-0 mt-4 max-w-[560px] text-base sm:text-lg leading-[26px] sm:leading-[29px] font-medium text-[#3A4551]">
              JMT Public Higher Secondary School &amp; College is officially affiliated with the <strong>Ziauddin University Examination Board (ZUEB)</strong>. We empower students—especially those returning after an academic gap—to enroll, prepare, and excel in their Matric and Intermediate examinations with clear guidance at every stage.
            </p>

            {/* 4 Feature Cards Grid — Smarty-style rounded cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-6 sm:mt-7 w-full">
              {ABOUT_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3.5 p-4 sm:p-4.5 rounded-2xl bg-[#FAFAF7] border border-[#CFE0D6]/80 hover:border-[#0B3D26]/40 hover:bg-[#EAF2ED]/30 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs group"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#EAF2ED] text-[#0B3D26] group-hover:bg-[#0B3D26] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                    {feature.icon}
                  </span>
                  <div className="flex flex-col gap-0.5 text-left">
                    <h3 className="m-0 text-sm sm:text-[15px] font-bold text-[#17202A] leading-snug">
                      {feature.title}
                    </h3>
                    <p className="m-0 text-xs sm:text-[13px] leading-[19px] text-[#5E6873] font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Smarty-style Asymmetrical Action Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={SITE.whatsappApplyMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-7 rounded-[14px_30px_14px_30px] bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base font-bold transition-all shadow-[0_4px_16px_rgba(11,61,38,0.25)] hover:shadow-[0_8px_24px_rgba(11,61,38,0.35)] hover:-translate-y-0.5"
              >
                <span>Talk to Admissions</span>
                <ArrowRight className="w-4 h-4 text-[#C89B3C]" strokeWidth={2.5} />
              </a>

              <Link
                href="/eligibility"
                className="inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-6 sm:px-7 rounded-[14px_30px_14px_30px] border-2 border-[#2E6B4A]/50 bg-white hover:bg-[#EAF2ED]/60 active:scale-98 text-[#0B3D26] text-base font-bold transition-all shadow-xs hover:-translate-y-0.5"
              >
                <CheckCircle2 className="w-4.5 h-4.5 text-[#2E6B4A]" strokeWidth={2.2} />
                <span>Check Eligibility</span>
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Smarty Organic Wave Divider transitioning into #why (#0B3D26) */}
      <div className="w-full overflow-hidden leading-none -mb-[1px] pt-4 sm:pt-6" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 lg:h-16 text-[#0B3D26] block"
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
