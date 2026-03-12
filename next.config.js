/** @type {import('next').NextConfig} */
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure Next infers the correct workspace root when multiple lockfiles exist
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com', 'github.com'],
  },
}

module.exports = nextConfig
