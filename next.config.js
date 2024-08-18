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
        destination: '/menuId/1',
        permanent: true,
      }
    ]
  },
}