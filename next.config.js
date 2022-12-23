const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react"
    }
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    images: {
        domains: ["picsum.photos"]
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"]
});

module.exports = nextConfig;
