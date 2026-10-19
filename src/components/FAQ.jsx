'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, HelpCircle, MessageCircle } from 'lucide-react';
import { SITE } from '../lib/site';

const FAQ_ITEMS = [
  {
    id: 'combined-gap',
    question: 'Who can take the Combined (Gap) exam?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551] font-medium">
        Candidates with an academic gap of at least two years after passing Grade VIII (Combined SSC Matric) or SSC (Combined HSSC Intermediate) can appear as private candidates under ZUEB. Check session details:{' '}
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
      <p className="m-0 text-base leading-[26px] text-[#3A4551] font-medium">
        Official marksheet and results are typically published by Ziauddin University Examination Board (ZUEB) approximately 60 days following the conclusion of written examinations.
      </p>
    ),
  },
  {
    id: 'documents',
    question: 'Which documents do I need to submit?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551] font-medium">
        Every applicant requires a B-Form / CNIC copy, 4 passport-size photographs, and your last educational certificate (Grade VIII certificate, Middle pass, or SSC Marksheet). Original scans must be provided for board verification.{' '}
        <Link href="/eligibility" className="font-bold text-[#0B3D26] hover:underline">
          See full document checklist
        </Link>
        .
      </p>
    ),
  },
  {
    id: 'migration',
    question: 'I passed Matric from another board outside Sindh. Can I apply?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551] font-medium">
        Yes! Candidates from Federal Board, Punjab, KPK, Balochistan, or other Sindh boards can easily enroll. You will simply need an official Migration Certificate / NOC addressed to Ziauddin University Examination Board (ZUEB).
      </p>
    ),
  },
  {
    id: 'sessions',
    question: 'What is the difference between Annual (I) and Annual (II)?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551] font-medium">
        ZUEB conducts two main examination cycles annually. Annual (I) is typically held in Spring/Summer, while Annual (II) is held in Autumn. Choose your session on our{' '}
        <Link href="/eligibility" className="font-bold text-[#0B3D26] hover:underline">
          Eligibility Page
        </Link>
        .
      </p>
    ),
  },
  {
    id: 'scholarships',
    question: 'Are installment plans and scholarships available?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551] font-medium">
        Yes, JMT offers flexible installment arrangements as well as merit scholarships for top performers and need-based fee reductions for deserving families. Contact our counseling desk for assessment.
      </p>
    ),
  },
  {
    id: 'study-support',
    question: 'Do I have to attend physical classes daily?',
    answer: (
      <p className="m-0 text-base leading-[26px] text-[#3A4551] font-medium">
        No, gap candidates and working students have flexible study arrangements. We provide comprehensive notes, past papers, exam guidelines, and mock tests to prepare you thoroughly from home.
      </p>
    ),
  },
  {
    id: 'apply-steps',
    question: 'How do I complete my admission?',
    answer: (
      <ol className="m-0 p-0 list-none flex flex-col gap-2.5 font-medium">
        {[
          'Send your last pass marksheet and B-Form to our admissions desk via WhatsApp.',
          'We verify your eligibility and issue your official enrollment challan.',
          'Receive your ZUEB enrollment card and examination schedule.',
          'Appear in your scheduled examination center in Karachi.',
          'Receive your official ZUEB certificate, recognized by IBCC & HEC.',
        ].map((step, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
              {idx + 1}
            </span>
            <span className="text-sm sm:text-base leading-[24px] text-[#3A4551]">
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
    <div className={`flex flex-col gap-4 p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#0B3D26] to-[#2E6B4A] text-white shadow-xl border border-white/10 ${className}`}>
      <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center shrink-0">
        <HelpCircle className="w-6 h-6" />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <h3 className="m-0 text-xl sm:text-[22px] leading-tight font-extrabold text-white">
          Still have questions?
        </h3>
        <p className="m-0 text-sm leading-6 text-[#CFE0D6] font-medium">
          Chat directly with our admissions counselor. Share your age and last exam year, and we verify your exact category in minutes.
        </p>
      </div>

      <a
        href={SITE.whatsappApplyMessage}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-[14px_30px_14px_30px] bg-[#C89B3C] hover:bg-white text-[#0B3D26] text-sm font-bold transition-all shadow-md mt-1"
      >
        <MessageCircle className="w-4 h-4 text-[#0B3D26]" />
        <span>Ask on WhatsApp</span>
      </a>

      <Link
        href="/eligibility"
        className="inline-flex items-center gap-2 text-xs font-bold text-[#EAF2ED] hover:text-[#C89B3C] transition-colors"
      >
        <span>View eligibility criteria guide</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative w-full bg-[#FAFAF7] text-[#17202A] overflow-hidden scroll-mt-20 sm:scroll-mt-24 pt-14 sm:pt-20 lg:pt-24">
      {/* Subtle background ambient lights */}
      <div
        className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[#EAF2ED] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pb-14 sm:pb-20 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Header & Desktop Still Have Questions Card */}
          <div className="reveal flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] shadow-xs">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C89B3C]" />
                </span>
                <p className="m-0 text-xs sm:text-[13px] leading-none font-bold tracking-[0.06em] uppercase text-[#0B3D26]">
                  Frequently Asked Questions
                </p>
              </div>

              <h2 className="m-0 mt-4 sm:mt-5 text-[28px] sm:text-[36px] lg:text-[42px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-extrabold tracking-[-0.015em] text-[#17202A]">
                Everything you need to know about{' '}
                <span className="text-[#0B3D26] bg-[#EAF2ED] px-2.5 py-0.5 rounded-2xl border border-[#CFE0D6]/80 shadow-xs inline-block my-1">
                  ZUEB Admissions
                </span>
              </h2>

              <p className="m-0 mt-3 sm:mt-4 max-w-[460px] text-base sm:text-lg leading-[26px] sm:leading-[29px] text-[#3A4551] font-medium">
                Clear answers regarding eligibility rules, gap exams, required documents, fee structures, and scholarship assistance.
              </p>
            </div>

            {/* Desktop Still Have Questions Card */}
            <StillHaveQuestionsCard className="hidden lg:flex" />
          </div>

          {/* Right Column: Accordion Items — Smarty-style rounded cards */}
          <div className="reveal flex flex-col gap-3.5" style={{ '--i': 1 }}>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openItem === idx;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#CFE0D6] shadow-md border-l-4 border-l-[#0B3D26]'
                      : 'bg-white/80 border-[#E5E7EB] hover:border-[#CFE0D6] hover:bg-white shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 min-h-[52px] p-4.5 sm:p-5 sm:px-6 cursor-pointer text-left bg-transparent border-none"
                  >
                    <span className="text-base sm:text-[17px] leading-snug font-bold text-[#17202A]">
                      {item.question}
                    </span>

                    {/* Smarty-style Circular Toggle Icon */}
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? 'bg-[#0B3D26] text-[#C89B3C]' : 'bg-[#EAF2ED] text-[#0B3D26]'
                    }`}>
                      <span className="text-base font-extrabold leading-none">
                        {isOpen ? '−' : '+'}
                      </span>
                    </span>
                  </button>

                  {/* Smooth Accordion Content */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4.5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[#EAF2ED]">
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
