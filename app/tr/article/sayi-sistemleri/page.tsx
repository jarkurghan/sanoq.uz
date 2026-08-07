import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/common/container";
import { ARTICLES_002_SS_METALANG } from "@/lib/constants/article/sanoq-sistemasi";
import { SEO } from "@/lib/utils/generate-metadata";

export function generateMetadata(): Metadata {
    const lang = "tr";
    const url = ARTICLES_002_SS_METALANG[lang] as string;

    const title = "Sayı sistemleri — genel bakış, tarih ve türler";
    const description =
        "Sayı sistemleri üzerine kapsamlı makale: tarihleri, temel türleri ve sayıların kültürde, matematikte ve bilgisayar teknolojilerinde nasıl ifade edildiği.";
    const keywords = [
        "sayı sistemi",
        "sayı sistemleri",
        "Hint-Arap rakamları",
        "sayıların tarihi",
        "onluk sistem",
        "Roma rakamları",
        "Maya rakamları",
        "matematik",
        "sayı yazımı",
    ].join(", ");

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_002_SS_METALANG, lang, pageType: "article" });
}

const NumeralSystem = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Sayı sistemi</h1>
                    </header>
                    <section>
                        <h2 className="hidden">Sayı sistemi</h2>
                        <p>
                            Sayı sistemi — sayıların yazılı biçimde ifade edilme yöntemi, yani belli bir sayı kümesini rakamlar veya semboller aracılığıyla
                            düzenli ve tutarlı şekilde göstermeye yarayan matematiksel yazı sistemidir.
                        </p>
                        <p>
                            Aynı semboller dizisi farklı sayı sistemlerinde farklı anlamlar taşıyabilir. Örneğin,{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1 py-0.5 rounded">"11"</code> onluk sayı sisteminde (bugün dünyada en
                            yaygın kullanılan) on biri ifade eder, ikilik sayı sisteminde (modern bilgisayarlarda kullanılır) üçü gösterir, birli sayı
                            sisteminde ise (çetele tutmada) ikiye karşılık gelir.
                        </p>
                        <p>
                            Bir sembolün temsil ettiği sayıya onun <strong>değeri</strong> denir. Tüm sayı sistemleri aynı sayı kümesini gösteremez; örneğin,
                            Roma, Yunan ve Mısır rakamlarında sıfır için özel bir sembol bulunmaz.
                        </p>
                        <p>İdeal bir sayı sistemi şu özelliklere sahip olmalıdır:</p>
                        <ul>
                            <li>Faydalı bir sayı kümesini temsil etmek (ör. tüm tam sayılar veya rasyonel sayılar)</li>
                            <li>Her sayıya özgün ve açık bir gösterim sağlamak (ya da en azından standart bir gösterim)</li>
                            <li>Sayıların cebirsel ve aritmetik yapısını yansıtmak</li>
                        </ul>
                        <p>
                            Örneğin, klasik onluk sayı sisteminde sıfırdan farklı her doğal sayı, başında sıfır olmayan rakamla başlayan sonlu bir rakamlar
                            dizisiyle tekil biçimde ifade edilir.
                        </p>
                        <p>
                            Bazen sayı sistemlerine <em>sayılar sistemi</em> de denir. Ancak bu ad açık değildir, çünkü bu terim başka matematiksel sistemleri
                            de ifade edebilir: gerçek sayılar sistemi, karmaşık sayılar sistemi, çeşitli hiperkarmaşık sistemler, p-adik sayılar sistemi vb.
                            Ancak bu makale böyle sistemler hakkında değildir.
                        </p>
                    </section>

                    <section>
                        <h2>Tarih</h2>
                        <p>
                            Bilginlere göre, ilk sayı sistemleri uygarlıklara göre farklılık göstermiştir: Babilliler 60 tabanlı bir sistem kullanmış,
                            Mısırlılar hiyeroglif rakamları geliştirmiş, Çinliler çubuk rakamları kullanmıştır. Mayalar ise bağımsız olarak 20 tabanlı
                            (vigesimal) bir sistem oluşturmuş ve buna sıfır için özel bir sembol eklemişlerdir.
                        </p>
                        <Image
                            src="/images/historial_numeric_system.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 rounded-lg p-4"
                            alt="maya"
                            width={360}
                            height={120}
                        />
                        <p>
                            Hintli matematikçiler, örneğin 7. yüzyılda yaşamış olan <strong>Brahmagupta</strong>, aritmetik kuralları sistemleştirmede ve sıfır
                            kavramını tanımlamada kritik rol oynamışlardır. Daha sonra İslam dünyasındaki bilginler, özellikle <strong>El-Harezmi</strong>, bu
                            fikirleri geliştirmiştir. Sayı sistemleri evrildikçe, konumsal yazının verimliliği ve sıfırın eklenmesi modern sayı gösterimini
                            şekillendirmiş, küresel ticaret, bilim ve teknolojiye büyük etki etmiştir.
                        </p>
                        <p>
                            İlk gerçek yazılı konumsal sayı sistemi <strong>Hint–Arap sayı sistemi</strong> kabul edilmektedir. Bu sistem 7. yüzyılda
                            Hindistan’da ortaya çıkmıştır
                            <sup className="text-gray-400">[1]</sup>, fakat henüz modern biçimde değildi, çünkü sıfırın kullanımı yaygınlaşmamıştı. Sıfır yerine
                            bazen noktalar kullanılmış ya da boşluk bırakılmıştır. Sıfırın ilk geniş kabul gören kullanımı
                            <strong>876 yılında</strong> gerçekleşmiştir
                            <sup className="text-gray-400">[2]</sup>. Orijinal rakamlar bugünkülere çok benziyordu, hatta kullanılan işaretlere kadar
                            <sup className="text-gray-400">[1]</sup>.
                        </p>
                        <p>
                            13. yüzyıla gelindiğinde <strong>Batı Arap rakamları</strong> Avrupa’daki matematik çevrelerinde kabul görmeye başlamıştı. Örneğin,{" "}
                            <strong>Fibonacci</strong> onları <em>Liber Abaci</em>
                            adlı eserinde kullanmıştır. Başlangıçta direnişle karşılaşsa da, Hint–Arap rakamları hesaplamadaki verimliliği nedeniyle, özellikle
                            bankacılık ve ticarette Avrupa’da hızla yayılmıştır.
                        </p>
                        <p>
                            15. yüzyılda matbaanın icadı, bu rakamların kullanımını standartlaştırmıştır; çünkü basılı matematik kitapları Roma rakamları yerine
                            bu sistemi tercih etmiştir. 15. yüzyılın sonlarına doğru günlük hayata girmiştir
                            <sup className="text-gray-400">[3]</sup>. 20. yüzyılın sonuna gelindiğinde dünyadaki bilgisayarsız tüm hesaplamalar Arap rakamları
                            ile yapılır hale gelmiş, yerel sayı sistemleri büyük ölçüde terk edilmiştir.
                        </p>
                        <p>
                            17. yüzyılda bu sistem bilimsel çalışmalarda baskın hale gelmiş,
                            <strong>Isaac Newton</strong> ve <strong>René Descartes</strong> gibi isimlerin matematiksel ilerlemelerine etki etmiştir. 19. ve
                            20. yüzyıllarda Arap rakamlarının geniş çapta benimsenmesi, küresel finans, mühendislik ve teknolojinin gelişmesini sağlamış, modern
                            bilgisayar ve dijital veri gösteriminin temelini oluşturmuştur.
                        </p>
                    </section>

                    <section>
                        <h2>Rakam kullanan diğer tarihî sayı sistemleri</h2>
                        <Image
                            src="/images/maya.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 p-4 border rounded-lg"
                            alt="maya"
                            width={160}
                            height={120}
                        />
                        <p>
                            <strong>Maya rakamlarının</strong> kesin yaşı bilinmemektedir, ancak Hind–Arap sisteminden daha eski olması mümkündür. Sistem{" "}
                            <em>vigesimal</em> (20 tabanlı) idi ve yirmi rakamdan oluşuyordu. Mayalar sıfırı temsil etmek için deniz kabuğu sembolü
                            kullanmışlardır. Rakamlar dikey yazılır, birler basamağı altta bulunurdu. Mayaların modern ondalık ayırıcıya benzer bir işareti
                            olmadığından, sistem kesirleri ifade edemiyordu.
                        </p>
                        <p>
                            <strong>Tay rakam sistemi</strong>, Hind–Arap sistemine özdeştir, ancak kullanılan semboller farklıdır. Bu rakamların kullanımı
                            Tayland’da eskisi kadar yaygın değildir, fakat hâlen Arap rakamlarıyla birlikte kullanılmaktadır.
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
                            <strong>Çubuk rakamları</strong>, Çinli ve Japon matematikçiler tarafından kullanılan yazılı biçimlerdir. Bu sistem onluk
                            konumsal sistemdi ve onluk hesaplamalarda kullanılırdı. Çubuklar bir hesap tahtasına yerleştirilir, öne veya arkaya kaydırılarak
                            basamak değeri değiştirilirdi.
                        </p>
                        <p>
                            MS 3–5. yüzyıllara tarihlenen <em>Sūnzĭ Suànjīng</em> adlı matematik eseri bu sistem için ayrıntılı talimatlar sunar. Bunun en az MÖ
                            4. yüzyıldan beri kullanıldığı düşünülmektedir.
                            <sup className="text-gray-400">[5]</sup> Başlangıçta sıfır bir sayı değil, boş konum olarak kabul edilmiştir.
                            <sup className="text-gray-400">[6]</sup> Daha sonraki kaynaklarda sıfır ve negatif sayıları ifade etme kuralları getirilmiştir.
                        </p>
                        <p>
                            Sıfır için yuvarlak sembol <code className="px-1 py-0.5 rounded dark:bg-background">〇</code>
                            ilk kez 1247 tarihli <em>Dokuz Bölümlü Matematik Risalesi</em>nde belgelenmiştir.
                            <sup className="text-gray-400">[7]</sup> Bu sembolün kökeni bilinmemektedir; kare bir işaretin değiştirilmesiyle üretilmiş olabilir
                            <sup className="text-gray-400">[8]</sup>. <strong>Suzhou rakamları</strong>, çubuk rakamlarının bir devamıdır ve günümüzde hâlen
                            bazı ticari amaçlarla kullanılmaktadır.
                        </p>
                    </section>

                    <section>
                        <h2>Ana sayı sistemleri</h2>
                        <p>
                            En yaygın kullanılan sayı sistemi onluk (decimal) sistemdir. Tam sayı versiyonunun geliştirilmesinde Hintli matematikçiler,
                            özellikle <strong>Hint–Arap rakamları sistemi</strong> büyük rol oynamıştır.
                            <sup className="text-gray-400">[8]</sup> V. yüzyılda Kusumapura’dan <strong>Aryabhata</strong>
                            basamak-değer gösterimini geliştirdi, bir yüzyıl sonra <strong>Brahmagupta</strong> sıfır için sembolü tanıttı. Sistem ticaret ve
                            askeri faaliyetler sayesinde yavaş yavaş Arabistan’a yayıldı. Orta Doğulu matematikçiler sistemi genişleterek 10’un negatif
                            kuvvetlerini (kesirler) dahil ettiler. Bu, 952–953 yıllarında Suriyeli matematikçi <strong>Ebu’l-Hasan el-Uklidisi</strong>’nin
                            eserinde kaydedildi. Ayrıca <strong>Sind ibn Ali</strong> ondalık nokta yazımını tanıttı ve Arap rakamları üzerine en eski risaleyi
                            yazdı. Daha sonra Hint–Arap sistemi Avrupa’ya tüccarlar aracılığıyla geçti ve Avrupalılar bu rakamlara “Arap rakamları” dediler.
                        </p>
                        <p>
                            En basit sistem birli (unary) sayı sistemidir. Burada her doğal sayı ilgili sembollerin sayısıyla gösterilir. Örneğin, sembol{" "}
                            <code>/</code> seçilirse, yedi sayısı /////// şeklinde yazılır. Çetele işaretleri (tally marks) bu sistemin günümüzde hâlâ
                            kullanılan örneğidir. Birli sistem küçük sayılar için uygun olsa da teorik bilgisayar biliminde önemli rol oynar. Örneğin, Elias
                            gamma kodlaması verileri sıkıştırmada kullanılır ve unary uzunluğu belirtmek için kullanılır.
                        </p>
                        <p>
                            Birli gösterim bazı yeni değerler için semboller eklenerek kısaltılabilir. Genellikle bu değerler 10’un kuvvetleridir. Örneğin, / —
                            1, − — 10, + — 100 ise, 304 sayısı +++ ////, 123 sayısı ise + − − /// şeklinde yazılır. Buna <em>işaret–değer gösterimi</em> denir.
                            Eski Mısır sayı sistemi bu türdendi, Roma rakamları ise bunun bir değişikliğiydi.
                        </p>
                        <p>
                            Daha da kullanışlısı, sembollerin tekrarını kısaltmak için özel işaretler kullanan sistemlerdir. Örneğin, alfabenin ilk dokuz
                            harfini kullanarak A — “bir kez”, B — “iki kez” anlamına gelirse, 304 sayısı C+ D/ şeklinde yazılabilir. Bu sistem Çin rakamlarında
                            ve onlara dayalı diğer Doğu Asya rakamlarında kullanılır. İngilizce sayı sistemi de bu türdendir (“three hundred four”). Ancak bazı
                            dillerde tabanlar karışıktır: örneğin Fransızcada 79 — <em>soixante dix-neuf</em> (60 + 10 + 9), Galcede{" "}
                            <em>pedwar ar bymtheg a thrigain</em> (4 + (5 + 10) + (3 × 20)).
                        </p>
                        <p>
                            En gelişmişi konumsal sistemdir. Bu sistemler tabanına göre sınıflandırılır. Onluk sistemde 0–9 arası on rakam
                            kullanılır ve rakamın konumu onun hangi 10’un kuvvetiyle çarpılacağını gösterir: 304 = 3×100 + 0×10 + 4×1, yani 3×10² + 0×10¹ +
                            4×10⁰. Burada sıfır çok önemlidir, çünkü basamakları “atlamaya” olanak sağlar.
                        </p>
                        <p>
                            Aritmetik işlemler konumsal sistemlerde çok daha kolaydır. Toplamsal sistemlerde her basamak için ayrı semboller gerekirken,
                            konumsal sistemde (onluk tabanda) sadece on sembol yeterlidir.
                            <sup className="text-gray-400">[10]</sup>
                        </p>
                        <p>
                            Günümüzde yazıda evrensel olarak onluk konumsal sistem kullanılmaktadır. Ayrıca bazı durumlarda 1000 tabanı da kullanılır;
                            burada rakamlar üçlü gruplara ayrılır: örneğin 1,000,234,567.
                        </p>
                        <p>
                            Bilgisayarlarda temel sistem 2 tabanlı konumsal sistemdir (ikilik/binary). Bu sistemde sadece 0 ve 1 rakamları vardır. İkilik sistem
                            üçlü gruplara ayrıldığında 8 tabanlı (sekizlik), dörtlü gruplara ayrıldığında 16 tabanlı (onaltılık) sistem elde edilir. Çok büyük
                            sayılar için 2³² veya 2⁶⁴ tabanlı sistemler kullanılır.
                        </p>
                        <p>
                            Bazı biyolojik sistemlerde de birli sistem kullanılır. Örneğin, kuşların ötüşünü düzenleyen sinir devrelerinde unary kodlama
                            görülür. Kuş beynindeki <strong>HVC</strong> merkezi öğrenme ve ötüşte rol oynar.
                        </p>
                        <p>
                            Rakamlar ikiye ayrılır: aritmetik rakamlar (0–9) ve geometrik rakamlar (1, 10, 100...). İşaret–değer sistemleri sadece geometrik
                            rakamları, konumsal sistemler ise sadece aritmetik rakamları kullanır. Ancak konuşma dilinde her ikisi de kullanılır.
                        </p>
                        <p>
                            Bilgisayar biliminde bazen <em>bijektif sayı sistemi</em> denilen, değiştirilmiş <em>k</em>-tabanlı sistem kullanılır. Burada
                            rakamlar 1, 2, …, <em>k</em> şeklindedir ve sıfır boş dize ile gösterilir. Bu yöntem tüm sayılar ile rakam dizileri arasında bire
                            bir eşleme sağlar. Bijektif 1-tabanlı sistem unary sistemine denktir.
                        </p>
                    </section>

                    <section>
                        <h2>Konumsal sistemlerin ayrıntıları</h2>
                        <p>
                            Konumsal bir <em>b</em> tabanlı sayı sisteminde (<em>b</em>, 1’den büyük doğal sayı olup sistemin tabanı ya da radiksi olarak
                            bilinir), sıfır dahil olmak üzere ilk <em>b</em> doğal sayıya karşılık gelen <em>b</em> temel sembol (rakam) kullanılır. Diğer
                            sayılar ise sembollerin konumuna göre oluşturulur: en sağdaki rakam kendi değerini ifade eder, sola doğru kaydıkça değeri <em>b</em>{" "}
                            ile çarpılır.
                        </p>
                        <p>
                            Örneğin, <strong>onluk</strong> sistemde (taban 10) 4327 sayısı şu şekilde ifade edilir: (4×10³) + (3×10²) + (2×10¹) + (7×10⁰),
                            burada 10⁰ = 1.
                        </p>
                        <p>
                            Genel olarak, taban <em>b</em> olduğunda sayılar şu biçimde yazılır:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] p-1 rounded inline-block">aₙbⁿ + aₙ₋₁bⁿ⁻¹ + aₙ₋₂bⁿ⁻² + ... + a₀b⁰</code>
                            ve rakamlar <code className="[font-family:'Times_New_Roman',serif] px-1">aₙ aₙ₋₁ ... a₀</code>
                            şeklinde sıralanır. Burada rakamlar 0 ile <em>b – 1</em> arasındaki doğal sayılardır.
                        </p>
                        <p>
                            Eğer birden fazla taban tartışılıyorsa, karışıklığı önlemek için sayının yanına alt indisle taban yazılır:
                            <code className="[font-family:'Times_New_Roman',serif] px-1">
                                sayı<sub>taban</sub>
                            </code>
                            . Aksi belirtilmedikçe, alt indissiz sayılar onluk kabul edilir.
                        </p>
                        <p>
                            Nokta kullanılarak sayılar iki gruba ayrılır ve kesirler de yazılabilir. Örneğin, 2 tabanında{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1">10.11</code> sayısı 1×2¹ + 0×2⁰ + 1×2⁻¹ + 1×2⁻² = 2.75 değerini ifade
                            eder.
                        </p>
                        <p>
                            Genel olarak, <em>b</em> tabanlı sistemde sayılar şu biçimdedir:
                            <br />
                            <Image src="/images/formula_n1.png" className="dark:bg-slate-400 rounded-lg" alt="f1" width={373} height={50} />
                        </p>
                        <p>
                            Burada bᵏ ve b⁻ᵏ değerleri ilgili rakamların <strong>ağırlıkları</strong>dır.
                            <em>k</em> konumu ise ilgili ağırlığın <strong>logaritması</strong>dır:
                            <Image src="/images/formula_n2.png" className="dark:bg-slate-400 rounded-sm inline" alt="f2" width={141} height={23} />. En yüksek
                            basamak sayının <strong>büyüklük mertebesi</strong>ne yakındır.
                        </p>
                        <p>
                            Birlik sisteminde (unary) ağırlığı göstermek için <em>w</em> adet işaret gerekirdi. Konumsal sistemde ise sadece
                            <Image src="/images/formula_n3.png" className="dark:bg-slate-400 rounded-sm inline" alt="f3" width={131} height={19} />
                            rakam yeterlidir (<em>k ≥ 0</em> için). Örneğin, 1000 ağırlığını göstermek için 4 rakam gerekir, çünkü
                            <code className="[font-family:'Times_New_Roman',serif] px-1">
                                log<sub>10</sub> 1000 + 1 = 3 + 1
                            </code>
                            .
                        </p>
                        <p>
                            Bir sayı rasyonel ise konumsal açılımı ya sonlu ya da devirlidir. Bir tabanda sonlu olan sayı başka bir tabanda devreden
                            olabilir (örn. 0.3₁₀ = 0.010011...₂). İrrasyonel sayılar ise tüm tabanlarda sonsuz ve tekrar etmeyen açılıma sahiptir. Örneğin, 2
                            tabanında π = 3.1415926...₁₀ şu şekilde yazılır: 11.001001000011111...₂.
                        </p>
                        <p>
                            Tekrarlayan kesirlerde tekrar eden rakamların üstüne çizgi (
                            <code>
                                <span className="overline">n</span>
                            </code>
                            ) veya nokta (<code>ṅ</code>) konulması gelenektir. Örneğin:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-2">
                                14/11 = 1.272727... = 1.<span className="overline">27</span>
                            </code>
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-1">
                                321.321787878... = 321.321<span className="overline">78</span>
                            </code>
                        </p>
                        <p>
                            Eğer b = p asal sayı ise, sola doğru sonsuza kadar açılan <em>p</em>-tabanlı sayılar tanımlanabilir; bunlara{" "}
                            <strong>p-adik sayılar</strong> denir.
                        </p>
                        <p>
                            Ayrıca, rakamların hem pozitif hem de negatif olabileceği <em>b</em> tabanlı varyant da mümkündür; buna{" "}
                            <strong>işaretli-rakam gösterimi</strong> denir.
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
                    <h2>Kaynakça</h2>
                    <ol>
                        <li>
                            O'Connor, J. J. ve Robertson, E. F. <em>Arabic Numerals</em> (Arap rakamları). Ocak 2001.
                        </li>
                        <li>
                            Bill Casselman. "All for Nought" (Her şey boşuna). <em>Feature Column</em>. AMS. Şubat 2007.
                        </li>
                        <li>
                            Bradley, Jeremy. "How Arabic Numbers Were Invented" (Arap rakamları nasıl icat edildi). <em>theclassroom.com</em>.
                        </li>
                        <li>
                            "Wissanu rejects dumping Thai numerals" (Wissanu Tay rakamlarını kaldırmayı reddetti). <em>Bangkok Post</em>. 31 Mayıs 2022.
                        </li>
                        <li>O'Connor, John J.; Robertson, Edmund F. (2004). "Chinese numerals" (Çin rakamları). University of St Andrews.</li>
                        <li>
                            Shen Kuo ve diğerleri (1999). <em>The Nine Chapters on the Mathematical Art</em> (Matematik Sanatının Dokuz Bölümü). Oxford
                            University Press.
                        </li>
                        <li>
                            "Mathematics in the Near and Far East" (Yakın ve Uzak Doğuda matematik). <em>grmath4.phpnet.us</em>.
                        </li>
                        <li>
                            Martzloff, Jean-Claude (2007). <em>A History of Chinese Mathematics</em> (Çin matematiği tarihi).
                        </li>
                        <li>
                            David Eugene Smith; Louis Charles Karpinski (1911). <em>The Hindu–Arabic numerals</em> (Hint–Arap rakamları).
                        </li>
                        <li>
                            Chowdhury, Arnab. <em>Design of an Efficient Multiplier using DBNS</em> (DBNS kullanılarak verimli çarpan tasarımı). GIAP Journals.
                        </li>
                        <li>
                            Fiete, I. R.; Seung, H. S. (2007). "Neural network models of birdsong..." (Kuş şarkısının sinir ağı modelleri...){" "}
                            <em>New Encyclopedia of Neuroscience</em> (Yeni Sinirbilim Ansiklopedisi).
                        </li>
                    </ol>

                    <h2>Kaynaklar</h2>
                    <ul>
                        <li>
                            Georges Ifrah. <em>The Universal History of Numbers</em> (Sayıların Evrensel Tarihi). Wiley, 1999.
                        </li>
                        <li>
                            D. Knuth. <em>The Art of Computer Programming</em> (Bilgisayar Programlamanın Sanatı). Addison–Wesley, 3. Baskı.
                        </li>
                        <li>
                            A.L. Kroeber. <em>Handbook of the Indians of California</em> (Kaliforniya Yerlilerinin El Kitabı). Smithsonian Institution.
                        </li>
                        <li>
                            J.P. Mallory; D.Q. Adams. <em>Encyclopedia of Indo-European Culture</em> (Hint–Avrupa Kültürü Ansiklopedisi).
                        </li>
                        <li>
                            Hans J. Nissen ve diğerleri (1993). <em>Archaic Bookkeeping</em> (Arkaik Muhasebe). University of Chicago Press.
                        </li>
                        <li>
                            Schmandt-Besserat, Denise (1996). <em>How Writing Came About</em> (Yazı Nasıl Ortaya Çıktı). University of Texas Press.
                        </li>
                        <li>
                            Zaslavsky, Claudia (1999). <em>Africa Counts</em> (Afrika Sayar). Chicago Review Press.
                        </li>
                    </ul>
                </Container>
            </article>
        </main>
    );
};

export default NumeralSystem;
