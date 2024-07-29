import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1 : '#3a435e',
        color2: '#fffefb',
        color3 : '#B4CEE6',
        color4: '#c7def3'
      }
    },
  },
  plugins: [],
};
export default config;
