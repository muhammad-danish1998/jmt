import React from 'react';
import Link from 'next/link';
import { SITE } from '../lib/site';

// Helper icon components matching design reference SVGs exactly
function ClockIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function GapClockIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

function BookIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CapIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function RepeatIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function TrendIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  );
}

function PlusIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function LayersIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function CalendarIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
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
    </svg>
  );
}

function MapPinIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function UploadIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m17 8-5-5-5 5" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </svg>
  );
}

function AlertTriangleIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function ExternalIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PhoneIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// Icon resolver for category / rule cards
function renderIcon(type, className = 'w-5 h-5 text-[#0B3D26]') {
  switch (type) {
    case 'book':
      return <BookIcon className={className} />;
    case 'cap':
      return <CapIcon className={className} />;
    case 'repeat':
      return <RepeatIcon className={className} />;
    case 'trend':
      return <TrendIcon className={className} />;
    case 'plus':
      return <PlusIcon className={className} />;
    case 'layers':
      return <LayersIcon className={className} />;
    case 'calendar':
      return <CalendarIcon className={className} />;
    case 'clock':
      return <ClockIcon className={className} />;
    case 'pin':
      return <MapPinIcon className={className} />;
    case 'upload':
      return <UploadIcon className={className} />;
    case 'alert':
      return <AlertTriangleIcon className={className} />;
    default:
      return <BookIcon className={className} />;
  }
}

