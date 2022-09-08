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
        destination: 'https://discord.gg/a4jsHKwrAa',
        permanent: false,
        basePath: false,
      },
    ]
  },
}
