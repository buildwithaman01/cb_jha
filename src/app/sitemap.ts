import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cbjhatutorials.in';

  const localities = [
    'rupaspur-patna',
    'danapur-patna',
    'bailey-road-patna',
    'boring-road-patna',
    'kankarbagh-patna',
    'patliputra-patna',
    'ashiana-nagar-patna',
    'rajendra-nagar-patna',
  ];

  // Core Pages & Subpages
  const coreRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/academic-coaching', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/home-tuition', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/home-tuition/service-areas', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/success-stories', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/residential-hostel', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/school-staffing', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const localityRoutes = localities.map((slug) => ({
    url: `${baseUrl}/home-tuition/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...coreRoutes, ...localityRoutes, ...blogRoutes];
}
