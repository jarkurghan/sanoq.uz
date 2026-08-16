import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/theme-context";
import { Tashrif } from "tashrif/react";
import "@/styles/globals.scss";
import "@/styles/h.css";

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
                <Tashrif />
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
