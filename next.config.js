/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;
module.exports = {
  serverRuntimeConfig: {
    secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `http://localhost/:path*`,
        },
      ],
    }
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000' // development api
        : 'http://localhost:3000' // production api
  }
}
