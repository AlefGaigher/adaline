import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/company/*.{js,ts,jsx,tsx,mdx}",
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
        'title-card': '#667',
        'subtitle-card': '#999'
      }, 
      fontFamily:{
        'oswald': ['Oswald', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      maxWidth:{
        grid: '100%'
      },
      boxShadow: {
        '3xl': '0rem 0rem .625rem -0.3125rem rgba(0, 0, 0, 0.9)',
      },
      height: {
        '100': '31.25rem'
      },
      padding:{
        '100': '31.25rem'
      },
      margin: {
        '100': '31.25rem'
      }
    },
  },
  plugins: [],
};
export default config;
