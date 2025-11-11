"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Logo } from "./Logo";
import AboutUsLogo from "@/app/assets/AboutUs_icons/LOGO.svg";
import { Button } from "./ui/Button";
import { GetStartedModal } from "./GetStartedModal";
import "./Header.scss";

const HERO_SELECTORS = [
  ".about-us-hero",
  ".contact-us-page__hero",
  ".faq-page__hero",
  ".vorxoc-hero__hero-container",
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSpecialPage = useMemo(
    () =>
      pathname === "/about-us" ||
      pathname === "/contact-us" ||
      pathname === "/faq" ||
      pathname === "/platform",
    [pathname],
  );

  useEffect(() => {
    if (!isSpecialPage) {
      return;
    }

    const handleScroll = () => {
      const heroSection = HERO_SELECTORS.map((selector) =>
        document.querySelector(selector),
      ).find(Boolean);

      if (!heroSection) {
        setIsInHeroSection(false);
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY + 100;
      setIsInHeroSection(scrollPosition < heroBottom);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSpecialPage, pathname]);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const showWhiteHeader = isSpecialPage && isInHeroSection;

  return (
    <>
      <header className={`header ${showWhiteHeader ? "header--white" : ""}`}>
        <div className="header__container">
          <div className="header__content">
            <button
              type="button"
              className="header__logo"
              onClick={handleLogoClick}
              aria-label="Navigate to home"
            >
              {showWhiteHeader ? (
                <Image
                  src={AboutUsLogo}
                  alt="Helxon"
                  className="header__logo-img"
                  width={156}
                  height={51}
                  priority
                />
              ) : (
                <Logo />
              )}
            </button>

            <Button
              variant="outline"
              className={`header__button ${
                showWhiteHeader ? "header__button--white" : ""
              }`}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <GetStartedModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

