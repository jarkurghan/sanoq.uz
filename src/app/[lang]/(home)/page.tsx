import Content from "@/src/components/common/content";
import HomeComponent from "@/src/components/converter/client-component";
import { getTranslation } from "@/src/lib/translater/i18n";
import { Language, MetaLang } from "@/src/lib/types/language";
import { SEO } from "@/src/lib/utils/generate-metadata";
import { Metadata } from "next";

type Props = {
    params: Promise<{ lang: Language }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getTranslation(lang);

    const title = t("home.seo.title");
    const description = t("home.seo.description");
    const keywords = t("home.seo.keywords");
    const url = `https://sanoq.uz/${lang}`;
    const alterLangs: MetaLang = {
        uz: "https://sanoq.uz/uz",
        en: "https://sanoq.uz/en",
        ru: "https://sanoq.uz/ru",
        tg: "https://sanoq.uz/tg",
        tr: "https://sanoq.uz/tr",
        az: "https://sanoq.uz/az",
        kk: "https://sanoq.uz/kk",
        ky: "https://sanoq.uz/ky",
        tk: "https://sanoq.uz/tk",
        tt: "https://sanoq.uz/tt",
        ug: "https://sanoq.uz/ug",
        ba: "https://sanoq.uz/ba",
        ar: "https://sanoq.uz/ar",
        "x-default": "https://sanoq.uz",
    };

    return SEO({ title, description, keywords, url, lang, alterLangs });
}

export default async function HomePage({ params }: Props) {
    const { lang } = await params;
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <div className="flex-1 text-justify">
                <Content className="prose prose-lg">
                    <header>
                        <h1>{t("home.seo.title")}</h1>
                        {/* <div className="hidden sm:block border-b pt-2 pb-4 mb-6 text-sm"> */}
                        <p>{t("home.seo.description")}</p>
                        {/* </div> */}
                    </header>
                    <HomeComponent lang={lang} />
                </Content>
            </div>
        </div>
    );
}
