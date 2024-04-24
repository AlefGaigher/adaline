import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-primary': '#28ABE3',
        'blue-sencondary': '#19779F',
        'gray-primary': '#616163',
        'gray-secondary': '#F5F5F5',
        'black-primary': '#1D1D1B',
        'whatsapp': '#25D366',
        'white-smoke': '#f5f5f5',
      },
      maxWidth:{
        grid: '100%'
      },
      boxShadow: {
        '3xl': '0px 0px 10px -5px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [],
};
export default config;
