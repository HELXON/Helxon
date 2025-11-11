'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Zap, Handshake } from 'lucide-react';
import './AboutUsCapabilities.scss';

const CAPABILITIES = [
  {
    title: 'Protactive Defense',
    description:
      "We don't just stop attacks — we stop fear. Our SOC solutions provide proactive, scalable, and intelligent defense systems.",
    icon: Shield,
    iconColor: '#FFD141',
  },
  {
    title: 'Visibility & Transparency',
    description:
      'Unified telemetry, dashboards, and reporting keep every stakeholder aligned with real-time security insights.',
    icon: Eye,
    iconColor: '#0098FD',
  },
  {
    title: 'Speed & Efficiency',
    description:
      'Automation and guided playbooks accelerate detection and response so threats are contained before they disrupt operations.',
    icon: Zap,
    iconColor: '#FF6B35',
  },
  {
    title: 'Partnership & Trust',
    description:
      'Our experts work alongside your teams to tailor strategies, strengthen resilience, and build long-term confidence.',
    icon: Handshake,
    iconColor: '#00C896',
  },
];

export function AboutUsCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = CAPABILITIES[activeIndex];

  // Helper function to convert hex to rgba
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <section className="about-us-capabilities">
      <div className="about-us-capabilities__container">
        <motion.h2
          className="about-us-capabilities__title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Deliver
        </motion.h2>
        <motion.p
          className="about-us-capabilities__subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The core capabilities that make Helxon your trusted security partner
        </motion.p>

        <div className="about-us-capabilities__surface">
          <motion.div
            className="about-us-capabilities__surface-background"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="about-us-capabilities__surface-inner">
            <div className="about-us-capabilities__tabs">
              {CAPABILITIES.map((capability, index) => (
                <motion.button
                  key={capability.title}
                  type="button"
                  className={`about-us-capabilities__tab ${
                    index === activeIndex ? 'active' : ''
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={index === activeIndex}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: index === activeIndex ? 1 : 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{capability.title}</span>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeCapability.title}
              className="about-us-capabilities__panel"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="about-us-capabilities__panel-icon"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                style={{
                  '--icon-color': activeCapability.iconColor,
                  backgroundColor: hexToRgba(activeCapability.iconColor, 0.18),
                  boxShadow: `0 22px 60px ${hexToRgba(activeCapability.iconColor, 0.4)}`,
                }}
              >
                {React.createElement(activeCapability.icon, {
                  size: '100%',
                  strokeWidth: 1.5,
                  color: activeCapability.iconColor,
                })}
              </motion.div>
              <motion.p
                className="about-us-capabilities__panel-text"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                {activeCapability.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

