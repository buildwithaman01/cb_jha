import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cbjhatutorials.in';

  // Core Pages & Subpages
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/academic-coaching', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/home-tuition', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/home-tuition/service-areas', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/residential-hostel', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/school-staffing', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.75, changeFrequency: 'monthly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  return [...routes];
}
