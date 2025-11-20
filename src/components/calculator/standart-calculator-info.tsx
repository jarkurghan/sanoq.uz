import { getTranslation } from "@/src/lib/translater/i18n";
import { Language } from "@/src/lib/types/language";
import { Base } from "@/src/lib/types/base";

export default function CalculatorText({ lang, base }: { lang: Language; base: Base }) {
    const t = getTranslation(lang);

    return (
        <div className="flex flex-col">
            <div>
                {t("calculator.basic.features")}
                <ul>
                    <li>
                        {t("calculator.arithmetic")} <span className="text-primary">+</span>, <span className="text-primary">-</span>,{" "}
                        <span className="text-primary">×</span>, <span className="text-primary">÷</span>
                    </li>
                    <li>
                        {t("calculator.sign.change")} <span className="text-primary">±</span>, <span className="text-primary">1/x</span>
                    </li>
                    <li>
                        {t("calculator.percentage")} <span className="text-primary">%</span>
                    </li>
                    <li>
                        {t("calculator.square.root")} <span className="text-primary">x²</span>, <span className="text-primary">√x</span>
                    </li>
                    <li>
                        {t("calculator.clear.delete")} <span className="text-primary">Clear</span>, <span className="text-primary">⌫</span>{" "}
                    </li>
                    <li>
                        {t("calculator.decimal.numbers")} <span className="text-primary">.</span>
                    </li>
                </ul>
            </div>
            {base !== "10" && <p className="text-justify">{t("calculator.info.warning." + base)}</p>}

            <div>
                <h2>{t("calculator.info.title." + base)}</h2>
                <p className="text-justify">
                    {t("calculator.info.title." + base)} — {t("calculator.info.description." + base)}.
                </p>
                <p className="text-justify">{t("calculator.info.digits." + base)}.</p>
            </div>
        </div>
    );
}
