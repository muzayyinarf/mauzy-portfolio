import Link from "next/link";
import {
  certifications,
  education,
  experiences,
  resumeSkills,
} from "@/data/resume";

export const metadata = {
  title: "Resume | Muzayyin Arifin",
  description: "Online resume of Muzayyin Arifin, Flutter & Web Developer.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Home
        </Link>

        {/* HEADER */}
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Online Resume
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Muzayyin Arifin
          </h1>

          <p className="mb-4 text-xl text-cyan-300">Flutter & Web Developer</p>

          <p className="mb-8 max-w-3xl leading-relaxed text-slate-300">
            Flutter & Web Developer with a Computer Science background and
            practical experience in Quality Control, business process
            improvement, and building useful digital tools for productivity and
            operational needs.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/cv/muzayyin-arifin-cv.pdf"
              download
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Download CV
            </a>

            <a
              href="mailto:muzayyinarifin46@gmail.com"
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* EXPERIENCE */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>

          <div className="space-y-4">
            {experiences.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-cyan-300">{item.company}</p>
                  </div>

                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>

                <p className="leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">Education</h2>

          <div className="space-y-4">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-bold">{item.major}</h3>
                    <p className="text-cyan-300">{item.school}</p>
                  </div>

                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>

                <p className="leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">Technical Skills</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(resumeSkills).map(([category, skills]) => (
              <div
                key={category}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="mb-4 capitalize text-lg font-bold">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Certifications</h2>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex flex-wrap gap-3">
              {certifications.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
