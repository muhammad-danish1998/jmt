'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE } from '../lib/site';

const FAQ_ITEMS = [
  {
    id: 'combined-gap',
    question: 'Who can take the Combined (Gap) exam?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551]">
        Candidates with a gap of at least two years after passing Grade VIII (Combined SSC) or SSC (Combined HSSC) can appear as private candidates. Age limits and the pass year depend on the exam session, so check the page for your session:{' '}
        <Link href="/eligibility/annual-1-2027" className="font-bold text-[#0B3D26] hover:underline">
          Annual (I) 2027
        </Link>{' '}
        or{' '}
        <Link href="/eligibility/annual-2-2026" className="font-bold text-[#0B3D26] hover:underline">
          Annual (II) 2026
        </Link>
        .
      </p>
    ),
  },
  {
    id: 'result-time',
    question: 'How long does it take to get my result?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551]">
        Your result comes about two months after the exam. Exam and result dates are set by ZUEB.
      </p>
    ),
  },
  {
    id: 'documents',
    question: 'Which documents do I need?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551]">
        Every candidate needs a B-Form / CRC / CNIC copy and a recent formal photo with a blue or white background. Some categories also need a School Leaving Certificate or an SSC Marksheet &amp; Certificate. Upload scans of the originals, because photocopies are not accepted.{' '}
        <Link href="/eligibility" className="font-bold text-[#0B3D26] hover:underline">
          See documents by category
        </Link>
        .
      </p>
    ),
  },
  {
    id: 'migration',
    question: 'I passed Matric from a board outside Sindh. What do I need?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551]">
        You need a Migration Certificate / NOC issued in the name of the Ziauddin University Examination Board (ZUEB), along with your other documents.
      </p>
    ),
  },
  {
    id: 'sessions',
    question: 'What is the difference between Annual (I) and Annual (II)?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551]">
        ZUEB holds two annual examinations, Annual (I) and Annual (II), and the eligibility rules differ for each. For example, Part I students who appeared in the Annual (I) 2026 exam are not eligible for Annual (II) 2026. Choose your session on the{' '}
        <Link href="/eligibility" className="font-bold text-[#0B3D26] hover:underline">
          Eligibility page
        </Link>
        .
      </p>
    ),
  },
  {
    id: 'scholarships',
    question: 'Do you offer scholarships?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551]">
        Yes. We offer a merit scholarship based on your previous result, and need-based support with documents. Criteria and amounts are decided by JMT administration, so message our admissions team to apply.
      </p>
    ),
  },
  {
    id: 'installments',
    question: 'Can I pay the fee in installments?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551]">
        Yes, you can pay in installments. Message our admissions team on WhatsApp and we will arrange a plan that suits you.
      </p>
    ),
  },
  {
    id: 'apply-steps',
    question: 'How do I apply?',
    answer: (
      <ol className="m-0 p-0 list-none flex flex-col gap-2.5">
        {[
          'Send clear pictures of your original documents on WhatsApp, in JPG or PNG format.',
          'We send you the enrollment challan. Pay it.',
          'Your enrollment card arrives.',
          'Pay the examination challan.',
          'Your admit card arrives.',
          'Appear in the exam.',
          'Your result arrives about two months after the exam.',
        ].map((step, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#C89B3C] text-[#17202A] flex items-center justify-center text-[13px] leading-4 font-bold shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="text-base leading-[26px] text-[#3A4551]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    ),
  },
];

function StillHaveQuestionsCard({ className = '' }) {
  return (
    <div className={`flex flex-col gap-3.5 p-6 sm:p-7 rounded-2xl bg-[#0B3D26] text-white ${className}`}>
      <h3 className="m-0 text-xl sm:text-[22px] leading-7 sm:leading-[30px] font-extrabold text-white">
        Still have questions?
      </h3>
      <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#CFE0D6]">
        Chat with our admissions team. Share your last exam year and age, and we confirm your category.
      </p>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-lg bg-white text-[#0B3D26] text-[15px] leading-5 font-bold transition-all shadow-xs mt-1"
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
        <span>Ask Admissions on WhatsApp</span>
      </a>
      <Link
        href="/eligibility"
        className="btn inline-flex items-center gap-2 min-h-[44px] text-sm leading-5 font-bold text-white hover:underline mt-0.5"
      >
        <span>View eligibility criteria</span>
        <svg
          aria-hidden="true"
          width="16"
          height="16"
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
    </div>
  );
}

export default function FAQ() {
  // First item open by default as in design-reference
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full bg-white text-[#17202A] overflow-hidden">
      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Header & (on desktop) Still Have Questions Card */}
          <div className="reveal flex flex-col gap-7 sm:gap-8">
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-3">
                <span className="w-6 sm:w-7 h-[2px] bg-[#C89B3C] block shrink-0" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#2E6B4A]">
                  FAQ
                </p>
              </div>

              <h2 className="m-0 mt-3 sm:mt-4 text-[26px] sm:text-[32px] lg:text-[36px] leading-[34px] sm:leading-[40px] lg:leading-[44px] font-extrabold tracking-[-0.01em] text-[#17202A]">
                Questions we hear most
              </h2>

              <p className="m-0 mt-3 max-w-[440px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#3A4551]">
                Quick answers about eligibility, documents, fees and scholarships.
              </p>
            </div>

            {/* Desktop Still Have Questions Card */}
            <StillHaveQuestionsCard className="hidden lg:flex" />
          </div>

          {/* Right Column: 8 Accordion Items */}
          <div className="reveal flex flex-col gap-3" style={{ '--i': 1 }}>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openItem === idx;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#F2F7F4] border-[#CFE0D6]'
                      : 'bg-[#FAFAF7] border-[#E5E7EB] hover:border-[#CFE0D6]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 min-h-[44px] p-4 sm:p-5 sm:px-6 cursor-pointer text-left bg-transparent border-none"
                  >
                    <span className="text-base sm:text-[17px] leading-6 sm:leading-[26px] font-bold text-[#17202A]">
                      {item.question}
                    </span>

                    {/* Smooth Plus/Minus Toggle Icon (150ms fade) */}
                    <span className="w-8 h-8 rounded-full bg-[#EAF2ED] flex items-center justify-center shrink-0 relative">
                      {/* Plus icon */}
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
                        className={`absolute transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? 'opacity-0 rotate-90 scale-75 pointer-events-none'
                            : 'opacity-100 rotate-0 scale-100'
                        }`}
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      {/* Minus icon */}
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
                        className={`transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 -rotate-90 scale-75 pointer-events-none'
                        }`}
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth Grid Rows Height Animation */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={`grid transition-[grid-template-rows] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 sm:px-6 sm:pb-5 pt-0">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile Still Have Questions Card */}
            <StillHaveQuestionsCard className="flex lg:hidden mt-4" />
          </div>

        </div>
      </div>
    </section>
  );
}
