"use client";

import React from "react";
import { motion } from "motion/react";
import { SplineBackground } from "./SplineBackground";
import "./LandingHero.scss";

export function LandingHero() {
  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        zIndex: 10,
        transition: { staggerChildren: 0.8 },
      },
    },
    word: {
      hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.2, ease: "easeOut" },
      },
    },
    paragraph: {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeOut", delay: 0.6 },
      },
    },
  };

  return (
    <section className="landing-hero">
      <div className="landing-hero__background">
        <SplineBackground />
      </div>

      <div className="landing-hero__container">
        <motion.div
          className="landing-hero__content"
          variants={variants.container}
          initial="hidden"
          animate="visible"
        >
          <h1
            className="landing-hero__title"
            aria-label="Secure At The Speed Of Scale"
          >
            <motion.span variants={variants.word} className="word word--primary">
              Secure
            </motion.span>
            <br />
            <motion.span
              variants={variants.word}
              className="word word--gradient-cool"
            >
              At The Speed Of Scale
            </motion.span>
          </h1>

          <motion.p
            className="landing-hero__description"
            variants={variants.paragraph}
          >
            Empower your SecOps with autonomous investigation, triage, and
            response. Helxon analyzes every alert, correlates signals across your
            stack, and acts in seconds, so your team can focus on what matters.
          </motion.p>
        </motion.div>
      </div>

      <div className="landing-hero__overlay" />
    </section>
  );
}

