import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/contexts/theme-context";
import "@/src/styles/globals.scss";
import "@/src/styles/h.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <html suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={inter.className}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
