import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
        Featured Projects
      </p>

      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Practical tools and product ideas.
          </h2>

          <p className="max-w-2xl leading-relaxed text-slate-400">
            A collection of useful products and applications designed to solve
            daily problems, improve productivity, and support business
            workflows.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/[0.08]"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-cyan-400/10 transition group-hover:bg-cyan-400/20" />

            <div className="relative z-10">
              <span className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                0{index + 1}
              </span>

              <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                View details -&gt;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
