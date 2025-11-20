"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { CONVERTER_SOLUTION_FRACTIONAL_PART } from "@/src/lib/default-values/fractional-part";
import { CONVERTER_SOLUTION_FRACTIONAL_PART_ON_TO_BASE } from "@/src/lib/default-values/fractional-part";
import { CONVERTER_SOLUTION_WHOLE_PART_ON_TO_BASE } from "@/src/lib/default-values/whole-part";
import { FractionalPart } from "@/src/lib/types/converter";
import { FractionalPartOnToBase } from "@/src/lib/types/converter";
import { WholePartOnToBase } from "@/src/lib/types/converter";
import { Language } from "@/src/lib/types/language";
import { getTranslation } from "@/src/lib/translater/i18n";
import { convertToDecimal } from "@/src/lib/utils/solution/convert-to-decimal";
import { convertFractionToDecimal } from "@/src/lib/utils/solution/convert-fraction-to-decimal";
import { convertFromDecimal } from "@/src/lib/utils/solution/convert-from-decimal";
import { convertFractionFromDecimal } from "@/src/lib/utils/solution/convert-fraction-from-decimal";
import { checkNumberFromBase } from "@/src/lib/utils/solution/check-number-from-base";
import SolutionContentUZ from "./solution-content-uz";

type Props = {
    inputNumber: string;
    fromBase: number;
    toBase: number;
    lang: Language;
    setResult: Dispatch<SetStateAction<string>>;
    waiting: boolean;
    setWaiting: Dispatch<SetStateAction<boolean>>;
    isHidden: boolean;
    setIsHidden: Dispatch<SetStateAction<boolean>>;
};

export type SolutionContentProps = {
    inputNumber: string;
    fromBase: number;
    toBase: number;
    lang: Language;
    waiting: boolean;
    isHidden: boolean;
    part: { whole: boolean; fraction: boolean; negative: boolean; count: number };
    isFractional: boolean;
    inputWholePart: string;
    inputFractionalPart: string;
    isHiddenStep1: boolean;
    isHiddenWholePart: boolean;
    isHiddenStep2: boolean;
    decWholePart: string;
    decFractionalPart: FractionalPart;
    isHiddenFractionalPart: boolean;
    toWholePart: WholePartOnToBase;
    toFractionalPart: FractionalPartOnToBase;
    isNegative: boolean;
};

export default function Solution({ inputNumber, fromBase, toBase, lang, setResult, setWaiting, waiting, isHidden, setIsHidden }: Props) {
    const t = getTranslation(lang);
    const [isHiddenWholePart, setIsHiddenWholePart] = useState(true);
    const [isHiddenFractionalPart, setIsHiddenFractionalPart] = useState(true);
    const [isHiddenStep1, setIsHiddenStep1] = useState(true);
    const [isHiddenStep2, setIsHiddenStep2] = useState(true);
    const [part, setPart] = useState({ whole: false, fraction: false, negative: false, count: 0 });

    const [isFractional, setIsFractional] = useState(false);
    const [isNegative, setIsNegative] = useState(false);

    const [inputWholePart, setInputWholePart] = useState("");
    const [inputFractionalPart, setInputFractionalPart] = useState("");

    const [decWholePart, setDecWholePart] = useState("");
    const [decFractionalPart, setDecFractionalPart] = useState(CONVERTER_SOLUTION_FRACTIONAL_PART);

    const [toWholePart, toDecWholePart] = useState(CONVERTER_SOLUTION_WHOLE_PART_ON_TO_BASE);
    const [toFractionalPart, setToFractionalPart] = useState(CONVERTER_SOLUTION_FRACTIONAL_PART_ON_TO_BASE);

    useEffect(() => {
        const checkNumber = checkNumberFromBase(inputNumber, fromBase);
        if (!checkNumber || !Boolean(inputNumber)) {
            setIsHidden(true);
        } else {
            const checkNegative = inputNumber[0] === "-";
            const checkFractional = inputNumber.includes(".");
            const num = checkNegative ? inputNumber.slice(1).toUpperCase() : inputNumber.toUpperCase();

            const wholePart = num.split(".")[0];
            const fractionalPart = num.split(".")[1] || "";

            const decWholePart = convertToDecimal(wholePart, fromBase);
            const decFractionalPart = convertFractionToDecimal(fractionalPart, fromBase);

            const toWholePart = convertFromDecimal(decWholePart, toBase);
            const toFractionalPart = convertFractionFromDecimal(decFractionalPart, toBase);

            setIsNegative(checkNegative);
            setIsFractional(checkFractional);

            setInputWholePart(wholePart);
            setInputFractionalPart(fractionalPart);
            setDecWholePart(String(decWholePart));
            setDecFractionalPart(decFractionalPart);
            toDecWholePart(toWholePart);
            setToFractionalPart(toFractionalPart);

            setPart({
                whole: Boolean(wholePart),
                fraction: Boolean(fractionalPart),
                negative: checkNegative,
                count: Number(Boolean(wholePart)) + Number(Boolean(fractionalPart)) + Number(checkNegative),
            });

            setResult(`${toFractionalPart.exact ? "" : "≈"}${checkNegative ? "-" : ""}${toWholePart.value}${checkFractional ? toFractionalPart.value : ""}`);

            setIsHiddenStep1(fromBase === 10);
            setIsHiddenStep2(toBase === 10);
            setIsHiddenWholePart(!Boolean(wholePart));
            setIsHiddenFractionalPart(!Boolean(fractionalPart));
            setIsHidden(false);
        }
        setWaiting(false);
    }, [inputNumber, fromBase, toBase]);

    // if (lang === "uz")
    return (
        <SolutionContentUZ
            decFractionalPart={decFractionalPart}
            decWholePart={decWholePart}
            fromBase={fromBase}
            inputFractionalPart={inputFractionalPart}
            inputNumber={inputNumber}
            inputWholePart={inputWholePart}
            isFractional={isFractional}
            isHidden={isHidden}
            isHiddenFractionalPart={isHiddenFractionalPart}
            isHiddenStep1={isHiddenStep1}
            isHiddenStep2={isHiddenStep2}
            isHiddenWholePart={isHiddenWholePart}
            isNegative={isNegative}
            lang={lang}
            part={part}
            toBase={toBase}
            toFractionalPart={toFractionalPart}
            toWholePart={toWholePart}
            waiting={waiting}
        />
    );
}
