import { Color } from "@/src/lib/types/color";
import { IconType } from "@/src/lib/types/icon";
import { Language } from "@/src/lib/types/language";

export type Article = {
    title: string;
    description: string;
    lang: Language;
    icon: IconType;
    color: Color;
} & (
    | { lang: "uz"; href: `/uz/article/${string}` }
    | { lang: "en"; href: `/en/article/${string}` }
    | { lang: "ru"; href: `/ru/article/${string}` }
    | { lang: "tg"; href: `/tg/article/${string}` }
    | { lang: "tr"; href: `/tr/article/${string}` }
    | { lang: "az"; href: `/az/article/${string}` }
    | { lang: "kk"; href: `/kk/article/${string}` }
    | { lang: "ky"; href: `/ky/article/${string}` }
    | { lang: "tk"; href: `/tk/article/${string}` }
    | { lang: "tt"; href: `/tt/article/${string}` }
    | { lang: "ug"; href: `/ug/article/${string}` }
    | { lang: "ba"; href: `/ba/article/${string}` }
    | { lang: "ar"; href: `/ar/article/${string}` }
);
