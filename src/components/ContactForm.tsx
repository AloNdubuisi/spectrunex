"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { flagshipPlatforms } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 600);
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-pan-dark-border bg-[#0F141E] p-8 sm:p-12 shadow-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white">
          Security Request Received
        </h3>
        <p className="mt-3 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          A Spectrunex cybersecurity solutions architect will contact you within one business day with technical scoping and demo materials.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-pan-dark-border bg-[#0F141E] p-8 sm:p-10 shadow-2xl space-y-5 font-sans"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pan-orange mb-2">
        <ShieldCheck className="h-4 w-4" />
        <span>Enterprise Scoping &amp; Demo Request</span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="mt-1.5 w-full rounded-xl border border-pan-dark-border bg-[#090D14] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-pan-orange focus:ring-1 focus:ring-pan-orange"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className="mt-1.5 w-full rounded-xl border border-pan-dark-border bg-[#090D14] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-pan-orange focus:ring-1 focus:ring-pan-orange"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Organization / Company *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Acme Enterprise"
            className="mt-1.5 w-full rounded-xl border border-pan-dark-border bg-[#090D14] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-pan-orange focus:ring-1 focus:ring-pan-orange"
          />
        </div>
        <div>
          <label htmlFor="platform" className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Primary Area of Interest
          </label>
          <select
            id="platform"
            name="platform"
            className="mt-1.5 w-full rounded-xl border border-pan-dark-border bg-[#090D14] px-4 py-3 text-sm text-white outline-none transition focus:border-pan-orange focus:ring-1 focus:ring-pan-orange"
            defaultValue="all"
          >
            <option value="all">Complete Cybersecurity Platform (Strata + Prisma + Cortex)</option>
            <option value="strata">Strata™ Next-Gen Firewalls &amp; SASE</option>
            <option value="prisma">Prisma® Cloud &amp; AI Security (AIRS)</option>
            <option value="cortex">Cortex® XSIAM Autonomous SOC</option>
            <option value="unit42">Unit 42® Incident Response / Retainer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-300">
          Project Details / Security Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your current infrastructure, cloud environment, or upcoming compliance initiatives..."
          className="mt-1.5 w-full rounded-xl border border-pan-dark-border bg-[#090D14] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-pan-orange focus:ring-1 focus:ring-pan-orange"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pan-orange hover:bg-pan-orange-hover px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xl shadow-pan-orange/25 hover:shadow-pan-orange/40 disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {status === "submitting" ? "Processing..." : "Submit Technical Request"}
      </button>
    </form>
  );
}
