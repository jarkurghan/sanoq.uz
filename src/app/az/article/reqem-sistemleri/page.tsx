import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/src/components/common/container";
import { ARTICLES_002_SS_METALANG } from "@/src/lib/constants/article/sanoq-sistemasi";
import { SEO } from "@/src/lib/utils/generate-metadata";

export function generateMetadata(): Metadata {
    const lang = "az";
    const url = ARTICLES_002_SS_METALANG[lang] as string;

    const title = "Rəqəm sistemləri — ümumi baxış, tarix və növlər";
    const description =
        "Rəqəm sistemləri haqqında ətraflı məqalə: onların tarixi, əsas növləri və rəqəmlərin mədəniyyətdə, riyaziyyatda və kompüter texnologiyalarında ifadəsi.";
    const keywords = [
        "rəqəm sistemi",
        "say sistemi",
        "hind-ərəb rəqəmləri",
        "rəqəmlərin tarixi",
        "onluq sistem",
        "roman rəqəmləri",
        "maya rəqəmləri",
        "riyaziyyat",
        "rəqəmlərin yazılışı",
    ].join(", ");

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_002_SS_METALANG, lang, pageType: "article" });
}

const NumeralSystem = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Say sisteması</h1>
                    </header>
                    <section>
                        <h2 className="hidden">Say sisteması</h2>
                        <p>
                            Say sisteması — ədədləri yazılı formada ifadə etmə üsulu, yəni müəyyən bir ədədlər çoxluğunu rəqəmlər və ya simvollar vasitəsilə
                            ardıcıl və nizamlı şəkildə göstərən riyazi yazı sistemidir.
                        </p>
                        <p>
                            Eyni simvollar ardıcıllığı müxtəlif say sistemlərində müxtəlif mənalar daşıya bilər. Məsələn,{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1 py-0.5 rounded">"11"</code> onluq say sistemində (bu gün dünyada ən
                            geniş yayılmışı) on biri bildirir, ikilik say sistemində (müasir kompüterlərdə istifadə olunur) üçü göstərir, birdənlik say
                            sistemində isə (say-çubuq üsulunda) ikiyə uyğundur.
                        </p>
                        <p>
                            Simvolun ifadə etdiyi ədədə onun <strong>qiyməti</strong> deyilir. Bütün say sistemləri eyni ədədlər çoxluğunu göstərə bilmir;
                            məsələn, Roma, Yunan və Misir rəqəmlərində sıfır üçün xüsusi işarə yoxdur.
                        </p>
                        <p>İdeal bir say sistemi aşağıdakı xüsusiyyətlərə malik olmalıdır:</p>
                        <ul>
                            <li>Faydalı ədədlər çoxluğunu ifadə etmək (məsələn, bütün tam ədədlər və ya rasional ədədlər)</li>
                            <li>Hər ədəd üçün unikal və aydın ifadə vermək (və ya heç olmasa standart yazılış)</li>
                            <li>Ədədlərin cəbr və arifmetika quruluşunu əks etdirmək</li>
                        </ul>
                        <p>
                            Məsələn, adi onluq say sistemində sıfırdan fərqli hər bir natural ədəd, əvvəli sıfır olmayan rəqəmlə başlayan sonlu rəqəmlər
                            ardıcıllığı şəklində unikal olaraq ifadə olunur.
                        </p>
                        <p>
                            Bəzən say sistemlərinə <em>ədəd sistemləri</em> də deyilir. Amma bu ad dəqiq deyil, çünki o, başqa riyazi sistemləri də nəzərdə tuta
                            bilər: məsələn, həqiqi ədədlər sistemi, kompleks ədədlər sistemi, müxtəlif hiperkompleks sistemlər, p-adik ədədlər sistemi və s.
                            Lakin bu məqalə belə sistemlər haqqında deyil.
                        </p>
                    </section>

                    <section>
                        <h2>Tarix</h2>
                        <p>
                            Alimlərin fikrincə, ilk say sistemləri sivilizasiyalara görə müxtəlif olmuşdur: Babililər 60-lıq sistemi istifadə etmiş, misirlilər
                            heroqlif rəqəmlərini yaratmış, çinlilər çubuq rəqəmlərindən istifadə etmişdir. Mayalar isə müstəqil olaraq 20-lik (vigesimal)
                            sistemi yaratmış və sıfır üçün xüsusi bir işarə daxil etmişlər.
                        </p>
                        <Image
                            src="/images/historial_numeric_system.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 rounded-lg p-4"
                            alt="maya"
                            width={360}
                            height={120}
                        />
                        <p>
                            Hindistanlı riyaziyyatçılar, məsələn, VII əsrdə yaşamış <strong>Brahmagupta</strong>, arifmetik qaydaları sistemləşdirməkdə və sıfır
                            anlayışını formalaşdırmaqda mühüm rol oynamışdır. Daha sonra İslam aləmindəki alimlər, xüsusən <strong>Əl-Xarəzmi</strong>, bu
                            ideyaları inkişaf etdirmişdir. Say sistemləri inkişaf etdikcə, mövqe yazısının səmərəliliyi və sıfırın əlavə olunması müasir
                            ədədlərin göstərilməsinə təsir etmiş, dünya ticarəti, elm və texnologiyaya böyük təsir göstərmişdir.
                        </p>
                        <p>
                            İlk həqiqi yazılı mövqeli say sistemi <strong>Hind–ərəb say sistemi</strong> hesab edilir. Bu sistem VII əsrdə Hindistanda
                            formalaşmışdır
                            <sup className="text-gray-400">[1]</sup>, lakin hələ müasir formasında deyildi, çünki sıfır rəqəminin istifadəsi geniş yayılmamışdı.
                            Sıfır əvəzinə bəzən nöqtə qoyulurdu, yaxud boş yer saxlanırdı. Sıfırın ilk geniş qəbul edilmiş istifadəsi
                            <strong>876-cı ildə</strong> qeydə alınmışdır
                            <sup className="text-gray-400">[2]</sup>. Əsl rəqəmlər indiki rəqəmlərə çox oxşayırdı, hətta istifadə olunan işarələr də demək olar
                            ki, eyni idi
                            <sup className="text-gray-400">[1]</sup>.
                        </p>
                        <p>
                            XIII əsrə qədər <strong>qərbi ərəb rəqəmləri</strong> Avropa riyaziyyat dairələrində qəbul edilməyə başlamışdı. Məsələn,{" "}
                            <strong>Fibonacci</strong> onları özünün
                            <em>Liber Abaci</em> əsərində istifadə etmişdir. Əvvəlcə müqavimətlə qarşılaşsa da, Hind–ərəb rəqəmləri hesablamadakı rahatlığı
                            səbəbindən, xüsusilə bank və ticarətdə, Avropada geniş yayılmışdır.
                        </p>
                        <p>
                            XV əsrdə çap dəzgahının ixtirası bu rəqəmlərin istifadəsini standartlaşdırdı, çünki çap olunmuş riyazi mətnlər Roma rəqəmləri
                            əvəzinə bu sistemi seçdi. XV əsrin sonlarına doğru gündəlik istifadəyə daxil oldu
                            <sup className="text-gray-400">[3]</sup>. XX əsrin sonuna qədər isə dünyada kompütersiz bütün hesablamalar ərəb rəqəmləri ilə
                            aparılmağa başlandı və yerli say sistemləri demək olar ki, sıradan çıxdı.
                        </p>
                        <p>
                            XVII əsrdə bu sistem elmi əsərlərdə üstünlük təşkil edərək,
                            <strong>İsaak Nyuton</strong> və <strong>Rene Dekart</strong> kimi alimlərin riyazi nailiyyətlərinə təsir göstərmişdir. XIX–XX
                            əsrlərdə ərəb rəqəmlərinin geniş yayılması qlobal maliyyə, mühəndislik və texnologiyanın inkişafını təmin etmiş, müasir kompüter və
                            rəqəmsal məlumatların göstərilməsinin əsasını qoymuşdur.
                        </p>
                    </section>

                    <section>
                        <h2>Rəqəmlərdən istifadə edən digər tarixi say sistemləri</h2>
                        <Image
                            src="/images/maya.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 p-4 border rounded-lg"
                            alt="maya"
                            width={160}
                            height={120}
                        />
                        <p>
                            <strong>Maya rəqəmlərinin</strong> dəqiq yaşı məlum deyil, lakin onların Hind–Ərəb sistemindən daha qədim olması mümkündür. Sistem{" "}
                            <em>vigesimal</em> (20-lik) idi və iyirmi rəqəmdən ibarət idi. Mayyalar sıfırı göstərmək üçün ilbiz qabığı simvolundan istifadə
                            edirdilər. Rəqəmlər şaquli yazılır, birliklər yuxarıdan aşağıya ən altda yerləşirdi. Mayyaların müasir onluq vergülə bənzər işarəsi
                            olmadığından, sistem kəsrləri ifadə edə bilmirdi.
                        </p>
                        <p>
                            <strong>Tay rəqəmləri sistemi</strong>, Hind–Ərəb sisteminə bənzəyir, yalnız istifadə olunan simvollar fərqlidir. Bu rəqəmlərin
                            istifadəsi Taylandda əvvəlki qədər geniş deyil, lakin indi də ərəb rəqəmləri ilə yanaşı işlədilir.
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
                            <strong>Çubuq rəqəmləri</strong>, Çin və Yaponiya riyaziyyatçıları tərəfindən istifadə edilən yazılı formalar idi. Bu, onluq mövqeli
                            sistem idi və onluq hesablamalarda istifadə olunurdu. Çubuqlar hesablama lövhəsinə qoyulur, irəli və ya geri sürüşdürülərək onluq
                            mərtəbə dəyişdirilirdi.
                        </p>
                        <p>
                            Eramızın III–V əsrlərinə aid <em>Sūnzĭ Suànjīng</em> adlı riyazi əsər bu sistem barədə ətraflı göstərişlər təqdim edir. Onun
                            eramızdan əvvəl IV əsrdən istifadə edildiyi güman edilir.
                            <sup className="text-gray-400">[5]</sup> Əvvəlcə sıfır bir rəqəm yox, boş mövqe kimi qəbul olunmuşdu.
                            <sup className="text-gray-400">[6]</sup> Sonrakı mənbələrdə sıfır və mənfi rəqəmləri ifadə etmək üçün qaydalar tətbiq olunmuşdur.
                        </p>
                        <p>
                            Sıfır üçün dairəvi işarənin <code className="px-1 py-0.5 rounded dark:bg-background">〇</code>
                            ilk istifadəsi 1247-ci ildə yazılmış <em>Doqquz bölmədən ibarət riyazi risalə</em>də təsdiqlənmişdir.
                            <sup className="text-gray-400">[7]</sup> Bu işarənin mənşəyi məlum deyil; bəlkə də kvadrat işarənin dəyişdirilməsi nəticəsində
                            yaranmışdır
                            <sup className="text-gray-400">[8]</sup>. <strong>Suzhou rəqəmləri</strong> isə çubuq rəqəmlərindən törəmişdir və bu gün də bəzi
                            ticarət məqsədləri üçün istifadə olunur.
                        </p>
                    </section>

                    <section>
                        <h2>Əsas say sistemləri</h2>
                        <p>
                            Ən çox istifadə olunan say sistemi onluq (decimal) sistemdir. Onun tam ədəd versiyasının inkişafında hind riyaziyyatçıları, xüsusilə{" "}
                            <strong>hind–ərəb rəqəmləri sistemi</strong> mühüm rol oynamışdır.
                            <sup className="text-gray-400">[8]</sup> V əsrdə Kusumapuradan <strong>Aryabhata</strong>
                            mövqe–dəyər yazısını işləyib hazırladı, bir əsr sonra isə <strong>Brahmagupta</strong> sıfır simvolunu təqdim etdi. Sistem tədricən
                            Hindistanla ticarət və hərbi əlaqələr vasitəsilə Ərəbistana yayıldı. Yaxın Şərq riyaziyyatçıları sistemi genişləndirərək 10-un mənfi
                            qüvvətlərini (kəsrləri) əlavə etdilər. Bu, 952–953-cü illərdə suriyalı riyaziyyatçı <strong>Əbu’l-Həsən əl-Uqlidisi</strong>nin
                            traktatında qeyd olunmuşdur.
                            <strong>Sind ibn Əli</strong> isə onluq nöqtə yazısını təqdim etmiş və ərəb rəqəmləri haqqında ilk traktatı yazmışdır. Daha sonra
                            hind–ərəb rəqəmləri tacirlər vasitəsilə Avropaya yayılmış və Avropada “ərəb rəqəmləri” adlandırılmışdır.
                        </p>
                        <p>
                            Ən sadə sistem — birli (unary) sistemdir. Burada hər bir natural ədəd müvafiq sayda simvolla göstərilir. Məsələn, simvol kimi{" "}
                            <code>/</code> seçilərsə, yeddi rəqəmi /////// şəklində yazılır. Çubuq işarələri (tally marks) bu sistemin bu günə qədər işlənən
                            formasıdır. Birli sistem yalnız kiçik ədədlər üçün yararlıdır, lakin nəzəri informatika üçün çox vacibdir. Məsələn, məlumat
                            sıxılmasında istifadə edilən Elias gamma kodlaşdırması unary sistemdən yararlanır.
                        </p>
                        <p>
                            Birli yazı yeni dəyərlər üçün simvollar əlavə edilməklə qısaldıla bilər. Çox vaxt bu dəyərlər 10-un qüvvətləri olur. Məsələn, / — 1,
                            − — 10, + — 100 götürülərsə, 304 rəqəmi +++ ////, 123 isə + − − /// şəklində yazılar. Bu üsul <em>işarə–dəyər yazısı</em> adlanır.
                            Qədim Misir say sistemi bu tipdə olmuş, Roma rəqəmləri isə onun dəyişdirilmiş formasıdır.
                        </p>
                        <p>
                            Daha əlverişli olanı — simvolların təkrarını xüsusi qısaltmalarla ifadə edən sistemlərdir. Məsələn, əlifbanın ilk doqquz hərfini
                            götürsək, A — “bir dəfə”, B — “iki dəfə” mənasını versə, 304 rəqəmi C+ D/ kimi yazıla bilər. Belə sistem Çin rəqəmlərində və Şərqi
                            Asiya ölkələrinin rəqəmlərində istifadə olunur. İngilis dilindəki say sistemi də bu tipdir (“three hundred four”). Bir çox dillərdə
                            isə qarışıq əsaslardan istifadə edilir: məsələn, fransızcada 79 — <em>soixante dix-neuf</em> (60 + 10 + 9).
                        </p>
                        <p>
                            Ən mükəmməl sistem mövqe–dəyər (pozisional) sistemdir. Bu sistemlər əsaslarına görə təsnif olunur. Onluq sistemdə 0–9 arası on rəqəm
                            var və rəqəmin mövqeyi onun hansı 10 qüvvəti ilə vurulacağını göstərir: 304 = 3×100 + 0×10 + 4×1, yəni 3×10² + 0×10¹ + 4×10⁰. Burada
                            sıfır vacib rol oynayır, çünki o, mövqeləri “ötməyə” imkan verir.
                        </p>
                        <p>
                            Aritmetik əməliyyatlar mövqe–dəyər sistemində daha asandır. Toplama sistemlərində hər bir qüvvət üçün ayrıca simvol lazım olsa da,
                            pozisional sistemdə (onluq əsasta) cəmi on simvol kifayətdir.
                            <sup className="text-gray-400">[10]</sup>
                        </p>
                        <p>
                            Hazırda yazıda universal olaraq onluq mövqe–dəyər sistemi istifadə olunur. Həmçinin bəzi hallarda 1000 əsası da tətbiq edilir:
                            məsələn, 1,000,234,567.
                        </p>
                        <p>
                            Kompüterlərdə əsas sistem 2 əsasa malik mövqe–dəyər sistemidir (binary). Burada yalnız iki rəqəm — 0 və 1 istifadə olunur. Binar
                            sistem üçlü qruplara bölünəndə 8 əsası (oktal), dördlü qruplara bölünəndə 16 əsası (hexadecimal) alınır. Çox böyük tam ədədlər üçün
                            isə 2³² və ya 2⁶⁴ əsası tətbiq olunur.
                        </p>
                        <p>
                            Bəzi bioloji sistemlərdə də birli sistem istifadə olunur. Məsələn, quşların oxumasını idarə edən neyron dövrələrində unary
                            kodlaşdırma işlədilir. Quş beynindəki <strong>HVC</strong> mərkəzi həm öyrənmədə, həm də oxumada iştirak edir.
                        </p>
                        <p>
                            Rəqəmlər iki növə bölünür: arifmetik (0–9) və həndəsi (1, 10, 100...). İşarə–dəyər sistemləri həndəsi rəqəmlərdən, mövqe–dəyər
                            sistemləri isə arifmetik rəqəmlərdən istifadə edir. Lakin danışıq dilində hər ikisi də işlədilir.
                        </p>
                        <p>
                            İnformatikada bəzən <em>bijektiv say sistemi</em> adlanan dəyişdirilmiş <em>k</em>-əsaslı sistem tətbiq olunur. Burada rəqəmlər 1,
                            2, …, <em>k</em> formasında olur və sıfır boş sətrlə göstərilir. Bu üsul bütün ədədlər ilə rəqəm sətirləri arasında bir-birinə
                            uyğunluq yaradır. Bijektiv 1-əsaslı sistem birli sisteminə bərabərdir.
                        </p>
                    </section>

                    <section>
                        <h2>Pozisional sistemlərin təfərrüatları</h2>
                        <p>
                            Bir pozisional <em>b</em> əsaslı say sistemi (<em>b</em> — 1-dən böyük natural ədəd, sistemin əsası və ya radiksi) sıfır daxil
                            olmaqla ilk <em>b</em> natural ədədə uyğun <em>b</em> əsas simvoldan (rəqəmdən) istifadə edir. Qalan ədədlər isə simvolların
                            mövqeyinə görə yaradılır: ən sağdakı rəqəm öz dəyərinə bərabərdir, sola keçdikcə dəyəri <em>b</em>-ə vurulur.
                        </p>
                        <p>
                            Məsələn, <strong>onluq</strong> sistemdə (əsas 10) 4327 ədədi belə yazılır: (4×10³) + (3×10²) + (2×10¹) + (7×10⁰), burada 10⁰ = 1.
                        </p>
                        <p>
                            Ümumilikdə, əsas <em>b</em> olduqda ədəd belə yazılır:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] p-1 rounded inline-block">aₙbⁿ + aₙ₋₁bⁿ⁻¹ + aₙ₋₂bⁿ⁻² + ... + a₀b⁰</code>
                            və rəqəmlər <code className="[font-family:'Times_New_Roman',serif] px-1">aₙ aₙ₋₁ ... a₀</code>
                            ardıcıllıqla yazılır. Burada rəqəmlər 0 ilə <em>b – 1</em> arasında dəyişir.
                        </p>
                        <p>
                            Əgər bir neçə əsas müzakirə olunursa, qarışıqlığı aradan qaldırmaq üçün ədədin yanında aşağı indeksdə əsas yazılır:
                            <code className="[font-family:'Times_New_Roman',serif] px-1">
                                ədəd<sub>əsas</sub>
                            </code>
                            . Kontekstdə qeyd olunmayıbsa, indeksiz ədədlər onluq hesab olunur.
                        </p>
                        <p>
                            Nöqtə vasitəsilə rəqəmlər iki qrupa ayrılaraq kəsrlər də yazıla bilər. Məsələn, 2 əsasında{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1">10.11</code> belədir: 1×2¹ + 0×2⁰ + 1×2⁻¹ + 1×2⁻² = 2.75.
                        </p>
                        <p>
                            Ümumilikdə, <em>b</em> əsaslı sistemdə ədədlər bu formada olur:
                            <br />
                            <Image src="/images/formula_n1.png" className="dark:bg-slate-400 rounded-lg" alt="f1" width={373} height={50} />
                        </p>
                        <p>
                            Burada bᵏ və b⁻ᵏ müvafiq rəqəmlərin <strong>çəkilərini</strong> göstərir.
                            <em>k</em> mövqeyi isə həmin çəkilərin <strong>loqarifmi</strong>dir:
                            <Image src="/images/formula_n2.png" className="dark:bg-slate-400 rounded-sm inline" alt="f2" width={141} height={23} />. Ən yüksək
                            mövqe ədədin <strong>böyüklük dərəcəsinə</strong> yaxındır.
                        </p>
                        <p>
                            Birlik sistemində (unary) çəkini göstərmək üçün <em>w</em> işarə lazım olardı. Pozisional sistemdə isə cəmi
                            <Image src="/images/formula_n3.png" className="dark:bg-slate-400 rounded-sm inline" alt="f3" width={131} height={19} />
                            rəqəm kifayətdir (<em>k ≥ 0</em> üçün). Məsələn, 1000 çəkisini göstərmək üçün 4 rəqəm lazımdır, çünki
                            <code className="[font-family:'Times_New_Roman',serif] px-1">
                                log<sub>10</sub> 1000 + 1 = 3 + 1
                            </code>
                            .
                        </p>
                        <p>
                            Əgər ədəd rasionaldırsa, onun yazılışı ya sonlu, ya da dövridir. Bir əsasda sonlanan ədəd başqa əsasda dövr edə bilər (məsələn,
                            0.3₁₀ = 0.010011...₂). İrrasional ədədlər isə bütün əsaslarda sonsuz və təkrarsız yazılır. Məsələn, 2 əsasında π = 3.1415926...₁₀
                            belədir: 11.001001000011111...₂.
                        </p>
                        <p>
                            Dövri kəsrlərdə təkrarlanan rəqəmlərin üstünə xətt (
                            <code>
                                <span className="overline">n</span>
                            </code>
                            ) və ya nöqtə (<code>ṅ</code>) qoymaq qəbul olunmuşdur. Məsələn:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-2">
                                14/11 = 1.272727... = 1.<span className="overline">27</span>
                            </code>
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-1">
                                321.321787878... = 321.321<span className="overline">78</span>
                            </code>
                        </p>
                        <p>
                            Əgər b = p sadə ədəd olarsa, sola doğru sonsuz genişlənən <em>p</em>-əsaslı ədədlər müəyyən edilə bilər; bunlara{" "}
                            <strong>p-adik ədədlər</strong> deyilir.
                        </p>
                        <p>
                            Həm müsbət, həm də mənfi rəqəmlərin istifadə olunduğu <em>b</em> əsaslı variant da mövcuddur; buna{" "}
                            <strong>işarəli-rəqəmli ifadə</strong> deyilir.
                        </p>
                    </section>

                    <section>
                        {/* <h2>Umumlashtirilgan o‘zgaruvchan uzunlikdagi butun sonlar</h2>

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
                        </p> */}

                        <div className="float-right">© wikipedia, 2025</div>
                        <br />
                    </section>

                    <hr />
                    <h2>Ədəbiyyat</h2>
                    <ol>
                        <li>
                            O'Connor, J. J. və Robertson, E. F. <em>Arabic Numerals</em> (Ərəb rəqəmləri). Yanvar 2001.
                        </li>
                        <li>
                            Bill Casselman. "All for Nought" (Hər şey bihudə). <em>Feature Column</em>. AMS. Fevral 2007.
                        </li>
                        <li>
                            Bradley, Jeremy. "How Arabic Numbers Were Invented" (Ərəb rəqəmləri necə icad olundu). <em>theclassroom.com</em>.
                        </li>
                        <li>
                            "Wissanu rejects dumping Thai numerals" (Wissanu tay rəqəmlərinin ləğvini rədd etdi). <em>Bangkok Post</em>. 31 May 2022.
                        </li>
                        <li>O'Connor, John J.; Robertson, Edmund F. (2004). "Chinese numerals" (Çin rəqəmləri). University of St Andrews.</li>
                        <li>
                            Shen Kuo və başqaları (1999). <em>The Nine Chapters on the Mathematical Art</em> (Riyazi İncəsənətin doqquz bölməsi). Oxford
                            University Press.
                        </li>
                        <li>
                            "Mathematics in the Near and Far East" (Yaxın və Uzaq Şərqdə riyaziyyat). <em>grmath4.phpnet.us</em>.
                        </li>
                        <li>
                            Martzloff, Jean-Claude (2007). <em>A History of Chinese Mathematics</em> (Çin riyaziyyatının tarixi).
                        </li>
                        <li>
                            David Eugene Smith; Louis Charles Karpinski (1911). <em>The Hindu–Arabic numerals</em> (Hind–ərəb rəqəmləri).
                        </li>
                        <li>
                            Chowdhury, Arnab. <em>Design of an Efficient Multiplier using DBNS</em> (DBNS əsasında səmərəli vurma cihazı layihəsi). GIAP
                            Journals.
                        </li>
                        <li>
                            Fiete, I. R.; Seung, H. S. (2007). "Neural network models of birdsong..." (Quş nəğməsinin neyron şəbəkə modelləri...){" "}
                            <em>New Encyclopedia of Neuroscience</em> (Yeni Neyroelm Ensiklopediyasında).
                        </li>
                    </ol>

                    <h2>Mənbələr</h2>
                    <ul>
                        <li>
                            Georges Ifrah. <em>The Universal History of Numbers</em> (Rəqəmlərin Ümumdünya Tarixi). Wiley, 1999.
                        </li>
                        <li>
                            D. Knuth. <em>The Art of Computer Programming</em> (Kompüter Proqramlaşdırma Sənəti). Addison–Wesley, 3-cü nəşr.
                        </li>
                        <li>
                            A.L. Kroeber. <em>Handbook of the Indians of California</em> (Kaliforniya hindularının əl kitabı). Smithsonian Institution.
                        </li>
                        <li>
                            J.P. Mallory; D.Q. Adams. <em>Encyclopedia of Indo-European Culture</em> (Hind–Avropa Mədəniyyəti Ensiklopediyası).
                        </li>
                        <li>
                            Hans J. Nissen və başqaları (1993). <em>Archaic Bookkeeping</em> (Arxaik mühasibat uçotu). University of Chicago Press.
                        </li>
                        <li>
                            Schmandt-Besserat, Denise (1996). <em>How Writing Came About</em> (Yazı necə yarandı). University of Texas Press.
                        </li>
                        <li>
                            Zaslavsky, Claudia (1999). <em>Africa Counts</em> (Afrika sayır). Chicago Review Press.
                        </li>
                    </ul>
                </Container>
            </article>
        </main>
    );
};

export default NumeralSystem;
