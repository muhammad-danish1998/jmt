'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, CheckCircle, Clock } from 'lucide-react';

export default function FAQ({ onOpenEnroll }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      id: 'grade-ix',
      question: 'Eligibility Criteria for Regular/Private Enrollment – Grade IX',
      category: 'SSC Part I',
      content: (
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-md bg-blue-100 text-blue-900 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900">Regular: </span>
                <span>Candidates who passed the Grade VIII Examination in 2026 or earlier may appear for Grade IX Regular.</span>
                <div className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md inline-flex border border-blue-100">
                  <Clock className="w-3.5 h-3.5 text-blue-800" />
                  <span>Age Limit: 12 to 18 years</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
              <div className="mt-1 p-1 rounded-md bg-amber-100 text-amber-900 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900">Private: </span>
                <span>Any fresh candidate who is at least 12 years old may appear for Grade IX Private, subject to the basic document requirements.</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'grade-xi',
      question: 'Eligibility Criteria for Regular/Private Enrollment – Grade XI',
      category: 'HSSC Part I',
      content: (
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-md bg-blue-100 text-blue-900 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900">Regular: </span>
                <span>Candidates who passed the SSC Examination in 2026 or within the last 5 years (2021 or later) may appear for Grade XI Regular.</span>
                <div className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md inline-flex border border-blue-100">
                  <Clock className="w-3.5 h-3.5 text-blue-800" />
                  <span>Age Limit: Not more than 23 years</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
              <div className="mt-1 p-1 rounded-md bg-amber-100 text-amber-900 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="space-y-1.5">
                <p>
                  <span className="font-bold text-slate-900">Private: </span>
                  <span>Any fresh candidate who is at least 14 years old may appear for Grade XI Private, subject to the basic document requirements.</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-600 bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/70">
                  Candidates who have a gap of more than 5 years after passing the SSC Examination may also appear as private candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ssc-combined',
      question: 'Eligibility Criteria for Combined Gap Enrollment – SSC',
      category: 'SSC Combined (Part I & II)',
      content: (
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-3">
            <p className="text-slate-800">
              Candidates who have a gap of at least 2 years after passing Grade VIII may appear for the Part I & II Combined SSC Examination as private candidates.
            </p>

            <div className="pt-2 border-t border-slate-200">
              <span className="font-bold text-slate-900 block mb-2">Age Limit:</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <div>
                    <strong className="text-slate-900">SSC Science: </strong>
                    <span className="text-slate-600">14 to 20 years</span>
                  </div>
                </li>
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <div>
                    <strong className="text-slate-900">SSC General: </strong>
                    <span className="text-slate-600">14 years & above (no upper limit)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'hssc-combined',
      question: 'Eligibility Criteria for Combined Gap Enrollment – HSSC',
      category: 'HSSC Combined (Part I & II)',
      content: (
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-3">
            <p className="text-slate-800">
              Candidates who have a gap of at least 2 years after passing the SSC Examination (passed in 2024 or earlier) may appear for the Part I & II Combined HSSC Examination as private candidates.
            </p>

            <div className="pt-2 border-t border-slate-200">
              <span className="font-bold text-slate-900 block mb-2">Age Limit:</span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                  <div>
                    <strong className="text-slate-900 block">HSSC Science:</strong>
                    <span className="text-slate-600">Not more than 25 years</span>
                  </div>
                </li>
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                  <div>
                    <strong className="text-slate-900 block">HSSC Commerce:</strong>
                    <span className="text-slate-600">Not more than 35 years</span>
                  </div>
                </li>
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                  <div>
                    <strong className="text-slate-900 block">HSSC Humanities:</strong>
                    <span className="text-slate-600">No age limit</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-200 relative scroll-mt-20">
      {/* Anchor for previous gallery link if targeted */}
      <span id="gallery" className="absolute -top-20 opacity-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-blue-900" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Find answers to the most common questions about eligibility and enrollment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-900/30 bg-white shadow-md ring-1 ring-blue-900/10'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-2">
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-blue-900 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {item.question}
                    </span>
                  </div>

                  {/* + / − icon button */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-blue-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                {/* Accordion Content with smooth expand transition */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'max-h-[800px] opacity-100 border-t border-slate-100'
                      : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout Card */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Still have questions?</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Contact our admissions office or submit an enquiry form for personalized guidance.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              if (onOpenEnroll) {
                onOpenEnroll();
              } else {
                const el = document.getElementById('enquiry') || document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="shrink-0 bg-blue-900 hover:bg-blue-950 active:scale-95 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer inline-flex items-center justify-center"
          >
            Ask Admission Officer
          </button>
        </div>

      </div>
    </section>
  );
}
