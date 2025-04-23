/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // Set to false to enable image optimization
    formats: ['image/webp', 'image/avif'], // Keep supported formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.perfectkitchenrobes.com',
        pathname: '/assets/images/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Reduced cache time to 1 minute
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;