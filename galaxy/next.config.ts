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

  // 2. ĐƯA RA NGOÀI CẤP CAO NHẤT (Sửa lỗi TypeScript của bạn)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  allowedDevOrigins: ['192.168.1.6']
};

export default nextConfig;