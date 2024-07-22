/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  rewrites () {
    return [
      {
        source: '/proxy',
        destination: 'http://localhost:3000'
      }
    ];
  }
};

export default nextConfig;
