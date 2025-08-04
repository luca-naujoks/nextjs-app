"use client"
import {usePathname} from "next/navigation";

export function Unavailable() {
    const path = usePathname().slice(1)

    return (
        <div>
            Sorry the current Selected Service at {path} is not Reachable
        </div>
    )
}