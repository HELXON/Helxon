'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, PlayCircle } from 'lucide-react';
import dashboardImage from '../../app/assets/VorxocPage.jpg';
import { GetStartedModal } from '../GetStartedModal';
import './VorxocOverview.scss';

export function VorxocOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWatchDemo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    {
      id: 1,
      title: 'Unified Security Monitoring',
      position: 'top-left',
    },
    {
      id: 2,
      title: 'Security Reports & Analytics',
      position: 'bottom-left',
    },
    {
      id: 3,
      title: 'Rapid Incident Response',
      position: 'bottom-center',
    },
    {
      id: 4,
      title: 'Real-time Alert Management',
      position: 'top-right',
    },
    {
      id: 5,
      title: 'Expert SOC Team',
      position: 'middle-right',
    },
  ];

  return (
    <section className="vorxoc-overview">
      <div className="vorxoc-overview__container">
        {/* Section Header */}
        <motion.div
          className="vorxoc-overview__header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="vorxoc-overview__title">What Is VorXOC?</h2>
          <p className="vorxoc-overview__description">
            VorXOC (Vortex Operations Center) is Helxon's proprietary Security Operations and Automation Platform that centralizes monitoring, detection, and response. It integrates seamlessly with your existing security tools to deliver complete visibility, automated workflows, and continuous protection across endpoints, networks, and cloud systems.
          </p>
        </motion.div>

        {/* Dashboard and Features */}
        <div className="vorxoc-overview__main">
          <motion.div
            className="vorxoc-overview__dashboard-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Dashboard Image */}
            <div className="vorxoc-overview__dashboard">
              <img 
                src={dashboardImage.src} 
                alt="VORXOC Dashboard" 
                className="vorxoc-overview__dashboard-image"
              />
            </div>

            {/* Feature Connectors (Desktop only) */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`vorxoc-overview__feature vorxoc-overview__feature--${feature.position}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="vorxoc-overview__feature-line" />
                <div className="vorxoc-overview__feature-content">
                  <Check className="vorxoc-overview__feature-icon" />
                  <span className="vorxoc-overview__feature-text">{feature.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features List (Mobile only) */}
          <motion.div
            className="vorxoc-overview__features-list"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="vorxoc-overview__feature-mobile"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Check className="vorxoc-overview__feature-icon" />
                <span className="vorxoc-overview__feature-text">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Watch Demo CTA */}
        <motion.div
          className="vorxoc-overview__cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="vorxoc-overview__cta"
            onClick={handleWatchDemo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayCircle className="vorxoc-overview__cta-icon" />
            <span>Watch Demo</span>
            <ArrowRight className="vorxoc-overview__cta-arrow" />
          </motion.button>
        </motion.div>
      </div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}

