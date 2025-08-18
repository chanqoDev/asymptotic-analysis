/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          500: "#3b82f6",   // main blue
          600: "#2563eb",   // darker hover
          700: "#1d4ed8",
        },
        secondary: {
          100: "#fef9c3",
          500: "#facc15",   // golden highlight
          600: "#eab308",
        },
        neutral: {
          100: "#f3f4f6",
          500: "#6b7280",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],   // primary font
        display: ["'Merriweather'", "serif"], // nice headings
      },
    },
  },
  plugins: [],
};
