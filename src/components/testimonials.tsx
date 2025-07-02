import { motion, easeOut } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Kwame Nkrumah",
    role: "CEO, AfricanTech",
    message:
      "Ampe Ai transformed our business operations with their AI-powered solutions. Truly a game changer!",
  },
  {
    id: 2,
    name: "Amina Diallo",
    role: "Founder, GreenEnergy Africa",
    message:
      "The automation tools from Ampe Ai saved us countless hours and improved our customer satisfaction.",
  },
  {
    id: 3,
    name: "Samuel Mensah",
    role: "CTO, FinServe Ghana",
    message:
      "Professional, reliable, and innovative – Ampe Ai is the partner every African business needs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
      <motion.div
        className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map(({ id, name, role, message }) => (
          <motion.div
            key={id}
            className="p-6 border rounded shadow bg-white hover:shadow-lg transition"
            variants={itemVariants}
          >
            <p className="mb-4 italic">"{message}"</p>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
