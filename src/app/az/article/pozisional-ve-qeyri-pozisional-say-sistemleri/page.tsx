import Container from "@/src/components/common/container";
import { ARTICLES_001_PVNSS_METALANG } from "@/src/lib/constants/article/pozitsion-va-nopozitsion-sanoq-sistemalari";
import { SEO } from "@/src/lib/utils/generate-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    const url = ARTICLES_001_PVNSS_METALANG["az"] as string;
    const title = "Pozisional və qeyri-pozisional say sistemləri";
    const description = "Bu məqalə say sistemləri anlayışını sadə və praktik nümunələrlə izah edir.";
    const keywords = ["say sistemi", "pozisional say sistemi", "qeyri-pozisional say sistemi", "Rim rəqəmləri", "say sistemlərinin fərqi"];

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_001_PVNSS_METALANG, lang: "az", pageType: "article" });
}

export default function MeqalePozisionalQeyriPozisional() {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Pozisional və qeyri-pozisional say sistemləri</h1>
                        <p>
                            Bu məqalə say sistemləri anlayışını sadə və praktik nümunələrlə izah edir. Diqqət əsasən iki böyük kateqoriyaya yönəldilir:{" "}
                            <strong>pozisional</strong> (rəqəmin dəyəri <em>mövqeyindən</em> asılıdır) və <strong>qeyri-pozisional</strong> (rəqəmin dəyəri{" "}
                            <em>sabitdir</em>) sistemlər.
                        </p>
                    </header>

                    <section>
                        <h2>Say sistemi nədir?</h2>
                        <p>
                            Say sistemi — <em>sayıları işarələmə və yazma qaydaları</em> toplusudur. Hər bir sistemin <strong>əsası</strong> və{" "}
                            <strong>rəqəmlər toplusu</strong> olur. Məsələn, onluq sistemdə əsas 10-dur və rəqəmlər toplusu 0–9-dan ibarətdir.
                        </p>
                    </section>

                    <section>
                        <h2>Pozisional və qeyri-pozisional fərqi</h2>
                        <p>
                            <strong>Pozisional</strong> sistemlərdə rəqəmin dəyəri onun <em>mövqeyindən</em> asılıdır. Məsələn, 507 sayında 5 — yüzlük, 0 —
                            onluq, 7 — birlik deməkdir. <strong>Qeyri-pozisional</strong> sistemlərdə isə rəqəm harada dayanmasından asılı olmayaraq dəyərini
                            dəyişmir; sayın dəyəri rəqəmlərin <em>cəmi</em> və ya <em>qaydalı kombinasiya</em>ları ilə hesablanır.
                        </p>
                    </section>

                    <section>
                        <h2>Qeyri-pozisional sistemlər</h2>
                        <ul>
                            <li>
                                <strong>Ştrix (tally) yazısı:</strong> <code>||||</code> = 4, <code>|||| |||</code> = 7. Hər ştrix həmişə 1-ə bərabərdir; mövqe
                                əhəmiyyətsizdir.
                            </li>
                            <li>
                                <strong>Rim rəqəmləri:</strong> <code>I=1</code>, <code>V=5</code>, <code>X=10</code>, <code>L=50</code>, <code>C=100</code>,{" "}
                                <code>D=500</code>, <code>M=1000</code>. Saylar əsasən toplama (bəzən çıxma) qaydaları ilə qurulur. Məsələn,{" "}
                                <code>VIII = 5+3 = 8</code>, <code>IX = 10−1 = 9</code>, <code>XL = 50−10 = 40</code>.
                            </li>
                            <li>
                                <strong>Qədim Misir rəqəmləri:</strong> birlik, onluq, yüzlük işarələrinin təkrari cəmi ilə say yazılır (mövqe əhəmiyyətli
                                deyil).
                            </li>
                        </ul>
                        <p>
                            Qeyri-pozisional sistemlərdə <em>böyük sayların yazılması</em> çox işarə tələb edir və <em>arifmetik əməliyyatlar</em> (xüsusilə
                            vurma/bölmə) çətinləşir.
                        </p>
                    </section>

                    <section>
                        <h2>Pozisional sistemlər</h2>
                        <p>
                            Pozisional sistemdə say aşağıdakı <em>çoxhədli</em> formasında şərh olunur:
                        </p>
                        <pre>
                            <code>{`(a_n a_{n-1} ... a_1 a_0)_b = a_n*b^n + a_{n-1}*b^{n-1} + ... + a_1*b + a_0
Şərt: 0 \u2264 a_i < b`}</code>
                        </pre>
                        <p>
                            Burada <strong>b</strong> — sistemin əsasıdır; məsələn, onluqda <strong>b=10</strong>, ikilikdə <strong>b=2</strong>, onaltılıqda{" "}
                            <strong>b=16</strong>. <strong>0</strong> rəqəmi pozisional sistemlərdə vacibdir: yer tutucu və “yox dəyəri” ifadə edən rəqəm kimi
                            işlədilir.
                        </p>

                        <strong>Yayğın pozisional sistemlər</strong>
                        <ul>
                            <li>
                                <strong>Onluq (b=10):</strong> gündəlik həyat, maliyyə, ölçmələrdə standart.
                            </li>
                            <li>
                                <strong>İkilik (b=2):</strong> kompüter məntiqi (0/1) və rəqəmsal elektronikanın əsası.
                            </li>
                            <li>
                                <strong>Səkkizlik (b=8) və onaltılıq (b=16):</strong> bit qruplarını yığcam göstərmək, proqramlaşdırmada əlverişlidir.
                            </li>
                            <li>
                                <strong>Altılıq (b=6), beşlik (b=5), iyirmilik (b=20), altmışlıq (b=60):</strong> müxtəlif mədəniyyət və tarixi təcrübələrdə
                                rast gəlinir (məsələn, vaxt və bucaq ölçmələrində 60-lıq).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Niyə pozisional sistemlər əlverişlidir?</h2>
                        <ol>
                            <li>
                                <strong>Yığcam yazı:</strong> Eyni dəyəri daha az işarə ilə ifadə etmək mümkündür.
                            </li>
                            <li>
                                <strong>Algoritmik arifmetika:</strong> toplama, çıxma, vurma, bölmə üçün sabit, təkrarlana bilən alqoritmlər var.
                            </li>
                            <li>
                                <strong>Miqyaslanma:</strong> Əsas dəyişsə belə ümumi qaydalar (mövqe dəyəri, dərəcələr) qorunur.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>Qeyri-pozisional sistemlərdə arifmetika niyə çətindir?</h2>
                        <ul>
                            <li>
                                <strong>Cəm əsasında quruluş:</strong> Rəqəmlər sadəcə cəmlənir; vurma — təkrari toplama olduğundan yazılar mürəkkəbləşir.
                            </li>
                            <li>
                                <strong>Subtraktiv qaydalar:</strong> Rim rəqəmlərində <code>IV</code>, <code>IX</code> kimi hallar alqoritmləri sadələşdirmir.
                            </li>
                            <li>
                                <strong>0 rəqəmi yoxdur və ya az işlədilir:</strong> Yer tutucu boş mövqe olmadığından sistemi ümumiləşdirmək çətinləşir.
                            </li>
                        </ul>
                        <strong>Praktik müqayisə</strong>
                        <table>
                            <thead>
                                <tr>
                                    <th>Xüsusiyyət</th>
                                    <th>Pozisional</th>
                                    <th>Qeyri-pozisional</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rəqəmin dəyəri</td>
                                    <td>
                                        Mövqedən asılıdır (<em>mövqe dəyəri</em>)
                                    </td>
                                    <td>Sabit, mövqedən asılı deyil</td>
                                </tr>
                                <tr>
                                    <td>0 rəqəmi</td>
                                    <td>Mərkəzi rola malikdir</td>
                                    <td>Adətən yoxdur və ya nadir istifadə olunur</td>
                                </tr>
                                <tr>
                                    <td>Arifmetika</td>
                                    <td>Algoritmik, daha sadə</td>
                                    <td>Mürəkkəb, qayda dəstlərinə söykənir</td>
                                </tr>
                                <tr>
                                    <td>Yığcamlıq</td>
                                    <td>Yüksək</td>
                                    <td>Aşağı</td>
                                </tr>
                                <tr>
                                    <td>Tətbiq sahəsi</td>
                                    <td>Gündəlik, elmi, kompüter</td>
                                    <td>Tarixi, mərasim, xüsusi işarələmə</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Gəlin, bir neçə nümunəyə baxaq:</p>
                        <ul>
                            <li>
                                <strong>Rim → onluq:</strong> MCMLXXXIV = 1000 + (1000−100) + 50 + 10 + 10 + 10 + (5−1) = 1984.
                            </li>
                            <li>
                                <strong>İkilik → onluq:</strong> 1100101<sub>2</sub> = 64 + 32 + 4 + 1 = 101<sub>10</sub>.
                            </li>
                            <li>
                                <strong>Onluq → onaltılıq:</strong> 255<sub>10</sub> → (FF)<sub>16</sub>.
                            </li>
                            <li>
                                <strong>Onluq → ikilik (kəsr):</strong> 0.1<sub>10</sub> ≈ 0.0001100110011…<sub>2</sub> (dövri).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Bonus: Tez-tez rast gəlinən səhvlər</h2>
                        <ul>
                            <li>
                                <strong>Əsasdan böyük rəqəmdən istifadə:</strong> məsələn, ikilikdə <b>2</b> və ya <b>3</b> ola bilməz.
                            </li>
                            <li>
                                <strong>Kəsr çevrilməsini tez dayandırmaq:</strong> xəta nəzarəti üçün addım sayı və dəqiqlik əvvəlcədən müəyyənləşdirilməlidir.
                            </li>
                            <li>
                                <strong>Rim rəqəmlərində subtraksiyanın sui-istifadəsi:</strong> <b>IL</b> (49) kimi yazılış standartlara görə düzgün deyil,
                                əslində <b>XLIX</b> doğrudur.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>
                            Qeyri-pozisional sistemlər tarixi və mədəni baxımdan maraqlı olsa da, müasir elm və texnikada <strong>pozisional</strong> sistemlər
                            praktik baxımdan üstündür. Onların əsas gücü — mövqe dəyəri, 0 rəqəmi və algoritmik arifmetikadır. Çevirmə üsullarını bilmək isə
                            proqramlaşdırma və mühəndislikdə gündəlik işi xeyli sadələşdirir.
                        </p>
                    </section>

                    <footer>
                        <p>Müəllif: Najmiddin Nazirov</p>
                    </footer>
                </Container>
            </article>
        </main>
    );
}
