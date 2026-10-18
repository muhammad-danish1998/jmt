import { SITE } from '../src/lib/site';

export default function robots() {
  const baseUrl = SITE.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/', '/api'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
