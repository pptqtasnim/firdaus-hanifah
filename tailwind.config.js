/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgCoverImage: "url('/BgCover.jpeg')",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#2A528A",
          },
        },
        dark: {
          colors: {
            primary: "#2A528A",
          },
        },
      },
      addCommonColors: true,
    }),
    require("daisyui"),
  ],
};
