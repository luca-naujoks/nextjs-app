import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [new URL('https://avatars.githubusercontent.com/u/88344957?v=4&size=512')],
    }
};

export default nextConfig;
