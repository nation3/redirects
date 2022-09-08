/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://stackoverflow.com/posts/66662033',
        permanent: false,
        basePath: false,
      },
    ]
  },
}
