import React from "react";
import { DIGITS } from "@/lib/constants/numeral-system";
import { NUMERAL_VALUE_DICTIONARY } from "@/lib/constants/numeral-system";
import { NUMERAL_NAME_TO_LINGUISTIC_NAME } from "@/lib/constants/numeral-system";
import { SUPERSCRIPTMINUS } from "@/lib/constants/exponent";
import { SUPERSCRIPTS } from "@/lib/constants/exponent";
import { SUBSCRIPTS } from "@/lib/constants";
import { SolutionContentProps } from "./solution";
import { getTranslation } from "@/lib/translater/i18n";
import { InlineMath } from "react-katex";
import Spinner from "../global/spinner";

function superScript(n: number): string {
    return SUPERSCRIPTS[n] ?? `^${n}`;
}

function powerExpr(base: number, exp: number): string {
    return `${base}${superScript(exp)}`;
}

function negPowerExpr(base: number, exp: number): string {
    return `${base}${SUPERSCRIPTMINUS}${superScript(exp)}`;
}

/** Система аталышы numbersystem.* ачкычынан; «(негиз N)» бөлүгү текст үчүн алынып салынат */
function systemName(t: (key: string) => string, base: number): string {
    const linguistic = NUMERAL_NAME_TO_LINGUISTIC_NAME[String(base)];
    const full = linguistic ? t("numbersystem." + linguistic) : t("calculator.info.title." + base);
    return full.replace(/\s*\([^)]*\)\s*$/u, "").trim();
}

