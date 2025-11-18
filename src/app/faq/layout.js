export const metadata = {
  title: 'FAQ - Frequently Asked Questions About SOC-as-a-Service',
  description:
    "Get answers to common questions about Helxon's SOC-as-a-Service, pricing, Microsoft Sentinel integration, compliance, threat hunting, and how our security solutions protect businesses of all sizes.",
  keywords: [
    'SOC FAQ',
    'cybersecurity questions',
    'SOCaaS pricing',
    'security service questions',
    'threat monitoring FAQ',
    'Microsoft Sentinel FAQ',
    'compliance questions',
  ],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions About SOC-as-a-Service | Helxon',
    description:
      "Get answers to common questions about Helxon's SOC-as-a-Service, pricing, Microsoft Sentinel integration, and compliance.",
    url: 'https://helxon.com/faq',
    siteName: 'Helxon',
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
    title: 'FAQ - Frequently Asked Questions About SOC-as-a-Service | Helxon',
    description:
      "Get answers to common questions about Helxon's SOC-as-a-Service, pricing, Microsoft Sentinel integration, and compliance.",
    images: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQLayout({ children }) {
  return children;
}
