"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  Building2,
  Heart,
  Landmark,
  ShoppingCart,
  Factory,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import "./IndustriesSection.scss";

export function IndustriesSection() {
  const router = useRouter();
  const colors = {
    blue: "#2B7FED",
    orange: "#FDB022",
    pink: "#E94B8B",
    cyan: "#5DADE2",
  };

  const industries = [
    {
      icon: Building2,
      title: "Enterprise & Fortune 500",
      description:
        "Comprehensive security solutions tailored for large-scale organizations with complex infrastructure and compliance requirements.",
      color: colors.blue,
      gradient: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.cyan} 100%)`,
    },
    {
      icon: Briefcase,
      title: "Financial Services",
      description:
        "Bank-grade security protecting financial transactions, customer data, and ensuring regulatory compliance across the financial sector.",
      color: colors.cyan,
      gradient: `linear-gradient(135deg, ${colors.cyan} 0%, ${colors.blue} 100%)`,
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "HIPAA-compliant security solutions protecting patient data, medical records, and healthcare systems from cyber threats.",
      color: colors.pink,
      gradient: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.pink}dd 100%)`,
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Securing student information, online learning platforms, and educational infrastructure against evolving cyber threats.",
      color: colors.orange,
      gradient: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orange}dd 100%)`,
    },
    {
      icon: Landmark,
      title: "Government",
      description:
        "Advanced security for public sector organizations, safeguarding critical infrastructure and sensitive government data.",
      color: colors.blue,
      gradient: colors.blue,
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description:
        "Protecting industrial control systems, IoT devices, and intellectual property in manufacturing environments.",
      color: colors.cyan,
      gradient: colors.cyan,
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description:
        "PCI-DSS compliant solutions securing customer payment data and protecting online retail platforms from breaches.",
      color: colors.pink,
      gradient: colors.pink,
    },
  ];

  return (
    <section className="industries-section">
      <div className="industries-section__bg-elements">
        <motion.div
          className="bg-blob bg-blob--blue"
          style={{ background: colors.blue }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-blob bg-blob--pink"
          style={{ background: colors.pink }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="industries-section__container">
        <motion.div
          className="industries-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="industries-section__title"
            style={{
              background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.cyan} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Industry-Specific Solutions
          </motion.h2>
          <p className="industries-section__subtitle">
            Each industry faces unique security challenges. Our solutions are
            tailored to meet specific regulatory requirements and threat
            landscapes.
          </p>
        </motion.div>

        <div className="industries-section__grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isLastItem = index === industries.length - 1;
            return (
              <motion.div
                key={industry.title}
                className={`industry-card ${
                  isLastItem ? "industry-card--centered" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="industry-card__inner"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="industry-card__overlay"
                    style={{
                      background: industry.gradient,
                    }}
                  />

                  <div className="industry-card__content">
                    <motion.div
                      className="industry-card__icon-wrapper"
                      style={{
                        background: `${industry.color}20`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        className="industry-card__icon"
                        style={{ color: industry.color }}
                        strokeWidth={2}
                        size={32}
                      />
                    </motion.div>

                    <h3 className="industry-card__title">{industry.title}</h3>

                    <p className="industry-card__description">
                      {industry.description}
                    </p>
                  </div>

                  <div
                    className="industry-card__corner"
                    style={{
                      background: `radial-gradient(circle at top right, ${industry.color}, transparent)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="industries-section__cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="industries-section__cta-text">
            Don&apos;t see your industry? We customize solutions for businesses
            of all types.
          </p>
          <motion.button
            className="industries-section__cta-button"
            style={{
              background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.cyan} 100%)`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(43, 127, 237, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact-us")}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

