/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "391px",
        "3xl": "1800px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradient:
          "linear-gradient(0deg, rgba(160, 124, 206, 0.10) 0%, rgba(160, 124, 206, 0.10) 100%)",
        primary_1: "#4f88d4",
        primary_2: "#ae47e7",
        primary_3: "#8e68ed",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      borderWidth: {
        spinner: "4px",
      },
    },
  },
  plugins: [],
};
