'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users, Clock, TrendingUp } from 'lucide-react';
import './WhyChooseVorxoc.scss';

export function WhyChooseVorxoc() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description:
        'Certified security professionals with deep industry expertise and years of experience in security operations.',
    },
    {
      icon: Clock,
      title: '24/7 Coverage',
      description:
        'Round-the-clock monitoring and response capabilities ensuring your organization is always protected.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description:
        'Track record of success with measurable improvements in security posture and incident response times.',
    },
  ];

  return (
    <section className="why-choose-vorxoc">
      <div className="why-choose-vorxoc__container">
        <motion.div
          className="why-choose-vorxoc__header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="why-choose-vorxoc__title">Why Choose VorXOC Solutions?</h2>
          <p className="why-choose-vorxoc__description">
            VorXOC (Vortex Operations Center) is Helxon's proprietary Security Operations and
            Automation Platform, designed to unify visibility, streamline response, and accelerate
            detection across your entire IT ecosystem. Built on advanced analytics, automation, and
            real-time threat intelligence, VorXOC serves as the central nervous system of your
            cybersecurity operations — bringing together alerts from cloud, on-premises, and hybrid
            environments into one intelligent command hub. With automated playbooks and integrated
            threat intelligence, VorXOC transforms traditional SOC workflows into an agile,
            proactive defense engine.
          </p>
        </motion.div>

        <div className="why-choose-vorxoc__grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="why-choose-vorxoc__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.075 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="why-choose-vorxoc__icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.1 + index * 0.075, type: 'spring' }}
                >
                  <Icon className="why-choose-vorxoc__icon" />
                </motion.div>
                <h3 className="why-choose-vorxoc__card-title">{feature.title}</h3>
                <p className="why-choose-vorxoc__card-description">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

