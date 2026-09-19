import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import AdmissionProcess from '../src/components/AdmissionProcess';
import ClassesWeOffer from '../src/components/ClassesWeOffer';
import EligibilityAndFees from '../src/components/EligibilityAndFees';
import FAQ from '../src/components/FAQ';
import VideoAndEnquiry from '../src/components/VideoAndEnquiry';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import FloatingWhatsApp from '../src/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Admission Process */}
        <AdmissionProcess />

        {/* 4. Classes We Offer */}
        <ClassesWeOffer />

        {/* 5. Eligibility & Fee Structure */}
        <EligibilityAndFees />

        {/* 6. Frequently Asked Questions (FAQ) */}
        <FAQ />

        {/* 7. Campus Video & Admission Enquiry Form */}
        <VideoAndEnquiry />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Floating Back to Top Arrow */}
      <ScrollToTop />

      {/* 10. Floating WhatsApp Quick Chat Button */}
      <FloatingWhatsApp />
    </div>
  );
}
