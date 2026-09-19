'use client';

import React, { useState } from 'react';
import TopBar from '../../src/components/TopBar';
import Navbar from '../../src/components/Navbar';
import BlogsSection from '../../src/components/BlogsSection';
import Footer from '../../src/components/Footer';
import ScrollToTop from '../../src/components/ScrollToTop';
import FloatingWhatsApp from '../../src/components/FloatingWhatsApp';
import EnrollmentModal from '../../src/components/EnrollmentModal';

export default function BlogsPage() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleOpenEnroll = () => setIsEnrollModalOpen(true);
  const handleCloseEnroll = () => setIsEnrollModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* 1. Top Bar */}
      <TopBar onOpenEnroll={handleOpenEnroll} />

      {/* 2. Header / Navbar */}
      <Navbar onOpenEnroll={handleOpenEnroll} />

      {/* 3. Blogs Section */}
      <main className="flex-grow">
        <BlogsSection onOpenEnroll={handleOpenEnroll} />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Utility Floating Widgets */}
      <ScrollToTop />
      <FloatingWhatsApp />

      {/* 6. Admission Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={handleCloseEnroll}
      />
    </div>
  );
}
