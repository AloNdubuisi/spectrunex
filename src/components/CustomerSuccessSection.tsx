// src/components/CustomerSuccessSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

export default function CustomerSuccessSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoUrl =
    "https://players.brightcove.net/1050259881001/GHupYS05h_default/index.html?videoId=6360711021112&autoplay=true&muted=true";

  return (
    <section className="relative overflow-hidden bg-[#070A0F] pt-24 pb-20 text-white selection:bg-[#FA582D] selection:text-white border-b border-white/5">
      {/* Background Ambience Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/3 h-[450px] w-[450px] rounded-full bg-[#FA582D]/8 blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-orange-950/20 blur-[140px]" />
      </div>

      <div className="container-page relative z-10">
        {/* Header Row with Title (Left) and See Testimonials (Right) */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.15]">
              Our customers are securing <br />
              their{" "}
              <span className="text-[#FA582D]">digital transformation</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Link
              href="/outcomes"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-[#FA582D] transition-colors"
            >
              <span>See testimonials</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>

        {/* ── Featured Widescreen Video Player Showcase ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0E14] shadow-2xl shadow-black/80 hover:border-[#FA582D]/30 transition-all duration-500"
        >
          {/* 16:9 Aspect Ratio Video Container */}
          <div className="relative w-full pb-[56.25%] overflow-hidden bg-black">
            <iframe
              src={videoUrl}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title="SLB (Schlumberger Limited) Optimizes Cybersecurity with Palo Alto Networks Integrated Platform"
              className="absolute inset-0 h-full w-full border-0 object-cover"
            />
          </div>

          {/* Bottom Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FA582D] via-[#F59E0B] to-[#FA582D] opacity-90" />
        </motion.div>
      </div>
    </section>
  );
}