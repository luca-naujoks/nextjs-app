"use client"
import {usePathname} from "next/navigation";

export default function NotFound() {
    const path = usePathname().slice(1)

    return (
        <div className={`flex items-center justify-center w-full h-full`}>
           <h1 className={`text-center text-primary-foreground`}> Sorry the current Selected Service<br/> at &#34;{path}&#34; is not Reachable</h1>
        </div>
    )
}