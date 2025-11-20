import { numberValue } from "./numeral-value";

export function convertToDecimal(value: string, base: number): bigint {
    let result = BigInt(0);
    const bigBase = BigInt(base);
    for (const char of value) {
        const digit = BigInt(numberValue(char));
        result = result * bigBase + digit;
    }
    return result;
}
