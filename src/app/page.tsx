// src/app/page.tsx
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ProjectsGallerySection } from '@/components/sections/projects-gallery-section';
import { ContactSection } from '@/components/sections/contact-section';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 1 }, // Changed from 0 to 1 to ensure initial visibility
  visible: {
    opacity: 1,
    transition: {
      duration: 0.01, // Effectively no transition, just sets state
    },
  },
};

export default function HomePage() {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ProjectsGallerySection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
}
