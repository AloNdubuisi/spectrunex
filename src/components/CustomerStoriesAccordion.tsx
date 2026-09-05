// src/components/CustomerStoriesAccordion.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, Minus, Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* Replicates the reference's customer-stories accordion: numbered rows that
   expand into a two-column quote + image panel, one open at a time.

   This one needed more than a wording swap. The reference doesn't just use
   generic "case study" copy — it names three specific real organizations
   (a biopharma company, a film distributor, a university) and attributes a
   detailed first-person quote, with a full name and job title, to someone
   at one of them. Reworking the company names but keeping an invented
   quote in a real-sounding person's voice would still be a fabricated
   testimonial presented as genuine, which isn't something to carry over
   at all — real customer logos with real names were already the standing
   line in this project (CustomerLogosSection, etc.), but a person's name
   and words attached to it crosses into fabricated-endorsement territory
   specifically. So both the company names AND the quote/attribution below
   are explicit bracketed placeholders instructing you to drop in a real,
   permissioned customer quote — not reworded stand-ins meant to read as
   genuine.

   Also as elsewhere: "Precision AI" (Palo Alto's product name) is
   reworded to generic "AI-powered," and the gold/amber accent is
   Spectrunex's blue instead, for the same single-hue-brand reason as
   every other section on this site. */

type CustomerStory = {
  id: string;
  company: string;
  intro: string;
  quote: string;
  attribution: string;
  image: string;
  alt: string;
};

const stories: CustomerStory[] = [
  {
    id: "healthcare",
    company: "Healthcare Client",
    intro:
      "We built a network and security infrastructure for this organization from the ground up to maximize resources and reduce risk.",
    quote:
      "[Placeholder — replace with a real, permissioned quote from an actual customer.]",
    attribution: "— [Name], [Title], [Company]",
    image: "./assets/img/customer-story-1.jpg",
    alt: "Abstract blue network visualization",
  },
  {
    id: "media",
    company: "Media & Entertainment Client",
    intro:
      "We modernized network security across this organization's production and distribution operations.",
    quote:
      "[Placeholder — replace with a real, permissioned quote from an actual customer.]",
    attribution: "— [Name], [Title], [Company]",
    image: "./assets/img/customer-story-2.jpg",
    alt: "Abstract blue network visualization",
  },
  {
    id: "education",
    company: "Higher Education Client",
    intro:
      "We helped this institution secure a sprawling, multi-campus network without slowing down research and teaching.",
    quote:
      "[Placeholder — replace with a real, permissioned quote from an actual customer.]",
    attribution: "— [Name], [Title], [Company]",
    image: "./assets/img/customer-story-3.webp",
    alt: "Abstract blue network visualization",
  },
];

export default function CustomerStoriesAccordion() {
  const [openId, setOpenId] = useState<string | null>(stories[0].id);

  return (
    <section className="bg-white py-20 text-slate-900 font-sans lg:py-28">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              See how customers are putting our AI-powered platform to work.
            </h2>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center border-b-2 border-blue-400 pb-1 text-sm font-bold text-slate-900 transition hover:text-blue-600"
            >
              See all customer stories
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-14 border-t border-slate-200">
          {stories.map((story, idx) => {
            const isOpen = story.id === openId;
            return (
              <div key={story.id} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : story.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-6 py-8 text-left"
                >
                  <span className="w-8 shrink-0 text-sm font-semibold text-slate-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-1 items-center gap-3">
                    <Building2 className="h-6 w-6 shrink-0 text-slate-400" strokeWidth={1.5} />
                    <span className="text-base font-semibold text-slate-500 sm:text-lg">
                      {story.company}
                    </span>
                  </span>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isOpen ? "border-blue-400 text-blue-500" : "border-slate-300 text-slate-400"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-10 pb-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                          <p className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                            {story.intro}
                          </p>
                          <blockquote className="mt-8 font-serif text-xl italic leading-relaxed text-slate-800 sm:text-2xl">
                            &ldquo;{story.quote}&rdquo;
                          </blockquote>
                          <p className="mt-4 text-sm text-slate-500">{story.attribution}</p>
                          <Link
                            href="/customers"
                            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-blue-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-blue-50"
                          >
                            Read the full story <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                        <div>
                          <img
                            src={story.image}
                            alt={story.alt}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}