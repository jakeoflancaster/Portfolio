'use client';

import { useState } from 'react';
i      pdfUrl: getAssetPath("/pdfs/lunar-launch-vehicle.pdf"),port { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaFlask, FaCar, FaFilePdf, FaExpandAlt } from 'react-icons/fa';
import { HiChip } from 'react-icons/hi';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { getAssetPath } from '@/utils/paths';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: any;
  pdfUrl?: string;
  coverImage: string; // Path to the cover image
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(-1);
  
  const graduateResearch: Project[] = [
    {
      title: "TorqMag: Novel Magnetic Attitude Control Integration (2nd Place, SmallSat Conference)",
      coverImage: "/images/projects/torquemag-cover.jpg",
      description: "Developed innovative dual-purpose magnetic torque rods that function as both attitude control actuators and AC magnetometry sensors. The system features μ-metal components and custom electronics for seamless mode-switching between control and sensing operations.",
      technologies: ["Magnetometry", "Control Systems", "Hardware Design", "Signal Processing"],
      icon: HiChip,
      pdfUrl: "/pdfs/torquemag-paper.pdf"
    },
    {
      title: "PCAC Data-Driven Autopilot System",
      coverImage: "/images/projects/pcac-cover.jpg",
      description: "Implemented and validated a novel Predictive Cost Adaptive Control (PCAC) system for F16 and tailless aircraft, enabling robust flight control without relying on prior modeling or training. The system demonstrated exceptional performance in handling unpredictable flight dynamics through extensive simulation testing.",
      technologies: ["Adaptive Control", "Flight Dynamics", "System Identification", "Python/C/MATLAB"],
      icon: RiCodeSSlashFill
    }
  ];

  const projectWork: Project[] = [
    {
      title: "President of UGA Motorsports and Powertrain Design Team Lead",
      coverImage: getAssetPath("/images/projects/motorsports-cover.jpg"),
      description: "Led a team of 50+ engineering students as President of the Formula SAE competition team, managing all aspects from design and manufacturing to competition. Spearheaded the powertrain development, including custom intake and exhaust manifolds, while maintaining relationships with industry partners.",
      technologies: ["Team Leadership", "Powertrain Design", "CAD/CAM", "Project Management", "Performance Testing"],
      icon: FaCar
    },
    {
      title: "Multi-Stage Launch Vehicle Design and Optimization",
      coverImage: getAssetPath("/images/projects/launch-vehicle-cover.jpg"),
      description: "Designed and optimized a three-stage lunar launch vehicle using LOX/CH₄ for lower stages and LOX/LH₂ for the upper stage. The final design achieved a 98m height and 1.2M kg mass configuration through comprehensive NASA CEA analysis.",
      technologies: ["Propulsion Systems", "NASA CEA", "Combustion Analysis", "Nozzle Design", "System Integration"],
      icon: FaRocket,
      pdfUrl: "/pdfs/lunar-launch-vehicle.pdf"
    },
    {
      title: "Conceptual Lunar PNT Architecture with Northrop Grumman Space Systems (SciTech 2026 Accepted)",
      coverImage: getAssetPath("/images/projects/pnt-cover.jpg"),
      description: "Developed a comprehensive Position, Navigation, and Timing (PNT) architecture for lunar and cis-lunar operations that achieves sub-meter accuracy and continuous South Pole coverage. Designed as a single-launch solution to minimize mission complexity while maintaining robust performance.",
      technologies: ["Orbital Mechanics", "Navigation Systems", "Space Systems Engineering", "STK Modeling"],
      icon: FaRocket
    },
    {
      title: "CFD Analysis of Turbulence Models in Propulsion Nozzles",
      coverImage: getAssetPath("/images/projects/cfd-cover.jpg"),
      description: "Conducted comprehensive analysis of k–ε, k–ω, and k–ω SST turbulence models against NASA DNS data for converging-diverging nozzle flows. Through systematic validation studies, developed best practices for turbulence modeling in propulsion applications.",
      technologies: ["ANSYS CFX", "Turbulence Modeling", "Computational Fluid Dynamics", "Flow Analysis", "DNS Validation"],
      icon: HiChip,
            pdfUrl: getAssetPath("/pdfs/turbulence-models-cfd.pdf")
    }
  ];

  const renderProjects = (projects: Project[], title: string) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-[95%] mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {title.includes("Graduate") ? (
          <FaFlask className="text-accent" />
        ) : (
          <FaCar className="text-accent" />
        )}
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group max-w-[90%] mx-auto"
            >
              <div 
                onClick={() => setExpandedProject(expandedProject === index ? -1 : index)}
                className="cursor-pointer h-full bg-secondary/80 backdrop-blur-sm rounded-lg border border-gray-700/50 relative overflow-hidden transform hover:scale-[1.02] transition-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Cover Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <project.icon className="text-4xl text-white/90" />
                  </div>
                </div>

                {/* Title Bar */}
                <div className="px-4 pt-4 pb-2 flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold pr-8">{project.title}</h3>
                    <motion.div
                      animate={{ rotate: expandedProject === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <FaExpandAlt className="text-accent" />
                    </motion.div>
                  </div>
                  {project.pdfUrl && (
                    <div className="flex justify-end">
                      <a
                        href={project.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-accent hover:text-blue-400 transition-colors p-1 flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1 transform hover:scale-105 transition-all"
                      >
                        <FaFilePdf className="text-xl" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0">
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-gray-300 leading-relaxed mb-4"
                        >
                          {project.description}
                        </motion.p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );

  return (
    <section className="py-5" id="projects">
      {renderProjects(graduateResearch, "Graduate Research")}
      {renderProjects(projectWork, "Project Work and Student Involvement")}
    </section>
  );
}
