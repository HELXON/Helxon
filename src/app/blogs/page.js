import { getBlogPosts } from '@/lib/contentful';
import { BlogsPageContent } from '@/components/BlogsPageContent';

// Revalidate every hour
export const revalidate = 3600;

export const metadata = {
  title: 'Helxon Cybersecurity Blog | Expert Insights & Threat Intelligence',
  description:
    'Stay ahead of cyber threats with the latest insights, security trends, and SOC best practices from Helxon’s cybersecurity experts.',
  keywords: [
    'cybersecurity blog',
    'threat intelligence',
    'SOC insights',
    'security operations news',
    'cyber defense trends',
    'Helxon blog',
    'InfoSec articles',
  ],
  openGraph: {
    title: 'Helxon Cybersecurity Blog | Expert Insights & Threat Intelligence',
    description:
      'Stay ahead of cyber threats with the latest insights, security trends, and SOC best practices from Helxon’s cybersecurity experts.',
    url: 'https://helxon.com/blogs',
    type: 'website',
    images: [
      {
        url: '/favicon.ico',
        width: 64,
        height: 64,
        alt: 'Helxon logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helxon Cybersecurity Blog | Expert Insights & Threat Intelligence',
    description:
      'Stay ahead of cyber threats with the latest insights, security trends, and SOC best practices from Helxon’s cybersecurity experts.',
    images: ['/favicon.ico'],
  },
  alternates: {
    canonical: 'https://helxon.com/blogs',
  },
};

export default async function BlogsPage() {
  const blogs = await getBlogPosts();

  return <BlogsPageContent blogs={blogs} />;
}
