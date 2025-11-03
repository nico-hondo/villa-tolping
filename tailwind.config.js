// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre': ['var(--font-libre-baskerville)', 'serif'],
        'playfair': ['var(--font-playfair-display)', 'serif'],
      },
    },
  },
  plugins: [],
}