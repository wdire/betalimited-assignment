/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-f713ae0e826a4438ad18a7ef108a3b77.r2.dev",
      },
    ],
  },
};

module.exports = nextConfig;
