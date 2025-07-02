import { motion, easeOut } from "framer-motion";

const faqs = [
  {
    question: "What kind of AI solutions does Ampe Ai offer?",
    answer:
      "We provide custom AI-powered automation, chatbots, analytics tools, and digital transformation consulting tailored for African businesses.",
  },
  {
    question: "Do I need technical knowledge to use your products?",
    answer:
      "No! Our solutions are designed to be user-friendly, and we offer full support to help you get started without technical skills.",
  },
  {
    question: "Can I customize the solutions for my specific business needs?",
    answer:
      "Absolutely! We work closely with you to tailor our AI products so they fit your unique operational goals.",
  },
  {
    question: "How can I get support if I face issues?",
    answer:
      "You can reach out via our Contact Us page or email support@ampeai.com, and our team will assist you promptly.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function FAQ() {
  return (
    <section id="faq" className="py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {faqs.map(({ question, answer }, i) => (
          <motion.details
            key={i}
            className="p-4 border rounded cursor-pointer"
            variants={itemVariants}
          >
            <summary className="font-semibold cursor-pointer">{question}</summary>
            <p className="mt-2 text-gray-700">{answer}</p>
          </motion.details>
        ))}
      </motion.div>
    </section>
  );
}
