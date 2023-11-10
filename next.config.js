const withAntdLess = require('next-plugin-antd-less')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://utfs.io',
        port: '',
        pathname: '/*'
      }
    ]
  }
}

// module.exports = pluginAntdLess(nextConfig)
module.exports = withAntdLess({
  ...nextConfig // Spread the nextConfig object to merge the configurations.
})
