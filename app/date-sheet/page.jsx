import React from 'react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import ScrollToTop from '../../src/components/ScrollToTop';
import FloatingWhatsApp from '../../src/components/FloatingWhatsApp';
import { SITE } from '../../src/lib/site';

export const metadata = {
  title: {
    absolute: 'ZUEB Date Sheets | SSC and HSSC | JMT Karachi',
  },
  description:
    'Ziauddin University Examination Board (ZUEB) exam date sheets for SSC Matric and HSSC Intermediate. Annual (II) 2026 timetable, subject timings, and official PDFs.',
  alternates: {
    canonical: `${SITE.url}/date-sheet`,
  },
  openGraph: {
    title: 'ZUEB Date Sheets | SSC and HSSC | JMT Karachi',
    description:
      'Ziauddin University Examination Board (ZUEB) exam date sheets for SSC Matric and HSSC Intermediate. Annual (II) 2026 timetable, subject timings, and official PDFs.',
    url: `${SITE.url}/date-sheet`,
    type: 'website',
  },
};

export default function DateSheetHubPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Date Sheet',
          item: `${SITE.url}/date-sheet`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/date-sheet`,
      url: `${SITE.url}/date-sheet`,
      name: 'ZUEB Date Sheets | SSC and HSSC | JMT Karachi',
      description:
        'Ziauddin University Examination Board (ZUEB) exam date sheets for SSC Matric and HSSC Intermediate.',
      dateModified: '2026-10',
      publisher: {
        '@type': 'EducationalOrganization',
        name: SITE.name,
        url: SITE.url,
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#17202A] selection:bg-[#0B3D26] selection:text-white">
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* 1. HERO HEADER */}
        <section className="bg-[#FAFAF7]">
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
                <span className="font-semibold text-[#17202A]" aria-current="page">
                  Date Sheet
                </span>
              </nav>

              {/* Page Title */}
              <h1 className="m-0 text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[48px] lg:leading-[56px] font-extrabold tracking-[-0.015em] text-[#17202A]">
                ZUEB Date Sheets
              </h1>

              {/* Subtitle */}
              <p className="m-0 text-base sm:text-lg leading-[26px] sm:leading-[30px] text-[#3A4551]">
                Exam timetables for SSC (Class IX and X) and HSSC (Class XI and XII). Every page links to the official ZUEB notice.
              </p>

              {/* Authority Note */}
              <p className="m-0 text-sm leading-[22px] text-[#5E6873]">
                Dates are set by ZUEB. Always check the official notice before your paper.
              </p>

            </div>
          </div>
        </section>

        {/* 2. LATEST DATE SHEETS SECTION */}
        <section className="bg-white border-y border-[#E5E7EB]">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
            
            <div className="flex items-center gap-3">
              <span className="w-7 h-[2px] bg-[#C89B3C] block" />
              <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
                Latest
              </p>
            </div>

            <h2 className="m-0 mt-3 text-2xl sm:text-[32px] lg:text-[36px] leading-8 sm:leading-[40px] lg:leading-[44px] font-extrabold tracking-[-0.01em] text-[#17202A]">
              Annual (II) 2026
            </h2>

            {/* 2 Cards Grid: SSC (Coming Soon) & HSSC (Active) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-8 sm:mt-10">
              
              {/* Card 1: SSC Date Sheet (Coming Soon per requirements) */}
              <article className="flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#CFE0D6] shadow-xs">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold tracking-[0.04em] text-[#2E6B4A]">
                      SSC
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-xs leading-4 font-bold text-[#5E6873]">
                      Coming soon
                    </span>
                  </div>

                  <div>
                    <h3 className="m-0 text-xl sm:text-2xl leading-7 sm:leading-8 font-extrabold text-[#17202A]">
                      SSC Date Sheet
                    </h3>
                    <p className="m-0 mt-1 text-[15px] leading-6 text-[#3A4551]">
                      Class IX and Class X (Matric)
                    </p>
                  </div>

                  <ul className="m-0 p-0 list-none flex flex-col gap-2.5 pt-2">
                    <li className="flex items-center gap-2.5 text-sm sm:text-[15px] leading-6 text-[#17202A]">
                      <svg
                        aria-hidden="true"
                        className="w-[18px] h-[18px] shrink-0"
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
                      </svg>
                      <span>
                        <strong className="font-bold">Session:</strong> Annual (II) 2026
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 text-sm sm:text-[15px] leading-6 text-[#5E6873]">
                      <svg
                        aria-hidden="true"
                        className="w-[18px] h-[18px] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8291A3"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>
                        ZUEB has not released the SSC schedule yet.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center justify-center h-[52px] w-full sm:w-auto px-6 rounded-lg bg-[#F3F4F6] text-[#8291A3] text-[15px] leading-5 font-bold cursor-not-allowed select-none">
                    Schedule coming soon
                  </span>
                </div>
              </article>

              {/* Card 2: HSSC Date Sheet (Active & Real) */}
              <article className="flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#CFE0D6] shadow-xs">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold tracking-[0.04em] text-[#2E6B4A]">
                      HSSC
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#FBF1D8] border border-[#EBD9A6] text-xs leading-4 font-bold text-[#6B4A12]">
                      Latest
                    </span>
                  </div>

                  <div>
                    <h3 className="m-0 text-xl sm:text-2xl leading-7 sm:leading-8 font-extrabold text-[#17202A]">
                      HSSC Date Sheet
                    </h3>
                    <p className="m-0 mt-1 text-[15px] leading-6 text-[#3A4551]">
                      Class XI and Class XII (Intermediate)
                    </p>
                  </div>

                  <ul className="m-0 p-0 list-none flex flex-col gap-2.5 pt-2">
                    <li className="flex items-center gap-2.5 text-sm sm:text-[15px] leading-6 text-[#17202A]">
                      <svg
                        aria-hidden="true"
                        className="w-[18px] h-[18px] shrink-0"
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
                      </svg>
                      <span>
                        <strong className="font-bold">Session:</strong> Annual (II) 2026
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 text-sm sm:text-[15px] leading-6 text-[#17202A]">
                      <svg
                        aria-hidden="true"
                        className="w-[18px] h-[18px] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0B3D26"
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
                      <span>
                        <strong className="font-bold">Source checked:</strong> October 2026
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                  <Link
                    href="/date-sheet/annual-2-2026/hssc"
                    className="btn inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-lg bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-[15px] leading-5 font-bold transition-all shadow-xs"
                  >
                    <span>View date sheet</span>
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
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>

                  <a
                    href="https://zueb.edu.pk/wp-content/uploads/2026/10/Time-Table-HSSC-Annual-II-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-lg border-1.5 border-[#0B3D26] text-[#0B3D26] hover:bg-[#0B3D26]/5 active:scale-98 text-[15px] leading-5 font-bold transition-all bg-transparent"
                  >
                    <span>Official ZUEB notice</span>
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
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                </div>
              </article>

            </div>

          </div>
        </section>

        {/* 3. "NOT SURE WHICH SESSION APPLIES TO YOU?" CARD */}
        <section className="bg-white">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 sm:p-10 rounded-2xl bg-[#EAF2ED] border border-[#CFE0D6]">
              
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs">
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
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="m-0 text-xl sm:text-2xl leading-7 sm:leading-8 font-extrabold text-[#17202A]">
                    Not sure which session applies to you?
                  </h3>
                  <p className="m-0 max-w-[560px] text-[15px] sm:text-base leading-6 sm:leading-[26px] text-[#3A4551]">
                    Eligibility rules differ for each session. Check your category first, then follow the matching date sheet.
                  </p>
                </div>
              </div>

              <Link
                href="/eligibility"
                className="btn shrink-0 inline-flex items-center justify-center gap-2.5 h-[52px] w-full sm:w-auto px-6 rounded-lg bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-[15px] leading-5 font-bold transition-all shadow-xs"
              >
                <span>Check Eligibility</span>
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

            </div>
          </div>
        </section>

        {/* 4. GREEN CTA BAND */}
        <section className="bg-[#0B3D26] text-white">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-22">
            <div className="flex flex-col items-center text-center">
              
              <h2 className="m-0 text-[28px] sm:text-[32px] lg:text-[36px] leading-9 sm:leading-[40px] lg:leading-[44px] font-extrabold tracking-[-0.01em] text-white">
                Need help with enrollment?
              </h2>

              <p className="m-0 mt-3 max-w-[560px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#CFE0D6]">
                Tell us your class and the year of your last exam. We confirm your category and explain the next steps.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-8">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center justify-center gap-2.5 h-14 w-full sm:w-auto px-7 rounded-lg bg-white text-[#0B3D26] text-base leading-5 font-bold transition-all shadow-xs"
                >
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
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/eligibility"
                  className="btn flex items-center justify-center gap-2.5 h-14 w-full sm:w-auto px-7 rounded-lg border-1.5 border-white text-white hover:bg-white/10 active:scale-98 text-base leading-5 font-bold transition-all bg-transparent"
                >
                  <span>Check Eligibility</span>
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
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}
