'use client';

import React from 'react';
import { motion } from 'motion/react';
import AWSLogo from '../../app/assets/AboutUs_icons/Amazon_Web_Services_Logo 1.svg';
import MicrosoftSentinelLogo from '../../app/assets/AboutUs_icons/logo-microsoft-sentinel-650x250-white-1 1.svg';
import GoogleCloudLogo from '../../app/assets/OtherLogos/Google_Cloud.svg';
import FortinetLogo from '../../app/assets/AboutUs_icons/Fortinet.svg';
import CrowdStrikeLogo from '../../app/assets/AboutUs_icons/CrowdStrike_logo 1.svg';
import './AboutUsPartners.scss';

export function AboutUsPartners() {
  const partners = [
    { name: 'Amazon Web Services', logo: AWSLogo },
    { name: 'Microsoft Sentinel', logo: MicrosoftSentinelLogo },
    { name: 'Google Cloud', logo: GoogleCloudLogo },
    { name: 'Fortinet', logo: FortinetLogo },
    { name: 'CrowdStrike', logo: CrowdStrikeLogo },
  ];

  return (
    <section className="about-us-partners">
      <div className="about-us-partners__container">
        <motion.div
          className="about-us-partners__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="about-us-partners__logos">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="about-us-partners__logo-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.05 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={partner.logo.src}
                  alt={partner.name}
                  className="about-us-partners__logo"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

