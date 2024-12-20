/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        mainl: '70px',
      },
      colors: {
        'hero-header-blue': '#114647',
        'button-blue': '#10C5C9',
        'card-bg': '#fff9e9',
        'card-header': '#B1701B',
        'card-text': '#794D12',
      },
    },
  },
  plugins: [],
};
