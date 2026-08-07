import { DIGITS } from "@/lib/constants/numeral-system";
import { WholePartOnToBase } from "@/lib/types/converter";

export function convertFromDecimal(value: bigint, base: number): WholePartOnToBase {
    const bigBase = BigInt(base);

    let dividend = value;
    if (dividend === BigInt(0)) return { value: "0", steps: [] };

    const steps: WholePartOnToBase["steps"] = [];
    let result = "";
    while (dividend > 0) {
        const remainder = dividend % bigBase;
        const quotient = dividend / bigBase;

        result = DIGITS[Number(remainder)] + result;
        steps.push({
            dividend: dividend.toString(),
            divisor: base,
            quotient: quotient.toString(),
            remainder: DIGITS[Number(remainder)],
        });

        dividend = quotient;
    }

    return { value: result, steps };
}
