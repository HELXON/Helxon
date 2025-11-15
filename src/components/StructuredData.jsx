/**
 * StructuredData Component
 * Provides JSON-LD structured data for improved SEO
 */
export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Helxon',
    url: 'https://helxon.com',
    logo: 'https://helxon.com/helxon-logo.png',
    description: 'Helxon delivers 24/7 SOC-as-a-Service, MDR, threat monitoring, detection, and incident response. Protect your business with enterprise-grade cybersecurity at scale.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-604-499-5973',
      contactType: 'Customer Service',
      email: 'contact@helxon.com',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
    },
    sameAs: [
      // Add your social media links here when available
      'https://www.linkedin.com/company/helxon',
      // 'https://twitter.com/helxon',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Helxon',
    url: 'https://helxon.com',
    description: 'Enterprise-grade SOC-as-a-Service and cybersecurity solutions',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://helxon.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://helxon.com',
    name: 'Helxon',
    image: 'https://helxon.com/helxon-logo.png',
    url: 'https://helxon.com',
    telephone: '+1-604-499-5973',
    email: 'contact@helxon.com',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'CA',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'SOC-as-a-Service',
    provider: {
      '@type': 'Organization',
      name: 'Helxon',
      url: 'https://helxon.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cybersecurity Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SOC-as-a-Service',
            description: '24/7 threat monitoring and incident response',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'VorXOC Platform',
            description: 'Unified security operations dashboard',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Threat Hunting',
            description: 'Proactive threat detection and analysis',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

