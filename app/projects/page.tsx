"use client"
import Image from "next/image";
import {Navigation} from "@/components/Navigation";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

interface ProjectCardProps {
    name: string
    description?: string
    icon?: string
    gitLink?: string
}

export default function Page() {
    return (
        <div>
            <div
                className="absolute top-0 -z-5 w-screen h-screen bg-gradient-to-l from-black from-40%  to-black/10 to-100% overflow-hidden"/>
            <Image src={"/background_projects.jpg"} alt={""} width={3500} height={2480} loading={"eager"}
                   fetchPriority={"high"} className="absolute top-0 -z-10 w-screen h-screen overflow-hidden"/>
            <div className={"w-full py-4 px-4 md:py-8 md:px-16"}>
                <Navigation/>
                <h1 className={"mb-4"}>My Competencies</h1>
                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"}>
                    <ProjectCard name={"AniStack"} icon={"/icon_anistack.png"}
                                 description={"AniStack is a Content Manager aiming at Anime and Series. It utilizes Docker to Control and Manage Dynamic Downloaders that are packed into Docker Images Provided by the User."}/>
                    <ProjectCard name={"Personal Website"} icon={"/icon_website-icon.png"}
                                 description={"This is a simple small Project to deliver a fast Website through Next.js 16. To be more precise its this Website :)"}/>
                    <ProjectCard name={"Financial Project Management"} icon={"/icon_website-icon.png"}
                                 description={"A Finance Planning and Management Tool. Core concept are virtual projects you assign a monthly budget to, where you then book expenses to have a fast and easy overview of your budgets."}/>
                    <ProjectCard name={"AniStack Documentation"} icon={"/icon_documentation.png"}
                                 description={"AniStack Documentation Site to guide you through Usage and Contribution"}/>
                </div>
            </div>
        </div>
    );
}

function ProjectCard(props: ProjectCardProps) {
    const router = useRouter()
    return (
        <div className={"flex w-full h-64 bg-neutral-800 border-2 border-neutral-700 rounded-lg p-4"}>
            {props.icon ? <Image src={props.icon} alt={"project Icon"} width={128} height={128}
                                 className={"w-16 h-16 hidden lg:block rounded-lg"}/> :
                <div className="w-16 h-16 hidden lg:block"/>}
            <div className={"flex flex-col w-full ml-4"}>
                <h2 className={"mb-2"}>{props.name}</h2>
                <p className={"flex flex-1 text-base text-neutral-400"}>{props.description}</p>
                <div className={"flex w-full items-end justify-end"}>
                    <Button variant="textOnly" className={"text-neutral-400"}
                            onClick={() => props.gitLink && router.push(props.gitLink)}>GitHub Repository</Button>
                </div>
            </div>
        </div>
    )
}
