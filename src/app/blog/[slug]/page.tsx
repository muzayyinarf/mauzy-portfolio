import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Muzayyin Arifin`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/blog"
          className="mb-10 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Blog
        </Link>

        <header className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <div className="mb-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-300">
              {post.category}
            </span>

            <span className="text-slate-400">{post.date}</span>
            <span className="text-slate-400">{post.readingTime}</span>
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>

          <p className="leading-relaxed text-slate-300">{post.excerpt}</p>
        </header>

        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="leading-8 text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
