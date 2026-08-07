"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { CONVERTER_SOLUTION_FRACTIONAL_PART } from "@/lib/default-values/fractional-part";
import { CONVERTER_SOLUTION_FRACTIONAL_PART_ON_TO_BASE } from "@/lib/default-values/fractional-part";
import { CONVERTER_SOLUTION_WHOLE_PART_ON_TO_BASE } from "@/lib/default-values/whole-part";
import { FractionalPart } from "@/lib/types/converter";
import { FractionalPartOnToBase } from "@/lib/types/converter";
import { WholePartOnToBase } from "@/lib/types/converter";
import { Language } from "@/lib/types/language";
import { convertToDecimal } from "@/lib/utils/solution/convert-to-decimal";
import { convertFractionToDecimal } from "@/lib/utils/solution/convert-fraction-to-decimal";
import { convertFromDecimal } from "@/lib/utils/solution/convert-from-decimal";
import { convertFractionFromDecimal } from "@/lib/utils/solution/convert-fraction-from-decimal";
import { checkNumberFromBase } from "@/lib/utils/solution/check-number-from-base";
import SolutionContentUZ from "./solution-content-uz";
import SolutionContentEN from "./solution-content-en";
import SolutionContentRU from "./solution-content-ru";
import SolutionContentAR from "./solution-content-ar";
import SolutionContentUG from "./solution-content-ug";
import SolutionContentTG from "./solution-content-tg";
import SolutionContentTR from "./solution-content-tr";
import SolutionContentAZ from "./solution-content-az";
import SolutionContentKK from "./solution-content-kk";
import SolutionContentBA from "./solution-content-ba";
import SolutionContentTT from "./solution-content-tt";
import SolutionContentTK from "./solution-content-tk";
import SolutionContentKY from "./solution-content-ky";

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
    isZeroWhole?: boolean;
};

export default function Solution({ inputNumber, fromBase, toBase, lang, setResult, setWaiting, waiting, isHidden, setIsHidden }: Props) {
    const [isHiddenWholePart, setIsHiddenWholePart] = useState(true);
    const [isHiddenFractionalPart, setIsHiddenFractionalPart] = useState(true);
    const [isHiddenStep1, setIsHiddenStep1] = useState(true);
    const [isHiddenStep2, setIsHiddenStep2] = useState(true);
    const [part, setPart] = useState({ whole: false, fraction: false, negative: false, count: 0 });

    const [isFractional, setIsFractional] = useState(false);
    const [isNegative, setIsNegative] = useState(false);
    const [isZeroWhole, setIsZeroWhole] = useState(false);

    const [inputWholePart, setInputWholePart] = useState("");
    const [inputFractionalPart, setInputFractionalPart] = useState("");

    const [decWholePart, setDecWholePart] = useState("");
    const [decFractionalPart, setDecFractionalPart] = useState(CONVERTER_SOLUTION_FRACTIONAL_PART);

    const [toWholePart, setToWholePart] = useState(CONVERTER_SOLUTION_WHOLE_PART_ON_TO_BASE);
    const [toFractionalPart, setToFractionalPart] = useState(CONVERTER_SOLUTION_FRACTIONAL_PART_ON_TO_BASE);

    useEffect(() => {
        const trimmed = inputNumber.trim();
        const checkNumber = checkNumberFromBase(trimmed, fromBase);

        if (!checkNumber || !trimmed) {
            setIsHidden(true);
            setResult("");
            setWaiting(false);
            return;
        }

        const checkNegative = trimmed[0] === "-";
        const num = (checkNegative ? trimmed.slice(1) : trimmed).toUpperCase();

        const fractionalPart = num.includes(".") ? num.split(".")[1] || "" : "";
        let wholePart = num.includes(".") ? num.split(".")[0] : num;
        if (wholePart === "" && fractionalPart) wholePart = "0";

        const hasFraction = Boolean(fractionalPart);
        const zeroWhole = wholePart === "0" || wholePart === "";

        const decWhole = convertToDecimal(wholePart || "0", fromBase);
        const decFrac = convertFractionToDecimal(fractionalPart, fromBase);

        const convertedWhole = convertFromDecimal(decWhole, toBase);
        const convertedFrac = hasFraction ? convertFractionFromDecimal(decFrac, toBase) : CONVERTER_SOLUTION_FRACTIONAL_PART_ON_TO_BASE;

        const exact = !hasFraction || (decFrac.exact && convertedFrac.exact);

        setIsNegative(checkNegative);
        setIsFractional(hasFraction);
        setIsZeroWhole(zeroWhole);

        setInputWholePart(wholePart || "0");
        setInputFractionalPart(fractionalPart);
        setDecWholePart(String(decWhole));
        setDecFractionalPart(decFrac);
        setToWholePart(convertedWhole);
        setToFractionalPart(convertedFrac);

        setPart({
            whole: !zeroWhole || !hasFraction,
            fraction: hasFraction,
            negative: checkNegative,
            count: Number(!zeroWhole || !hasFraction) + Number(hasFraction) + Number(checkNegative),
        });

        setResult(`${exact ? "" : "≈"}${checkNegative ? "-" : ""}${convertedWhole.value}${hasFraction ? convertedFrac.value : ""}`);

        setIsHiddenStep1(fromBase === 10);
        setIsHiddenStep2(toBase === 10);
        // 0 butun qismni "bo'lib chiqish" blokida ko'rsatmaymiz — alohida izoh beriladi
        setIsHiddenWholePart(zeroWhole);
        setIsHiddenFractionalPart(!hasFraction);
        setIsHidden(false);
        setWaiting(false);
    }, [inputNumber, fromBase, toBase]);

    const contentProps: SolutionContentProps = {
        decFractionalPart,
        decWholePart,
        fromBase,
        inputFractionalPart,
        inputNumber: inputNumber.trim(),
        inputWholePart,
        isFractional,
        isHidden,
        isHiddenFractionalPart,
        isHiddenStep1,
        isHiddenStep2,
        isHiddenWholePart,
        isNegative,
        isZeroWhole,
        lang,
        part,
        toBase,
        toFractionalPart,
        toWholePart,
        waiting,
    };

    if (lang === "en") return <SolutionContentEN {...contentProps} />;
    if (lang === "ru") return <SolutionContentRU {...contentProps} />;
    if (lang === "ar") return <SolutionContentAR {...contentProps} />;
    if (lang === "ug") return <SolutionContentUG {...contentProps} />;
    if (lang === "tg") return <SolutionContentTG {...contentProps} />;
    if (lang === "tr") return <SolutionContentTR {...contentProps} />;
    if (lang === "az") return <SolutionContentAZ {...contentProps} />;
    if (lang === "kk") return <SolutionContentKK {...contentProps} />;
    if (lang === "ba") return <SolutionContentBA {...contentProps} />;
    if (lang === "tt") return <SolutionContentTT {...contentProps} />;
    if (lang === "tk") return <SolutionContentTK {...contentProps} />;
    if (lang === "ky") return <SolutionContentKY {...contentProps} />;
    return <SolutionContentUZ {...contentProps} />;
}
