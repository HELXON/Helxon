export const metadata = {
  title: 'FAQ - Helxon SOC-as-a-Service & Cybersecurity Questions Answered',
  description: 'Find answers to frequently asked questions about Helxon\'s SOC-as-a-Service, VorXOC platform, compliance support, threat detection, pricing, and security integrations.',
  keywords: 'SOC-as-a-Service FAQ, cybersecurity questions, Helxon FAQ, VorXOC questions, compliance support, threat hunting, SIEM integration',
  authors: [{ name: 'Helxon' }],
  openGraph: {
    title: 'FAQ - Helxon SOC-as-a-Service & Cybersecurity Questions Answered',
    description: 'Find answers to frequently asked questions about Helxon\'s SOC-as-a-Service, VorXOC platform, and security integrations.',
    url: 'https://helxon.com/faq',
    siteName: 'Helxon',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Helxon SOC-as-a-Service & Cybersecurity Questions Answered',
    description: 'Find answers to frequently asked questions about Helxon\'s SOC-as-a-Service, VorXOC platform, and security integrations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQLayout({ children }) {
  return children;
}
