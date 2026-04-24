import background from "../assets/backgrounds/circuit-board.svg"
import avatar from "../assets/avatar/firefighter.png"
import {BackgroundImage} from "./BackgroundImage.tsx";

export function Competencies() {
    return (
        <div className="max-w-screen max-h-screen overflow-hidden">
            <div
                className="absolute top-0 -z-5 w-screen h-screen bg-linear-to-l from-black from-20%  to-black/10 to-100%"/>
            <BackgroundImage src={background}/>
            <div className={"flex flex-col w-full min-h-screen py-4 px-4 md:py-8 md:px-16"}>
                <div className={'flex flex-col md:flex-row grow mt-8'}>
                    <div className={"w-full md:w-1/2 flex items-end pb-8"}>
                        <img
                            src={avatar}
                            alt={"firefighter avatar"}
                            width={320}
                            height={320}
                            className="scale-x-[-1]"
                        />
                    </div>
                    <div className={"flex flex-col gap-4 w-full md:w-1/2 justify-center items-end pb-8"}>
                        <h1 className={"mb-2"}>My Competencies</h1>
                        <CompetenciesBlock entries={["PostgreSQL", "SQLite", "MongoDB"]}/>
                        <CompetenciesBlock entries={["TypeScript", "GoLang", "Python"]}/>
                        <CompetenciesBlock entries={["Gin", "Next.js", "TailwindCSS", "React"]}/>
                        <CompetenciesBlock entries={["MacOS", "Ubuntu", "Proxmox", "Docker"]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CompetenciesBlock({entries}: { entries: string[] }) {
    return (
        <div className="flex">
            {entries.map((entry, index) => (
                <p key={index}
                   className={(index == 0 ? "rounded-l-full border-l-2 " : "") + "px-4 md:px-8 py-1 border-2 border-l-0 border-primary-foreground´"}>
                    {entry}
                </p>
            ))}
        </div>
    )
}