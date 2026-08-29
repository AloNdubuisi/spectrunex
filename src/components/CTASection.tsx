import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute -left-32 -bottom-32 h-[420px] w-[420px] rounded-full bg-steel-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative section-y text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to move faster with one accountable partner?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Let&apos;s talk about what you&apos;re building, maintaining, or
          trying to automate — and where Spectrunex fits.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-steel-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-steel-600"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Request a Proposal
          </Link>
        </div>
        <p className="mt-6 text-xs uppercase tracking-wide text-slate-400">
          Free 30-minute consultation · No obligation · Tailored to your needs
        </p>
      </div>
    </section>
  );
}
