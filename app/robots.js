export default function robots() {
  const siteUrl = 'https://faheemdev.vercel.app/';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
