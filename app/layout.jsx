import './globals.css';
import { Quicksand, Plus_Jakarta_Sans } from 'next/font/google';
import { SITE } from '../src/lib/site';
import MotionReveal from '../src/components/MotionReveal';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-quicksand',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

const SITE_URL = SITE.url;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ziauddin Board (ZUEB) Admissions | JMT School & College',
    template: '%s | JMT School & College',
  },
  description:
    'Admissions open for Ziauddin Board (ZUEB) Matric & Intermediate at JMT College Karachi. Fast-track combined exams, regular enrollment & scholarships available.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.svg',
    apple: '/icon.svg',
  },
  keywords: [
    'Ziauddin Board',
    'ZUEB',
    'Ziauddin Examination Board',
    'Ziauddin Board Karachi',
    'Ziauddin Board Matric',
    'Ziauddin Board Intermediate',
    'Matric',
    'Intermediate',
    'SSC',
    'HSSC',
    'Matric Inter',
    'Annual System',
    'Fast Track',
    'Fast Track Exams',
    '1 Year Exams',
    'Study Continue',
    'Study From Home',
    'No Physical Classes',
    'Admission Open',
    'Admissions Open',
    'Education Pakistan',
    'Students Pakistan',
    'Exam Pass',
    'Easy Exams',
    'School Admissions',
    'Karachi Schools',
    'FSC Pre Medical',
    'FSC Pre Engineering',
    'ICS',
    'I.Com',
    'Humanities',
    'Ziauddin Board Admissions',
    'Ziauddin Board Exams',
    'Ziauddin Board Registration',
    'Ziauddin Board Eligibility',
    'Ziauddin Board Examination',
    'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
    'JMT School Karachi',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'google47d8c8e1526eeabd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: SITE_URL,
    siteName: `${SITE.name} - Ziauddin Board (ZUEB)`,
    title: 'Ziauddin Board (ZUEB) | Matric & Intermediate Admissions 2026-27 | JMT College Karachi',
    description:
      'Fast track exams and admissions for Classes IX, X, XI & XII under Ziauddin Examination Board (ZUEB) at JMT Public School & College Karachi.',
    images: [
      {
        url: `${SITE_URL}/school.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} Karachi - Ziauddin Board Campus`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ziauddin Board (ZUEB) Matric & Intermediate Admissions 2026-27',
    description:
      'Fast track exams and admissions for Classes IX, X, XI & XII under Ziauddin Examination Board (ZUEB) at JMT Public School & College Karachi.',
    images: [`${SITE_URL}/school.jpg`],
  },
  other: {
    'geo.region': 'PK-SD',
    'geo.placename': 'Karachi',
    'geo.position': `${SITE.mapCoordinates.lat};${SITE.mapCoordinates.lng}`,
    'ICBM': `${SITE.mapCoordinates.lat}, ${SITE.mapCoordinates.lng}`,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B3D26',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE.name,
        alternateName: [
          'JMT Public School & College',
          'JMT School & College',
          'Ziauddin Board JMT Center Karachi',
          'JMT Higher Secondary School',
        ],
        url: SITE_URL,
        logo: `${SITE_URL}/jmt-logo.png`,
        image: `${SITE_URL}/school.jpg`,
        description:
          'Premier educational institution affiliated with Ziauddin Examination Board (ZUEB) offering secondary and higher secondary education for Matric (Grade IX & X) and Intermediate (Grade XI & XII) in Karachi, Pakistan.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'House 381, Street 9, Qazzafi Town, Quaidabad, Bin Qasim',
          addressLocality: 'Malir, Karachi',
          addressRegion: 'Sindh',
          addressCountry: 'PK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.mapCoordinates.lat,
          longitude: SITE.mapCoordinates.lng,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+92-342-4049132',
          contactType: 'Admissions Office',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${SITE.name} | Ziauddin Board (ZUEB) Admissions`,
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: 'en-PK',
      },
    ],
  };

  return (
    <html lang="en" className={`${quicksand.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-[#FAFAF7] text-[#17202A] selection:bg-[#0B3D26] selection:text-white"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0B3D26] focus:text-white focus:rounded-md focus:shadow-md focus:outline-none"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(regs) {
                  for (var r of regs) { r.unregister(); }
                });
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var n of names) { caches.delete(n); }
                  });
                }
              }
            `,
          }}
        />
        <MotionReveal />
        {children}
      </body>
    </html>
  );
}
