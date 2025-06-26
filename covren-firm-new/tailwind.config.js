/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sovereign-black': '#000000',
        'sovereign-green': '#10b981',
        'sovereign-emerald': '#34d399',
        'sovereign-red': '#ef4444',
        'sovereign-yellow': '#f59e0b',
      },
    },
  },
  plugins: [],
}
