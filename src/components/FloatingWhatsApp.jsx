'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923424049132?text=Hello%20JMT%20School%20%26%20College%2C%20I%20would%20like%20to%20inquire%20about%20Admissions."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 active:scale-95 group border border-emerald-400/40 cursor-pointer"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="text-xs sm:text-sm font-bold tracking-wide hidden sm:inline-block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
