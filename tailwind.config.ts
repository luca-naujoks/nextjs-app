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
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
        bounce600: 'bounce 1s infinite 600ms',
        bounce800: 'bounce 1s infinite 800ms',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(30%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'fuchsia-bottom': '0 10px 15px -3px rgba(112, 26, 117, 0.5), 0 4px 6px -2px rgba(112, 26, 117, 0.05)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
export default config;
