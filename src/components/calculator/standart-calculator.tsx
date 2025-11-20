"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/src/components/utils/button";
import { Base } from "@/src/lib/types/base";

export default function StandartCalculator({ base }: { base: Base }) {
    type CalcState = { display: string; topDisplay: string; firstOperand: string | null; operator: string | null; waitingForSecondOperand: boolean };
    const [state, setState] = useState<CalcState>({ display: "0", topDisplay: "", firstOperand: null, operator: null, waitingForSecondOperand: false });

    const inputDigit = (digit: string) => {
        setState((prev) => {
            if (prev.topDisplay.endsWith("=")) return { display: digit, topDisplay: "", firstOperand: null, operator: null, waitingForSecondOperand: false };
            else if (prev.waitingForSecondOperand) return { ...prev, display: digit, waitingForSecondOperand: false };
            else return { ...prev, display: prev.display === "0" ? digit : prev.display + digit };
        });
    };

    const inputDecimal = () => {
        setState((prev) => {
            if (prev.waitingForSecondOperand) return { ...prev, display: "0.", waitingForSecondOperand: false };
            else if (!prev.display.includes(".")) return { ...prev, display: prev.display + "." };
            else return prev;
        });
    };

    const performOperation = (nextOperator: string) => {
        setState((prev) => {
            const { firstOperand, display, operator } = prev;
            if (firstOperand === null) {
                return { ...prev, firstOperand: display, operator: nextOperator, topDisplay: `${display}${nextOperator}`, waitingForSecondOperand: true };
            } else if (operator) {
                const result = calculate(firstOperand, display, operator);
                const topDisplay = `${result}${nextOperator}`;
                return { ...prev, display: result, firstOperand: result, operator: nextOperator, topDisplay, waitingForSecondOperand: true };
            } else return { ...prev, operator: nextOperator, waitingForSecondOperand: true };
        });
    };

    const parseBaseFloat = (input: string, base: number): number => {
        const [intPart, fracPart] = input.split(".");
        let result = parseInt(intPart, base);

        if (fracPart) {
            for (let i = 0; i < fracPart.length; i++) {
                const digit = parseInt(fracPart[i], base);
                if (isNaN(digit)) {
                    throw new Error(`Invalid digit '${fracPart[i]}' for base ${base}`);
                }
                result += digit / Math.pow(base, i + 1);
            }
        }

        return result;
    };

    const calculate = (firstOperand: string, secondOperand: string, operator: string) => {
        const first = parseBaseFloat(firstOperand, Number.parseInt(base));
        const second = parseBaseFloat(secondOperand, Number.parseInt(base));

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
                result = first / second;
                break;
            case "AND":
                result = first & second;
                break;
            case "OR":
                result = first | second;
                break;
            case "XOR":
                result = first ^ second;
                break;
            case "<<":
                result = first << second;
                break;
            case ">>":
                result = first >> second;
                break;
            default:
                return secondOperand;
        }

        return result.toString(Number.parseInt(base)).toUpperCase();
    };

    const handleEquals = () => {
        setState((prev) => {
            const { firstOperand, operator, display, topDisplay } = prev;
            if (!firstOperand || !operator) return prev;

            const result = calculate(firstOperand, display, operator);
            return { display: result, topDisplay: topDisplay + display + "=", firstOperand: null, operator: null, waitingForSecondOperand: false };
        });
    };

    const clearDisplay = () => {
        setState({ display: "0", topDisplay: "", firstOperand: null, operator: null, waitingForSecondOperand: false });
    };

    const getAvailableDigits = () => {
        const baseNum = Number.parseInt(base);
        const digits = [];

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
            const { display } = prev;
            if (display.length > 1) return { ...prev, display: display.slice(0, -1) };
            else return { ...prev, display: "0" };
        });
    };

    const handleSignChange = () => {
        setState((prev) => {
            const { display } = prev;
            if (display === "0") return prev;
            const baseNum = Number.parseInt(base);
            const decimalValue = Number.parseInt(display, baseNum);
            const negatedValue = -decimalValue;
            return { ...prev, display: negatedValue.toString(baseNum).toUpperCase() };
        });
    };

    const handleReciprocal = () => {
        setState((prev) => {
            const baseNum = Number.parseInt(base);
            const decimalValue = parseBaseFloat(prev.display, baseNum);
            if (decimalValue === 0) return prev;
            const reciprocalValue = 1 / decimalValue;
            return { ...prev, topDisplay: `1/${prev.display} = `, display: reciprocalValue.toString(baseNum).toUpperCase() };
        });
    };

    const handlePercentage = () => {
        setState((prev) => {
            const baseNum = Number.parseInt(base);
            const decimalValue = parseBaseFloat(prev.display, baseNum);
            const percentValue = decimalValue / 100;
            return { ...prev, topDisplay: `%${prev.display} = `, display: percentValue.toString(baseNum).toUpperCase() };
        });
    };

    const handleSquare = () => {
        setState((prev) => {
            const baseNum = Number.parseInt(base);
            const decimalValue = parseBaseFloat(prev.display, baseNum);
            const squaredValue = decimalValue * decimalValue;
            return { ...prev, topDisplay: `${prev.display}² = `, display: squaredValue.toString(baseNum).toUpperCase() };
        });
    };

    const handleSquareRoot = () => {
        setState((prev) => {
            const baseNum = Number.parseInt(base);
            const decimalValue = parseBaseFloat(prev.display, baseNum);
            if (decimalValue < 0) return prev;
            const sqrtValue = Math.sqrt(decimalValue);
            return { ...prev, topDisplay: `√${prev.display} = `, display: sqrtValue.toString(baseNum).toUpperCase() };
        });
    };

    const digits = getAvailableDigits();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toUpperCase();

            if (digits.includes(key) || key === "0") inputDigit(key);
            else if (/^[/*-+]$/i.test(key)) performOperation(key);
            else if (key === "=" || key === "ENTER") handleEquals();
            else if (key === "BACKSPACE") handleDelete();
            else if (key === ".") inputDecimal();
            else if (key === "%") handlePercentage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

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
                {Number.parseInt(base) % 4 === 0 && (
                    <Button variant="outline" onClick={inputDecimal} className={"col-span-1"}>
                        {"."}
                    </Button>
                )}
                <Button variant="outline" onClick={() => inputDigit("0")} className={"col-span-" + (4 - (Number.parseInt(base) % 4))}>
                    {"0"}
                </Button>
                {Number.parseInt(base) % 4 !== 0 && (
                    <Button variant="outline" onClick={inputDecimal} className={"col-span-1"}>
                        {"."}
                    </Button>
                )}
            </div>
        </div>
    );
}
