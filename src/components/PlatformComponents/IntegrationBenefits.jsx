'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Workflow, Zap, DollarSign } from 'lucide-react';
import './IntegrationBenefits.scss';

export function IntegrationBenefits() {
  const benefits = [
    {
      icon: Workflow,
      title: 'Seamless Integration',
      description: 'Quick deployment with minimal disruption to existing workflows',
      color: '#33CC00',
    },
    {
      icon: Zap,
      title: 'Enhanced Capabilities',
      description: 'Boost every tool: AI + analysts turn alerts into action in seconds',
      color: '#007BFF',
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Unlock 25-40% of your security budget instantly',
      color: '#E94B8B',
    },
  ];

  return (
    <section className="integration-benefits">
      <div className="integration-benefits__container">
        <motion.div
          className="integration-benefits__header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="integration-benefits__title">Integration Benefits</h2>
          <p className="integration-benefits__subtitle">
            Leverage your existing security investments while enhancing capabilities with our SOC expertise
          </p>
        </motion.div>

        <div className="integration-benefits__grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="integration-benefits__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.075 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="integration-benefits__icon-wrapper"
                  style={{ backgroundColor: `${benefit.color}15` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.15 + index * 0.075, type: 'spring' }}
                >
                  <Icon
                    className="integration-benefits__icon"
                    style={{ color: benefit.color }}
                  />
                </motion.div>
                <h3 className="integration-benefits__card-title">{benefit.title}</h3>
                <p className="integration-benefits__card-description">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

