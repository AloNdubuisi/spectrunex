"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: wire this up to your form endpoint (e.g. Formspree, Resend, or
    // an API route) — this UI submits nowhere until you connect it.
    setTimeout(() => setStatus("sent"), 600);
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
        <h3 className="font-display text-xl font-bold text-navy-800">
          Thanks — we&apos;ll be in touch shortly.
        </h3>
        <p className="mt-2 text-sm text-navy-500">
          A member of the Spectrunex team will follow up within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-700">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-navy-800 outline-none transition focus:border-steel-500 focus:ring-2 focus:ring-steel-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-700">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-navy-800 outline-none transition focus:border-steel-500 focus:ring-2 focus:ring-steel-100"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="text-sm font-medium text-navy-700">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-navy-800 outline-none transition focus:border-steel-500 focus:ring-2 focus:ring-steel-100"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="service" className="text-sm font-medium text-navy-700">
          What are you looking for?
        </label>
        <select
          id="service"
          name="service"
          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-navy-800 outline-none transition focus:border-steel-500 focus:ring-2 focus:ring-steel-100"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-navy-700">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-navy-800 outline-none transition focus:border-steel-500 focus:ring-2 focus:ring-steel-100"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-steel-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-steel-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
