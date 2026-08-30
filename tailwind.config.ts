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
            DEFAULT: "#FA582D",
            hover: "#FF6F47",
            light: "#FF8A65",
            dark: "#D94118",
            subtle: "rgba(250, 88, 45, 0.12)",
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
        },
      },
      fontFamily: {
        sans: ["var(--font-primary)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "radial-orange": "radial-gradient(circle at 50% 50%, rgba(250, 88, 45, 0.15) 0%, transparent 60%)",
        "radial-cyan": "radial-gradient(circle at 50% 50%, rgba(0, 210, 255, 0.12) 0%, transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;