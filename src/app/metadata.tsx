// app/metadata.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ampe Ai – AI Solutions for African Businesses",
  description:
    "Ampe Ai builds digital products and AI-powered solutions tailored for African businesses. Boost your operations with automation, AI, and strategy.",
  metadataBase: new URL("https://ampeai.com"), // Change this to your real domain
  openGraph: {
    title: "Ampe Ai – AI Solutions for African Businesses",
    description:
      "Boost your business with AI automation and digital tools made for Africa.",
    url: "https://ampeai.com",
    siteName: "Ampe Ai",
    images: [
      {
        url: "/og-image.png", // You can upload this to /public
        width: 1200,
        height: 630,
        alt: "Ampe Ai social card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ampe Ai – AI for African Businesses",
    description:
      "Boost your operations with AI and digital transformation.",
    images: ["/og-image.png"],
  },
};
