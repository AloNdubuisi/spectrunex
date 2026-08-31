// src/components/RecommendedSection.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const recommendedItems = [
  {
    title: "How Much Does a Website Cost in Nigeria in 2026",
    category: "Insights & Pricing",
    href: "/services",
    action: "Read report",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "NextstersHub Business Automation & WhatsApp Conversion",
    category: "AI Automation",
    href: "/services",
    action: "Explore automation",
    bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Enterprise Laravel & React Ecosystem Architecture",
    category: "Custom Software",
    href: "/services",
    action: "View architecture",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Vercel & Cloud Infrastructure Deployment Standard",
    category: "DevOps & Cloud",
    href: "/contact",
    action: "Learn more",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  },
];

export default function RecommendedSection() {
  return (
    <section className="bg-[#050B14] text-white py-16 border-t border-white/10 relative z-30 font-sans overflow-hidden">
      <div className="container-page mb-8">
        <ScrollReveal speed="fast" animation="fade-up">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Recommended Insights &amp; Briefings
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient fade on left and right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050B14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050B14] to-transparent z-10 pointer-events-none" />

        {/* Infinite Auto-Scrolling Track */}
        <div className="flex w-max animate-marquee gap-6 px-3">
          {[...recommendedItems, ...recommendedItems].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative flex-shrink-0 w-[300px] sm:w-[350px] h-[220px] rounded-xl overflow-hidden border border-white/10 bg-[#0B1324] transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] flex flex-col justify-end p-6"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-40"
                style={{ backgroundImage: `url("${item.bgImage}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-transparent" />

              <div className="relative z-10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-semibold text-lg text-white group-hover:text-blue-200 transition line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-slate-300 group-hover:text-white">
                  {item.action} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}