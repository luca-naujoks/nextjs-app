import Image from "next/image";
import {Navigation} from "@/components/Navigation";

export default function Home() {
    return (
        <div className={"max-w-screen max-h-screen overflow-hidden"}>
            <div className="absolute top-0 -z-5 w-full h-full bg-gradient-to-r from-black from-40%  to-black/10 to-100%"/>
            <Image src={"/background.jpg"} alt={""} width={1108} height={720} className="absolute top-0 -z-10 w-full h-full"/>
            <div className={"py-8 px-16"}>
                <Navigation/>
                <Image src={"/avatar.png"} alt={""} width={320} height={320} className="mt-12"/>
                <h1 className={"text-purple-700 mb-4"}>luca-naujoks</h1>
                <p className={"text-primary-foreground w-96"}>I’m Cody—full‑stack developer focused on TypeScript, React, Node.js, golang and API design. I craft fast, accessible interfaces and resilient backends. When production’s on fire, I don’t panic—I fix.</p>
            </div>
        </div>
    );
}
