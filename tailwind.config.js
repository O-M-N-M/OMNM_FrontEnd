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
        gray11: "rgba(251, 251, 251, 1)",
        gray2: "#CCCCCC",
        gray3: "#8F9295",
        gray4: "#8B95A1",
        gray5: "#FBFBFB",
        black: "#383838",
        red: "#E33A3A",
        green: "#4CAF50",
        accent1: "#4B99EB",
        accent2: "#1CDDAD",
        accent3: "#E9F4FF",
        sky0: "#F0F9FF",
        sky1: "#E0F2FE"
      },
      spacing: {
        '68': '17rem'
      },
      fontWeight: {
        'bold': 700,
        'medium': 500,
        'regular': 400
      },
      fontSize: {
        'xxs': ['10px', '16px'],
        'h1': ['56px', '70.11px'],
        'h2': ['48px', '60.1px'],
        'h3': ['36px', '45.07px'],
        'h4': ['28px', '35.06px'],
        'b1': ['24px', '30.05px'],
        'b2': ['20px', '25.04px'],
        'b3': ['18px', '22.54px'],
        'c1': ['16px', '20.03px'],
        'c2': ['12px', '15.02px'],
        'button': ['22px', '27.54px']
      },
      width: {
        '100': '26rem'
      },
      backgroundImage: (theme) => ({
        'main-background': "url('/mainBackground.png')",
        'main-move-background': "url('/mainBackground.gif')",
        'landing-last-background': "url('/landingLastBackground.png')"
      })
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
};