export default function EligibilitySessionView({ data }) {
  const isAnnual1 = data.slug === 'annual-1-2027';

  return (
    <div className="w-full bg-[#FAFAF7] text-[#17202A]">
      {/* 1. TOP HEADER & SESSION SELECTOR */}
      <section id="top" className="bg-[#FAFAF7]">
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
          <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-[760px]">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm leading-[22px] text-[#5E6873]"
            >
              <Link href="/" className="hover:text-[#17202A] transition-colors">
                Home
              </Link>
              <span aria-hidden="true" className="text-[#8291A3]">/</span>
              <Link href="/eligibility" className="hover:text-[#17202A] transition-colors">
                Eligibility
              </Link>
              <span aria-hidden="true" className="text-[#8291A3]">/</span>
              <span className="font-semibold text-[#17202A]" aria-current="page">
                {data.session}
              </span>
            </nav>

            {/* Page Title */}
            <h1 className="m-0 text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[48px] lg:leading-[56px] font-extrabold tracking-[-0.015em] text-[#17202A]">
              Eligibility &amp; Admission Criteria
            </h1>

            {/* Subtitle */}
            <p className="m-0 text-base sm:text-lg leading-[26px] sm:leading-[30px] text-[#3A4551]">
              Find your category, check the age limit and documents, then message us. We confirm your eligibility before you apply.
            </p>

            {/* Session Switch Tabs */}
            <div
              role="tablist"
              aria-label="Examination session"
              className="inline-flex p-1 gap-1 rounded-[10px] bg-[#EAF2ED] border border-[#CFE0D6]"
            >
              <Link
                role="tab"
                aria-selected={isAnnual1}
                href="/eligibility/annual-1-2027"
                className={`inline-flex items-center min-h-[40px] px-3.5 sm:px-4.5 rounded-lg text-sm leading-5 transition-all ${
                  isAnnual1
                    ? 'bg-[#0B3D26] text-white font-bold shadow-sm'
                    : 'text-[#17202A] font-semibold hover:bg-black/5'
                }`}
              >
                Annual (I) 2027
              </Link>
              <Link
                role="tab"
                aria-selected={!isAnnual1}
                href="/eligibility/annual-2-2026"
                className={`inline-flex items-center min-h-[40px] px-3.5 sm:px-4.5 rounded-lg text-sm leading-5 transition-all ${
                  !isAnnual1
                    ? 'bg-[#0B3D26] text-white font-bold shadow-sm'
                    : 'text-[#17202A] font-semibold hover:bg-black/5'
                }`}
              >
                Annual (II) 2026
              </Link>
            </div>

            {/* Source and Disclaimer */}
            <div className="flex flex-col gap-1 text-sm leading-[22px] text-[#5E6873]">
              <p className="m-0">
                {data.sourceText}{' '}
                <a
                  href={data.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#0B3D26] hover:underline"
                >
                  <span>View official PDF</span>
                  <ExternalIcon />
                </a>
              </p>
              <p className="m-0">
                Rules are shown as published by ZUEB. Our admissions team will confirm your exact case.
              </p>
              <p className="m-0">
                Exam dates are set by ZUEB.{' '}
                <Link
                  href="/date-sheet"
                  className="font-bold text-[#0B3D26] hover:underline"
                >
                  See the date sheet.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "WHICH ONE DESCRIBES YOU?" JUMP CARDS */}
      <section className="reveal bg-white">
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
          <div className="flex items-center gap-3">
            <span className="w-7 h-[2px] bg-[#C89B3C] block" />
            <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
              Start here
            </p>
          </div>
          <h2 className="m-0 mt-3 text-[26px] sm:text-[30px] lg:text-[32px] leading-[34px] sm:leading-[38px] lg:leading-[40px] font-extrabold tracking-[-0.01em] text-[#17202A]">
            Which one describes you?
          </h2>

          {/* 4 Jump Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 sm:mt-8">
            {/* Card 1 */}
            <a
              href="#combined-ssc"
              className="group flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#FAFAF7] border border-[#E5E7EB] hover:border-[#2E6B4A] hover:-translate-y-0.5 hover:shadow-sm transition-all text-[#17202A]"
            >
              <div className="flex items-center sm:items-start gap-4 sm:flex-col">
                <span className="flex-none w-12 h-12 rounded-xl bg-[#EAF2ED] flex items-center justify-center text-[#0B3D26]">
                  <GapClockIcon className="w-6 h-6" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[22px] text-[#5E6873]">
                    I have a 2+ year gap after Grade VIII
                  </span>
                  <span className="text-[17px] sm:text-[19px] leading-7 font-bold text-[#17202A]">
                    Combined SSC (Gap)
                  </span>
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm leading-5 font-bold text-[#0B3D26] group-hover:translate-x-0.5 transition-transform">
                <span>View criteria</span>
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>

            {/* Card 2 */}
            <a
              href="#combined-hssc"
              className="group flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#FAFAF7] border border-[#E5E7EB] hover:border-[#2E6B4A] hover:-translate-y-0.5 hover:shadow-sm transition-all text-[#17202A]"
            >
              <div className="flex items-center sm:items-start gap-4 sm:flex-col">
                <span className="flex-none w-12 h-12 rounded-xl bg-[#EAF2ED] flex items-center justify-center text-[#0B3D26]">
                  <GapClockIcon className="w-6 h-6" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[22px] text-[#5E6873]">
                    I have a 2+ year gap after SSC
                  </span>
                  <span className="text-[17px] sm:text-[19px] leading-7 font-bold text-[#17202A]">
                    Combined HSSC (Gap)
                  </span>
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm leading-5 font-bold text-[#0B3D26] group-hover:translate-x-0.5 transition-transform">
                <span>View criteria</span>
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>

            {/* Card 3 */}
            <a
              href="#grade-ix"
              className="group flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#FAFAF7] border border-[#E5E7EB] hover:border-[#2E6B4A] hover:-translate-y-0.5 hover:shadow-sm transition-all text-[#17202A]"
            >
              <div className="flex items-center sm:items-start gap-4 sm:flex-col">
                <span className="flex-none w-12 h-12 rounded-xl bg-[#EAF2ED] flex items-center justify-center text-[#0B3D26]">
                  <BookIcon className="w-6 h-6" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[22px] text-[#5E6873]">
                    I am starting Grade IX
                  </span>
                  <span className="text-[17px] sm:text-[19px] leading-7 font-bold text-[#17202A]">
                    Grade IX
                  </span>
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm leading-5 font-bold text-[#0B3D26] group-hover:translate-x-0.5 transition-transform">
                <span>View criteria</span>
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>

            {/* Card 4 */}
            <a
              href="#grade-xi"
              className="group flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#FAFAF7] border border-[#E5E7EB] hover:border-[#2E6B4A] hover:-translate-y-0.5 hover:shadow-sm transition-all text-[#17202A]"
            >
              <div className="flex items-center sm:items-start gap-4 sm:flex-col">
                <span className="flex-none w-12 h-12 rounded-xl bg-[#EAF2ED] flex items-center justify-center text-[#0B3D26]">
                  <CapIcon className="w-6 h-6" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[22px] text-[#5E6873]">
                    I am starting Grade XI
                  </span>
                  <span className="text-[17px] sm:text-[19px] leading-7 font-bold text-[#17202A]">
                    Grade XI
                  </span>
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm leading-5 font-bold text-[#0B3D26] group-hover:translate-x-0.5 transition-transform">
                <span>View criteria</span>
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Quick jump tags for existing / other categories */}
          <div className="flex flex-col gap-3 mt-7 sm:mt-8">
            <p className="m-0 text-sm sm:text-base leading-6 text-[#3A4551]">
              <span className="font-bold text-[#17202A]">
                Already a ZUEB student, or looking for something else?
              </span>
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              <a
                href="#grade-x"
                className="inline-flex items-center min-h-[40px] px-4 rounded-full bg-white border border-[#CFE0D6] text-sm leading-5 font-semibold text-[#17202A] hover:bg-[#EAF2ED] hover:border-[#2E6B4A] transition-colors"
              >
                Grade X
              </a>
              <a
                href="#grade-xii"
                className="inline-flex items-center min-h-[40px] px-4 rounded-full bg-white border border-[#CFE0D6] text-sm leading-5 font-semibold text-[#17202A] hover:bg-[#EAF2ED] hover:border-[#2E6B4A] transition-colors"
              >
                Grade XII
              </a>
              <a
                href="#failure"
                className="inline-flex items-center min-h-[40px] px-4 rounded-full bg-white border border-[#CFE0D6] text-sm leading-5 font-semibold text-[#17202A] hover:bg-[#EAF2ED] hover:border-[#2E6B4A] transition-colors"
              >
                Failure / Absentees
              </a>
              <a
                href="#improvement"
                className="inline-flex items-center min-h-[40px] px-4 rounded-full bg-white border border-[#CFE0D6] text-sm leading-5 font-semibold text-[#17202A] hover:bg-[#EAF2ED] hover:border-[#2E6B4A] transition-colors"
              >
                Improvement
              </a>
              <a
                href="#additional"
                className="inline-flex items-center min-h-[40px] px-4 rounded-full bg-white border border-[#CFE0D6] text-sm leading-5 font-semibold text-[#17202A] hover:bg-[#EAF2ED] hover:border-[#2E6B4A] transition-colors"
              >
                Additional
              </a>
              <a
                href="#parallel"
                className="inline-flex items-center min-h-[40px] px-4 rounded-full bg-white border border-[#CFE0D6] text-sm leading-5 font-semibold text-[#17202A] hover:bg-[#EAF2ED] hover:border-[#2E6B4A] transition-colors"
              >
                Parallel Stream
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES & DETAILED REQUIREMENTS */}
      <section id="categories" className="reveal bg-[#EAF2ED]">
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
          {/* Section Heading */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span className="w-7 h-[2px] bg-[#C89B3C] block" />
              <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
                Categories
              </p>
            </div>
            <h2 className="m-0 mt-3 text-[26px] sm:text-[30px] lg:text-[32px] leading-[34px] sm:leading-[38px] lg:leading-[40px] font-extrabold tracking-[-0.01em] text-[#17202A]">
              Eligibility by category
            </h2>
          </div>

          {/* GROUP 1: COMBINED (GAP) */}
          <div className="mt-8 sm:mt-12">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#C89B3C] block" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
                  Private candidates
                </p>
              </div>
              <h3 className="m-0 mt-3 text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[40px] font-extrabold tracking-[-0.01em] text-[#17202A]">
                Combined (Gap)
              </h3>
              <p className="m-0 mt-3 max-w-[640px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#3A4551]">
                For candidates with at least a two-year gap after passing Grade VIII or SSC. Appear in Part I &amp; II together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-6 sm:mt-8">
              {data.categories.combined.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#CFE0D6] shadow-sm"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold tracking-[0.04em] text-[#2E6B4A]">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="m-0 text-[22px] sm:text-[26px] leading-[30px] sm:leading-[34px] font-extrabold text-[#17202A]">
                      {item.title}
                    </h4>
                  </div>

                  {/* Who can apply */}
                  <div className="flex flex-col gap-2">
                    <p className="m-0 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                      Who can apply
                    </p>
                    <p className="m-0 text-sm sm:text-base leading-6 text-[#17202A]">
                      {item.whoCanApply}
                    </p>
                  </div>

                  {/* Age limit */}
                  {item.ageLimits && item.ageLimits.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <p className="m-0 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                        Age limit
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.ageLimits.map((limit, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#FBF1D8] border border-[#EBD9A6] text-xs sm:text-[13px] leading-[18px] font-semibold text-[#17202A]"
                          >
                            {limit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Documents */}
                  {item.documents && item.documents.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <p className="m-0 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                        Documents
                      </p>
                      <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
                        {item.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                            <span className="text-sm sm:text-base leading-6 text-[#17202A]">
                              {doc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Note */}
                  {item.note && (
                    <p className="m-0 text-sm leading-[22px] text-[#5E6873]">
                      <span className="font-semibold text-[#17202A]">Note:</span> {item.note}
                    </p>
                  )}

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/923424049132?text=${encodeURIComponent(item.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-lg bg-[#0B3D26] hover:bg-[#0B3D26]/90 active:scale-98 text-white text-sm sm:text-base leading-5 font-bold transition-all shadow-sm"
                  >
                    <WhatsAppIcon className="w-[18px] h-[18px]" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* GROUP 2: NEW ENROLLMENT */}
          <div className="mt-14 sm:mt-18">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#C89B3C] block" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
                  New enrollment
                </p>
              </div>
              <h3 className="m-0 mt-3 text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[40px] font-extrabold tracking-[-0.01em] text-[#17202A]">
                Grade IX and Grade XI
              </h3>
              <p className="m-0 mt-3 max-w-[640px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#3A4551]">
                Regular and private entry for students starting a new level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-6 sm:mt-8">
              {data.categories.newEnrollment.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#CFE0D6] shadow-sm"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold tracking-[0.04em] text-[#2E6B4A]">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="m-0 text-[22px] sm:text-[26px] leading-[30px] sm:leading-[34px] font-extrabold text-[#17202A]">
                      {item.title}
                    </h4>
                  </div>

                  {/* Who can apply */}
                  <div className="flex flex-col gap-2">
                    <p className="m-0 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                      Who can apply
                    </p>
                    {Array.isArray(item.whoCanApply) ? (
                      <div className="flex flex-col gap-1">
                        {item.whoCanApply.map((entry, idx) => (
                          <p key={idx} className="m-0 text-sm sm:text-base leading-6 text-[#17202A]">
                            <span className="font-bold">{entry.label}:</span> {entry.text}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="m-0 text-sm sm:text-base leading-6 text-[#17202A]">
                        {item.whoCanApply}
                      </p>
                    )}
                  </div>

                  {/* Age limit */}
                  {item.ageLimits && item.ageLimits.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <p className="m-0 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                        Age limit
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.ageLimits.map((limit, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#FBF1D8] border border-[#EBD9A6] text-xs sm:text-[13px] leading-[18px] font-semibold text-[#17202A]"
                          >
                            {limit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Documents */}
                  {item.documents && item.documents.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <p className="m-0 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                        Documents
                      </p>
                      <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
                        {item.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                            <span className="text-sm sm:text-base leading-6 text-[#17202A]">
                              {doc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/923424049132?text=${encodeURIComponent(item.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-lg bg-[#0B3D26] hover:bg-[#0B3D26]/90 active:scale-98 text-white text-sm sm:text-base leading-5 font-bold transition-all shadow-sm"
                  >
                    <WhatsAppIcon className="w-[18px] h-[18px]" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* GROUP 3: CONTINUING STUDENTS */}
          <div className="mt-14 sm:mt-18">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#C89B3C] block" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
                  Continuing students
                </p>
              </div>
              <h3 className="m-0 mt-3 text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[40px] font-extrabold tracking-[-0.01em] text-[#17202A]">
                Already enrolled with ZUEB?
              </h3>
              <p className="m-0 mt-3 max-w-[640px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#3A4551]">
                Grade X and XII, failed subjects, improvement, additional subjects and parallel streams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-6 sm:mt-8">
              {data.categories.continuing.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-[#CFE0D6] shadow-sm hover:border-[#2E6B4A]/50 transition-all"
                >
                  {/* Card Header with Icon and Badge */}
                  <div className="flex items-center gap-3">
                    <span className="flex-none w-11 h-11 rounded-[10px] bg-[#EAF2ED] flex items-center justify-center text-[#0B3D26]">
                      {renderIcon(item.iconType, 'w-[22px] h-[22px] text-[#0B3D26]')}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="m-0 text-lg leading-[26px] font-bold text-[#17202A]">
                        {item.title}
                      </h4>
                      <span className="text-xs leading-4 font-bold tracking-[0.04em] uppercase text-[#2E6B4A]">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Description / Points */}
                  {item.points && (
                    <div className="flex flex-col gap-2">
                      {item.points.map((pt, idx) => (
                        <p key={idx} className="m-0 text-sm sm:text-base leading-6 text-[#17202A]">
                          {pt}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Age Limits if present (e.g. Additional) */}
                  {item.ageLimits && item.ageLimits.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.ageLimits.map((limit, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#FBF1D8] border border-[#EBD9A6] text-xs leading-[18px] font-semibold text-[#17202A]"
                        >
                          {limit}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Required permission note if present */}
                  {item.permissionNote && (
                    <p className="m-0 text-sm leading-[22px] text-[#5E6873]">
                      <span className="font-bold text-[#17202A]">You will need:</span>{' '}
                      {item.permissionNote}
                    </p>
                  )}

                  {/* WhatsApp CTA Link */}
                  <a
                    href={`https://wa.me/923424049132?text=${encodeURIComponent(item.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 min-h-[44px] text-sm sm:text-base leading-5 font-bold text-[#0B3D26] hover:text-[#0B3D26]/80 group"
                  >
                    <span>Ask on WhatsApp</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPORTANT BOARD RULES */}
      <section id="rules" className="reveal bg-[#FAFAF7]">
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
          <div className="p-6 sm:p-10 rounded-[20px] bg-[#FBF6E9] border border-[#EBD9A6]">
            {/* Header */}
            <div className="flex items-center gap-3">
              <span className="text-[#8A6425]">
                <ClockIcon className="w-6 h-6" />
              </span>
              <h2 className="m-0 text-[24px] sm:text-[28px] leading-[32px] sm:leading-[36px] font-extrabold text-[#17202A]">
                Important board rules
              </h2>
            </div>

            {/* If rules are grouped (Annual I 2027) */}
            {data.boardRulesGroups && (
              <div className="mt-8 flex flex-col gap-8">
                {data.boardRulesGroups.map((group, gIdx) => (
                  <div
                    key={gIdx}
                    className={gIdx > 0 ? 'pt-8 border-t border-[#EBD9A6]' : ''}
                  >
                    <p className="m-0 mb-5 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#8A6425]">
                      {group.groupTitle}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-x-12 sm:gap-y-7">
                      {group.rules.map((rule, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-4">
                          <span className="flex-none w-11 h-11 rounded-[10px] bg-white border border-[#EBD9A6] flex items-center justify-center text-[#8A6425]">
                            {renderIcon(rule.iconType, 'w-[22px] h-[22px] text-[#8A6425]')}
                          </span>
                          <div className="flex flex-col gap-1">
                            <h4 className="m-0 text-base leading-6 font-bold text-[#17202A]">
                              {rule.title}
                            </h4>
                            <p className="m-0 text-sm sm:text-base leading-6 text-[#3A4551]">
                              {rule.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* If rules are flat (Annual II 2026) */}
            {data.boardRules && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-x-12 sm:gap-y-8 mt-8">
                {data.boardRules.map((rule, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 ${
                      rule.fullWidth ? 'md:col-span-2' : ''
                    }`}
                  >
                    <span className="flex-none w-11 h-11 rounded-[10px] bg-white border border-[#EBD9A6] flex items-center justify-center text-[#8A6425]">
                      {renderIcon(rule.iconType, 'w-[22px] h-[22px] text-[#8A6425]')}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="m-0 text-base leading-6 font-bold text-[#17202A]">
                        {rule.title}
                      </h4>
                      <p className="m-0 text-sm sm:text-base leading-6 text-[#3A4551]">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Helpdesk link */}
            <p className="m-0 mt-8 pt-5 border-t border-[#EBD9A6] text-sm leading-[22px] text-[#5E6873]">
              Enrollment query? ZUEB helpdesk:{' '}
              <a
                href={`mailto:${SITE.zuebHelpdesk}`}
                className="font-semibold text-[#17202A] hover:underline"
              >
                {SITE.zuebHelpdesk}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section id="contact-cta" className="reveal bg-[#0B3D26] text-white">
        <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-22">
          <div className="flex flex-col items-center text-center">
            <h2 className="m-0 text-[28px] sm:text-[32px] lg:text-[36px] leading-[36px] sm:leading-[40px] lg:leading-[44px] font-extrabold tracking-[-0.01em] text-white">
              Not sure which category you are in?
            </h2>
            <p className="m-0 mt-3 max-w-[560px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#CFE0D6]">
              Tell us when you passed your last exam and your age. We will confirm your category and session, and explain fees, installments and scholarships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-8">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex items-center justify-center gap-2.5 w-full sm:w-auto h-14 px-7 rounded-lg bg-white text-[#0B3D26] hover:bg-white/90 active:scale-98 text-base leading-5 font-bold transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={SITE.phoneHref}
                className="btn flex items-center justify-center gap-2.5 w-full sm:w-auto h-14 px-7 rounded-lg border-[1.5px] border-white text-white hover:bg-white/10 active:scale-98 text-base leading-5 font-bold transition-all"
              >
                <PhoneIcon className="w-[18px] h-[18px]" />
                <span>Call {SITE.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
