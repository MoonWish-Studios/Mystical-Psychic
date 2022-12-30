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
        textPrimary: "#F1E4F8",
        highlight: "#FFC225",
        darkBrown: "#2E1E12",
        gradient1: "#C82A88",
        gradient2: "#574C9E",
      },
    },
  },
  plugins: [],
}
