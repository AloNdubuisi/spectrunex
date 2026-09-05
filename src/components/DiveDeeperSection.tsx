// src/components/DiveDeeperSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* Replicates the reference's "Dive Deeper" module: a fanned stack of video
   preview cards with prev/next arrows, paired with a text panel that swaps
   per slide.

   Poster images removed per request — every card is now just a <video>
   element. Only the front/active one plays; the others sit paused,
   showing their first frame as a static preview with no extra image asset
   needed. Playback is driven explicitly via refs (video.play()/.pause() in
   a useEffect keyed on `active`) rather than the `autoPlay` attribute —
   toggling `autoPlay` on a <video> that's already mounted doesn't actually
   make the browser (re)start playback, so relying on the attribute alone
   meant a newly-active video wouldn't reliably start when clicked to the
   front. Calling .play()/.pause() directly makes every transition work
   the same way regardless of which slide was active before.

   Every card in the stack is clickable, not just the arrow buttons:
   clicking the active (front) video advances to the next slide, same as
   the right arrow; clicking a card further back in the stack jumps
   straight to that slide.

   Only the first slide's copy came from your screenshot ("Protect Your
   Entire Network" / "See and safeguard all connections..."). The stack
   depth in the reference looks like ~5 cards, so four more slide slots are
   stubbed with bracketed placeholder copy — fill in real headline/body/CTA
   text for those as you go; the carousel mechanics already work for all 5.

   Video paths are placeholders under ./assets/videos/ as you asked — drop
   your actual files in at those five paths (dive-deeper-1.mp4 through
   -5.mp4).

   One brand-consistency change, same as every other section: the
   reference's warm gold/amber glow and CTA button are recolored to
   Spectrunex's blue rather than introducing a second accent hue. */

type DiveSlide = {
  id: string;
  video: string;
  kicker: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const slides: DiveSlide[] = [
  {
    id: "protect-network",
    video: "./assets/videos/dive-deeper-1.mp4",
    kicker: "Protect Your Entire Network",
    headline: "See and safeguard all connections.",
    body: "Secure data, devices, applications, and workloads consistently wherever they live, whether on premises, in the cloud, or in remote locations. Consolidate and manage protection seamlessly across every environment.",
    ctaLabel: "Secure everything",
    ctaHref: "/contact",
  },
  {
    id: "slide-2",
    video: "./assets/videos/dive-deeper-2.mp4",
    kicker: "ADOPT AI SECURELY",
    headline: "Get consistent visibility and security",
    body: "Unify network security with the Strata Network Security Platform—our Hybrid Mesh Firewall combining hardware, virtual, cloud-native, and firewall-as-a-service deployments with shared policy, automation, and threat prevention across all environments.",
    ctaLabel: "Learn more",
    ctaHref: "/contact",
  },
  {
    id: "slide-3",
    video: "./assets/videos/dive-deeper-3.mp4",
    kicker: "SECURE THE FUTURE OF WORK",
    headline: "Work without limits, defend without doubt.",
    body: "[Add real copy for this slide once you have it.]",
    ctaLabel: "Learn more",
    ctaHref: "/contact",
  },
  {
    id: "slide-4",
    video: "./assets/videos/dive-deeper-4.mp4",
    kicker: "PREVENT THREATS IN REAL TIME",
    headline: "Stop AI-Powered Threats in Their Tracks.",
    body: "Secure the future of work with AI-powered Prisma SASE. The industry’s most comprehensive SASE solution protects all users, apps, data and devices with best-in-class security, an exceptional user experience and resilient, streamlined operations.",
    ctaLabel: "Learn more",
    ctaHref: "/contact",
  },
  {
    id: "slide-5",
    video: "./assets/videos/dive-deeper-5.mp4",
    kicker: "UNIFY ALL FIREWALLS",
    headline: "Get consistent visibility and security",
    body: "Unify network security with the Strata Network Security Platform—our Hybrid Mesh Firewall combining hardware, virtual, cloud-native, and firewall-as-a-service deployments with shared policy, automation, and threat prevention across all environments.",
    ctaLabel: "Learn more",
    ctaHref: "/contact",
  },
  {
    id: "slide-6",
    video: "./assets/videos/dive-deeper-6.mp4",
    kicker: "PREVENT THREATS IN REAL TIME",
    headline: "Stop AI-Powered Threats in Their Tracks.",
    body: "Stay ahead of sophisticated cyberattacks. Stop known, unknown and zero-day threats with confidence through real-time, AI-powered analysis of network traffic.",
    ctaLabel: "Learn more",
    ctaHref: "/contact",
  },
];

const MAX_VISIBLE_DEPTH = 6;

export default function DiveDeeperSection() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + slides.length) % slides.length);
  };

  // Explicitly drive playback on every change of `active` — see the note
  // above on why the `autoPlay` attribute alone isn't reliable here.
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === active) {
        const playPromise = video.play();
        if (playPromise !== undefined) playPromise.catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1830] via-[#0A0D14] to-[#050505] py-24 text-white font-sans lg:py-28">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <p className="mb-16 text-2xl font-bold uppercase tracking-[0.15em] text-slate-200 sm:text-3xl">
            Dive Deeper
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Fanned video stack */}
          <ScrollReveal speed="fast" animation="zoom-in">
            <div className="relative mx-auto h-[340px] w-full max-w-[440px] sm:h-[400px] lg:h-[460px]">
              {slides.map((s, idx) => {
                let depth = idx - active;
                if (depth < 0) depth += slides.length;
                const hidden = depth > MAX_VISIBLE_DEPTH;
                const isActive = depth === 0;

                return (
                  <motion.button
                    key={s.id}
                    type="button"
                    onClick={() => (isActive ? go(1) : setActive(idx))}
                    aria-label={isActive ? "Play next" : `Jump to slide ${idx + 1}`}
                    className="absolute inset-0 cursor-pointer overflow-hidden shadow-2xl"
                    style={{ zIndex: slides.length - depth }}
                    animate={{
                      x: -depth * 34,
                      y: -depth * 28,
                      rotate: -depth * 3.5,
                      scale: 1 - depth * 0.035,
                      opacity: hidden ? 0 : 1 - depth * 0.14,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                      }}
                      src={s.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </motion.button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Text panel */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  {slide.kicker}
                </p>
                <h3 className="mb-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {slide.headline}
                </h3>
                <p className="mb-8 max-w-md text-base leading-relaxed text-slate-300">
                  {slide.body}
                </p>
                <Link
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-bold text-[#050B14] transition hover:bg-blue-400"
                >
                  {slide.ctaLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="mt-14 flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-blue-400 hover:text-blue-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-blue-400 hover:text-blue-300"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}