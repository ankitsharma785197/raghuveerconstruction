
'use client';

import { ProjectCard } from '@/components/ui/project-card';
import { motion } from 'framer-motion';

type Project = {
  imageUrl: string;
  title: string;
  description: string;
  dataAiHint: string;
};

const projects: Project[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Modern Urban Residence',
    description: 'A stunning modern home featuring clean lines, sustainable materials, and integrated smart home technology for urban living.',
    dataAiHint: 'church building',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Commercial Office Complex',
    description: 'State-of-the-art commercial space designed for productivity and collaboration, featuring flexible layouts and green building standards.',
    dataAiHint: 'modern office',
  },
  {
    imageUrl: 'https://img.freepik.com/free-photo/construction-engineer-reviewing-plans_23-2151933418.jpg?t=st=1749490304~exp=1749493904~hmac=d4dd82e0c6bf53ce3caf378a12901a668b12b39d3492b06cd15e4b98bff5378a&w=1060',
    title: 'Structural Design & Engineering',
    description: 'Precision structural engineering and design, ensuring the stability and longevity of your vision from the ground up.',
    dataAiHint: 'house frame',
  },
   {
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=jpg',
    title: 'Luxury Villa Renovation',
    description: 'Complete overhaul of a classic villa, blending timeless elegance with contemporary comforts and high-end finishes.',
    dataAiHint: 'luxury interior',
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

export function ProjectsGallerySection() {
  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24 bg-secondary"
      variants={sectionAnimationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Changed once: true to once: false
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Explore a selection of our successfully completed projects, showcasing our commitment to quality and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.5 }} // Changed once: true to once: false
            >
              <ProjectCard
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                dataAiHint={project.dataAiHint}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
