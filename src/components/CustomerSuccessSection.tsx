// src/components/CustomerSuccessSection.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function CustomerSuccessSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  /* The clip is ~8 MB. Previously it carried `autoPlay` with no `preload`,
     so every visitor downloaded all of it during initial page load even
     though the section sits far below the fold. We now attach `src` only
     once the section is actually near the viewport, which keeps those bytes
     off the critical path entirely. */
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const videoUrl = "/assets/videos/customer-success.mp4";

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // No IntersectionObserver (older browsers) — just load it.
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Begin playback once the source has been attached.
  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [shouldLoad]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!shouldLoad) {
      setShouldLoad(true);
      return;
    }

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => undefined);
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
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2563EB]">
              Mission Delivery
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.15]">
              Federal and enterprise teams <br />
              build on{" "}
              <span className="text-[#1D4ED8]">Spectrunex</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              From FedRAMP and DoD DISA authorization to cybersecurity staffing, ITSM
              support, cloud migration, and hardware lifecycle management — Spectrunex
              delivers the people, process, and technology that keep critical missions
              running securely.
            </p>
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
          <div ref={containerRef} className="relative w-full pb-[56.25%] overflow-hidden">
            <video
              ref={videoRef}
              {...(shouldLoad ? { src: videoUrl } : {})}
              preload="none"
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
                  Inside Spectrunex
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