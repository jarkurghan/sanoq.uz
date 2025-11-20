"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useRef } from "react";
import { Input } from "@/src/components/utils/input";
import { Select } from "@/src/components/utils/select";
import { SelectContent } from "@/src/components/utils/select";
import { SelectItem } from "@/src/components/utils/select";
import { SelectTrigger } from "@/src/components/utils/select";
import { SelectValue } from "@/src/components/utils/select";
import { Button } from "@/src/components/utils/button";
import { ArrowRightLeft } from "lucide-react";
import { getTranslation } from "@/src/lib/translater/i18n";
import { DEFAULT_NUMBER_SYSTEM } from "@/src/lib/constants/numeral-system";
import { DEFAULT_TWICE_NUMBER_SYSTEM } from "@/src/lib/constants/numeral-system";
import { NUMBER_SYSTEMS } from "@/src/lib/constants/numeral-system";
import { Language } from "@/src/lib/types/language";
import Solution from "./solution";

export default function HomeComponent({ lang }: { lang: Language }) {
    const t = getTranslation(lang);
    // to-do: maximum kars qism 10ta;
    //        yoki sanoq sistemasiga qarab

    const [waiting, setWaiting] = useState(false);
    const [leftValue, setLeftValue] = useState("");
    const [rightValue, setRightValue] = useState("");
    const [fromBase, setFromBase] = useState(DEFAULT_NUMBER_SYSTEM);
    const [toBase, setToBase] = useState(DEFAULT_TWICE_NUMBER_SYSTEM);

    const swapBases = () => {
        setFromBase(toBase);
        setToBase(fromBase);
        setLeftValue(rightValue);
        setRightValue(leftValue);
    };

    const [isHiddenSolution, setIsHiddenSolution] = useState(true);
    const [solutionLeftValue, setSolutionLeftValue] = useState("");
    const [solutionFromBase, setSolutionFromBase] = useState(Number(DEFAULT_NUMBER_SYSTEM));
    const [solutionToBase, setSolutionToBase] = useState(Number(DEFAULT_TWICE_NUMBER_SYSTEM));
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setRightValue("");
        setIsHiddenSolution(true);
        setWaiting(Boolean(leftValue));

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setSolutionLeftValue(leftValue);
            setSolutionFromBase(Number(fromBase));
            setSolutionToBase(Number(toBase));
        }, 3000);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [leftValue, fromBase, toBase]);

    return (
        <Fragment>
            <div className="sm:grid grid-cols-[1fr_auto_1fr] gap-6">
                {/* From input */}
                <div className="flex flex-col gap-4">
                    <Select value={fromBase} onValueChange={setFromBase}>
                        <SelectTrigger>
                            <SelectValue placeholder={t("home.from")} />
                        </SelectTrigger>
                        <SelectContent>
                            {NUMBER_SYSTEMS.map((system) => (
                                <SelectItem key={system.value} value={system.value} disabled={system.value === toBase}>
                                    {t(system.label)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        value={leftValue}
                        onChange={(e) => setLeftValue(e.target.value)}
                        className="font-mono w-full outline-none"
                        placeholder={t("home.input")}
                    />
                </div>

                {/* Swap button */}
                <div className="flex flex-col md:flex-row gap-4 my-4">
                    <div className="flex items-center justify-center md:w-auto md:mx-4">
                        <Button variant="outline" size="icon" onClick={swapBases} disabled className="rounded-full" title={t("home.swap")}>
                            <ArrowRightLeft className="h-4 w-4" />
                            <span className="sr-only">{t("home.swap")}</span>
                        </Button>
                    </div>
                </div>

                {/* To input */}
                <div className="flex flex-col gap-4">
                    <Select value={toBase} onValueChange={setToBase}>
                        <SelectTrigger>
                            <SelectValue placeholder={t("home.to")} />
                        </SelectTrigger>
                        <SelectContent>
                            {NUMBER_SYSTEMS.map((system) => (
                                <SelectItem key={system.value} value={system.value} disabled={system.value === fromBase}>
                                    {t(system.label)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input readOnly value={rightValue} className="font-mono w-full outline-none" placeholder={t("home.result")} />
                </div>
            </div>
            <div className="mt-8">
                <Solution
                    lang={lang}
                    inputNumber={solutionLeftValue}
                    fromBase={solutionFromBase}
                    toBase={solutionToBase}
                    setResult={setRightValue}
                    waiting={waiting}
                    setWaiting={setWaiting}
                    isHidden={isHiddenSolution}
                    setIsHidden={setIsHiddenSolution}
                />
            </div>
        </Fragment>
    );
}
