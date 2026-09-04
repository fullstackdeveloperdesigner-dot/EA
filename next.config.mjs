/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ericanalytics.net',
      },
    ],
  },
};

export default nextConfig;
