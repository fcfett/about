module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    'tailwindcss/nesting': 'postcss-nesting',
    autoprefixer: {},
    tailwindcss: {},
  },
}
