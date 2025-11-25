export const metadata = {
  title: 'Blogs - Cybersecurity Insights & Expert Perspectives',
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  description:
    "Explore Helxon's cybersecurity blog for expert insights, industry updates, threat intelligence, best practices, and in-depth analysis of emerging security trends and digital transformation.",
  keywords: [
    'cybersecurity blog',
    'security insights',
    'threat intelligence',
    'SOC best practices',
    'cyber defense articles',
    'security trends',
    'digital transformation',
  ],
  openGraph: {
    title: 'Blogs - Cybersecurity Insights & Expert Perspectives | Helxon',
    description:
      "Explore Helxon's cybersecurity blog for expert insights, industry updates, threat intelligence, and best practices.",
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
    title: 'Blogs - Cybersecurity Insights & Expert Perspectives | Helxon',
    description:
      "Explore Helxon's cybersecurity blog for expert insights, industry updates, threat intelligence, and best practices.",
    images: ['/favicon.ico'],
  },
  alternates: {
    canonical: 'https://helxon.com/blogs',
  },
};

export default function BlogsLayout({ children }) {
  return children;
}

