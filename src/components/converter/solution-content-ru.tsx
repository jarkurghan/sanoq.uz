import React from "react";
import { NUMERAL_VALUE_DICTIONARY } from "@/src/lib/constants/numeral-system";
import { SUPERSCRIPTMINUS } from "@/src/lib/constants/exponent";
import { SUPERSCRIPTS } from "@/src/lib/constants/exponent";
import { SUBSCRIPTS } from "@/src/lib/constants";
import { SolutionContentProps } from "./solution";
import { getTranslation } from "@/src/lib/translater/i18n";
import { InlineMath } from "react-katex";
import { create, all } from "mathjs";
import Spinner from "../global/spinner";

const math = create(all);

export default function SolutionContentRU(props: SolutionContentProps) {
    const { inputNumber, fromBase, toBase } = props;
    const { part, isFractional, isNegative } = props;
    const { waiting, isHidden } = props;
    const { inputWholePart, inputFractionalPart } = props;
    const { isHiddenStep1, isHiddenStep2 } = props;
    const { isHiddenWholePart, isHiddenFractionalPart } = props;
    const { decWholePart, decFractionalPart } = props;
    const { toWholePart, toFractionalPart } = props;
    const { lang } = props;

    const t = getTranslation(lang);

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
                            Переводим число {inputNumber.toUpperCase()} из {t("calculator.info.title." + fromBase).toLowerCase()} в{" "}
                            {t("calculator.info.title." + toBase).toLowerCase()}
                        </h2>

                        {part.count > 1 && (
                            <p className="mb-4">
                                Сначала разделим число на {part.count} части:
                                {part.negative && (
                                    <span className="block">
                                        знак:
                                        <code className="bg-card text-card-foreground p-1 rounded">-</code>
                                    </span>
                                )}
                                {part.whole && (
                                    <span className="block">
                                        целая часть:
                                        <code className="bg-card text-card-foreground p-1 rounded">{inputWholePart}</code>
                                    </span>
                                )}
                                {part.fraction && (
                                    <span className="block">
                                        дробная часть:
                                        <code className="bg-card text-card-foreground p-1 rounded">{inputFractionalPart}</code>
                                    </span>
                                )}
                            </p>
                        )}
                        {!isHiddenStep1 && (
                            <React.Fragment>
                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        <p className="mb-4">
                                            <strong>
                                                {!isHiddenStep2 && "Шаг 1: "}
                                                Переводим из {t("calculator.info.title." + fromBase).toLowerCase()} в десятичную систему
                                            </strong>
                                        </p>

                                        <p className="font-medium">
                                            Целая часть:{" "}
                                            <code className="bg-card text-card-foreground px-1 rounded">
                                                {inputWholePart}
                                                {SUBSCRIPTS[fromBase]}
                                            </code>
                                        </p>

                                        <p className="mb-4">Каждая цифра в {t("calculator.info.title." + fromBase).toLowerCase()} вычисляется так:</p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            <span className="block">
                                                {inputWholePart
                                                    .split("")
                                                    .map(
                                                        (raqam, i) =>
                                                            `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${fromBase}${SUPERSCRIPTS[inputWholePart.length - 1 - i]}`
                                                    )
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">
                                                ={" "}
                                                {inputWholePart
                                                    .split("")
                                                    .map(
                                                        (raqam, i) =>
                                                            `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${math.pow(fromBase, inputWholePart.length - 1 - i)}`
                                                    )
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">
                                                ={" "}
                                                {inputWholePart
                                                    .split("")
                                                    .map(
                                                        (raqam, i) =>
                                                            `${math.multiply(
                                                                Number(NUMERAL_VALUE_DICTIONARY[raqam]),
                                                                math.pow(fromBase, inputWholePart.length - 1 - i)
                                                            )}`
                                                    )
                                                    .join(" + ")}
                                            </span>
                                            <span className="block">= {decWholePart}</span>
                                        </pre>
                                    </React.Fragment>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        {!isHiddenWholePart && (
                                            <p className="font-medium mt-8 mb-2">
                                                Дробная часть:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded">
                                                    0.{inputFractionalPart}
                                                    {SUBSCRIPTS[fromBase]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-4">Если это число в {t("calculator.info.title." + fromBase).toLowerCase()}:</p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            <span className="block">
                                                {inputFractionalPart
                                                    .split("")
                                                    .map(
                                                        (raqam, i) =>
                                                            `${NUMERAL_VALUE_DICTIONARY[raqam]} × ${fromBase}${SUPERSCRIPTMINUS}${SUPERSCRIPTS[i + 1]}`
                                                    )
                                                    .join(" + ")}
                                            </span>
                                            <span className="block py-1">
                                                ={" "}
                                                {inputFractionalPart.split("").map((raqam, i) => (
                                                    <span key={i}>
                                                        <InlineMath math={`\\frac{${NUMERAL_VALUE_DICTIONARY[raqam]}}{${fromBase}${SUPERSCRIPTS[i + 1]}}`} />
                                                        {i !== inputFractionalPart.length - 1 && " + "}
                                                    </span>
                                                ))}
                                            </span>
                                            <span className="block py-1">
                                                ={" "}
                                                {inputFractionalPart.split("").map((raqam, i) => (
                                                    <span key={i}>
                                                        <InlineMath math={`\\frac{${NUMERAL_VALUE_DICTIONARY[raqam]}}{${math.pow(fromBase, i + 1)}}`} />
                                                        {i !== inputFractionalPart.length - 1 && " + "}
                                                    </span>
                                                ))}
                                            </span>
                                            <span className="block py-1">
                                                = <InlineMath math={`\\frac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </span>
                                            <span className="block">
                                                {decFractionalPart.exact ? "=" : "≈"} 0{decFractionalPart.value}
                                            </span>
                                        </pre>
                                    </React.Fragment>
                                )}
                                <p className="font-medium mt-8">
                                    Значит,{" "}
                                    <code className="bg-card text-card-foreground px-1 rounded">
                                        {inputWholePart}
                                        {isFractional ? "." : ""}
                                        {inputFractionalPart}
                                        {SUBSCRIPTS[fromBase]} {decFractionalPart.exact ? "=" : "≈"} {decWholePart}
                                        {decFractionalPart.value}
                                        {SUBSCRIPTS[10]}
                                    </code>
                                </p>
                            </React.Fragment>
                        )}

                        {!isHiddenStep2 && (
                            <React.Fragment>
                                <p className="mb-4 mt-8">
                                    <strong>
                                        {!isHiddenStep1 && "Шаг 2: "}
                                        Переводим из десятичной системы в {t("calculator.info.title." + toBase).toLowerCase()}
                                    </strong>
                                </p>

                                {!isHiddenWholePart && (
                                    <React.Fragment>
                                        {!isHiddenFractionalPart && (
                                            <p className="font-medium">
                                                Целая часть:{" "}
                                                <code className="bg-card text-card-foreground px-1 rounded">
                                                    {decWholePart}
                                                    {SUBSCRIPTS[10]}
                                                </code>
                                            </p>
                                        )}

                                        <p className="mb-4">
                                            Чтобы перевести число из десятичной системы в {t("calculator.info.title." + toBase).toLowerCase()}, делим нацело:
                                        </p>
                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2 whitespace-pre-wrap">
                                            {toWholePart.steps
                                                .map((step) => `${step.dividend} ÷ ${step.divisor} = ${step.quotient}     остаток ${step.remainder}`)
                                                .join("\n")}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            Записываем снизу вверх:
                                            <code className="bg-card text-card-foreground p-1 rounded">
                                                {decWholePart}
                                                {SUBSCRIPTS[10]} = {toWholePart.value}
                                                {SUBSCRIPTS[toBase]}
                                            </code>
                                        </p>
                                    </React.Fragment>
                                )}

                                {!isHiddenFractionalPart && (
                                    <React.Fragment>
                                        <p className="font-medium mt-8 mb-2">
                                            Дробная часть:{" "}
                                            <code className="bg-card text-card-foreground px-1 py-2 rounded">
                                                0{decFractionalPart.value}
                                                {SUBSCRIPTS[10]} {decFractionalPart.exact ? "=" : "≈"}{" "}
                                                <InlineMath math={`\\frac{${decFractionalPart.numerator}}{${decFractionalPart.denominator}}`} />
                                            </code>
                                        </p>

                                        <p className="mb-4">Чтобы перевести дробь в {t("calculator.info.title." + toBase).toLowerCase()}:</p>

                                        <pre className="bg-card text-card-foreground p-4 rounded-md text-sm font-mono mt-2">
                                            {toFractionalPart.steps.map((step, i) => (
                                                <span className="block py-1" key={i}>
                                                    <span className="inline-block w-80">
                                                        <InlineMath math={`\\frac{${step.numerator}}{${step.denominator}}`} /> × {step.multiplicand} ={" "}
                                                        {step.remainder !== 0 && step.remainder}
                                                        <InlineMath math={`\\frac{${step.result}}{${step.denominator}}`} /> = {step.remainder} +{" "}
                                                        <InlineMath math={`\\frac{${step.result}}{${step.denominator}}`} />
                                                    </span>
                                                    {step.remainder}
                                                </span>
                                            ))}
                                            {toFractionalPart.period.isPeriod !== false && <span className="font-bold p-1">...</span>}
                                        </pre>
                                        <p className="font-medium mt-2">
                                            {toFractionalPart.period.isPeriod !== false && (
                                                <span>
                                                    Этот процесс продолжается периодически. Длина периода{" "}
                                                    {toFractionalPart.period.isPeriod === true ? toFractionalPart.period.length : "довольно большая"}:
                                                </span>
                                            )}
                                            <code className="block bg-card text-card-foreground px-1 rounded">
                                                0{toFractionalPart.value}
                                                {!toFractionalPart.exact && "..."}
                                            </code>
                                        </p>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        )}

                        <p className="font-medium mt-8 mb-2">
                            <strong className="block">Итоговый результат:</strong>
                            <code className="bg-card text-card-foreground p-1 rounded">
                                {isNegative && "-"}
                                {inputWholePart}
                                {isFractional && "."}
                                {inputFractionalPart}
                                {SUBSCRIPTS[fromBase]} {toFractionalPart.exact ? "=" : "≈"} {isNegative && "-"}
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
