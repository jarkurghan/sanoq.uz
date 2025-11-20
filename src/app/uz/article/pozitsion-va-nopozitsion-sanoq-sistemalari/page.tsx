import Container from "@/src/components/common/container";
import { ARTICLES_001_PVNSS_METALANG } from "@/src/lib/constants/article/pozitsion-va-nopozitsion-sanoq-sistemalari";
import { SEO } from "@/src/lib/utils/generate-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    const url = ARTICLES_001_PVNSS_METALANG["uz"] as string;
    const title = "Pozitsion va nopozitsion sanoq sistemalari";
    const description = "Ushbu maqola sanoq sistemalari tushunchasini sodda va amaliy misollar bilan tushuntiradi.";
    const keywords = ["sanoq sistemasi", "pozitsion sanoq sistemi", "nopozitsion sanoq sistemi", "rim raqamlari", "sanoq sistemalari farqi"];

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_001_PVNSS_METALANG, lang: "uz", pageType: "article" });
}

export default function MaqolaPozitsionNopozitsion() {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Pozitsion va nopozitsion sanoq sistemalari</h1>
                        <p>
                            Ushbu maqola sanoq sistemalari tushunchasini sodda va amaliy misollar bilan tushuntiradi. Asosiy eʼtibor ikki katta toifaga
                            qaratiladi: <strong>pozitsion</strong> (raqam qiymati o‘rniga bog‘liq) va <strong>nopozitsion</strong> (raqam qiymati doimiy)
                            sistemalar.
                        </p>
                    </header>

                    <section>
                        <h2>Sanoq sistemasi nima?</h2>
                        <p>
                            Sanoq sistemasi — bu <em>sonlarni belgilash va yozish qoidalari</em> majmui. Har qanday sistema <strong>asos </strong> va{" "}
                            <strong>raqamlar to‘plami</strong>ga ega bo‘ladi. Masalan, o‘nlik sistemada asos 10 bo‘lib, raqamlar to‘plami 0–9 dan iborat.
                        </p>
                    </section>

                    <section>
                        <h2>Pozitsion va nopozitsion farqi</h2>
                        <p>
                            <strong>Pozitsion</strong> sistemalarda raqamning qiymati <em>o‘rniga</em> bog‘liq. Masalan, 507 sonida 5 yuzlikni, 0 o‘nlikni, 7
                            birlikni bildiradi. <strong>Nopozitsion</strong> sistemalarda esa raqam qayerda turganidan qat’i nazar, uning qiymati o‘zgarmaydi;
                            son qiymati raqamlar <em>yig‘indisi</em> yoki <em>qoidaviy kombinatsiyasi</em> orqali topiladi.
                        </p>
                    </section>

                    <section>
                        <h2>Nopozitsion sistemalar</h2>
                        <ul>
                            <li>
                                <strong>Shtrix (tally) yozuvi:</strong> <code>||||</code> = 4, <code>|||| |||</code> = 7. Har bir chiziq doim 1 ga teng; o‘rin
                                ahamiyatsiz.
                            </li>
                            <li>
                                <strong>Rim raqamlari:</strong> <code>I=1</code>, <code>V=5</code>, <code>X=10</code>,<code>L=50</code>, <code>C=100</code>,{" "}
                                <code>D=500</code>, <code>M=1000</code>. Sonlar ko‘pincha qo‘shish (ba’zan ayirish) qoidalari bilan tuziladi. Masalan,{" "}
                                <code>VIII = 5+3 = 8</code>, <code>IX = 10−1 = 9</code>, <code>XL = 50−10 = 40</code>.
                            </li>
                            <li>
                                <strong>Qadimgi misr raqamlari:</strong> Birlik, o‘nlik, yuzlik belgilarining (raqamlarning) takroriy yig‘indisi yordamida son
                                yoziladi (pozitsiya ahamiyatli emas).
                            </li>
                        </ul>
                        <p>
                            Nopozitsion sistemalarda <em>katta sonlarni yozish</em> ko‘p raqamlar talab qiladi va <em>arifmetik amallar</em> (ayniqsa,
                            ko‘paytirish/bo‘lish) murakkablashadi.
                        </p>
                    </section>

                    <section>
                        <h2>Pozitsion sistemalar</h2>
                        <p>
                            Pozitsion sistemada son quyidagi <em>ko‘phad</em> ko‘rinishida talqin qilinadi:
                        </p>
                        <pre>
                            <code>{`(a_n a_{n-1} ... a_1 a_0)_b = a_n*b^n + a_{n-1}*b^{n-1} + ... + a_1*b + a_0\nShart: 0 \u2264 a_i < b`}</code>
                        </pre>
                        <p>
                            Bu yerda <strong>b</strong> — sistema asosi; masalan, o‘nlikda <strong>b=10</strong>, ikkilikda <strong>b=2</strong>, o‘n
                            oltitalikda <strong>b=16</strong>. <strong>0</strong> raqami pozitsion sistemalarda muhim: u to‘ldiruvchi va yo‘q qiymatni
                            bildiruvchi raqam sifatida ishlaydi.
                        </p>

                        <strong>Mashhur pozitsion sistemalar</strong>
                        <ul>
                            <li>
                                <strong>O‘nlik (b=10):</strong> kundalik hayot, moliya, o‘lchovlarda standart.
                            </li>
                            <li>
                                <strong>Ikkilik (b=2):</strong> kompyuterlar mantiqi (0/1) va raqamli elektronika asosi.
                            </li>
                            <li>
                                <strong>Sakkizlik (b=8) va o‘n oltitalik (b=16):</strong> bit guruhlarini ixcham ko‘rsatish, dasturlash tizimlarida qulay.
                            </li>
                            <li>
                                <strong>Oltilik (b=6), beshlik (b=5), yigirmalik (b=20), oltmishlik (b=60):</strong> turli madaniyatlar va tarixiy amaliyotlarda
                                uchraydi (masalan, vaqt va burchaklarda 60-lik).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Nega pozitsion sistemalar qulay?</h2>
                        <ol>
                            <li>
                                <strong>Ixcham yozuv:</strong> Bir xil qiymatni kamroq belgilar (raqamlar) bilan ifodalash mumkin.
                            </li>
                            <li>
                                <strong>Algoritmik arifmetika:</strong> Qo‘shish, ayirish, ko‘paytirish, bo‘lish uchun barqaror, takrorlanuvchi algoritmlar
                                mavjud.
                            </li>
                            <li>
                                <strong>Shkalalanish:</strong> Asos almashsa ham umumiy qoidalar saqlanadi (o‘rin qiymati, darajalar).
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>Nopozitsion sistemalarda arifmetika nega qiyin?</h2>
                        <ul>
                            <li>
                                <strong>Yig‘indi asosida tuzilish:</strong> Raqamlar qo‘shilib boradi; ko‘paytirish — takroriy qo‘shishdan iborat, murakkab
                                yozuvlar paydo bo‘ladi.
                            </li>
                            <li>
                                <strong>Subtraktiv qoidalar:</strong> Rim raqamlarida <code>IV</code>, <code>IX</code> kabi holatlar algoritmlarni
                                soddalashtirmaydi.
                            </li>
                            <li>
                                <strong>0 raqami yo‘q yoki kam qo‘llanadi:</strong> To‘ldirish uchun bo‘sh o‘rin yo‘qligi tizimni umumlashtirishga to‘sqinlik
                                qiladi.
                            </li>
                        </ul>
                        <strong>Amaliy taqqoslash</strong>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tasnif</th>
                                    <th>Pozitsion</th>
                                    <th>Nopozitsion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Raqam qiymati</td>
                                    <td>
                                        O‘ringa bog‘liq (<em>o‘rin qiymati</em>)
                                    </td>
                                    <td>Doimiy, o‘rindan mustaqil</td>
                                </tr>
                                <tr>
                                    <td>0 raqami</td>
                                    <td>Markaziy rolga ega</td>
                                    <td>Odatda yo‘q yoki kam ishlatiladi</td>
                                </tr>
                                <tr>
                                    <td>Arifmetika</td>
                                    <td>Algoritmik, soddaroq</td>
                                    <td>Murakkab, qoida-guruhlarga tayanadi</td>
                                </tr>
                                <tr>
                                    <td>Ixchamlik</td>
                                    <td>Yuqori</td>
                                    <td>Past</td>
                                </tr>
                                <tr>
                                    <td>Qo‘llanish</td>
                                    <td>Kundalik, ilmiy, kompyuter</td>
                                    <td>Tarixiy, marosimiy, maxsus belgilash</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Keling, ba'zi misollarda ko'ramiz:</p>
                        <ul>
                            <li>
                                <strong>Rimcha → o‘nlik:</strong> MCMLXXXIV = 1000 + (1000−100) + 50 + 10 + 10 + 10 + (5−1) = 1984.
                            </li>
                            <li>
                                <strong>Ikkilik → o‘nlik:</strong> 1100101<sub>2</sub> = 64 + 32 + 4 + 1 = 101<sub>10</sub>.
                            </li>
                            <li>
                                <strong>O‘nlik → o‘n oltilik:</strong> 255<sub>10</sub> → (FF)<sub>16</sub>.
                            </li>
                            <li>
                                <strong>O‘nlik → ikkilik (kasr):</strong> 0.1<sub>10</sub> ≈ 0.0001100110011…<sub>2</sub> (davriy).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Bonus: Tez-tez uchraydigan xatolar</h2>
                        <ul>
                            <li>
                                <strong>Asosdan katta raqamdan foydalanish:</strong> masalan, ikkilikda <b>2</b> yoki <b>3</b> bo‘lishi mumkin emas.
                            </li>
                            <li>
                                <strong>Kasr konvertatsiyasini erta to‘xtatish:</strong> xatolikni nazorat qilish uchun qadam-soni va aniqlikni oldindan
                                belgilash kerak.
                            </li>
                            <li>
                                <strong>Rim raqamlari subtraksiyasini suiiste’mol qilish:</strong> <b>IL</b> (49) kabi yozuv standart bo'yicha to'g'ri emas,
                                aslida <b>XLIX</b> to'g'ri.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>
                            Nopozitsion sistemalar tarixiy va madaniy jihatdan qiziqarli bo‘lsa-da, bugungi ilm-fan va texnikada <strong>pozitsion</strong>{" "}
                            sistemalar amaliy jihatdan ustundir. Ularning asosiy kuchi — o‘rin qiymati, 0 raqami va algoritmik arifmetika. Konvertatsiya
                            usullarini bilish esa dasturlash va muhandislikda kundalik ishni sodda qiladi.
                        </p>
                    </section>

                    <footer>
                        <p>Muallif: Najmiddin Nazirov</p>
                    </footer>
                </Container>
            </article>
        </main>
    );
}
