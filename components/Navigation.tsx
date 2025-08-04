"use client"
import {usePathname} from "next/navigation";

export interface ILink {
    Link: string
    Title: string
}

export function Navigation({links}: { links: ILink[] }) {

    const path = usePathname().slice(1)

    return (
        <div className={`flex gap-4 items-center justify-center w-full`}>
            {links.map((link, index) => (
                <div key={index}>
                    <a href={link.Link}
                       className={`${(path == link.Link || path == link.Link.slice(1)) ? "text-foreground font-bold underline underline-offset-4" : "text-background font-medium hover:underline underline-offset-4"}`}>{link.Title}</a>
                </div>
            ))}
        </div>
    )
}