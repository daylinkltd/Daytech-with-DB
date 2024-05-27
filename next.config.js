/** @type {import('next').NextConfig} */

module.exports = {

  images: {
    domains: ['drive.google.com'],
  },
  compiler: {
    removeConsole: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};
