import Link from "next/link";
import Image from "next/image";
import { Language } from "@/src/lib/types/language";

export default function NavLogo({ lang }: { lang: Language }) {
    return (
        <Link href={`/${lang}`}>
            <div className="flex items-center justify-center w-8 h-8 rounded-lg border-2 border-blue-300">
                <Image src="/favicon.ico" alt="logo" width={24} height={24} />
            </div>
        </Link>
    );
}
