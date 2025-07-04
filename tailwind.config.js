/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      boxShadow: {
        'navbarShadow': '3px 3px 3px 0px rgba(0, 0, 0, 0.25)',
        '2xl': '25px 25px 50px 0px rgba(0, 0, 0, 0.25)',
        'pink-glow': '0 0 20px rgba(252, 232, 247, 0.6)',
        'pink-glow-lg': '0 0 40px rgba(252, 232, 247, 0.8)',
      },
      animation: {
        'ping-fast': 'ping 0.5s linear',
        'burst': 'burst 0.4s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite', // 🆕 slow pink animation
        'pink-pulse': 'pink-pulse 2s ease-in-out infinite',
        'pink-float': 'pink-float 6s ease-in-out infinite',
        'pink-shimmer': 'pink-shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        burst: {
          '0%': { opacity: '0.6', transform: 'scale(0.5)' },
          '100%': { opacity: '0', transform: 'scale(2)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pink-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(252, 232, 247, 0.6)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(252, 232, 247, 0.9)',
            transform: 'scale(1.05)'
          },
        },
        'pink-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pink-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-300': '300% 300%',
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(45deg, #fce8f7, #fdf2f9, #fce8f7)',
        'pink-gradient-radial': 'radial-gradient(circle, #fce8f7, #fdf2f9)',
        'pink-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
      },
      colors: {
        //--------------------------------Custom Colors------------------------------------
        backgroundColor: '#F7F6F6',
        greyLine: '#D6D6D6',
        primaryPink: '#FA005E',
        primaryBackground: '#F7F6F6',
        accent: '#ffc107',
        grad1: '#ffe6d5',
        grad2: '#F97C54',
        // Additional pink shades - Light and Soft
        'pink-light': '#fce8f7',
        'pink-medium': '#fdf2f9',
        'pink-dark': '#faf0f8',
        'pink-pale': '#fef7fc',
        'pink-hot': '#fce8f7',
        'pink-deep': '#f9e0f2',
        'pink-soft': '#fdf2f9',
        'pink-ultra-light': '#fef7fc',
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      fontSize: {
        '55': '55rem',
      },
      opacity: {
        '80': '.8',
      },
      zIndex: {
        '2': 2,
        '3': 3,
      },
      inset: {
        '-100': '-100%',
        '-225-px': '-225px',
        '-160-px': '-160px',
        '-150-px': '-150px',
        '-94-px': '-94px',
        '-50-px': '-50px',
        '-29-px': '-29px',
        '-20-px': '-20px',
        '25-px': '25px',
        '40-px': '40px',
        '95-px': '95px',
        '145-px': '145px',
        '195-px': '195px',
        '210-px': '210px',
        '260-px': '260px',
      },
      height: {
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px',
      },
      maxHeight: {
        '860-px': '860px',
      },
      minWidth: {
        '140-px': '140px',
        '48': '12rem',
      },
      backgroundSize: {
        full: '100%',
      },
    },
  },
  plugins: [],
}
