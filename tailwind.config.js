/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: "#f4f3ec", // Tu color de fondo actual
          yellow: "#FFE600",
          coral: "#FF5757",
          purple: "#7B61FF",
          mint: "#00E599",
          dark: "#1A1A1A",
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'flat': '4px 4px 0px #1A1A1A',
        'flat-sm': '2px 2px 0px #1A1A1A',
      }
    },
  },
  plugins: [],
}