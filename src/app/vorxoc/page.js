import { VorxocHero } from '@/components/PlatformComponents/VorxocHero';
import { VorxocPartners } from '@/components/PlatformComponents/VorxocPartners';
import { VorxocOverview } from '@/components/PlatformComponents/VorxocOverview';
import { SecurityToolsIntegration } from '@/components/PlatformComponents/SecurityToolsIntegration';
import { IntegrationBenefits } from '@/components/PlatformComponents/IntegrationBenefits';
import { WhyChooseVorxoc } from '@/components/PlatformComponents/WhyChooseVorxoc';
import { ReadyToSecure } from '@/components/PlatformComponents/ReadyToSecure';
import './VorxocPage.scss';

export const dynamic = 'force-static';

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
