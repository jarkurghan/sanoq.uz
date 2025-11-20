import Container from "@/src/components/common/container";
import { ARTICLES_001_PVNSS_METALANG } from "@/src/lib/constants/article/pozitsion-va-nopozitsion-sanoq-sistemalari";
import { SEO } from "@/src/lib/utils/generate-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    const url = ARTICLES_001_PVNSS_METALANG["tr"] as string;
    const title = "Konumsal ve konumsal olmayan sayı sistemleri";
    const description = "Bu makale sayı sistemi kavramını basit ve uygulamalı örneklerle açıklar.";
    const keywords = ["sayı sistemi", "konumsal sayı sistemi", "konumsal olmayan sayı sistemi", "Romen rakamları", "sayı sistemleri farkı"];

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_001_PVNSS_METALANG, lang: "tr", pageType: "article" });
}

export default function MakaleKonumsalNokonumsal() {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Konumsal (pozisyonel) ve konumsal olmayan sayı sistemleri</h1>
                        <p>
                            Bu makale sayı sistemleri kavramını basit ve uygulamalı örneklerle açıklar. Odak noktamız iki ana kategori olacaktır:
                            <strong> konumsal</strong> (rakamın değeri bulunduğu <em>konuma</em> bağlı) ve <strong>konumsal olmayan</strong> (rakamın değeri
                            sabit) sistemler.
                        </p>
                    </header>

                    <section>
                        <h2>Sayı sistemi nedir?</h2>
                        <p>
                            Sayı sistemi, <em>sayıları işaretleme ve yazma kuralları</em> bütünüdür. Her sistemin bir <strong>tabanı</strong> ve bir
                            <strong> rakamlar kümesi</strong> vardır. Örneğin ondalık sistemde taban 10’dur ve rakamlar kümesi 0–9’dan oluşur.
                        </p>
                    </section>

                    <section>
                        <h2>Konumsal ve konumsal olmayan farkı</h2>
                        <p>
                            <strong>Konumsal</strong> sistemlerde bir rakamın değeri bulunduğu <em>konuma</em> bağlıdır. Örneğin 507 sayısında 5 yüzlükleri, 0
                            onlar basamağını, 7 birlikleri ifade eder. <strong>Konumsal olmayan</strong> sistemlerde ise rakam, nerede durduğundan bağımsız
                            olarak aynı değeri taşır; sayının değeri rakamların <em>toplamı</em> veya <em>kural temelli kombinasyonu</em> ile elde edilir.
                        </p>
                    </section>

                    <section>
                        <h2>Konumsal olmayan sistemler</h2>
                        <ul>
                            <li>
                                <strong>Çetele (tally) yazımı:</strong> <code>||||</code> = 4, <code>|||| |||</code> = 7. Her çizgi daima 1’e eşittir; konumun
                                önemi yoktur.
                            </li>
                            <li>
                                <strong>Romen rakamları:</strong> <code>I=1</code>, <code>V=5</code>, <code>X=10</code>, <code>L=50</code>, <code>C=100</code>,
                                <code> D=500</code>, <code>M=1000</code>. Sayılar çoğunlukla toplama (bazen <em>subtraktif</em> çıkarma) kurallarıyla
                                oluşturulur. Örneğin <code>VIII = 5+3 = 8</code>, <code>IX = 10−1 = 9</code>, <code>XL = 50−10 = 40</code>.
                            </li>
                            <li>
                                <strong>Eski Mısır rakamları:</strong> Birlik, onlar, yüzler simgelerinin tekrar ederek <em>toplamsal</em> biçimde
                                birleştirilmesiyle sayı yazılır (konum anlamlı değildir).
                            </li>
                        </ul>
                        <p>
                            Konumsal olmayan sistemlerde <em>büyük sayıların yazımı</em> çok sayıda işaret gerektirir ve <em>aritmetik işlemler</em> (özellikle
                            çarpma/bölme) zorlaşır.
                        </p>
                    </section>

                    <section>
                        <h2>Konumsal sistemler</h2>
                        <p>
                            Konumsal bir sistemde sayı şu <em>polinom açılımı</em> ile yorumlanır:
                        </p>
                        <pre>
                            <code>{`(a_n a_{n-1} ... a_1 a_0)_b = a_n*b^n + a_{n-1}*b^{n-1} + ... + a_1*b + a_0\nŞart: 0 \u2264 a_i < b`}</code>
                        </pre>
                        <p>
                            Burada <strong>b</strong> sistemin tabanıdır; örneğin ondalıkta <strong>b=10</strong>, ikilikte <strong>b=2</strong>, onaltılıkta{" "}
                            <strong>b=16</strong>. <strong>0</strong> rakamı konumsal sistemlerde kritiktir: yer tutucu ve “yok” değeri gösteren bir sembol
                            olarak kullanılır.
                        </p>

                        <strong>Yaygın konumsal sistemler</strong>
                        <ul>
                            <li>
                                <strong>Ondalık (b=10):</strong> günlük yaşam, finans ve ölçümlerde standart.
                            </li>
                            <li>
                                <strong>İkilik (b=2):</strong> bilgisayarların mantığı (0/1) ve sayısal elektroniğin temeli.
                            </li>
                            <li>
                                <strong>Sekizlik (b=8) ve onaltılık (b=16):</strong> bit gruplarını kompakt göstermek için programlama sistemlerinde elverişli.
                            </li>
                            <li>
                                <strong>Altılık (b=6), beşlik (b=5), yirmilik (b=20), altmışlık (b=60):</strong> çeşitli kültür ve tarihsel uygulamalarda
                                görülür (örneğin zaman ve açılarda 60’lık).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Neden konumsal sistemler avantajlı?</h2>
                        <ol>
                            <li>
                                <strong>Kompakt yazım:</strong> Aynı değeri daha az işaret (rakam) ile ifade edebiliriz.
                            </li>
                            <li>
                                <strong>Algoritmik aritmetik:</strong> Toplama, çıkarma, çarpma, bölme için kararlı ve tekrarlanabilir algoritmalar vardır.
                            </li>
                            <li>
                                <strong>Ölçeklenebilirlik:</strong> Taban değişse bile genel ilkeler (basamak değeri, tabanın kuvvetleri) korunur.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>Konumsal olmayan sistemlerde aritmetik neden zor?</h2>
                        <ul>
                            <li>
                                <strong>Toplamsal yapı:</strong> Rakamlar üst üste eklenir; çarpma, yinelemeli toplamaya dönüşür ve yazım karmaşıklaşır.
                            </li>
                            <li>
                                <strong>Subtraktif kurallar:</strong> Romen rakamlarındaki <code>IV</code>, <code>IX</code> gibi durumlar algoritmaları
                                basitleştirmez.
                            </li>
                            <li>
                                <strong>0 rakamının olmaması ya da seyrek kullanımı:</strong> Yer tutucu eksikliği sistemi genelleştirmeyi güçleştirir.
                            </li>
                        </ul>
                        <strong>Uygulamalı karşılaştırma</strong>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sınıf</th>
                                    <th>Konumsal</th>
                                    <th>Konumsal olmayan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rakam değeri</td>
                                    <td>
                                        Konuma bağlı (<em>basamak değeri</em>)
                                    </td>
                                    <td>Sabit, konumdan bağımsız</td>
                                </tr>
                                <tr>
                                    <td>0 rakamı</td>
                                    <td>Merkezî role sahiptir</td>
                                    <td>Genellikle yoktur ya da az kullanılır</td>
                                </tr>
                                <tr>
                                    <td>Aritmetik</td>
                                    <td>Algoritmik, daha sade</td>
                                    <td>Karmaşık, kural gruplarına dayanır</td>
                                </tr>
                                <tr>
                                    <td>Kompaktlık</td>
                                    <td>Yüksek</td>
                                    <td>Düşük</td>
                                </tr>
                                <tr>
                                    <td>Kullanım</td>
                                    <td>Günlük, bilimsel, bilişim</td>
                                    <td>Tarihî, törensel, özel gösterimler</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Bazı örneklerle görelim:</p>
                        <ul>
                            <li>
                                <strong>Romen → ondalık:</strong> MCMLXXXIV = 1000 + (1000−100) + 50 + 10 + 10 + 10 + (5−1) = 1984.
                            </li>
                            <li>
                                <strong>İkilik → ondalık:</strong> 1100101<sub>2</sub> = 64 + 32 + 4 + 1 = 101<sub>10</sub>.
                            </li>
                            <li>
                                <strong>Ondalık → onaltılık:</strong> 255<sub>10</sub> → (FF)<sub>16</sub>.
                            </li>
                            <li>
                                <strong>Ondalık → ikilik (kesir):</strong> 0.1<sub>10</sub> ≈ 0.0001100110011…<sub>2</sub> (devirli).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Ek: Sık yapılan hatalar</h2>
                        <ul>
                            <li>
                                <strong>Tabandan büyük rakam kullanımı:</strong> örneğin ikilikte <b>2</b> veya <b>3</b> olamaz.
                            </li>
                            <li>
                                <strong>Kesir dönüşümünü erken kesmek:</strong> hatayı kontrol etmek için adım sayısı ve hassasiyet önceden belirlenmelidir.
                            </li>
                            <li>
                                <strong>Romen rakamlarında subtraksiyonu yanlış uygulamak:</strong> <b>IL</b> (49) standartlara göre doğru değildir; doğrusu
                                <b> XLIX</b>’tir.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>
                            Konumsal olmayan sistemler tarihî ve kültürel açıdan ilginç olsa da, günümüz bilim ve teknolojisinde <strong>konumsal</strong>
                            sistemler pratik açıdan üstündür. Güçlü yanları: basamak değeri, 0 rakamı ve algoritmik aritmetik. Dönüşüm yöntemlerini bilmek ise
                            programlama ve mühendislikte günlük işleri kolaylaştırır.
                        </p>
                    </section>

                    <footer>
                        <p>Yazar: Najmiddin Nazirov</p>
                    </footer>
                </Container>
            </article>
        </main>
    );
}
