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
    const isFile = /\.[a-z0-9]+$/i.test(pathname);

    if (!isFile) {
        const isMissingLanguage = languages.every((language) => !pathname.startsWith(`/${language}/`) && pathname !== `/${language}`);

        if (!isMissingLanguage) {
            const currentLang = languages.find((language) => pathname === `/${language}` || pathname.startsWith(`/${language}/`)) as Language;
            const response = NextResponse.next();
            response.cookies.set("language", currentLang, {
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
                httpOnly: false,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });
            return withTashrif(request, response, event);
        }

        const cookieLang = request.cookies.get("language")?.value as Language;
        if (cookieLang && languages.includes(cookieLang as Language)) {
            return withTashrif(request, NextResponse.redirect(new URL(`/${cookieLang}${pathname}`, request.url)), event, false);
        }

        const acceptLanguage = request.headers.get("accept-language");
        const supportedLang = languages.find((l) => acceptLanguage?.includes(l));
        if (supportedLang) {
            return withTashrif(request, NextResponse.redirect(new URL(`/${supportedLang}${pathname}`, request.url)), event, false);
        }

        return withTashrif(request, NextResponse.redirect(new URL(`/${defaultLang}${pathname}`, request.url)), event, false);
    }

    return withTashrif(request, NextResponse.next(), event);
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
