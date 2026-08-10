import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFFFFF",
          deep: "#F8FAFC",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#F1F5F9",
          highlight: "#E2E8F0",
        },
        accent: {
          primary: "#059669",
          hover: "#047857",
          glow: "rgba(5, 150, 105, 0.2)",
          cyan: "#0284C7",
          emerald: "#10B981",
          amber: "#D97706",
        },
        text: {
          primary: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
        },
        border: {
          DEFAULT: "#E2E8F0",
          bright: "#CBD5E1",
          accent: "rgba(5, 150, 105, 0.4)",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.9)",
          card: "rgba(255, 255, 255, 0.95)",
          hover: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        btn: "9999px",
        card: "24px",
        section: "32px",
      },
      boxShadow: {
        enterprise: "0 20px 60px rgba(0, 0, 0, 0.4)",
        "glow-blue": "0 0 40px rgba(37, 99, 235, 0.25)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.25)",
        "glow-emerald": "0 0 40px rgba(16, 185, 129, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 70%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "hero-glow": "radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.18) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
