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

function systemName(t: (key: string) => string, base: number): string {
    const linguistic = NUMERAL_NAME_TO_LINGUISTIC_NAME[String(base)];
    return linguistic ? t("numbersystem." + linguistic) : t("calculator.info.title." + base);
}

export default function SolutionContentUG(props: SolutionContentProps) {
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
                    <div className="mx-auto pt-10 leading-relaxed" dir="rtl">
                        <h2 className="text-xl font-bold mt-6 mb-4">
                            <code className="bg-card text-card-foreground px-1 rounded mx-1" dir="ltr">
                                {isNegative && "−"}
                                {displayWhole}
                                {isFractional && "."}
                                {inputFractionalPart}
                                {SUBSCRIPTS[fromBase]}
                            </code>{" "}
                            نى {fromName}دىن {toName}غا ئايلاندۇرۇش
                        </h2>

                        {needsTwoSteps && (
                            <p className="mb-4 text-muted-foreground">
                                بىۋاسىتە ئايلاندۇرۇش ئورنىغا، ئالدى بىلەن {decimalName}غا، ئاندىن نىشان سىستېمىسىغا ئۆتىمىز. بۇ ئۇسۇل خالىغان ئىككى ئاساس
                                ئارىسىدا ئىشلەيدۇ.
                            </p>
                        )}

                        {part.count > 1 && (
                            <p className="mb-4">
                                ئالدى بىلەن ساننى قىسىملارغا ئايرىيمىز:
                                {part.negative && (
                                    <span className="block mt-1">
                                        بەلگە: <code className="bg-card text-card-foreground p-1 rounded" dir="ltr">−</code>
                                        <span className="text-muted-foreground mr-2">(ئاخىرىدا قايتا قويۇلىدۇ)</span>
                                    </span>
                                )}
                                {part.whole && (
                                    <span className="block mt-1">
                                        پۈتۈن قىسمى:{" "}
                                        <code className="bg-card text-card-foreground p-1 rounded" dir="ltr">
                                            {displayWhole}
                                        </code>
                                    </span>
                                )}
                                {part.fraction && (
                                    <span className="block mt-1">
                                        كەسىر قىسمى:{" "}
                                        <code className="bg-card text-card-foreground p-1 rounded" dir="ltr">
                                            0.{inputFractionalPart}
                                        </code>
                                    </span>
                                )}
                            </p>
                        )}

                        {!isHiddenStep1 && (
                            <React.Fragment>
                                <p className="mb-4">
                                    <strong>
                                        {needsTwoSteps && "1-قەدەم: "}
                                        {fromName}دىن {decimalName}غا ئايلاندۇرىمىز
                                    </strong>
                                </p>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    ھەر بىر رەقەم ئورنىغا قاراپ {fromBase} نىڭ دەرىجىسىگە كۆپەيتىلىدۇ (
                                    <span dir="ltr" className="inline-block">
                                        {fromBase}
                                        {superScript(0)}، {fromBase}
                                        {superScript(1)}، {fromBase}
                                        {superScript(2)}، …
                                    </span>
                                    )، ئاندىن يىغىندىسى ئېلىنىدۇ.
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        <p className="font-medium">
                                            پۈتۈن قىسمى:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                                {displayWhole}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2 mt-2">ئورۇن قىممىتى يىغىندىسى:</p>
                                        <pre
                                            className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap text-left"
                                            dir="ltr"
                                        >
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
                                        پۈتۈن قىسىم <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">0</code> — شۇڭا ئونلۇقتىكى پۈتۈن قىسىم
                                        ھەم{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                            0{SUBSCRIPTS[10]}
                                        </code>
                                        .
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className={`font-medium mb-2 ${!isHiddenWholePart ? "mt-8" : ""}`}>
                                            كەسىر قىسمى:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                                0.{inputFractionalPart}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2">چېكىتتىن كېيىنكى رەقەملەر مەنپىي دەرىجە بىلەن يېزىلىدۇ:</p>
                                        <pre
                                            className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap text-left"
                                            dir="ltr"
                                        >
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
                                    دېمەك،{" "}
                                    <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
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
                                        {needsTwoSteps && "2-قەدەم: "}
                                        {decimalName}دىن {toName}غا ئايلاندۇرىمىز
                                    </strong>
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        {!isHiddenFractionalPart && (
                                            <p className="font-medium">
                                                پۈتۈن قىسمى:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                                    {decWholePart}
                                                    {SUBSCRIPTS[10]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-2 mt-2">
                                            ساننى {toBase} گە بۆلۈپ، ھەر قېتىم <em>قالدۇق</em>نى يېزىپ بارىمىز. قالدۇقلار — يېڭى سىستېمىدىكى رەقەملەر:
                                        </p>
                                        <pre
                                            className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap text-left"
                                            dir="ltr"
                                        >
                                            {toWholePart.steps
                                                .map((step) => `${step.dividend} ÷ ${step.divisor} = ${step.quotient} ، قالدۇق ${step.remainder}`)
                                                .join("\n")}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            قالدۇقلارنى <em>ئاستىدىن ئۈستىگە</em> ئوقۇيمىز:
                                            <code className="mr-2 bg-card text-card-foreground p-1 rounded" dir="ltr">
                                                {decWholePart}
                                                {SUBSCRIPTS[10]} = {toWholePart.value}
                                                {SUBSCRIPTS[toBase]}
                                            </code>
                                        </p>
                                    </React.Fragment>
                                )}

                                {isZeroWhole && (
                                    <p className="mb-4">
                                        پۈتۈن قىسىم{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                            0{SUBSCRIPTS[10]}
                                        </code>{" "}
                                        — نىشان سىستېمىسىدا ھەم{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                            0{SUBSCRIPTS[toBase]}
                                        </code>
                                        .
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className="font-medium mt-8 mb-2">
                                            كەسىر قىسمى:{" "}
                                            <code className="bg-card text-card-foreground px-1 py-1 rounded" dir="ltr">
                                                0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]} {decFractionalPart.exact ? "=" : "≈"}{" "}
                                                <InlineMath math={`\\dfrac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </code>
                                        </p>

                                        <p className="mb-2">
                                            كەسىرنى {toBase} گە كۆپەيتىمىز: ھاسىل بولغان <em>پۈتۈن قىسىم</em> — كېيىنكى رەقەم؛ <em>قالغان كەسىر</em> بىلەن داۋام
                                            قىلىمىز:
                                        </p>

                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 text-left" dir="ltr">
                                            {toFractionalPart.steps.map((step, i) => {
                                                const digit = DIGITS[step.remainder];
                                                return (
                                                    <span className="block py-1.5" key={i}>
                                                        <InlineMath
                                                            math={`\\dfrac{${step.numerator}}{${step.denominator}} \\times ${step.multiplicand} = ${digit} + \\dfrac{${step.result}}{${step.denominator}}`}
                                                        />
                                                        <span className="ml-3 text-muted-foreground">→ رەقەم {digit}</span>
                                                    </span>
                                                );
                                            })}
                                            {toFractionalPart.period.isPeriod !== false && (
                                                <span className="block font-bold p-1 text-muted-foreground">… دەۋر تەكرارلىنىدۇ</span>
                                            )}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            {toFractionalPart.period.isPeriod === true && (
                                                <span className="block mb-1">
                                                    بۇ جەريان دەۋرىي: دەۋر ئۇزۇنلۇقى {toFractionalPart.period.length}
                                                    {toFractionalPart.value.includes("(") ? " (تىرناق ئىچىدە)" : ""}.
                                                </span>
                                            )}
                                            {toFractionalPart.period.isPeriod === null && (
                                                <span className="block mb-1">دەۋر بەك ئۇزۇن — تەخمىنىي قىممەت كۆرسىتىلدى.</span>
                                            )}
                                            <code className="block bg-card text-card-foreground px-1 rounded" dir="ltr">
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
                            <strong className="block mb-1">ئاخىرقى نەتىجە:</strong>
                            {isNegative && <span className="block text-sm text-muted-foreground mb-1">مەنپىي بەلگە ساقلىنىپ قالىدۇ.</span>}
                            <code className="bg-card text-card-foreground p-1 rounded text-base" dir="ltr">
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
