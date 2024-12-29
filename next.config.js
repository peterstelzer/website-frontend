/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/menuId/0',
        permanent: true,
      }
    ]
  },
}