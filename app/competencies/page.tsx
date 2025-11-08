
import Image from "next/image";
import {Navigation} from "@/components/Navigation";

export default function page() {
    return(
        <div className="relative min-h-screen">
            <div className="absolute top-0 -z-5 w-screen h-screen bg-gradient-to-l from-black from-40%  to-black/10 to-100%"/>
            <Image src={"/background.png"} alt={""} width={1108} height={720} className="absolute top-0 -z-10 w-screen h-screen"/>
            <div className={"flex flex-col w-full min-h-screen py-8 px-16"}>
                <Navigation/>
                <div className={'flex flex-col md:flex-row flex-grow mt-8'}>
                    <div className={"w-full md:w-1/2 flex items-end pb-8"}>
                        <Image
                            src={"/avatar2.png"}
                            alt={""}
                            width={320}
                            height={320}
                            className="scale-x-[-1]"
                        />
                    </div>
                    <div className={"flex flex-col gap-2 w-full md:w-1/2 justify-center items-end pb-8"}>
                        <h1 className={"mb-2 text-purple-700"}>My Competencies</h1>
                        <CompetenciesBlock entries={["PostgreSQL", "SQLite", "MongoDB"]}/>
                        <CompetenciesBlock entries={["TypeScript", "GoLang", "Python"]}/>
                        <CompetenciesBlock entries={["Gin", "Next.js", "TailwindCss", "React"]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CompetenciesBlock({ entries }: { entries: string[] }) {
    return(
        <div className="flex">
            {entries.map((entry, index) => (
                <div key={index} className={(index == 0 ? "rounded-l-full border-r-0 " : "") + "px-2 py-1 border border-primary-foreground text-primary-foreground"}>
                    {entry}
                </div>
            ))}
        </div>
    )
}