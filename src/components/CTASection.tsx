// src/components/CTASection.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-20 bg-white text-slate-900 font-sans border-t border-slate-200 overflow-hidden">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Branding Box */}
        <div className="lg:col-span-5">
          <ScrollReveal speed="normal" animation="slide-left">
            <div className="rounded-2xl bg-[#050B14] p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
              <h2 className="relative z-10 text-2xl sm:text-3xl font-black font-display leading-snug">
                We Craft Elegant Solutions with Powerful Technology
              </h2>
              <div className="mt-8 h-1 w-12 bg-blue-500 rounded-full" />
            </div>
          </ScrollReveal>
        </div>

        {/* Right CTA Content */}
        <div className="lg:col-span-7">
          <ScrollReveal speed="normal" animation="fade-up">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                Ready to Move Faster with Less Risk?
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Let&apos;s discuss how Spectrunex can accelerate your compliance journey and strengthen your security posture.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                >
                  Book a Consultation <span className="text-base leading-none">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Request a Proposal <span className="text-base leading-none">→</span>
                </Link>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Free 30-minute consultation • No obligation • Tailored to your needs
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}