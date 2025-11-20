import ShareAppURL from "@/src/components/global/share";
import Content from "@/src/components/common/content";
import { Send, Share2 } from "lucide-react";
import { getTranslation } from "@/src/lib/translater/i18n";
import { Language, MetaLang } from "@/src/lib/types/language";
import { SEO } from "@/src/lib/utils/generate-metadata";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ lang: Language }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getTranslation(lang);

    const title = t("about.title");
    const description = t("about.description");
    const url = `https://sanoq.uz/${lang}/about`;
    const alterLangs: MetaLang = {
        uz: "https://sanoq.uz/uz/about",
        en: "https://sanoq.uz/en/about",
        ru: "https://sanoq.uz/ru/about",
        tg: "https://sanoq.uz/tg/about",
        tr: "https://sanoq.uz/tr/about",
        az: "https://sanoq.uz/az/about",
        kk: "https://sanoq.uz/kk/about",
        ky: "https://sanoq.uz/ky/about",
        tk: "https://sanoq.uz/tk/about",
        tt: "https://sanoq.uz/tt/about",
        ug: "https://sanoq.uz/ug/about",
        ba: "https://sanoq.uz/ba/about",
        ar: "https://sanoq.uz/ar/about",
        "x-default": "https://sanoq.uz/about",
    };

    return SEO({ title, description, alterLangs, url, lang });
}

export default async function AboutPage({ params }: Props) {
    const { lang } = await params;
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <Content className="flex-1 prose prose-lg text-justify">
                <div>
                    <header>
                        <h1>{t("about.title")}</h1>
                        <p>{t("about.description")}</p>
                    </header>
                    <div>
                        <h3>{t("nav.conversion")}</h3>
                        <div></div>
                        <p>{t("about.page.conversion.desription")}</p>
                    </div>
                    <div>
                        <h3>{t("nav.calculator")}</h3>
                        <div></div>
                        <p>{t("about.page.calculator.desription")}</p>
                    </div>
                    <div>
                        <h3>{t("nav.article")}</h3>
                        <div></div>
                        <p>{t("about.page.article.desription")}</p>
                    </div>
                    {/* <div>
                        <h3>{t("nav.code")}</h3>
                        <div></div>
                        <p>{t("about.page.code.desription")}</p>
                    </div> */}
                </div>

                <div>
                    <div>
                        <h2>{t("about.share.title")}</h2>
                        <div className="sm:grid grid-cols-[1fr_auto] gap-x-8">
                            <p>{t("about.share.description")}</p>
                            <div className="text-card-foreground w-full sm:w-40 py-4 flex items-center justify-end flex-col gap-2">
                                <Share2 size={30} />
                                <ShareAppURL lang={lang}>
                                    <div className="px-6 py-1 text-white text-base font-medium bg-blue-500 border-none rounded-lg cursor-pointer transition-colors text-center no-underline inline-flex items-center justify-center gap-2">
                                        {t("about.share.button")}
                                    </div>
                                </ShareAppURL>
                            </div>
                        </div>
                    </div>

                    {/* to-do: donat */}

                    <div>
                        <div>
                            <h2>{t("about.contact.title")}</h2>
                            <div className="sm:grid grid-cols-[1fr_auto] gap-x-8">
                                <div>
                                    <ul>
                                        <li>{t("about.contact.description1")}</li>
                                        <li>{t("about.contact.description2")}</li>
                                        <li>{t("about.contact.description3")}</li>
                                        <li>{t("about.contact.description4")}</li>
                                        <li>{t("about.contact.description5")}</li>
                                        <li>{t("about.contact.description6")}</li>
                                    </ul>
                                    <strong>{t("about.contact.description.bold")}</strong> {t("about.contact.description.def")}
                                </div>
                                <div className="text-card-foreground w-full sm:w-40 py-4 flex items-center justify-end flex-col gap-2">
                                    <Send size={30} />
                                    <a
                                        href="https://t.me/full_full_stack"
                                        target="_blank"
                                        className="px-6 py-1 text-white text-base font-medium bg-blue-500 border-none rounded-lg cursor-pointer transition-colors text-center no-underline inline-flex items-center justify-center gap-2"
                                    >
                                        {t("about.contact.button")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* to-do: our team */}
                </div>
            </Content>
        </div>
    );
}
