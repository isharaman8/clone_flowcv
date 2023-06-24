/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { domains: ["prod.flowcvassets.com"] },
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    },
};

module.exports = nextConfig;
