/**
 * Sonni berilgan sanoq sistemasiga tegishligini tekshiradigan funksiya
 * @param {string} son - Tekshiriladigan son (string ko'rinishida)
 * @param {number} base - Sanoq sistemasi asosi (2 dan 36 gacha)
 * @returns {boolean} - Son berilgan sanoq sistemasiga to'g'ri keladimi?
 */
export function checkNumberFromBase(son: string, base: number): boolean {
    // Asosni tekshirish (2 dan 36 gacha bo'lishi kerak)
    if (base < 2 || base > 36 || !Number.isInteger(base)) {
        throw new Error("Sanoq sistemasi asosi 2 dan 36 gacha butun son bo'lishi kerak");
    }

    // Bo'sh satrni tekshirish
    if (son.trim() === "") {
        return false;
    }

    // Maxfiy belgilarni olib tashlash
    son = son.trim().toUpperCase();

    // Har bir belgini tekshirish
    for (let i = 0; i < son.length; i++) {
        const char = son[i];
        let charValue;

        // Raqamlar uchun (0-9)
        if (char >= "0" && char <= "9") {
            charValue = parseInt(char, 10);
        }
        // Harflar uchun (A-Z)
        else if (char >= "A" && char <= "Z") {
            charValue = 10 + char.charCodeAt(0) - "A".charCodeAt(0);
        }
        // Boshqa belgilar (+, -, . va h.k.)
        else {
            // Faqat birinchi belgi minus bo'lishi mumkin
            if (i === 0 && char === "-") {
                continue;
            }
            // Kasr sonlar uchun nuqta (faqat bitta)
            if (char === "." && son.indexOf(".") === i) {
                continue;
            }
            return false;
        }

        // Belgining qiymati asosdan kichik bo'lishi kerak
        if (charValue >= base) {
            return false;
        }
    }

    return true;
}
