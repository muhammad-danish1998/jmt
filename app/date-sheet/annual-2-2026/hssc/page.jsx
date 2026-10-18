import React from 'react';
import Link from 'next/link';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import ScrollToTop from '../../../../src/components/ScrollToTop';
import FloatingWhatsApp from '../../../../src/components/FloatingWhatsApp';
import { getHsscDateSheet, HSSC_FAQS } from '../../../../src/lib/date-sheets';
import { SITE } from '../../../../src/lib/site';

export const metadata = {
  title: {
    absolute: 'ZUEB HSSC Date Sheet Annual (II) 2026 | JMT Karachi',
  },
  description:
    'Class XI and XII HSSC date sheet for ZUEB Annual (II) 2026 with subjects, dates, timings and groups. Download the PDF. Source: official ZUEB notice.',
  alternates: {
    canonical: `${SITE.url}/date-sheet/annual-2-2026/hssc`,
  },
  openGraph: {
    title: 'ZUEB HSSC Date Sheet Annual (II) 2026 | JMT Karachi',
    description:
      'Class XI and XII HSSC date sheet for ZUEB Annual (II) 2026 with subjects, dates, timings and groups. Download the PDF. Source: official ZUEB notice.',
    url: `${SITE.url}/date-sheet/annual-2-2026/hssc`,
    type: 'article',
  },
};