export default function SolutionContentKY(props: SolutionContentProps) {
    const { fromBase, toBase } = props;
    const { part, isFractional, isNegative, isZeroWhole } = props;
    const { waiting, isHidden } = props;
    const { inputWholePart, inputFractionalPart } = props;
    const { isHiddenStep1, isHiddenStep2 } = props;
    const { isHiddenWholePart, isHiddenFractionalPart } = props;
    const { decWholePart, decFractionalPart } = props;
    const { toWholePart, toFractionalPart } = props;
    const { lang } = props;

    const t = getTranslation(lang);
    const exact = !isFractional || (decFractionalPart.exact && toFractionalPart.exact);
    const displayWhole = inputWholePart || "0";
    const fromName = systemName(t, fromBase);
    const toName = systemName(t, toBase);
    const decimalName = systemName(t, 10);
    const needsTwoSteps = !isHiddenStep1 && !isHiddenStep2;

    return (
        <React.Fragment>
            {waiting ? (
                <div className="min-h-60 flex items-center justify-center">
                    <Spinner size={40} />
                </div>
            ) : (
                !isHidden && (
                    <div className="mx-auto pt-10 leading-relaxed">
                        <h2 className="text-xl font-bold mt-6 mb-4">
                            <code className="bg-card text-card-foreground px-1 rounded mx-1">
                                {isNegative && "−"}
                                {displayWhole}
                                {isFractional && "."}
                                {inputFractionalPart}
                                {SUBSCRIPTS[fromBase]}
                            </code>{" "}
                            санын {fromName}нан {toName}на өткөрүү
                        </h2>

                        {needsTwoSteps && (
                            <p className="mb-4 text-muted-foreground">
                                Түз өткөрүүнүн ордуна адегенде {decimalName}на, андан кийин максаттуу системага өтөбүз. Бул ыкма каалаган эки негиз
                                арасында иштейт.
                            </p>
                        )}

                        {part.count > 1 && (
                            <p className="mb-4">
                                Адегенде санды бөлүктөргө бөлөлү:
                                {part.negative && (
                                    <span className="block mt-1">
                                        белги: <code className="bg-card text-card-foreground p-1 rounded">−</code>
                                        <span className="text-muted-foreground ml-2">(акырында кайра коюлат)</span>
                                    </span>
                                )}
                                {part.whole && (
                                    <span className="block mt-1">
                                        бүтүн бөлүгү: <code className="bg-card text-card-foreground p-1 rounded">{displayWhole}</code>
                                    </span>
                                )}
                                {part.fraction && (
                                    <span className="block mt-1">
                                        бөлчөк бөлүгү: <code className="bg-card text-card-foreground p-1 rounded">0.{inputFractionalPart}</code>
                                    </span>
                                )}
                            </p>
                        )}

                        {!isHiddenStep1 && (
                            <React.Fragment>
                                <p className="mb-4">
                                    <strong>
                                        {needsTwoSteps && "1-кадам: "}
                                        {fromName}нан {decimalName}на өткөрөбүз
                                    </strong>
                                </p>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    Ар бир цифра ордуна жараша {fromBase}-нин даражасына көбөйтүлөт (
                                    {fromBase}
                                    {superScript(0)}, {fromBase}
                                    {superScript(1)}, {fromBase}
                                    {superScript(2)}, …), андан кийин көбөйтүндүлөр кошулат.
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        <p className="font-medium">
                                            Бүтүн бөлүгү:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded">
                                                {displayWhole}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2 mt-2">Орундук маани боюнча жазуу:</p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            <span className="block">
                                                {displayWhole
                                                    .split("")
                                                    .map((digit, i) => `${NUMERAL_VALUE_DICTIONARY[digit]} × ${powerExpr(fromBase, displayWhole.length - 1 - i)}`)
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">
                                                ={" "}
                                                {displayWhole
                                                    .split("")
                                                    .map((digit, i) => {
                                                        const exp = displayWhole.length - 1 - i;
                                                        return `${NUMERAL_VALUE_DICTIONARY[digit]} × ${fromBase ** exp}`;
                                                    })
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">
                                                ={" "}
                                                {displayWhole
                                                    .split("")
                                                    .map((digit, i) => {
                                                        const exp = displayWhole.length - 1 - i;
                                                        return String(NUMERAL_VALUE_DICTIONARY[digit] * fromBase ** exp);
                                                    })
                                                    .join(" + ")}
                                            </span>
                                            <span className="block font-semibold">
                                                = {decWholePart}
                                                {SUBSCRIPTS[10]}
                                            </span>
                                        </pre>
                                    </React.Fragment>
                                )}

                                {isZeroWhole && (
                                    <p className="mb-4">
                                        Бүтүн бөлүк <code className="bg-card text-card-foreground px-1 rounded">0</code> — ошондуктан ондук системадагы бүтүн
                                        бөлүк да <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[10]}</code> болот.
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className={`font-medium mb-2 ${!isHiddenWholePart ? "mt-8" : ""}`}>
                                            Бөлчөк бөлүгү:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded">
                                                0.{inputFractionalPart}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2">Үтүрдөн кийинки цифралар терс даражалар менен жазылат:</p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            <span className="block">
                                                {inputFractionalPart
                                                    .split("")
                                                    .map((digit, i) => `${NUMERAL_VALUE_DICTIONARY[digit]} × ${negPowerExpr(fromBase, i + 1)}`)
                                                    .join(" + ")}
                                            </span>
                                            <span className="block py-1">
                                                ={" "}
                                                {inputFractionalPart.split("").map((digit, i) => (
                                                    <span key={i}>
                                                        <InlineMath math={`\\dfrac{${NUMERAL_VALUE_DICTIONARY[digit]}}{${fromBase}^{${i + 1}}}`} />
                                                        {i !== inputFractionalPart.length - 1 && " + "}
                                                    </span>
                                                ))}
                                            </span>
                                            <span className="block py-1">
                                                ={" "}
                                                {inputFractionalPart.split("").map((digit, i) => (
                                                    <span key={i}>
                                                        <InlineMath math={`\\dfrac{${NUMERAL_VALUE_DICTIONARY[digit]}}{${fromBase ** (i + 1)}}`} />
                                                        {i !== inputFractionalPart.length - 1 && " + "}
                                                    </span>
                                                ))}
                                            </span>
                                            <span className="block py-1">
                                                = <InlineMath math={`\\dfrac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </span>
                                            <span className="block font-semibold">
                                                {decFractionalPart.exact ? "=" : "≈"} 0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]}
                                            </span>
                                        </pre>
                                    </React.Fragment>
                                )}

                                <p className="font-medium mt-8">
                                    Демек,{" "}
                                    <code className="bg-card text-card-foreground px-1 rounded">
                                        {displayWhole}
                                        {isFractional ? "." : ""}
                                        {inputFractionalPart}
                                        {SUBSCRIPTS[fromBase]} {decFractionalPart.exact ? "=" : "≈"} {decWholePart}
                                        {isFractional ? decFractionalPart.value : ""}
                                        {SUBSCRIPTS[10]}
                                    </code>
                                </p>
                            </React.Fragment>
                        )}

                        {!isHiddenStep2 && (
                            <React.Fragment>
                                <p className="mb-4 mt-8">
                                    <strong>
                                        {needsTwoSteps && "2-кадам: "}
                                        {decimalName}нан {toName}на өткөрөбүз
                                    </strong>
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        {!isHiddenFractionalPart && (
                                            <p className="font-medium">
                                                Бүтүн бөлүгү:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded">
                                                    {decWholePart}
                                                    {SUBSCRIPTS[10]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-2 mt-2">
                                            Санды {toBase}-ге кайра-кайра бөлүп, ар жолу <em>калдыкты</em> жазабыз. Калдыктар — жаңы системадагы цифралар:
                                        </p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            {toWholePart.steps
                                                .map((step) => `${step.dividend} ÷ ${step.divisor} = ${step.quotient} , калдык ${step.remainder}`)
                                                .join("\n")}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            Калдыктарды <em>ылдыйдан жогоруга</em> окуйбуз:
                                            <code className="ml-2 bg-card text-card-foreground p-1 rounded">
                                                {decWholePart}
                                                {SUBSCRIPTS[10]} = {toWholePart.value}
                                                {SUBSCRIPTS[toBase]}
                                            </code>
                                        </p>
                                    </React.Fragment>
                                )}

                                {isZeroWhole && (
                                    <p className="mb-4">
                                        Бүтүн бөлүк <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[10]}</code> максаттуу системада да{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[toBase]}</code> болот.
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className="font-medium mt-8 mb-2">
                                            Бөлчөк бөлүгү:{" "}
                                            <code className="bg-card text-card-foreground px-1 py-1 rounded">
                                                0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]} {decFractionalPart.exact ? "=" : "≈"}{" "}
                                                <InlineMath math={`\\dfrac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </code>
                                        </p>

                                        <p className="mb-2">
                                            Бөлчөктү {toBase}-ге көбөйтөбүз: көбөйтүндүнүн <em>бүтүн бөлүгү</em> — кийинки цифра; <em>калган бөлчөк</em> менен улантабыз:
                                        </p>

                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2">
                                            {toFractionalPart.steps.map((step, i) => {
                                                const digit = DIGITS[step.remainder];
                                                return (
                                                    <span className="block py-1.5" key={i}>
                                                        <InlineMath
                                                            math={`\\dfrac{${step.numerator}}{${step.denominator}} \\times ${step.multiplicand} = ${digit} + \\dfrac{${step.result}}{${step.denominator}}`}
                                                        />
                                                        <span className="ml-3 text-muted-foreground">→ цифра {digit}</span>
                                                    </span>
                                                );
                                            })}
                                            {toFractionalPart.period.isPeriod !== false && (
                                                <span className="block font-bold p-1 text-muted-foreground">… период кайталанат</span>
                                            )}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            {toFractionalPart.period.isPeriod === true && (
                                                <span className="block mb-1">
                                                    Бул процесс периоддуу: периоддун узундугу {toFractionalPart.period.length}
                                                    {toFractionalPart.value.includes("(") ? " (кашаанын ичинде)" : ""}.
                                                </span>
                                            )}
                                            {toFractionalPart.period.isPeriod === null && (
                                                <span className="block mb-1">Период өтө узун — болжолдуу маани көрсөтүлүүдө.</span>
                                            )}
                                            <code className="block bg-card text-card-foreground px-1 rounded">
                                                0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]} {toFractionalPart.exact ? "=" : "≈"} 0{toFractionalPart.value}
                                                {SUBSCRIPTS[toBase]}
                                                {!toFractionalPart.exact && "…"}
                                            </code>
                                        </p>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        )}

                        <p className="font-medium mt-8 mb-2">
                            <strong className="block mb-1">Жыйынтык натыйжа:</strong>
                            {isNegative && <span className="block text-sm text-muted-foreground mb-1">Терс белги сакталат.</span>}
                            <code className="bg-card text-card-foreground p-1 rounded text-base">
                                {isNegative && "−"}
                                {displayWhole}
                                {isFractional && "."}
                                {inputFractionalPart}
                                {SUBSCRIPTS[fromBase]} {exact ? "=" : "≈"} {isNegative && "−"}
                                {toWholePart.value}
                                {isFractional && toFractionalPart.value}
                                {SUBSCRIPTS[toBase]}
                            </code>
                        </p>
                    </div>
                )
            )}
        </React.Fragment>
    );
}
