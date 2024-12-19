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
        ImageRoom: "url('/images/imageroom.png')",
        FeaturedProduct: "url('/images/chair.png')",
        Sofa: "url('/images/sofa.png')",
        Label: "url('/images/label.png')",
        Room: "url('/images/Room.png')",
        Light: "url('/images/light.png')",
        BadRoom: "url('/images/badroom.png')",
        WallRoom: "url('/images/wall.png')",
        RedSofa: "url('/images/redsofa.png')",
        Image: "url('/images/Image.png')",
        Rectangle: "url('/images/Rectangle.png')",
        Rectangle1: "url('/images/Rectangle1.png')",
        Plant1: "url('/images/Plant1.png')",
        Chair1: "url('/images/Chair1.png')",
        Tiles: "url('/images/Tiles.png')",
        Asgaard: "url('/images/Asgaard sofa.png')",
      },
    },
  },
  plugins: [],
};
export default config;
