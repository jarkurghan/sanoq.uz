"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/utils/button";
import { Base } from "@/lib/types/base";

type CalcState = {
    display: string;
    topDisplay: string;
    firstOperand: string | null;
    operator: string | null;
    waitingForSecondOperand: boolean;
};

const INITIAL_STATE: CalcState = {
    display: "0",
    topDisplay: "",
    firstOperand: null,
    operator: null,
    waitingForSecondOperand: false,
};

const COL_SPAN: Record<number, string> = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
};

const isResultDisplay = (topDisplay: string) => topDisplay.trimEnd().endsWith("=");

const parseBaseFloat = (input: string, radix: number): number => {
    const negative = input.startsWith("-");
    const raw = negative ? input.slice(1) : input;
    const [intPart, fracPart] = raw.split(".");

    let result = intPart ? parseInt(intPart, radix) : 0;
    if (Number.isNaN(result)) {
        throw new Error(`Invalid number '${input}' for base ${radix}`);
    }

    if (fracPart) {
        for (let i = 0; i < fracPart.length; i++) {
            const digit = parseInt(fracPart[i], radix);
            if (Number.isNaN(digit)) {
                throw new Error(`Invalid digit '${fracPart[i]}' for base ${radix}`);
            }
            result += digit / Math.pow(radix, i + 1);
        }
    }

    return negative ? -result : result;
};

const formatResult = (value: number, radix: number): string => {
    if (!Number.isFinite(value)) return "Error";
    return value.toString(radix).toUpperCase();
};

