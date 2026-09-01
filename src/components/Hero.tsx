// src/components/Hero.tsx
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050B14] text-white py-20 lg:py-28 font-sans">
      {/* Hero background: the Capitol + shield graphic itself, not a separate dark fill.
          It lives in a right-anchored box (not the full section width) so the whole image
          renders — object-contain instead of object-cover, so nothing gets cropped off the
          top of the dome or the edges of the shield — while still sitting over on the right.
          bg-[#050B14] on the section is only the fallback if the image fails to load. */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-4/5 md:w-2/3 lg:w-3/5 xl:w-[56%]">
        <img
          src="./assets/img/hero-image.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-right"
        />
      </div>
      {/* Light left-to-right and bottom-to-top scrims — just enough to guarantee text
          contrast over whatever the image's edge looks like; not the source of the mood. */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/50 via-transparent to-transparent" />

      <div className="container-page relative z-10">
        <div className="max-w-2xl">
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
      </div>
    </section>
  );
}