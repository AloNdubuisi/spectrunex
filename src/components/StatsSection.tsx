// src/components/StatsSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Cloud,
  Shield,
  UploadCloud,
  Flame,
  Cpu,
  Bug,
  Lock,
  Layers,
  Search,
} from "lucide-react";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#070A0F] py-24 text-white selection:bg-[#1D4ED8] selection:text-white border-b border-white/5">
      {/* Background Ambience Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-[#1D4ED8]/6 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-orange-950/20 blur-[160px]" />
      </div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-tight mb-4"
          >
            <span className="text-[#1D4ED8]">So you can defend at</span> speed and scale.
          </motion.h2>

          {/* Timestamp Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-300"
          >
            <Clock className="h-4 w-4 text-slate-300" />
            <span>Daily data as of 09.3.26 at 7AM PST</span>
          </motion.div>
        </div>

        {/* ── Telemetry 6-Card Dashboard Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {/* CARD 1: Cloud Events Processed (Circuit Bus) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E14] p-7 transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[360px]"
          >
            {/* Visual: Glowing Circuit Architecture */}
            <div className="relative mb-8 flex h-48 w-full items-center justify-between">
              {/* Circuit SVG Lines */}
              <svg className="absolute inset-0 h-full w-full" fill="none">
                {/* Horizontal main bus */}
                <path
                  d="M 80 96 L 160 96 L 210 50 L 260 50"
                  stroke="rgba(250, 88, 45, 0.4)"
                  strokeWidth="2"
                />
                <path
                  d="M 160 96 L 210 142 L 260 142"
                  stroke="rgba(250, 88, 45, 0.4)"
                  strokeWidth="2"
                />
                <line
                  x1="80"
                  y1="96"
                  x2="160"
                  y2="96"
                  stroke="#1D4ED8"
                  strokeWidth="3"
                  className="filter drop-shadow-[0_0_8px_#1D4ED8]"
                />
                <line
                  x1="160"
                  y1="96"
                  x2="210"
                  y2="50"
                  stroke="#1D4ED8"
                  strokeWidth="2.5"
                  className="filter drop-shadow-[0_0_8px_#1D4ED8]"
                />
                <line
                  x1="210"
                  y1="50"
                  x2="260"
                  y2="50"
                  stroke="#1D4ED8"
                  strokeWidth="2.5"
                  className="filter drop-shadow-[0_0_8px_#1D4ED8]"
                />
                <line
                  x1="160"
                  y1="96"
                  x2="210"
                  y2="142"
                  stroke="#1D4ED8"
                  strokeWidth="2.5"
                  className="filter drop-shadow-[0_0_8px_#1D4ED8]"
                />
                <line
                  x1="210"
                  y1="142"
                  x2="260"
                  y2="142"
                  stroke="#1D4ED8"
                  strokeWidth="2.5"
                  className="filter drop-shadow-[0_0_8px_#1D4ED8]"
                />
                {/* Secondary traces */}
                <path
                  d="M 60 40 L 140 40 L 180 80"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 60 152 L 140 152 L 180 112"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Source Node: Cloud Scan */}
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#12161F] p-3 shadow-inner">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D4ED8]/10 border border-[#1D4ED8]/30">
                  <Cloud className="h-6 w-6 text-[#1D4ED8]" />
                </div>
              </div>

              {/* Destination Nodes: Shield & Cloud Upload */}
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#12161F] p-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D4ED8]/15 border border-[#1D4ED8]/40">
                    <Shield className="h-5 w-5 text-[#1D4ED8]" />
                  </div>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#12161F] p-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D4ED8]/15 border border-[#1D4ED8]/40">
                    <UploadCloud className="h-5 w-5 text-[#1D4ED8]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Metric & Label */}
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#1D4ED8] mb-1">
                1 T
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-300">
                Cloud Events Processed
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Exploits Detected List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E14] p-7 transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[360px]"
          >
            {/* Header Kicker */}
            <div>
              <div className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400">
                EXPLOITS DETECTED
              </div>

              {/* Exploit List Items */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/15 text-[#1D4ED8]">
                    <Bug className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#1D4ED8]">
                      Heartbleed
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Severely impacts enterprise servers
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/15 text-[#1D4ED8]">
                    <Cpu className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#1D4ED8]">
                      Spectre and Meltdown
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Hardware-based vulnerabilities
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/15 text-[#1D4ED8]">
                    <Flame className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#1D4ED8]">
                      EternalBlue
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Code exploiting a vulnerability
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/15 text-[#1D4ED8]">
                    <Lock className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#1D4ED8]">
                      ZeroLogon
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Elevation of privilege (EoP) vulnerability
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric & Label */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="font-display text-4xl sm:text-5xl font-black text-[#1D4ED8] mb-1">
                8.27 K
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-300">
                Exploit Attempts Detected
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Malware Executions Blocked (Vertical Beams) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E14] p-7 transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[360px]"
          >
            {/* Visual: Vertical descending attack rays with baseline targets */}
            <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden">
              <svg className="h-full w-full" viewBox="0 0 300 200" fill="none">
                {/* Descending vertical laser lines */}
                {[45, 95, 150, 205, 255].map((x, i) => (
                  <g key={i}>
                    <line
                      x1={x}
                      y1="10"
                      x2={x}
                      y2={120 + (i % 2 === 0 ? 20 : 0)}
                      stroke="rgba(250, 88, 45, 0.4)"
                      strokeWidth="2"
                    />
                    <line
                      x1={x}
                      y1={70 + (i % 2 === 0 ? 10 : 0)}
                      x2={x}
                      y2={120 + (i % 2 === 0 ? 20 : 0)}
                      stroke="#1D4ED8"
                      strokeWidth="3.5"
                      className="filter drop-shadow-[0_0_6px_#1D4ED8]"
                    />
                    {/* Baseline target points */}
                    <circle
                      cx={x}
                      cy={150}
                      r="4.5"
                      fill="#1D4ED8"
                      className="filter drop-shadow-[0_0_6px_#1D4ED8]"
                    />
                    <circle
                      cx={x}
                      cy={150}
                      r="10"
                      stroke="rgba(250, 88, 45, 0.3)"
                      strokeWidth="1"
                    />
                  </g>
                ))}

                {/* Angled Horizon Baseline */}
                <line
                  x1="20"
                  y1="150"
                  x2="280"
                  y2="150"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Central Shield / Emblem Icon */}
              <div className="absolute bottom-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D4ED8] text-black font-black shadow-[0_0_20px_#1D4ED8]">
                <Layers className="h-5 w-5 text-black" />
              </div>
            </div>

            {/* Metric & Label */}
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#1D4ED8] mb-1">
                736.49 K
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-300">
                Malware Executions Blocked
              </div>
            </div>
          </motion.div>

          {/* CARD 4: New Unique Objects Analyzed (Wireframe Terrain) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E14] p-7 transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[360px]"
          >
            {/* Visual: Glowing 3D Wireframe Waveform */}
            <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-t from-orange-950/20 to-transparent">
              <svg
                className="h-full w-full opacity-80"
                viewBox="0 0 300 180"
                fill="none"
              >
                {/* Horizontal Wave Layers */}
                {[0, 1, 2, 3, 4, 5, 6].map((row) => {
                  const yBase = 70 + row * 14;
                  return (
                    <path
                      key={row}
                      d={`M 10 ${yBase + 10} Q 75 ${yBase - 30 + (row % 2) * 15} 150 ${yBase + 15} T 290 ${yBase - 10}`}
                      stroke="#1D4ED8"
                      strokeWidth={row === 2 || row === 3 ? "2" : "1"}
                      opacity={0.3 + row * 0.1}
                    />
                  );
                })}

                {/* Vertical Mesh Struts */}
                {Array.from({ length: 14 }).map((_, col) => {
                  const x = 20 + col * 20;
                  return (
                    <line
                      key={col}
                      x1={x}
                      y1="50"
                      x2={x + 10}
                      y2="160"
                      stroke="rgba(250, 88, 45, 0.25)"
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Metric & Label */}
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#1D4ED8] mb-1">
                1.5 M
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-300">
                New Unique Objects Analyzed
              </div>
            </div>
          </motion.div>

          {/* CARD 5: Biometric Fingerprint Attack Objects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E14] p-7 transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[360px]"
          >
            {/* Visual: Glowing Fingerprint HUD Scanner */}
            <div className="relative mb-6 flex h-48 w-full items-center justify-center">
              {/* HUD Reticle Box with Corner Brackets */}
              <div className="relative flex h-40 w-40 items-center justify-center rounded-xl border border-dashed border-[#1D4ED8]/30 p-2">
                {/* Top Right Timer */}
                <span className="absolute top-2 right-2 text-[10px] font-mono font-bold text-[#1D4ED8]">
                  +5&apos;43 ::
                </span>

                {/* Corner Marks */}
                <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[#1D4ED8]" />
                <div className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-[#1D4ED8]" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#1D4ED8]" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#1D4ED8]" />

                {/* Fingerprint Vector Graphic */}
                <svg
                  className="h-28 w-28 text-[#1D4ED8]"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M 50 15 A 35 35 0 0 1 85 50" opacity="0.4" />
                  <path d="M 50 25 A 25 25 0 0 1 75 50" opacity="0.6" />
                  <path d="M 50 35 A 15 15 0 0 1 65 50" opacity="0.9" />
                  <path d="M 50 45 A 5 5 0 0 1 55 50 V 75" />
                  <path d="M 45 50 V 78" />
                  <path d="M 35 50 C 35 65 42 82 50 88" />
                  <path d="M 25 50 C 25 70 35 88 50 95" opacity="0.8" />
                  <path d="M 15 50 C 15 75 28 92 45 98" opacity="0.5" />
                  <path d="M 65 55 V 72 C 65 80 60 88 50 92" />
                  <path d="M 75 55 V 70 C 75 82 68 90 58 95" opacity="0.7" />
                </svg>
              </div>
            </div>

            {/* Metric & Label */}
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#1D4ED8] mb-1">
                66 K+
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-300">
                New Unique Attack Objects Identified
              </div>
            </div>
          </motion.div>

          {/* CARD 6: Inline Attacks Prevented (IDE / Script Terminal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E14] p-7 transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[360px]"
          >
            {/* Visual: Code Editor Terminal */}
            <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl border border-white/5 bg-[#070A0F] p-3.5 font-mono text-[11px] leading-relaxed text-slate-400 select-none">
              <div className="space-y-1">
                <div>
                  <span className="text-slate-600 mr-2">000</span>
                  <span className="text-[#1D4ED8] font-bold">&lt;?php</span>
                </div>
                <div>
                  <span className="text-slate-600 mr-2">001</span>
                  <span className="text-slate-500">// main site engine v2.0</span>
                </div>
                <div>
                  <span className="text-slate-600 mr-2">003</span>
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">inspect_incoming_telemetry</span>($req) &#123;
                </div>
                <div>
                  <span className="text-slate-600 mr-2">007</span>
                  &nbsp;&nbsp;<span className="text-yellow-400">$query</span> ={" "}
                  <span className="text-emerald-400">&quot;SELECT * FROM threat_vectors&quot;</span>;
                </div>
                <div>
                  <span className="text-slate-600 mr-2">012</span>
                  &nbsp;&nbsp;<span className="text-[#1D4ED8]">if</span> ($blocked) return{" "}
                  <span className="text-[#1D4ED8] font-bold">AUTONOMOUS_DROP</span>;
                </div>
                <div>
                  <span className="text-slate-600 mr-2">020</span>
                  &#125;
                </div>
              </div>
            </div>

            {/* Metric & Label */}
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#1D4ED8] mb-1">
                11.3 B
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-300">
                Attacks Prevented Inline
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}