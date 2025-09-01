import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "jelly-bounce": "jellyBounce 0.6s ease-in-out",
        "pulse-wave": "pulseWave 1s infinite ease-out",
        "pulse-wave-delayed": "pulseWave 1s infinite ease-out 1s",
      },
      keyframes: {
        jellyBounce: {
          "0%": { transform: "scale(1, 1)" },
          "30%": { transform: "scale(1.15, 0.85)" },
          "50%": { transform: "scale(0.9, 1.1)" },
          "70%": { transform: "scale(1.05, 0.95)" },
          "100%": { transform: "scale(1, 1)" },
        },
        pulseWave: {
          "0%": {
            transform: "translate(-50%, -50%) scaleX(0.9) scaleY(0.9)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(-50%, -50%) scaleX(1) scaleY(1.1)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
