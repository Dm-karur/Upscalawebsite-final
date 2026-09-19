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
        foreground: '#0f172a',
        primary: {
          DEFAULT: '#0066ff',
          hover: '#0052cc',
        },
        electric: {
          DEFAULT: '#0066FF',
          bright: '#0088FF',
          glow: '#38BDF8',
        },
        ice: {
          DEFAULT: '#E0F2FE',
          light: '#F0F9FF',
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
          DEFAULT: '#0B192C',
          dark: '#000B1E',
          light: '#132338',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
