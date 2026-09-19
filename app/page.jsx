'use client';

import React, { useState } from 'react';
import TopBar from '../src/components/TopBar';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import StatsCounter from '../src/components/StatsCounter';
import AboutSection from '../src/components/AboutSection';
import AdmissionProcess from '../src/components/AdmissionProcess';
import ClassesWeOffer from '../src/components/ClassesWeOffer';
import EligibilityAndFees from '../src/components/EligibilityAndFees';
import WhyChooseUsGrid from '../src/components/WhyChooseUsGrid';
import Testimonials from '../src/components/Testimonials';
import VideoAndEnquiry from '../src/components/VideoAndEnquiry';
import FAQ from '../src/components/FAQ';
import CtaBand from '../src/components/CtaBand';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import FloatingWhatsApp from '../src/components/FloatingWhatsApp';
import EnrollmentModal from '../src/components/EnrollmentModal';

export default function HomePage() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleOpenEnroll = () => setIsEnrollModalOpen(true);
  const handleCloseEnroll = () => setIsEnrollModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-900 selection:text-white">
      {/* 1. Top Announcement & Contact Bar */}
      <TopBar onOpenEnroll={handleOpenEnroll} />

      {/* 2. Sticky Header / Navbar */}
      <Navbar onOpenEnroll={handleOpenEnroll} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero Section with Floating Trust Badges & Stats */}
        <Hero onOpenEnroll={handleOpenEnroll} />

        {/* 4. Key Metrics & Statistics Strip */}
        <StatsCounter />

        {/* 5. About School & Academic Leadership Spotlight */}
        <AboutSection onOpenEnroll={handleOpenEnroll} />

        {/* 6. 7-Step Admission Process Flow */}
        <AdmissionProcess />

        {/* 7. Classes & Academic Programs Grid */}
        <ClassesWeOffer onOpenEnroll={handleOpenEnroll} />

        {/* 8. Eligibility Criteria & Fee Structure */}
        <EligibilityAndFees />

        {/* 9. Why Choose JMT (School Features & Differentiators) */}
        <WhyChooseUsGrid onOpenEnroll={handleOpenEnroll} />

        {/* 10. Student & Parent Testimonials */}
        <Testimonials />

        {/* 11. Campus Video & Admission Enquiry Form */}
        <VideoAndEnquiry />

        {/* 12. Frequently Asked Questions (FAQ) */}
        <FAQ />

        {/* 13. Pre-Footer Conversion CTA Band */}
        <CtaBand onOpenEnroll={handleOpenEnroll} />
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
