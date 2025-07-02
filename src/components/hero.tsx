// components/Hero.js
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-purple-900 via-black to-black min-h-[80vh] flex flex-col justify-center items-center px-6 text-center text-white">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Empowering Africa with AI-driven Solutions
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-3xl mb-8 opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      >
        Ampe Ai builds innovative AI-powered products tailored for businesses and communities across Africa.
      </motion.p>

      <motion.div
        className="flex space-x-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
      >
        <a
          href="#services"
          className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded font-semibold shadow-lg"
        >
          Our Services
        </a>
        <a
          href="#contact"
          className="border border-purple-600 hover:border-purple-700 transition px-8 py-3 rounded font-semibold"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
