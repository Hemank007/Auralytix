/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0df2f2",
        "primary-dim": "#00b8c2",
        "background-light": "#f5f8f8",
        "background-dark": "#000000", 
        "surface-dark": "#080c0c",
        "glass-border": "rgba(0, 243, 255, 0.15)"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"]
      },
      boxShadow: {
        "glow": "0 0 20px rgba(0, 243, 255, 0.3)",
        "glow-sm": "0 0 10px rgba(0, 243, 255, 0.2)",
        "glow-intense": "0 0 30px rgba(0, 243, 255, 0.4)"
      },
      letterSpacing: {
        "widest-custom": "0.15em",
        "ultra-wide": "0.25em"
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
            '0%, 100%': { opacity: 0.6, filter: 'drop-shadow(0 0 15px rgba(13, 242, 242, 0.4))' },
            '50%': { opacity: 1, filter: 'drop-shadow(0 0 25px rgba(13, 242, 242, 0.7))' },
        },
        'float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
        },
        'glitch': {
            '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
            '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
            '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}