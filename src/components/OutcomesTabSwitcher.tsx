// src/components/OutcomesTabSwitcher.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, SlidersHorizontal, ShieldAlert, Layers, Merge } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* Replicates the reference site's "Outcomes" module: a static kicker +
   headline, a row of text tabs with an underline indicator, a single large
   photo that crossfades per tab with a few narrow "peeking" slivers of the
   other tab photos stacked to its right (the layered card-stack treatment),
   and a caption row with an icon beneath.

   Two things were deliberately changed from the reference rather than
   copied 1:1:

   1. Headline — the reference reads "Precision AI powered platform,
      securing your entire network." "Precision AI®" is Palo Alto Networks'
      own registered product name for their detection engine, not a generic
      phrase — claiming Spectrunex has "Precision AI" would be using a real
      competitor's trademark as if it were Spectrunex's own feature, same
      class of issue as the Strata™/Cortex®/Unit 42® names flagged
      elsewhere in this project. Reworded to the generic "AI-powered"
      framing already used across the rest of this site.

   2. Photos — the four images from the reference screenshots (the glass
      office building, the person with glasses reflecting code, the tighter
      building crop, the server-row corridor) are the reference site's own
      photography/licensed stock. Re-hosting screenshots pulled directly
      off a competitor's live site — the same issue flagged for their
      background video — isn't something to carry over even though the
      *layout* and *effect* are fair to replicate. The paths below are
      named placeholders describing the scene each slot wants; drop in your
      own licensed or stock equivalent (a similar office/glass-building
      shot, a security-analyst-at-a-monitor shot, a data-center-corridor
      shot) at each path and the switcher works as-is. */

type OutcomeTab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  caption: string;
  image: string;
  alt: string;
};

const outcomeTabs: OutcomeTab[] = [
  {
    id: "secure",
    label: "Secure",
    icon: (
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <Shield className="h-7 w-7" strokeWidth={1.5} />
        <SlidersHorizontal className="absolute h-3 w-3" strokeWidth={2.5} />
      </span>
    ),
    caption: "Deliver powerful security for all users, apps, and devices, at any location.",
    image: "./assets/img/outcomes-secure.jpg",
    alt: "A professional working in a glass-walled office, representing secure access from anywhere",
  },
  {
    id: "prevent",
    label: "Prevent",
    icon: (
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <ShieldAlert className="h-7 w-7" strokeWidth={1.5} />
      </span>
    ),
    caption: "Stop threats before impact with real-time, AI-driven detection and response.",
    image: "./assets/img/outcomes-prevent.jpg",
    alt: "A security analyst monitoring threat data reflected on their glasses",
  },
  {
    id: "simplify",
    label: "Simplify",
    icon: (
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <Layers className="h-7 w-7" strokeWidth={1.5} />
      </span>
    ),
    caption: "Replace fragmented point tools with one console, one policy model, one view.",
    image: "./assets/img/outcomes-simplify.jpg",
    alt: "A wide-angle view of a glass office building against a bright sky",
  },
  {
    id: "consolidate",
    label: "Consolidate",
    icon: (
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <Merge className="h-7 w-7" strokeWidth={1.5} />
      </span>
    ),
    caption: "Bring network, cloud, and endpoint defenses onto a single, unified platform.",
    image: "./assets/img/outcomes-consolidate.jpg",
    alt: "Two people walking down a data center aisle lined with server racks",
  },
];

export default function OutcomesTabSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = outcomeTabs[activeIndex];

  // The other three tabs' images, in tab order starting right after the
  // active one — these render as the narrow "peeking" slivers stacked to
  // the right of the main photo, mimicking the reference's card-stack edge.
  const stack = outcomeTabs.filter((_, i) => i !== activeIndex);

  return (
    <section className="bg-white py-20 text-slate-900 font-sans lg:py-28">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Outcomes
            </p>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              AI-powered platform, securing your entire network.
            </h2>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Platform outcomes"
          className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-10"
        >
          {outcomeTabs.map((tab, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className="relative pb-2 text-base font-semibold transition-colors sm:text-lg"
              >
                <span className={isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}>
                  {tab.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="outcomes-tab-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-amber-400"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Image + trailing "peek" stack */}
        <ScrollReveal speed="fast" animation="fade-up" delay={0.1} className="mt-12">
          <div className="mx-auto flex h-[260px] max-w-4xl justify-center sm:h-[340px] lg:h-[420px]">
            <div className="relative h-full w-full max-w-3xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Trailing slivers — narrow, increasingly cropped/darkened
                strips of the *other* tab images, giving the sense of more
                cards stacked behind the active one. Purely decorative
                (aria-hidden) since the tab list above is the real control. */}
            <div className="hidden items-stretch sm:flex" aria-hidden="true">
              {stack.map((tab, i) => (
                <div
                  key={tab.id}
                  className="relative h-full overflow-hidden"
                  style={{ width: 28 - i * 6 }}
                >
                  <img
                    src={tab.image}
                    alt=""
                    className="h-full w-[220px] max-w-none object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-white"
                    style={{ opacity: 0.35 + i * 0.22 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Caption row */}
        <ScrollReveal speed="fast" animation="fade-up" delay={0.15} className="mt-10">
          <div className="mx-auto flex max-w-2xl items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-slate-300 text-slate-700">
              {active.icon}
            </div>
            <p className="text-base leading-snug text-slate-700 sm:text-lg">
              {active.caption}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}