import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jmt-pink.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ziauddin Board (ZUEB) | Matric & Inter Admissions 2026-27 | JMT School & College Karachi',
    template: '%s | Ziauddin Board (ZUEB) - JMT School & College',
  },
  description:
    'Admissions open for Ziauddin Board (ZUEB) Matric (SSC) & Intermediate (HSSC) at JMT Public Higher Secondary School & College Karachi. Fast track exams, regular & private enrollment for FSC Pre-Medical, Pre-Engineering, ICS, I.Com & Humanities.',
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
  authors: [{ name: 'JMT Educational Board' }],
  creator: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
  publisher: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
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
    siteName: 'JMT Public Higher Secondary School & College - Ziauddin Board (ZUEB)',
    title: 'Ziauddin Board (ZUEB) | Matric & Inter Admissions Open 2026-27 | JMT College Karachi',
    description:
      'Enroll in Classes IX, X, XI & XII under Ziauddin Board (ZUEB). Fast track exams, regular & private registration with expert faculty and flexible academic options in Karachi.',
    images: [
      {
        url: `${SITE_URL}/school.jpg`,
        width: 1200,
        height: 630,
        alt: 'JMT Public Higher Secondary School & College Karachi - Ziauddin Board Campus',
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
    'geo.position': '24.848752;67.221493',
    'ICBM': '24.848752, 67.221493',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e3a8a',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${SITE_URL}/#organization`,
        name: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
        alternateName: [
          'JMT Public School & College',
          'Ziauddin Board JMT Center Karachi',
          'JMT Higher Secondary School',
        ],
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        image: `${SITE_URL}/school.jpg`,
        description:
          'Premier educational institution affiliated with Ziauddin Examination Board (ZUEB) offering secondary and higher secondary education for Matric (Grade IX & X) and Intermediate (Grade XI & XII) in Karachi, Pakistan.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'House 381, Street 9, JMT School Qazzafi Town, Quaidabad, Bin Qasim',
          addressLocality: 'Malir, Karachi',
          addressRegion: 'Sindh',
          postalCode: '75120',
          addressCountry: 'PK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 24.848752,
          longitude: 67.221493,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+92-342-4049132',
          email: 'danishbrothers1998@gmail.com',
          contactType: 'Admissions Office',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
        sameAs: [
          'https://facebook.com',
          'https://instagram.com',
          'https://youtube.com',
          'https://twitter.com',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Ziauddin Board (ZUEB) Admissions | JMT Public School & College',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: 'en-PK',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Eligibility Criteria for Regular/Private Enrollment – Grade IX',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Regular: Candidates who passed the Grade VIII Examination in 2026 or earlier may appear for Grade IX Regular (Age Limit: 12 to 18 years). Private: Any fresh candidate who is at least 12 years old may appear for Grade IX Private, subject to the basic document requirements.',
            },
          },
          {
            '@type': 'Question',
            name: 'Eligibility Criteria for Regular/Private Enrollment – Grade XI',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Regular: Candidates who passed the SSC Examination in 2026 or within the last 5 years (2021 or later) may appear for Grade XI Regular (Age Limit: Not more than 23 years). Private: Any fresh candidate who is at least 14 years old may appear for Grade XI Private, subject to the basic document requirements. Candidates who have a gap of more than 5 years after passing the SSC Examination may also appear as private candidates.',
            },
          },
          {
            '@type': 'Question',
            name: 'Eligibility Criteria for Combined Gap Enrollment – SSC',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Candidates who have a gap of at least 2 years after passing Grade VIII may appear for the Part I & II Combined SSC Examination as private candidates. Age Limit: SSC Science: 14 to 20 years; SSC General: 14 years and above (no upper age limit).',
            },
          },
          {
            '@type': 'Question',
            name: 'Eligibility Criteria for Combined Gap Enrollment – HSSC',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Candidates who have a gap of at least 2 years after passing the SSC Examination (passed in 2024 or earlier) may appear for the Part I & II Combined HSSC Examination as private candidates. Age Limit: HSSC Science: Not more than 25 years; HSSC Commerce: Not more than 35 years; HSSC Humanities: No age limit.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Admission Process',
            item: `${SITE_URL}/#about`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Classes We Offer',
            item: `${SITE_URL}/#classes`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Eligibility & Fee Structure',
            item: `${SITE_URL}/#eligibility`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Frequently Asked Questions',
            item: `${SITE_URL}/#faq`,
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Admission Enquiry',
            item: `${SITE_URL}/#enquiry`,
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-900 selection:text-white"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
