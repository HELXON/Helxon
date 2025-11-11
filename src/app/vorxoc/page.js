import { VorxocHero } from '@/components/PlatformComponents/VorxocHero';
import { VorxocPartners } from '@/components/PlatformComponents/VorxocPartners';
import { VorxocOverview } from '@/components/PlatformComponents/VorxocOverview';
import { SecurityToolsIntegration } from '@/components/PlatformComponents/SecurityToolsIntegration';
import { IntegrationBenefits } from '@/components/PlatformComponents/IntegrationBenefits';
import { WhyChooseVorxoc } from '@/components/PlatformComponents/WhyChooseVorxoc';
import { ReadyToSecure } from '@/components/PlatformComponents/ReadyToSecure';
import './VorxocPage.scss';

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

