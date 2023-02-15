/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://nation3.org',
        permanent: false,
        basePath: false,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/servers/nation3-690584551239581708',
        permanent: false,
        basePath: false,
      },
    ]
  },
}
