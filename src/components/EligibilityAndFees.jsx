'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Clock,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';

export default function EligibilityAndFees() {
  const [activeTab, setActiveTab] = useState('grade-ix');

  const tabs = [
    { id: 'grade-ix', name: 'Grade IX' },
    { id: 'grade-x', name: 'Grade X' },
    { id: 'grade-xi', name: 'Grade XI' },
    { id: 'grade-xii', name: 'Grade XII' },
    { id: 'combine-gap', name: 'Combine (Gap)' },
    { id: 'improvement', name: 'Improvement' },
    { id: 'additional', name: 'Additional' },
    { id: 'failure-absentees', name: 'Failure / Absentees' },
    { id: 'parallel-stream', name: 'Parallel Stream' },
  ];

  const criteriaData = {
    'grade-ix': {
      title: 'Grade IX',
      badge: 'SSC Part I',
      eligibility: [
        'Regular: Candidates who have passed Grade VIII Exam in 2025 or before may appear in Grade IX Regular (Age limit: 12 to 20 years).',
        'Private: Any fresh candidate (at least 12 years old) may appear in Grade IX Private with the basic document requirements.',
      ],
      ageLimits: ['Regular: 12 to 20 Years', 'Private: Minimum 12 Years'],
      documents: [
        'B-Form / CRC Form / CNIC Copy',
        'Recent passport-size photograph with blue or white background',
        'Grade VIII Passing Certificate / Marksheet',
      ],
    },
    'grade-x': {
      title: 'Grade X',
      badge: 'SSC Part II',
      eligibility: [
        'Candidates who have passed Grade IX in 2023 or later from ZUEB may appear in Grade X.',
        'Grade IX enrollment must remain valid within the prescribed three-year validity period.',
      ],
      ageLimits: ['Standard age progression per board rules'],
      documents: [
        'Grade IX ZUEB Marksheet & Enrollment Card',
        'B-Form / CRC Form / CNIC',
        'Recent photo with blue or white background',
      ],
    },
    'grade-xi': {
      title: 'Grade XI',
      badge: 'HSSC Part I',
      eligibility: [
        'Regular: Candidates who have passed SSC Exam in 2025 or in the last 5 years (in 2020 or later) may appear in Grade XI Regular.',
        'Private: Candidates having a gap of more than 5 years after passing SSC Exam may appear as a private candidate.',
      ],
      ageLimits: ['Regular: Not more than 25 years', 'Private: No upper age limit'],
      documents: [
        'B-Form / CRC Form / CNIC',
        'Recent photo with blue or white background',
        'SSC Marksheet & Passing Certificate',
        'Migration Certificate / NOC (if passing from outside Sindh board)',
      ],
    },
    'grade-xii': {
      title: 'Grade XII',
      badge: 'HSSC Part II',
      eligibility: [
        'Candidates who have passed Grade XI in 2023 or later from ZUEB may appear in Grade XII.',
        'Grade XI enrollment must remain valid within the prescribed three-year validity period.',
      ],
      ageLimits: ['Standard HSSC progression limits apply'],
      documents: [
        'Grade XI ZUEB Marksheet & Enrollment Card',
        'B-Form / CRC Form / CNIC',
        'Recent photo with blue/white background',
      ],
    },
    'combine-gap': {
      title: 'Combine (Gap)',
      badge: 'Combined Part I & II',
      eligibility: [
        'Candidates having at least a two-year gap after passing Grade VIII / SSC Exam may appear in Part I & II Combined SSC / HSSC Examination as a private candidate.',
      ],
      ageLimits: [
        'SSC Science: 14 to 20 years',
        'SSC General: 14 to No upper age limit',
        'HSSC Science: Not more than 25 years',
        'HSSC Commerce: Not more than 35 years',
        'HSSC Humanities: No upper age limit',
      ],
      documents: [
        'B-Form / CRC Form / CNIC',
        'Recent photo with blue/white background',
        'School Leaving Certificate (for SSC Combined)',
        'SSC Marksheet & Certificate (for HSSC Combined)',
      ],
    },
    improvement: {
      title: 'Improvement of Grade / Marks',
      badge: 'SSC & HSSC',
      eligibility: [
        'ZUEB candidates who have passed SSC / HSSC Examination in 2024 or later may appear for improvement of grade/marks.',
        'Enrollment must remain valid within the prescribed three-year validity period.',
        'Candidates may appear in all subjects of Part I / Part II / Part I & II Combined.',
      ],
      ageLimits: ['As per original enrollment validity'],
      documents: [
        'Official Improvement of Grade Permission Slip',
        'Previous SSC / HSSC Original Marksheet & Passing Certificate',
        'B-Form / CNIC & Recent Photographs',
      ],
    },
    additional: {
      title: 'Additional Subject(s)',
      badge: 'Subject Addition',
      eligibility: [
        'ZUEB candidates who have passed SSC / HSSC Examination in 2024 or later may appear for additional subject(s) with basic subject prerequisites.',
        'SSC / HSSC enrollment must remain valid within the prescribed three-year validity period.',
      ],
      ageLimits: [
        'SSC Science: Not more than 23 Years',
        'HSSC Science: Not more than 28 Years',
        'HSSC Commerce: Not more than 38 Years',
      ],
      documents: [
        'Official Additional Subject(s) Permission',
        'Previous Board Passing Marksheet & Certificate',
        'B-Form / CNIC Copy & Recent Photos',
      ],
    },
    'failure-absentees': {
      title: 'Failure / Absentees',
      badge: 'Supplementary / Failed Subjects',
      eligibility: [
        'ZUEB candidates who failed in Part I / Part II in 2023 or later may appear in the failed subject(s) only.',
        'SSC / HSSC enrollment must remain valid within the prescribed three-year validity period.',
      ],
      ageLimits: ['Within the 3-year enrollment validity window'],
      documents: [
        'Previous Examination Failure Marksheet / Admit Card',
        'Valid ZUEB Enrollment Slip',
        'B-Form / CNIC Copy & Photographs',
      ],
    },
    'parallel-stream': {
      title: 'Parallel Stream / Group',
      badge: 'Dual / Specialized Track',
      eligibility: [
        'Candidates may opt for a parallel stream alongside their core stream in Grade IX / XI.',
        'Subject combinations must comply with the board curriculum framework.',
      ],
      ageLimits: ['Same as Grade IX / Grade XI regular criteria'],
      documents: [
        'Parallel Stream Permission Form',
        'Regular Enrollment in Core Stream',
        'B-Form / CNIC & Photographs',
      ],
    },
  };

  const currentCriteria = criteriaData[activeTab];

  return (
    <section id="eligibility" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-900" />
            ANNUAL (II) EXAMINATION 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Official Eligibility & Admission Criteria
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Comprehensive requirements for Regular, Private, Combine (Gap), Improvement, and Additional examination streams.
          </p>
        </div>

        {/* 2-Column Split: Eligibility Criteria (Left) & Admission / Fee Consultation (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Eligibility Criteria */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <ShieldCheck className="w-6 h-6 text-blue-900" />
              <h3 className="text-2xl font-bold text-slate-900">
                Eligibility by Category
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              {/* Tab Selector List */}
              <div className="sm:col-span-4 flex flex-col space-y-1.5 max-h-[480px] overflow-y-auto pr-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                    }`}
                  >
                    <span className="truncate">{tab.name}</span>
                    {activeTab === tab.id && <ArrowRight className="w-3.5 h-3.5 text-blue-300 shrink-0" />}
                  </button>
                ))}
              </div>

              {/* Tab Details Card */}
              <div className="sm:col-span-8 bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-100">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      {currentCriteria.title}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                      {currentCriteria.badge}
                    </span>
                  </div>

                  <div className="space-y-4 text-left">
                    {/* Eligibility details */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Eligibility Conditions
                      </h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {currentCriteria.eligibility.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-2 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Age Limits */}
                    {currentCriteria.ageLimits && currentCriteria.ageLimits.length > 0 && (
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-amber-600" />
                          Age Limits & Guidelines
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {currentCriteria.ageLimits.map((age, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-md font-medium"
                            >
                              {age}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Required Documents */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-blue-600" />
                        Required Documents
                      </h5>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                        {currentCriteria.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Enquire CTA Button */}
                <a
                  href="#enquiry"
                  className="w-full text-center bg-slate-900 hover:bg-blue-950 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 text-sm shadow-xs block mt-2"
                >
                  Enquire for this Category
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Fee Structure Consultation & Important Board Notes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Sparkles className="w-6 h-6 text-blue-900" />
              <h3 className="text-2xl font-bold text-slate-900">
                Fee & Admission Inquiries
              </h3>
            </div>

            {/* Fee Consultation Highlight Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5 text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Customized Fee Plans
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">
                  Discuss Fee Structure & Installment Plans
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fee structures, special concessions, merit scholarships, and flexible installment plans are tailored to your chosen stream and background. 
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Connect directly with our admissions counselor via WhatsApp or Call to get the exact breakdown for your class.
                </p>
              </div>

              {/* Direct Action Buttons */}
              <div className="space-y-3 pt-2">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/923424049132?text=Hello%20JMT%20School%20%26%20College%2C%20I%20would%20like%20to%20inquire%20about%20the%20Fee%20Structure%20and%20Admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-xl shadow-xs hover:shadow transition-all duration-200 text-sm active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp for Fee Details</span>
                </a>

                {/* Call Button */}
                <a
                  href="tel:03424049132"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-blue-950 text-white font-bold py-3 px-5 rounded-xl shadow-xs hover:shadow transition-all duration-200 text-sm active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Admissions: 0342-4049132</span>
                </a>

                {/* Submit Online Form Button */}
                <a
                  href="#enquiry"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-4 rounded-xl border border-slate-200 transition-all text-xs text-center"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Or Fill Out Online Enquiry Form Below</span>
                </a>
              </div>
            </div>

            {/* Important Examination Policy & Board Rules Card */}
            <div className="bg-white rounded-xl p-5 border border-amber-200 shadow-xs space-y-3 text-left">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm border-b border-amber-100 pb-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Important Board Examination Rules</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Annual (I) vs (II):</strong> Part I students who appeared in Annual (I) Exam 2026 are <strong>NOT eligible</strong> to appear in Annual (II) Exam 2026.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Enrollment Validity:</strong> Enrollment is valid for 3 consecutive years. Expired enrollment may be renewed for 1 additional year upon payment of dues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Non-Sindh Candidates:</strong> SSC candidates from any province other than Sindh must submit a valid Migration Certificate / NOC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Document Scans:</strong> Scanned copies of original documents must be uploaded on the portal.</span>
                </li>
              </ul>
              
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Have an enrollment query?</span>
                <a href="mailto:helpdesk@zueb.edu.pk" className="text-blue-900 font-bold hover:underline">
                  helpdesk@zueb.edu.pk
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
