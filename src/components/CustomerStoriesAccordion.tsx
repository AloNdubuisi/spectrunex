// src/components/CustomerStoriesAccordion.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, Minus, Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    id: "apex-defense",
    company: "Apex Defense Systems",
    intro:
      "Accelerated CMMC Level 2 readiness and automated continuous compliance monitoring across distributed contractor networks.",
    quote:
      "Spectrunex transformed our compliance posture, reducing audit preparation timelines by over 60% while strengthening our overall security perimeter against advanced threat vectors.",
    attribution: "— Chief Information Security Officer, Apex Defense Systems",
    image: "/assets/img/customer-story-1.jpg",
    alt: "Abstract blue network visualization",
  },
  {
    id: "meridian-financial",
    company: "Meridian Financial Group",
    intro:
      "Integrated autonomous threat triage and automated workflow security to eliminate manual bottlenecks in the enterprise SOC.",
    quote:
      "We’ve cut our mean time to remediation (MTTR) dramatically. The platform handles alert noise reduction effortlessly, allowing our core analysts to focus strictly on active, high-priority investigations.",
    attribution: "— VP of Global Security Operations, Meridian Financial Group",
    image: "/assets/img/customer-story-2.jpg",
    alt: "Abstract blue network visualization",
  },
  {
    id: "horizon-cloud",
    company: "Horizon Cloud Logistics",
    intro:
      "Unified code-to-cloud security and Zero Trust network access across hybrid multi-cloud infrastructure.",
    quote:
      "Platformization with Spectrunex gave us total visibility from code repositories to runtime production environments without introducing friction or slowing down developer velocity.",
    attribution: "— Director of Cloud Architecture, Horizon Cloud Logistics",
    image: "/assets/img/customer-story-3.webp",
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
              href="/contact"
              className="inline-flex shrink-0 items-center border-b-2 border-blue-600 pb-1 text-sm font-bold text-slate-900 transition hover:text-blue-600"
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
                  className="flex w-full items-center gap-6 py-8 text-left transition-colors hover:bg-slate-50/50 px-2 rounded-xl"
                >
                  <span className="w-8 shrink-0 text-sm font-semibold text-slate-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-1 items-center gap-3">
                    <Building2 className="h-6 w-6 shrink-0 text-blue-600" strokeWidth={1.5} />
                    <span className="text-base font-bold text-slate-800 sm:text-lg">
                      {story.company}
                    </span>
                  </span>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isOpen ? "border-blue-600 text-blue-600 bg-blue-50" : "border-slate-300 text-slate-400"
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
                      <div className="grid grid-cols-1 gap-10 pb-12 pt-4 px-2 lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                          <p className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                            {story.intro}
                          </p>
                          <blockquote className="mt-6 font-serif text-lg italic leading-relaxed text-slate-700 sm:text-xl border-l-4 border-blue-600 pl-4 py-1">
                            &ldquo;{story.quote}&rdquo;
                          </blockquote>
                          <p className="mt-4 text-sm font-semibold text-slate-600">{story.attribution}</p>
                          <Link
                            href={`/customers/${story.id}`}
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-blue-700 shadow-md shadow-blue-600/20"
                          >
                            Read the full case study <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                          <img
                            src={story.image}
                            alt={story.alt}
                            className="h-full w-full object-cover aspect-video hover:scale-105 transition duration-500"
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