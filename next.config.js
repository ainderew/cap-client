const withAntdLess = require('next-plugin-antd-less')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

// module.exports = pluginAntdLess(nextConfig)
module.exports = withAntdLess({
  lessVarsFilePath: './src/styles/antd-styles.less',
  ...nextConfig // Spread the nextConfig object to merge the configurations.
})
