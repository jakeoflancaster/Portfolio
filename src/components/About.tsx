'use client';

import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

export default function About() {
  return (
    <section className="py-16" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <FaUser className="text-accent" />
          About Me
        </h2>
        <div className="bg-secondary/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <p className="text-gray-300 text-lg">
              [Your about section content will go here]
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
