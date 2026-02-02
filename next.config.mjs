/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // swcMinify: true,  <- Next.js 13+ sudah otomatis pakai SWC Minfier
    
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/deumvkhxw/**',
            },
        ],
    },

    async headers() {
        return [
        {
            source: '/:all*(css|js|jpg|jpeg|png|webp)',
            headers: [
            {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
            },
            ],
        },
        ]
    },
};

export default nextConfig;
