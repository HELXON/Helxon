import { VorxocHero } from '@/components/PlatformComponents/VorxocHero';
import { VorxocPartners } from '@/components/PlatformComponents/VorxocPartners';
import { VorxocOverview } from '@/components/PlatformComponents/VorxocOverview';
import { SecurityToolsIntegration } from '@/components/PlatformComponents/SecurityToolsIntegration';
import { IntegrationBenefits } from '@/components/PlatformComponents/IntegrationBenefits';
import { WhyChooseVorxoc } from '@/components/PlatformComponents/WhyChooseVorxoc';
import { ReadyToSecure } from '@/components/PlatformComponents/ReadyToSecure';
import './VorxocPage.scss';

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

