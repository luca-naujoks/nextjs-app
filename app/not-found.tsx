"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {
    const path = usePathname();

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-950 text-gray-200">
            <div className="flex-col scale-150">
                <h1 className="text-5xl text-center">404</h1>
                <p className="text-center">Resource &quot;{path}&quot; not found</p>
            </div>
        </div>
    )
}