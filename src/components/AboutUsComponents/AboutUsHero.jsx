'use client';

import React from 'react';
import { motion } from 'motion/react';
import HeroMark from '../../app/assets/AboutUs_img/Asset 4 (1) 1.png';
import './AboutUsHero.scss';

export function AboutUsHero() {
  return (
    <section className="about-us-hero">
      <div className="about-us-hero__background" />

      <div className="about-us-hero__container">
        <motion.div
          className="about-us-hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div
            className="about-us-hero__logo-wrapper"
            initial={{ opacity: 0, scale: 0.85, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25, type: 'spring' }}
          >
            <img src={HeroMark.src} alt="Helxon emblem" />
          </motion.div>
          <motion.h1
            className="about-us-hero__title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="about-us-hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            We are cybersecurity professionals dedicated to removing fear from the digital world through intelligent, proactive defense solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

