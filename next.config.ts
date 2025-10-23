import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/studios-farol' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/studios-farol/' : '',
};

export default nextConfig;
