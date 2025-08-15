import type {Metadata} from "next";
import "./globals.css";
import {InfoPanel} from "@/components/InfoPanel";
import {ILink, Navigation} from "@/components/Navigation";

export const metadata: Metadata = {
    title: "luca-naujoks",
    description: "Get a glance of my capabilities",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`w-screen h-screen bg-white`}
        >
        <div className={`w-full my-4`}><Navigation/></div>
                    {children}
        </body>
        </html>
    );
}
