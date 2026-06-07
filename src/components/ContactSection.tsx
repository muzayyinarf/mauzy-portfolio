import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 bg-slate-900/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mb-6 leading-relaxed text-slate-300">
            Available for fullstack, frontend, Flutter, and web development
            opportunities. I am open to remote work, freelance projects, and
            professional collaboration.
          </p>

          <p className="mb-8 leading-relaxed text-slate-400">
            Tertarik untuk berdiskusi tentang website, aplikasi mobile, tools
            bisnis, atau peluang kerja? Silakan hubungi saya melalui form ini.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:muzayyinarf@gmail.com"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="/cv/muzayyin-arifin-cv.pdf"
              download
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Download CV
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
