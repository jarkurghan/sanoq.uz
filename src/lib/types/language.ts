import { AlternateLinkDescriptor } from "next/dist/lib/metadata/types/alternative-urls-types";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

export type Language =
    | "uz"
    | "en"
    | "ru"
    | "tg"
    | "tr"
    | "az"
    | "kk"
    | "ky"
    | "tk"
    | "tt"
    | "ug"
    | "ba"
    | "ar";

export type MetaLang = Languages<string | URL | AlternateLinkDescriptor[] | null>;
