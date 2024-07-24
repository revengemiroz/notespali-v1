/** @type {import('next').NextConfig} */
const nextConfig = {
  //react pdf
  webpack: (config) => {
    config.resolve.alias.canvas = false

    return config
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'www.notespali.com' }],
  },
}

export default nextConfig
