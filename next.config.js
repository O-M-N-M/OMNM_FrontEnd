/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://43.200.120.2:8080/:path*`
      }
    ];
  }
};

module.exports ={
  nextConfig,
  typescript: {
    ignoreBuildErrors: true,
  }
} 