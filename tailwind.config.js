/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F7",
        surface: "#FFFFFF",
        ink: "#1C1B18",
        muted: "#6E6A63",
        line: "#E8E5DF",
        accent: {
          DEFAULT: "#1D4ED8",
          dark: "#1E40AF",
          tint: "#EEF3FE",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
