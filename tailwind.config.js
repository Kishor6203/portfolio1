/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  
    theme: {
      extend: {
        colors: {
          ink: '#10111B',
          panel: '#171827',
          card: '#1C1D2B',
          violet: '#8B5CF6',
          lilac: '#A78BFA',
        },
  
        fontFamily: {
          sans: ['DM Sans', 'sans-serif'],
          display: ['Manrope', 'sans-serif'],
        },
      },
    },
  
    plugins: [],
  };