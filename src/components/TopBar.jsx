'use client';

import React from 'react';
import { Phone, Mail, HelpCircle, ArrowRight } from 'lucide-react';

export default function TopBar({ onOpenEnroll }) {
  return (
    <div className="bg-[#0b0520] text-slate-300 text-xs border-b border-purple-900/30 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Have any question pill */}
          <div className="flex items-center gap-2">
            <a
              href="#faq"
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 hover:text-white transition-colors"
            >
              <HelpCircle className="w-3 h-3 text-indigo-400" />
              <span className="text-[11px] font-medium">Have any question?</span>
            </a>
          </div>

          {/* Center: Announcement Banner */}
          <div className="flex items-center gap-2 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block" />
            <span className="text-[11px] sm:text-xs">
              Admissions 2026–27 are now open — Limited seats available, apply today!
            </span>
            <button
              onClick={onOpenEnroll}
              type="button"
              className="inline-flex items-center gap-1 text-xs bg-indigo-600/60 hover:bg-indigo-600 text-white font-semibold px-2.5 py-0.5 rounded-full border border-indigo-400/40 ml-1 cursor-pointer transition-all active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Right Contact Quick Links */}
          <div className="flex items-center gap-3.5 text-slate-300 text-[11px]">
            <a
              href="mailto:danishbrothers1998@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>danishbrothers1998@gmail.com</span>
            </a>
            <span className="text-purple-900">|</span>
            <a
              href="tel:03424049132"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>0342 4049132</span>
            </a>
            <span className="text-purple-900">|</span>
            <div className="flex items-center gap-1.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center text-[10px] text-white transition-colors"
              >
                f
              </a>
              <a
                href="https://wa.me/923424049132?text=Hello%20JMT%20School%20and%20College,%20I%20want%20information%20regarding%20Ziauddin%20Board%20Admissions."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-5 h-5 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-[10px] text-white transition-colors"
              >
                ✆
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
