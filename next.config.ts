import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/emc-yoga-school-v0.2',
  assetPrefix: '/emc-yoga-school-v0.2/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
