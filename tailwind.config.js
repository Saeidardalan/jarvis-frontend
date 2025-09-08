/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#00ffff",
        iron: "#00bfff",
      },
      fontFamily: {
        iron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
