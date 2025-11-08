import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    devIndicators: false,
    images: {
        remotePatterns: [
            new URL('https://avatars.githubusercontent.com/u/88344957?v=4&size=512'),
            new URL('https://images.bobby68.de/**'), {
                protocol: 'https',
                hostname: 'images.bobby68.de',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
