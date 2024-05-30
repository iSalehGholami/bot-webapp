/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/bot-webapp",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

module.exports = nextConfig;