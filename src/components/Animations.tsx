// src/components/Animations.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

// Bounce animation variants
export const bounceVariants = {
  initial: { y: 0 },
  bounce: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  bounceHard: {
    y: [0, -20, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatDelay: 1.5,
    },
  },
  bounceSoft: {
    y: [0, -8, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

// Pulse animation variants
export const pulseVariants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
  pulseGlow: {
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 0px rgba(250, 88, 45, 0)",
      "0 0 20px rgba(250, 88, 45, 0.5)",
      "0 0 0px rgba(250, 88, 45, 0)",
    ],
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
};

// Float animation variants
export const floatVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
  floatSlow: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
  floatFast: {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
};

// Shake animation variants
export const shakeVariants = {
  shake: {
    x: [0, -5, 5, -5, 5, 0],
    rotate: [0, -1, 1, -1, 1, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

// Hover animation variants
export const hoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
  hoverLift: {
    y: -12,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.4,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
  hoverScale: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  },
};

// Bounce Component
interface BounceProps {
  children: ReactNode;
  type?: "normal" | "hard" | "soft";
  className?: string;
}

export function Bounce({ children, type = "normal", className = "" }: BounceProps) {
  const variantKey = type === "hard" ? "bounceHard" : type === "soft" ? "bounceSoft" : "bounce";
  
  return (
    <motion.div
      variants={bounceVariants}
      initial="initial"
      animate={variantKey}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Pulse Component
interface PulseProps {
  children: ReactNode;
  type?: "normal" | "glow";
  className?: string;
}

export function Pulse({ children, type = "normal", className = "" }: PulseProps) {
  const variantKey = type === "glow" ? "pulseGlow" : "pulse";
  
  return (
    <motion.div
      variants={pulseVariants}
      initial="initial"
      animate={variantKey}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Float Component
interface FloatProps {
  children: ReactNode;
  speed?: "normal" | "slow" | "fast";
  className?: string;
}

export function Float({ children, speed = "normal", className = "" }: FloatProps) {
  const variantKey = speed === "slow" ? "floatSlow" : speed === "fast" ? "floatFast" : "float";
  
  return (
    <motion.div
      variants={floatVariants}
      initial="initial"
      animate={variantKey}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hover Component
interface HoverProps {
  children: ReactNode;
  type?: "normal" | "lift" | "scale";
  className?: string;
}

export function Hover({ children, type = "normal", className = "" }: HoverProps) {
  const variantKey = type === "lift" ? "hoverLift" : type === "scale" ? "hoverScale" : "hover";
  
  return (
    <motion.div
      whileHover={variantKey}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Shake Component
interface ShakeProps {
  children: ReactNode;
  trigger?: boolean;
  className?: string;
}

export function Shake({ children, trigger = false, className = "" }: ShakeProps) {
  return (
    <motion.div
      animate={trigger ? "shake" : "initial"}
      variants={shakeVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated Gradient Border
interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function AnimatedBorder({ children, className = "", speed = 3 }: AnimatedBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute -inset-1 rounded-lg"
        style={{
          background: `linear-gradient(90deg, #FA582D, #00D2FF, #FA582D)`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative bg-[#070A0F] rounded-lg p-6">
        {children}
      </div>
    </div>
  );
}

// Animated Counter with Bounce
interface AnimatedCounterBounceProps {
  value: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounterBounce({ value, duration = 2, className = "" }: AnimatedCounterBounceProps) {
  return (
    <motion.span
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "backOut",
      }}
    >
      {value.toLocaleString()}
    </motion.span>
  );
}

// Animated Progress with Pulse
interface AnimatedProgressPulseProps {
  value: number;
  max?: number;
  color?: string;
  className?: string;
}

export function AnimatedProgressPulse({ value, max = 100, color = "pan-orange", className = "" }: AnimatedProgressPulseProps) {
  const width = (value / max) * 100;
  
  return (
    <div className={`h-2 rounded-full bg-white/10 overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full rounded-full bg-${color} relative`}
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}

// Typewriter Effect
interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export function Typewriter({ text, speed = 50, className = "" }: TypewriterProps) {
  return (
    <motion.span
      className={className}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        duration: text.length * (speed / 1000),
        ease: "linear",
      }}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "inline-block",
      }}
    >
      {text}
    </motion.span>
  );
}