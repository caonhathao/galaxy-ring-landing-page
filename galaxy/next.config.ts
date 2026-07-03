import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // 1. Cấu hình cho Webpack
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  allowedDevOrigins: ["192.168.1.6"],
  images: {
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.gihubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
