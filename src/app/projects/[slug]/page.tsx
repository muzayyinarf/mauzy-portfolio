import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/portfolio";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Muzayyin Arifin`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <Link
          href="/#projects"
          className="mb-10 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          &lt;- Back to Projects
        </Link>

        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Project Detail
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>

          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            {project.overview}
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              {project.status}
            </span>

            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="mb-4 text-2xl font-bold">Problem</h2>
            <p className="leading-relaxed text-slate-300">{project.problem}</p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="mb-4 text-2xl font-bold">Solution</h2>
            <p className="leading-relaxed text-slate-300">
              {project.solution}
            </p>
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="mb-6 text-2xl font-bold">Key Features</h2>

          <div className="grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-slate-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="mb-6 text-2xl font-bold">Links</h2>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.demoUrl}
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub Repository
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
