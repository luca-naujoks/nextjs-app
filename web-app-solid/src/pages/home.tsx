import background from "../assets/backgrounds/slanted-gradient.svg"
import avatar from "../assets/avatar/casual.webp"
import avatarAVIF from "../assets/avatar/casual.avif"

import {BackgroundImage} from "../components/BackgroundImage";

export default function Home() {
    return (
        <div class={"relative max-w-screen max-h-screen overflow-hidden"}>
            <div
                class="absolute top-0 z-5 w-full h-full bg-linear-to-r from-black from-20%  to-black/10 to-100%"/>
            <BackgroundImage src={background}/>
            <div class={"relative z-10 h-screen py-4 px-4 md:py-8 md:px-16"}>
                <div class={"flex flex-col justify-center h-full"}>
                    <picture>
                        <source srcset={avatarAVIF} type={"image/avif"}/>
                        <source srcset={avatar} type={"image/webp"}/>

                        <img src={avatar} alt={"casual avatar"} width={320} height={320} class="mt-0 lg:mt-12"/>
                    </picture>
                    <h1 class={"mb-4"}>luca-naujoks</h1>
                    <p class={"w-full lg:w-1/2 xl:1/4"}>
                        I’m luca a <span class={"highlight"}>full‑stack</span> developer focused around
                        golang and react.
                        I am building Backends in <span class={"highlight"}>golang</span> with <span
                        class={"highlight"}>gin</span> and frontend facing parts
                        with <span class={"highlight"}>React</span> and <span
                        class={"highlight"}>Tailwind CSS</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}
