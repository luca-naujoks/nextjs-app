"use client"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const path = usePathname();
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-950 text-gray-200">
            <div className="flex-col scale-150 mb-6">
                <h1 className="text-5xl text-center">404</h1>
                <p className="text-center">Resource &quot;{path}&quot; not found</p>
            </div>
            <button className="bg-slate-900 font-bold px-2 text-fuchsia-900 rounded-md hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] duration-300" onClick={() => router.push('/')}>back home</button>
        </div>
    )
}