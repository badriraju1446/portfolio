import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            className="relative inline-block profile-glow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-purple-900/50 shadow-xl object-cover z-10 relative"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card max-w-3xl mx-auto"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Pericharla Badri Raju
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              whileHover={{ scale: 1.02 }}
            >
             • VR Project Designer • Python Developer • Cisco Certified Professional
            </motion.p>

            <motion.a
              href="#projects"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-purple-900 rounded-full hover:bg-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}