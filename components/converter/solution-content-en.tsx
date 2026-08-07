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

export default function SolutionContentEN(props: SolutionContentProps) {
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
                            Convert{" "}
                            <code className="bg-card text-card-foreground px-1 rounded mx-1">
                                {isNegative && "−"}
                                {displayWhole}
                                {isFractional && "."}
                                {inputFractionalPart}
                                {SUBSCRIPTS[fromBase]}
                            </code>{" "}
                            from {fromName} to {toName}
                        </h2>

                        {needsTwoSteps && (
                            <p className="mb-4 text-muted-foreground">
                                Instead of converting directly, we first go to {decimalName}, then to the target system. This works for any pair of bases.
                            </p>
                        )}

                        {part.count > 1 && (
                            <p className="mb-4">
                                First, split the number into parts:
                                {part.negative && (
                                    <span className="block mt-1">
                                        sign: <code className="bg-card text-card-foreground p-1 rounded">−</code>
                                        <span className="text-muted-foreground ml-2">(reattached at the end)</span>
                                    </span>
                                )}
                                {part.whole && (
                                    <span className="block mt-1">
                                        integer part: <code className="bg-card text-card-foreground p-1 rounded">{displayWhole}</code>
                                    </span>
                                )}
                                {part.fraction && (
                                    <span className="block mt-1">
                                        fractional part: <code className="bg-card text-card-foreground p-1 rounded">0.{inputFractionalPart}</code>
                                    </span>
                                )}
                            </p>
                        )}

                        {!isHiddenStep1 && (
                            <React.Fragment>
                                <p className="mb-4">
                                    <strong>
                                        {needsTwoSteps && "Step 1: "}
                                        Convert from {fromName} to {decimalName}
                                    </strong>
                                </p>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    Each digit is multiplied by a power of {fromBase} according to its place (
                                    {fromBase}
                                    {superScript(0)}, {fromBase}
                                    {superScript(1)}, {fromBase}
                                    {superScript(2)}, …), then the products are added.
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        <p className="font-medium">
                                            Integer part:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded">
                                                {displayWhole}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2 mt-2">Place-value expansion:</p>
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
                                        The integer part is <code className="bg-card text-card-foreground px-1 rounded">0</code>, so the decimal integer part is
                                        also <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[10]}</code>.
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className={`font-medium mb-2 ${!isHiddenWholePart ? "mt-8" : ""}`}>
                                            Fractional part:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded">
                                                0.{inputFractionalPart}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-2">Digits after the point use negative powers:</p>
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
                                    Therefore,{" "}
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
                                        {needsTwoSteps && "Step 2: "}
                                        Convert from {decimalName} to {toName}
                                    </strong>
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        {!isHiddenFractionalPart && (
                                            <p className="font-medium">
                                                Integer part:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded">
                                                    {decWholePart}
                                                    {SUBSCRIPTS[10]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-2 mt-2">
                                            Divide by {toBase} repeatedly and record each <em>remainder</em>. The remainders are the digits in the new base:
                                        </p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            {toWholePart.steps
                                                .map((step) => `${step.dividend} ÷ ${step.divisor} = ${step.quotient} , remainder ${step.remainder}`)
                                                .join("\n")}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            Read the remainders <em>from bottom to top</em>:
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
                                        Integer part <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[10]}</code> stays{" "}
                                        <code className="bg-card text-card-foreground px-1 rounded">0{SUBSCRIPTS[toBase]}</code> in the target system.
                                    </p>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className="font-medium mt-8 mb-2">
                                            Fractional part:{" "}
                                            <code className="bg-card text-card-foreground px-1 py-1 rounded">
                                                0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]} {decFractionalPart.exact ? "=" : "≈"}{" "}
                                                <InlineMath math={`\\dfrac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </code>
                                        </p>

                                        <p className="mb-2">
                                            Multiply the fraction by {toBase}: the <em>integer part</em> of the product is the next digit; continue with the{" "}
                                            <em>remaining fraction</em>:
                                        </p>

                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2">
                                            {toFractionalPart.steps.map((step, i) => {
                                                const digit = DIGITS[step.remainder];
                                                return (
                                                    <span className="block py-1.5" key={i}>
                                                        <InlineMath
                                                            math={`\\dfrac{${step.numerator}}{${step.denominator}} \\times ${step.multiplicand} = ${digit} + \\dfrac{${step.result}}{${step.denominator}}`}
                                                        />
                                                        <span className="ml-3 text-muted-foreground">→ digit {digit}</span>
                                                    </span>
                                                );
                                            })}
                                            {toFractionalPart.period.isPeriod !== false && (
                                                <span className="block font-bold p-1 text-muted-foreground">… the period repeats</span>
                                            )}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            {toFractionalPart.period.isPeriod === true && (
                                                <span className="block mb-1">
                                                    This process is periodic: period length {toFractionalPart.period.length}
                                                    {toFractionalPart.value.includes("(") ? " (shown in parentheses)" : ""}.
                                                </span>
                                            )}
                                            {toFractionalPart.period.isPeriod === null && (
                                                <span className="block mb-1">The period is very long — an approximate value is shown.</span>
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
                            <strong className="block mb-1">Final result:</strong>
                            {isNegative && <span className="block text-sm text-muted-foreground mb-1">The negative sign is kept.</span>}
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
