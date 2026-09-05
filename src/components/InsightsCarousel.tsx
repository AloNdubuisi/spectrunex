// src/components/Insightscarousel.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  PlayCircle,
  Radio,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* PLACEHOLDER CONTENT — these are generic resource slots (type, title,
   summary, read time), not claims about specific real publications, events,
   or people, so there's nothing here that needs a factual citation the way
   the stats/logos sections do. Swap in your actual reports, webinars, and
   articles before this ships. */

type ResourceType = "Report" | "Webinar" | "Article";

const typeMeta: Record<ResourceType, { icon: typeof FileText; label: string }> = {
  Report: { icon: FileText, label: "Report" },
  Webinar: { icon: PlayCircle, label: "Webinar" },
  Article: { icon: Radio, label: "Article" },
};

const resources: {
  type: ResourceType;
  title: string;
  summary: string;
  meta: string;
  href: string;
}[] = [
  {
    type: "Report",
    title: "The State of AI-Driven Threats",
    summary:
      "A breakdown of how attackers are using automation and generative models to speed up reconnaissance, phishing, and exploit development.",
    meta: "18 min read",
    href: "/resources/ai-driven-threats",
  },
  {
    type: "Webinar",
    title: "Zero Trust Beyond the Firewall",
    summary:
      "Our platform architects walk through applying least-privilege access principles across network, identity, and workload boundaries.",
    meta: "42 min watch",
    href: "/resources/zero-trust-webinar",
  },
  {
    type: "Article",
    title: "FedRAMP Authorization, Demystified",
    summary:
      "A practical walkthrough of the FedRAMP® path from readiness assessment to ATO, and where most timelines actually slip.",
    meta: "9 min read",
    href: "/resources/fedramp-demystified",
  },
  {
    type: "Report",
    title: "Benchmarking SOC Response Times",
    summary:
      "How mean-time-to-detect and mean-time-to-respond vary across managed, hybrid, and in-house security operations models.",
    meta: "14 min read",
    href: "/resources/soc-benchmarks",
  },
  {
    type: "Article",
    title: "Preparing for CMMC 2.0 Assessments",
    summary:
      "What changed in the latest CMMC framework revision, and a checklist for scoping your organization's assessment boundary.",
    meta: "11 min read",
    href: "/resources/cmmc-2-0-checklist",
  },
];

/* Shows a responsive window of cards (1 on mobile, 2 on tablet, 3 on
   desktop) and slides by one card at a time, wrapping at both ends. Track
   position is expressed as a percentage so the same logic works at every
   breakpoint without measuring pixel widths. */

const CARDS_PER_VIEW = { base: 1, md: 2, lg: 3 } as const;

export default function InsightsCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = resources.length - 1;

  const go = (dir: 1 | -1) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  };

  return (
    <section className="section-y relative overflow-hidden bg-gradient-to-b from-[#0B0E14] to-[#070A0F]">
      <div className="container-page relative z-10">
        <ScrollReveal animation="fade-up" speed="fast">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Resources & Insights</p>
              <h2 className="section-heading">
                Research and guidance from our security team
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous resource"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next resource"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Track: translate by one card-width per step. Card widths are set
            via basis classes per breakpoint, and the translate percentage
            matches the base (mobile, 1-per-view) card width — at wider
            breakpoints this simply reveals more of the next card(s), which
            reads fine since the whole row keeps moving together. */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          >
            {resources.map((item) => {
              const Icon = typeMeta[item.type].icon;
              return (
                <div
                  key={item.title}
                  className="w-full shrink-0 md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm transition hover:border-blue-400/30">
                    <div>
                      <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                        <Icon className="h-4 w-4" />
                        {typeMeta[item.type].label}
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {item.summary}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs font-semibold text-slate-500">
                        {item.meta}
                      </span>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-400 transition hover:text-blue-300"
                      >
                        Read more <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Dot pagination */}
        <div className="mt-10 flex justify-center gap-2">
          {resources.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setIndex(idx)}
              aria-label={`Go to resource ${idx + 1}`}
              aria-current={idx === index}
              className="group flex h-6 w-6 items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all ${
                  idx === index
                    ? "w-6 bg-blue-400"
                    : "w-1.5 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}