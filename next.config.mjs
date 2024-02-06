/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US',

        domains: [
            {
                domain: 'bobby68.de',
                defaultLocale: 'en-US',
            },
        ]
    }
};

export default nextConfig;
