import { AboutUsHero } from '@/components/AboutUsComponents/AboutUsHero';
import { AboutUsVision } from '@/components/AboutUsComponents/AboutUsVision';
import { AboutUsCapabilities } from '@/components/AboutUsComponents/AboutUsCapabilities';
import { AboutUsPartners } from '@/components/AboutUsComponents/AboutUsPartners';
import { AboutUsCTA } from '@/components/AboutUsComponents/AboutUsCTA';
import './AboutUsPage.scss';

export const dynamic = 'force-static';

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': ['WebPage', 'AboutPage'],
  name: 'About Helxon - Our Mission & Cybersecurity Expertise',
  url: 'https://helxon.com/about-us',
  description:
    "Learn about Helxon's mission to deliver enterprise-grade cybersecurity solutions, our SOC-as-a-Service expertise, and Microsoft-powered security partnerships.",
  isPartOf: {
    '@type': 'WebSite',
    name: 'Helxon',
    url: 'https://helxon.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Helxon',
    url: 'https://helxon.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://helxon.com/helxon-logo.png',
    },
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Helxon',
    url: 'https://helxon.com',
    sameAs: ['https://www.linkedin.com/company/helxon'],
  },
};

export default function AboutUsPage() {
  return (
    <div className="about-us-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutUsHero />
      <AboutUsVision />
      <div className="about-us-page__divider" />
      <AboutUsCapabilities />
      <AboutUsPartners />
      <AboutUsCTA />
    </div>
  );
}
