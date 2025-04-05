/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#364156",
        secondary: "#214E34",
        button: "#A9A9A9",
        font: "#DFF8EB",
        accent: "#011638",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontWeight: {
        light: 200,
      },
    },
  },
  plugins: [],
};
