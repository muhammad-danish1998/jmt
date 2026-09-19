export const metadata = {
  title: 'Admin Portal | JMT Public School & College',
  description: 'Administrative dashboard for JMT Public Higher Secondary School & College.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminLayout({ children }) {
  return children;
}
