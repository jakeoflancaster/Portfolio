'use client';

import { motion } from 'framer-motion';
import { RiFlaskLine, RiCrosshairFill, RiRoadsterLine, RiLightbulbFlashLine } from 'react-icons/ri';
import { FaFilePdf } from 'react-icons/fa';
import { getAssetPath } from '@/utils/paths';

export default function Hero() {
  return (
    <section className="py-20 text-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full mb-16"
        >
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { name: 'Graduate Research', href: '#graduate-research' },
              { name: 'Project Work', href: '#project-work' },
              { name: 'Ongoing Projects', href: '#ongoing-projects' },
              { name: 'Education', href: '#education' },
              { name: 'Experience', href: '#experience' },
              { name: 'Publications', href: '#publications' },
              { name: 'About', href: '#about' }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-6 py-2 rounded-full border border-accent/20 bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* Top Section with Images and Name */}
        <div className="w-full flex justify-between items-start mb-16 px-4">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block w-[8.4rem] h-[13.25rem]"
          >
            <div className="w-full h-full overflow-hidden rounded-lg border-2 border-accent/20">
              <img
                src={getAssetPath('/images/hero/engineering-symbol.jpg')}
                alt="Engineering Symbol"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-gray-200">
              Jacob Lancaster
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-4">
              Aerospace & Mechanical Engineering Professional
            </h2>
            <motion.a
              href={getAssetPath('/pdfs/resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 text-accent hover:bg-accent/20 transition-all transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilePdf className="text-lg" />
              <span>Click for Resume/CV</span>
            </motion.a>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block w-[8.4rem] h-[13.25rem]"
          >
            <div className="w-full h-full overflow-hidden rounded-lg border-2 border-accent/20">
              <img
                src={getAssetPath('/images/hero/aerospace-symbol.jpg')}
                alt="Aerospace Symbol"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Emblems */}
        <div className="flex justify-center gap-8 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 group"
          >
            <RiFlaskLine className="text-4xl text-accent mb-2 group-hover:text-blue-400 transition-colors" />
            <p className="text-sm">Aerospace</p>
            <p className="text-xs text-gray-400">Researcher</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 group"
          >
            <RiCrosshairFill className="text-4xl text-accent mb-2 group-hover:text-blue-400 transition-colors" />
            <p className="text-sm">Co-Founder</p>
            <p className="text-xs text-gray-400">Advanced Defense Systems</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 group"
          >
            <RiRoadsterLine className="text-4xl text-accent mb-2 group-hover:text-blue-400 transition-colors" />
            <p className="text-sm">EV/ICE Powertrain</p>
            <p className="text-xs text-gray-400">Designer</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 group"
          >
            <RiLightbulbFlashLine className="text-4xl text-accent mb-2 group-hover:text-blue-400 transition-colors" />
            <p className="text-sm">Cross Domain</p>
            <p className="text-xs text-gray-400">Problem Solver</p>
          </motion.div>
        </div>

        
      </motion.div>
    </section>
  )
}
