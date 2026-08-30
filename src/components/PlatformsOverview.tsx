"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Shield,
  Cloud,
  Cpu,
  ArrowRight,
  Play,
  Pause,
  Sparkles,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
} from "lucide-react";
import { flagshipPlatforms } from "@/lib/site";

export default function PlatformsOverview() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const platformsRef = useRef<HTMLDivElement>(null);

  const [isMetricsVisible, setIsMetricsVisible] = useState(false);
  const [isPlatformsVisible, setIsPlatformsVisible] = useState(false);
  const [activePlatformId, setActivePlatformId] = useState("strata");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // IntersectionObserver for fast reveal and bouncing entry on scroll
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsMetricsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsPlatformsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (metricsRef.current) observer1.observe(metricsRef.current);
    if (platformsRef.current) observer2.observe(platformsRef.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  const selectedPlatform = flagshipPlatforms.find((p) => p.id === activePlatformId) || flagshipPlatforms[0];

  return (
    <div
      className="bg-[#000000] text-white font-sans overflow-hidden"
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* 1. Platformization Metrics Section */}
      <section
        ref={metricsRef}
        className="relative py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      >
        {/* Background Dot Matrix Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div
              className={`max-w-3xl space-y-3 transition-all duration-700 ease-out transform ${
                isMetricsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FA582D] block">
                WHY SPECTRUNEX
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.12]">
                Platformization empowers you to harness AI-ready infrastructure.
                <span className="block text-[#FA582D] mt-2">
                  And leverage services powered by Precision AI® to keep everything secure.
                </span>
              </h2>
            </div>

            <div
              className={`flex-shrink-0 transition-all duration-700 delay-150 ease-out transform ${
                isMetricsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#0F141E] hover:bg-white/10 hover:border-white/50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition shadow-lg"
              >
                See our platform approach
                <ArrowRight className="h-4 w-4 text-[#FA582D]" />
              </Link>
            </div>
          </div>

          {/* 3 Sleek Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metric Card 1 (90%) */}
            <div
              className={`group relative rounded-3xl bg-[#111722] border border-white/10 p-8 sm:p-10 hover:border-[#FA582D]/60 hover:shadow-2xl hover:shadow-[#FA582D]/15 transition-all duration-500 transform ${
                isMetricsVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              {/* Top-Right Orange Diagonal Slashes Graphic */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <line x1="20" y1="0" x2="100" y2="80" stroke="#FA582D" strokeWidth="2" />
                  <line x1="40" y1="0" x2="100" y2="60" stroke="#FA582D" strokeWidth="2" />
                  <line x1="60" y1="0" x2="100" y2="40" stroke="#FA582D" strokeWidth="2" />
                  <line x1="80" y1="0" x2="100" y2="20" stroke="#FA582D" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-[#FA582D] tracking-tight">
                    90 %
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  reduction in MTTR
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Drive innovation and digital transformation with AI.
                </p>
              </div>
            </div>

            {/* Metric Card 2 (30.9 B) */}
            <div
              className={`group relative rounded-3xl bg-[#111722] border border-white/10 p-8 sm:p-10 hover:border-[#FA582D]/60 hover:shadow-2xl hover:shadow-[#FA582D]/15 transition-all duration-500 delay-150 transform ${
                isMetricsVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <line x1="20" y1="0" x2="100" y2="80" stroke="#FA582D" strokeWidth="2" />
                  <line x1="40" y1="0" x2="100" y2="60" stroke="#FA582D" strokeWidth="2" />
                  <line x1="60" y1="0" x2="100" y2="40" stroke="#FA582D" strokeWidth="2" />
                  <line x1="80" y1="0" x2="100" y2="20" stroke="#FA582D" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-base text-slate-300 font-normal">up to</span>
                  <span className="text-5xl sm:text-6xl font-black text-[#FA582D] tracking-tight">
                    30.9 B
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  inline attacks blocked per day
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Proactively monitor, analyze, and prevent sophisticated intrusions in real time with less complexity, enabling secure growth and innovation for your organization.
                </p>
              </div>
            </div>

            {/* Metric Card 3 (480 B) */}
            <div
              className={`group relative rounded-3xl bg-[#111722] border border-white/10 p-8 sm:p-10 hover:border-[#FA582D]/60 hover:shadow-2xl hover:shadow-[#FA582D]/15 transition-all duration-500 delay-300 transform ${
                isMetricsVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <line x1="20" y1="0" x2="100" y2="80" stroke="#FA582D" strokeWidth="2" />
                  <line x1="40" y1="0" x2="100" y2="60" stroke="#FA582D" strokeWidth="2" />
                  <line x1="60" y1="0" x2="100" y2="40" stroke="#FA582D" strokeWidth="2" />
                  <line x1="80" y1="0" x2="100" y2="20" stroke="#FA582D" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-[#FA582D] tracking-tight">
                    480 B
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  endpoints scanned daily
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Enable autonomous security with our integrated and scalable suite of Precision AI-driven products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Introducing the Platforms, powered by Precision AI" Video & Showcase Section */}
      <section
        ref={platformsRef}
        className="relative py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Eyebrow with horizontal orange accent bar */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              isPlatformsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="w-16 h-1 bg-[#FA582D] mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white max-w-xl leading-tight">
              Introducing the Platforms, powered by Precision AI
            </h2>
          </div>

          {/* Interactive Video & Demonstration Showcase Player */}
          <div
            className={`mt-14 rounded-3xl bg-[#0F141E] border border-white/15 p-6 sm:p-10 shadow-2xl transition-all duration-1000 delay-200 transform ${
              isPlatformsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
            }`}
          >
            {/* Top Interactive Platform Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                {flagshipPlatforms.map((p) => {
                  const isActive = activePlatformId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePlatformId(p.id)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                        isActive
                          ? "bg-[#FA582D] text-white border-[#FA582D] shadow-lg shadow-[#FA582D]/25 scale-105"
                          : "bg-[#090D14] text-slate-300 border-white/10 hover:border-slate-500 hover:text-white"
                      }`}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{p.trademark}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
                </span>
                <span>PRECISION AI™ 4K STREAM</span>
              </div>
            </div>

            {/* Video & Live Cyber Simulation Stage */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Video Player Container with Custom Controls */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-[#070A0F] border border-white/10 aspect-video flex items-center justify-center group shadow-inner">
                {/* Video Background Poster */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop")',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-transparent" />

                {/* Pulsing Central Play Button */}
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  aria-label={isVideoPlaying ? "Pause demonstration" : "Play demonstration"}
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#FA582D] hover:bg-[#ff6f47] text-white shadow-2xl shadow-[#FA582D]/40 transition-transform transform hover:scale-110 active:scale-95"
                >
                  {isVideoPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8 fill-current ml-1" />
                  )}
                </button>

                {/* Bottom Video Telemetry Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <span className="font-bold flex items-center gap-2">
                    <Activity className="h-4 w-4 text-[#FA582D] animate-pulse" />
                    {selectedPlatform.trademark} Telemetry Feed
                  </span>
                  <span className="font-mono text-[#00D2FF]">02:45 / 04:00</span>
                </div>
              </div>

              {/* Right Platform Details & Live Capabilities */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FA582D] bg-[#FA582D]/10 px-3 py-1 rounded-full">
                    {selectedPlatform.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 font-display">
                    {selectedPlatform.tagline}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-3">
                    {selectedPlatform.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {selectedPlatform.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {selectedPlatform.stats.label}: <strong className="text-white">{selectedPlatform.stats.value}</strong>
                  </span>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FA582D] hover:text-white uppercase tracking-wider transition"
                  >
                    Explore Platform <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}