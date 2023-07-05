/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    images: {
        domains: ["crealoka.s3.ap-southeast-1.amazonaws.com", "s3.ap-southeast-1.amazonaws.com"],
        formats: ["image/avif", "image/webp"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;
