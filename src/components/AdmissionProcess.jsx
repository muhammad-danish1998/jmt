'use client';

import React from 'react';
import {
  Mail,
  Receipt,
  CreditCard,
  GraduationCap,
  ClipboardList,
  Award,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
} from 'lucide-react';

export default function AdmissionProcess() {
  const steps = [
    {
      number: '01',
      title: 'Send Original Documents via Email',
      description: 'Submit your scanned academic records and verification documents via official email.',
      icon: Mail,
      tag: 'Step 1',
    },
    {
      number: '02',
      title: 'Receive Enrollment Challan',
      description: 'Get your verified official enrollment fee challan after initial document screening.',
      icon: Receipt,
      tag: 'Step 2',
    },
    {
      number: '03',
      title: 'Pay the Enrollment Challan',
      description: 'Deposit the enrollment fee at any designated bank branch or online channel.',
      icon: CreditCard,
      tag: 'Step 3',
    },
    {
      number: '04',
      title: 'Receive Enrollment Card',
      description: 'Receive your confirmed enrollment registration card and official student ID.',
      icon: GraduationCap,
      tag: 'Step 4',
    },
    {
      number: '05',
      title: 'Receive Examination Challan',
      description: 'Receive your semester / annual board examination fee challan on schedule.',
      icon: ClipboardList,
      tag: 'Step 5',
    },
    {
      number: '06',
      title: 'Pay the Examination Challan',
      description: 'Pay the examination fee to confirm exam eligibility and candidate registration.',
      icon: CreditCard,
      tag: 'Step 6',
    },
    {
      number: '07',
      title: 'Receive Admit Card',
      description: 'Get your official examination admit card with assigned roll number and center.',
      icon: Award,
      tag: 'Step 7',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Background Accent Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-900 animate-pulse"></span>
            Step-by-Step Flow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Admission Process
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Follow these simple steps to complete your admission process.
          </p>
        </div>

        {/* Process Flow Journey Summary Bar (Desktop / Tablet) */}
        <div className="hidden md:flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-4 mb-12 shadow-xs overflow-x-auto">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-2 shrink-0">Journey:</span>
          {['Documents', 'Enrollment Challan', 'Payment', 'Enrollment Card', 'Exam Challan', 'Payment', 'Admit Card'].map((item, idx, arr) => (
            <React.Fragment key={item + idx}>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold shrink-0">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-bold">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </div>
              {idx < arr.length - 1 && (
                <div className="text-blue-600 animate-flow-right shrink-0 px-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Top Row: Steps 1 to 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-6">
          {steps.slice(0, 4).map((step, idx) => {
            const Icon = step.icon;
            const isLastInRow = idx === 3;
            return (
              <div key={step.number} className="relative flex flex-col">
                <div className="h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center">
                  
                  {/* Step Badge & Number */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                      {step.tag}
                    </span>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 group-hover:bg-blue-900 text-slate-800 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 border border-slate-200 group-hover:border-blue-900 group-hover:shadow-md shadow-xs">
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110 duration-300" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-950 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                    {step.description}
                  </p>
                </div>

                {/* Animated Arrow Connector to next card (Desktop Horizontal) */}
                {!isLastInRow && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm text-blue-900 animate-flow-right">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}

                {/* Animated Arrow Connector for Mobile (Down) */}
                <div className="flex lg:hidden justify-center py-3 text-blue-900 animate-flow-down">
                  <ArrowDown className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Connecting Row Indicator for Desktop (Step 4 down to Step 5) */}
        <div className="hidden lg:flex justify-end pr-14 mb-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold shadow-xs animate-flow-down">
            <span>Next Phase</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Row: Steps 5 to 7 + Completion Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.slice(4, 7).map((step, idx) => {
            const Icon = step.icon;
            const isLastInRow = idx === 2;
            return (
              <div key={step.number} className="relative flex flex-col">
                <div className="h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center">
                  
                  {/* Step Badge & Number */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                      {step.tag}
                    </span>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 group-hover:bg-blue-900 text-slate-800 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 border border-slate-200 group-hover:border-blue-900 group-hover:shadow-md shadow-xs">
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110 duration-300" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-950 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                    {step.description}
                  </p>
                </div>

                {/* Animated Arrow Connector to next card (Desktop Horizontal) */}
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm text-blue-900 animate-flow-right">
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Animated Arrow Connector for Mobile (Down) */}
                <div className="flex lg:hidden justify-center py-3 text-blue-900 animate-flow-down">
                  <ArrowDown className="w-5 h-5" />
                </div>
              </div>
            );
          })}

          {/* 8th Card: Success / Ready for Examination Card */}
          <div className="relative flex flex-col">
            <div className="h-full bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-blue-950 shadow-md flex flex-col items-center text-center justify-between">
              <div className="w-full flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-800/80 text-blue-100 border border-blue-700">
                  Completed
                </span>
                <CheckCircle2 className="w-6 h-6 text-amber-400" />
              </div>

              <div className="w-16 h-16 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center mb-5 border border-white/20 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  Ready for Exams!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Admission and exam registration confirmed. You are ready to appear in your official examinations.
                </p>
              </div>

              <div className="w-full pt-4 mt-2 border-t border-white/10">
                <a
                  href="#enquiry"
                  className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-bold py-2 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow-sm"
                >
                  <span>Start Admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Smooth Animation Styles */}
      <style jsx>{`
        @keyframes flowRight {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.7;
          }
          50% {
            transform: translateX(4px);
            opacity: 1;
          }
        }
        @keyframes flowDown {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(4px);
            opacity: 1;
          }
        }
        .animate-flow-right {
          animation: flowRight 1.6s ease-in-out infinite;
        }
        .animate-flow-down {
          animation: flowDown 1.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
