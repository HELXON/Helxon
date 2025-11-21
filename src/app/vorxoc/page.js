import { VorxocHero } from '@/components/PlatformComponents/VorxocHero';
import { VorxocPartners } from '@/components/PlatformComponents/VorxocPartners';
import { VorxocOverview } from '@/components/PlatformComponents/VorxocOverview';
import { SecurityToolsIntegration } from '@/components/PlatformComponents/SecurityToolsIntegration';
import { IntegrationBenefits } from '@/components/PlatformComponents/IntegrationBenefits';
import { WhyChooseVorxoc } from '@/components/PlatformComponents/WhyChooseVorxoc';
import { ReadyToSecure } from '@/components/PlatformComponents/ReadyToSecure';
import './VorxocPage.scss';

export const dynamic = 'force-static';

export const metadata = {
  title: 'VorXOC Platform - Unified Security Operations Dashboard',
  description:
    "VorXOC is Helxon's proprietary unified security platform integrating Microsoft Sentinel, Defender, and multi-cloud environments. Get real-time threat visibility, automated incident response, and seamless security orchestration.",
  keywords: [
    'VorXOC platform',
    'unified security dashboard',
    'Microsoft Sentinel integration',
    'security orchestration',
    'SIEM platform',
    'threat visibility',
    'incident response automation',
    'multi-cloud security',
  ],
  openGraph: {
    title: 'VorXOC Platform - Unified Security Operations Dashboard | Helxon',
    description:
      "VorXOC is Helxon's proprietary unified security platform integrating Microsoft Sentinel, Defender, and multi-cloud environments.",
    url: 'https://helxon.com/vorxoc',
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
    title: 'VorXOC Platform - Unified Security Operations Dashboard | Helxon',
    description:
      "VorXOC is Helxon's proprietary unified security platform integrating Microsoft Sentinel, Defender, and multi-cloud environments.",
    images: ['/favicon.ico'],
  },
  alternates: {
    canonical: 'https://helxon.com/vorxoc',
  },
};

const vorxocServiceSchema = {
  '@context': 'https://schema.org',
  '@type': ['WebPage', 'Service'],
  name: 'VorXOC Platform - Unified Security Operations Dashboard',
  url: 'https://helxon.com/vorxoc',
  description:
    "VorXOC is Helxon's unified security operations platform that integrates Microsoft Sentinel, Defender, and multi-cloud environments for real-time threat visibility and automated response.",
  serviceType: 'Security Operations Center as a Service (SOCaaS) Platform',
  provider: {
    '@type': 'Organization',
    name: 'Helxon',
    url: 'https://helxon.com',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Global',
    },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: 'https://helxon.com/vorxoc',
  },
};

export default function VorxocPage() {
  return (
    <div className="vorxoc-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vorxocServiceSchema) }}
      />
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
