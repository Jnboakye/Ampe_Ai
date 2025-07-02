// app/blog/page.tsx

import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "How AI is Transforming African Businesses",
    summary:
      "Discover how AI adoption is driving growth, efficiency, and innovation across Africa.",
    slug: "ai-transforming-african-businesses",
    date: "2025-06-30",
  },
  {
    id: 2,
    title: "Top 5 AI Tools for Startups in Africa",
    summary:
      "Explore the most powerful AI tools helping African startups to compete globally.",
    slug: "top-5-ai-tools-startups-africa",
    date: "2025-07-01",
  },
];

export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(({ id, title, summary, slug, date }) => (
          <Link
            key={id}
            href={`/blog/${slug}`}
            className="block p-6 border rounded hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-600 mt-2">{summary}</p>
            <time className="block mt-4 text-sm text-gray-500">{date}</time>
          </Link>
        ))}
      </div>
    </main>
  );
}
