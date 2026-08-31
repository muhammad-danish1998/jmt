import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://jmtpublicschool.com'),
  title: {
    default: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE | Admissions Open 2026-27',
    template: '%s | JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
  },
  description:
    'Admissions open for academic session 2026-27 at JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE. Offering high-quality secondary & higher secondary education for Classes IX, X, XI, and XII (Science & Commerce). Expert faculty, modern smart campus, and 100% board success track record.',
  keywords: [
    'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
    'JMT School',
    'JMT College',
    'Admissions 2026-27',
    'Class 9 Admission',
    'Class 10 Board School',
    'Class 11 Science Admission',
    'Class 11 Commerce Admission',
    'Class 12 CBSE Board',
    'Best Higher Secondary School',
    'Top Quality Education',
  ],
  authors: [{ name: 'JMT Educational Board' }],
  creator: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
  publisher: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
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
    locale: 'en_IN',
    url: 'https://jmtpublicschool.com',
    siteName: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
    title: 'Admissions Open 2026-27 | JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
    description:
      'Empowering students with exceptional academic standards, expert faculty, and state-of-the-art campus infrastructure.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE | Admissions Open 2026-27',
    description:
      'Enroll in Classes IX, X, XI & XII. Exceptional education, experienced faculty, and modern facilities.',
    images: ['https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  alternates: {
    canonical: 'https://jmtpublicschool.com',
  },
};

export default function RootLayout({ children }) {
  // Schema.org structured data for SEO rich snippets in Google Search
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'JMT PUBLIC HIGHER SECONDARY SCHOOL & COLLEGE',
    alternateName: 'JMT Public School & College',
    url: 'https://jmtpublicschool.com',
    logo: 'https://jmtpublicschool.com/logo.png',
    description:
      'Premier educational institution offering secondary and senior secondary curriculum for Classes IX, X, XI, and XII.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House 381, Street 9, JMT School Qazzafi Town, Quaidabad, Bin Qasim',
      addressLocality: 'Malir, Karachi',
      addressRegion: 'Sindh',
      postalCode: '75120',
      addressCountry: 'PK',
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
