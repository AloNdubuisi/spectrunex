// src/components/Hero.tsx
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050B14] text-white py-20 lg:py-28 font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-page relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Description & CTAs */}
        <div className="lg:col-span-7">
          <ScrollReveal speed="fast" animation="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-display">
              Innovate. Protect. Prosper. <br />
              <span className="text-blue-500">Secure.</span> Compliant. <br />
              Ready to Scale.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Spectrunex helps organizations achieve FedRAMP<sup>®</sup>, DoD DISA PA, CMMC, and other federal and state compliance—while delivering enterprise-grade cybersecurity, expert staffing, and targeted training to build modern, high-performing systems.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/25"
              >
                Book a Consultation <span className="text-base leading-none">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Get a Readiness Snapshot <span className="text-base leading-none">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Local Image Display */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <ScrollReveal speed="normal" animation="zoom-in" className="w-full">
            <div className="relative w-full max-w-[500px] mx-auto h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border border-blue-500/10 shadow-[0_0_60px_rgba(37,99,235,0.05)] bg-[#0B1324]">
              <img
                src="/assets/img/hero-image.png"
                alt="Spectrunex Secure Capitol & Shield"
                className="w-full h-full object-cover object-center opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}