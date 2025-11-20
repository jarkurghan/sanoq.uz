import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/src/components/common/container";
import { ARTICLES_002_SS_METALANG } from "@/src/lib/constants/article/sanoq-sistemasi";
import { SEO } from "@/src/lib/utils/generate-metadata";

export function generateMetadata(): Metadata {
    const lang = "kk";
    const url = ARTICLES_002_SS_METALANG[lang] as string;

    const title = "Санау жүйелері — жалпы шолу, тарихы және түрлері";
    const description =
        "Санау жүйелері туралы жан-жақты мақала: олардың тарихы, негізгі түрлері және сандардың мәдениетте, математикада және компьютерлік технологияларда берілуі.";
    const keywords = [
        "санау жүйесі",
        "сан жүйесі",
        "үнді-араб цифрлары",
        "сандар тарихы",
        "ондық жүйе",
        "рим цифрлары",
        "майя цифрлары",
        "математика",
        "сандарды жазу",
    ].join(", ");

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_002_SS_METALANG, lang, pageType: "article" });
}

const NumeralSystem = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Санақ системасы</h1>
                    </header>
                    <section>
                        <h2 className="hidden">Санақ системасы</h2>
                        <p>
                            Санақ системасы — сандарды жазбаша түрде бейнелеу тәсілі, яғни белгілі бір сандар жиынын цифрлар немесе таңбалар арқылы бірізді әрі
                            жүйелі түрде көрсетуге арналған математикалық жазу жүйесі.
                        </p>
                        <p>
                            Бірдей таңбалар тізбегі әртүрлі санақ системаларында әртүрлі мағына беруі мүмкін. Мысалы,{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1 py-0.5 rounded">"11"</code> жазуы ондық санақ системасында (бүгінде
                            дүниежүзінде ең көп қолданылатыны) он бірді білдіреді, екілік санақ системасында (заманауи компьютерлерде қолданылады) үшті, ал
                            бірлік санақ системасында (қол санақта) екіні көрсетеді.
                        </p>
                        <p>
                            Таңбаның білдіретін саны оның <strong>мәні</strong> деп аталады. Барлық санақ системалары бірдей сандар жиынын көрсете алмайды;
                            мысалы, Рим, Грек және Мысыр цифрларында нөл үшін арнайы таңба жоқ.
                        </p>
                        <p>Идеалды санақ системасы мынадай болуы керек:</p>
                        <ul>
                            <li>Пайдалы сандар жиынын көрсету (мысалы, барлық бүтін немесе рационал сандар)</li>
                            <li>Әр санға бірегей, нақты бейнелеу беру (немесе стандартты жазу түрінде)</li>
                            <li>Сандардың алгебралық және арифметикалық құрылымын бейнелеу</li>
                        </ul>
                        <p>
                            Мысалы, кәдімгі ондық санақ системасында нөлден басқа кез келген натурал сан басында нөл емес цифрдан басталатын шектеулі цифрлар
                            тізбегі арқылы бірегей түрде көрсетіледі.
                        </p>
                        <p>
                            Кейде санақ системаларын <em>сан системалары</em> деп те атайды. Бірақ бұл атау нақты емес, өйткені ол басқа да математикалық
                            системаларды білдіруі мүмкін: мысалы, нақты сандар системасы, кешенді сандар системасы, гиперкомплекстік сандар системалары, p-аддик
                            сандар системасы және т.б. Алайда, бұл мақала ондай системалар туралы емес.
                        </p>
                    </section>

                    <section>
                        <h2>Тарих</h2>
                        <p>
                            Ғалымдардың айтуынша, алғашқы санау системалары әр өркениетте әртүрлі болған: вавилондықтар 60-тық системаны қолданған, мысырлықтар
                            иероглифтік сандарды дамытқан, қытайлықтар таяқша сандарын пайдаланған. Майялар өз бетінше 20-лық (висизимал) системаны жасап, онда
                            нөл үшін арнайы белгі енгізген.
                        </p>
                        <Image
                            src="/images/historial_numeric_system.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 rounded-lg p-4"
                            alt="maya"
                            width={360}
                            height={120}
                        />
                        <p>
                            Үнді математиктері, мысалы VII ғасырда өмір сүрген <strong>Брахмагупта</strong>, арифметикалық ережелерді жүйелеуде және нөл ұғымын
                            қалыптастыруда маңызды рөл атқарды. Кейінірек ислам әлеміндегі ғалымдар, соның ішінде <strong>Әл-Хорезми</strong>, бұл идеяларды
                            жетілдірді. Санақ системалары дамыған сайын, позициялық жазудың тиімділігі мен нөлдің енгізілуі қазіргі заманғы сандық жазудың
                            қалыптасуына, сондай-ақ әлемдік сауда, ғылым мен технологияға үлкен әсер етті.
                        </p>
                        <p>
                            Алғашқы нағыз жазба позициялық санау системасы <strong>үнді–араб санау системасы</strong> болып саналады. Бұл система VII ғасырда
                            Үндістанда қалыптасқан
                            <sup className="text-gray-400">[1]</sup>, бірақ ол заманауи түрінде емес еді, өйткені нөл цифры кеңінен қолданылмаған болатын.
                            Нөлдің орнына кейде нүкте қойылған, немесе бос орын қалдырылған. Нөлдің алғаш кеңінен танылған қолданылуы
                            <strong>876 жылы</strong> орын алды
                            <sup className="text-gray-400">[2]</sup>. Бастапқы сандар қазіргі сандарға өте ұқсас болған, тіпті цифрларды бейнелейтін таңбаларға
                            дейін
                            <sup className="text-gray-400">[1]</sup>.
                        </p>
                        <p>
                            XIII ғасырға қарай <strong>батыс араб сандары</strong> Еуропаның математикалық ортада қабылдана бастады. Мысалы,{" "}
                            <strong>Фибоначчи</strong> оларды өзінің <em>Liber Abaci</em> еңбегінде қолданды. Алғашында қарсылық көргенімен, үнді–араб сандары
                            есептеудегі тиімділігі арқасында, әсіресе банк ісі мен саудада, Еуропада кеңінен тарады.
                        </p>
                        <p>
                            XV ғасырда баспа станогының ойлап табылуы бұл сандардың қолданылуын стандарттады, себебі баспа математикалық еңбектер рим сандарына
                            қарағанда осы системаны таңдады. XV ғасыр соңына қарай олар күнделікті өмірде кеңінен қолданылды
                            <sup className="text-gray-400">[3]</sup>. XX ғасыр соңына қарай бүкіл әлемде компьютерсіз барлық есептеулер араб сандарымен
                            жасалатын болды, ал жергілікті сан жүйелері іс жүзінде қолданылудан шықты.
                        </p>
                        <p>
                            XVII ғасырда бұл система ғылыми еңбектерде үстемдік етіп, <strong>Исаак Ньютон</strong>
                            мен <strong>Рене Декарт</strong> сияқты ғалымдардың математикалық жетістіктеріне әсер етті. XIX–XX ғасырларда араб сандарының
                            кеңінен таралуы жаһандық қаржы, инженерия және технология дамуына жол ашты, заманауи компьютерлер мен сандық деректерді бейнелеудің
                            негізін қалады.
                        </p>
                    </section>

                    <section>
                        <h2>Сандарды қолданған басқа тарихи санау системалары</h2>
                        <Image
                            src="/images/maya.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 p-4 border rounded-lg"
                            alt="maya"
                            width={160}
                            height={120}
                        />
                        <p>
                            <strong>Майя сандарының</strong> нақты жасы белгісіз, бірақ олардың үнді–араб системасынан да көне болуы мүмкін. Бұл система{" "}
                            <em>висизимал</em> (20-лық) болып, жиырма таңбадан тұрған. Майялар нөлді бейнелеу үшін қабықша символын қолданған. Сандар тік
                            жазылып, бірліктер төменгі қатарға орналастырылған. Майяларда қазіргі ондық бөлгішке ұқсас белгі болмағандықтан, олардың системасы
                            бөлшек сандарды көрсете алмаған.
                        </p>
                        <p>
                            <strong>Тай сандары</strong> үнді–араб санау системасына ұқсас, тек таңбалары өзгеше. Бұл таңбалар қазіргі Таиландта бұрынғыдай жиі
                            қолданылмайды, бірақ әлі де араб сандарымен қатар қолданылады.
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
                            <strong>Таяқша сандар</strong> — қытай және жапон математиктері қолданған жазба түрі, ондық позициялық система ретінде ондық
                            есептеулерде пайдаланылған. Таяқшалар санау тақтасына қойылып, алға не артқа жылжыту арқылы ондық разряд өзгертілген.
                        </p>
                        <p>
                            Б.з. III–V ғасырларына жататын <em>Sūnzĭ Suànjīng</em> атты математикалық еңбек бұл системаны егжей-тегжейлі сипаттайды.
                            Зерттеушілер оның кемінде б.з.д. IV ғасырдан бері қолданылып келгенін болжайды.
                            <sup className="text-gray-400">[5]</sup> Бастапқыда нөл сан емес, бос орын ретінде қабылданған.
                            <sup className="text-gray-400">[6]</sup> Кейінгі деректерде нөл мен теріс сандарды көрсету дәстүрлері енгізілген.
                        </p>
                        <p>
                            Нөл үшін дөңгелек белгі <code className="px-1 py-0.5 rounded dark:bg-background">〇</code>
                            алғаш рет 1247 жылғы <em>Тоғыз бөлімнен тұратын математикалық еңбек</em>те кездесті.
                            <sup className="text-gray-400">[7]</sup> Бұл белгінің шығу тегі белгісіз; ол шаршы таңбаны өзгерту арқылы пайда болуы мүмкін
                            <sup className="text-gray-400">[8]</sup>. <strong>Сучжоу сандары</strong> — таяқша сандардан тараған жүйе, ол әлі күнге дейін кейбір
                            сауда салаларында қолданылады.
                        </p>
                    </section>

                    <section>
                        <h2>Негізгі санау жүйелері</h2>
                        <p>
                            Ең көп қолданылатын санау жүйесі — ондық (decimal) жүйесі. Бүтін сандар нұсқасын дамытуда үнді математиктері, атап айтқанда
                            <strong>үнді–араб цифрлары жүйесін</strong> құруда ерекше рөл атқарды.
                            <sup className="text-gray-400">[8]</sup> V ғасырда Кусумпуралық <strong>Арьябхата</strong>
                            разрядтық жазуды енгізді, ал бір ғасырдан кейін <strong>Брахмагупта</strong> нөлдің белгісін енгізді. Бұл жүйе біртіндеп Үндістанмен
                            сауда және әскери байланыстар арқылы Арабияға таралды. Орта Шығыс математиктері жүйені 10-ның теріс дәрежелерін (бөлшектерді) қосу
                            арқылы дамытты. Мұны 952–953 жылдары сириялық математик <strong>Әбу-л-Хасан әл-Уқлидиси</strong> еңбегінде жазған. Ал{" "}
                            <strong>Синд ибн Әли</strong> бөлшекке арналған ондық нүкте жазуын енгізді және араб цифрлары туралы алғашқы трактатты жазды. Кейін
                            бұл жүйе Еуропаға саудагерлер арқылы таралып, Еуропада қолданылған таңбалар “араб цифрлары” деп аталды.
                        </p>
                        <p>
                            Ең қарапайым санау жүйесі — бірлік (unary) жүйесі, онда әрбір натурал сан сәйкес символдардың саны арқылы көрсетіледі. Мысалы, егер
                            белгі ретінде <code>/</code> таңдалса, жеті саны /////// түрінде жазылады. Санақ сызықшалары (tally marks) — осындай жүйенің бүгінге
                            дейін қолданылатын үлгісі. Бірлік жүйесі тек шағын сандар үшін ыңғайлы, бірақ теориялық информатикада маңызды рөл атқарады. Мысалы,
                            деректерді сығуда қолданылатын Elias gamma кодтауы бірлік жүйесін пайдаланады.
                        </p>
                        <p>
                            Бірлік жазуын жаңа мәндерге арнайы белгілер енгізу арқылы қысқартуға болады. Көбіне бұл мәндер 10-ның дәрежелері болады. Мысалы, / —
                            1, − — 10, + — 100 болса, онда 304 саны +++ ////, ал 123 саны + − − /// түрінде жазылады. Мұндай тәсіл <em>белгі–мән жазуы</em>{" "}
                            (sign-value notation) деп аталады. Ежелгі Мысыр санау жүйесі осы түрге жатса, Рим цифрлары оның өзгертілген нұсқасы болды.
                        </p>
                        <p>
                            Тағы да тиімдісі — белгілер қайталануын қысқартатын жүйелер. Мысалы, әліпбидің алғашқы тоғыз әрпін қолданып, A — “бір рет”, B — “екі
                            рет” деген мағынада алсақ, 304 санын C+ D/ деп жазуға болады. Мұндай жүйе қытай және шығыс азиялық цифрларда қолданылады. Ағылшын
                            тіліндегі сан атауы да осы түрге жатады (“three hundred four”). Бірақ көптеген тілдерде негіздер араласып келеді: мысалы,
                            французшада 79 — <em>soixante dix-neuf</em> (60 + 10 + 9), уэльш тілінде — <em>pedwar ar bymtheg a thrigain</em> (4 + (5 + 10) + (3
                            × 20)).
                        </p>
                        <p>
                            Ең жетілгені — разрядтық (позициялық) жүйе. Мұндай жүйелер негізіне қарай жіктеледі. Ондық жүйеде 0-ден 9-ға дейінгі он цифр
                            қолданылады, цифрдың орны оның 10-ның қай дәрежесімен көбейтілетінін білдіреді: 304 = 3×100 + 0×10 + 4×1, дәлірек айтқанда 3×10² +
                            0×10¹ + 4×10⁰. Нөл бұл жерде шешуші рөл ойнайды, себебі ол разрядтарды “өткізіп жіберуге” мүмкіндік береді.
                        </p>
                        <p>
                            Арифметикалық амалдарды позициялық жүйеде орындау әлдеқайда жеңіл. Қосу жүйелерінде әрбір разрядқа бөлек таңба қажет болса,
                            позициялық жүйеде (ондық негізде) бар болғаны он таңба жеткілікті.
                            <sup className="text-gray-400">[10]</sup>
                        </p>
                        <p>
                            Қазіргі кезде бүкіл әлемде ондық позициялық жүйе қолданылады. Кейде 1000 негіз де пайдаланылады, онда цифрлар үштік топтарға
                            бөлінеді: мысалы, 1,000,234,567.
                        </p>
                        <p>
                            Компьютерлерде басты жүйе — 2 негізді позициялық жүйе (бинар). Ол екі цифрға — 0 және 1-ге сүйенеді. Бинарды үштікке топтау арқылы 8
                            негізді (octal), төрттікке топтау арқылы 16 негізді (hexadecimal) жүйелер алынады. Өте үлкен бүтін сандар үшін 2³² немесе 2⁶⁴
                            негізді жүйелер қолданылады.
                        </p>
                        <p>
                            Кейбір биологиялық жүйелерде де бірлік жүйесі қолданылады. Мысалы, құстардың сайрауына жауап беретін жүйкелер тізбегінде unary
                            кодтау кездеседі. Құс миындағы <strong>HVC</strong> орталығы үйрену және сайрауда маңызды рөл атқарады.
                        </p>
                        <p>
                            Цифрлар екі түрге бөлінеді: арифметикалық цифрлар (0–9) және геометриялық цифрлар (1, 10, 100...). Белгі–мән жүйелері тек
                            геометриялық цифрларды, позициялық жүйелер тек арифметикалық цифрларды пайдаланады. Бірақ ауызекі тілде екеуі де қолданылады.
                        </p>
                        <p>
                            Информатикада кейде <em>биектив санау</em> деп аталатын өзгертілген <em>k</em>-негізді жүйе қолданылады. Онда цифрлар 1, 2, …,{" "}
                            <em>k</em> болып, нөл бос жолмен көрсетіледі. Бұл жүйе барлық сандар мен цифрлар жолдары арасында бірмәнді сәйкестік орнатады.
                            Биектив 1-негізді жүйе — бірлік жүйесіне тең.
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
                    <h2>Әдебиеттер</h2>
                    <ol>
                        <li>
                            O'Connor, J. J. және Robertson, E. F. <em>Arabic Numerals</em> (Араб цифрлары). Қаңтар 2001.
                        </li>
                        <li>
                            Bill Casselman. "All for Nought" (Бәрі бекер). <em>Feature Column</em>. AMS. Ақпан 2007.
                        </li>
                        <li>
                            Bradley, Jeremy. "How Arabic Numbers Were Invented" (Араб цифрлары қалай ойлап табылды). <em>theclassroom.com</em>.
                        </li>
                        <li>
                            "Wissanu rejects dumping Thai numerals" (Виссану тай цифрларын жоюды қабылдамады). <em>Bangkok Post</em>. 31 Мамыр 2022.
                        </li>
                        <li>O'Connor, John J.; Robertson, Edmund F. (2004). "Chinese numerals" (Қытай цифрлары). University of St Andrews.</li>
                        <li>
                            Shen Kuo және т.б. (1999). <em>The Nine Chapters on the Mathematical Art</em> (Математикалық өнердің тоғыз тарауы). Oxford
                            University Press.
                        </li>
                        <li>
                            "Mathematics in the Near and Far East" (Жақын және Қиыр Шығыстағы математика). <em>grmath4.phpnet.us</em>.
                        </li>
                        <li>
                            Martzloff, Jean-Claude (2007). <em>A History of Chinese Mathematics</em> (Қытай математикасының тарихы).
                        </li>
                        <li>
                            David Eugene Smith; Louis Charles Karpinski (1911). <em>The Hindu–Arabic numerals</em> (Үнді-араб цифрлары).
                        </li>
                        <li>
                            Chowdhury, Arnab. <em>Design of an Efficient Multiplier using DBNS</em> (DBNS негізінде тиімді көбейткіш жобасы). GIAP Journals.
                        </li>
                        <li>
                            Fiete, I. R.; Seung, H. S. (2007). "Neural network models of birdsong..." (Құс әнінің нейрондық желі модельдері...){" "}
                            <em>New Encyclopedia of Neuroscience</em> (Жаңа нейроғылым энциклопедиясында).
                        </li>
                    </ol>

                    <h2>Дереккөздер</h2>
                    <ul>
                        <li>
                            Georges Ifrah. <em>The Universal History of Numbers</em> (Сандардың жалпы тарихы). Wiley, 1999.
                        </li>
                        <li>
                            D. Knuth. <em>The Art of Computer Programming</em> (Компьютерлік бағдарламалаудың өнері). Addison–Wesley, 3-басылым.
                        </li>
                        <li>
                            A.L. Kroeber. <em>Handbook of the Indians of California</em> (Калифорния үндістерінің анықтамалығы). Smithsonian Institution.
                        </li>
                        <li>
                            J.P. Mallory; D.Q. Adams. <em>Encyclopedia of Indo-European Culture</em> (Үнді-еуропа мәдениеті энциклопедиясы).
                        </li>
                        <li>
                            Hans J. Nissen және т.б. (1993). <em>Archaic Bookkeeping</em> (Архаикалық бухгалтерия). University of Chicago Press.
                        </li>
                        <li>
                            Schmandt-Besserat, Denise (1996). <em>How Writing Came About</em> (Жазу қалай пайда болды). University of Texas Press.
                        </li>
                        <li>
                            Zaslavsky, Claudia (1999). <em>Africa Counts</em> (Африка санайды). Chicago Review Press.
                        </li>
                    </ul>
                </Container>
            </article>
        </main>
    );
};

export default NumeralSystem;
