// src/components/IdentitySection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlusCircle } from "lucide-react";
import Link from "next/link";

/* Credential cards replace the previous third-party analyst placements.
   Spectrunex holds no placements in those reports, so each card names an
   identity and access capability we actually deliver, drawn from the
   Cyber Security service page. */
interface Credential {
  mark: string;
  title: string;
}

const credentials: Credential[] = [
  {
    mark: "HSPD-12",
    title: "Secure identification and credential management support",
  },
  {
    mark: "PIV ENABLEMENT",
    title: "Card-based authentication for federal facilities and systems",
  },
  {
    mark: "ACCESS GOVERNANCE",
    title: "Provisioning, periodic review, and least-privilege enforcement",
  },
  {
    mark: "IDENTITY LIFECYCLE",
    title: "Onboarding through separation, with auditable records at each step",
  },
  {
    mark: "AUTHENTICATION",
    title: "Multi-factor and passwordless authentication hardening",
  },
  {
    mark: "PRIVILEGED ACCESS",
    title: "Controls, monitoring, and review for administrative accounts",
  },
];

export default function IdentitySection() {
  return (
    <section className="relative overflow-hidden bg-[#070A0F] pt-24 pb-20 text-white selection:bg-[#2563EB] selection:text-white">
      {/* Background Ambience Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-1/4 h-[480px] w-[480px] rounded-full bg-[#2563EB]/10 blur-[150px]" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-blue-950/20 blur-[140px]" />
      </div>

      <div className="container-page relative z-10">
        {/* Big Tracked Headline in Electric Blue */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 sm:mb-18"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black uppercase tracking-[0.16em] sm:tracking-[0.24em] text-[#2563EB] leading-[1.12]">
            <span className="block">IDENTITY & ACCESS</span>
            <span className="block">ASSURANCE</span>
          </h2>
        </motion.div>

        {/* Two-Column Grid: Content (Left) + Credential Cards with Fan Mesh Texture (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Description, Stats, and Action Button */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-200 mb-10 font-normal max-w-xl">
              Spectrunex helps you govern who can reach what, and prove it to an
              auditor. We support HSPD-12 credentialing, identity and access
              management frameworks, and the account governance and policy work
              that keeps privilege appropriate from first access to separation.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                  HSPD-12
                </span>
                <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                  CREDENTIALING SUPPORT
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                  FIPS 201
                </span>
                <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                  PIV STANDARD ALIGNMENT
                </span>
              </div>
            </div>

            {/* Action Button (Pill shaped royal blue button with white text) */}
            <div>
              <Link
                href="/services/cyber-security"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:bg-[#1D4ED8] hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30 active:scale-95"
              >
                <span>Explore Cyber Security</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Cyan Credential Cards with Vertical Fan Pattern */}
          <div className="lg:col-span-7 relative">
            {/* Background Blue Vertical Lines Fan Pattern */}
            <div
              className="pointer-events-none absolute -inset-8 sm:-inset-14 opacity-25 z-0 flex items-center justify-center overflow-hidden"
              aria-hidden="true"
            >
              <svg
                className="w-full h-full min-h-[440px]"
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {Array.from({ length: 28 }).map((_, i) => {
                  const x = 160 + i * 14;
                  return (
                    <line
                      key={i}
                      x1={x}
                      y1="40"
                      x2={x - 80 + i * 4}
                      y2="420"
                      stroke="#2563EB"
                      strokeWidth="2"
                      opacity={0.8 - Math.abs(14 - i) * 0.04}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Top Right "See all (+)" Action */}
            <div className="relative z-10 flex justify-end mb-4 pr-1">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#2563EB] transition-colors"
              >
                <span>See all</span>
                <PlusCircle className="h-4 w-4 text-white" />
              </Link>
            </div>

            {/* 2x2 Cyan Credential Grid (+ 2 peeking bottom cards) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {credentials.map((credential, idx) => {
                const isBottomRow = idx >= 4;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.08,
                      ease: "easeOut",
                    }}
                    className={`group relative overflow-hidden rounded-2xl p-6 sm:p-7 shadow-xl transition-all duration-300 ${
                      isBottomRow
                        ? "bg-gradient-to-b from-[#6ED0EA] to-[#54C2DE] opacity-60 hover:opacity-100"
                        : "bg-gradient-to-br from-[#7CE0F6] via-[#6ED0EA] to-[#53C0DC] hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/25"
                    }`}
                  >
                    {/* Inner Hover Highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Credential Mark */}
                    <div className="mb-4 flex items-center min-h-[30px]">
                      {credential.mark.length > 12 ? (
                        <span className="font-sans text-xs sm:text-[0.85rem] font-black uppercase tracking-[0.18em] text-black">
                          {credential.mark}
                        </span>
                      ) : (
                        <span className="font-sans text-xl sm:text-2xl font-black uppercase tracking-wide text-black">
                          {credential.mark}
                        </span>
                      )}
                    </div>

                    {/* Credential Detail */}
                    <p className="text-xs sm:text-[0.84rem] font-semibold text-black/90 leading-snug">
                      {credential.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}