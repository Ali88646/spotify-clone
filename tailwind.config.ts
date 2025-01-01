import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, rgba(54,25,170,1) 0%, rgba(132,107,232,1) 35%, rgba(132,107,232,1) 69%, rgba(200,255,187,0.7) 87%)",
      },
    },
  },
  plugins: [],
};
export default config;
