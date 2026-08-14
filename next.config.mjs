/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
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
            {
                source: "/tg/article/sistemahoi-shumorish",
                destination: "/tg/article/sistemahoi-hisob",
                permanent: true,
            },
            {
                source: "/tg/article/sistemahoi-hisob-pozitsioni-va-ghayripozitsioni",
                destination: "/tg/article/sistemahoi-hisob-mavqei-va-ghayrimavqei",
                permanent: true,
            },
            {
                source: "/ky/article/sanaak-sistemasy",
                destination: "/ky/article/eseptoo-sistemasy",
                permanent: true,
            },
            {
                source: "/ky/article/pozitsiyalyk-zhana-pozitsiyalyk-emes-sanak-sistemalar",
                destination: "/ky/article/pozitsiyalyk-zhana-pozitsiyalyk-emes-eseptoo-sistemalar",
                permanent: true,
            },
            {
                source: "/tk/article/san-ulgamlary",
                destination: "/tk/article/hasaplayys-sistemasy",
                permanent: true,
            },
            {
                source: "/tk/article/pozision-we-pozision-dal-san-ulgamlary",
                destination: "/tk/article/pozision-we-pozision-dal-hasaplayys-sistemalary",
                permanent: true,
            },
            {
                source: "/az/article/reqem-sistemleri",
                destination: "/az/article/say-sistemleri",
                permanent: true,
            },
            {
                source: "/az/article/pozisional-ve-qeyri-pozisional-say-sistemleri",
                destination: "/az/article/movqeli-ve-movqesiz-say-sistemleri",
                permanent: true,
            },
            {
                source: "/tt/article/san-sistemalary",
                destination: "/tt/article/isepleu-sistemasy",
                permanent: true,
            },
            {
                source: "/tt/article/pozitsion-ham-pozitsion-tugel-san-sistemalary",
                destination: "/tt/article/pozitsion-hem-pozitsion-bulmagan-isepleu-sistemalary",
                permanent: true,
            },
            {
                source: "/ba/article/han-sistemalary",
                destination: "/ba/article/isepleu-sistemahy",
                permanent: true,
            },
            {
                source: "/ba/article/pozitsion-ham-pozitsion-bulmagan-han-sistemalary",
                destination: "/ba/article/pozitsion-ham-pozitsion-bulmagan-isepleu-sistemalary",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
