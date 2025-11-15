import { VorxocHero } from '@/components/PlatformComponents/VorxocHero';
import { VorxocPartners } from '@/components/PlatformComponents/VorxocPartners';
import { VorxocOverview } from '@/components/PlatformComponents/VorxocOverview';
import { SecurityToolsIntegration } from '@/components/PlatformComponents/SecurityToolsIntegration';
import { IntegrationBenefits } from '@/components/PlatformComponents/IntegrationBenefits';
import { WhyChooseVorxoc } from '@/components/PlatformComponents/WhyChooseVorxoc';
import { ReadyToSecure } from '@/components/PlatformComponents/ReadyToSecure';
import './VorxocPage.scss';
import helxonImage from '@/app/assets/HelxonLogo.png';

export const metadata = {
  title: 'VorXOC Platform - Unified Security Operations Dashboard',
  description: 'VorXOC is Helxon\'s proprietary unified security platform integrating Microsoft Sentinel, Defender, and multi-cloud environments. Get real-time threat visibility, automated incident response, and seamless security orchestration.',
  keywords: ['VorXOC platform', 'unified security dashboard', 'Microsoft Sentinel integration', 'security orchestration', 'SIEM platform', 'threat visibility', 'incident response automation', 'multi-cloud security'],
  openGraph: {
    title: 'VorXOC Platform - Unified Security Operations Dashboard | Helxon',
    description: 'VorXOC is Helxon\'s proprietary unified security platform integrating Microsoft Sentinel, Defender, and multi-cloud environments.',
    url: 'https://helxon.com/vorxoc',
    type: 'website',
    images: [
      {
        url: helxonImage.src,
        width: 1200,
        height: 630,
        alt: 'VorXOC Security Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VorXOC Platform - Unified Security Operations Dashboard | Helxon',
    description: 'VorXOC is Helxon\'s proprietary unified security platform integrating Microsoft Sentinel, Defender, and multi-cloud environments.',
    images: [helxonImage.src],
  },
  alternates: {
    canonical: 'https://helxon.com/vorxoc',
  },
};

export const metadata = {
  title: 'VorXOC Platform - Unified Security Operations & Threat Management',
  description: 'VorXOC by Helxon is a comprehensive security operations platform integrating Microsoft Sentinel, Defender, and multi-cloud environments for unified threat visibility and automated incident response.',
  keywords: 'VorXOC, security operations platform, SIEM integration, threat management, Microsoft Sentinel integration, unified security, EDR, firewall integration, WAF',
  authors: [{ name: 'Helxon' }],
  openGraph: {
    title: 'VorXOC Platform - Unified Security Operations & Threat Management',
    description: 'VorXOC by Helxon integrates Microsoft Sentinel, Defender, and multi-cloud environments for unified threat visibility and automated incident response.',
    url: 'https://helxon.com/vorxoc',
    siteName: 'Helxon',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VorXOC Platform - Unified Security Operations & Threat Management',
    description: 'VorXOC by Helxon integrates Microsoft Sentinel, Defender, and multi-cloud environments for unified threat visibility and automated incident response.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VorxocPage() {
  return (
    <div className="vorxoc-page">
      <VorxocHero />
      <VorxocPartners />
      <VorxocOverview />
      <SecurityToolsIntegration />
      <IntegrationBenefits />
      <WhyChooseVorxoc />
      <ReadyToSecure />
    </div>
  );
}

