'use client';

import React from 'react';
import { Phone, Mail, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function TopBar({ onOpenEnroll }) {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Left Announcement */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-200">
              Admissions 2026–27 Open under <strong className="text-amber-400 font-bold">Ziauddin Board (ZUEB)</strong> — Limited Seats!
            </span>
            <button
              onClick={onOpenEnroll}
              type="button"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold ml-1 cursor-pointer transition-colors"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Right Contact Quick Links */}
          <div className="flex items-center gap-5">
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
              <span>0342-4049132</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://wa.me/923424049132?text=Hello%20JMT%20School%20and%20College,%20I%20want%20information%20regarding%20Ziauddin%20Board%20Admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-slate-900" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
