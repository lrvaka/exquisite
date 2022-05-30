/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdninstagram.com",
      "scontent-dfw5-1.cdninstagram.com",
    ],
  },
}

module.exports = nextConfig
