/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.16 0.012 240)",
        foreground: "oklch(0.96 0.005 240)",
        surface: "oklch(0.19 0.013 240)",
        primary: {
          DEFAULT: "oklch(0.74 0.18 158)",
          glow: "oklch(0.82 0.16 158)",
        },
        "accent-blue": "oklch(0.72 0.17 230)",
        border: "oklch(0.28 0.015 240)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
