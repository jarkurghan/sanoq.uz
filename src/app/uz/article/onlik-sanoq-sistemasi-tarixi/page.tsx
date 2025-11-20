import React from "react";
import type { Metadata } from "next";
import Container from "@/src/components/common/container";

export function generateMetadata(): Metadata {
    return {
        title: "O‘nlik sanoq sistemasi tarixi - Sanoq sistemalari",
        description:
            "O‘nlik sanoq sistemasining tarixi, uning nima ekanligi, nega aynan 10 asosli ekanligi, va nol raqamining inqilobiy kashfiyoti haqida batafsil ma’lumot.",
        keywords: ["o'nlik sanoq sistemi", "sanoq sistemasi", "tarix", "matematika", "pozitsion sistema", "nol raqami", "al-Xorazmiy"],

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
            title: "O‘nlik sanoq sistemasi tarixi - Sanoq sistemalari",
            description:
                "O‘nlik sanoq sistemasining tarixi, uning nima ekanligi, nega aynan 10 asosli ekanligi, va nol raqamining inqilobiy kashfiyoti haqida batafsil ma’lumot.",
            url: "https://sanoq.uz/uz/article/onlik-sanoq-sistemasi-tarixi",
            siteName: "sanoq.uz",
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", width: 1000, height: 749, alt: "sanoq.uz" }],
            locale: "uz",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: "O‘nlik sanoq sistemasi tarixi - Sanoq sistemalari",
            description:
                "O‘nlik sanoq sistemasining tarixi, uning nima ekanligi, nega aynan 10 asosli ekanligi, va nol raqamining inqilobiy kashfiyoti haqida batafsil ma’lumot.",
            images: [{ url: "https://sanoq.uz/images/sanoq.uz.png", alt: "sanoq.uz" }],
            creator: "@jarkurghan",
        },

        metadataBase: new URL("https://sanoq.uz"),
        alternates: {
            canonical: "https://sanoq.uz/uz/article/onlik-sanoq-sistemasi-tarixi",
            languages: { uz: "https://sanoq.uz/uz/article/onlik-sanoq-sistemasi-tarixi" },
        },
    };
}

