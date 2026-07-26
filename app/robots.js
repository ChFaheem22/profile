export default function robots() {
  const siteUrl = 'https://faheem-portfolio.vercel.app';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
