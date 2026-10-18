'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Appear after 1 screen of scroll, matching FloatingWhatsApp
      setIsVisible(window.scrollY > 400);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll back to top"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B3D26] hover:bg-[#082d1c] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 border border-white/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.2} />
    </button>
  );
}