export default async function HsscDateSheetPage(props) {
  const searchParams = await props.searchParams;
  const groupQuery = searchParams?.group || 'all';
  const data = getHsscDateSheet(groupQuery);

  const { meta, activeGroup, allGroups, classXI, classXII } = data;

  // JSON-LD Structured Data
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Annual (II) 2026',
          item: `${SITE.url}/date-sheet`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'HSSC',
          item: `${SITE.url}/date-sheet/annual-2-2026/hssc`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/date-sheet/annual-2-2026/hssc`,
      url: `${SITE.url}/date-sheet/annual-2-2026/hssc`,
      name: 'ZUEB HSSC Date Sheet Annual (II) 2026 | JMT Karachi',
      description:
        'Class XI and XII HSSC date sheet for ZUEB Annual (II) 2026 with subjects, dates, timings and groups. Download the PDF. Source: official ZUEB notice.',
      dateModified: '2026-10',
      publisher: {
        '@type': 'EducationalOrganization',
        name: SITE.name,
        url: SITE.url,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HSSC_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#17202A] selection:bg-[#0B3D26] selection:text-white">
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Print-specific style to ensure clean printouts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              header, footer, nav[aria-label="Breadcrumb"], .no-print {
                display: none !important;
              }
              body, main {
                background: #FFFFFF !important;
                color: #000000 !important;
              }
              table {
                page-break-inside: auto;
              }
              tr {
                page-break-inside: avoid;
                page-break-after: auto;
              }
            }
          `,
        }}
      />

      <div className="no-print">
        <Navbar />
      </div>

      <main id="main-content" className="flex-grow">
        {/* 1. HERO HEADER */}
        <section className="bg-[#FAFAF7]">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pt-10 sm:pt-14 pb-8 sm:pb-10">
            <div className="flex flex-col items-start gap-5 max-w-[1000px] w-full">
              
              {/* Breadcrumb Navigation */}
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-sm leading-[22px] text-[#5E6873]"
              >
                <Link href="/" className="hover:text-[#17202A] transition-colors">
                  Home
                </Link>
                <span aria-hidden="true" className="text-[#8291A3]">/</span>
                <Link href="/date-sheet" className="hover:text-[#17202A] transition-colors">
                  Date Sheet
                </Link>
                <span aria-hidden="true" className="text-[#8291A3]">/</span>
                <Link href="/date-sheet" className="hover:text-[#17202A] transition-colors">
                  Annual (II) 2026
                </Link>
                <span aria-hidden="true" className="text-[#8291A3]">/</span>
                <span className="font-semibold text-[#17202A]" aria-current="page">
                  HSSC
                </span>
              </nav>

              {/* Exact H1 Title */}
              <h1 className="m-0 text-[32px] sm:text-[40px] lg:text-[44px] leading-[40px] sm:leading-[48px] lg:leading-[52px] font-extrabold tracking-[-0.015em] text-[#17202A]">
                ZUEB HSSC Date Sheet, Annual (II) 2026
              </h1>

              {/* Intro Subtitle */}
              <p className="m-0 text-base sm:text-lg leading-[26px] sm:leading-[30px] text-[#3A4551]">
                Paper schedule for Class XI (Part I) and Class XII (Part II), copied from the ZUEB notice. Dates are set by ZUEB, so confirm each paper on the official notice and your admit card.
              </p>

              {/* SSC / HSSC Level Switcher */}
              <div
                role="tablist"
                aria-label="Exam level"
                className="no-print inline-flex p-1 gap-1 rounded-[10px] bg-[#EAF2ED] border border-[#CFE0D6]"
              >
                <Link
                  role="tab"
                  aria-selected="false"
                  href="/date-sheet"
                  className="inline-flex items-center min-h-[40px] px-4.5 rounded-lg text-sm leading-5 font-semibold text-[#17202A] hover:bg-black/5 transition-all"
                >
                  SSC (Class IX and X)
                </Link>
                <Link
                  role="tab"
                  aria-selected="true"
                  href="/date-sheet/annual-2-2026/hssc"
                  className="inline-flex items-center min-h-[40px] px-4.5 rounded-lg bg-[#0B3D26] text-white text-sm leading-5 font-bold shadow-xs transition-all"
                >
                  HSSC (Class XI and XII)
                </Link>
              </div>

              {/* Meta Checklist: Source Checked & PDF Link */}
              <ul className="m-0 p-0 list-none flex flex-row flex-wrap gap-4 sm:gap-6">
                <li className="flex items-center gap-2 text-sm leading-[22px] text-[#3A4551]">
                  <svg
                    aria-hidden="true"
                    className="w-[18px] h-[18px] text-[#0B3D26] shrink-0"
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
                  <span>
                    <strong className="font-bold">Source checked:</strong> {meta.sourceCheckedDisplay}
                  </span>
                </li>

                <li className="flex items-center gap-2 text-sm leading-[22px] text-[#3A4551]">
                  <svg
                    aria-hidden="true"
                    className="w-[18px] h-[18px] text-[#0B3D26] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
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
                    <strong className="font-bold">Source:</strong>{' '}
                    <a
                      href={meta.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#0B3D26] hover:underline"
                    >
                      official ZUEB notice (PDF)
                    </a>
                  </span>
                </li>
              </ul>

              {/* Download This Time Table Card */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 sm:px-7 sm:py-6 rounded-2xl bg-white border border-[#CFE0D6] w-full shadow-xs">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-12 h-12 rounded-xl bg-[#EAF2ED] flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-[#0B3D26]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15V3" />
                      <path d="m7 10 5 5 5-5" />
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    </svg>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[17px] leading-[26px] font-bold text-[#17202A]">
                      Download this time table
                    </span>
                    <span className="text-sm leading-[22px] text-[#5E6873]">
                      PDF, 2 pages, with the JMT logo. Same dates and timings as the ZUEB notice.
                    </span>
                  </div>
                </div>

                <a
                  href={meta.downloadPdfUrl}
                  download={meta.downloadPdfFileName}
                  className="btn shrink-0 inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-lg bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-[15px] leading-5 font-bold transition-all shadow-xs"
                >
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
                    <path d="M12 15V3" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 2. TIMETABLE CONTROLS & TABLES SECTION */}
        <section className="bg-[#FAFAF7]">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pt-4 pb-14 sm:pb-16">
            <div className="flex flex-col gap-6 sm:gap-8">
              
              {/* Controls: Class Anchor Pills & Group Filters */}
              <div className="no-print flex flex-col gap-4">
                
                {/* Jump to Class Pills */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`#${classXI.anchorId}`}
                    className="inline-flex items-center min-h-[44px] px-4.5 rounded-full bg-white border border-[#CFE0D6] text-[15px] leading-5 font-bold text-[#17202A] hover:bg-[#EAF2ED] active:scale-98 transition-colors shadow-2xs"
                  >
                    Class XI (Part I)
                  </a>
                  <a
                    href={`#${classXII.anchorId}`}
                    className="inline-flex items-center min-h-[44px] px-4.5 rounded-full bg-white border border-[#CFE0D6] text-[15px] leading-5 font-bold text-[#17202A] hover:bg-[#EAF2ED] active:scale-98 transition-colors shadow-2xs"
                  >
                    Class XII (Part II)
                  </a>
                </div>

                {/* "Show my group" Chips (Server Filter Links) */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]">
                    Show my group
                  </span>
                  
                  <div className="flex flex-wrap gap-2">
                    {allGroups.map((grp) => {
                      const isActive = grp.slug === activeGroup.slug;
                      const href =
                        grp.slug === 'all'
                          ? '/date-sheet/annual-2-2026/hssc'
                          : `/date-sheet/annual-2-2026/hssc?group=${grp.slug}`;

                      return (
                        <Link
                          key={grp.slug}
                          href={href}
                          aria-current={isActive ? 'page' : undefined}
                          className={`inline-flex items-center min-h-[40px] px-4 rounded-full text-sm leading-5 transition-all shadow-2xs ${
                            isActive
                              ? 'bg-[#0B3D26] font-bold text-white shadow-xs'
                              : 'bg-white border border-[#CFE0D6] font-semibold text-[#17202A] hover:bg-[#EAF2ED]'
                          }`}
                        >
                          {grp.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* TABLE 1: CLASS XI (HSSC Part I) */}
              <section
                id={classXI.anchorId}
                aria-labelledby={classXI.headingId}
                className="rounded-2xl bg-white border border-[#CFE0D6] overflow-hidden shadow-xs"
              >
                <div className="p-5 sm:p-7 pb-4 sm:pb-5">
                  <h2
                    id={classXI.headingId}
                    className="m-0 text-2xl sm:text-[28px] leading-8 sm:leading-9 font-extrabold text-[#17202A]"
                  >
                    {classXI.title}
                  </h2>
                  <p className="m-0 mt-1.5 text-sm sm:text-[15px] leading-6 text-[#5E6873]">
                    {classXI.session}
                  </p>
                </div>

                {/* Desktop Semantic Table */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full border-collapse min-w-[720px]">
                    <caption className="sr-only">
                      {classXI.title} HSSC date sheet, {classXI.session}
                    </caption>
                    <thead>
                      <tr className="bg-[#EAF2ED]">
                        <th
                          scope="col"
                          className="py-3.5 px-5 text-left text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-5 text-left text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-5 text-left text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]"
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-5 text-left text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]"
                        >
                          Group
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {classXI.dateBlocks.map((dateBlock) => (
                        <React.Fragment key={dateBlock.date}>
                          {dateBlock.papers.map((paper, pIdx) => {
                            const isFirst = pIdx === 0;
                            const isExactNotice = paper.note === 'printed exactly as in the ZUEB notice';
                            const isTimeMissing = !paper.time;
                            const isGroupMissing = !paper.groups || paper.groups.length === 0;

                            return (
                              <tr key={`${paper.subject}-${pIdx}`}>
                                {isFirst && (
                                  <th
                                    scope="rowgroup"
                                    rowSpan={dateBlock.papers.length}
                                    className="py-3.5 px-5 text-left align-top text-[15px] leading-6 font-bold text-[#17202A] whitespace-nowrap border-t border-[#CFE0D6]"
                                  >
                                    {dateBlock.formatted.display}
                                    <br />
                                    <span className="font-medium text-[#5E6873]">{dateBlock.day}</span>
                                  </th>
                                )}
                                <th
                                  scope="row"
                                  className={`py-3.5 px-5 text-left text-[15px] leading-6 font-bold text-[#17202A] ${
                                    isFirst ? 'border-t border-[#CFE0D6]' : 'border-t border-[#E5E7EB]'
                                  }`}
                                >
                                  {paper.subject}
                                </th>
                                <td
                                  className={`py-3.5 px-5 text-[15px] leading-6 text-[#3A4551] whitespace-nowrap ${
                                    isFirst ? 'border-t border-[#CFE0D6]' : 'border-t border-[#E5E7EB]'
                                  }`}
                                >
                                  {isTimeMissing ? (
                                    <span className="text-[#5E6873]">Time not printed in the notice</span>
                                  ) : (
                                    <>
                                      {paper.time}
                                      {isExactNotice && (
                                        <span className="font-bold text-[#8A6425]"> *</span>
                                      )}
                                    </>
                                  )}
                                </td>
                                <td
                                  className={`py-3.5 px-5 ${
                                    isFirst ? 'border-t border-[#CFE0D6]' : 'border-t border-[#E5E7EB]'
                                  }`}
                                >
                                  {isGroupMissing ? (
                                    <span className="text-sm leading-5 text-[#5E6873]">
                                      Not printed in the notice
                                    </span>
                                  ) : (
                                    <div className="flex flex-wrap gap-1.5">
                                      {paper.groups.map((grpName) => (
                                        <span
                                          key={grpName}
                                          className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold text-[#2E6B4A] whitespace-nowrap"
                                        >
                                          {grpName}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards (Rendered on mobile as in design) */}
                <div className="lg:hidden p-4 pt-0 flex flex-col gap-3">
                  {classXI.dateBlocks.map((dateBlock) => (
                    <div
                      key={dateBlock.date}
                      className="p-4 pb-1 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB]"
                    >
                      <span className="inline-flex px-2.5 py-1 rounded-md bg-[#0B3D26] text-white text-[13px] leading-[18px] font-bold">
                        {dateBlock.formatted.mobileBadge}
                      </span>
                      <div className="mt-2">
                        {dateBlock.papers.map((paper, pIdx) => {
                          const isExactNotice = paper.note === 'printed exactly as in the ZUEB notice';
                          const isTimeMissing = !paper.time;
                          const isGroupMissing = !paper.groups || paper.groups.length === 0;

                          return (
                            <div
                              key={`${paper.subject}-${pIdx}`}
                              className="flex flex-col gap-1.5 py-3 border-t border-[#E5E7EB] first:border-t-0"
                            >
                              <span className="text-base leading-6 font-bold text-[#17202A]">
                                {paper.subject}
                              </span>

                              <span className="flex items-center gap-2 text-sm leading-[22px] text-[#3A4551]">
                                <svg
                                  aria-hidden="true"
                                  className="w-4 h-4 text-[#0B3D26] shrink-0"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>
                                  {isTimeMissing ? (
                                    <span className="text-[#5E6873]">Time not printed in the notice</span>
                                  ) : (
                                    <>
                                      {paper.time}
                                      {isExactNotice && (
                                        <span className="font-bold text-[#8A6425]"> *</span>
                                      )}
                                    </>
                                  )}
                                </span>
                              </span>

                              <div className="flex flex-wrap gap-1.5 mt-0.5">
                                {isGroupMissing ? (
                                  <span className="text-xs leading-4 text-[#5E6873]">
                                    Not printed in the notice
                                  </span>
                                ) : (
                                  paper.groups.map((grpName) => (
                                    <span
                                      key={grpName}
                                      className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold text-[#2E6B4A] whitespace-nowrap"
                                    >
                                      {grpName}
                                    </span>
                                  ))
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TABLE 2: CLASS XII (HSSC Part II) */}
              <section
                id={classXII.anchorId}
                aria-labelledby={classXII.headingId}
                className="rounded-2xl bg-white border border-[#CFE0D6] overflow-hidden shadow-xs"
              >
                <div className="p-5 sm:p-7 pb-4 sm:pb-5">
                  <h2
                    id={classXII.headingId}
                    className="m-0 text-2xl sm:text-[28px] leading-8 sm:leading-9 font-extrabold text-[#17202A]"
                  >
                    {classXII.title}
                  </h2>
                  <p className="m-0 mt-1.5 text-sm sm:text-[15px] leading-6 text-[#5E6873]">
                    {classXII.session}
                  </p>
                </div>

                {/* Desktop Semantic Table */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full border-collapse min-w-[720px]">
                    <caption className="sr-only">
                      {classXII.title} HSSC date sheet, {classXII.session}
                    </caption>
                    <thead>
                      <tr className="bg-[#EAF2ED]">
                        <th
                          scope="col"
                          className="py-3.5 px-5 text-left text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-5 text-left text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-5 text-left text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]"
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-5 text-left text-xs leading-4 font-bold tracking-[0.1em] uppercase text-[#2E6B4A]"
                        >
                          Group
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {classXII.dateBlocks.map((dateBlock) => (
                        <React.Fragment key={dateBlock.date}>
                          {dateBlock.papers.map((paper, pIdx) => {
                            const isFirst = pIdx === 0;
                            const isExactNotice = paper.note === 'printed exactly as in the ZUEB notice';
                            const isTimeMissing = !paper.time;
                            const isGroupMissing = !paper.groups || paper.groups.length === 0;

                            return (
                              <tr key={`${paper.subject}-${pIdx}`}>
                                {isFirst && (
                                  <th
                                    scope="rowgroup"
                                    rowSpan={dateBlock.papers.length}
                                    className="py-3.5 px-5 text-left align-top text-[15px] leading-6 font-bold text-[#17202A] whitespace-nowrap border-t border-[#CFE0D6]"
                                  >
                                    {dateBlock.formatted.display}
                                    <br />
                                    <span className="font-medium text-[#5E6873]">{dateBlock.day}</span>
                                  </th>
                                )}
                                <th
                                  scope="row"
                                  className={`py-3.5 px-5 text-left text-[15px] leading-6 font-bold text-[#17202A] ${
                                    isFirst ? 'border-t border-[#CFE0D6]' : 'border-t border-[#E5E7EB]'
                                  }`}
                                >
                                  {paper.subject}
                                </th>
                                <td
                                  className={`py-3.5 px-5 text-[15px] leading-6 text-[#3A4551] whitespace-nowrap ${
                                    isFirst ? 'border-t border-[#CFE0D6]' : 'border-t border-[#E5E7EB]'
                                  }`}
                                >
                                  {isTimeMissing ? (
                                    <span className="text-[#5E6873]">Time not printed in the notice</span>
                                  ) : (
                                    <>
                                      {paper.time}
                                      {isExactNotice && (
                                        <span className="font-bold text-[#8A6425]"> *</span>
                                      )}
                                    </>
                                  )}
                                </td>
                                <td
                                  className={`py-3.5 px-5 ${
                                    isFirst ? 'border-t border-[#CFE0D6]' : 'border-t border-[#E5E7EB]'
                                  }`}
                                >
                                  {isGroupMissing ? (
                                    <span className="text-sm leading-5 text-[#5E6873]">
                                      Not printed in the notice
                                    </span>
                                  ) : (
                                    <div className="flex flex-wrap gap-1.5">
                                      {paper.groups.map((grpName) => (
                                        <span
                                          key={grpName}
                                          className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold text-[#2E6B4A] whitespace-nowrap"
                                        >
                                          {grpName}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards (Rendered on mobile as in design) */}
                <div className="lg:hidden p-4 pt-0 flex flex-col gap-3">
                  {classXII.dateBlocks.map((dateBlock) => (
                    <div
                      key={dateBlock.date}
                      className="p-4 pb-1 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB]"
                    >
                      <span className="inline-flex px-2.5 py-1 rounded-md bg-[#0B3D26] text-white text-[13px] leading-[18px] font-bold">
                        {dateBlock.formatted.mobileBadge}
                      </span>
                      <div className="mt-2">
                        {dateBlock.papers.map((paper, pIdx) => {
                          const isExactNotice = paper.note === 'printed exactly as in the ZUEB notice';
                          const isTimeMissing = !paper.time;
                          const isGroupMissing = !paper.groups || paper.groups.length === 0;

                          return (
                            <div
                              key={`${paper.subject}-${pIdx}`}
                              className="flex flex-col gap-1.5 py-3 border-t border-[#E5E7EB] first:border-t-0"
                            >
                              <span className="text-base leading-6 font-bold text-[#17202A]">
                                {paper.subject}
                              </span>

                              <span className="flex items-center gap-2 text-sm leading-[22px] text-[#3A4551]">
                                <svg
                                  aria-hidden="true"
                                  className="w-4 h-4 text-[#0B3D26] shrink-0"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>
                                  {isTimeMissing ? (
                                    <span className="text-[#5E6873]">Time not printed in the notice</span>
                                  ) : (
                                    <>
                                      {paper.time}
                                      {isExactNotice && (
                                        <span className="font-bold text-[#8A6425]"> *</span>
                                      )}
                                    </>
                                  )}
                                </span>
                              </span>

                              <div className="flex flex-wrap gap-1.5 mt-0.5">
                                {isGroupMissing ? (
                                  <span className="text-xs leading-4 text-[#5E6873]">
                                    Not printed in the notice
                                  </span>
                                ) : (
                                  paper.groups.map((grpName) => (
                                    <span
                                      key={grpName}
                                      className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs leading-4 font-bold text-[#2E6B4A] whitespace-nowrap"
                                    >
                                      {grpName}
                                    </span>
                                  ))
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Exact Footnote */}
              <p className="m-0 text-sm leading-[22px] text-[#5E6873]">
                <strong className="font-bold text-[#8A6425]">*</strong> Printed in the ZUEB notice exactly as shown (for example, a morning paper printed as PM, or a 2-hour paper with a 1.5-hour time slot). Please check the official notice before your paper.
              </p>

            </div>
          </div>
        </section>

        {/* 3. EXAM SHIFTS & INSTRUCTIONS FROM ZUEB */}
        <section className="bg-white border-t border-[#E5E7EB]">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              
              {/* Card 1: Exam shifts */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#EAF2ED] border border-[#CFE0D6] shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-[2px] bg-[#C89B3C] block" />
                  <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
                    Exam shifts
                  </p>
                </div>

                <ul className="m-0 mt-4 p-0 list-none flex flex-col gap-3">
                  {meta.shifts.map((shiftText) => (
                    <li
                      key={shiftText}
                      className="flex items-center gap-2.5 text-sm sm:text-[15px] leading-6 text-[#17202A]"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-[18px] h-[18px] text-[#0B3D26] shrink-0"
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
                      <span>{shiftText}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Instructions from ZUEB */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FBF6E9] border border-[#EBD9A6] shadow-xs">
                <div className="flex items-center gap-3">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-[#8A6425] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                  <h2 className="m-0 text-xl sm:text-[22px] leading-7 sm:leading-[30px] font-extrabold text-[#17202A]">
                    Instructions from ZUEB
                  </h2>
                </div>

                <ol className="m-0 mt-4.5 p-0 list-none flex flex-col gap-3">
                  {meta.instructions.map((instText, idx) => (
                    <li
                      key={instText}
                      className="flex items-start gap-3"
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#C89B3C] text-[#17202A] flex items-center justify-center text-xs leading-4 font-bold mt-0.5 shadow-2xs">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-[15px] leading-6 text-[#3A4551]">
                        {instText}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </div>
        </section>

        {/* 4. FAQ SECTION */}
        <section className="bg-white border-t border-[#E5E7EB]">
          <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pt-4 pb-16 sm:pb-20">
            <div className="flex items-center gap-3">
              <span className="w-7 h-[2px] bg-[#C89B3C] block" />
              <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.12em] uppercase text-[#2E6B4A]">
                FAQ
              </p>
            </div>

            <h2 className="m-0 mt-3 text-2xl sm:text-[32px] lg:text-[36px] leading-8 sm:leading-[40px] lg:leading-[44px] font-extrabold tracking-[-0.01em] text-[#17202A]">
              About this date sheet
            </h2>

            <div className="flex flex-col gap-3 mt-8 max-w-[880px]">
              {HSSC_FAQS.map((faq, idx) => (
                <details
                  key={faq.question}
                  open={idx === 0}
                  className="group rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] open:bg-[#F2F7F4] open:border-[#CFE0D6] transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 min-h-[44px] p-5 sm:p-6 cursor-pointer list-none select-none">
                    <span className="text-base sm:text-[17px] leading-6 sm:leading-[26px] font-bold text-[#17202A]">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#EAF2ED] flex items-center justify-center">
                      {/* Plus icon when closed */}
                      <svg
                        aria-hidden="true"
                        className="w-4.5 h-4.5 text-[#0B3D26] block group-open:hidden"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      {/* Minus icon when open */}
                      <svg
                        aria-hidden="true"
                        className="w-4.5 h-4.5 text-[#0B3D26] hidden group-open:block"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 sm:px-6 pb-5 pt-0">
                    <p className="m-0 text-sm sm:text-base leading-6 sm:leading-[26px] text-[#3A4551]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* 5. GREEN CTA BAND */}
        <section className="no-print bg-[#0B3D26] text-white">
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

      <div className="no-print">
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
