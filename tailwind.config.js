/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ranch: {
          50: '#fdf8ef',
          100: '#faefd5',
          200: '#f4dcaa',
          300: '#edc374',
          400: '#e5a43c',
          500: '#de8d1f',
          600: '#c77116',
          700: '#a55515',
          800: '#864419',
          900: '#6e3917',
          950: '#3b1b09',
        },
        sage: {
          50: '#f4f7f1',
          100: '#e5ebde',
          200: '#ccd8bf',
          300: '#a9bd97',
          400: '#87a170',
          500: '#688553',
          600: '#516940',
          700: '#405334',
          800: '#35432c',
          900: '#2d3926',
          950: '#161e12',
        },
        cream: {
          50: '#fefdf8',
          100: '#fdf9ed',
          200: '#faf1d4',
          300: '#f5e4af',
          400: '#efd183',
          500: '#e8ba57',
          600: '#d9a03a',
          700: '#b5802e',
          800: '#92652c',
          900: '#775327',
          950: '#412b12',
        },
        earth: {
          50: '#f9f6f3',
          100: '#f0e9e1',
          200: '#e0d0c1',
          300: '#ccb19b',
          400: '#b78f74',
          500: '#a87759',
          600: '#9b654d',
          700: '#815141',
          800: '#6a433a',
          900: '#573931',
          950: '#2e1c19',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}