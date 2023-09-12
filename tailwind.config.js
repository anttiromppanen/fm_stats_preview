/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        userMainBG: "hsl(233, 47%, 7%)",
        userCardBG: "hsl(244, 38%, 16%)",
        userViolet: "hsl(277, 64%, 61%)",
        userWhite: "hsl(0, 0%, 100%)",
        userMainParagraphWhite: "hsla(0, 0%, 100%, 0.75)",
        userStatHeadingsWhite: "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
}