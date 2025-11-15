"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import HeroLogo from '@/app/assets/AboutUs_img/Asset 4 (1) 1.png';
import { ChevronDown } from 'lucide-react';
import { AboutUsCTA } from '@/components/AboutUsComponents/AboutUsCTA';
import { FAQStructuredData } from '@/components/FAQStructuredData';
import './FAQPage.scss';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are the main benefits of SOC-as-a-Service for businesses?',
      answer: 'SOC-as-a-Service (SOCaaS) lets businesses access 24/7 cybersecurity monitoring and threat response without building or maintaining an internal SOC. With Helxon, you gain immediate access to certified analysts, AI-driven automation, and Microsoft-powered protection—reducing costs, improving detection speed, and strengthening compliance.',
    },
    {
      question: 'How much does SOC-as-a-Service cost?',
      answer: 'Helxon offers flexible monthly pricing based on data volume, alert volume, and service tier (Essential, Professional, or Enterprise). Packages start with affordable entry-level monitoring and scale up to full managed SOC operations. Custom quotes are available for organizations with specific data or compliance needs.',
    },
    {
      question: "How is Helxon's SOCaaS different from other providers?",
      answer: "Helxon's SOCaaS is built entirely on Microsoft's security stack, including Azure, Sentinel, and Defender. Unlike other vendors that rely on third-party platforms, Helxon offers seamless integration, zero data duplication, and compliance-ready monitoring—all managed through the proprietary VorXOC platform for complete visibility and control.",
    },
    {
      question: 'Does Helxon support hybrid or multi-cloud environments?',
      answer: 'Yes. Helxon connects and monitors AWS, Google Cloud, and on-premises systems in addition to Microsoft Azure. VorXOC aggregates all alerts into a single dashboard, providing unified threat visibility across every environment.',
    },
    {
      question: 'How does Helxon ensure data privacy and compliance?',
      answer: "Data never leaves your Microsoft tenant. Helxon's architecture is compliant with SOC 2 Type II, ISO 27001, GDPR, and PIPEDA, ensuring all logs, alerts, and reports remain secure and traceable. You choose your data region for full sovereignty and regulatory alignment.",
    },
    {
      question: 'Can Helxon help my organization meet compliance frameworks like HIPAA or PCI DSS?',
      answer: 'Absolutely. Helxon helps you meet multiple compliance requirements, including HIPAA, PCI DSS, NIST, and ISO standards, by providing log retention, evidence reporting, and audit-ready documentation built directly into the VorXOC platform.',
    },
    {
      question: 'Does Helxon offer threat intelligence or proactive threat hunting?',
      answer: "Yes. Our Enterprise SOCaaS tier includes advanced threat hunting, intelligence integration, and forensic analysis. Helxon's analysts use Microsoft Sentinel and Defender data to detect hidden threats before they impact your business.",
    },
    {
      question: 'Can I integrate Helxon with my existing SIEM or EDR solution?',
      answer: 'Definitely. VorXOC connects natively to Microsoft Sentinel and Defender, but it can also ingest alerts from other SIEM or EDR platforms like Splunk, CrowdStrike, or Palo Alto Cortex XDR using open APIs.',
    },
    {
      question: 'How does Helxon automate incident response?',
      answer: "Helxon uses Microsoft's Logic Apps and Defender automation capabilities within VorXOC to trigger prebuilt playbooks for common incidents—such as malware containment, credential lockouts, or phishing alerts—ensuring faster response and minimal manual intervention.",
    },
    {
      question: 'Is SOC-as-a-Service suitable for small and mid-sized businesses?',
      answer: "Yes. Helxon's SOCaaS is ideal for small and mid-sized businesses that lack dedicated security teams but still need enterprise-grade protection. Our Professional plan delivers full threat investigation and response at a fraction of traditional SOC costs.",
    },
    {
      question: 'What kind of reporting and visibility do customers get?',
      answer: 'Customers receive real-time dashboards, automated incident reports, and monthly executive summaries highlighting threat trends, attack patterns, and remediation activities—all accessible within the VorXOC platform.',
    },
    {
      question: 'Can Helxon provide a demo of the VorXOC platform?',
      answer: 'Yes. You can request a live demo to see how VorXOC visualizes security alerts, automates response, and integrates seamlessly with Microsoft Sentinel and Defender. Schedule a free demo through the Contact page.',
    },
    {
      question: 'How does Helxon help reduce false positives?',
      answer: 'Helxon uses AI-driven correlation, Microsoft Sentinel analytics, and continuous tuning to minimize false positives. Our analysts review and validate alerts before escalation, ensuring your team only receives verified, actionable incidents.',
    },
    {
      question: 'What industries does Helxon serve?',
      answer: 'Helxon supports organizations across industries such as finance, healthcare, government, education, manufacturing, and retail—anywhere that requires continuous monitoring, regulatory compliance, and data protection.',
    },
    {
      question: 'Is there a minimum contract term for SOCaaS?',
      answer: 'Helxon offers flexible subscription models with monthly, quarterly, or annual contracts. You can start small and scale as your organization grows or security needs evolve.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* FAQ Structured Data for SEO */}
      <FAQStructuredData faqs={faqs} />
      
      {/* Hero Section */}
      <section className="faq-page__hero">
        <div className="faq-page__hero-container">
          <motion.div
            className="faq-page__hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="faq-page__hero-logo"
              initial={{ opacity: 0, scale: 0.85, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
            >
              <Image 
                src={HeroLogo} 
                alt="Helxon logo" 
                width={150}
                height={150}
                priority
              />
            </motion.div>
            <motion.h1
              className="faq-page__hero-title"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              FAQ
            </motion.h1>
            <motion.p
              className="faq-page__hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Quick answers to common questions about Helxon's security solutions and services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-page__main">
        <div className="faq-page__main-container">
          <motion.div
            className="faq-page__faq-list"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-page__faq-item ${openIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
              >
                <motion.button
                  className="faq-page__faq-question"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="faq-page__faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="faq-page__faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <AboutUsCTA />
    </div>
  );
}
