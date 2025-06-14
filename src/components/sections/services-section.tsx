
'use client';

import { ServiceCard } from '@/components/ui/service-card';
import { ClipboardList, DraftingCompass, HardHat, PaintRoller } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: ClipboardList,
    title: 'Project Management',
    description: 'Expert oversight from start to finish, ensuring projects are on time and within budget.',
  },
  {
    icon: DraftingCompass,
    title: 'Design & Architecture',
    description: 'Innovative and functional designs tailored to your specific needs and aesthetic preferences.',
  },
  {
    icon: HardHat,
    title: 'Construction',
    description: 'High-quality construction services using the latest techniques and durable materials.',
  },
  {
    icon: PaintRoller,
    title: 'Renovations',
    description: 'Transforming existing spaces with meticulous attention to detail and craftsmanship.',
  },
];

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

export function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="py-16 md:py-24 bg-background"
      variants={sectionAnimationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Changed once: true to once: false
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            We offer a comprehensive range of construction services to meet your every need.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.5 }} // Changed once: true to once: false
              className="h-full" 
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
