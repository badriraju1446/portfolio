import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projectImages = [
  'https://i.postimg.cc/mgbrdQdg/Whats-App-Image-2025-03-07-at-18-57-41-9889ed18.jpg',
  'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80',
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
          <p className="text-gray-400">VR Training Simulation Platform</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <img
              src={projectImages[currentImage]}
              alt="Project preview"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Interactive VR Training Platform</h3>
            <p className="text-gray-300">
              A comprehensive VR training platform designed for educational institutions,
              featuring interactive 3D models and real-time feedback systems. Built with
              Unity and C#, this platform revolutionizes the way students learn complex
              concepts through immersive experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">Unity</span>
              <span className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">C#</span>
              <span className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">Blender</span>
              <span className="px-3 py-1 bg-purple-900/30 rounded-full text-sm">VR</span>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setShowModal(false)}
            >
              <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                  className="absolute -top-12 right-0 text-white"
                  onClick={() => setShowModal(false)}
                >
                  <X size={24} />
                </button>
                <div className="relative aspect-video">
                  <img
                    src={projectImages[currentImage]}
                    alt="Project preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    onClick={prevImage}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={nextImage}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}