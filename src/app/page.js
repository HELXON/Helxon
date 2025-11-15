import { HomePageContent } from "@/components/HomePageContent";

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