export default function StandartCalculator({ base }: { base: Base }) {
    const [state, setState] = useState<CalcState>(INITIAL_STATE);
    const baseNum = Number.parseInt(base);

    const inputDigit = (digit: string) => {
        setState((prev) => {
            if (prev.display === "Error" || isResultDisplay(prev.topDisplay)) {
                return { ...INITIAL_STATE, display: digit };
            }
            if (prev.waitingForSecondOperand) {
                return { ...prev, display: digit, waitingForSecondOperand: false };
            }
            return { ...prev, display: prev.display === "0" ? digit : prev.display + digit };
        });
    };

    const inputDecimal = () => {
        setState((prev) => {
            if (prev.display === "Error" || isResultDisplay(prev.topDisplay)) {
                return { ...INITIAL_STATE, display: "0." };
            }
            if (prev.waitingForSecondOperand) {
                return { ...prev, display: "0.", waitingForSecondOperand: false };
            }
            if (!prev.display.includes(".")) {
                return { ...prev, display: prev.display + "." };
            }
            return prev;
        });
    };

    const calculate = (firstOperand: string, secondOperand: string, operator: string) => {
        try {
            const first = parseBaseFloat(firstOperand, baseNum);
            const second = parseBaseFloat(secondOperand, baseNum);

            let result: number;

            switch (operator) {
                case "+":
                    result = first + second;
                    break;
                case "-":
                    result = first - second;
                    break;
                case "*":
                    result = first * second;
                    break;
                case "/":
                    if (second === 0) return "Error";
                    result = first / second;
                    break;
                default:
                    return secondOperand;
            }

            return formatResult(result, baseNum);
        } catch {
            return "Error";
        }
    };

    const performOperation = (nextOperator: string) => {
        setState((prev) => {
            const { firstOperand, display, operator } = prev;

            if (display === "Error") {
                return { ...INITIAL_STATE, firstOperand: "0", operator: nextOperator, topDisplay: `0${nextOperator}`, waitingForSecondOperand: true };
            }

            if (firstOperand === null || isResultDisplay(prev.topDisplay)) {
                return {
                    ...prev,
                    firstOperand: display,
                    operator: nextOperator,
                    topDisplay: `${display}${nextOperator}`,
                    waitingForSecondOperand: true,
                };
            }

            if (operator) {
                if (prev.waitingForSecondOperand) {
                    return { ...prev, operator: nextOperator, topDisplay: `${firstOperand}${nextOperator}` };
                }
                const result = calculate(firstOperand, display, operator);
                if (result === "Error") {
                    return { ...INITIAL_STATE, display: "Error", topDisplay: `${firstOperand}${operator}${display}=` };
                }
                return {
                    ...prev,
                    display: result,
                    firstOperand: result,
                    operator: nextOperator,
                    topDisplay: `${result}${nextOperator}`,
                    waitingForSecondOperand: true,
                };
            }

            return { ...prev, operator: nextOperator, waitingForSecondOperand: true };
        });
    };

    const handleEquals = () => {
        setState((prev) => {
            const { firstOperand, operator, display, topDisplay } = prev;
            if (!firstOperand || !operator || display === "Error") return prev;

            const result = calculate(firstOperand, display, operator);
            return {
                display: result,
                topDisplay: topDisplay + display + "=",
                firstOperand: null,
                operator: null,
                waitingForSecondOperand: false,
            };
        });
    };

    const clearDisplay = () => {
        setState(INITIAL_STATE);
    };

    const getAvailableDigits = () => {
        const digits: string[] = [];

        for (let i = 1; i < Math.min(baseNum, 10); i++) {
            digits.push(i.toString());
        }

        if (baseNum > 10) {
            for (let i = 10; i < baseNum; i++) {
                digits.push(String.fromCharCode(65 + i - 10));
            }
        }

        return digits;
    };

    const handleDelete = () => {
        setState((prev) => {
            if (isResultDisplay(prev.topDisplay) || prev.display === "Error") {
                return INITIAL_STATE;
            }
            if (prev.display.length > 1) {
                const next = prev.display.slice(0, -1);
                return { ...prev, display: next === "-" ? "0" : next };
            }
            return { ...prev, display: "0" };
        });
    };

    const handleSignChange = () => {
        setState((prev) => {
            const { display } = prev;
            if (display === "0" || display === "Error") return prev;
            if (display.startsWith("-")) {
                return { ...prev, display: display.slice(1) };
            }
            return { ...prev, display: `-${display}` };
        });
    };

    const applyUnary = (compute: (value: number) => number | "Error", formatTop: (display: string) => string) => {
        setState((prev) => {
            if (prev.display === "Error") return prev;
            try {
                const decimalValue = parseBaseFloat(prev.display, baseNum);
                const next = compute(decimalValue);
                if (next === "Error") {
                    return { ...INITIAL_STATE, display: "Error", topDisplay: formatTop(prev.display) };
                }
                return {
                    ...prev,
                    topDisplay: formatTop(prev.display),
                    display: formatResult(next, baseNum),
                    firstOperand: null,
                    operator: null,
                    waitingForSecondOperand: false,
                };
            } catch {
                return { ...INITIAL_STATE, display: "Error" };
            }
        });
    };

    const handleReciprocal = () => {
        applyUnary((value) => (value === 0 ? "Error" : 1 / value), (display) => `1/${display}=`);
    };

    const handlePercentage = () => {
        applyUnary((value) => value / 100, (display) => `%${display}=`);
    };

    const handleSquare = () => {
        applyUnary((value) => value * value, (display) => `${display}²=`);
    };

    const handleSquareRoot = () => {
        applyUnary((value) => (value < 0 ? "Error" : Math.sqrt(value)), (display) => `√${display}=`);
    };

    const digits = getAvailableDigits();
    const zeroColSpan = COL_SPAN[4 - (baseNum % 4)] ?? "col-span-1";

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toUpperCase();

            if (digits.includes(key) || key === "0") inputDigit(key);
            else if (/^[/*\-+]$/.test(key)) performOperation(key);
            else if (key === "=" || key === "ENTER") handleEquals();
            else if (key === "BACKSPACE") handleDelete();
            else if (key === ".") inputDecimal();
            else if (key === "%") handlePercentage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // base (and digits) are fixed for the lifetime of this page route
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [base]);

    return (
        <div className="space-y-4">
            <div className="flex flex-col items-end font-mono h-16 bg-muted/50 border rounded-md overflow-x-auto px-4 py-1">
                <div className="text-sm text-gray-500">{state.topDisplay !== "" ? state.topDisplay : <>&nbsp;</>}</div>
                <div className="text-2xl">{state.display}</div>
            </div>

            <div className="grid grid-cols-4 gap-2">
                <Button variant="outline" onClick={() => performOperation("/")} className="text-primary">
                    ÷
                </Button>
                <Button variant="outline" onClick={() => performOperation("*")} className="text-primary">
                    ×
                </Button>
                <Button variant="outline" onClick={() => performOperation("-")} className="text-primary">
                    -
                </Button>
                <Button variant="outline" onClick={() => performOperation("+")} className="text-primary">
                    +
                </Button>
                <Button variant="outline" onClick={handleSignChange} className="text-primary">
                    ±
                </Button>
                <Button variant="outline" onClick={handleReciprocal} className="text-primary">
                    1/x
                </Button>
                <Button variant="outline" onClick={handlePercentage} className="text-primary">
                    %
                </Button>
                <Button variant="outline" onClick={handleEquals} className="col-span-1 text-primary">
                    =
                </Button>
                <Button variant="outline" onClick={handleSquare} className="text-primary">
                    x²
                </Button>
                <Button variant="outline" onClick={handleSquareRoot} className="text-primary">
                    √x
                </Button>
                <Button variant="outline" className="text-primary" onClick={clearDisplay}>
                    Clear
                </Button>
                <Button variant="outline" className="text-primary" onClick={handleDelete}>
                    ⌫
                </Button>

                {digits.map((digit) => (
                    <Button key={digit} variant="outline" onClick={() => inputDigit(digit)} className={digit >= "A" ? "bg-muted/50" : ""}>
                        {digit}
                    </Button>
                ))}
                {baseNum % 4 === 0 && (
                    <Button variant="outline" onClick={inputDecimal} className="col-span-1">
                        .
                    </Button>
                )}
                <Button variant="outline" onClick={() => inputDigit("0")} className={zeroColSpan}>
                    0
                </Button>
                {baseNum % 4 !== 0 && (
                    <Button variant="outline" onClick={inputDecimal} className="col-span-1">
                        .
                    </Button>
                )}
            </div>
        </div>
    );
}
