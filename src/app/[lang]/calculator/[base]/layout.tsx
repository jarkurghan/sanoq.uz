import type { ReactNode } from "react";
import { Language } from "@/src/lib/types/language";
import { Base } from "@/src/lib/types/base";
import Navbar from "@/src/components/global/header/navbar";
import Footer from "@/src/components/global/footer";

type Props = {
    children: ReactNode;
    params: Promise<{ lang: Language; base: Base }>;
};

export default async function Layout({ children, params }: Props) {
    const { lang, base } = await params;

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar lang={lang} page="calculator" base={base} />
            <div className="flex flex-1">
                <main className="flex-1">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
