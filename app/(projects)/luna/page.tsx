"use client"
import { usePathname } from 'next/navigation'

export default function Home() {
    const pathname = usePathname()
    return (
        <div className="p-2">
            <h1>Luna</h1>
            <p>Info sheet about LUNA and Live Demo/chat</p>
            <p>Current pathname: {pathname}</p>
        </div>
    );
}