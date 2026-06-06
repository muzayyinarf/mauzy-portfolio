import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="border-y border-white/10 bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
          Skills
        </p>

        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
          Technologies I work with.
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
