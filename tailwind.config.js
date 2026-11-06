/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        emerald: {
          DEFAULT: '#00ff87',
          mint: '#10b981',
          glow: '#34d399',
          dark: '#059669',
          deep: '#064e3b',
        },
        onyx: {
          bg: '#07080b',
          card: '#0e1118',
          border: '#1a202c',
          subtle: '#141822',
        },
        forest: {
          DEFAULT: '#00ff87',
          light: '#34d399',
          dark: '#059669',
        },
        rust: {
          DEFAULT: '#00ff87',
          light: '#34d399',
        },
        gold: {
          DEFAULT: '#ffffff',
          light: '#f4f4f5',
        },
        paper: {
          DEFAULT: '#ffffff',
          card: '#0e1118',
          2: '#121620',
          3: '#181d2a',
        },
        night: {
          bg: '#07080b',
          card: '#0e1118',
          border: '#1a202c',
          text: '#ffffff',
          muted: '#94a3b8',
        }
      }
    },
  },
  plugins: [],
}
