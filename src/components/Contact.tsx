import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Youtube, Phone } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-6"
            >
              <div className="flex items-center justify-center md:justify-end space-x-4">
                <Mail className="text-purple-400" size={24} />
                <a href="mailto:contact@example.com" className="hover:text-purple-400 transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-4">
                <Phone className="text-purple-400" size={24} />
                <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex justify-center md:justify-start space-x-6"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-900/30 rounded-full hover:bg-purple-900/50 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-900/30 rounded-full hover:bg-purple-900/50 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}