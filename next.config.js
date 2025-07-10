/** @type {import('next').NextConfig} */

const repo = 'emc-yoga-school-v0.2'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig;
