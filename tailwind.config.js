/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#0f172a', // Dark navy text
        primary: {
          DEFAULT: '#0066ff', // Vibrant blue from "Let's talk" and "Ready for what's next"
          hover: '#0052cc',
        },
        secondary: {
          DEFAULT: '#f8fafc',
          hover: '#f1f5f9',
        },
        muted: {
          DEFAULT: '#64748b',
        },
        border: '#e2e8f0',
        navy: {
          DEFAULT: '#0a192f', // Dark background for the system card
          light: '#112240',
        }
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
