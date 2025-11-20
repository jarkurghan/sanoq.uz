import { Article } from "@/src/lib/types/article";
import { ARTICLES_001_PVNSS } from "./pozitsion-va-nopozitsion-sanoq-sistemalari";
import { ARTICLES_002_SS } from "./sanoq-sistemasi";
import { History } from "lucide-react";
import { Hash } from "lucide-react";

export const ARTICLES = [
    ...ARTICLES_002_SS,
    {
        title: "O‘nlik sanoq sistemasi tarixi",
        description: "O‘nlik sanoq sistemasi tarixi, hind olimlari hissasi, al-Xorazmiy va nol raqami haqida tushunchalar",
        href: "/uz/article/onlik-sanoq-sistemasi-tarixi",
        lang: "uz",
        icon: History,
        color: "fuchsia",
    },
    {
        title: "Sanoq sistemalari farqi: Son, raqam va qiymat",
        description: "Sanoq sistemalariga oid asosiy tushunchalar: son, raqam va qiymat orasidagi farq",
        href: "/uz/article/sanoq-sistemalari-farqi-son-raqam-va-qiymat",
        lang: "uz",
        icon: Hash,
        color: "red",
    },
    ...ARTICLES_001_PVNSS,
] satisfies readonly Article[];
