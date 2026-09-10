// src/components/CustomerSuccessSection.tsx
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

export default function CustomerSuccessSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = "/assets/videos/customer-success.mp4";
  const posterUrl = "/assets/img/customer-success-poster.jpg";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative overflow-hidden text-white selection:text-white border-b border-white/5 py-16 sm:py-20">
      <div className="container-page relative z-10">
        {/* Header Row with Title (Left) and See Testimonials (Right) */}
        <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.15]">
              Our customers are securing <br />
              their{" "}
              <span className="text-[#1D4ED8]">digital transformation</span>
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
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-[#1D4ED8] transition-colors"
            >
              <span>See testimonials</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>

        {/* ----- Featured Widescreen Video Player Showcase ------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 bg-black"
        >
          {/* 16:9 Aspect Ratio Video Container */}
          <div className="relative w-full pb-[56.25%] overflow-hidden">
            <video
              ref={videoRef}
              src={videoUrl}
              poster={posterUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover block"
            />

            {/* Gradient Overlay for Better Control Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Video Controls Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md transition hover:bg-[#1D4ED8] hover:border-[#1D4ED8]"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
                </button>
                <div className="hidden sm:block text-xs font-semibold tracking-wide text-slate-200 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  Featured Case Study Showcase
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md transition hover:bg-[#1D4ED8] hover:border-[#1D4ED8]"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}