// src/components/ReadyToMeetYouSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* Replicates the reference's "Ready to meet you where you are." module: an
   accent tick + two-line headline, a pill-shaped audience switcher
   (Executives / Specialists / Partners / Customers), a 2-up + 1-wide card
   grid for the active audience, a decorative dot-grid corner accent, and a
   separate newsletter signup strip below with its own background texture.

   Two trademark/claim swaps here, on top of the usual gold→blue recolor:

   1. Card 1's subtitle in the reference is a third-party vendor's OS
      product name. Reworded to a Spectrunex equivalent, "Spectrunex OS 12.1."
   2. Card 2's body in the reference name-drops a third-party vendor's
      incident-response brand. Reworded to "our Incident Response team."

   Also: the newsletter strip's fine print in the reference points at
   another company's own privacy policy and terms. That's a legal
   reference to their documents, not a design element — changed to
   "Spectrunex Privacy Statement and Terms of Use" since this is
   Spectrunex's site and Spectrunex's form.

   Only the Executives tab has real card copy, matching your screenshots.
   Specialists / Partners / Customers are stubbed with placeholder content,
   consistent with how other multi-tab sections in this project (e.g. the
   Outcomes switcher) only had confirmed copy for one state — fill the rest
   in once you have audience-specific content for them. All three card
   images are named placeholders under ./assets/img/ as requested. */

type AudienceId = "executives" | "specialists" | "partners" | "customers";

const audiences: { id: AudienceId; label: string }[] = [
  { id: "executives", label: "Executives" },
  { id: "specialists", label: "Specialists" },
  { id: "partners", label: "Partners" },
  { id: "customers", label: "Customers" },
];

type AudienceCard = {
  id: string;
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  wide?: boolean;
};

const executiveCards: AudienceCard[] = [
  {
    id: "quantum-safe",
    image: "./assets/img/ready-executives-1.webp",
    alt: "Abstract dark network visualization",
    eyebrow: "Spectrunex OS 12.1",
    title: "Quantum-safe. AI-driven. Every cloud.",
    body: "The next release of our platform's operating system brings post-quantum cryptography and AI-native protections to every deployment, everywhere.",
    ctaLabel: "Explore",
    ctaHref: "/platform",
  },
  {
    id: "under-attack",
    image: "./assets/img/ready-executives-2.webp",
    alt: "Security operations professional at a workstation",
    title: "Under Attack? We're Here.",
    body: "If you suspect a breach, our Incident Response team is available around the clock to help you contain, investigate, and recover.",
    ctaLabel: "Our experts are standing by",
    ctaHref: "/contact",
  },
  {
    id: "briefing-center",
    image: "./assets/img/ready-executives-3.webp",
    alt: "Executives in a briefing room discussion",
    title: "Executive Briefing Center",
    body: "Sit down with our specialists for a tailored session on the threat landscape, your architecture, and where Spectrunex fits into your roadmap.",
    ctaLabel: "Plan a collaborative discussion",
    ctaHref: "/contact",
    wide: true,
  },
];

/* Specialists / Partners / Customers didn't have confirmed copy from your
   screenshots (only Executives did), but per your request they now mirror
   the exact same 3-card layout as Executives — two regular cards in the
   top row, one wide card spanning both columns underneath — just with
   placeholder text and placeholder image paths so you can drop in real
   copy and photos later without touching the layout. */
function buildPlaceholderCards(audience: string): AudienceCard[] {
  return [
    {
      id: `${audience}-placeholder-1`,
      image: `./assets/img/practitioners-1.jpg`,
      alt: "Placeholder image",
      eyebrow: "[Placeholder Eyebrow]",
      title: `[Placeholder headline 1 for ${audience}]`,
      body: `[Add real copy for the ${audience} audience, card 1, once available.]`,
      ctaLabel: "Learn more",
      ctaHref: "/contact",
    },
    {
      id: `${audience}-placeholder-2`,
      image: `./assets/img/practitioners-2.jpg`,
      alt: "Placeholder image",
      title: `[Placeholder headline 2 for ${audience}]`,
      body: `[Add real copy for the ${audience} audience, card 2, once available.]`,
      ctaLabel: "Learn more",
      ctaHref: "/contact",
    },
    {
      id: `${audience}-placeholder-3`,
      image: `./assets/img/practitioners-3.webp`,
      alt: "Placeholder image",
      title: `[Placeholder headline 3 for ${audience}]`,
      body: `[Add real copy for the ${audience} audience, card 3, once available.]`,
      ctaLabel: "Learn more",
      ctaHref: "/contact",
      wide: true,
    },
  ];
}

const placeholderCards: Record<Exclude<AudienceId, "executives">, AudienceCard[]> = {
  specialists: buildPlaceholderCards("specialists"),
  partners: buildPlaceholderCards("partners"),
  customers: buildPlaceholderCards("customers"),
};

function CardRow({ card }: { card: AudienceCard }) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E14] sm:flex-row ${
        card.wide ? "sm:col-span-2" : ""
      }`}
    >
      <div className="h-44 w-full shrink-0 sm:h-auto sm:w-56">
        <img src={card.image} alt={card.alt} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3 p-7">
        {card.eyebrow && (
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            {card.eyebrow}
          </span>
        )}
        <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300">{card.body}</p>
        <Link
          href={card.ctaHref}
          className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
        >
          {card.ctaLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ReadyToMeetYouSection() {
  const [active, setActive] = useState<AudienceId>("executives");
  const cards = active === "executives" ? executiveCards : placeholderCards[active];

  return (
    <>
      {/* Main audience module */}
      <section className="relative overflow-hidden bg-[#070A0F] py-24 text-white font-sans lg:py-28">
        {/* Decorative dot-grid corner accent */}
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(96,165,250,0.35) 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
          aria-hidden="true"
        />

        <div className="container-page relative z-10">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="w-16 border-t-2 border-blue-400" />
            <h2 className="mt-8 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">Ready to meet you</span>
              <br />
              <span className="text-blue-400">where you are.</span>
            </h2>
          </ScrollReveal>

          {/* Pill segmented control */}
          <ScrollReveal speed="fast" animation="fade-up" delay={0.1} className="mt-12">
            <div className="inline-flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1.5">
              {audiences.map((a) => {
                const isActive = a.id === active;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setActive(a.id)}
                    aria-pressed={isActive}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                      isActive
                        ? "bg-white text-[#070A0F]"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {a.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {cards.map((card) => (
                <CardRow key={card.id} card={card} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter signup strip — distinct background texture (vertical bars) */}
      <section
        className="relative overflow-hidden bg-[#03050A] py-20 text-white font-sans lg:py-24"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 64px)",
        }}
      >
        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal speed="fast" animation="fade-up">
              <h3 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Get the latest news, invites to events, and threat alerts
              </h3>
            </ScrollReveal>

            <ScrollReveal speed="fast" animation="fade-up" delay={0.1}>
              <form className="flex flex-col gap-4">
                <div className="flex items-end gap-4 border-b border-white/25 pb-3 focus-within:border-blue-400">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email now to subscribe!"
                    className="w-full bg-transparent text-base text-white placeholder:text-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex shrink-0 items-center gap-2 rounded-full bg-blue-500 px-6 py-2.5 text-sm font-bold text-[#050B14] transition hover:bg-blue-400"
                  >
                    Sign up <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  By submitting this form, I understand my personal data will
                  be processed in accordance with the{" "}
                  <Link href="/privacy" className="underline hover:text-slate-300">
                    Spectrunex Privacy Statement and Terms of Use
                  </Link>
                  .
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}