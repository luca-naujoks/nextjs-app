"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export function Navigation() {
    const router = useRouter();
    const pathname = usePathname()

    const elements = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "LUNA",
            link: "/luna"
        }
    ]

    return (
        <div className="flex justify-between p-2 bg-black shadow-fuchsia-bottom">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
                <Image src="/icon.png" width={25} height={10} alt="logo"/>
                <span>Bobby68.de</span>
            </div>
            <div className="flex gap-4">
                {elements.map((element, index) => (
                    <div key={index}><Link href={element.link} className={`text-xl text-gray-200 font-semibold hover:text-fuchsia-700 ${pathname == element.link? "pointer-events-none text-gray-500": ""}`}>{element.name}</Link></div>
                ))}
            </div>
        </div>
    )
}