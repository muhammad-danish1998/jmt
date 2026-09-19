const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jmt-pink.vercel.app';

export const metadata = {
  title: 'Latest Educational Blogs & Examination Guides | Ziauddin Board (ZUEB)',
  description:
    'Educational articles, Matric vs O-Level comparisons, exam preparation tips, and board registration guidelines from JMT Public Higher Secondary School & College Karachi.',
  keywords: [
    'Ziauddin Board Blogs',
    'ZUEB Exam Tips',
    'Matric vs O-Level Guide Karachi',
    'FSC Pre-Medical Admission Tips',
    'Inter Exams Preparation Pakistan',
    'Karachi Board Education News',
    'JMT School Blog',
  ],
  alternates: {
    canonical: `${SITE_URL}/blogs`,
  },
  openGraph: {
    title: 'Latest Educational Blogs & Examination Guides | JMT School & College',
    description:
      'Educational articles, exam preparation tips, and Ziauddin Board registration guides from JMT College Karachi.',
    url: `${SITE_URL}/blogs`,
    type: 'website',
    images: [
      {
        url: '/hero-students.jpg',
        width: 1200,
        height: 630,
        alt: 'JMT Public School & College Blogs & Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latest Educational Blogs & Examination Guides | JMT School & College',
    description:
      'Educational articles, exam tips, and Ziauddin Board registration guides from JMT College Karachi.',
    images: ['/hero-students.jpg'],
  },
};

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}
