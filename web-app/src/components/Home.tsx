import background from "../assets/backgrounds/slanted-gradient.svg"
import avatar from "../assets/avatar/casual.png"
import {BackgroundImage} from "./BackgroundImage.tsx";
export function Home() {
    return (
        <div className={"max-w-screen max-h-screen overflow-hidden"}>
            <div
                className="absolute top-0 -z-5 w-full h-full bg-linear-to-r from-black from-20%  to-black/10 to-100%"/>
            <BackgroundImage src={background}/>
            <div className={"h-screen py-4 px-4 md:py-8 md:px-16"}>
                <div className={"flex flex-col justify-center h-full"}>
                    <img src={avatar} alt={""} width={320} height={320} className="mt-12"/>
                    <h1 className={"mb-4"}>luca-naujoks</h1>
                    <p className={"w-full lg:w-1/2 xl:1/4"}>I’m luca a <span
                        className={"primary-text"}>full‑stack</span> developer focused on
                        <span className={"primary-text"}>TypeScript</span>,
                        React, Node.js and <span className={"primary-text"}>golang</span>. I craft fast, accessible
                        interfaces based of NextJS and resilient
                        backends with TypeScript or <span className={"primary-text"}>golang</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}