import { Language, MetaLang } from "@/src/lib/types/language";
import type { Metadata } from "next";

type Props = {
    title: string;
    description: string;
    url: string;
    keywords?: string[] | string;
    alterLangs: MetaLang;
    lang: Language;
    pageType?: "website" | "article";
};

export function SEO({ title, description, url, keywords, alterLangs, lang, pageType }: Props): Metadata {
    const imageURL = "https://sanoq.uz/images/sanoq.uz.png";

    return {
        title,
        description,
        keywords: keywords || undefined,

        alternates: { canonical: url, languages: alterLangs },
        metadataBase: new URL("https://sanoq.uz"),

        authors: [{ name: "Najmiddin Nazirov", url: "https://sanoq.uz/about" }],
        creator: "Najmiddin Nazirov",

        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: { index: true, follow: true },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "sanoq.uz",
            images: [
                {
                    url: imageURL,
                    width: 1000,
                    height: 749,
                    alt: "sanoq.uz",
                },
            ],
            locale: lang,
            type: pageType || "website",
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [{ url: imageURL, alt: "sanoq.uz" }],
            creator: "@jarkurghan",
        },

        other: {
            "application-name": "sanoq.uz",
            "apple-mobile-web-app-title": "sanoq.uz",
        },
    };
}
