'use client';

import { motion } from 'framer-motion';
import { RiRocketLine } from 'react-icons/ri';

export default function OngoingProjects() {
  const ongoingProjects = [
    {
      title: "Electric Propulsion Mission Design and Analysis",
      date: "Coming Dec 2025"
    },
    {
      title: "Missile Guidance Under Evasive Maneuvers",
      date: "Coming Dec 2025"
    }
  ];

  return (
    <section className="py-16" id="ongoing-projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <RiRocketLine className="text-accent" />
          Ongoing Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ongoingProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-auto">{project.title}</h3>
              <p className="text-sm text-accent mt-4">{project.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
