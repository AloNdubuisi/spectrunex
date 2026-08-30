"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Pause,
  Play,
} from "lucide-react";

const recommendedItems = [
  {
    id: 1,
    title: "The 2026 State of Cloud-Native Security & AI Risk",
    category: "Global Research",
    tag: "Prisma Cloud",
    href: "/services",
    action: "Read benchmark report",
    bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Precision AI™: The Autonomous Security Control Plane Architecture",
    category: "Technical Blueprint",
    tag: "Strata & Cortex",
    href: "/services",
    action: "Download architectural guide",
    bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Replacing Legacy SIEM with Cortex XSIAM: Financial ROI Study",
    category: "Executive Briefing",
    tag: "SecOps",
    href: "/services",
    action: "View ROI analysis",
    bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Zero Trust Architecture 2.0: Securing the Hybrid Workforce",
    category: "Best Practices",
    tag: "Strata SASE",
    href: "/services",
    action: "Explore framework",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Unit 42 Incident Response: 2026 Threat Actors & Tactics",
    category: "Threat Intelligence",
    tag: "Unit 42",
    href: "/services",
    action: "Read threat briefing",
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Securing AI Supply Chains & Enterprise LLM Workloads",
    category: "AI Security Advisory",
    tag: "Prisma AIRS",
    href: "/services",
    action: "View security blueprint",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
];

export default function RecommendedSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto smooth sliding effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const speed = 0.75; // Smooth scroll pixel step

    const autoScroll = () => {
      if (!isPaused && !isHovered && scrollContainer) {
        scrollContainer.scrollLeft += speed;

        // Loop smoothly when reaching half of the duplicated list
        if (
          scrollContainer.scrollLeft >=
          (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isHovered]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  // Duplicated list for seamless infinite carousel sliding
  const displayItems = [...recommendedItems, ...recommendedItems];

  return (
    <section className="bg-[#090D14] text-white py-16 border-b border-pan-dark-border relative z-30 font-sans overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pan-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-pan-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-pan-orange/15 border border-pan-orange/30 flex items-center justify-center text-pan-orange">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Recommended Insights &amp; Briefings
              </h2>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                Continuously updating research, blueprints &amp; benchmarks
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Auto-Slide Play/Pause Toggle Indicator */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111722] border border-pan-dark-border text-xs text-slate-300 hover:text-white hover:border-slate-400 transition"
              title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
            >
              {isPaused ? (
                <>
                  <Play className="h-3 w-3 text-pan-orange fill-current" />
                  <span className="text-[11px] font-medium font-mono">Paused</span>
                </>
              ) : (
                <>
                  <Pause className="h-3 w-3 text-pan-cyan" />
                  <span className="text-[11px] font-medium font-mono">Auto-Slide: Active</span>
                </>
              )}
            </button>

            {/* Manual Left/Right Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={scrollLeft}
                aria-label="Previous recommended items"
                className="h-9 w-9 rounded-full border border-pan-dark-border bg-[#0F141E] flex items-center justify-center text-slate-300 hover:text-white hover:border-pan-orange hover:bg-pan-orange/10 transition"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Next recommended items"
                className="h-9 w-9 rounded-full border border-pan-dark-border bg-[#0F141E] flex items-center justify-center text-slate-300 hover:text-white hover:border-pan-orange hover:bg-pan-orange/10 transition"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Smooth Auto-sliding Carousel Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {displayItems.map((item, idx) => (
            <Link
              key={`${item.id}-${idx}`}
              href={item.href}
              className="group relative flex-shrink-0 w-[310px] sm:w-[370px] h-[270px] rounded-2xl overflow-hidden border border-pan-dark-border bg-[#111722] hover:border-pan-orange hover:shadow-2xl hover:shadow-pan-orange/15 transition-all duration-500 flex flex-col justify-between p-6"
            >
              {/* Card Background Image with Smooth Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-45"
                style={{ backgroundImage: `url("${item.bgImage}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-[#070A0F]/85 to-[#070A0F]/20" />

              {/* Top Tag & Category */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pan-orange bg-pan-orange/15 border border-pan-orange/30 px-2.5 py-0.5 rounded-full">
                  {item.tag}
                </span>
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Bottom Content & Interactive Link */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-pan-orange transition-colors duration-300 line-clamp-2 leading-snug">
                  {item.title}
                </h3>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white transition">
                  <span>{item.action}</span>
                  <div className="h-6 w-6 rounded-full bg-pan-orange/10 group-hover:bg-pan-orange group-hover:text-white text-pan-orange flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}