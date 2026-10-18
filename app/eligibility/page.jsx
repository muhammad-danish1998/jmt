import React from 'react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import ScrollToTop from '../../src/components/ScrollToTop';
import FloatingWhatsApp from '../../src/components/FloatingWhatsApp';
import { SITE } from '../../src/lib/site';

export const metadata = {
  title: 'Eligibility & Admission Criteria | Ziauddin Board (ZUEB)',
  description:
    'Select your examination session to review official ZUEB eligibility criteria for Annual (I) 2027 and Annual (II) 2026. SSC Matric & HSSC Inter admissions, age limits, and gap requirements.',
  alternates: {
    canonical: '/eligibility',
  },
};

export default function EligibilityChooserPage() {
  const jsonLd = {
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
        name: 'Eligibility & Admission Criteria',
        item: `${SITE.url}/eligibility`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#0B3D26] selection:text-white bg-[#FAFAF7] text-[#17202A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Header Section */}
        <section className="bg-[#FAFAF7]">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
            <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-[800px]">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-sm leading-[22px] text-[#5E6873]"
              >
                <Link href="/" className="hover:text-[#17202A] transition-colors">
                  Home
                </Link>
                <span aria-hidden="true" className="text-[#8291A3]">/</span>
                <span className="font-semibold text-[#17202A]" aria-current="page">
                  Eligibility
                </span>
              </nav>

              <div className="flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#C89B3C] block" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
                  Select Examination Session
                </p>
              </div>

              <h1 className="m-0 text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[48px] lg:leading-[56px] font-extrabold tracking-[-0.015em] text-[#17202A]">
                ZUEB Eligibility &amp; Admission Criteria
              </h1>

              <p className="m-0 text-base sm:text-lg leading-[26px] sm:leading-[30px] text-[#3A4551]">
                Ziauddin University Examination Board (ZUEB) publishes separate regulations and age limits for each examination cycle. Choose a session below to view detailed requirements, required documents, and board guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Session Chooser Cards */}
        <section className="reveal bg-white">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* SESSION 1: Annual (I) 2027 */}
              <article className="flex flex-col justify-between p-6 sm:p-10 rounded-2xl bg-[#FAFAF7] border-2 border-[#CFE0D6] hover:border-[#2E6B4A] hover:shadow-md transition-all">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold tracking-[0.04em] text-[#2E6B4A]">
                      SSC &amp; HSSC Enrollment
                    </span>
                    <a
                      href="https://zueb.edu.pk/wp-content/uploads/2026/09/Eligibility-Criteria-Annual-I-Enrollment-Examination-2027-ver.01.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B3D26] hover:underline"
                    >
                      <span>Official PDF (ver. 01)</span>
                      <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <h2 className="m-0 text-[26px] sm:text-[32px] leading-[34px] sm:leading-[40px] font-extrabold text-[#17202A]">
                      Annual (I) 2027
                    </h2>
                    <p className="m-0 mt-3 text-sm sm:text-base leading-6 text-[#3A4551]">
                      For candidates enrolling in Matric (SSC) or Intermediate (HSSC) for the 2027 academic year. Covers fresh school admissions, private candidates, and 2-year combined gap enrollment.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-col gap-3 py-4 border-y border-[#E5E7EB]">
                    <p className="m-0 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                      Key Criteria Highlights
                    </p>
                    <ul className="m-0 p-0 list-none flex flex-col gap-2 text-sm sm:text-[15px] leading-6 text-[#17202A]">
                      <li className="flex items-start gap-2.5">
                        <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                        <span><strong className="font-bold">Grade IX:</strong> Regular age 12 to 18 yrs (Grade VIII passed 2026 or earlier); Private 12+ yrs</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                        <span><strong className="font-bold">Grade XI:</strong> Regular age up to 23 yrs (SSC passed 2021–2026); Private 14+ yrs</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                        <span><strong className="font-bold">Combined (Gap):</strong> At least 2-year gap after Grade VIII or SSC</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                        <span><strong className="font-bold">Continuing:</strong> Grade X, XII, Failure, Improvement &amp; Additional subjects</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/eligibility/annual-1-2027"
                    className="btn flex items-center justify-center gap-2.5 w-full h-14 px-6 rounded-lg bg-[#0B3D26] hover:bg-[#0B3D26]/90 active:scale-98 text-white text-base leading-5 font-bold transition-all shadow-sm"
                  >
                    <span>View Annual (I) 2027 Criteria</span>
                    <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* SESSION 2: Annual (II) 2026 */}
              <article className="flex flex-col justify-between p-6 sm:p-10 rounded-2xl bg-[#FAFAF7] border-2 border-[#CFE0D6] hover:border-[#2E6B4A] hover:shadow-md transition-all">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold tracking-[0.04em] text-[#2E6B4A]">
                      SSC &amp; HSSC Examination
                    </span>
                    <a
                      href="https://zueb.edu.pk/wp-content/uploads/2026/07/Eligibility-Criteria-Annual-II-Examination-2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B3D26] hover:underline"
                    >
                      <span>Official PDF</span>
                      <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <h2 className="m-0 text-[26px] sm:text-[32px] leading-[34px] sm:leading-[40px] font-extrabold text-[#17202A]">
                      Annual (II) 2026
                    </h2>
                    <p className="m-0 mt-3 text-sm sm:text-base leading-6 text-[#3A4551]">
                      For candidates appearing in the second annual examination series of 2026. Features extended age allowances for regular admissions and private gap candidates.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-col gap-3 py-4 border-y border-[#E5E7EB]">
                    <p className="m-0 text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                      Key Criteria Highlights
                    </p>
                    <ul className="m-0 p-0 list-none flex flex-col gap-2 text-sm sm:text-[15px] leading-6 text-[#17202A]">
                      <li className="flex items-start gap-2.5">
                        <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                        <span><strong className="font-bold">Grade IX:</strong> Regular age 12 to 20 yrs (Grade VIII passed 2025 or before); Private 12+ yrs</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                        <span><strong className="font-bold">Grade XI:</strong> Regular age up to 25 yrs (SSC passed 2020–2025); Private gap &gt; 5 yrs</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                        <span><strong className="font-bold">Combined (Gap):</strong> At least 2-year gap after Grade VIII or SSC</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-none w-1.5 h-1.5 mt-2 rounded-full bg-[#C89B3C] block" />
                        <span><strong className="font-bold">Board Rule:</strong> Part I students of Annual (I) 2026 cannot appear in Annual (II) 2026</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/eligibility/annual-2-2026"
                    className="btn flex items-center justify-center gap-2.5 w-full h-14 px-6 rounded-lg bg-[#0B3D26] hover:bg-[#0B3D26]/90 active:scale-98 text-white text-base leading-5 font-bold transition-all shadow-sm"
                  >
                    <span>View Annual (II) 2026 Criteria</span>
                    <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Bottom Advisory CTA */}
        <section className="reveal bg-[#0B3D26] text-white">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-16 sm:py-20">
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
                  <svg aria-hidden="true" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={SITE.phoneHref}
                  className="btn flex items-center justify-center gap-2.5 w-full sm:w-auto h-14 px-7 rounded-lg border-[1.5px] border-white text-white hover:bg-white/10 active:scale-98 text-base leading-5 font-bold transition-all"
                >
                  <svg aria-hidden="true" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call {SITE.phone}</span>
                </a>
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
