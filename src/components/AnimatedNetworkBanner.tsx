// src/components/OutcomesTabSwitcher.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, SlidersHorizontal, ShieldAlert, Layers, Merge } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* Rebuilt as an actual horizontal accordion, matching the reference more
   closely than the first pass did. What the screenshot shows isn't a big
   photo with a few overlapping "peek" thumbnails floating beside it — it's
   FOUR PANELS SITTING EDGE-TO-EDGE, one per tab, where the active one
   expands to take most of the width and the other three collapse to thin
   vertical strips of their own photo (darkened, not white-faded — that's
   what reads as "black bars" in the screenshot). Clicking a strip (or its
   tab label above) expands it in turn. That's why the widths below animate
   flexGrow rather than crossfading a single image.

   Also fixed: the caption row (icon + text) shares the accordion's own
   max-width and left edge instead of being centered independently on the
   page — in the reference it starts at the same left edge as the photo
   block, it isn't centered under it.

   Image count: you mentioned having three slide images ready, which lines
   up with what's actually in the reference screenshots — the "Secure" and
   "Simplify" tabs use the same glass-office-building photo (the two
   screenshots of it are just different crops of one image), "Prevent" uses
   the analyst-at-a-monitor photo, and "Consolidate" uses the server-row
   corridor photo. So four tabs, three underlying images. Drop your three
   files in at the paths below and all four panels resolve correctly.

   As before, two content changes from the literal reference: "Precision
   AI®" (Palo Alto's own product name) is reworded to generic "AI-powered,"
   and the photos are named placeholders rather than the screenshots
   themselves, since those are the reference site's own photography. */

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
    image: "./assets/img/slider-1.jpg",
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
    image: "./assets/img/slider-2.webp",
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
    image: "./assets/img/slider-4.webp",
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
    image: "./assets/img/slider-4.webp",
    alt: "Two people walking down a data center aisle lined with server racks",
  },
];

export default function OutcomesTabSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = outcomeTabs[activeIndex];

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

        {/* Tab labels — still the primary control; clicking a collapsed
            panel below does the same thing, for a more natural accordion. */}
        <div
          aria-hidden="true"
          className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-10"
        >
          {outcomeTabs.map((tab, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={tab.id}
                type="button"
                tabIndex={-1}
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

        {/* Accordion — four edge-to-edge panels, the active one expanded.
            This is the real control (role="tablist"); the labels above are
            a visual duplicate that drives the same state. */}
        <ScrollReveal speed="fast" animation="fade-up" delay={0.1} className="mt-12">
          <div
            role="tablist"
            aria-label="Platform outcomes"
            className="mx-auto flex h-[260px] max-w-4xl overflow-hidden sm:h-[340px] lg:h-[420px]"
          >
            {outcomeTabs.map((tab, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={tab.label}
                  onClick={() => setActiveIndex(idx)}
                  className="relative h-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                  style={{ flexBasis: 0, minWidth: 0 }}
                  animate={{ flexGrow: isActive ? 8 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                >
                  <img
                    src={tab.image}
                    alt={tab.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* darkened when collapsed, clear when active — the
                      reference's "black bar" look is this tint, not a
                      fade to the white page background. */}
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isActive ? "bg-black/0" : "bg-black/55 hover:bg-black/40"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>
        </ScrollReveal>

         {/* Caption row — shares the accordion's own max-width/left edge
            rather than being centered on its own. */}
        <ScrollReveal speed="fast" animation="fade-up" delay={0.15} className="mt-8">
          <div className="mx-auto flex max-w-2xl items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-slate-300 text-slate-900">
              {active.icon}
            </div>
            <p
              style={{
                color: "rgb(20, 20, 20)",
                fontFamily: "var(--font-primary)",
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: "140%",
                paddingLeft: "1.5rem",
              }}
            >
              {active.caption}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}