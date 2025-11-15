import helxonImage from '@/app/assets/HelxonLogo.png';
export const metadata = {
  title: 'Blogs - Cybersecurity Insights & Expert Perspectives',
  description: 'Explore Helxon\'s cybersecurity blog for expert insights, industry updates, threat intelligence, best practices, and in-depth analysis of emerging security trends and digital transformation.',
  keywords: ['cybersecurity blog', 'security insights', 'threat intelligence', 'SOC best practices', 'cyber defense articles', 'security trends', 'digital transformation'],
  openGraph: {
    title: 'Blogs - Cybersecurity Insights & Expert Perspectives | Helxon',
    description: 'Explore Helxon\'s cybersecurity blog for expert insights, industry updates, threat intelligence, and best practices.',
    url: 'https://helxon.com/blogs',
    type: 'website',
    images: [
      {
        url: helxonImage.src,
        width: 1200,
        height: 630,
        alt: 'Helxon Cybersecurity Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs - Cybersecurity Insights & Expert Perspectives | Helxon',
    description: 'Explore Helxon\'s cybersecurity blog for expert insights, industry updates, threat intelligence, and best practices.',
    images: [helxonImage.src],
  },
  alternates: {
    canonical: 'https://helxon.com/blogs',
  },
};

export default function BlogsLayout({ children }) {
  return children;
}

