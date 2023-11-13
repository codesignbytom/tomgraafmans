/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Satoshi", "sans-serif"],
        heading: ["EB Garamond", "serif"],
      },
      colors: {
        primary: {
          50: "#edfcf5",
          100: "#d3f8e4",
          200: "#aaf0cf",
          300: "#72e3b4",
          400: "#3acd94",
          500: "#16b37c",
          600: "#0a8c61",
          700: "#087453",
          800: "#095c43",
          900: "#094b39",
          950: "#042a20",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        spin_slow: "spin 6s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "90%",
          maxWidth: "80rem",
          margin: "0 auto",
        },
      });
    },
  ],
};
