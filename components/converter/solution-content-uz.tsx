import React from "react";
import { DIGITS } from "@/lib/constants/numeral-system";
import { NUMERAL_VALUE_DICTIONARY } from "@/lib/constants/numeral-system";
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

export default function SolutionContentUZ(props: SolutionContentProps) {
    const { inputNumber, fromBase, toBase } = props;
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
    const fromName = t("calculator.info.title." + fromBase).toLowerCase();
    const toName = t("calculator.info.title." + toBase).toLowerCase();
    const decimalName = t("calculator.info.title.10").toLowerCase();
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
                            <code className="bg-card text-card-foreground px-1 rounded mr-1">
                                {isNegative && "-"}
                                {displayWhole}
                                {isFractional && "."}
                                {inputFractionalPart}
                                {SUBSCRIPTS[fromBase]}
                            </code>
                            sonini {fromName}dan {toName}ga o'tkazish
                        </h2>

                        {needsTwoSteps && (
                            <p className="mb-4 text-muted-foreground">
                                To‘g‘ridan-to‘g‘ri o‘tkazish o‘rniga avval {decimalName}ga, so‘ng maqsad sistemaga o‘tamiz. Bu usul istalgan ikki asos orasida
                                ishlaydi.
                            </p>
                        )}

                        {part.count > 1 && (
                            <p className="mb-4">
                                Avval sonni qismlarga ajratamiz:
                                {part.negative && (
                                    <span className="block mt-1">
                                        ishora: <code className="bg-card text-card-foreground p-1 rounded">−</code>
                                        <span className="text-muted-foreground ml-2">(oxirida qayta qo‘yiladi)</span>
                                    </span>
                                )}
                                {part.whole && (
                                    <span className="block mt-1">
                                        butun qismi: <code className="bg-card text-card-foreground p-1 rounded">{displayWhole}</code>
                                    </span>
                                )}
                                {part.fraction && (
                                    <span className="block mt-1">
                                        kasr qismi: <code className="bg-card text-card-foreground p-1 rounded">0.{inputFractionalPart}</code>
                                    </span>
                                )}
                            </p>
                        )}

                        {!isHiddenStep1 && (
                            <React.Fragment>
                                <p className="mb-4">
                                    <strong>
                                        {needsTwoSteps && "1-qadam: "}
                                        {fromName}dan {decimalName}ga o'tkazamiz
                                    </strong>
                                </p>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    Har bir raqam o‘z o‘rniga qarab {fromBase}
                                    {superScript(0)}, {fromBase}
                                    {superScript(1)}, {fromBase}
                                    {superScript(2)}, … darajalariga ko‘paytiriladi va yig‘indisi olinadi.
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        <p className="font-medium">
                                            Butun qismi:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded">
                                                {displayWhole}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2 mt-2">Pozitsion yig‘indi:</p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            <span className="block">
                                                {displayWhole
                                                    .split("")
                                                    .map((raqam, i) => `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${powerExpr(fromBase, displayWhole.length - 1 - i)}`)
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">
                                                ={" "}
                                                {displayWhole
                                                    .split("")
                                                    .map((raqam, i) => {
                                                        const exp = displayWhole.length - 1 - i;
                                                        const pow = fromBase ** exp;
                                                        return `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${pow}`;
                                                    })
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">
                                                ={" "}
                                                {displayWhole
                                                    .split("")
                                                    .map((raqam, i) => {
                                                        const exp = displayWhole.length - 1 - i;
                                                        return String(NUMERAL_VALUE_DICTIONARY[raqam] * fromBase ** exp);
                                                    })
                                                    .join(" + ")}
                                            </span>
                                            <span className="block font-semibold">= {decWholePart}{SUBSCRIPTS[10]}</span>
                                        </pre>
                                    </React.Fragment>
                                )}

                                {isZeroWhole && (
                                    <p className="mb-4">
                                        Butun qism <code className="bg-card text-card-foreground px-1 rounded">0</code> — shuning uchun o‘nlikdagi butun qism
                                        ham <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[10]}</code>.
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className={`font-medium mb-2 ${!isHiddenWholePart ? "mt-8" : ""}`}>
                                            Kasr qismi:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded">
                                                0.{inputFractionalPart}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2">Nuqtadan keyingi raqamlar manfiy darajalar bilan yoziladi:</p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            <span className="block">
                                                {inputFractionalPart
                                                    .split("")
                                                    .map((raqam, i) => `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${negPowerExpr(fromBase, i + 1)}`)
                                                    .join(" + ")}
                                            </span>
                                            <span className="block py-1">
                                                ={" "}
                                                {inputFractionalPart.split("").map((raqam, i) => (
                                                    <span key={i}>
                                                        <InlineMath math={`\\dfrac{${NUMERAL_VALUE_DICTIONARY[raqam]}}{${fromBase}^{${i + 1}}}`} />
                                                        {i !== inputFractionalPart.length - 1 && " + "}
                                                    </span>
                                                ))}
                                            </span>
                                            <span className="block py-1">
                                                ={" "}
                                                {inputFractionalPart.split("").map((raqam, i) => (
                                                    <span key={i}>
                                                        <InlineMath math={`\\dfrac{${NUMERAL_VALUE_DICTIONARY[raqam]}}{${fromBase ** (i + 1)}}`} />
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
                                    Demak,{" "}
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
                                        {needsTwoSteps && "2-qadam: "}
                                        {decimalName}dan {toName}ga o'tkazamiz
                                    </strong>
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        {!isHiddenFractionalPart && (
                                            <p className="font-medium">
                                                Butun qismi:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded">
                                                    {decWholePart}
                                                    {SUBSCRIPTS[10]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-2 mt-2">
                                            Sonni {toBase} ga bo‘lib, har safar <em>qoldiq</em>ni yozib boramiz. Qoldiqlar — yangi sistemadagi raqamlar:
                                        </p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            {toWholePart.steps
                                                .map((step, i) => `${step.dividend} ÷ ${step.divisor} = ${step.quotient} , qoldiq ${step.remainder}`)
                                                .join("\n")}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            Qoldiqlarni <em>pastdan yuqoriga</em> o‘qiymiz:
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
                                        Butun qism <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[10]}</code> — maqsad sistemada ham{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[toBase]}</code>.
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className="font-medium mt-8 mb-2">
                                            Kasr qismi:{" "}
                                            <code className="bg-card text-card-foreground px-1 py-1 rounded">
                                                0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]} {decFractionalPart.exact ? "=" : "≈"}{" "}
                                                <InlineMath math={`\\dfrac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </code>
                                        </p>

                                        <p className="mb-2">
                                            Kasrni {toBase} ga ko‘paytiramiz: hosil bo‘lgan <em>butun qism</em> — navbatdagi raqam, <em>qolgan kasr</em> bilan
                                            davom etamiz:
                                        </p>

                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2">
                                            {toFractionalPart.steps.map((step, i) => {
                                                const digit = DIGITS[step.remainder];
                                                return (
                                                    <span className="block py-1.5" key={i}>
                                                        <InlineMath
                                                            math={`\\dfrac{${step.numerator}}{${step.denominator}} \\times ${step.multiplicand} = ${digit} + \\dfrac{${step.result}}{${step.denominator}}`}
                                                        />
                                                        <span className="ml-3 text-muted-foreground">→ raqam {digit}</span>
                                                    </span>
                                                );
                                            })}
                                            {toFractionalPart.period.isPeriod !== false && (
                                                <span className="block font-bold p-1 text-muted-foreground">… davr takrorlanadi</span>
                                            )}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            {toFractionalPart.period.isPeriod === true && (
                                                <span className="block mb-1">
                                                    Bu jarayon davriy: davr uzunligi {toFractionalPart.period.length} raqam
                                                    {toFractionalPart.value.includes("(") ? " (qavs ichida)" : ""}.
                                                </span>
                                            )}
                                            {toFractionalPart.period.isPeriod === null && (
                                                <span className="block mb-1">Davr juda uzun — taxminiy qiymat ko‘rsatilmoqda.</span>
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
                            <strong className="block mb-1">Yakuniy natija:</strong>
                            {isNegative && (
                                <span className="block text-sm text-muted-foreground mb-1">Manfiy ishora saqlanib qoladi.</span>
                            )}
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
