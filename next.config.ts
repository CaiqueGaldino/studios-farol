import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/studios-farol',
  assetPrefix: '/studios-farol/',
  trailingSlash: true,
};

export default nextConfig;
