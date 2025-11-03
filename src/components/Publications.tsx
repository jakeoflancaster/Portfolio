'use client';

import { motion } from 'framer-motion';
import { FaBook, FaCheckCircle, FaClock, FaFileAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  status: string;
  date: string;
  icon: IconType;
  color: string;
}

export default function Publications() {
  const publications: Publication[] = [
    {
      title: "Conceptual Single Launch Lunar PNT Architecture with Sub-Meter Accuracy and Continuous South Pole Coverage for Lunar and Cis-Lunar Operations",
      authors: "Lancaster, J.A., Pasumarthy, Y., Fertig, I., et al.",
      venue: "AIAA SciTech Forum, Orlando, FL",
      status: "Accepted",
      date: "January 2026",
      icon: FaCheckCircle,
      color: "text-green-400"
    },
    {
      title: "A Data-Driven Autopilot for a Fighter Aircraft without Prior Modeling or Training",
      authors: "Lancaster, J.A., Richards J.R., Bernstein, D.S.",
      venue: "AIAA Aviation 2025 Forum",
      status: "Abstract Accepted",
      date: "July 2025",
      icon: FaClock,
      color: "text-green-400"
    },
    {
      title: "Lessons Learned in Engine Temperature Control Through Radiator Configurations: A Formula SAE Design",
      authors: "Lancaster, J. A., J.M. Mativo",
      venue: "American Society of Engineering Education, Engineering Libraries Division Conference, MN. Minneapolis",
      status: "Published",
      date: "June 2022",
      icon: FaBook,
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-16" id="publications">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <FaFileAlt className="text-accent" />
          Conference Papers
        </h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-secondary/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <pub.icon className={`text-2xl ${pub.color} mt-1`} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                      <p className="text-gray-300">{pub.authors}</p>
                      <p className="text-gray-400">{pub.venue}</p>
                      <div className="mt-2 flex gap-4">
                        <span className={pub.color}>{pub.status}</span>
                        <span className="text-gray-400">{pub.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
