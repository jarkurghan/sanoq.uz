import { DIGITS } from "@/src/lib/constants/numeral-system";
import { WholePartOnToBase } from "@/src/lib/types/converter";

export function convertFromDecimal(value: bigint, base: number): WholePartOnToBase {
    const bigBase = BigInt(base);

    let dividend = value;
    if (dividend === BigInt(0)) return { value: "0", steps: [] };

    const steps = [];
    let result = "";
    while (dividend > 0) {
        const remainder = dividend % bigBase;
        const quotient = dividend / bigBase;

        result = DIGITS[Number(remainder)] + result;
        steps.push({ dividend: Number(dividend), divisor: base, quotient: Number(quotient), remainder: Number(remainder) });

        dividend = quotient;
    }

    return { value: result, steps };
}
