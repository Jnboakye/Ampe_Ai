// components/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  fetch('https://formspree.io/f/xeoknnyp', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
    .then((res) => {
      if (res.ok) {
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong!');
      }
    })
    .catch(() => alert('Failed to send message.'));
}


  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20 text-white">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Contact Us
      </motion.h2>

      {submitted ? (
        <motion.p
          className="text-center text-green-400 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Thanks for reaching out! We will get back to you shortly.
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex flex-col space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded font-semibold"
          >
            Send Message
          </button>
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
        </motion.form>
      )}
    </section>
  );
}
