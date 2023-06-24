/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { domains: ["prod.flowcvassets.com"] },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
