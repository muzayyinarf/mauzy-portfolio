"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:muzayyinarf@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
    >
      <div className="mb-5">
        <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
      >
        Send Message
      </button>
    </form>
  );
}
