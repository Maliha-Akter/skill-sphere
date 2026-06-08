/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  experimental: {
    serverComponentsExternalPackages: [
      '@better-auth/kysely-adapter',
      'kysely',
    ],
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;