import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog | Muzayyin Arifin",
  description:
    "Learning notes and articles about web development, Flutter, portfolio building, and career preparation.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Home
        </Link>

        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Blog / Learning Notes
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            My learning journey.
          </h1>

          <p className="max-w-3xl leading-relaxed text-slate-300">
            Catatan belajar tentang web development, Flutter, portfolio,
            project, dan persiapan karier sebagai developer.
          </p>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.08]"
            >
              <div className="mb-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-300">
                  {post.category}
                </span>

                <span className="text-slate-400">{post.date}</span>
                <span className="text-slate-400">{post.readingTime}</span>
              </div>

              <h2 className="mb-3 text-2xl font-bold">{post.title}</h2>

              <p className="mb-5 leading-relaxed text-slate-300">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
