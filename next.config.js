/* eslint @typescript-eslint/no-var-requires: "off" */
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com/**",
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
