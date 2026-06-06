"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Skills",
    href: "/#skills",
  },
  {
    label: "Projects",
    href: "/#projects",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight"
          >
            Muzayyin<span className="text-cyan-400">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          >
            <span className="sr-only">Open menu</span>

            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 border-t border-white/10 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/cv/muzayyin-arifin-cv.pdf"
              download
              onClick={closeMenu}
              className="mt-3 block rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
