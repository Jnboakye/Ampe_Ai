// components/About.tsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 text-white">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        About Ampe Ai
      </motion.h2>
      <motion.p
        className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      >
        At Ampe Ai, we are dedicated to empowering African businesses through innovative AI-driven
        solutions. Our mission is to bridge the technology gap by providing tailored products and
        services that drive growth, efficiency, and digital transformation. We believe AI can
        revolutionize industries across the continent, creating lasting impact and opportunity.
      </motion.p>
    </section>
  );
}
