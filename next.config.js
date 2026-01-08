/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  output: 'export',
  turbopack: {
    root: path.join(__dirname, '..'),
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  reactStrictMode: true,
  // Webpack config is kept for production builds since Turbopack doesn't support production builds yet
  // Turbopack is used for development (via --turbo flag) and doesn't use webpack config
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/fcfett/resources/master/**',
      },
    ],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/about" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/about/" : "",
}

module.exports = nextConfig
