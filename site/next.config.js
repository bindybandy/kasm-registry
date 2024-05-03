/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Bindytech',
    description: 'My workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/bindybandy/kasm-registry/',
    contactUrl: 'https://github.com/bindybandy/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
