import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gallery: {
          bg: "var(--color-bg-primary)",
          card: "var(--color-bg-elevated)",
          secondary: "var(--color-bg-secondary)",
          text: "var(--color-text-primary)",
          sub: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          border: "var(--color-border-subtle)",
          "border-strong": "var(--color-border-medium)",
          accent: "var(--color-accent-primary)",
          warm: "var(--color-accent-warm)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "serif"],
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
      },
      spacing: {
        "sidebar-w": "var(--sidebar-width)",
        "content-w": "var(--content-width)",
        "header-h": "var(--header-height-mobile)",
        "section-gap": "var(--space-section-gap)",
        "content-pad": "var(--space-content-padding)",
        "grid-gap": "var(--space-grid-gap)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
