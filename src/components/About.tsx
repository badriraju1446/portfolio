import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a passionate developer and VR enthusiast with expertise in Python, 3D modeling with Blender, and VR development using Unity (C#). Holding a Cisco certification in Python, I specialize in building immersive learning experiences using VR technology. My goal is to bridge the gap between education and technology by creating interactive 3D models and training simulations. With a strong focus on UI/UX design, I strive to develop engaging and user-friendly applications that enhance learning and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}