"use client"
import {usePathname} from "next/navigation";

export interface ILink {
    Link: string
    Title: string
}

export function Navigation() {
    const links: ILink[] = [
        {Link: "/", Title: "Home"},
        {Link: "about-me", Title: "About Me"},
        {Link: "projects", Title: "Projects"},
        {Link: "leave-a-note", Title: "Leave a Note"}
    ]

    const path = usePathname().slice(1)

    return (
        <div className={`flex gap-4 items-center justify-center w-full`}>
            {links.map((link, index) => (
                <div key={index}>
                    <a href={link.Link}
                       className={`${(path == link.Link || path == link.Link.slice(1)) ? "underline" : ""}`}>{link.Title}</a>
                </div>
            ))}
        </div>
    )
}