/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "#FAFAFA",
        highlight: "#FFC225",
        darkBrown: "#2E1E12",
        gradient1: "#C82A88",
        gradient2: "#574C9E",
      },

      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out 1",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        amarante: ["Amarante", "sans-serif"],
        abril: ["Abril Fatface", "sans-serif"],
      },
    },
  },
  plugins: [],
}
