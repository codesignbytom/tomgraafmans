/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Satoshi", "sans-serif"],
        heading: ["Cabinet Grotesk", "sans-serif"],
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
        secondary: {
          50: "#fdf4ef",
          100: "#fae5da",
          200: "#f3c9b5",
          300: "#eba586",
          400: "#e27755",
          500: "#db512e",
          600: "#ce3f28",
          700: "#ab2f23",
          800: "#892823",
          900: "#6e2420",
          950: "#3b0f0f",
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
          maxWidth: "90rem",
          margin: "0 auto",
        },
      });
    },
  ],
};
