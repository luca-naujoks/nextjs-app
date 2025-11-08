import Image from "next/image";
import {Navigation} from "@/components/Navigation";

export default function Home() {
    return (
        <div className={"max-w-screen max-h-screen overflow-hidden"}>
            <div
                className="absolute top-0 -z-5 w-full h-full bg-gradient-to-r from-black from-40%  to-black/10 to-100%"/>
            <Image src={"/background_home.jpg"} alt={""} width={1108} height={720}
                   className="absolute top-0 -z-10 w-full h-full"/>
            <div className={"h-screen py-4 px-4 md:py-8 md:px-16"}>
                <Navigation/>
                <div className={"flex flex-col justify-center h-full"}>
                        <Image src={"/avatar_casual.png"} alt={""} width={320} height={320} className="mt-12"/>
                        <h1 className={"mb-4"}>luca-naujoks</h1>
                        <p className={"w-full lg:w-1/2 xl:1/4"}>I’m luca a <span className={"primary-text"}>full‑stack</span> developer focused on
                            <span className={"primary-text"}>TypeScript</span>,
                            React, Node.js and <span className={"primary-text"}>golang</span>. I craft fast, accessible interfaces based of Next.JS and resilient
                            backends with Node or <span className={"primary-text"}>golang</span>.
                        </p>
                </div>
            </div>
        </div>
    );
}
