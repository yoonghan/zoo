/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {}

const staticConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    output: "export"
}

export default process.env.NEXT_STATIC === "true" ? {...nextConfig, ...staticConfig} : nextConfig;
