"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const LandingHero = dynamic(
  () =>
    import("@/components/HomeComponents/LandingHero").then(
      (module) => module.LandingHero,
    ),
  { ssr: false, suspense: true },
);

const UnifiedSolution = dynamic(
  () =>
    import("@/components/HomeComponents/UnifiedSolution").then(
      (module) => module.UnifiedSolution,
    ),
  { ssr: false, suspense: true },
);

const IndustriesSection = dynamic(
  () =>
    import("@/components/HomeComponents/IndustriesSection").then(
      (module) => module.IndustriesSection,
    ),
  { ssr: false, suspense: true },
);

function SectionFallback({ label, minHeight = "16rem", className = "" }) {
  return (
    <div
      className={`flex items-center justify-center text-slate-500 ${className}`}
      style={{ minHeight }}
    >
      Loading {label}...
    </div>
  );
}

export function HomePageContent() {
  return (
    <>
      <Suspense
        fallback={
          <SectionFallback
            label="hero section"
            minHeight="80vh"
            className="landing-hero landing-hero--fallback"
          />
        }
      >
        <LandingHero />
      </Suspense>

      <Suspense
        fallback={
          <SectionFallback
            label="unified solution"
            minHeight="50rem"
            className="unified-solution unified-solution--fallback"
          />
        }
      >
        <UnifiedSolution />
      </Suspense>

      <Suspense
        fallback={
          <SectionFallback
            label="industries"
            minHeight="40rem"
            className="industries-section industries-section--fallback"
          />
        }
      >
        <IndustriesSection />
      </Suspense>
    </>
  );
}

