/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
};

module.exports = nextConfig;
