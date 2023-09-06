import { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'click-me': 'bounce-in 1s ease-in-out 3 forwards',
        'scroll-down': 'bounce-in 1.75s ease-in-out infinite alternate-reverse',
      },
      fontFamily: {
        script: ['var(--caveat)'],
        sans: ['var(--work-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--roboto-slab)', ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        'bounce-in': {
          '0%, 100%': { opacity: '0', transform: 'translateY(-25%)' },
          '60%': { opacity: '1', transform: 'none' },
        },
      },
      screens: {
        xs: '425px',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(1,-.3,.03,1.4)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
} as Config
