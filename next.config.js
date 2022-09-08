/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/a4jsHKwrAa',
        permanent: false,
        basePath: false,
      },
    ]
  },
}
