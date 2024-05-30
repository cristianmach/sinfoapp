import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#787FF6",
        darkBg: "#131424",
        white: '#ffffff'
      },
      backgroundImage: {
       "gradient-cover": 
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(69,9,121,1) 35%, rgba(0,212,255,1) 100%);", //color para el background
       "gradient-white": 
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(167,173,221,1) 100%);",
       "gradient-green": 
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(167,221,184,1) 100%);",
       "gradient-yellow": 
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(221,217,167,1) 100%);",
       "gradient-purple": 
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(221,167,216,1) 100%);",
       'paz-img': "url('/img/paz.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
