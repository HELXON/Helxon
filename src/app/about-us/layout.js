export const metadata = {
    title: 'About Us - Our Mission & Cybersecurity Expertise',
    description:
        "Learn about Helxon's mission to deliver enterprise-grade cybersecurity solutions. Discover our SOC-as-a-Service expertise, Microsoft partnerships, and commitment to protecting organizations from cyber threats.",
    keywords: [
        'about Helxon',
        'cybersecurity company',
        'SOC expertise',
        'Microsoft security partner',
        'security operations',
        'cyber defense team',
        'enterprise protection',
    ],
    openGraph: {
        title: 'About Us - Our Mission & Cybersecurity Expertise | Helxon',
        description:
            "Learn about Helxon's mission to deliver enterprise-grade cybersecurity solutions and our commitment to protecting organizations from cyber threats.",
        url: 'https://helxon.com/about-us',
        siteName: 'Helxon',
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
        title: 'About Us - Our Mission & Cybersecurity Expertise | Helxon',
        description:
            "Learn about Helxon's mission to deliver enterprise-grade cybersecurity solutions and our commitment to protecting organizations from cyber threats.",
        images: ['/favicon.ico'],
    },
    alternates: {
        canonical: 'https://helxon.com/about-us',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutUsLayout({ children }) {
    return children;
}
