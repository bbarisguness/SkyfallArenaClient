/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '185.59.31.233',
                port: '1430',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
