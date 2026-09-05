// src/components/IndustryValidationSection.tsx
"use client";

import { useState } from "react";
import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* PLACEHOLDER CONTENT — bigger-scale version of the same issue already
   flagged on the Recognition section further down this page. The
   reference names four specific real analyst/research firms (Gartner®,
   Forrester®, Frost & Sullivan, ABI Research) across 13 specific report
   titles, plus a "13x Network Security Leader" headline stat tied directly
   to that count. Claiming a specific real analyst firm placed you in a
   specific real report you haven't actually been placed in is a false-
   advertising problem, not a styling nicety — the same category as the
   Gartner Magic Quadrant claims already swapped out elsewhere in this
   project, just at a larger scale here.

   What's kept: the generic PRODUCT CATEGORIES (SASE, SD-WAN, Zero Trust
   Browser Security, etc.) — those are just industry terms, not trademarks,
   and are fine to reuse. What's removed: every named analyst/research firm,
   every specific report title, and the "13x" count (replaced with a
   literal "N×" placeholder — don't fill in a number until you have real,
   verifiable recognitions to point it at). Swap in real firm names and
   report titles as you actually earn them, then update the count.

   The "×" dismiss control in the reference toggles this detail list
   closed/open — implemented here as a simple show/hide toggle. */

const recognitions: { category: string }[] = [
  { category: "Hybrid Mesh Firewall" },
  { category: "SASE Platforms" },
  { category: "Enterprise Firewall Solutions" },
  { category: "Single-Vendor SASE" },
  { category: "Operational Technology Security" },
  { category: "Network Firewalls" },
  { category: "SD-WAN" },
  { category: "Zero Trust Browser Security" },
  { category: "Zero Trust Network Access (ZTNA)" },
  { category: "Security Service Edge" },
  { category: "Zero Trust Platform Providers" },
  { category: "Industrial Firewall Assessment" },
];

export default function IndustryValidationSection() {
  const [showList, setShowList] = useState(true);

  return (
    <section className="bg-white py-20 text-slate-900 font-sans lg:py-28">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="w-16 border-t-2 border-slate-300" />
          <h2 className="mt-8 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Industry recognized.
            <br />
            Constantly innovating.
          </h2>
        </ScrollReveal>

        <ScrollReveal speed="fast" animation="fade-up" delay={0.1} className="mt-16">
          <div className="flex flex-wrap items-center gap-6">
            <span className="bg-gradient-to-b from-slate-400 to-slate-600 bg-clip-text font-display text-6xl font-black leading-none text-transparent sm:text-7xl">
              N&times;
            </span>
            <span className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Industry Recognition
            </span>
            <button
              type="button"
              onClick={() => setShowList((v) => !v)}
              aria-expanded={showList}
              aria-label={showList ? "Hide recognitions" : "Show recognitions"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-red-500 transition hover:bg-slate-200"
            >
              <X className={`h-4 w-4 transition-transform ${showList ? "" : "rotate-45"}`} strokeWidth={2.5} />
            </button>
          </div>
        </ScrollReveal>

        {showList && (
          <ScrollReveal speed="fast" animation="fade-up" delay={0.15} className="mt-14">
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {recognitions.map((item) => (
                <div key={item.category} className="border-l-2 border-blue-400 pl-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Industry Analyst
                  </p>
                  <p className="mt-1 text-base text-slate-900">
                    Add your own placement for {item.category} once confirmed.
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}