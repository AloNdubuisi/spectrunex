// src/components/ScrollReveal.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  speed?: "fast" | "normal" | "slow";
  animation?: "fade-up" | "fade-in" | "zoom-in" | "slide-left" | "slide-right";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  speed = "normal",
  animation = "fade-up",
}: ScrollRevealProps) {
  const durationMap = {
    fast: 0.15,
    normal: 0.25,
    slow: 0.5,
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "fade-up" ? 25 : 0,
      x: animation === "slide-left" ? -25 : animation === "slide-right" ? 25 : 0,
      scale: animation === "zoom-in" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: durationMap[speed],
        delay: delay,
        // Added "as const" so TypeScript treats this array as a strict tuple for Framer Motion
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-40px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}