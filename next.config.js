/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.perfectkitchenrobes.com'], // Added your domain
    unoptimized: process.env.NODE_ENV === 'production', // Changed to production to help crawlers
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.perfectkitchenrobes.com',
        pathname: '/assets/images/**',
      },
    ],
  },
};
module.exports = nextConfig;