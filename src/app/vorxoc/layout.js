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
        title: 'VorXOC Platform - Unified Security Operations Dashboard | Helxon',
        description:
            "VorXOC is Helxon's proprietary unified security platform integrating Microsoft Sentinel, Defender, and multi-cloud environments.",
        images: ['/favicon.ico'],
    },
    alternates: {
        canonical: 'https://helxon.com/vorxoc',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function VorxocLayout({ children }) {
    return children;
}
