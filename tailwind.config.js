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
        'montaga': ['var(--font-montaga)', 'serif'],
        'cormorant': ['var(--font-cormorant-garamond)', 'serif'],
        'plus': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        'questrial': ['var(--font-questrial)', 'sans-serif'],
        swiss: ["Swiss721", "sans-serif"],
      },
    },
  },
  plugins: [],
}