"use client";

import Head from 'next/head';
import Header from '../components/navbar';
import Hero from '../components/hero';
import Services from '../components/services';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import FAQ from '../components/faqs';
import Pricing from '@/components/pricing';


export default function Home() {
  return (
    <>
      <Head>
        <title>Ampe Ai - AI Solutions for Africa</title>
        <meta name="description" content="Ampe Ai builds AI-powered solutions for African businesses." />
      </Head>

      <Header />
      <main className="bg-gradient-to-b from-black to-gray-900 min-h-screen">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
