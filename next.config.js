/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["myearnitapp.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
