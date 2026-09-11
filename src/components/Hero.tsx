// src/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* Horizontal crop of the hero photograph.
   The focal content of hero-banner.jpg — the glowing logo and the woman with
   the tablet — sits in the right third of the source (roughly 68% and 78%
   across); the left half is dark cityscape that the text scrim covers anyway.
   Because the image overflows its box horizontally, this value pans the crop
   window: RAISE it to move the subject further LEFT / toward centre, LOWER it
   to move the subject back toward the right edge. */
const HERO_FOCUS_X = "88%";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050B14] text-white py-20 lg:py-28 font-sans">
      {/* Hero background: a full-bleed photograph, cropped (object-cover) rather than
          contained — this is a photographic scene, not a discrete graphic like the old
          Capitol/shield asset, so cropping its edges to fill the frame is the normal,
          expected treatment (exactly how the reference site itself uses it). It's still
          confined to a right-hand box so the left stays clear for text; see HERO_FOCUS_X
          above for how the crop is panned to keep the subject off the right edge.
          bg-[#050B14] on the section is only the fallback if it fails to load. */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-[95%] md:w-[90%] lg:w-[84%] xl:w-[80%]">
        <Image
          src="/assets/img/hero-banner.jpg"
          alt=""
          aria-hidden="true"
          fill
          /* This is the LCP element, so it is fetched at high priority rather
             than lazily. `sizes` lets Next generate a right-sized AVIF/WebP
             per breakpoint instead of shipping the full-width original. */
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
          className="object-cover"
          style={{ objectPosition: `${HERO_FOCUS_X} center` }}
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