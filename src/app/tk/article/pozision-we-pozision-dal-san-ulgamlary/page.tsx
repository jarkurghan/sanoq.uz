import Container from "@/src/components/common/container";
import { ARTICLES_001_PVNSS_METALANG } from "@/src/lib/constants/article/pozitsion-va-nopozitsion-sanoq-sistemalari";
import { SEO } from "@/src/lib/utils/generate-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    const url = ARTICLES_001_PVNSS_METALANG["tk"] as string;
    const title = "Pozision we pozision däl san ulgamlary";
    const description = "Bu makala san ulgamlarynyň düşünjesini ýönekeý we amaly mysallar bilen düşündirýär.";
    const keywords = ["san ulgamy", "pozision san ulgamy", "pozision däl san ulgamy", "Rim sanlary", "san ulgamlarynyň tapawudy"];

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_001_PVNSS_METALANG, lang: "tk", pageType: "article" });
}

export default function MakalaPozisionDalPozisionDal() {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Pozision (orun ähmiýetli) we pozision däl (orun ähmiýetsiz) san ulgamlary</h1>
                        <p>
                            Bu makala san ulgamlary düşünjesini ýönekeý we amaly mysallar bilen düşündirýär. Esasy üns iki uly kategoriýa gönükdirilýär:
                            <strong> pozision</strong> (rakam/nyşanyň bahasy onuň basamakdaky <em>orunyna</em> bagly) we <strong>pozision däl</strong> (bahasy
                            hemişe birmeňzeş) ulgamlara.
                        </p>
                    </header>

                    <section>
                        <h2>San ulgamy näme?</h2>
                        <p>
                            San ulgamy — <em>sanlary belläp we ýazmaga degişli düzgünleriň</em> toplumydyr. Islendik ulgamda <strong>esas</strong> (taban) we
                            <strong> san belgileri toplumy</strong> bolýar. Mysal üçin, ondal﻿yk ulgamda esas 10 bolup, san belgileri toplumy 0–9-dan ybarat.
                        </p>
                    </section>

                    <section>
                        <h2>Pozision bilen pozision däl arasyndaky tapawut</h2>
                        <p>
                            <strong>Pozision</strong> ulgamlarda bir nyşanyň (rakamyň) bahasy onuň durýan <em>orunyna</em> baglydyr. Mysal üçin, 507 sanynyň
                            içinde 5 — ýüzlükleri, 0 — onlar basamagyny, 7 — birlikleri bildirýär. <strong>Pozision däl</strong> ulgamlarda bolsa nyşanyň bahasy
                            durýan ýerine garamazdan üýtgemeýär; sanyň bahasy nyşanlaryň <em>jemi</em> ýa-da <em>düzgün esasynda kombinasiýasy</em> arkaly
                            tapylýar.
                        </p>
                    </section>

                    <section>
                        <h2>Pozision däl ulgamlaryň mysallary</h2>
                        <ul>
                            <li>
                                <strong>Çetele (tally) ýazgysy:</strong> <code>||||</code> = 4, <code>|||| |||</code> = 7. Her bir çyzyk hemişe 1-e deň; orun
                                möhüm däl.
                            </li>
                            <li>
                                <strong>Rim sanlary:</strong> <code>I=1</code>, <code>V=5</code>, <code>X=10</code>, <code>L=50</code>, <code>C=100</code>,
                                <code> D=500</code>, <code>M=1000</code>. Sanlar köplenç goşma (käte <em>subtraktiw</em> çykarmak) düzgünleri bilen düzülýär.
                                Mysal: <code>VIII = 5+3 = 8</code>, <code>IX = 10−1 = 9</code>, <code>XL = 50−10 = 40</code>.
                            </li>
                            <li>
                                <strong>Gadymy Müsür sanlary:</strong> birlik, onluk, ýüzlük nyşanlarynyň gaýtalanyp <em>jemlenmegi</em> bilen sanyň ýazylmagy
                                (orun möhüm däl).
                            </li>
                        </ul>
                        <p>
                            Pozision däl ulgamlarda <em>uly sanlary ýazmak</em> köp nyşan talap edýär we <em>arifmetiki amallar</em> (esasan hem çarpma/bölme)
                            kynlaşýar.
                        </p>
                    </section>

                    <section>
                        <h2>Pozision ulgamlary</h2>
                        <p>
                            Pozision ulgamda san aşakdaky <em>polinom görnüşinde</em> düşündirilýär:
                        </p>
                        <pre>
                            <code>{`(a_n a_{n-1} ... a_1 a_0)_b = a_n*b^n + a_{n-1}*b^{n-1} + ... + a_1*b + a_0\nŞert: 0 \u2264 a_i < b`}</code>
                        </pre>
                        <p>
                            Bu ýerde <strong>b</strong> — ulgamyň esasy; ondal﻿ykda <strong>b=10</strong>, ikilikde <strong>b=2</strong>, onaltlykda
                            <strong> b=16</strong>. <strong>0</strong> nyşany pozision ulgamlarda möhüm: ýer tutujy (placeholder) we “ýok” bahasyny görkezýän
                            nyşan hökmünde ulanylýar.
                        </p>

                        <strong>Meşhur pozision ulgamlary</strong>
                        <ul>
                            <li>
                                <strong>Ondalyk (b=10):</strong> gündelik durmuşda, maliýede, ölçeglerde standart.
                            </li>
                            <li>
                                <strong>Ikilik (b=2):</strong> kompýuter logikasy (0/1) we sanly elektronika esasy.
                            </li>
                            <li>
                                <strong>Sekizlik (b=8) we onaltlyk (b=16):</strong> bit toparlaryny kompakt görkezmek üçin programmalaşdyrmada amatly.
                            </li>
                            <li>
                                <strong>Bäşlik (b=5), altylyk (b=6), ýirmilik (b=20), altmyşlyk (b=60):</strong> dürli medeniýetlerde/taryhy amalyýetlerde gabat
                                gelýär (meselem, wagt we burçlarda 60-lyk).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Näme üçin pozision ulgamlary amatly?</h2>
                        <ol>
                            <li>
                                <strong>Kompakt ýazuw:</strong> Birmeňzeş bahany has az nyşan (rakam) bilen görkezmek bolýar.
                            </li>
                            <li>
                                <strong>Algoritmik arifmetika:</strong> Goşma, çykarmak, çarpma, bölmek üçin yzygiderli, gaýtalanýan algoritmler bar.
                            </li>
                            <li>
                                <strong>Umumy düzgünleriň saklanyşy:</strong> Esas üýtgän halam umumy ýörelgeler (basamak bahasy, derejeler) saklanyp galýar.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>Pozision däl ulgamlarda arifmetika näme üçin kyn?</h2>
                        <ul>
                            <li>
                                <strong>Jemleme esasynda gurluş:</strong> Nyşanlar jemlenýär; çarpma — gaýtalanyp goşmaga öwrülýär, ýazuw çylşyrymlaşýar.
                            </li>
                            <li>
                                <strong>Subtraktiw düzgünler:</strong> Rim sanlarynda <code>IV</code>, <code>IX</code> ýaly ýagdaýlar algoritmleri
                                ýönekeýleşdirmeýär.
                            </li>
                            <li>
                                <strong>0 nyşanynyň ýoklugy ýa-da seýrek ulanylyşy:</strong> Ýer tutujynyň bolmazlygy ulgamy umumylaşdyrmaga päsgel berýär.
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
                                    <td>San belgisi bahasy</td>
                                    <td>
                                        Oruna bagly (<em>basamak bahasy</em>)
                                    </td>
                                    <td>Hemişe birmeňzeş, orunyndan garaşsyz</td>
                                </tr>
                                <tr>
                                    <td>0 nyşany</td>
                                    <td>Merkezi orunda</td>
                                    <td>Adatça ýok ýa-da seýrek ulanylýar</td>
                                </tr>
                                <tr>
                                    <td>Aritmetika</td>
                                    <td>Algoritmik, ýönekeýräk</td>
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
                                <strong>Rim → ondal﻿yk:</strong> MCMLXXXIV = 1000 + (1000−100) + 50 + 10 + 10 + 10 + (5−1) = 1984.
                            </li>
                            <li>
                                <strong>Ikilik → ondal﻿yk:</strong> 1100101<sub>2</sub> = 64 + 32 + 4 + 1 = 101<sub>10</sub>.
                            </li>
                            <li>
                                <strong>Ondal﻿yk → onaltlyk:</strong> 255<sub>10</sub> → (FF)<sub>16</sub>.
                            </li>
                            <li>
                                <strong>Ondal﻿yk → ikilik (kesir):</strong> 0.1<sub>10</sub> ≈ 0.0001100110011…<sub>2</sub> (gaýtalanýan).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Goşmaça: ýygy duş gelýän ýalňyşlyklar</h2>
                        <ul>
                            <li>
                                <strong>Esasdan uly san belgisi ulanmak:</strong> mysal, ikilikde <b>2</b> ýa-da <b>3</b> bolup bilmeýär.
                            </li>
                            <li>
                                <strong>Kesir öwürmesini irden togtatmak:</strong> säwlikden gaça durmak üçin ädim sany we takyklyk öňünden kesgitlenmeli.
                            </li>
                            <li>
                                <strong>Rim sanlarynda subtraksiýany ýalňyş ulanmak:</strong> <b>IL</b> (49) standart boýunça dogry däl; dogry ýazuw
                                <b> XLIX</b> boldy.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>
                            Pozision däl ulgamlaryň taryhy-meden﻿i gymmaty uly bolsa-da, häzirki zaman ylymynda we tehnologiýasynda <strong>pozision</strong>
                            ulgamlary amaly taýdan has üstündür. Esasy güýç — basamak bahasy, 0 nyşany we algoritmik arifmetika. Öwürme usullaryny bilmek bolsa
                            programmalaşdyrmada we inženerçilikde gündelik işi aňsatlaşdyrýar.
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
