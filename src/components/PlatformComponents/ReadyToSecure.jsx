'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import './ReadyToSecure.scss';

export function ReadyToSecure() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/contact-us');
  };

  const handleContactSales = () => {
    router.push('/contact-us');
  };

  return (
    <section className="ready-to-secure">
      <div className="ready-to-secure__container">
        <motion.h2
          className="ready-to-secure__title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Ready to <span className="ready-to-secure__title--green">Secure</span> Your Business?
        </motion.h2>
        <motion.p
          className="ready-to-secure__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Join hundreds of companies that trust VorXOC to protect their digital assets.
        </motion.p>

        <motion.div
          className="ready-to-secure__buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.button
            className="ready-to-secure__button ready-to-secure__button--primary"
            onClick={handleGetStarted}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span>
            <ArrowRight className="ready-to-secure__button-icon" />
          </motion.button>
          <motion.button
            className="ready-to-secure__button ready-to-secure__button--secondary"
            onClick={handleContactSales}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Sales</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

