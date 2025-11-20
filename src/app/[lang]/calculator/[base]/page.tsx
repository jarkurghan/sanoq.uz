import { Card, CardContent, CardHeader } from "@/src/components/utils/card";
import StandartCalculator from "@/src/components/calculator/standart-calculator";
import CalculatorText from "@/src/components/calculator/standart-calculator-info";
import Content from "@/src/components/common/content";
import { LINGUISTIC_NAME_TO_NUMERAL_NAME } from "@/src/lib/constants/numeral-system";
import { getTranslation } from "@/src/lib/translater/i18n";
import { Language, MetaLang } from "@/src/lib/types/language";
import { Base } from "@/src/lib/types/base";
import { Metadata } from "next";
import { SEO } from "@/src/lib/utils/generate-metadata";

type Props = {
    params: Promise<{ lang: Language; base: Base }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang, base } = await params;
    const baseNum = LINGUISTIC_NAME_TO_NUMERAL_NAME[base] || "10";
    const t = getTranslation(lang);

    const title = t("calculator.seo.title." + baseNum);
    const description = t("calculator.seo.description." + baseNum);
    const keywords = t("calculator.seo.keywords." + baseNum);
    const url = `https://sanoq.uz/${lang}/calculator/${base}`;
    const alterLangs: MetaLang = {
        uz: "https://sanoq.uz/uz/calculator/" + base,
        en: "https://sanoq.uz/en/calculator/" + base,
        ru: "https://sanoq.uz/ru/calculator/" + base,
        tg: "https://sanoq.uz/tg/calculator/" + base,
        tr: "https://sanoq.uz/tr/calculator/" + base,
        az: "https://sanoq.uz/az/calculator/" + base,
        kk: "https://sanoq.uz/kk/calculator/" + base,
        ky: "https://sanoq.uz/ky/calculator/" + base,
        tk: "https://sanoq.uz/tk/calculator/" + base,
        tt: "https://sanoq.uz/tt/calculator/" + base,
        ug: "https://sanoq.uz/ug/calculator/" + base,
        ba: "https://sanoq.uz/ba/calculator/" + base,
        ar: "https://sanoq.uz/ar/calculator/" + base,
        "x-default": "https://sanoq.uz/calculator/" + base,
    };

    return SEO({ title, description, keywords, url, lang, alterLangs });
}

export default async function CalculatorPage({ params }: Props) {
    const { lang, base: baseStr } = await params;
    const base = LINGUISTIC_NAME_TO_NUMERAL_NAME[baseStr] || "10";
    const t = getTranslation(lang);

    return (
        <div className="flex">
            <Content className="prose prose-lg flex-1">
                <div className="sm:grid grid-cols-[1fr_auto] gap-8 xl:gap-20">
                    <header>
                        <h1>{t("calculator.standard.title")}</h1>
                        <p className="hidden sm:block text-justify">{t("calculator.standard.description")}</p>
                        <div className="hidden sm:block">
                            <CalculatorText lang={lang} base={base} />
                        </div>
                    </header>
                    <div className="w-fit max-w-[360px]">
                        <Card>
                            <CardHeader className="pt-1" />
                            <CardContent>
                                <StandartCalculator base={base} />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="block sm:hidden px-2 pt-8">
                        <CalculatorText lang={lang} base={base} />
                    </div>
                </div>
            </Content>
        </div>
    );
}
