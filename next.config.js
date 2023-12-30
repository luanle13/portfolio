/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
