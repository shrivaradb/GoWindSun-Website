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
          DEFAULT: "#06111F",
          deep: "#030A14",
        },
        surface: {
          DEFAULT: "#0D1B2A",
          elevated: "#13263D",
          highlight: "#1A3250",
        },
        accent: {
          primary: "#2563EB",
          hover: "#3B82F6",
          glow: "rgba(37, 99, 235, 0.35)",
          cyan: "#06B6D4",
          emerald: "#10B981",
          amber: "#F59E0B",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          bright: "rgba(255, 255, 255, 0.16)",
          accent: "rgba(37, 99, 235, 0.4)",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          card: "rgba(13, 27, 42, 0.65)",
          hover: "rgba(255, 255, 255, 0.09)",
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
