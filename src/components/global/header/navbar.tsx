import Link from "next/link";
import ShareAppURL from "@/src/components/global/share";
import ThemeToggle from "@/src/components/global/theme-toggle";
import LanguageSwitcher from "@/src/components/global/language-switcher";
import CalculatorSettings from "@/src/components/calculator/settings";
import MobMenu from "@/src/components/global/header/mobile-menu";
import NavLogo from "@/src/components/global/header/logo";
import { getTranslation } from "@/src/lib/translater/i18n";
import { Button } from "@/src/components/utils/button";
import { Language } from "@/src/lib/types/language";
import { Base } from "@/src/lib/types/base";
import { cn } from "@/src/lib/utils/classname";
import { Settings2 } from "lucide-react";
import { Share2 } from "lucide-react";
import { Home } from "lucide-react";

type Props = { lang: Language; base?: Base; page: "article" | "converter" | "about" | "calculator" };
export default function Navbar({ lang, base, page }: Props) {
    const t = getTranslation(lang);

    const navItemCN = "flex items-center font-medium transition-colors hover:text-primary";

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="w-full flex h-14 items-center">
                {/* to-do: max-w 4xl or 6xl */}
                <div className="px-2 w-full max-w-6xl mx-auto flex items-center space-x-4 lg:space-x-8">
                    <NavLogo lang={lang} />

                    <nav className="hidden lg:flex items-center space-x-4 lg:space-x-8">
                        <Link href={`/${lang}`} className={cn(navItemCN, page === "converter" ? "text-primary" : "")}>
                            <Home className="mr-2 h-4 w-4" />
                            {t("nav.conversion")}
                        </Link>
                        <Link href={`/${lang}/calculator`} className={cn(navItemCN, page === "calculator" ? "text-primary" : "")}>
                            <Home className="mr-2 h-4 w-4" />
                            {t("nav.calculator")}
                        </Link>
                        <Link href={`/${lang}/article`} className={cn(navItemCN, page === "article" ? "text-primary" : "")}>
                            <Home className="mr-2 h-4 w-4" />
                            {t("nav.article")}
                        </Link>
                        {/* <Link href={`/${lang}/code`} className={cn(navItemCN, page === "code" ? "text-primary" : "")}>
                            <Home className="mr-2 h-4 w-4" />
                            {t("nav.code")}
                        </Link> */}
                        <Link href={`/${lang}/about`} className={cn(navItemCN, page === "about" ? "text-primary" : "")}>
                            <Home className="mr-2 h-4 w-4" />
                            {t("nav.about")}
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center absolute right-2">
                    {page === "calculator" && (
                        <CalculatorSettings lang={lang} base={base as Base} asChild>
                            <Button variant="ghost" size="icon">
                                <Settings2 className="h-6 w-6" />
                                <span className="sr-only">Settings</span>
                            </Button>
                        </CalculatorSettings>
                    )}
                    <ShareAppURL lang={lang}>
                        <Button variant="ghost" size="icon">
                            <Share2 className="h-6 w-6" />
                            <span className="sr-only">Share this page</span>
                        </Button>
                    </ShareAppURL>
                    <ThemeToggle />
                    <LanguageSwitcher lang={lang} page={page} base={base} />
                    <MobMenu lang={lang} page={page} />
                </div>
            </div>
        </header>
    );
}
