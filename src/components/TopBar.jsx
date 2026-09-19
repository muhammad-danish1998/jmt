'use client';

import React from 'react';
import { Phone, Mail, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';

export default function TopBar({ onOpenEnroll }) {
  return (
    <div className="bg-[#0b132b] text-slate-300 text-xs border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left Announcement */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span className="text-slate-200">
              Admissions 2026–27 are now open under <strong className="text-amber-400 font-bold">Ziauddin Board (ZUEB)</strong> — Limited seats available!
            </span>
            <button
              onClick={onOpenEnroll}
              type="button"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold ml-1 cursor-pointer transition-colors"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Right Contact Quick Links */}
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="mailto:danishbrothers1998@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>danishbrothers1998@gmail.com</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="tel:03424049132"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>0342 4049132</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://wa.me/923424049132?text=Hello%20JMT%20School%20and%20College,%20I%20want%20information%20regarding%20Ziauddin%20Board%20Admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-[#0b132b]" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
