const { withSentryConfig } = require("@sentry/nextjs");
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
        domains: ["picsum.photos", "firebasestorage.googleapis.com"]
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    sentry: {
        hideSourceMaps: true
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY"
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff"
                    },
                    {
                        key: "Referrer-Policy",
                        value: "origin-when-cross-origin"
                    }
                ]
            }
        ];
    }
});

const sentryWebpackPluginOptions = {
    silent: process.env.NEXT_PUBLIC_ENVIRONMENT !== "PROD" // Suppresses all logs
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
