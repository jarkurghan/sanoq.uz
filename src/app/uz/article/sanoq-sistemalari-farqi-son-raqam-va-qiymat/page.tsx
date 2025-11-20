import Container from "@/src/components/common/container";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    return {
        title: "Sanoq sistemalari farqi: Son, raqam va qiymat - Sanoq sistemalari",
        description: "Sanoq sistemalarini tushunishda son, raqam va qiymat tushunchalarining farqlari haqida batafsil ma'lumot",
        keywords: ["sanoq sistemasi", "son", "raqam", "qiymat", "matematika", "pozitsion sanoq sistemi", "raqam va son farqi"],

        authors: [{ name: "Najmiddin Nazirov", url: "https://sanoq.uz/about" }],
        creator: "Najmiddin Nazirov",

        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title: "Sanoq sistemalari farqi: Son, raqam va qiymat - Sanoq sistemalari",
            description: "Sanoq sistemalarini tushunishda son, raqam va qiymat tushunchalarining farqlari haqida batafsil ma'lumot.",
            url: "https://sanoq.uz/uz/article/sanoq-sistemalari-farqi-son-raqam-va-qiymat",
            siteName: "sanoq.uz",
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", width: 1000, height: 749, alt: "sanoq.uz" }],
            locale: "uz",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: "Sanoq sistemalari farqi: Son, raqam va qiymat - Sanoq sistemalari",
            description: "Sanoq sistemalarini tushunishda son, raqam va qiymat tushunchalarining farqlari haqida batafsil ma'lumot",
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", alt: "sanoq.uz" }],
            creator: "@jarkurghan",
        },

        metadataBase: new URL("https://sanoq.uz"),
        alternates: {
            canonical: "https://sanoq.uz/uz/article/sanoq-sistemalari-farqi-son-raqam-va-qiymat",
            languages: { uz: "https://sanoq.uz/uz/article/sanoq-sistemalari-farqi-son-raqam-va-qiymat" },
        },
    };
}

export default function SanoqSistemalarFarqiSonRaqamVaQiymat() {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1 >Sanoq sistemalari farqi: Son, raqam va qiymat</h1>
                    </header>
                    <p >
                        Sanoq sistemalarini o‘rganishga kirishishdan oldin, eng avvalo <strong>son</strong>, <strong>raqam</strong> va <strong>qiymat</strong> kabi
                        asosiy tushunchalarni to‘g‘ri anglab olish zarur. Ushbu tushunchalar ko‘pincha chalkashtirib yuboriladi, biroq ularning har biri o‘ziga xos
                        va sanoq sistemalarini to‘g‘ri tushunishda muhim ahamiyatga ega. Biroq ularni farqini tushunib olish pozitsion sanoq sistemalarini
                        o‘rganishda muhimdir. Ushbu maqolada biz bu uch tushunchani batafsil ko‘rib chiqamiz va ularning farqlarini tushuntiramiz.
                    </p>

                    <section>
                        <h2>Son nima?</h2>
                        <p >
                            <strong>Son</strong> — bu qiymatni, tartibni yoki holatni ifodalovchi matematik tushuncha. Masalan, “7” soni yetti dona ob’yektni yoki
                            yettinchi tartibdagi elementni ifodalashi mumkin. Son — bu abstrakt tushuncha bo‘lib, uni yozish yoki ifodalash uchun biz raqamlardan
                            foydalanamiz.
                        </p>
                    </section>

                    <section>
                        <h2>Raqam nima?</h2>
                        <p >
                            <strong>Raqam</strong> — bu sonni yozishda ishlatiladigan belgidir. Masalan, o‘nlik sanoq sistemasida 10 ta raqam bor: 0, 1, 2, 3, 4, 5,
                            6, 7, 8, 9. Sonlar bir yoki bir nechta raqamlarning ketma-ketligidan tashkil topadi. Masalan, 23 soni — ikki raqamdan (2 va 3) tashkil
                            topgan.
                        </p>
                    </section>

                    <section>
                        <h2>Qiymat nima?</h2>
                        <p >
                            <strong>Qiymat</strong> — bu son bilan ifodalangan narsalarning aniq soni yoki hajmidir. Masalan, “5” soni beshta olmani bildiradi — bu
                            qiymat. Son — bu abstrakt tushuncha bo‘lsa, qiymat — bu real hayotdagi o‘lchash, sanash yoki hisoblash natijasida olingan natijadir.
                            Qiymat moddiy yoki aniq ko‘rinadigan narsalarga taalluqli bo‘ladi.
                        </p>
                    </section>

                    <section>
                        <h2>Xulosa:</h2>
                        <ul >
                            <li>
                                <strong>Son</strong> — bu matematik tushuncha, u qiymat yoki tartibni bildiradi.
                            </li>
                            <li>
                                <strong>Raqam</strong> — bu sonni yozish uchun ishlatiladigan belgi.
                            </li>
                            <li>
                                <strong>Qiymat</strong> — bu son orqali ifodalangan real hajm yoki birliklar soni.
                            </li>
                        </ul>
                        <p >
                            Sanoq sistemalarini o‘rganishda bu uch tushunchani aniq ajratib olish muhim, chunki turli sanoq sistemalarida bir xil son turli raqamlar
                            bilan yozilishi mumkin, ammo ifodalayotgan qiymat bir xil qoladi.
                        </p>
                    </section>
                </Container>
            </article>
        </main>
    );
}
