/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./screen/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#__next",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        gray0: "#DBDBDB",
        gray1: "#9B9EA1",
        gray2: "#CCCCCC",
        gray3: "#8F9295",
        black: "#383838",
        red: "#E33A3A",
        green: "#4CAF50",
        accent1: "#4B99EB",
        accent2: "#1CDDAD",
        accent3: "#E9F4FF",
        sky0: "#F0F9FF",
      },
      spacing: {
        '68': '17rem'
      }
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
};
