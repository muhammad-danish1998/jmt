'use client';

import React, { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import AboutSection from '../src/components/AboutSection';
import WhyChooseUsGrid from '../src/components/WhyChooseUsGrid';
import FAQ from '../src/components/FAQ';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import FloatingWhatsApp from '../src/components/FloatingWhatsApp';
import EnrollmentModal from '../src/components/EnrollmentModal';
import { FAQ_DATA } from '../src/data/faqData';

export default function HomePage() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const _handleOpenEnroll = () => setIsEnrollModalOpen(true);
  const handleCloseEnroll = () => setIsEnrollModalOpen(false);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answerText,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#0B3D26] selection:text-white">
      {/* FAQPage JSON-LD for Home page only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section & How It Works Strip */}
        <Hero />

        {/* 2. About JMT Section */}
        <AboutSection />

        {/* 3. Why JMT & Scholarships Section */}
        <WhyChooseUsGrid />

        {/* 4. Frequently Asked Questions (FAQ) */}
        <FAQ />

        {/* 5. Contact & Admissions Section */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating Back to Top Arrow */}
      <ScrollToTop />

      {/* 16. Floating WhatsApp Quick Chat Button */}
      <FloatingWhatsApp />

      {/* 17. Quick Admission Application Popup Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={handleCloseEnroll}
      />
    </div>
  );
}
