import { FractionalPart, Period } from "@/lib/types/converter";
import { create, all } from "mathjs";
import { gcd } from "./gcd";
import { convertToDecimal } from "./convert-to-decimal";

const math = create(all);

function countFactor(n: bigint, factor: bigint): number {
    let count = 0;
    while (n % factor === 0n) {
        n /= factor;
        count++;
    }
    return count;
}

function findNonRepeatingLength(denominator: bigint): number {
    const count2 = countFactor(denominator, 2n);
    const count5 = countFactor(denominator, 5n);
    return Math.max(count2, count5);
}

function longDivisionDigits(numerator: bigint, denominator: bigint, count: number): string {
    let rem = numerator % denominator;
    let digits = "";
    for (let i = 0; i < count; i++) {
        rem *= 10n;
        digits += (rem / denominator).toString();
        rem %= denominator;
        if (rem === 0n) break;
    }
    return digits;
}

function getPeriodikValue(numerator: bigint, denominator: bigint, period: Period): string {
    if (numerator === 0n) return ".0";

    if (period.isPeriod === false) {
        const s = math.fraction(numerator, denominator).toString();
        const dot = s.indexOf(".");
        return dot === -1 ? ".0" : s.slice(dot);
    }

    if (period.length < 15) {
        const noPeriod = findNonRepeatingLength(denominator);
        const digits = longDivisionDigits(numerator, denominator, noPeriod + period.length);
        const nonPeriodPart = digits.slice(0, noPeriod);
        const periodPart = digits.slice(noPeriod, noPeriod + period.length);
        return `.${nonPeriodPart}(${periodPart})`;
    }

    return "." + longDivisionDigits(numerator, denominator, 10);
}

function removeFactors(n: bigint, factor: bigint): bigint {
    while (n % factor === 0n) {
        n /= factor;
    }
    return n;
}

function findRepeatingDecimalPeriod(denominator: bigint): Period {
    let d = removeFactors(denominator, 2n);
    d = removeFactors(d, 5n);

    if (d === 1n) return { isPeriod: false };

    let remainder = 10n % d;
    let k = 1;
    while (remainder !== 1n) {
        remainder = (remainder * 10n) % d;
        k++;
    }

    return { isPeriod: true, length: k };
}

/**
 * kasrni o'nlik sanoq sistemasiga o‘tkazadi, natijani FractionalPart sifatida qaytaradi.
 * @param fraction - kasr qismi, butun son shaklida
 * @param base - sanoq sistemasi
 */
export function convertFractionToDecimal(fraction: string, base: number): FractionalPart {
    if (!fraction) {
        return { numerator: 0n, denominator: 1n, period: { isPeriod: false }, value: "", exact: true };
    }

    const bigBase = BigInt(base);
    const bigLen = BigInt(fraction.length);

    const oneTimeNumerator = convertToDecimal(fraction, base);
    const oneTimeDenominator = bigBase ** bigLen;
    const divisor = gcd(oneTimeNumerator, oneTimeDenominator);

    const numerator = oneTimeNumerator / divisor;
    const denominator = oneTimeDenominator / divisor;
    const period = findRepeatingDecimalPeriod(denominator);
    const value = getPeriodikValue(numerator, denominator, period);
    const exact = period.isPeriod === false || value.includes("(");

    return { numerator, denominator, period, value, exact };
}
