import type {Metadata} from "next";
import {Courier_Prime} from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import {ReactNode} from "react";

const courierPrime = Courier_Prime({
    variable: "--font-courier-prime",
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
    title: {
        template: "%s | Alexander Prechtel",
        default: "Alexander Prechtel",
    },
    description: "Personal Webpage",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${courierPrime.variable}`}>
        {children}
        </body>
        </html>
    );
}
