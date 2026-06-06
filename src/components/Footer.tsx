export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">
              Muzayyin<span className="text-cyan-400">.</span>
            </p>
            <p className="text-sm text-slate-400">Flutter & Web Developer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {currentYear} Muzayyin Arifin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
