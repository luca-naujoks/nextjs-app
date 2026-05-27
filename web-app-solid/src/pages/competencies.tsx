import background from "../assets/backgrounds/circuit-board.svg"
import avatar from "../assets/avatar/firefighter.webp"
import {BackgroundImage} from "../components/BackgroundImage";
import avatarAVIF from "../assets/avatar/firefighter.avif";

export default function Competencies() {
    return (
        <div class=" max-w-screen max-h-screen overflow-hidden">
            <div
                class="absolute top-0 z-5 w-screen h-screen bg-linear-to-l from-black from-20%  to-black/10 to-100%"/>
            <BackgroundImage src={background}/>
            <div class={"relative z-10 flex flex-col w-full px-4 md:px-16 lg:h-screen lg:py-16"}>
                <div class={'flex flex-col md:flex-row grow mt-8'}>
                    <div class={"w-full md:w-1/2 flex items-end pb-8"}>
                        <picture>
                            <source srcset={avatarAVIF} type={"image/avif"}/>
                            <source srcset={avatar} type={"image/webp"}/>

                            <img src={avatar} alt={"firefighter avatar"} width={320} height={320} class="mt-0 lg:mt-12"/>
                        </picture>
                    </div>
                    <div class={"flex flex-col gap-4 w-full md:w-1/2 justify-center items-end pb-8"}>
                        <h1 class={"mb-2"}>My Competencies</h1>
                        <CompetenciesBlock entries={["PostgreSQL", "SQLite", "MongoDB"]}/>
                        <CompetenciesBlock entries={["TypeScript", "GoLang", "Python"]}/>
                        <CompetenciesBlock entries={["Gin", "NextJS", "Tailwind CSS", "React"]}/>
                        <CompetenciesBlock entries={["MacOS", "Ubuntu", "Proxmox", "Docker"]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CompetenciesBlock({entries}: { entries: string[] }) {
    return (
        <div class="flex">
            {entries.map((entry, index) => (
                <p
                    class={(index == 0 ? "rounded-l-full border-l-2 " : "") + "px-4 md:px-8 py-1 border-2 border-l-0 border-primary-foreground´"}>
                    {entry}
                </p>
            ))}
        </div>
    )
}