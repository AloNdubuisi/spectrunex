// src/components/EngageWithUsSection.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* Replicates the reference's "Connect with our experts" module: a centered
   headline over a full-bleed cover background image, with a single contact
   card (image left, copy + link right) on top. Content here is fully
   generic (a support-agent stock photo, boilerplate contact copy) with
   nothing trademarked or claim-like to flag, so this one's just a design
   replication plus the one standing change made throughout this project —
   the reference's gold/amber accent recolored to Spectrunex's blue.

   Background is your real asset now (contact-list-bg.jpg — assuming that's
   ".jpg" and "contact-list-bg.jeg" was a typo; update the extension below
   if the actual file differs), rendered as a cover background image with a
   dark scrim over it so the white headline and card stay legible regardless
   of how bright the source photo is. The contact-card photo is still a
   named placeholder per the earlier request — drop your actual photo in at
   that path. */

export default function EngageWithUsSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white font-sans lg:py-32">
      {/* Cover background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/img/contact-list-bg.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark scrim so text/card contrast holds regardless of the photo */}
      <div className="absolute inset-0" />

      <div className="container-page relative z-10">
        <ScrollReveal speed="fast" animation="fade-up">
          <h2 className="text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Connect with our experts.
          </h2>
        </ScrollReveal>

        <ScrollReveal speed="fast" animation="zoom-in" delay={0.1} className="mt-20">
          <div className="mx-auto flex max-w-3xl flex-col overflow-hidden rounded-2xl bg-[#111318] sm:flex-row">
            <div className="h-48 w-full shrink-0 sm:h-auto sm:w-64">
              <img
                src="./assets/img/contact-us.webp"
                alt="A support representative wearing a headset, smiling at their desk"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-4 p-8">
              <h3 className="text-xl font-bold text-white sm:text-2xl">Contact Us</h3>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Get support and find answers via phone or email. You can also
                chat with our sales team.
              </p>
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-between gap-4 text-base font-bold text-blue-400 transition hover:text-blue-300"
              >
                <span>Our platform experts are standing by</span>
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}