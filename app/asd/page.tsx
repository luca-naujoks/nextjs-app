"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page() {
    const router = useRouter()
    const [rotation, setRotation] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setRotation("rotate-12")
        }, 600)
    })

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-950 text-gray-200 ">
                <h1 className="text-4xl text-center">Why should I have a page named &lsquo;asd&lsquo; ?</h1>
                <div className="flex text-4xl text-center mb-6"><span className="select-none text-transparent">Why should I have a page named &lsquo;asd&lsquo; ?</span><div className={`origin-top-left ${rotation} duration-300`}>Ah, Damn you got me</div></div>
            <button className="bg-slate-900 font-bold text-2xl text-fuchsia-900 rounded-md px-2 hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] duration-300" onClick={() => router.push('/')}>back home</button>
        </div>
    )
}