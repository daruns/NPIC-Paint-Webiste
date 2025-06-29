import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  experimental: {
  },

};