const OnlikSanoqSistemasiTarixi = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>O‘nlik sanoq sistemasi tarixi</h1>
                    </header>

                    <section>
                        <h2>O‘nlik sanoq sistemasi nima?</h2>
                        <p>
                            O‘nlik sanoq sistemasi — bu 10 ta raqam: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 orqali sonlarni ifodalash usulidir. Bu sistema pozitsion sistema
                            bo‘lib, raqamlar o‘z o‘rniga qarab (birliklar, o‘nliklar, yuzliklar...) turli qiymatga ega bo‘ladi.
                        </p>
                        <p>
                            Boshqa tarafdan qarasa o'nlik sanoq sistemasiga qisqa qilib shunday ta'rif berish mumkin:{" "}
                            <strong>kundalik hayotimizda foydalanadigan matematika va sonlar</strong>. Ya’ni, biz yozadigan har bir son, nafaqat hisob-kitoblar,
                            balki tug‘ilgan sanadan tortib, telefondagi kontakt raqamigacha — aslida 0 dan 9 gacha bo‘lgan raqamlar yordamida tuziladi.
                        </p>
                        <p>
                            Bugun biz har kuni raqamlar bilan yashaymiz. Do‘konlarda narxlar, telefon raqamlari, tug‘ilgan sana, moliya hisoblari — bularning
                            barchasi bitta oddiy, lekin qudratli sistemaga asoslanadi. Bu — o‘nlik sanoq sistemasi.
                        </p>
                    </section>

                    <section>
                        <h2>Nega aynan 10 asosli?</h2>
                        <p>Bu savolga javob juda oddiy va tabiiy:</p>
                        <ul >
                            <li>Insonda 10 ta barmoq bor!</li>
                        </ul>
                        <p>
                            Odamlar sanash uchun tabiiy ravishda barmoqlarni eng qulay variant deb bilishadi, bu esa o'z-o'zidan 10 asosli sanoq sistemasini eng
                            asosiy sanoq sistemasi qiladi. O‘nlik sistema biologik sabab tufayli eng qulay sistema sifatida shakllangan. Albatta, boshqa pozitsion
                            sanoq sistemalari ham o'nlik sanoq sistemasi o'rnini bosishi mumkin edi, masalan, 9 asosli, 5 asosli yoki 20 asosli sistemalar shular
                            jumlasidan. Lekin o‘nlik sanoq sistemasi insoniyat tomonidan eng keng tarqalgan va qabul qilingan sanoq sistemasidir.
                        </p>
                    </section>

                    <section>
                        <h2>Tarixiy ildizlari</h2>
                        <ul >
                            <li>
                                <b>O‘nlik sistemaning vatani</b>
                                <br />
                                Bugungi kunda ishlatiladigan o‘nlik sanoq sistemasi asosan hind matematiklari tomonidan yaratilgan deb taxmin qilinadi. Ammo
                                ko'pgina tarixiy nopozitsion sanoq sistemalari 10 asosli. Bular haqida batafsil ma'lumotlarni{" "}
                                <a href="#">sanoq sistemalari tarixi</a> maqolasida keltirilgan.
                            </li>
                            <li>
                                <b>Islom olami orqali tarqalishi</b>
                                <br />
                                Hindistonliklardan keyin bu sistemani al-Xorazmiy va al-Kindiy qabul qilgan va uni rivojlantirgan. Al-Xorazmiy o‘zining arifmetik
                                asarlarida hind raqamlarini ishlatgan va “hisob al-hindiy” (hind hisobi) deb nomlangan sistemani fanga tanitgan.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>0 raqami – inqilobiy kashfiyot</h2>
                        <p>O‘nlik sanoq sistemasini to‘liq ishlashi uchun nol (0) raqami juda muhim. Bu raqam:</p>
                        <ul >
                            <li>Bo‘sh o‘rin (ya’ni pozitsiyani) bildiradi</li>
                            <li>Sonlarni pozitsion usulda aniq ifodalashga yordam beradi</li>
                            <li>Matematik amallarda osonlik yaratadi</li>
                        </ul>
                        <p>Nolni birinchi bo‘lib hind olimlari joriy qilgan va "shunya" (hind tilida "bo‘shliq") deb atashgan.</p>
                        <div>O‘nlik sistemaning afzalliklari:</div>
                        <ul >
                            <li>Oddiy va qulay: sanash uchun maxsus vosita kerak emas — barmoqlar yetarli.</li>
                            <li>Pozitsionligi tufayli: har qanday katta sonni oddiy yozish mumkin (masalan, 94 516 980).</li>
                            <li>Matematik amallarni (qo‘shish, ayirish, ko‘paytirish) osongina bajarish mumkin.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="hidden">Xulosa</h2>
                        <hr className="my-6" />
                        <p>
                            Bu sistema oddiy, qulay va o‘ta samarali. U faqat matematikada emas — iqtisod, texnologiya, muhandislik, moliya, hatto bizning kun
                            tartibimizda ham muhim rol o‘ynaydi.
                        </p>
                        <p>
                            O‘nlik sanoq sistemasi bu — matematik mantiqning hayotiy ifodasi, tafakkurga yaqin, inson tabiatiga mos yechimdir. Va shu sababli, u
                            asrlar davomida o‘z mavqeini saqlab kelmoqda. Har qanday zamonaviy hisob-kitobning yuragi aynan mana shu sistemada uradi. O‘nlik — bu
                            insoniyat bilan birga tug‘ilgan va u bilan birga yashayotgan sistemadir.
                        </p>
                        <p>
                            Shunday ekan, o‘nlik sanoq tizimi — bu faqat matematik tushuncha emas, bu butun insoniyat tafakkurining umumiy tili, hisob va tartibning
                            eng aniq, eng barqaror ifodasidir.
                        </p>
                    </section>
                </Container>
            </article>
        </main>
    );
};

export default OnlikSanoqSistemasiTarixi;
