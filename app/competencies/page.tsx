import Image from "next/image";
import {Navigation} from "@/components/Navigation";

export default function page() {
    return (
        <div className="relative min-h-screen">
            <div
                className="absolute top-0 -z-5 w-screen h-screen bg-gradient-to-l from-black from-40%  to-black/10 to-100%"/>
            <Image src={"/background_competencies.png"} alt={""} width={3500} height={2480}
                   className="absolute top-0 -z-10 w-full h-full"/>
            <div className={"flex flex-col w-full min-h-screen py-4 px-4 md:py-8 md:px-16"}>
                <Navigation/>
                <div className={'flex flex-col md:flex-row flex-grow mt-8'}>
                    <div className={"w-full md:w-1/2 flex items-end pb-8"}>
                        <Image
                            src={"/avatar_firefighter.png"}
                            alt={""}
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
                        <CompetenciesBlock entries={["MacOS", "Proxmox", "Ubuntu", "Docker"]}/>
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