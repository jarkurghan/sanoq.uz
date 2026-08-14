import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { track, buildPayload } from "tashrif";
import { Language } from "./lib/types/language";
import { LANGUAGES } from "./lib/constants/languages";

const languages: Language[] = LANGUAGES.map((lang) => lang.code);
const defaultLang: Language = "uz";

function withTashrif(request: NextRequest, response: NextResponse, event: NextFetchEvent, shouldTrack = true) {
    const { payload, setCookies } = buildPayload(request);
    for (const c of setCookies ?? []) response.cookies.set(c.name, c.value, c.options);
    if (shouldTrack) event.waitUntil(track(payload));
    return response;
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
    const pathname = request.nextUrl.pathname;
    const response = NextResponse.next();

    // Pathname language yo'qligini tekshiradi
    const isMissingLanguage = languages.every((language) => !pathname.startsWith(`/${language}/`) && pathname !== `/${language}`);

    if (!isMissingLanguage) {
        // URL da til bor: uni cookie ga yozamiz
        const currentLang = languages.find((language) => pathname === `/${language}` || pathname.startsWith(`/${language}/`)) as Language;
        response.cookies.set("language", currentLang, {
            path: "/",
            maxAge: 60 * 60 * 24 * 30,
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        return withTashrif(request, response, event);
    }

    // Agar language yo'q bo'lsa, redirect qilish
    if (isMissingLanguage) {
        // til yo'q bo'lganda eng afzal til topiladi:

        // 1. cookie
        const cookieLang = request.cookies.get("language")?.value as Language;
        if (cookieLang && languages.includes(cookieLang as Language)) {
            return withTashrif(request, NextResponse.redirect(new URL(`/${cookieLang}${pathname}`, request.url)), event, false);
        }

        // 2. foydalanuvchining afzal tili: Accept-Language header orqali
        const acceptLanguage = request.headers.get("accept-language");
        const supportedLang = languages.find((l) => acceptLanguage?.includes(l));
        if (supportedLang) {
            return withTashrif(request, NextResponse.redirect(new URL(`/${supportedLang}${pathname}`, request.url)), event, false);
        }

        // 3. default o'zbek tili
        return withTashrif(request, NextResponse.redirect(new URL(`/${defaultLang}${pathname}`, request.url)), event, false);
    }
}

export const config = {
    matcher: [
        "/:lang(uz|en|ru|tg|tr|az|kk|ky|tk|tt|ug|ba|ar)?",
        "/:lang(uz|en|ru|tg|tr|az|kk|ky|tk|tt|ug|ba|ar)?/calculator",
        "/:lang(uz|en|ru|tg|tr|az|kk|ky|tk|tt|ug|ba|ar)?/calculator/:path*",
        "/:lang(uz|en|ru|tg|tr|az|kk|ky|tk|tt|ug|ba|ar)?/article",
        "/:lang(uz|en|ru|tg|tr|az|kk|ky|tk|tt|ug|ba|ar)?/about",
        "/:lang(uz|en|ru|tg|tr|az|kk|ky|tk|tt|ug|ba|ar)?/article/:path*",
    ],
};
