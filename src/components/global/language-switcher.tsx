import Link from "next/link";
import { Button } from "@/src/components/utils/button";
import { DropdownMenu } from "@/src/components/utils/dropdown-menu";
import { DropdownMenuItem } from "@/src/components/utils/dropdown-menu";
import { DropdownMenuContent } from "@/src/components/utils/dropdown-menu";
import { DropdownMenuTrigger } from "@/src/components/utils/dropdown-menu";
import { LANGUAGES } from "@/src/lib/constants/languages";
import { Language } from "@/src/lib/types/language";
import { Base } from "@/src/lib/types/base";
import { Check } from "lucide-react";
import { Globe } from "lucide-react";

type Props = { lang: Language; page: "article" | "converter" | "about" | "calculator"; base?: Base };
export default function LanguageSwitcher({ lang: language, page, base }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" type="button" aria-label="change-lang">
                    <Globe className="h-6 w-6" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {LANGUAGES.map((lang) => (
                    <MenuItem base={base} lang={lang} language={language} page={page} key={lang.code} />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

type PropsMenuItem = {
    base?: Base;
    language: Language;
    lang: { code: Language; name: string };
    page: "article" | "converter" | "about" | "calculator";
};
function MenuItem({ page, lang, language, base }: PropsMenuItem) {
    const icon = <Check className="h-4 w-4 ml-2" />;

    switch (page) {
        case "about":
            return (
                <DropdownMenuItem>
                    <Link href={`/${lang.code}/about`} className="flex items-center justify-between">
                        {lang.name} {language === lang.code && icon}
                    </Link>
                </DropdownMenuItem>
            );

        case "article":
            return (
                <DropdownMenuItem>
                    {language === lang.code ? (
                        <div className="flex items-center justify-between">
                            {lang.name} {icon}
                        </div>
                    ) : (
                        <Link href={`/${lang.code}/article`}>{lang.name}</Link>
                    )}
                </DropdownMenuItem>
            );

        case "converter":
            return (
                <DropdownMenuItem>
                    <Link href={`/${lang.code}`} className="flex items-center justify-between">
                        {lang.name} {language === lang.code && icon}
                    </Link>
                </DropdownMenuItem>
            );

        case "calculator":
            return (
                <DropdownMenuItem>
                    <Link href={`/${lang.code}/calculator/${base}`} className="flex items-center justify-between">
                        {lang.name} {language === lang.code && icon}
                    </Link>
                </DropdownMenuItem>
            );

        default:
            return <div></div>;
    }
}
