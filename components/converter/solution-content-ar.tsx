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

export default function SolutionContentAR(props: SolutionContentProps) {
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
    const fromName = t("calculator.info.title." + fromBase);
    const toName = t("calculator.info.title." + toBase);
    const decimalName = t("calculator.info.title.10");
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
                            تحويل{" "}
                            <code className="bg-card text-card-foreground px-1 rounded mx-1" dir="ltr">
                                {isNegative && "−"}
                                {displayWhole}
                                {isFractional && "."}
                                {inputFractionalPart}
                                {SUBSCRIPTS[fromBase]}
                            </code>{" "}
                            من {fromName} إلى {toName}
                        </h2>

                        {needsTwoSteps && (
                            <p className="mb-4 text-muted-foreground">
                                بدل التحويل المباشر، ننتقل أولاً إلى {decimalName}، ثم إلى النظام الهدف. هذه الطريقة تعمل لأي أساسين.
                            </p>
                        )}

                        {part.count > 1 && (
                            <p className="mb-4">
                                أولاً، نجزّئ العدد إلى أجزاء:
                                {part.negative && (
                                    <span className="block mt-1">
                                        الإشارة: <code className="bg-card text-card-foreground p-1 rounded" dir="ltr">−</code>
                                        <span className="text-muted-foreground mr-2">(نعيدها في النهاية)</span>
                                    </span>
                                )}
                                {part.whole && (
                                    <span className="block mt-1">
                                        الجزء الصحيح:{" "}
                                        <code className="bg-card text-card-foreground p-1 rounded" dir="ltr">
                                            {displayWhole}
                                        </code>
                                    </span>
                                )}
                                {part.fraction && (
                                    <span className="block mt-1">
                                        الجزء الكسري:{" "}
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
                                        {needsTwoSteps && "الخطوة 1: "}
                                        التحويل من {fromName} إلى {decimalName}
                                    </strong>
                                </p>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    نضرب كل رقم في قوة لـ {fromBase} حسب موضعه (
                                    <span dir="ltr" className="inline-block">
                                        {fromBase}
                                        {superScript(0)}، {fromBase}
                                        {superScript(1)}، {fromBase}
                                        {superScript(2)}، …
                                    </span>
                                    ) ثم نجمع النواتج.
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        <p className="font-medium">
                                            الجزء الصحيح:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                                {displayWhole}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2 mt-2">التوسّع حسب المنازل:</p>
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
                                        الجزء الصحيح هو <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">0</code>، إذن الجزء الصحيح
                                        العشري أيضاً{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                            0{SUBSCRIPTS[10]}
                                        </code>
                                        .
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className={`font-medium mb-2 ${!isHiddenWholePart ? "mt-8" : ""}`}>
                                            الجزء الكسري:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                                0.{inputFractionalPart}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2">الأرقام بعد الفاصلة تُكتب بقوى سالبة:</p>
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
                                    إذن،{" "}
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
                                        {needsTwoSteps && "الخطوة 2: "}
                                        التحويل من {decimalName} إلى {toName}
                                    </strong>
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        {!isHiddenFractionalPart && (
                                            <p className="font-medium">
                                                الجزء الصحيح:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                                    {decWholePart}
                                                    {SUBSCRIPTS[10]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-2 mt-2">
                                            نقسم على {toBase} مراراً ونسجّل كل <em>باقٍ</em>. الباقي هو أرقام النظام الجديد:
                                        </p>
                                        <pre
                                            className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap text-left"
                                            dir="ltr"
                                        >
                                            {toWholePart.steps
                                                .map((step) => `${step.dividend} ÷ ${step.divisor} = ${step.quotient} ، الباقي ${step.remainder}`)
                                                .join("\n")}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            نقرأ الباقي <em>من الأسفل إلى الأعلى</em>:
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
                                        الجزء الصحيح{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                            0{SUBSCRIPTS[10]}
                                        </code>{" "}
                                        يبقى{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded" dir="ltr">
                                            0{SUBSCRIPTS[toBase]}
                                        </code>{" "}
                                        في النظام الهدف.
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className="font-medium mt-8 mb-2">
                                            الجزء الكسري:{" "}
                                            <code className="bg-card text-card-foreground px-1 py-1 rounded" dir="ltr">
                                                0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]} {decFractionalPart.exact ? "=" : "≈"}{" "}
                                                <InlineMath math={`\\dfrac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </code>
                                        </p>

                                        <p className="mb-2">
                                            نضرب الكسر في {toBase}: <em>الجزء الصحيح</em> من الناتج هو الرقم التالي، ثم نواصل مع{" "}
                                            <em>الكسر المتبقي</em>:
                                        </p>

                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 text-left" dir="ltr">
                                            {toFractionalPart.steps.map((step, i) => {
                                                const digit = DIGITS[step.remainder];
                                                return (
                                                    <span className="block py-1.5" key={i}>
                                                        <InlineMath
                                                            math={`\\dfrac{${step.numerator}}{${step.denominator}} \\times ${step.multiplicand} = ${digit} + \\dfrac{${step.result}}{${step.denominator}}`}
                                                        />
                                                        <span className="ml-3 text-muted-foreground">→ الرقم {digit}</span>
                                                    </span>
                                                );
                                            })}
                                            {toFractionalPart.period.isPeriod !== false && (
                                                <span className="block font-bold p-1 text-muted-foreground">… تتكرر الدورة</span>
                                            )}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            {toFractionalPart.period.isPeriod === true && (
                                                <span className="block mb-1">
                                                    العملية دورية: طول الدورة {toFractionalPart.period.length}
                                                    {toFractionalPart.value.includes("(") ? " (بين القوسين)" : ""}.
                                                </span>
                                            )}
                                            {toFractionalPart.period.isPeriod === null && (
                                                <span className="block mb-1">الدورة طويلة جداً — نعرض قيمة تقريبية.</span>
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
                            <strong className="block mb-1">النتيجة النهائية:</strong>
                            {isNegative && <span className="block text-sm text-muted-foreground mb-1">تُحفظ الإشارة السالبة.</span>}
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
