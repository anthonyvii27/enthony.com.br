/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
    staticPageGenerationTimeout: 0,
    reactStrictMode: true,
    images: {
        domains: ['']
    }
}

module.exports = withImages(nextConfig);