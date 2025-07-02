// components/Services.tsx
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI tools that solve your unique business challenges.',
    icon: (
      <svg
        className="w-12 h-12 text-purple-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6M9 8h6M12 20v-8" />
      </svg>
    ),
  },
  {
    title: 'Data Analytics',
    description: 'Insights and data-driven strategies to grow your business.',
    icon: (
      <svg
        className="w-12 h-12 text-purple-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-4-4m0 0l4-4m-4 4h14" />
      </svg>
    ),
  },
  {
    title: 'Automation',
    description: 'Streamline your workflows and save time with smart automation.',
    icon: (
      <svg
        className="w-12 h-12 text-purple-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20 text-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map(({ title, description, icon }, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 bg-opacity-40 rounded-lg p-8 text-center shadow-lg hover:shadow-purple-500 transition-shadow cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
