import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/src/components/common/container";
import { ARTICLES_002_SS_METALANG } from "@/src/lib/constants/article/sanoq-sistemasi";
import { SEO } from "@/src/lib/utils/generate-metadata";

export function generateMetadata(): Metadata {
    const lang = "ky";
    const url = ARTICLES_002_SS_METALANG[lang] as string;

    const title = "Санаак системалары — жалпы кароо, тарыхы жана түрлөрү";
    const description =
        "Санаак системалары тууралуу кеңири макала: тарыхы, негизги түрлөрү жана сандардын маданиятта, математикада жана компьютер технологияларында көрсөтүлүшү.";
    const keywords = [
        "санаак системасы",
        "сан системасы",
        "индия-араб цифралары",
        "сандардын тарыхы",
        "ондук система",
        "рим цифралары",
        "майя цифралары",
        "математика",
        "сандарды жазуу",
    ].join(", ");

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_002_SS_METALANG, lang, pageType: "article" });
}

const NumeralSystem = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Санак системасы</h1>
                    </header>
                    <section>
                        <h2 className="hidden">Санак системасы</h2>
                        <p>
                            Санак системасы — сандарды жазуу жолу, башкача айтканда, белгилүү бир сандар жыйынын белгилер же цифралар аркылуу иреттүү жана
                            бирдей тартипте көрсөтүүгө кызмат кылган математикалык жазуу системасы.
                        </p>
                        <p>
                            Бир эле белгилер тизмеги ар кандай санак системаларында ар башка маанини бере алат. Мисалы,{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1 py-0.5 rounded">"11"</code> ондук санак системасында (азыр дүйнөдө эң
                            көп колдонулган) он бирди билдирет, экилик санак системасында (заманбап компьютерлерде колдонулат) үчтү, ал эми бирдик санак
                            системасында (саноо-таяк ыкмасында) экөөнү көрсөтөт.
                        </p>
                        <p>
                            Белгинин билдирген саны анын <strong>мааниси</strong> деп аталат. Бардык санак системалары бирдей сандар жыйынын көрсөтө албайт;
                            мисалы, Рим, Грек жана Египет цифраларында нөлгө арналган белги болгон эмес.
                        </p>
                        <p>Идеалдуу санак системасы төмөнкү шарттарга ээ болушу керек:</p>
                        <ul>
                            <li>Пайдалуу сандар жыйынын көрсөтүү (мисалы, бардык бүтүн же рационалдык сандар)</li>
                            <li>Ар бир санга өзүнө таандык, так көрсөтмө берүү (же болбосо стандарттык жазуу)</li>
                            <li>Сандардын алгебралык жана арифметикалык түзүлүшүн чагылдыруу</li>
                        </ul>
                        <p>
                            Мисалы, кадимки ондук санак системасында нөлгө тең эмес ар бир натуралдык сан башында нөл эмес цифрадан башталган чектелген цифралар
                            тизмеги аркылуу өзгөчө түрдө көрсөтүлөт.
                        </p>
                        <p>
                            Айрым учурда санак системаларын <em>сан системалары</em> деп да аташат. Бирок бул аталыш так эмес, анткени ал башка математикалык
                            системаларды да түшүндүрүшү мүмкүн: мисалы, чыныгы сандар системасы, комплекстүү сандар системасы, ар кандай гиперкомплекстүү
                            системалар, p-аддик сандар системасы ж.б. Бирок бул макала мындай системалар тууралуу эмес.
                        </p>
                    </section>

                    <section>
                        <h2>Тарых</h2>
                        <p>
                            Окумуштуулардын айтымында, алгачкы санак системалары ар кайсы цивилизациялардын ичинде ар түрдүү болгон: вавилондуктар 60-дык
                            системаны колдонгон, мисирликтер иероглифтик сандарды иштеп чыккан, кытайлыктар таякча сандарды колдонушкан. Майялар болсо өз
                            алдынча 20-лык системаны түзүп, анда нөл үчүн өзгөчө белги киргизишкен.
                        </p>
                        <Image
                            src="/images/historial_numeric_system.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 rounded-lg p-4"
                            alt="maya"
                            width={360}
                            height={120}
                        />
                        <p>
                            Индиялык математиктер, мисалы VII кылымда жашаган <strong>Брахмагупта</strong>, арифметикалык эрежелерди системалаштырууда жана нөл
                            түшүнүгүн калыптандырууда маанилүү ролду ойногон. Кийин ислам дүйнөсүндөгү окумуштуулар, анын ичинде <strong>Аль-Хорезми</strong>,
                            бул идеяларды өркүндөтүшкөн. Санак системалары өнүккөн сайын, позициялык жазуунун ыңгайлуулугу жана нөлдүн кошулушу азыркы сан
                            жазуунун түзүлүшүнө, дүйнөлүк соода, илим жана технологияга зор таасир эткен.
                        </p>
                        <p>
                            Биринчи чыныгы жазма позициялык санак системасы <strong>индия–араб санак системасы</strong> болуп эсептелет. Бул система VII кылымда
                            Индияда түзүлгөн
                            <sup className="text-gray-400">[1]</sup>, бирок азыркы формасында эмес эле, анткени нөл цифрасы али жалпы кабыл алынган эмес болчу.
                            Нөлдүн ордуна кээде чекит коюлуп, же бош орун калтырылган. Нөлдүн алгач кеңири таанылган колдонулушу
                            <strong>876-жылы</strong> катталган
                            <sup className="text-gray-400">[2]</sup>. Баштапкы сандар азыркы сандарга абдан окшош болгон, цифраларды белгилеген тамгаларга чейин
                            <sup className="text-gray-400">[1]</sup>.
                        </p>
                        <p>
                            XIII кылымга чейин <strong>батыш араб сандары</strong> Европанын математикалык чөйрөлөрүндө кабыл ала баштаган. Мисалы,{" "}
                            <strong>Фибоначчи</strong> аларды өзүнүн <em>Liber Abaci</em>
                            эмгегинде колдонгон. Башында каршылыкка туш болсо да, индия–араб сандары эсептөөнүн ыңгайлуулугу менен, айрыкча банк жана соода
                            тармагында, Европада кеңири жайылган.
                        </p>
                        <p>
                            XV кылымда басмакана ойлоп табылышы бул сандардын колдонулушун стандартташтырды, анткени басма математикалык китептер рим сандарына
                            караганда ушул системаны артык көрүштү. XV кылымдын аягына чейин алар күнүмдүк турмушка кеңири кирген
                            <sup className="text-gray-400">[3]</sup>. XX кылымдын аягына карата дүйнө жүзүндө компьютерсиз бардык эсептөөлөр араб сандары менен
                            жүргүзүлүп, жергиликтүү сан системалары дээрлик колдонулбай калган.
                        </p>
                        <p>
                            XVII кылымда бул система илимий эмгектерде үстөмдүк кыла баштаган жана
                            <strong>Исаак Ньютон</strong> менен <strong>Рене Декарт</strong> сыяктуу окумуштуулардын математикалык ачылыштарына таасир эткен.
                            XIX–XX кылымдарда араб сандарынын кеңири жайылышы глобалдык каржы, инженерия жана технологиянын өнүгүшүнө өбөлгө түзгөн, заманбап
                            компьютер жана санариптик маалымат чагылдыруунун негизин салган.
                        </p>
                    </section>

                    <section>
                        <h2>Сандарды колдонгон башка тарыхый санак системалары</h2>
                        <Image
                            src="/images/maya.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 p-4 border rounded-lg"
                            alt="maya"
                            width={160}
                            height={120}
                        />
                        <p>
                            <strong>Майя сандарынын</strong> так жашы белгисиз, бирок алардын الهند–араб системасынан да эски болушу мүмкүн. Бул система{" "}
                            <em>висизимал</em> (20-лык) болуп, жыйырма белги камтыган. Майялар нөлдү көрсөтүү үчүн кабыкча символун колдонушкан. Сандар тик
                            жазылып, бирдиктер ылдыйкы катарда жайгашкан. Майяларда азыркы ондук бөлгүчкө окшогон белги болбогондуктан, алардын системасы бөлчөк
                            сандарды көрсөтө алган эмес.
                        </p>
                        <p>
                            <strong>Тай сандары</strong> индия–араб санак системасына окшош, айырмасы — колдонулган белгилер башкача. Бул белгилер азыр
                            Таиландда мурдагыдай көп колдонулбайт, бирок али да араб сандары менен катар колдонулат.
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
                            <strong>Таякча сандар</strong> — кытай жана жапон математиктери колдонгон жазма формасы, бул ондук позициялык система болуп
                            эсептөөлөрдө пайдаланылган. Таякчалар эсеп тактасына коюлуп, алдыга же артка жылдыруу менен ондук разряд өзгөртүлгөн.
                        </p>
                        <p>
                            Б.з. III–V кылымдарына таандык <em>Sūnzĭ Suànjīng</em> аттуу математикалык эмгек бул системаны кеңири сүрөттөйт. Бул ыкма б.з.ч. IV
                            кылымдан бери колдонулуп келген болушу мүмкүн деп эсептелет.
                            <sup className="text-gray-400">[5]</sup> Башында нөл сан эмес, бош орун катары кабыл алынган.
                            <sup className="text-gray-400">[6]</sup> Кийинки булактарда нөл жана терс сандарды көрсөтүү эрежелери киргизилген.
                        </p>
                        <p>
                            Нөл үчүн тегерек белги <code className="px-1 py-0.5 rounded dark:bg-background">〇</code>
                            биринчи жолу 1247-жылдагы <em>Тогуз бөлүмдөн турган математикалык эмгек</em>те кездешет.
                            <sup className="text-gray-400">[7]</sup> Бул белгинин келип чыгышы белгисиз; балким, квадрат белги өзгөртүлүп жасалган болушу мүмкүн
                            <sup className="text-gray-400">[8]</sup>. <strong>Сучжоу сандары</strong>, таякча сандардан тараган система болуп, бүгүнкү күндө да
                            айрым соода иштеринде колдонулат.
                        </p>
                    </section>

                    <section>
                        <h2>Негизги санак системалары</h2>
                        <p>
                            Эң көп колдонулган санак системасы — ондук (decimal) система. Анын бүтүн сандык версиясын иштеп чыгууда индиялык математиктер, атап
                            айтканда
                            <strong>индия–араб цифралары системасын</strong> түзүүдө чоң салым кошкон.
                            <sup className="text-gray-400">[8]</sup> V кылымда Кусумпуралык <strong>Арьябхата</strong>
                            разряддык жазууну иштеп чыккан, бир кылымдан кийин <strong>Брахмагупта</strong> нөл белгисин киргизген. Бул система соода жана
                            аскердик байланыштар аркылуу акырындык менен Арабияга тараган. Ортоңку Чыгыш математиктери системаны кеңейтип, 10-дун терс
                            даражаларын (бөлчөктөрдү) кошушкан. Бул тууралуу 952–953-жылдары сириялык математик <strong>Абу-л-Хасан ал-Уқлидиси</strong> жазган.
                            Ал эми <strong>Синд ибн Али</strong> ондук чекит жазуусун киргизип, араб цифралары жөнүндө алгачкы эмгек жазган. Кийин бул система
                            соодагерлер аркылуу Европага тараган жана ал жакта бул цифралар “араб цифралары” деп аталып калган.
                        </p>
                        <p>
                            Эң жөнөкөй система — бирдик (unary) системасы. Анда ар бир натурал сан тиешелүү белгилердин саны менен көрсөтүлөт. Мисалы, белги
                            катары <code>/</code> тандасак, жети саны /////// түрүндө жазылат. Санак сызыктары (tally marks) ушундай системанын азыркыга чейин
                            колдонулган мисалы. Бирдик системасы кичине сандар үчүн гана ыңгайлуу, бирок теориялык информатикада маанилүү орунга ээ. Мисалы,
                            маалыматтарды кысууда колдонулган Elias gamma коддоосу бирдик системасын пайдаланат.
                        </p>
                        <p>
                            Бирдик жазуу кээде жаңы маанилер үчүн өзүнчө белгилерди киргизүү менен кыскартылат. Көп учурда бул маанилер 10-дун даражаларына
                            туура келет. Мисалы, / — 1, − — 10, + — 100 болсо, 304 саны +++ ////, ал эми 123 саны + − − /// түрүндө жазылат. Бул ыкма{" "}
                            <em>белги–маани жазуусу</em> деп аталат. Байыркы Мисир сан системасы ушундай типке кирет, ал эми Рим цифралары анын өзгөртүлгөн
                            варианты болгон.
                        </p>
                        <p>
                            Кээде белгилердин кайталанышын атайын кыскартуулар аркылуу көрсөтүү ыңгайлуу. Мисалы, алфавиттин алгачкы тогуз тамгасын колдонуп, A
                            — “бир жолу”, B — “эки жолу” деген мааниде болсо, 304 санын C+ D/ түрүндө жазууга болот. Мындай система кытай жана чыгыш азиялык
                            цифраларда колдонулат. Англис тилиндеги сан системасы да ушундай түргө кирет (“three hundred four”). Көптөгөн тилдерде негиздер
                            аралаш колдонулат: мисалы, французчада 79 — <em>soixante dix-neuf</em> (60 + 10 + 9), ал эми уэлш тилинде —{" "}
                            <em>pedwar ar bymtheg a thrigain</em> (4 + (5 + 10) + (3 × 20)).
                        </p>
                        <p>
                            Эң өнүккөнү — разряддык (позициялык) система. Мындай системалар негизине жараша классификацияланат. Ондук системада 0–9 чейин он
                            цифра колдонулат, цифранын орду анын кайсы даражадагы 10 менен көбөйтүлөрүн билдирет: 304 = 3×100 + 0×10 + 4×1, тактап айтканда
                            3×10² + 0×10¹ + 4×10⁰. Нөл бул жерде өтө маанилүү, анткени ал “разряддарды өткөрүп кетүүгө” мүмкүнчүлүк берет.
                        </p>
                        <p>
                            Арифметикалык амалдарды позициялык системада аткаруу кыйла жеңил. Кошумчалуу системаларда ар бир разряд үчүн өзүнчө белги керек
                            болсо, позициялык системада болгону он белги жетиштүү.
                            <sup className="text-gray-400">[10]</sup>
                        </p>
                        <p>
                            Азыркы учурда бүткүл дүйнөдө ондук позициялык система колдонулат. Айрым учурда 1000 негиз да пайдаланылат, анда цифралар үчтөн
                            топтолот: мисалы, 1,000,234,567.
                        </p>
                        <p>
                            Компьютерлерде негизги система — 2 негиздүү позициялык система (бинар). Ал болгону эки цифрага — 0 жана 1ге таянат. Бинарды үчтөн
                            топтоо аркылуу 8 негиздүү (octal), төрттөн топтоо аркылуу 16 негиздүү (hexadecimal) системалар алынат. Өтө чоң бүтүн сандар үчүн 2³²
                            же 2⁶⁴ негиздүү системалар колдонулат.
                        </p>
                        <p>
                            Айрым биологиялык системаларда да бирдик системасы колдонулат. Мисалы, канаттуулардын сайрашын башкарган нейрондук чынжырларда unary
                            код колдонулат. Канаттуулардын мээсиндеги <strong>HVC</strong> борбору үйрөнүү жана сайроодо маанилүү ролду ойнойт.
                        </p>
                        <p>
                            Цифралар эки түргө бөлүнөт: арифметикалык (0–9) жана геометриялык (1, 10, 100...). Белги–маани системалары геометриялык цифраларды,
                            позициялык системалар арифметикалык цифраларды гана колдонот. Бирок оозеки тилде экөө тең колдонулат.
                        </p>
                        <p>
                            Информатикада кээде <em>биектив санак</em> деп аталган өзгөртүлгөн <em>k</em>-негиздүү система колдонулат. Анда цифралар 1, 2, …,{" "}
                            <em>k</em> болуп, нөл бош сап менен көрсөтүлөт. Бул система бардык сандар менен саптар арасында так шайкештик орнотот. Биектив
                            1-негиздүү система — бирдик системасына барабар.
                        </p>
                    </section>

                    {/* <section>
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
                    </section> */}

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
                    <h2>Адабияттар</h2>
                    <ol>
                        <li>
                            O'Connor, J. J. жана Robertson, E. F. <em>Arabic Numerals</em> (Араб цифралары). Январь 2001.
                        </li>
                        <li>
                            Bill Casselman. "All for Nought" (Баары бекер). <em>Feature Column</em>. AMS. Февраль 2007.
                        </li>
                        <li>
                            Bradley, Jeremy. "How Arabic Numbers Were Invented" (Араб цифралары кандай ойлоп табылган). <em>theclassroom.com</em>.
                        </li>
                        <li>
                            "Wissanu rejects dumping Thai numerals" (Виссану тай цифраларын жокко чыгарууну четке какты). <em>Bangkok Post</em>. 31 Май 2022.
                        </li>
                        <li>O'Connor, John J.; Robertson, Edmund F. (2004). "Chinese numerals" (Кытай цифралары). University of St Andrews.</li>
                        <li>
                            Shen Kuo жана башкалар (1999). <em>The Nine Chapters on the Mathematical Art</em> (Математикалык искусствонун тогуз бөлүгү). Oxford
                            University Press.
                        </li>
                        <li>
                            "Mathematics in the Near and Far East" (Жакынкы жана Алыскы Чыгыштагы математика). <em>grmath4.phpnet.us</em>.
                        </li>
                        <li>
                            Martzloff, Jean-Claude (2007). <em>A History of Chinese Mathematics</em> (Кытай математикасынын тарыхы).
                        </li>
                        <li>
                            David Eugene Smith; Louis Charles Karpinski (1911). <em>The Hindu–Arabic numerals</em> (Индо-араб цифралары).
                        </li>
                        <li>
                            Chowdhury, Arnab. <em>Design of an Efficient Multiplier using DBNS</em> (DBNS негизинде натыйжалуу көбөйткүч долбоору). GIAP
                            Journals.
                        </li>
                        <li>
                            Fiete, I. R.; Seung, H. S. (2007). "Neural network models of birdsong..." (Куш ырларынын нейрондук тармак моделдери...){" "}
                            <em>New Encyclopedia of Neuroscience</em> (Жаңы нейроилим энциклопедиясында).
                        </li>
                    </ol>

                    <h2>Булактар</h2>
                    <ul>
                        <li>
                            Georges Ifrah. <em>The Universal History of Numbers</em> (Сандардын жалпы тарыхы). Wiley, 1999.
                        </li>
                        <li>
                            D. Knuth. <em>The Art of Computer Programming</em> (Компьютердик программалоо өнөрү). Addison–Wesley, 3-басылыш.
                        </li>
                        <li>
                            A.L. Kroeber. <em>Handbook of the Indians of California</em> (Калифорния индейлеринин колдонмосу). Smithsonian Institution.
                        </li>
                        <li>
                            J.P. Mallory; D.Q. Adams. <em>Encyclopedia of Indo-European Culture</em> (Индо-Европа маданияты энциклопедиясы).
                        </li>
                        <li>
                            Hans J. Nissen жана башкалар (1993). <em>Archaic Bookkeeping</em> (Архаикалык эсеп жүргүзүү). University of Chicago Press.
                        </li>
                        <li>
                            Schmandt-Besserat, Denise (1996). <em>How Writing Came About</em> (Жазуу кандайча пайда болгон). University of Texas Press.
                        </li>
                        <li>
                            Zaslavsky, Claudia (1999). <em>Africa Counts</em> (Африка эсептейт). Chicago Review Press.
                        </li>
                    </ul>
                </Container>
            </article>
        </main>
    );
};

export default NumeralSystem;
