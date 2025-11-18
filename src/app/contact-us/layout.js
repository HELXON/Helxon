export const metadata = {
  title: 'Contact Us - Get in Touch with Our Security Experts',
  description:
    'Contact Helxon for enterprise cybersecurity solutions. Speak with our security experts about SOC-as-a-Service, threat monitoring, and how we can protect your organization. Call +1(604) 499 5973 or email contact@helxon.com',
  keywords: [
    'contact Helxon',
    'cybersecurity consultation',
    'security experts',
    'SOC inquiry',
    'enterprise security contact',
    'threat protection consultation',
  ],
  openGraph: {
    title: 'Contact Us - Get in Touch with Our Security Experts | Helxon',
    description:
      'Contact Helxon for enterprise cybersecurity solutions. Speak with our security experts about SOC-as-a-Service and threat monitoring.',
    url: 'https://helxon.com/contact-us',
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
    title: 'Contact Us - Get in Touch with Our Security Experts | Helxon',
    description:
      'Contact Helxon for enterprise cybersecurity solutions. Speak with our security experts about SOC-as-a-Service and threat monitoring.',
    images: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUsLayout({ children }) {
  return children;
}
