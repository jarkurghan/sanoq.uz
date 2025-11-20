import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },

    async redirects() {
        return [
            {
                source: "/:lang/:section(info|publications)",
                destination: "/:lang/article",
                permanent: true,
                locale: false,
            },
            {
                source: "/:lang/:section(info|publications)/:article_name",
                destination: "/:lang/article/:article_name",
                permanent: true,
                locale: false,
            },
            {
                source: "/:lang/calculator",
                destination: "/:lang/calculator/decimal",
                permanent: true,
            },
            {
                source: "/info",
                destination: "/publications",
                permanent: true,
            },
            {
                source: "/:lang/info",
                destination: "/:lang/publications",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
