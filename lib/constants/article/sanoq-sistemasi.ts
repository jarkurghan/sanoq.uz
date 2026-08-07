import { Color } from "@/lib/types/color";
import { IconType } from "@/lib/types/icon";
import { MetaLang } from "@/lib/types/language";
import { Article } from "@/lib/types/article";
import { Calculator } from "lucide-react";

const icon: IconType = Calculator;
const color: Color = "cyan";

export const ARTICLES_002_SS = [
    {
        title: "Sanoq sistemasi — umumiy ko‘rinish, tarix va turlari",
        description:
            "Sanoq sistemalari, ularning tarixi, asosiy turlari va sonlarning madaniyat, matematika hamda kompyuter texnologiyalarida qanday ifodalanishi haqida batafsil maqola.",
        href: "/uz/article/sanoq-sistemasi",
        lang: "uz",
        icon,
        color,
    },
    {
        title: "Numeral System",
        description:
            "An in-depth article about numeral systems, their history, different types, and how numbers are represented across cultures, mathematics, and computing.",
        href: "/en/article/numeral-system",
        lang: "en",
        icon,
        color,
    },
    {
        title: "Системы счисления — обзор, история и виды",
        description:
            "Подробная статья о системах счисления: их истории, основных типах и о том, как числа выражаются в культуре, математике и компьютерных технологиях.",
        href: "/ru/article/sistemy-schisleniya",
        lang: "ru",
        icon,
        color,
    },
    {
        title: "Санау жүйелері — жалпы шолу, тарихы және түрлері",
        description:
            "Санау жүйелері туралы жан-жақты мақала: олардың тарихы, негізгі түрлері және сандардың мәдениетте, математикада және компьютерлік технологияларда берілуі.",
        href: "/kk/article/sanau-zhuyeleri",
        lang: "kk",
        icon,
        color,
    },
    {
        title: "Эсептөө системалары — жалпы кароо, тарыхы жана түрлөрү",
        description:
            "Эсептөө системалары тууралуу кеңири макала: тарыхы, негизги түрлөрү жана сандардын маданиятта, математикада жана компьютер технологияларында көрсөтүлүшү.",
        href: "/ky/article/eseptoo-sistemasy",
        lang: "ky",
        icon,
        color,
    },
    {
        title: "Sayı sistemleri — genel bakış, tarih ve türler",
        description:
            "Sayı sistemleri üzerine kapsamlı makale: tarihleri, temel türleri ve sayıların kültürde, matematikte ve bilgisayar teknolojilerinde nasıl ifade edildiği.",
        href: "/tr/article/sayi-sistemleri",
        lang: "tr",
        icon,
        color,
    },
    {
        title: "Say sistemləri — ümumi baxış, tarix və növlər",
        description:
            "Say sistemləri haqqında ətraflı məqalə: onların tarixi, əsas növləri və ədədlərin mədəniyyətdə, riyaziyyatda və kompüter texnologiyalarında ifadəsi.",
        href: "/az/article/say-sistemleri",
        lang: "az",
        icon,
        color,
    },
    {
        title: "Исәпләү системалары — гомуми күзәтү, тарих һәм төрләр",
        description:
            "Исәпләү системалары турында җентекле мәкалә: тарихы, төп төрләре һәм саннарның мәдәнияттә, математикада, компьютер технологияләрендә чагылышы.",
        href: "/tt/article/isepleu-sistemasy",
        lang: "tt",
        icon,
        color,
    },
    {
        title: "Иҫәпләү системалары — дөйөм күҙәтеү, тарих һәм төрҙәр",
        description:
            "Иҫәпләү системалары тураһында ентекле мәҡәлә: тарихы, төп төрҙәре һәм һандарҙың мәҙәниәттә, математикала һәм компьютер технологияларында бирелеше.",
        href: "/ba/article/isepleu-sistemahy",
        lang: "ba",
        icon,
        color,
    },
    {
        title: "Hasaplaýyş sistemalary — umumy syn, taryh we görnüşler",
        description:
            "Hasaplaýyş sistemalary barada giňişleýin makala: taryhy, esasy görnüşleri we sanlaryň medeniýetde, matematikada hem-de kompýuter tehnologiýalarynda beýan edilişi.",
        href: "/tk/article/hasaplayys-sistemasy",
        lang: "tk",
        icon,
        color,
    },
    {
        title: "ساناق سىستېمىلىرى — ئومۇمىي قاراش، تارىخ ۋە تۈرلەر",
        description:
            "ساناق سىستېمىلىرى ھەققىدە تەپسىلىي بايان: تارىخى، ئاساسلىق تۈرلىرى ۋە سانلارنىڭ مەدەنىيەت، ماتېماتىكا ۋە كومپيۇتېر تېخنىكىسىدا ئىپادىلىنىشى.",
        href: "/ug/article/san-hesaplash-sistemliri",
        lang: "ug",
        icon,
        color,
    },
    {
        title: "Системаҳои ҳисоб — шарҳи умумӣ, таърих ва навъҳо",
        description:
            "Мақолаи муфассал дар бораи системаҳои ҳисоб: таърих, навъҳои асосӣ ва тарзи ифодаи ададҳо дар фарҳанг, математика ва технологияҳои компютерӣ.",
        href: "/tg/article/sistemahoi-hisob",
        lang: "tg",
        icon,
        color,
    },
    {
        title: "أنظمة العد — نظرة عامة، التاريخ والأنواع",
        description: "مقال تفصيلي عن أنظمة العد: تاريخها، أنواعها الأساسية وكيف تُعبَّر الأعداد في الثقافة والرياضيات وتقنيات الحاسوب.",
        href: "/ar/article/anzimat-al-add",
        lang: "ar",
        icon,
        color,
    },
] satisfies readonly Article[];

export const ARTICLES_002_SS_METALANG: MetaLang = ARTICLES_002_SS.reduce(
    (obj, article) => {
        obj[article.lang] = `https://sanoq.uz${article.href}`;
        return obj;
    },
    { "x-default": "https://sanoq.uz/article" } as MetaLang
);
