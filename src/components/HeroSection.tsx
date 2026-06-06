const highlights = [
  "Flutter",
  "React",
  "Next.js",
  "TypeScript",
  "Business Apps",
];

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        Available for web & mobile development opportunities
      </div>

      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
        Flutter & Web Developer
      </p>

      <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
        Hi, I&apos;m Muzayyin Arifin.
        <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          I build practical digital products.
        </span>
      </h1>

      <p className="mb-4 max-w-2xl text-lg leading-relaxed text-slate-300">
        I build practical mobile apps, web tools, and business solutions using
        Flutter, React, Next.js, and modern web technologies.
      </p>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-400">
        Saya membangun aplikasi mobile, website, dan tools digital praktis untuk
        membantu produktivitas, pekerjaan, dan kebutuhan bisnis.
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        {highlights.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
        >
          View Projects
        </a>

        <a
          href="/blog"
          className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          Read Blog
        </a>

        <a
          href="#contact"
          className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          Contact Me
        </a>
        <a
          href="/resume"
          className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
