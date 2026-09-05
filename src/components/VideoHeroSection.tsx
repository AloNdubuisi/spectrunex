// src/components/VideoHeroSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* Reusable video hero — same dark canvas, gradient scrims, and CTA pattern
   as the photo-based Hero.tsx, but with a looping muted background video
   instead of a static image. Built as its own component (rather than a
   variant prop on Hero.tsx) so product/solution pages can drop it in with
   their own headline, copy, and video asset.

   Accessibility / performance:
   - Video is decorative (aria-hidden, no captions track needed) since the
     same message is carried in the text overlay, not narrated audio.
   - Respects prefers-reduced-motion: the video simply doesn't autoplay for
     users who've asked for reduced motion, and a poster frame is shown
     instead. A visible play/pause control is included either way so any
     user can stop the motion themselves — don't rely on the media query
     alone.
   - `poster` is required so there's a solid frame before the video can
     play, and a graceful fallback if the video fails to load entirely. */

type VideoHeroSectionProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  copy: string;
  primaryCta?: { label: string; href: string };
  /* undefined -> use the default "platform tour" link; null -> render no
     secondary CTA at all (some pages only want the one pill button). */
  secondaryCta?: { label: string; href: string } | null;
  videoSrc: string;
  posterSrc: string;
};

export default function VideoHeroSection({
  eyebrow = "Spectrunex Platform",
  heading = (
    <>
      One platform. <br />
      <span className="text-blue-500">Every layer secured.</span>
    </>
  ),
  copy = "Watch how Spectrunex unifies network, cloud, and endpoint defenses into a single, AI-driven security operations experience.",
  primaryCta = { label: "Book a Consultation", href: "/contact" },
  secondaryCta = { label: "See the platform tour", href: "/platforms" },
  videoSrc,
  posterSrc,
}: VideoHeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#050B14] font-sans text-white">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{ objectPosition: "center" }}
          poster={posterSrc}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/70 to-[#050B14]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/70 via-transparent to-[#050B14]/30" />
      </div>

      <div className="container-page relative z-10">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              {eyebrow}
            </span>
            <h1 className="mb-6 font-display text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-10 max-w-xl text-lg text-slate-300">{copy}</p>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
              >
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white underline underline-offset-4 decoration-white/70 transition hover:text-blue-300 hover:decoration-blue-300"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Play/pause control — bottom-right, always available regardless of
          why the video isn't playing (reduced motion, autoplay blocked,
          or the user just wants it off). */}
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-8 right-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-blue-400/50 hover:bg-white/20"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" strokeWidth={2.5} />
        ) : (
          <Play className="h-4 w-4 translate-x-[1px]" strokeWidth={2.5} />
        )}
      </button>
    </section>
  );
}