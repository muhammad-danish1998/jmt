'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE } from '../lib/site';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after 1 full screen of scroll
      setIsVisible(window.scrollY > window.innerHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={SITE.whatsappApplyMessage}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with admissions on WhatsApp"
        className="md:hidden fixed bottom-5 left-4 z-40 flex items-center gap-2 min-h-[44px] min-w-[44px] px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-[13px] font-bold tracking-tight">WhatsApp</span>
      </a>
    </aside>
  );
}
