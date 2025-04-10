/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external domains you might use for images
    unoptimized: process.env.NODE_ENV === 'development', // For easier local development
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;