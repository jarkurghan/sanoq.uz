"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogHeader, DialogDescription } from "@/src/components/utils/dialog";
import { DialogContent, DialogTitle, DialogTrigger } from "@/src/components/utils/dialog";
import { usePathname } from "next/navigation";
import { ClipboardCopy, Mail, Send } from "lucide-react";
import { Button } from "@/src/components/utils/button";
import { getTranslation } from "@/src/lib/translater/i18n";
import { Language } from "@/src/lib/types/language";

export default function ShareAppURL({ children, lang }: { children?: React.ReactNode; lang: Language }) {
    const t = getTranslation(lang);
    const pathname = usePathname();
    const [url, setUrl] = useState("https://sanoq.uz");
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const fullUrl = `${window.location.origin}${pathname}`;
        setUrl(fullUrl);
    }, [pathname]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    return (
        <Dialog>
            <DialogTrigger className="flex items-center justify-center" asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("share.title")}</DialogTitle>
                    <DialogDescription>{t("share.description")}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="text-sm break-all bg-card border rounded p-2">{url}</div>

                    <div className="flex gap-2 flex-wrap">
                        <Button variant="outline" asChild>
                            <a href={`https://t.me/share/url?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
                                <Send className="w-4 h-4 mr-2" /> {t("share.telegram")}
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href={`mailto:?subject=Sahifa havolasi&body=Mana bu sahifani ko‘r: ${encodeURIComponent(url)}`}>
                                <Mail className="w-4 h-4 mr-2" /> {t("share.email")}
                            </a>
                        </Button>
                        <Button variant="outline" onClick={copyToClipboard}>
                            <ClipboardCopy className="w-4 h-4 mr-2" />
                            {isCopied ? t("share.copied") : t("share.copy")}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
