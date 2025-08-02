/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/web-sebatian-molina',
  assetPrefix: '/web-sebatian-molina/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
