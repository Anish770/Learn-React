/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'lawerncium-gradient': 'linear-gradient(to bottom, #24243e, #302b63, #0f0c29)',
        'currency-cover-photo':`url('https://images.mktw.net/im-799640?width=600&height=417&pixel_ratio=1.5')`
      },
      screens:{
        'xs':'420px',
      }
    },
  },
  plugins: [],
}

