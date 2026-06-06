export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
        About Me
      </p>

      <h2 className="mb-6 text-3xl font-bold md:text-4xl">
        Developer with practical business experience.
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <p className="leading-relaxed text-slate-300">
          I am a Flutter & Web Developer with a background in Quality Control
          and business process improvement. I enjoy building simple, practical,
          and useful applications that solve real problems.
        </p>

        <p className="leading-relaxed text-slate-300">
          Saya memiliki pengalaman di dunia Quality Control dan tertarik
          membangun aplikasi yang membantu pekerjaan menjadi lebih rapi, cepat,
          dan mudah digunakan oleh banyak orang.
        </p>
      </div>
    </section>
  );
}
