// src/components/RecommendedSection.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
  {
    title: "The future of Frontier AI network security",
    action: "Watch now",
    href: "/services",
    image: "/assets/img/hero-banner.jpg",
    objectPosition: "20% center",
  },
  {
    title: "Introducing Unit 42 Threat Intelligence.",
    action: "Stop the adversary",
    href: "/contact",
    image: "/assets/img/hero-image.png",
    objectPosition: "center center",
  },
  {
    title: "A 4X Gartner Leader in Security Service Edge",
    action: "Read report",
    href: "/about",
    image: "/assets/img/hero-banner.jpg",
    objectPosition: "80% center",
  },
  {
    title: "A 4X Cloud Security Magic Quadrant Leader",
    action: "Read report",
    href: "/about",
    image: "/assets/img/hero-image.png",
    objectPosition: "left center",
  },
];

export default function RecommendedSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#050B14] py-8 text-white font-sans border-b border-white/10">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              RECOMMENDED
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-white/10"
                aria-label="Previous items"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-white/10"
                aria-label="Next items"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05} speed="fast" animation="slide-left" className="min-w-[340px] sm:min-w-[385px] flex-1">
              <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0B1324] p-4 hover:border-blue-500/50 transition-all shadow-lg cursor-pointer">
                <div className="h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden relative border border-white/10">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-blue-950/20 pointer-events-none" />
                </div>
                <div className="flex flex-col justify-between py-0.5">
                  <h4 className="font-display font-semibold text-sm text-white line-clamp-2 leading-snug mb-2 group-hover:text-blue-400 transition">
                    {item.title}
                  </h4>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition"
                  >
                    {item.action} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}