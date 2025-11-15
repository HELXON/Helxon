import { HomePageContent } from "@/components/HomePageContent";
import helxonImage from '@/app/assets/HelxonLogo.png';

export const metadata = {
  title: 'Home',
  description: 'Helxon delivers 24/7 SOC-as-a-Service, MDR, threat monitoring, detection, and incident response. Protect your business with enterprise-grade cybersecurity at scale.',
  keywords: ['SOC-as-a-Service', 'cybersecurity solutions', 'threat detection', 'Microsoft Sentinel', 'VorXOC platform', 'managed security services', 'cyber threat protection'],
  openGraph: {
    title: 'Helxon | Enterprise Cybersecurity & SOC-as-a-Service Solutions',
    description: 'Enterprise-grade SOC-as-a-Service with 24/7 threat monitoring and Microsoft-powered security solutions.',
    url: 'https://helxon.com',
    type: 'website',
    images: [
      {
        url: helxonImage.src,
        width: 1200,
        height: 630,
        alt: 'Helxon Cybersecurity Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helxon | Enterprise Cybersecurity & SOC-as-a-Service Solutions',
    description: 'Enterprise-grade SOC-as-a-Service with 24/7 threat monitoring and Microsoft-powered security solutions.',
    images: [helxonImage.src],
  },
  alternates: {
    canonical: 'https://helxon.com',
  },
};

export const metadata = {
  title: 'Helxon - Enterprise Cybersecurity & SOC-as-a-Service Solutions',
  description: 'Helxon provides 24/7 SOC-as-a-Service, threat detection, and managed security operations powered by Microsoft Sentinel and Defender. Protect your business with enterprise-grade cybersecurity.',
  keywords: 'cybersecurity, SOC-as-a-Service, threat detection, managed security, Microsoft Sentinel, Azure security, VorXOC, security operations center',
  authors: [{ name: 'Helxon' }],
  openGraph: {
    title: 'Helxon - Enterprise Cybersecurity & SOC-as-a-Service Solutions',
    description: 'Helxon provides 24/7 SOC-as-a-Service, threat detection, and managed security operations powered by Microsoft Sentinel and Defender.',
    url: 'https://helxon.com',
    siteName: 'Helxon',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helxon - Enterprise Cybersecurity & SOC-as-a-Service Solutions',
    description: 'Helxon provides 24/7 SOC-as-a-Service, threat detection, and managed security operations powered by Microsoft Sentinel and Defender.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
