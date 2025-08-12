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

    const links: ILink[] = [
        {Link: "/", Title: "Home"},
        {Link: "projects", Title: "Projects"},
        {Link: "leave-a-note", Title: "Leave a Note"}
    ]

    return (
        <html lang="en">
        <body
            className={`w-screen h-screen rootBackground p-8 2xl:p-24 text-background dark`}
        >
        <div className="flex gap-4 w-full h-full backdrop-blur-[2px] bg-foreground/75 p-8 2xl:p-16 rounded-lg">
            <InfoPanel/>
            <div className={`w-full h-full`}>
                <div className={`flex items-center justify-center w-full h-1/12 2xl:h-1/7`}>
                    <Navigation links={links}/>
                </div>
                <div className={`w-full h-11/12 2xl:h-6/7 border-2 border-foreground rounded-lg`}>
                    {children}
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
