import { AboutUsHero } from '@/components/AboutUsComponents/AboutUsHero';
import { AboutUsVision } from '@/components/AboutUsComponents/AboutUsVision';
import { AboutUsCapabilities } from '@/components/AboutUsComponents/AboutUsCapabilities';
import { AboutUsPartners } from '@/components/AboutUsComponents/AboutUsPartners';
import { AboutUsCTA } from '@/components/AboutUsComponents/AboutUsCTA';
import './AboutUsPage.scss';

export default function AboutUsPage() {
  return (
    <div className="about-us-page">
      <AboutUsHero />
      <AboutUsVision />
      <div className="about-us-page__divider" />
      <AboutUsCapabilities />
      <AboutUsPartners />
      <AboutUsCTA />
    </div>
  );
}
