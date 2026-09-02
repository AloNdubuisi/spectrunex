// src/components/Hero.tsx
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050B14] text-white py-20 lg:py-28 font-sans">
      {/* Hero background: a full-bleed photograph, cropped (object-cover) rather than
          contained — this is a photographic scene, not a discrete graphic like the old
          Capitol/shield asset, so cropping its edges to fill the frame is the normal,
          expected treatment (exactly how the reference site itself uses it). It's still
          confined to a right-hand box so the left stays clear for text, and object-position
          is biased right-of-center so the subject and the light-beam graphic stay in frame
          at every width. bg-[#050B14] on the section is only the fallback if it fails to load. */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-[92%] md:w-[85%] lg:w-[78%] xl:w-[72%]">
        <img
          src="./assets/img/hero-banner.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ objectPosition: "65% center" }}
        />
      </div>
      {/* Light left-to-right and bottom-to-top scrims — just enough to guarantee text
          contrast over whatever the image's edge looks like; not the source of the mood. */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/60 to-transparent" />
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

            {/* CTA row, matching the reference's pattern exactly: one solid pill button,
                one plain underlined text link beside it — not two boxed buttons. */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/25"
              >
                Book a Consultation <span className="text-base leading-none">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-white underline underline-offset-4 decoration-white/70 transition hover:text-blue-300 hover:decoration-blue-300"
              >
                Get a Readiness Snapshot
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}