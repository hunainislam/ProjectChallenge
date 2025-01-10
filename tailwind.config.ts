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
        Logo: "url('/images/logo.png')",
        Image: "url('/images/Image.png')",
        Rectangle: "url('/images/Rectangle.png')",
        Rectangle1: "url('/images/Rectangle1.png')",
      },
    },
  },
  plugins: [],
};
export default config;
