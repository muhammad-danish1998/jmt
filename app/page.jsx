import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import WhyChooseUs from '../src/components/WhyChooseUs';
import ClassesWeOffer from '../src/components/ClassesWeOffer';
import EligibilityAndFees from '../src/components/EligibilityAndFees';
import CampusGallery from '../src/components/CampusGallery';
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

        {/* 3. Why Choose Us (Features) */}
        <WhyChooseUs />

        {/* 4. Classes We Offer */}
        <ClassesWeOffer />

        {/* 5. Eligibility & Fee Structure */}
        <EligibilityAndFees />

        {/* 6. Campus Gallery */}
        <CampusGallery />

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
