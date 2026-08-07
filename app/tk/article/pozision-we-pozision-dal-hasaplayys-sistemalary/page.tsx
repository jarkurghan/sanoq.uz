import Container from "@/components/common/container";
import { ARTICLES_001_PVNSS_METALANG } from "@/lib/constants/article/pozitsion-va-nopozitsion-sanoq-sistemalari";
import { SEO } from "@/lib/utils/generate-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    const url = ARTICLES_001_PVNSS_METALANG["tk"] as string;
    const title = "Pozision we pozision däl hasaplaýyş sistemalary";
    const description = "Bu makala hasaplaýyş sistemalarynyň düşünjesini ýönekeý we amaly mysallar bilen düşündirýär.";
    const keywords = [
        "hasaplaýyş sistemasy",
        "pozision hasaplaýyş sistemasy",
        "pozision däl hasaplaýyş sistemasy",
        "Rim sanlary",
        "hasaplaýyş sistemalarynyň tapawudy",
    ];

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_001_PVNSS_METALANG, lang: "tk", pageType: "article" });
}

export default function MakalaPozisionDalHasaplayys() {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Pozision (orun ähmiýetli) we pozision däl (orun ähmiýetsiz) hasaplaýyş sistemalary</h1>
                        <p>
                            Bu makala hasaplaýyş sistemalary düşünjesini ýönekeý we amaly mysallar bilen düşündirýär. Esasy üns iki uly kategoriýa gönükdirilýär:
                            <strong> pozision</strong> (sifriň bahasy onuň <em>orunyna</em> bagly) we <strong>pozision däl</strong> (bahasy hemişe birmeňzeş)
                            hasaplaýyş sistemalaryna.
                        </p>
                    </header>

                    <section>
                        <h2>Hasaplaýyş sistemasy näme?</h2>
                        <p>
                            Hasaplaýyş sistemasy — <em>sanlary bellemegiň we ýazmagyň düzgünleriniň</em> toplumydyr. Islendik hasaplaýyş sistemasynda <strong>esas</strong> we
                            <strong> sifrler toplumy</strong> bolýar. Mysal üçin, onluk hasaplaýyş sistemasynda esas 10 bolup, sifrler toplumy 0–9-dan ybarat.
                        </p>
                    </section>

                    <section>
                        <h2>Pozision bilen pozision däl arasyndaky tapawut</h2>
                        <p>
                            <strong>Pozision</strong> hasaplaýyş sistemalarynda bir sifriň bahasy onuň durýan <em>orunyna</em> baglydyr. Mysal üçin, 507 sanynyň içinde 5 —
                            ýüzlükleri, 0 — onlar basamagyny, 7 — birlikleri bildirýär. <strong>Pozision däl</strong> hasaplaýyş sistemalarynda bolsa sifriň bahasy
                            durýan ýerine garamazdan üýtgemeýär; sanyň bahasy sifrleriň <em>jemi</em> ýa-da <em>düzgün esasynda kombinasiýasy</em> arkaly
                            tapylýar.
                        </p>
                    </section>

                    <section>
                        <h2>Pozision däl hasaplaýyş sistemalarynyň mysallary</h2>
                        <ul>
                            <li>
                                <strong>Çetele (tally) ýazgysy:</strong> <code>||||</code> = 4, <code>|||| |||</code> = 7. Her bir çyzyk hemişe 1-e deň; orun
                                möhüm däl.
                            </li>
                            <li>
                                <strong>Rim sanlary:</strong> <code>I=1</code>, <code>V=5</code>, <code>X=10</code>, <code>L=50</code>, <code>C=100</code>,
                                <code> D=500</code>, <code>M=1000</code>. Sanlar köplenç goşma (käte <em>subtraktiw</em> aýyrmak) düzgünleri bilen düzülýär.
                                Mysal: <code>VIII = 5+3 = 8</code>, <code>IX = 10−1 = 9</code>, <code>XL = 50−10 = 40</code>.
                            </li>
                            <li>
                                <strong>Gadymy Müsür sanlary:</strong> birlik, onluk, ýüzlük nyşanlarynyň gaýtalanyp <em>jemlenmegi</em> bilen sanyň ýazylmagy
                                (orun möhüm däl).
                            </li>
                        </ul>
                        <p>
                            Pozision däl hasaplaýyş sistemalarynda <em>uly sanlary ýazmak</em> köp nyşan talap edýär we <em>arifmetik amallar</em> (esasan hem köpeltmek/bölmek)
                            kynlaşýar.
                        </p>
                    </section>

                    <section>
                        <h2>Pozision hasaplaýyş sistemalary</h2>
                        <p>
                            Pozision hasaplaýyş sistemasynda san aşakdaky <em>polinom görnüşinde</em> düşündirilýär:
                        </p>
                        <pre>
                            <code>{`(a_n a_{n-1} ... a_1 a_0)_b = a_n*b^n + a_{n-1}*b^{n-1} + ... + a_1*b + a_0\nŞert: 0 \u2264 a_i < b`}</code>
                        </pre>
                        <p>
                            Bu ýerde <strong>b</strong> — hasaplaýyş sistemasynyň esasy; onlukda <strong>b=10</strong>, ikilikde <strong>b=2</strong>, onaltylykda
                            <strong> b=16</strong>. <strong>0</strong> sifri pozision hasaplaýyş sistemalarynda möhüm: ýer tutujy (placeholder) we “ýok” bahasyny görkezýän
                            nyşan hökmünde ulanylýar.
                        </p>

                        <strong>Meşhur pozision hasaplaýyş sistemalary</strong>
                        <ul>
                            <li>
                                <strong>Onluk (b=10):</strong> gündelik durmuşda, maliýede, ölçeglerde standart.
                            </li>
                            <li>
                                <strong>Ikilik (b=2):</strong> kompýuter logikasy (0/1) we sanly elektronika esasy.
                            </li>
                            <li>
                                <strong>Sekizlik (b=8) we onaltylyk (b=16):</strong> bit toparlaryny kompakt görkezmek üçin programmirlemede amatly.
                            </li>
                            <li>
                                <strong>Bäşlik (b=5), altylyk (b=6), ýigrimilik (b=20), altmyşlyk (b=60):</strong> dürli medeniýetlerde/taryhy amalyýetlerde gabat
                                gelýär (meselem, wagt we burçlarda 60-lyk).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Näme üçin pozision hasaplaýyş sistemalary amatly?</h2>
                        <ol>
                            <li>
                                <strong>Kompakt ýazuw:</strong> Birmeňzeş bahany has az sifr bilen görkezmek bolýar.
                            </li>
                            <li>
                                <strong>Algoritmiki arifmetika:</strong> Goşmak, aýyrmak, köpeltmek, bölmek üçin yzygiderli, gaýtalanýan algoritmler bar.
                            </li>
                            <li>
                                <strong>Umumy düzgünleriň saklanyşy:</strong> Esas üýtgän halda hem umumy ýörelgeler (basamak bahasy, derejeler) saklanyp galýar.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>Pozision däl hasaplaýyş sistemalarynda arifmetika näme üçin kyn?</h2>
                        <ul>
                            <li>
                                <strong>Jemleme esasynda gurluş:</strong> Sifrler jemlenýär; köpeltmek — gaýtalanyp goşmaga öwrülýär, ýazuw çylşyrymlaşýar.
                            </li>
                            <li>
                                <strong>Subtraktiw düzgünler:</strong> Rim sanlarynda <code>IV</code>, <code>IX</code> ýaly ýagdaýlar algoritmleri
                                ýönekeýleşdirmeýär.
                            </li>
                            <li>
                                <strong>0 sifriň ýoklugy ýa-da seýrek ulanylyşy:</strong> Ýer tutujynyň bolmazlygy hasaplaýyş sistemasyny umumylaşdyrmaga päsgel berýär.
                            </li>
                        </ul>
                        <strong>Amaly deňeşdiriş</strong>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kategoriýa</th>
                                    <th>Pozision</th>
                                    <th>Pozision däl</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sifriň bahasy</td>
                                    <td>
                                        Oruna bagly (<em>basamak bahasy</em>)
                                    </td>
                                    <td>Hemişe birmeňzeş, orunyndan garaşsyz</td>
                                </tr>
                                <tr>
                                    <td>0 sifri</td>
                                    <td>Merkezi orunda</td>
                                    <td>Adatça ýok ýa-da seýrek ulanylýar</td>
                                </tr>
                                <tr>
                                    <td>Arifmetika</td>
                                    <td>Algoritmiki, ýönekeýräk</td>
                                    <td>Çylşyrymly, düzgün toparlaryna daýanýar</td>
                                </tr>
                                <tr>
                                    <td>Kompaktlyk</td>
                                    <td>Beýik</td>
                                    <td>Pes</td>
                                </tr>
                                <tr>
                                    <td>Ulanylyşy</td>
                                    <td>Gündelik, ylmy, IT/kompýuter</td>
                                    <td>Taryhy, däp-dessur, ýörite bellikler</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Gel, käbir mysallara seredeliň:</p>
                        <ul>
                            <li>
                                <strong>Rim → onluk:</strong> MCMLXXXIV = 1000 + (1000−100) + 50 + 10 + 10 + 10 + (5−1) = 1984.
                            </li>
                            <li>
                                <strong>Ikilik → onluk:</strong> 1100101<sub>2</sub> = 64 + 32 + 4 + 1 = 101<sub>10</sub>.
                            </li>
                            <li>
                                <strong>Onluk → onaltylyk:</strong> 255<sub>10</sub> → (FF)<sub>16</sub>.
                            </li>
                            <li>
                                <strong>Onluk → ikilik (kesir):</strong> 0.1<sub>10</sub> ≈ 0.0001100110011…<sub>2</sub> (gaýtalanýan).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Goşmaça: ýygy duş gelýän ýalňyşlyklar</h2>
                        <ul>
                            <li>
                                <strong>Esasdan uly sifr ulanmak:</strong> mysal, ikilikde <b>2</b> ýa-da <b>3</b> bolup bilmeýär.
                            </li>
                            <li>
                                <strong>Kesir geçirişini irden togtatmak:</strong> säwlikden gaça durmak üçin ädim sany we takyklyk öňünden kesgitlenmeli.
                            </li>
                            <li>
                                <strong>Rim sanlarynda subtraksiýany ýalňyş ulanmak:</strong> <b>IL</b> (49) standart boýunça dogry däl; dogry ýazuw
                                <b> XLIX</b>.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>
                            Pozision däl hasaplaýyş sistemalarynyň taryhy-medeni bahasy uly bolsa-da, häzirki zaman ylymynda we tehnologiýasynda <strong>pozision</strong>
                            hasaplaýyş sistemalary amaly taýdan has üstündür. Esasy güýç — basamak bahasy, 0 sifri we algoritmiki arifmetika. Geçiriş usullaryny bilmek bolsa
                            programmirlemede we inženerçilikde gündelik işi aňsatlaşdyrýar.
                        </p>
                    </section>

                    <footer>
                        <p>Awtor: Najmiddin Nazirov</p>
                    </footer>
                </Container>
            </article>
        </main>
    );
}
