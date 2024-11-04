import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",

        'verde': {
   50: '#001a11',
   100: '#003321',
   200: '#004d32',
   300: '#009963',
   400: '#00cc85',
   500: '#00ffa6',
   600: '#33ffb8',
   700: '#66ffc9',
   800: '#99ffdb',
   900: '#ccffed',
   950: '#e5fff6',
 },

        'verdedos': {
   50: '#0b1307',
   100: '#16250e',
   200: '#2d4a1c',
   300: '#437029',
   400: '#599537',
   500: '#70ba45',
   600: '#8cc86a',
   700: '#a9d68f',
   800: '#c6e3b5',
   900: '#e2f1da',
   950: '#F9F6E9',
 },

 'hueso': {
   50: '#151105',
   100: '#29230a',
   200: '#524614',
   300: '#7b681e',
   400: '#a48b28',
   500: '#cdae32',
   600: '#d7be5b',
   700: '#e1ce84',
   800: '#ebdfad',
   900: '#f5efd6',
   950: '#faf7ea',
 },

        Primario: "#0D6E3F",
        Fondo: "#F9F6E9",
        Texto: "#01703B",
        Secundario: "#FDF7F7",
        Acento: "#5DFF00",
        Hueso: "#F5EFD7",
      },
    },
  },
  plugins: [],
};
export default config;
