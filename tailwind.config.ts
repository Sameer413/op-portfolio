import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        SansRegular: ["var(--Font-FiraSans)"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // sm: '640px',
        // md: '768px',
        // lg: ' 1024px',
        // xl: '1280px',
      },
      colors: {
        dark: {
          name: "dark",
          body: "#1D1D1D",
          text: "#FFFFFF",
          dark: "#000000",
          secondaryText: "#8D8D8D",
          accentColor: "#E3405F",
          accentBright: "#FC1056",
          projectCard: "#292A2D",
          skinColor: "#F7B799",
          skinColor2: "#FCB696",
          imageDark: "#292A2D",
          imageClothes: "#000000",
          avatarMisc: "#212121",
          avatarShoes: "#2B2B2B",
        },
        light: {
          name: "light",
          body: "#FFFFFF",
          text: "#343434",
          dark: "#000000",
          secondaryText: "#7F8DAA",
          accentColor: "#E3405F",
          accentBright: "#FC1056",
          projectCard: "#DCE4F2",
          skinColor: "#F7B799",
          skinColor2: "#FCB696",
          imageDark: "#dce4f2",
          imageClothes: "#dce4f2",
          avatarMisc: "#e9ecf2",
          avatarShoes: "#ccd2e3",
        }
      }
    },
    boxShadow: {
      '3xl': '0 5px 15px',
      'projectCard': 'rgba(0, 0, 0, 0.2) 0px 10px 30px -15px'
    }
  },
  plugins: [],
};
export default config;
