import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/proxy/images/:path*",
        destination: "https://images.marcusd.me/:path*",
      },
    ];
  },
};

export default nextConfig;

