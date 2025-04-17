/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Changed to production to help crawlers
    formats: ['image/webp', 'image/avif'], // Keep only the supported formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.perfectkitchenrobes.com',
        pathname: '/assets/images/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600,  // Cache for 1 hour (in seconds)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;