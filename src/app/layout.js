import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BottomNavBar } from "@/components/BottomNavBar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
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
