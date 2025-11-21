"use client";

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';
import vorxocLogo from '@/app/assets/vorxocWhite.svg';
import vorxocGreenLogo from '@/app/assets/vorxocGreen.svg';
import './VorxocHero.scss';

export function VorxocHero() {
  const router = useRouter();

  const handleStartTrial = () => {
    router.push('/contact-us');
  };

  return (
    <section className="vorxoc-hero">
      {/* Hero Section with Green Background */}
      <div className="vorxoc-hero__hero">
        <div className="vorxoc-hero__hero-container">
          <motion.div
            className="vorxoc-hero__hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div
              className="vorxoc-hero__hero-logo"
              initial={{ opacity: 0, scale: 0.85, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15, type: 'spring' }}
            >
              <Image 
                src={vorxocLogo} 
                alt="VORXOC Logo" 
                width={320}
                height={320}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="vorxoc-hero__content">
        <div className="vorxoc-hero__container">
          <div className="vorxoc-hero__content-grid">
            <motion.div
              className="vorxoc-hero__text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <motion.h1
                className="vorxoc-hero__title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span className="vorxoc-hero__title--green green-logo">
                  <Image 
                    src={vorxocGreenLogo} 
                    alt="VORXOC Green Logo" 
                    width={280}
                    height={120}
                  />
                </span>
                <br />
                <span className="vorxoc-hero__title--black">Enterprise-Grade</span>
                <br />
                <span className="vorxoc-hero__title--green">Security Operations</span>
                <br />
                <span className="vorxoc-hero__title--black">Without the Enterprise Cost</span>
              </motion.h1>

              <motion.p
                className="vorxoc-hero__description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                VorXOC delivers comprehensive cybersecurity monitoring, threat detection through our virtual Security Operations Center. Get 24/7 protection with expert analysts, AI-powered threat intelligence, and rapid response capabilities.
              </motion.p>

              <motion.button
                className="vorxoc-hero__cta"
                onClick={handleStartTrial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="vorxoc-hero__cta-icon" />
              </motion.button>
            </motion.div>

            <motion.div
              className="vorxoc-hero__illustration"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <DotLottieReact
                src="https://lottie.host/22e07541-6ebb-4b24-964a-c0d26c33d66a/p9f7ttqsyd.lottie"
                loop
                autoplay
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

