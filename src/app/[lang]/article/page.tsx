import { getTranslation } from "@/src/lib/translater/i18n";
import PublicsComponent from "@/src/components/article/client-component";
import Content from "@/src/components/common/content";
import { Language, MetaLang } from "@/src/lib/types/language";
import type { Metadata } from "next";
import { SEO } from "@/src/lib/utils/generate-metadata";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getTranslation(lang);

    const title = t("article.seo.title");
    const description = t("article.seo.description");
    const keywords = t("article.seo.keywords");
    const url = `https://sanoq.uz/${lang}/article`;
    const alterLangs: MetaLang = {
        uz: "https://sanoq.uz/uz/article",
        en: "https://sanoq.uz/en/article",
        ru: "https://sanoq.uz/ru/article",
        tg: "https://sanoq.uz/tg/article",
        tr: "https://sanoq.uz/tr/article",
        az: "https://sanoq.uz/az/article",
        kk: "https://sanoq.uz/kk/article",
        ky: "https://sanoq.uz/ky/article",
        tk: "https://sanoq.uz/tk/article",
        tt: "https://sanoq.uz/tt/article",
        ug: "https://sanoq.uz/ug/article",
        ba: "https://sanoq.uz/ba/article",
        ar: "https://sanoq.uz/ar/article",
        "x-default": "https://sanoq.uz/article",
    };

    return SEO({ title, description, keywords, alterLangs, url, lang });
}

type Props = {
    params: Promise<{ lang: Language }>;
};

export default async function ArticlesPage({ params }: Props) {
    const { lang } = await params;
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <div className="flex-1">
                <Content className="prose prose-lg">
                    <header className="hidden">
                        <h1>{t("article.seo.title")}</h1>
                        <p>{t("article.seo.description")}</p>
                    </header>
                    <PublicsComponent lang={lang} />
                </Content>
            </div>
        </div>
    );
}
