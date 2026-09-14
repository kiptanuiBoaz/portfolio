import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: ".next",
    images: {
        unoptimized: true,
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
