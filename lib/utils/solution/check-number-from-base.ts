/**
 * Sonni berilgan sanoq sistemasiga tegishligini tekshiradigan funksiya
 * @param {string} son - Tekshiriladigan son (string ko'rinishida)
 * @param {number} base - Sanoq sistemasi asosi (2 dan 36 gacha)
 * @returns {boolean} - Son berilgan sanoq sistemasiga to'g'ri keladimi?
 */
export function checkNumberFromBase(son: string, base: number): boolean {
    if (base < 2 || base > 36 || !Number.isInteger(base)) {
        throw new Error("Sanoq sistemasi asosi 2 dan 36 gacha butun son bo'lishi kerak");
    }

    son = son.trim().toUpperCase();
    if (son === "" || son === "-" || son === "." || son === "-.") {
        return false;
    }

    let hasDigit = false;
    let seenDot = false;
    let digitAfterDot = false;

    for (let i = 0; i < son.length; i++) {
        const char = son[i];

        if (char >= "0" && char <= "9") {
            const charValue = parseInt(char, 10);
            if (charValue >= base) return false;
            hasDigit = true;
            if (seenDot) digitAfterDot = true;
        } else if (char >= "A" && char <= "Z") {
            const charValue = 10 + char.charCodeAt(0) - "A".charCodeAt(0);
            if (charValue >= base) return false;
            hasDigit = true;
            if (seenDot) digitAfterDot = true;
        } else if (i === 0 && char === "-") {
            continue;
        } else if (char === "." && !seenDot) {
            seenDot = true;
        } else {
            return false;
        }
    }

    if (!hasDigit) return false;
    // "5." yoki "0." kabi oxiri nuqta bilan tugaganlarni rad etamiz
    if (seenDot && !digitAfterDot) return false;

    return true;
}
