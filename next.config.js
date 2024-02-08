/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["myearnitapp.com"],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
