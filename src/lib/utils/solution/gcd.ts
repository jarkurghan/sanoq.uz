export function gcd(a: bigint, b: bigint): bigint {
    while (b !== 0n) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}
