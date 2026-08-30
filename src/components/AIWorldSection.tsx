"use client";

import { useState, useEffect, useRef } from "react";

export default function AIWorldSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badNewsRef = useRef<HTMLDivElement>(null);
  
  const [isGoodVisible, setIsGoodVisible] = useState(false);
  const [isBadVisible, setIsBadVisible] = useState(false);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // IntersectionObserver for Good News (Re-triggers on scroll in & out)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGoodVisible(true);
        } else {
          setIsGoodVisible(false);
          setCount1(0);
          setCount2(0);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // IntersectionObserver for Bad News (Re-triggers on scroll in & out)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBadVisible(true);
        } else {
          setIsBadVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (badNewsRef.current) {
      observer.observe(badNewsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Super-fast, smooth numerical count-up effect (~450ms)
  useEffect(() => {
    if (!isGoodVisible) return;

    let start = 0;
    const end1 = 78;
    const end2 = 74;
    const duration = 450;
    const stepTime = 14;
    const steps = duration / stepTime;
    const increment1 = end1 / steps;
    const increment2 = end2 / steps;

    const timer = setInterval(() => {
      start += 1;
      setCount1((prev) => (prev < end1 ? Math.min(end1, Math.round(start * increment1)) : end1));
      setCount2((prev) => (prev < end2 ? Math.min(end2, Math.round(start * increment2)) : end2));

      if (start >= steps) {
        clearInterval(timer);
        setCount1(end1);
        setCount2(end2);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isGoodVisible]);

  // Circle Geometry (radius 75 => circumference ~ 471.24)
  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset1 = isGoodVisible
    ? circumference - (78 / 100) * circumference
    : circumference;
  const strokeDashoffset2 = isGoodVisible
    ? circumference - (74 / 100) * circumference
    : circumference;

  return (
    <div className="bg-[#000000] text-white font-sans overflow-hidden" style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}>
      {/* 1. "A new AI world is here" & "THE GOOD NEWS" Section */}
      <section
        ref={sectionRef}
        className="relative py-24 sm:py-28 overflow-hidden border-b border-white/5"
      >
        {/* Background Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#FA582D]/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Top Right Orange Diagonal Matrix Slashes */}
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-40">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <line x1="60" y1="0" x2="200" y2="140" stroke="#FA582D" strokeWidth="2.5" />
            <line x1="80" y1="0" x2="200" y2="120" stroke="#FA582D" strokeWidth="2.5" />
            <line x1="100" y1="0" x2="200" y2="100" stroke="#FA582D" strokeWidth="2.5" />
            <line x1="120" y1="0" x2="200" y2="80" stroke="#FA582D" strokeWidth="2.5" />
            <line x1="140" y1="0" x2="200" y2="60" stroke="#FA582D" strokeWidth="2.5" />
            <line x1="160" y1="0" x2="200" y2="40" stroke="#FA582D" strokeWidth="2.5" />
            <line x1="180" y1="0" x2="200" y2="20" stroke="#FA582D" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Main Title: Slides in smoothly from left */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              isGoodVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight">
              A new <span className="text-[#FA582D]">AI world</span> is here
            </h2>
          </div>

          {/* Body: Left "THE GOOD NEWS" + Right 2 Ultra-Fast Animated Radial Progress Gauges */}
          <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Sub-block */}
            <div
              className={`lg:col-span-4 space-y-4 transition-all duration-700 delay-100 ease-out transform ${
                isGoodVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FA582D] block">
                THE GOOD NEWS
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.12]">
                AI is rapidly transforming your organization
              </h3>
            </div>

            {/* Right Two Circular Radial Progress Gauges */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
              {/* Progress Gauge 1 (78%) */}
              <div
                className={`flex flex-col items-center text-center transition-all duration-500 delay-200 transform ${
                  isGoodVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8"
                }`}
              >
                <div className="relative w-[210px] h-[210px] flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 180 180">
                    <circle
                      cx="90"
                      cy="90"
                      r={radius}
                      stroke="#262626"
                      strokeWidth="16"
                      fill="transparent"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r={radius}
                      stroke="#FA582D"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset1}
                      strokeLinecap="round"
                      style={{
                        transition: "stroke-dashoffset 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl sm:text-[44px] font-bold text-white tracking-tight">
                      {count1}%
                    </span>
                  </div>
                </div>

                <p className="text-2xl sm:text-[28px] font-bold text-[#FA582D] mt-6">
                  ~1.5X growth
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white mt-1.5 max-w-[220px]">
                  IN USAGE IN LAST 12 MONTHS
                </p>
              </div>

              {/* Progress Gauge 2 (74%) */}
              <div
                className={`flex flex-col items-center text-center transition-all duration-500 delay-300 transform ${
                  isGoodVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8"
                }`}
              >
                <div className="relative w-[210px] h-[210px] flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 180 180">
                    <circle
                      cx="90"
                      cy="90"
                      r={radius}
                      stroke="#262626"
                      strokeWidth="16"
                      fill="transparent"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r={radius}
                      stroke="#FA582D"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset2}
                      strokeLinecap="round"
                      style={{
                        transition: "stroke-dashoffset 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl sm:text-[44px] font-bold text-white tracking-tight">
                      {count2}%
                    </span>
                  </div>
                </div>

                <p className="text-2xl sm:text-[28px] font-bold text-[#FA582D] mt-6">
                  development
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#67E8F9] mt-1.5 max-w-[220px]">
                  ENTERPRISES USING GEN AI SOFTWARE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "THE BAD NEWS" Section with Animated Horizontal Gradient Bars */}
      <section
        ref={badNewsRef}
        className="relative py-24 sm:py-28 overflow-hidden border-b border-white/10"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: 3 Animated Horizontal Progress Bars */}
            <div className="lg:col-span-7 space-y-9">
              {/* Bar 1 */}
              <div
                className={`transition-all duration-700 ease-out transform ${
                  isBadVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  <span>INCREASE IN EXPLOITED ZERO DAYS (YoY, 2023)</span>
                  <span className="text-base font-bold text-white font-mono">56%</span>
                </div>
                <div className="w-full h-4 rounded-full bg-[#202020] overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#FA582D] to-[#FF8A65] shadow-[0_0_12px_rgba(250,88,45,0.6)] transition-all duration-700 ease-out"
                    style={{ width: isBadVisible ? "56%" : "0%" }}
                  />
                </div>
              </div>

              {/* Bar 2 */}
              <div
                className={`transition-all duration-700 delay-150 ease-out transform ${
                  isBadVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  <span>INCREASE IN RANSOMWARE ATTACKS (YoY, 2023)</span>
                  <span className="text-base font-bold text-white font-mono">73%</span>
                </div>
                <div className="w-full h-4 rounded-full bg-[#202020] overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#FA582D] to-[#FF8A65] shadow-[0_0_12px_rgba(250,88,45,0.6)] transition-all duration-700 ease-out"
                    style={{ width: isBadVisible ? "73%" : "0%" }}
                  />
                </div>
              </div>

              {/* Bar 3 */}
              <div
                className={`transition-all duration-700 delay-300 ease-out transform ${
                  isBadVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  <span>INCREASE IN DATA BREACHES AND LEAKS (YoY, 2023)</span>
                  <span className="text-base font-bold text-white font-mono">56%</span>
                </div>
                <div className="w-full h-4 rounded-full bg-[#202020] overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#FA582D] to-[#FF8A65] shadow-[0_0_12px_rgba(250,88,45,0.6)] transition-all duration-700 ease-out"
                    style={{ width: isBadVisible ? "56%" : "0%" }}
                  />
                </div>
              </div>
            </div>

            {/* Right: "THE BAD NEWS" Headline */}
            <div
              className={`lg:col-span-5 space-y-4 transition-all duration-700 delay-200 ease-out transform ${
                isBadVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FA582D] block">
                THE BAD NEWS
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.12]">
                Attackers are supercharging their speed and scale.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
