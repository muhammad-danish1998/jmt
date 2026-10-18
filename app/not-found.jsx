import React from 'react';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import FloatingWhatsApp from '../src/components/FloatingWhatsApp';
import { SITE } from '../src/lib/site';

export const metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be located. Return to JMT Public Higher Secondary School & College Karachi.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#17202A] selection:bg-[#0B3D26] selection:text-white">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Main 404 Content */}
      <main id="main-content" className="flex-grow flex items-center justify-center py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-xl mx-auto text-center space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs font-bold text-[#0B3D26] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
            <span>Error 404 · Page Not Found</span>
          </div>

          {/* Large Numerical Indicator */}
          <div className="text-7xl sm:text-9xl font-black tracking-tight text-[#0B3D26]/90 select-none">
            404
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#17202A]">
            We Couldn&apos;t Find That Page
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#3A4551] leading-relaxed max-w-lg mx-auto">
            The link you clicked may be broken, or the page may have been moved or updated. You can explore our Ziauddin Board programs or return home.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0B3D26] hover:bg-[#082d1c] text-white text-sm font-bold shadow-xs active:scale-95 transition-all"
            >
              Back to Home
            </Link>

            <Link
              href="/eligibility"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-[#EAF2ED]/60 border border-[#CFE0D6] text-[#0B3D26] text-sm font-bold shadow-2xs active:scale-95 transition-all"
            >
              Check Eligibility
            </Link>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-[#EAF2ED]/60 border border-[#2E6B4A] text-[#2E6B4A] text-sm font-bold shadow-2xs active:scale-95 transition-all"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}
