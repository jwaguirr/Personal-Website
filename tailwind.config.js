/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "reddit": ["Reddit Mono", "sans-serif"]
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          }
        }
      },
      animation: {
        wave: 'wave 2s ease-in-out infinite',
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
}