import type React from "react";
import Navbar from "@/src/components/global/header/navbar";
import Footer from "@/src/components/global/footer";
// import Sidebar from "@/src/components/global/left-sidebar";
import { Language } from "@/src/lib/types/language";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    const lang: Language = "ar";

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar lang={lang} page="article" />
            <div className="flex flex-1">
                {/* <Sidebar lang={lang} /> */}
                <main className="flex-1">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
