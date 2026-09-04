import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pan: {
          orange: {
            DEFAULT: "#1D4ED8",
            hover: "#FF6F47",
            light: "#FF8A65",
            dark: "#D94118",
            subtle: "rgba(250, 88, 45, 0.12)",
            glow: "rgba(250, 88, 45, 0.4)",
          },
          dark: {
            DEFAULT: "#0B0E14",
            canvas: "#070A0F",
            surface: "#111722",
            card: "#151D2A",
            cardHover: "#1A2434",
            border: "#232F42",
            borderLight: "rgba(255, 255, 255, 0.1)",
          },
          cyan: {
            DEFAULT: "#00D2FF",
            glow: "#00E5FF",
            soft: "#8AD3DE",
            subtle: "rgba(0, 210, 255, 0.12)",
          },
          steel: {
            DEFAULT: "#2563EB",
            50: "#EFF6FF",
            100: "#DBEAFE",
            400: "#60A5FA",
            500: "#3B82F6",
            600: "#2563EB",
            700: "#1D4ED8",
          },
          gray: {
            850: "#1E293B",
            900: "#0F172A",
            950: "#020617",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-primary)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "radial-orange": "radial-gradient(circle at 50% 50%, rgba(250, 88, 45, 0.15) 0%, transparent 60%)",
        "radial-cyan": "radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.12) 0%, transparent 60%)",
        "gradient-platform": "linear-gradient(135deg, rgba(250, 88, 45, 0.1) 0%, rgba(0, 210, 255, 0.1) 100%)",
        "gradient-hero": "linear-gradient(to bottom right, #070A0F 0%, #0B0E14 50%, #111722 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        bounceSmooth: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-20px)" },
          "60%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", boxShadow: "0 0 10px rgba(250, 88, 45, 0.3)" },
          "50%": { opacity: "1", boxShadow: "0 0 25px rgba(250, 88, 45, 0.6)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        panBounce: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "45%": { transform: "translateY(-8px) rotate(0.5deg)" },
          "55%": { transform: "translateY(-5px) rotate(-0.5deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        bounceSmooth: "bounceSmooth 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        slideUp: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        scaleIn: "scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        panBounce: "panBounce 4.8s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
        "elastic": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;