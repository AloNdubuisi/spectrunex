import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-steel-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative section-y">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-steel-400/30 bg-steel-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-steel-200">
            Construction · Cleaning · Software · Mobile · AI Automation
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build. Maintain.
            <br />
            <span className="text-steel-300">Automate.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Spectrunex brings construction, commercial cleaning, custom
            software, mobile apps, and AI automation together under one
            partner — so you stop coordinating five vendors to get one job
            done.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-steel-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-steel-600"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
