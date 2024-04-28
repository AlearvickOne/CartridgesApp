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
        headerColor: {
          --tw-gradient-from: #bef264 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(190 242 100 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
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
