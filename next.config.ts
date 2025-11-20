import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftp.goit.study',
        port: '',
        pathname: '/img/campers-test-task/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
