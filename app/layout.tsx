"use client";

import "@/utils/extension";
import Footer from "@/components/footer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import "../styles/globals.css";

export const metadata = {
    title: "JSL e-Catalogue",
    description: "JSL e-catalogue, cari product JSL sesuai dengan jenis mobil",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en" className="bg-slate-50">
                <head>
                    <link rel="icon" type="image" href="/favicon.png"></link>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
                </head>
                <body className="container mx-auto md:w-[350px] shadow-2xl bg-white">
                    {children}
                    <Footer />
                    <ProgressBar height="4px" color="#FFFFFF" options={{ showSpinner: true, parent: "body" }} shallowRouting />
                </body>
            </html>
        </>
    );
}
