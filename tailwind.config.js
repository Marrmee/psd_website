/** @type {import('tailwindcss').Config} */
// https://uicolors.app/edit?sv1=blue:50-f1f5ff/100-e6edff/200-d0ddff/300-aabeff/400-7a93ff/500-455fff/600-1f32ff/700-0b1dee/800-0a19cd/900-0b17a7/950-031072
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['var(--font-proximaNova)'],
        proximaBold: ['var(--font-proximaNovaBold)'],
        proximaSemiBold: ['var(--font-proximaNovaSemiBold)'],
        proximaItalic: ['var(--font-proximaNovaItalic)'],
      },
      screens: {
        'sm+': '640px',
        'md+': '896px',
        'lg+': '1152px',
        'xl+': '1445px',
      },
      colors: {
        seaBlue: {
          50: '#f1f5ff',
          100: '#e6edff',
          200: '#d0ddff',
          300: '#aabeff',
          400: '#7a93ff',
          500: '#455fff',
          600: '#1f32ff',
          700: '#0b1dee',
          800: '#0a19cd',
          900: '#0b17a7',
          950: '#031072',
          1000: '#020b4f',
          1050: '#010737',
        },
        steelBlue: '#2E8ED7',
        tropicalBlue: '#78DFEC',
        aquaBlue: '#22D6C4',
        mintGreen: '#A1ECD6',
        seafoamGreen: '#4FA88F',
        pineGreen: '#1b9574',
        forestGreen: '#004832',
        fieryRed: '#fe3303',
        mellowYellow: '#ffff66',
        powderBlue: '#c3ebf0'
      },
      translate: ['responsive', 'hover', 'group-hover'],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
