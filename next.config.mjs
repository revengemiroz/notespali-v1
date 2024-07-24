/** @type {import('next').NextConfig} */
const nextConfig = {
  //react pdf
  webpack: (config) => {
    config.resolve.alias.canvas = false

    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'www.notespali.com' }],
  },
}

export default nextConfig
