"use client"
import {usePathname} from "next/navigation";

export interface ILink {
    Link: string
    Title: string
    External?: boolean
}

export function Navigation() {
    const links: ILink[] = [
        {Link: "/", Title: "Home"},
        {Link: "competencies", Title: "My Competencies"},
        {Link: "projects", Title: "Projects"},
        {Link: "https://uptime.luca-naujoks.de/status/monitoring", Title: "Status", External: true},
    ]

    const path = usePathname().slice(1)

    return (
        <div className={`flex gap-4 items-center justify-center lg:justify-end w-full text-primary-foreground`}>
            {links.map((link, index) => (
                <div key={index}>
                    <a href={link.Link} target={link.External ? "_blank" : "_self"}
                       className={`${(path == link.Link || path == link.Link.slice(1)) ? "text-[#6750a4]" : ""} text-lg`}>{link.Title}
                    </a>
                </div>
            ))}
        </div>
    )
}
