/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // para exportar sitio estático
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // NO pongas assetPrefix a menos que tengas un subdirectorio real en Netlify
}

export default nextConfig;
