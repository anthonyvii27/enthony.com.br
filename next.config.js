/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
    staticPageGenerationTimeout: 0,
    reactStrictMode: true,
    images: {
        domains: ['']
    },
    eslint: {
        dirs: ['.']
    }
}

module.exports = withImages(nextConfig);