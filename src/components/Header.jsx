"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Logo } from "./Logo";
import AboutUsLogo from "@/app/assets/AboutUs_icons/LOGO.svg";
import { Button } from "./ui/Button";
import { GetStartedModal } from "./GetStartedModal";
import Image from "next/image";
import "./Header.scss";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAboutUsPage = pathname === '/about-us' || pathname === '/contact-us' || pathname === '/faq' || pathname === '/vorxoc' || pathname === '/blogs';

  useEffect(() => {
    if (!isAboutUsPage) {
      setIsInHeroSection(false);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.querySelector('.about-us-hero') || document.querySelector('.contact-us-page__hero') || document.querySelector('.faq-page__hero') || document.querySelector('.vorxoc-hero__hero-container') || document.querySelector('.blogs-page__hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Account for header height
        setIsInHeroSection(scrollPosition < heroBottom);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutUsPage]);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const showWhiteHeader = isAboutUsPage && isInHeroSection;

  return (
    <>
      <header className={`header ${showWhiteHeader ? 'header--white' : ''}`}>
        <div className="header__container">
          <div className="header__content">
            {/* Logo */}
            <div className="header__logo" onClick={handleLogoClick}>
              {showWhiteHeader ? (
                <Image src={AboutUsLogo} alt="Helxon" className="header__logo-img" 
                width={156}
                height={51}
                priority
                  />
              ) : (
                <Logo />
              )}
            </div>

            {/* Get Started Button */}
            <Button
              variant="outline"
              className={`header__button ${showWhiteHeader ? 'header__button--white' : ''}`}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

