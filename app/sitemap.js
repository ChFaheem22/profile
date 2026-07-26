import { projects } from './projects/data';

export default function sitemap() {
  const siteUrl = 'https://faheem-portfolio.vercel.app';

  const staticPages = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/education',
    '/contact',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const caseStudyPages = projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  return [...staticPages, ...caseStudyPages];
}
