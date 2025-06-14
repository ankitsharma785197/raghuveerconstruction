
// src/components/sections/hero-section.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/ui/animated-text';
import { motion } from 'framer-motion';

const sectionAnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const headingGroupVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.1, 0.9],
    },
  },
};

const subheadingVariants = {
  hidden: { opacity: 0, scale: 0.90 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};


export function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative bg-secondary py-20 md:py-32 overflow-hidden"
      variants={sectionAnimationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Changed once: true to once: false
    >
      <motion.div
        className="container mx-auto px-4 z-10 relative"
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-1 gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.div variants={headingGroupVariants}>
              <h1
                className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2"
              >
                Raghuveer Construction
              </h1>
              <p
                className="font-headline text-2xl sm:text-3xl md:text-4xl text-muted-foreground mb-6"
              >
                Building Your{' '}
                <span className="text-primary">
                  <AnimatedText words={["Vision", "Dream"]} typingDelay={150} deletingDelay={75} pauseDelay={1200} />
                </span>
              </p>
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0"
              variants={subheadingVariants}
            >
              From concept to completion, we deliver excellence in every project. Trust us to bring your architectural dreams to life with unmatched quality and dedication.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col space-y-4 items-center md:flex-row md:space-y-0 md:space-x-4 md:justify-start"
              variants={buttonsVariants}
            >
              <Button asChild variant="outline1"  size="lg" className="font-body w-full md:w-auto">
                <Link href="#contact">Bring Your Plans to Life</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body w-full md:w-auto">
                <Link href="#projects">Our Projects</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50"></div>
    </motion.section>
  );
}
