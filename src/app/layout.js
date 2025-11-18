import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BottomNavBar } from "@/components/BottomNavBar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://helxon.com'),
  title: {
    default: 'Helxon - Enterprise Cybersecurity & SOC-as-a-Service Solutions',
    template: '%s | Helxon'
  },
  description: 'Helxon provides 24/7 SOC-as-a-Service, threat detection, and managed security operations powered by Microsoft Sentinel and Defender.',
  keywords: 'cybersecurity, SOC-as-a-Service, threat detection, managed security, Microsoft Sentinel, Azure security, VorXOC',
  authors: [{ name: 'Helxon' }],
  creator: 'Helxon',
  publisher: 'Helxon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://helxon.com',
    siteName: 'Helxon',
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
    title: 'Helxon | Enterprise Cybersecurity & SOC-as-a-Service Solutions',
    description: 'Enterprise-grade SOC-as-a-Service with 24/7 threat monitoring and Microsoft-powered security solutions.',
    images: ['/favicon.ico'],
  },
  robots: {
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
  verification: {
    google: '',
    yandex: '',
    bing: '',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PK39L53T');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PK39L53T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <ScrollToTop />
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <Header />
          <main className="flex-1">{children}</main>
          <BottomNavBar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
