import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/src/components/common/container";
import { ARTICLES_002_SS_METALANG } from "@/src/lib/constants/article/sanoq-sistemasi";
import { SEO } from "@/src/lib/utils/generate-metadata";

export function generateMetadata(): Metadata {
    const lang = "uz";
    const url = ARTICLES_002_SS_METALANG[lang] as string;

    const title = "Sanoq sistemasi — umumiy ko‘rinish, tarix va turlari";
    const description =
        "Sanoq sistemalari, ularning tarixi, asosiy turlari va sonlarning madaniyat, matematika hamda kompyuter texnologiyalarida qanday ifodalanishi haqida batafsil maqola.";
    const keywords = [
        "sanoq sistemasi",
        "son tizimi",
        "hind–arab raqamlari",
        "raqamlar tarixi",
        "o‘nlik sistemasi",
        "rim raqamlari",
        "maya raqamlari",
        "matematika",
        "sonlarni yozish",
    ].join(", ");

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_002_SS_METALANG, lang, pageType: "article" });
}

const NumeralSystem = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Sanoq sistemasi</h1>
                    </header>
                    <section>
                        <h2 className="hidden">Sanoq sistemasi</h2>
                        <p>
                            Sanoq sistemasi — sonlarni yozma shaklda ifodalash usuli, ya’ni ma’lum bir sonlar to‘plamini belgilar yoki raqamlar yordamida
                            muntazam va izchil tarzda tasvirlashga xizmat qiladigan matematik yozuv tizimidir.
                        </p>
                        <p>
                            Bir xil belgilar ketma-ketligi turli sanoq sistemalarida turlicha ma’noga ega bo‘lishi mumkin. Masalan,{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1 py-0.5 rounded">"11"</code> yozuvi o‘nlik sanoq sistemasida (bugungi
                            kunda dunyoda eng keng qo‘llaniladigani) o‘n birni bildiradi, ikkilik sanoq sistemasida (zamonaviy kompyuterlarda ishlatiladi) uchni
                            anglatadi, birdanlik sanoq sistemasida esa (hisob-tayoq usulida) ikki soniga teng bo‘ladi.
                        </p>
                        <p>
                            Belgining ifodalagan soni uning <strong>qiymati</strong> deb ataladi. Barcha sanoq sistemalari ham bir xil sonlar to‘plamini
                            ifodalab bera olmaydi; masalan, Rim, Yunon yoki Misr raqamlarida nol uchun maxsus belgi mavjud emas.
                        </p>
                        <p>Ideal sanoq sistemasi quyidagilarga ega bo‘lishi kerak:</p>
                        <ul>
                            <li>Foydali sonlar to‘plamini ifodalash (masalan, barcha butun yoki ratsional sonlar)</li>
                            <li>Har bir songa yagona, aniq ifoda berish (yoki hech bo‘lmasa standart yozuv)</li>
                            <li>Sonlarning algebraik va arifmetik xususiyatlarini aks ettirish</li>
                        </ul>
                        <p>
                            Masalan, odatiy o‘nlik sanoq sistemasida nol bo‘lmagan har qanday natural son boshida nol bo‘lmagan raqamdan boshlanadigan chekli
                            raqamlar ketma-ketligi orqali yagona tarzda ifodalanadi.
                        </p>
                        <p>
                            Ba’zan sanoq sistemalari <em>son sistemalari</em> deb ham ataladi. Ammo bu atama aniq emas, chunki u boshqa turdagi matematik
                            sistemalarni ham anglatishi mumkin: masalan, haqiqiy sonlar sistemasi, murakkab sonlar sistemasi, giperkompleks sonlar sistemalari,
                            p-adik sonlar sistemasi va hokazo. Biroq bu maqola bunday sistemalar haqida emas.
                        </p>
                    </section>

                    <section>
                        <h2>Tarix</h2>
                        <p>
                            Olimlarning fikricha, dastlabki sanoq sistemalari turli sivilizatsiyalarda turlicha bo‘lgan: bobiliklar 60-lik sistemadan
                            foydalangan, misrliklar iyeroglif raqamlarni ishlab chiqqan, xitoyliklar tayoqcha raqamlaridan foydalanishgan. Mayyalar esa mustaqil
                            ravishda 20-lik (vigesimal) sistemani yaratib, unda nol uchun maxsus belgi ham qo‘shganlar.
                        </p>
                        <Image
                            src="/images/historial_numeric_system.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 rounded-lg p-4"
                            alt="maya"
                            width={360}
                            height={120}
                        />
                        <p>
                            Hind matematiklari, jumladan, milodiy VII asrda yashagan <strong>Braxmagupta</strong>, arifmetik qoidalarni tizimlashtirishda va nol
                            tushunchasini shakllantirishda muhim rol o‘ynadi. Keyinchalik islom olamidagi olimlar, xususan <strong>Al-Xorazmiy</strong> bu
                            g‘oyalarni yanada rivojlantirdilar. Sanoq sistemalari rivojlanib borgani sayin, pozitsion yozuvning samaradorligi va nolning
                            qo‘shilishi zamonaviy son yozuvining shakllanishiga, hamda jahon savdosi, fan va texnologiyaga katta ta’sir ko‘rsatdi.
                        </p>
                        <p>
                            Birinchi haqiqiy yozma pozitsion sanoq sistemasi <strong>hind–arab sanoq sistemasi</strong>
                            hisoblanadi. Bu sistema VII asrda Hindistonda shakllangan
                            <sup className="text-gray-400">[1]</sup>, biroq hali zamonaviy ko‘rinishda emas edi, chunki nol raqami keng qabul qilinmagan edi.
                            Nol o‘rniga ba’zan nuqta belgisi ishlatilgan, yoki bo‘sh joy qoldirilgan. Nolning birinchi keng qabul qilingan ishlatilishi
                            <strong>876-yil</strong>ga to‘g‘ri keladi
                            <sup className="text-gray-400">[2]</sup>. Asl raqamlar shaklan hozirgi raqamlarga juda yaqin bo‘lib, hatto belgilar ham deyarli
                            o‘xshash edi
                            <sup className="text-gray-400">[1]</sup>.
                        </p>
                        <p>
                            XIII asrga kelib, <strong>g‘arbiy arab raqamlari</strong> Yevropa matematik doiralarida qabul qilina boshladi. Masalan,{" "}
                            <strong>Fibonachchi</strong> ularni o‘zining
                            <em>Liber Abaci</em> asarida ishlatgan. Avvaliga qarshilikka uchragan bo‘lsa-da, hind–arab raqamlari amaliy hisoblashdagi qulayligi
                            tufayli, ayniqsa bank va savdoda, Yevropada keng tarqaldi.
                        </p>
                        <p>
                            XV asrda bosmaxona ixtiro qilinishi bilan bu raqamlarning qo‘llanilishi yanada standartlashdi, chunki bosma matematik kitoblar Rim
                            raqamlariga qaraganda shu sistemani afzal ko‘rdi. XV asr oxiriga kelib ular oddiy hayotga keng kirib keldi
                            <sup className="text-gray-400">[3]</sup>. XX asr oxiriga borib esa deyarli butun dunyoda, kompyuterlashtirilmagan barcha
                            hisob-kitoblar arab raqamlari bilan bajariladigan bo‘ldi, mahalliy sanoq sistemalari esa deyarli butunlay siqib chiqarildi.
                        </p>
                        <p>
                            XVII asrda bu sistema ilmiy asarlarda hukmronlik qila boshladi va
                            <strong>Isaak Nyuton</strong> hamda <strong>Rene Dekart</strong> kabi olimlarning matematik kashfiyotlariga ta’sir ko‘rsatdi. XIX–XX
                            asrlarda arab raqamlarining keng joriy etilishi global moliya, muhandislik va texnologiyaning rivojiga xizmat qildi, hamda zamonaviy
                            kompyuter va raqamli ma’lumotlarni ifodalashning poydevorini yaratdi.
                        </p>
                    </section>

                    <section>
                        <h2>Raqamlardan foydalangan boshqa tarixiy sanoq sistemalari</h2>
                        <Image
                            src="/images/maya.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 p-4 border rounded-lg"
                            alt="maya"
                            width={160}
                            height={120}
                        />
                        <p>
                            <strong>Maya raqamlari</strong>ning aniq yoshi noma’lum, biroq ular hind–arab sistemadan ham qadimiy bo‘lishi mumkin. Bu sistema{" "}
                            <em>vigesimal</em> (20-lik) bo‘lib, yigirma xil raqamdan iborat edi. Mayyalar nolni ifodalash uchun chig‘anoq shaklidagi belgidan
                            foydalanishgan. Raqamlar vertikal tarzda yozilgan, birliklar pastki qismda joylashgan bo‘lgan. Mayyalarda zamonaviy o‘nlik vergulga
                            o‘xshash belgi bo‘lmagan, shu sababli ularning sistemasi kasr sonlarni ifodalay olmagan.
                        </p>
                        <p>
                            <strong>Tay raqamlari sistemasi</strong> hind–arab sanoq sistemasi bilan deyarli bir xil, faqat raqamlarni ifodalovchi belgilar
                            boshqacharoq. Bu belgilar Taylandda avvalgidek keng qo‘llanilmaydi, biroq ular arab raqamlari bilan yonma-yon hanuz ishlatilmoqda.
                            <sup className="text-gray-400">[4]</sup>
                        </p>
                        <Image
                            src="/images/rod-table.png"
                            className="mb-4 float-left mr-8 dark:opacity-60 border rounded-lg"
                            alt="rods"
                            width={500}
                            height={300}
                        />
                        <p>
                            <strong>Tayoqcha raqamlar</strong> — xitoy va yapon matematiklari bir vaqtlar foydalangan yozma shakl bo‘lib, bu o‘nlik pozitsion
                            sistema hisoblashlarda ishlatilgan. Tayoqchalar hisoblash doskasiga qo‘yilib, oldinga yoki orqaga surish orqali raqamning o‘nlik
                            razryadi o‘zgartirilgan.
                        </p>
                        <p>
                            Milodiy 3–5-asrlarga oid <em>Sūnzĭ Suànjīng</em> matematik risolasi bu sistemaga oid batafsil ko‘rsatmalar beradi. Olimlar bu usul
                            miloddan avvalgi IV asrdan boshlab ishlatilgan bo‘lishi mumkin, deb hisoblashadi.
                            <sup className="text-gray-400">[5]</sup> Dastlab nol son sifatida emas, balki bo‘sh pozitsiya sifatida qaralgan.
                            <sup className="text-gray-400">[6]</sup> Keyinchalik manbalarda nol va manfiy sonlarni ifodalash uchun maxsus qoidalar joriy
                            qilingan.
                        </p>
                        <p>
                            Nol uchun yumaloq belgi <code className="px-1 py-0.5 rounded dark:bg-background">〇</code>ning ilk ishlatilishi 1247-yildagi{" "}
                            <em>To‘qqiz bo‘limli matematik risola</em>da qayd etilgan.
                            <sup className="text-gray-400">[7]</sup> Bu belgi qayerdan kelib chiqqani noma’lum; ehtimol, kvadrat shaklli belgini o‘zgartirish
                            orqali hosil qilingan bo‘lishi mumkin
                            <sup className="text-gray-400">[8]</sup>. <strong>Suzhou raqamlari</strong> esa, tayoqcha raqamlaridan kelib chiqqan bo‘lib, ayrim
                            savdo maqsadlarida bugungi kunda ham ishlatiladi.
                        </p>
                    </section>

                    <section>
                        <h2>Asosiy sanoq sistemalari</h2>
                        <p>
                            Eng keng tarqalgan sanoq sistemasi — o‘nlik (decimal) sistemasidir. Butun sonli variantini ishlab chiqishda hind matematiklari,
                            xususan,
                            <strong>hind–arab raqamlar sistemasini</strong> yaratishda muhim rol o‘ynashgan.
                            <sup className="text-gray-400">[8]</sup> Kusumapuralik <strong>Aryabhata</strong> V asrda razryad qiymati yozuvini ishlab chiqqan,
                            bir asr o‘tib esa <strong>Brahmagupta</strong> nol belgisi kiritgan. Bu sistema asta-sekin Hindiston bilan savdo va harbiy aloqalar
                            tufayli Arabiston va boshqa qo‘shni hududlarga tarqalgan. O‘rta Sharq matematiklari sistemani kengaytirib, 10 ning manfiy
                            darajalarini (ya’ni kasrlarni) ham qo‘shdilar. Bu haqida 952–953-yillarda suriyalik matematik{" "}
                            <strong>Abu-l-Hasan al-Uqlidisi</strong>ning risolasida qayd etilgan. Kasrlarni ifodalash uchun o‘nlik nuqta yozuvi esa{" "}
                            <strong>Sind ibn Ali</strong> tomonidan kiritilgan bo‘lib, u arab raqamlari haqida dastlabki risolani ham yozgan. Keyinchalik
                            hind–arab raqamlari savdo orqali Yevropaga kirib bordi va yevropaliklar ularni “arab raqamlari” deb atadilar, chunki ularni arablar
                            orqali o‘rgandilar.
                        </p>
                        <p>
                            Eng oddiy sanoq sistemi — bu birlik (unary) sistemasi bo‘lib, unda har bir natural son mos belgilar soni bilan ifodalanadi. Masalan,
                            agar belgi sifatida <code>/</code> tanlansa, unda yetti soni /////// ko‘rinishida yoziladi. Sanash chiziqlari (tally marks) shunday
                            sistemaning hozirgacha keng tarqalgan ko‘rinishidir. Birlik sistemi faqat kichik sonlar uchun qulay, biroq nazariy informatika uchun
                            muhim ahamiyatga ega. Masalan, ma’lumotlarni siqishda keng qo‘llaniladigan Elias gamma kodlash usuli, binar raqamning uzunligini
                            ko‘rsatishda unary kodlashdan foydalanadi.
                        </p>
                        <p>
                            Birlik yozuvi maxsus belgilarni kiritish orqali qisqartirilishi mumkin. Odatda bu qiymatlar 10 ning darajalari bo‘ladi. Masalan, / —
                            1, − — 10, + — 100 deb olinsa, unda 304 soni +++ ////, 123 soni esa + − − /// ko‘rinishida ifodalanishi mumkin, nolga ehtiyoj
                            sezilmasdan. Bunday usul <em>belgi–qiymat yozuvi</em> (sign-value notation) deyiladi. Qadimgi Misr sanoq sistemi shunday turga
                            mansub bo‘lsa, Rim raqamlari esa uning o‘zgartirilgan shaklidir.
                        </p>
                        <p>
                            Yana ham qulayroq bo‘lishi uchun belgilar takrorlanishini maxsus qisqartirishlar yordamida ifodalash mumkin. Masalan, alifboning
                            dastlabki to‘qqiz harfini ishlatib, A — “bir marta”, B — “ikki marta” degan ma’noni anglatgan holda, 304 sonini C+ D/ tarzida yozish
                            mumkin bo‘ladi. (Bu qisqartirishlar soni ba’zan sistemaning asosiy “bazasi” deb ataladi). Bunday sistema xitoy raqamlari va ularga
                            asoslangan boshqa Sharqiy Osiyo raqamlarida ishlatiladi. Ingliz tilidagi son tizimi ham shu turga kiradi (“three hundred four” — uch
                            yuz to‘rt), shuningdek, ko‘plab boshqa tillarda ham shunday. Biroq ayrim tillarda turli asoslar aralashib ketadi: masalan,
                            fransuzchada 79 soni
                            <em>soixante dix-neuf</em> (60 + 10 + 9), uels tilida esa
                            <em>pedwar ar bymtheg a thrigain</em> (4 + (5 + 10) + (3 × 20)) tarzida ifodalanadi. Inglizchada esa “four score less one” (to‘rt ×
                            20 − 1) kabi iboralar ishlatilgan, mashhur Gettysburg nutqida “87 yil muqaddam” deganda shunday ifoda qo‘llangan edi.
                        </p>
                        <p>
                            Eng mukammali esa pozitsion (razryadli) sistema bo‘lib, u razryad qiymati yozuvi sifatida ham tanilgan. Bunday sistemalar o‘z
                            asosiga (radix) qarab tasniflanadi. Masalan, o‘nlik sistemada 0 dan 9 gacha bo‘lgan o‘nta raqam ishlatiladi va raqamning joylashuvi
                            uning 10 ning qaysi darajasi bilan ko‘paytirilishini bildiradi: 304 = 3×100 + 0×10 + 4×1, aniqroq yozsak 3×10² + 0×10¹ + 4×10⁰.
                            Boshqa sistemalarda nol shart emas, ammo pozitsion sistemada u juda muhim, chunki u “razryadlarni tashlab ketish” imkonini beradi.
                            Bugungi kunda butun dunyoda ishlatilayotgan hind–arab sistemasi — 10 asosli pozitsion sistemadir.
                        </p>
                        <p>
                            Aritmetik amallarni pozitsion sistemalarda bajarish qo‘shuvchi sistemalarga nisbatan ancha oson. Qo‘shuvchi sistemalarda 10 ning har
                            bir darajasi uchun turli belgilar kerak bo‘ladi, pozitsion sistemada esa (10 asosida) atigi 10 xil belgi kifoya qiladi.
                            <sup className="text-gray-400">[10]</sup>
                        </p>
                        <p>
                            Hozirda insonlar yozuvda deyarli faqat pozitsion o‘nlik sistemadan foydalanadilar. Shuningdek, ayrim hollarda 1000 asosi ham
                            ishlatiladi (lekin umumiy emas), bunda raqamlar uchlik guruhlarga ajratiladi: masalan, 1,000,234,567.
                        </p>
                        <p>
                            Kompyuterlarda esa asosiy sistema — 2 asosli pozitsion sistema (binar). U faqat ikkita raqamga — 0 va 1 ga asoslanadi. Binar
                            raqamlarni uchlikka guruhlash orqali 8 asosli (octal), yoki to‘rtlikka guruhlash orqali 16 asosli (hexadecimal) sistemalar
                            yaratiladi. Juda katta butun sonlar uchun esa 2³² yoki 2⁶⁴ asosli sistemalar ishlatiladi, masalan, GMP dasturiy kutubxonasida.
                        </p>
                        <p>
                            Ba’zi biologik tizimlarda ham birlik sistemi qo‘llaniladi. Masalan, qushlarning sayrashiga javob beruvchi nerv zanjirlarida unary
                            kodlash ishlatiladi. Qush miya yadrosidagi <strong>HVC (high vocal center)</strong> markazi nafaqat o‘rganishda, balki qo‘shiq
                            ijrosida ham ishtirok etadi. HVCning turli nuqtalaridan turli notalar uchun signal chiqadi. Bunday kodlash “fazoviy kodlash” bo‘lib,
                            biologik tizimlar uchun samarali strategiya hisoblanadi, chunki u oddiy va barqarordir.
                        </p>
                        <p>
                            Raqamlar, ya’ni belgilar orqali yoziladigan sonlar ikki turga bo‘linadi: arifmetik raqamlar (0, 1, 2, ..., 9) va geometrik raqamlar
                            (1, 10, 100, 1000, ...). Belgi–qiymat sistemalari faqat geometrik raqamlardan, pozitsion sistemalar esa faqat arifmetik raqamlardan
                            foydalanadi. Belgi–qiymat sistemasida arifmetik raqamlar kerak emas, chunki ular takrorlash orqali hosil qilinadi, pozitsion
                            sistemada esa geometrik raqamlar kerak emas, chunki ular joylashuv orqali yaratiladi. Ammo og‘zaki tilda odatda har ikkala tur ham
                            ishlatiladi.
                        </p>
                        <p>
                            Informatikaning ayrim sohalarida <em>bijektiv sanash</em> deb ataluvchi, o‘zgartirilgan <em>k</em>-asosli pozitsion sistema
                            qo‘llaniladi. Unda raqamlar 1, 2, ..., <em>k</em> ko‘rinishida bo‘lib, nol bo‘sh satr bilan ifodalanadi. Bu usul barcha sonlar va
                            raqamli satrlar o‘rtasida bir qiymatli moslikni (bijection) ta’minlaydi va ortiqcha nol sababli yuzaga keladigan noaniqlikni
                            bartaraf etadi. Bijektiv <em>k</em>-asosli sistema ba’zan <em>k-adic notation</em> deb ham ataladi (uni p-adic sonlar bilan
                            adashtirmaslik kerak). Bijektiv 1-asosli sistema oddiy birlik sistemasiga tengdir.
                        </p>
                    </section>

                    <section>
                        <h2>Pozitsion sistemalar tafsilotlari</h2>
                        <p>
                            Pozitsion asos <em>b</em> ga ega bo‘lgan sanoq sistemasida (<em>b</em> — 1 dan katta bo‘lgan natural son bo‘lib, sistema asosini
                            bildiradi)
                            <em>b</em> ta asosiy belgi (raqam) ishlatiladi. Bu belgilar 0 dan <em>b – 1</em> gacha bo‘lgan natural sonlarni ifodalaydi. Qolgan
                            sonlarni hosil qilishda belgining o‘rni (pozitsiyasi) hisobga olinadi: oxirgi o‘rinda turgan belgi o‘z qiymatiga ega, chapga qarab
                            siljigan sari qiymati <em>b</em> ga ko‘paytiriladi.
                        </p>
                        <p>
                            Masalan, <strong>o‘nlik</strong> sistemada (asos 10) 4327 soni quyidagicha yoziladi: (4×10³) + (3×10²) + (2×10¹) + (7×10⁰), bunda
                            10⁰ = 1.
                        </p>
                        <p>
                            Umuman, agar <em>b</em> asos bo‘lsa, unda son quyidagicha yoziladi:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] p-1 rounded inline-block">aₙbⁿ + aₙ₋₁bⁿ⁻¹ + aₙ₋₂bⁿ⁻² + ... + a₀b⁰</code>
                            va raqamlar <code className="[font-family:'Times_New_Roman',serif] px-1">aₙ aₙ₋₁ ... a₀</code>
                            tartibda chapdan o‘ngga yoziladi. Bu yerda raqamlar 0 dan <em>b – 1</em> gacha bo‘lgan natural sonlardir.
                        </p>
                        <p>
                            Agar matnda bir nechta asoslar haqida so‘z borsa, chalkashlikni oldini olish uchun sonning yoniga past indeksda asos yoziladi:
                            <code className="[font-family:'Times_New_Roman',serif] px-1">
                                son<sub>asos</sub>
                            </code>
                            . Indekssiz yozilgan sonlar odatda o‘nlik deb qabul qilinadi.
                        </p>
                        <p>
                            Raqamlarni nuqta yordamida ikki qismga bo‘lib, kasr sonlarni ham yozish mumkin. Masalan, 2 asosidagi{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1">10.11</code> soni: 1×2¹ + 0×2⁰ + 1×2⁻¹ + 1×2⁻² = 2.75 ga teng.
                        </p>
                        <p>
                            Umuman olganda, <em>b</em> asosli sistemadagi sonlar quyidagi shaklda yoziladi:
                            <br />
                            <Image src="/images/formula_n1.png" className="dark:bg-slate-400 rounded-lg" alt="f1" width={373} height={50} />
                        </p>
                        <p>
                            Bu yerda bᵏ va b⁻ᵏ qiymatlar tegishli raqamlarning <strong>vaznlari</strong> hisoblanadi.
                            <em>k</em> o‘rni mos vazn <em>w</em> ning <strong>logarifmi</strong>dir, ya’ni
                            <Image src="/images/formula_n2.png" className="dark:bg-slate-400 rounded-sm inline" alt="f2" width={141} height={23} />. Eng katta
                            o‘rin sonning <strong>tartib darajasi</strong>ga yaqin bo‘ladi.
                        </p>
                        <p>
                            Birlik sistemasida (unary) vaznni ifodalash uchun <em>w</em> ta belgi kerak bo‘lardi. Pozitsion sistemada esa buning uchun atigi
                            <Image src="/images/formula_n3.png" className="dark:bg-slate-400 rounded-sm inline" alt="f3" width={131} height={19} />
                            ta raqam kifoya qiladi (<em>k ≥ 0</em> uchun). Masalan, 1000 vaznini ifodalash uchun 4 ta raqam yetadi, chunki
                            <code className="[font-family:'Times_New_Roman',serif] px-1">
                                log<sub>10</sub> 1000 + 1 = 3 + 1
                            </code>
                            . O‘rinni ifodalash uchun kerak bo‘ladigan raqamlar soni
                            <Image src="/images/formula_n4.png" className="dark:bg-slate-400 rounded-sm inline" alt="f4" width={192} height={19} /> ga teng
                            (soddalashtirish uchun o‘nlik sistemada 1, 10, 100,... misol qilingan).
                        </p>
                        <Image src="/images/table_n4.png" className="dark:bg-slate-400 rounded-lg mb-2 inline" alt="t4" width={474} height={121} />
                        <p>
                            Sonning chekli yoki davriy yozilishi faqat u ratsional bo‘lsa mumkin; bu asosga bog‘liq emas. Bir asosda tugaydigan son boshqa
                            asosda davriy bo‘lishi mumkin (masalan, 0.3₁₀ = 0.0100110011001...₂). Irratsional son esa barcha asoslarda davriy bo‘lmagan cheksiz
                            yozuvga ega bo‘ladi. Masalan, 2 asosida π = 3.1415926...₁₀ quyidagicha yoziladi: 11.001001000011111...₂.
                        </p>
                        <p>
                            Davriy kasrlarni yozishda takrorlanuvchi raqamlar ustiga chiziq (
                            <code>
                                <span className="overline">n</span>
                            </code>
                            ) yoki nuqta (<code>ṅ</code>) qo‘yish qabul qilingan. Masalan:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-2">
                                14/11 = 1.272727272727... = 1.<span className="overline">27</span>
                            </code>
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-1">
                                321.3217878787878... = 321.321<span className="overline">78</span>
                            </code>
                        </p>
                        <p>
                            Agar b = p tub son bo‘lsa, cheksiz chapga kengayuvchi <em>p</em>-asosli sonlarni ta’riflash mumkin; ular{" "}
                            <strong>p-adik sonlar</strong> deb ataladi.
                        </p>
                        <p>
                            Shuningdek, asos <em>b</em> varianti ham mavjud bo‘lib, unda raqamlar musbat yoki manfiy bo‘lishi mumkin; bu{" "}
                            <strong>imzoli raqamli yozuv</strong> deb ataladi.
                        </p>
                    </section>

                    <section>
                        <h2>Umumlashtirilgan o‘zgaruvchan uzunlikdagi butun sonlar</h2>

                        <p>
                            Bundan ham umumiyroq yondashuv — aralash asosli yozuvdan foydalanishdir (bu yerda <em>little-endian</em> shaklida yozilgan),
                            masalan: <code>a₀a₁a₂</code> quyidagiga teng bo‘ladi: <code>a₀ + a₁·b₁ + a₂·b₁·b₂</code> va hokazo.
                        </p>

                        <p>
                            Bu usul <strong>Punycode</strong>’da qo‘llaniladi. Uning mohiyatlaridan biri — ixtiyoriy kattalikdagi manfiy bo‘lmagan sonlar
                            ketma-ketligini ajratkichsiz yozishdir. Bunda 36 ta belgidan iborat “raqamlar” ishlatiladi: <code>a–z</code> va <code>0–9</code>,
                            ular mos ravishda qiymatlarni 0–25 va 26–35 ifodalaydi.
                        </p>

                        <p>
                            Shuningdek, har bir pozitsiya uchun oldindan belgilangan <code>t₀, t₁, ...</code> kabi <em>chegaraviy qiymatlar</em> ham mavjud.
                            Agar raqam <code>aᵢ</code> o‘z pozitsiyasi uchun belgilangan chegaradan kichik bo‘lsa, u <em>eng katta ahamiyatli raqam</em>{" "}
                            hisoblanadi. Demak, bu belgining o‘zi sonning oxiri ekanini bildiradi va keyingi belgi (agar mavjud bo‘lsa) yangi sonning eng kichik
                            raqami bo‘ladi.
                        </p>

                        <p>
                            Masalan, agar birinchi raqam uchun chegaraviy qiymat <code>b = 1</code> bo‘lsa, unda <code>a = 0</code> sonning tugaganini bildiradi
                            (ya’ni u faqat bitta raqamdan iborat). Demak, bir nechta raqamdan iborat sonlarda birinchi raqamning oralig‘i faqat <code>b–9</code>{" "}
                            (1–35) bo‘ladi. Bu holda birinchi og‘irlik <code>b₁</code> = 35 bo‘ladi (36 emas). Umuman, agar <code>tₙ</code> n-chi raqam uchun
                            chegara bo‘lsa, quyidagisi hosil bo‘ladi:
                            <br />
                            <code>bₙ₊₁ = 36 − tₙ</code>
                        </p>

                        <p>
                            Faraz qilaylik, ikkinchi va uchinchi raqamlar uchun chegaraviy qiymat <code>c = 2</code> bo‘lsin. Unda ikkinchi raqamning oralig‘i,
                            agar u eng katta ahamiyatli raqam bo‘lsa, <code>a–b</code> (0–1), agar uchinchi raqam mavjud bo‘lsa, <code>c–9</code> (2–35)
                            bo‘ladi. Umuman olganda, (n + 1)-raqamning og‘irligi avvalgisining og‘irligiga <code>36 − tₙ</code> ni ko‘paytirish orqali topiladi.
                        </p>

                        <p>
                            Masalan:
                            <br />
                            <code>2-raqamning og‘irligi = 36 − t₀ = 35</code>
                            <br />
                            <code>3-raqamning og‘irligi = 35 × (36 − t₁) = 35 × 34 = 1190</code>
                        </p>

                        <p>
                            Demak, bizda quyidagi 3 raqamdan oshmagan sonlar ketma-ketligi hosil bo‘ladi:
                            <br />
                            <code>
                                a (0), ba (1), ca (2), ..., 9a (35), bb (36), cb (37), ..., 9b (70), bca (71), ..., 99a (1260), bcb (1261), ..., 99b (2450)
                            </code>
                        </p>

                        <p>
                            Oddiy n-asosli sanoq sistemasidan farqli o‘laroq, bu yerda <code>9b</code> kabi sonlar mavjud, bunda <code>9</code> ham,{" "}
                            <code>b</code> ham 35 ni bildiradi. Shunga qaramay, yozilish yagona bo‘lib qoladi, chunki <code>ac</code> yoki <code>aca</code> kabi
                            yozuvlarga ruxsat berilmaydi — ularning birinchi <code>a</code> belgisi sonning tugaganini bildirgan bo‘lur edi.
                        </p>

                        <p>
                            Chegaraviy qiymatlarni moslab olish imkoniyati turli kattalikdagi sonlarning uchrashish chastotasiga qarab raqamlar sonini
                            optimallashtirish imkonini beradi.
                        </p>

                        <p>
                            Agar barcha chegaraviy qiymatlar 1 ga teng bo‘lsa, bu holat <strong>bijektiv sanoq sistemasi</strong>ga mos keladi. Unda nol
                            belgilar raqamlari noldan farqli bo‘lgan sonlarni ajratib turuvchi ajratkich vazifasini bajaradi.
                        </p>

                        <div className="float-right">© wikipedia, 2025</div>
                        <br />
                    </section>

                    <hr />
                    <h2>Adabiyotlar</h2>
                    <ol>
                        <li>
                            O'Connor, J. J. va Robertson, E. F. <em>Arabic Numerals</em> (Arab raqamlari). Yanvar 2001.
                        </li>
                        <li>
                            Bill Casselman. "All for Nought" (Hammasi bekorga). <em>Feature Column</em>. AMS. Fevral 2007.
                        </li>
                        <li>
                            Bradley, Jeremy. "How Arabic Numbers Were Invented" (Arab raqamlari qanday ixtiro qilingan). <em>theclassroom.com</em>.
                        </li>
                        <li>
                            "Wissanu rejects dumping Thai numerals" (Wissanu tay raqamlarini bekor qilishni rad etdi). <em>Bangkok Post</em>. 31 May 2022.
                        </li>
                        <li>O'Connor, John J.; Robertson, Edmund F. (2004). "Chinese numerals" (Xitoy raqamlari). University of St Andrews.</li>
                        <li>
                            Shen Kuo va boshq. (1999). <em>The Nine Chapters on the Mathematical Art</em> (Matematik san’atning to‘qqiz bobidan). Oxford
                            University Press.
                        </li>
                        <li>
                            "Mathematics in the Near and Far East" (Yaqin va Uzoq Sharqda matematika). <em>grmath4.phpnet.us</em>.
                        </li>
                        <li>
                            Martzloff, Jean-Claude (2007). <em>A History of Chinese Mathematics</em> (Xitoy matematikasi tarixi).
                        </li>
                        <li>
                            David Eugene Smith; Louis Charles Karpinski (1911). <em>The Hindu–Arabic numerals</em> (Hind–arab raqamlari).
                        </li>
                        <li>
                            Chowdhury, Arnab. <em>Design of an Efficient Multiplier using DBNS</em> (DBNS asosida samarali ko‘paytirgich loyihasi). GIAP
                            Journals.
                        </li>
                        <li>
                            Fiete, I. R.; Seung, H. S. (2007). "Neural network models of birdsong..." (Qush qo‘shig‘ining neyron tarmoq modellari...) in{" "}
                            <em>New Encyclopedia of Neuroscience</em> (Neyrofan yangi ensiklopediyasi).
                        </li>
                    </ol>

                    <h2>Manbalar</h2>
                    <ul>
                        <li>
                            Georges Ifrah. <em>The Universal History of Numbers</em> (Raqamlarning umumiy tarixi). Wiley, 1999.
                        </li>
                        <li>
                            D. Knuth. <em>The Art of Computer Programming</em> (Kompyuter dasturlash san’ati). Addison–Wesley, 3-nashr.
                        </li>
                        <li>
                            A.L. Kroeber. <em>Handbook of the Indians of California</em> (Kaliforniya hindulari qo‘llanmasi). Smithsonian Institution.
                        </li>
                        <li>
                            J.P. Mallory; D.Q. Adams. <em>Encyclopedia of Indo-European Culture</em> (Indo-yevropa madaniyati ensiklopediyasi).
                        </li>
                        <li>
                            Hans J. Nissen va boshq. (1993). <em>Archaic Bookkeeping</em> (Arxaik buxgalteriya). University of Chicago Press.
                        </li>
                        <li>
                            Schmandt-Besserat, Denise (1996). <em>How Writing Came About</em> (Yozuv qanday paydo bo‘lgan). University of Texas Press.
                        </li>
                        <li>
                            Zaslavsky, Claudia (1999). <em>Africa Counts</em> (Afrika hisoblaydi). Chicago Review Press.
                        </li>
                    </ul>
                </Container>
            </article>
        </main>
    );
};

export default NumeralSystem;
