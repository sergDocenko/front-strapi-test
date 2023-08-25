/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        
        destination: `${process.env.STRAPI_UPLOADS_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
