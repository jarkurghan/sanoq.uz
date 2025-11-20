"use client";

import Link from "next/link";
import { cn } from "@/src/lib/utils/classname";
import { Button } from "@/src/components/utils/button";
import { BookOpen, Calculator, Home, Info } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { getTranslation } from "@/src/lib/translater/i18n";
import { Language } from "@/src/lib/types/language";

export default function MobMenu({ lang, page }: { lang: Language; page: "article" | "converter" | "about" | "calculator" }) {
    const t = getTranslation(lang);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItemCNMb = "flex items-center rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-primary";
    const navItems = [
        { name: "nav.conversion", href: `/${lang}`, icon: Home, isActive: page === "converter" },
        { name: "nav.calculator", href: `/${lang}/calculator`, icon: Calculator, isActive: page === "calculator" },
        { name: "nav.article", href: `/${lang}/article`, icon: BookOpen, isActive: page === "article" },
        // { name: "nav.code", href: `/${lang}/code`, icon: Code, isActive: page === "code" },
        { name: "nav.about", href: `/${lang}/about`, icon: Info, isActive: page === "about" },
    ];

    const close = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        if (window) {
            if (mobileMenuOpen) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "auto";
        }
    }, [mobileMenuOpen]);

    return (
        <Fragment>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
            </Button>
            {mobileMenuOpen && (
                <div className="fixed top-14 right-0 px-2 z-50 bg-background/95 backdrop-blur-sm flex flex-col w-full h-[100vh] border-t">
                    <nav className="flex flex-col py-2 space-y-2">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} onClick={close} className={cn(navItemCNMb, item.isActive ? "bg-muted text-primary" : "")}>
                                <item.icon className="mr-2 h-4 w-4" />
                                {t(item.name)}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </Fragment>
    );
}
