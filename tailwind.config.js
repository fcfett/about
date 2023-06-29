/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['var(--caveat)'],
        sans: ['var(--work-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--roboto-slab)', ...defaultTheme.fontFamily.serif],
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
}
