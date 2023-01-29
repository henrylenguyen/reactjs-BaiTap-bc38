/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        bookedColor: "#FACC15",
        choosingColor: "#FB01D4",
        normalColor: "#0E16DF",
        vipColor: "#DF0E0E",
      },
    },
  },
  plugins: [],
};
