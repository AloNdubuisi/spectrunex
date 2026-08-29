import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1930",
          50: "#EEF2F8",
          100: "#D8E1EE",
          200: "#B1C3DD",
          300: "#8AA5CC",
          400: "#4C74A3",
          500: "#26497A",
          600: "#16305C",
          700: "#0F2247",
          800: "#0A1930",
          900: "#060F1D",
        },
        steel: {
          DEFAULT: "#1D5FCC",
          50: "#EAF1FE",
          100: "#CFE0FD",
          200: "#9FC0FA",
          300: "#6FA1F8",
          400: "#3F81F5",
          500: "#1D5FCC",
          600: "#164AA3",
          700: "#10367A",
        },
        slate: {
          25: "#FAFBFC",
          50: "#F5F7FA",
          100: "#E9EDF3",
          200: "#DCE3EC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,25,48,0.04), 0 8px 24px rgba(10,25,48,0.06)",
        "card-hover": "0 4px 12px rgba(10,25,48,0.08), 0 16px 32px rgba(10,25,48,0.10)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
