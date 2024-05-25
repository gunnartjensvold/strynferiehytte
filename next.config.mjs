/** @type {import('next').NextConfig} */
const nextConfig = {
  headers() {
    return [
      {
        // Disable caching for all API routes
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0'
          }
        ]
      }
    ]
  }
}

export default nextConfig
