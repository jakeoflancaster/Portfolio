'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  const educationData = [
    {
      school: "The University of Michigan",
      location: "Ann Arbor, MI",
      degree: "Master of Science, Aerospace Engineering",
      period: "Jan. 2024-Dec. 2025",
      gpa: "3.775/4.00",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      school: "The University of Georgia",
      location: "Athens, GA",
      degree: "Bachelor of Science, Mechanical Engineering",
      period: "Dec. 2021",
      gpa: "3.39/4.00",
      color: "from-red-500/20 to-red-600/20"
    }
  ];

  return (
    <section className="py-16" id="education">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <FaGraduationCap className="text-accent" />
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-lg opacity-50`} />
              <div className="bg-secondary/80 backdrop-blur-sm p-4 rounded-lg relative z-10 border border-gray-700/50">
                <h3 className="text-lg font-semibold">{edu.school}</h3>
                <p className="text-sm text-gray-400">{edu.location}</p>
                <p className="text-sm text-gray-300">{edu.degree}</p>
                <p className="text-sm text-gray-400">{edu.period}</p>
                <p className="text-sm text-accent font-semibold mt-1">GPA: {edu.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
