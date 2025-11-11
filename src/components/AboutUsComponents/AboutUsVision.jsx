'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ArrowLeftCircle from '../../app/assets/AboutUs_icons/Arrow left-circle.svg';
import ArrowRightCircle from '../../app/assets/AboutUs_icons/Arrow right-circle.svg';
import './AboutUsVision.scss';

export function AboutUsVision() {
  const [activeTab, setActiveTab] = useState('Vision');

  const tabs = useMemo(
    () => [
      {
        key: 'Vision',
        label: 'Vision',
        content: `At Helxon, we envision a digital world where businesses operate without fear. Where cyber threats are neutralized before they impact operations, where security teams are empowered with intelligent tools, and where digital transformation accelerates confidently.

We believe cybersecurity should be proactive, not reactive. It should enable growth, not hinder it. Our mission is to make enterprise-grade security accessible, intelligent, and human-centered.`,
      },
      {
        key: 'Mission',
        label: 'Mission',
        content: `To democratize enterprise-grade cybersecurity by providing intelligent, automated Security Operations Center (SOC) solutions that scale with businesses of all sizes.

• Proactive Protection: Detect and neutralize threats before they impact your business
• Intelligent Automation: Leverage AI and machine learning to reduce false positives and accelerate response times
• Human Expertise: Combine advanced technology with certified security professionals for comprehensive protection`,
      },
      {
        key: 'Story',
        label: 'Story',
        content: `Founded by cybersecurity veterans who witnessed firsthand the challenges organizations face in building and maintaining effective security operations, Helxon was born from a simple yet powerful insight: cybersecurity should empower, not paralyze.

After years of seeing businesses struggle with complex security tools, overwhelming alerts, and the constant fear of the next attack, our founders set out to create something different. They envisioned a security platform that would be intelligent enough to filter noise, fast enough to stop threats, and human enough to understand business needs.
`,
      },
    ],
    [],
  );

  const activeIndex = tabs.findIndex((item) => item.key === activeTab);
  const goToTab = (index) => {
    const normalized = (index + tabs.length) % tabs.length;
    setActiveTab(tabs[normalized].key);
  };

  return (
    <section className="about-us-vision">
      <div className="about-us-vision__container">
        <div className="about-us-vision__content">
          <motion.div
            className="about-us-vision__left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-us-vision__tabs">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.key}
                  className={`about-us-vision__tab ${
                    activeTab === tab.key ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="about-us-vision__tab-bg" />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="about-us-vision__divider" />

            <motion.div
              className="about-us-vision__text-content"
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {tabs[activeIndex]?.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}
            </motion.div>

            <motion.div
              className="about-us-vision__icons"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => goToTab(activeIndex - 1)}
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={ArrowLeftCircle.src} alt="Previous" />
              </motion.button>
              <motion.button
                onClick={() => goToTab(activeIndex + 1)}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={ArrowRightCircle.src} alt="Next" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-us-vision__right"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-us-vision__image">
              <DotLottieReact
                src="https://lottie.host/339da2da-03c8-42fc-a29a-efe622af17c4/SVXFt3sorE.lottie"
                loop
                autoplay
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

