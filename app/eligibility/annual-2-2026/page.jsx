import React from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import ScrollToTop from '../../../src/components/ScrollToTop';
import FloatingWhatsApp from '../../../src/components/FloatingWhatsApp';
import EligibilitySessionView from '../../../src/components/EligibilitySessionView';
import { ANNUAL_2_2026_DATA } from '../../../src/data/eligibility/annual-2-2026';
import { SITE } from '../../../src/lib/site';

export const metadata = {
  title: 'Annual (II) 2026 Eligibility & Criteria | Ziauddin Board (ZUEB)',
  description:
    'Official ZUEB eligibility criteria for Annual (II) 2026 examination. Check age limits, gap requirements, documents and admission guidelines for SSC Matric and HSSC Intermediate.',
  alternates: {
    canonical: '/eligibility/annual-2-2026',
  },
};

export default function Annual22026Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Eligibility',
        item: `${SITE.url}/eligibility`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Annual (II) 2026',
        item: `${SITE.url}/eligibility/annual-2-2026`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#0B3D26] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="flex-grow">
        <EligibilitySessionView data={ANNUAL_2_2026_DATA} />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}
