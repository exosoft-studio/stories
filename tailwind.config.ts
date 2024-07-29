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
        color1 : '#100f2a',
        color2: '#f1e9da',
        color3 : '#313e50',
        color4: '#3a435e'
      }
    },
  },
  plugins: [],
};
export default config;
