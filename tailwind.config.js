/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'SpaceGrotesk':['Space Grotesk', 'sans-serif'],
        'satisfy':['Satisfy','sans-serif'],
        'lobster':['Lobster Two', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}