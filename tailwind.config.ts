import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d1117",
          soft: "#11161d",
          panel: "#161b22",
          elevated: "#1c222b",
        },
        border: {
          DEFAULT: "#242b36",
          subtle: "#1c222b",
        },
        accent: {
          DEFAULT: "#4da3ff",
          soft: "#2c6fc9",
        },
        muted: "#8b96a5",
        text: {
          DEFAULT: "#e6edf3",
          dim: "#9aa7b6",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
