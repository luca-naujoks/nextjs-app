"use client"
import {usePathname} from "next/navigation";

export default function NotFound() {
    const path = usePathname().slice(1)

    return (
        <div className={`flex items-center justify-center w-full h-full bg-foreground/50`}>
           <h1 className={`text-center`}> Sorry the current Selected Service<br/> at {path} is not Reachable</h1>
        </div>
    )
}