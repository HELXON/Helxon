import { AboutUsHero } from '@/components/AboutUsComponents/AboutUsHero';
import { AboutUsVision } from '@/components/AboutUsComponents/AboutUsVision';
import { AboutUsCapabilities } from '@/components/AboutUsComponents/AboutUsCapabilities';
import { AboutUsPartners } from '@/components/AboutUsComponents/AboutUsPartners';
import { AboutUsCTA } from '@/components/AboutUsComponents/AboutUsCTA';
import './AboutUsPage.scss';
import helxonImage from '@/app/assets/HelxonLogo.png';
export const metadata = {
  title: 'About Us - Our Mission & Cybersecurity Expertise',
  description: 'Learn about Helxon\'s mission to deliver enterprise-grade cybersecurity solutions. Discover our SOC-as-a-Service expertise, Microsoft partnerships, and commitment to protecting organizations from cyber threats.',
  keywords: ['about Helxon', 'cybersecurity company', 'SOC expertise', 'Microsoft security partner', 'security operations', 'cyber defense team', 'enterprise protection'],
  openGraph: {
    title: 'About Us - Our Mission & Cybersecurity Expertise | Helxon',
    description: 'Learn about Helxon\'s mission to deliver enterprise-grade cybersecurity solutions and our commitment to protecting organizations from cyber threats.',
    url: 'https://helxon.com/about-us',
    type: 'website',
    images: [
      {
        url: helxonImage.src,
        width: 1200,
        height: 630,
        alt: 'About Helxon Cybersecurity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Our Mission & Cybersecurity Expertise | Helxon',
    description: 'Learn about Helxon\'s mission to deliver enterprise-grade cybersecurity solutions and our commitment to protecting organizations from cyber threats.',
    images: [helxonImage.src],
  },
  alternates: {
    canonical: 'https://helxon.com/about-us',
  },
};

export const metadata = {
  title: 'About Helxon - Leading Cybersecurity & SOC-as-a-Service Provider',
  description: 'Learn about Helxon\'s mission to deliver enterprise-grade cybersecurity solutions through 24/7 SOC-as-a-Service, Microsoft-powered threat detection, and expert security operations.',
  keywords: 'about Helxon, cybersecurity company, SOC provider, security operations, Microsoft partner, threat intelligence, security team',
  authors: [{ name: 'Helxon' }],
  openGraph: {
    title: 'About Helxon - Leading Cybersecurity & SOC-as-a-Service Provider',
    description: 'Learn about Helxon\'s mission to deliver enterprise-grade cybersecurity solutions through 24/7 SOC-as-a-Service and Microsoft-powered threat detection.',
    url: 'https://helxon.com/about-us',
    siteName: 'Helxon',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Helxon - Leading Cybersecurity & SOC-as-a-Service Provider',
    description: 'Learn about Helxon\'s mission to deliver enterprise-grade cybersecurity solutions through 24/7 SOC-as-a-Service and Microsoft-powered threat detection.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
