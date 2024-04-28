import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        upmd: "0px 0px 10px 5px rgba(0, 0, 0, 0.3)",
        inset: "inset 0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
      },
      gradientColorStops: {
        "header-bottom": "linear-gradient(to bottom, #B37FD3 20%, #4A5FA8 70%, #342751 10%);"
        headerColor: {
          start: "#B37FD3 var(10)",
          center: "#4A5FA8 var(--tw-gradient-via-position)",
          end: "#342751 var(--tw-gradient-to-position)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
