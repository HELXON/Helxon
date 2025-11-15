/**
 * SEO Configuration
 * Central configuration for all SEO-related settings
 */

import helxonImage from '@/app/assets/HelxonLogo.png';
export const seoConfig = {
  // Base URL of the website
  baseUrl: 'https://helxon.com',
  
  // Default site information
  siteName: 'Helxon',
  siteDescription: 'Helxon delivers 24/7 SOC-as-a-Service, MDR, threat monitoring, detection, and incident response. Protect your business with enterprise-grade cybersecurity at scale.',
  
  // Social Media Handles (add your actual handles)
  social: {
    twitter: '@helxon', // Replace with actual handle
    linkedin: 'company/helxon',
    // facebook: 'helxon', // Add when available
  },
  
  // Contact Information
  contact: {
    email: 'contact@helxon.com',
    phone: '+1-604-499-5973',
    supportEmail: 'support@helxon.com',
    salesEmail: 'sales@helxon.com',
  },
  
  // Business Hours
  businessHours: {
    timezone: 'PST',
    days: 'Monday - Friday',
    hours: '9:00 AM - 6:00 PM',
  },
  
  // Default Open Graph Image
  ogImage: {
    url: helxonImage.src,
    width: 1200,
    height: 630,
    alt: 'Helxon Cybersecurity Solutions',
  },
  
  // Keywords for each page
  keywords: {
    home: [
      'SOC-as-a-Service',
      'cybersecurity solutions',
      'threat detection',
      'Microsoft Sentinel',
      'VorXOC platform',
      'managed security services',
      'cyber threat protection',
      'enterprise security',
      '24/7 monitoring',
      'incident response',
    ],
    aboutUs: [
      'about Helxon',
      'cybersecurity company',
      'SOC expertise',
      'Microsoft security partner',
      'security operations',
      'cyber defense team',
      'enterprise protection',
    ],
    vorxoc: [
      'VorXOC platform',
      'unified security dashboard',
      'Microsoft Sentinel integration',
      'security orchestration',
      'SIEM platform',
      'threat visibility',
      'incident response automation',
      'multi-cloud security',
    ],
    blogs: [
      'cybersecurity blog',
      'security insights',
      'threat intelligence',
      'SOC best practices',
      'cyber defense articles',
      'security trends',
      'digital transformation',
    ],
    contactUs: [
      'contact Helxon',
      'cybersecurity consultation',
      'security experts',
      'SOC inquiry',
      'enterprise security contact',
      'threat protection consultation',
    ],
    faq: [
      'SOC FAQ',
      'cybersecurity questions',
      'SOCaaS pricing',
      'security service questions',
      'threat monitoring FAQ',
      'Microsoft Sentinel FAQ',
      'compliance questions',
    ],
  },
  
  // Verification codes (add your actual codes)
  verification: {
    google: 'googleed9a0d1a76a9c2f4.html',
    // bing: 'your-bing-webmaster-code',
    // yandex: 'your-yandex-verification-code',
  },
};

/**
 * Generate page metadata
 * @param {Object} options - Metadata options
 * @returns {Object} - Metadata object for Next.js
 */
export function generatePageMetadata({
  title,
  description,
  keywords,
  path = '',
  image,
  type = 'website',
  noindex = false,
}) {
  const url = `${seoConfig.baseUrl}${path}`;
  const ogImage = image || seoConfig.ogImage;
  
  return {
    title,
    description,
    keywords: keywords || seoConfig.keywords.home,
    openGraph: {
      title: `${title} | ${seoConfig.siteName}`,
      description,
      url,
      type,
      images: [ogImage],
      siteName: seoConfig.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${seoConfig.siteName}`,
      description,
      images: [ogImage.url],
      site: seoConfig.social.twitter,
    },
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

