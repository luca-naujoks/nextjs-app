import Image from "next/image";
import {Navigation} from "@/components/Navigation";
import {Button} from "@/components/ui/button";

interface ProjectCardProps {
    name: string
    description?: string
    icon?: string
    gitLink?: string
}

export default function Page() {
    return (
            <div className={"w-full py-8 px-16"}>
                <Navigation/>
                <h1 className={"text-purple-700 mb-4"}>My Competencies</h1>
                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"}>
                    <ProjectCard name={"AniStack"} icon={"https://images.bobby68.de/website-icon.png"} description={"AniStack is a Content Manager aiming at Anime and Series. It utilizes Docker to Control and Manage Dynamic Downloaders that are packed into Docker Images Provided by the User."} />
                    <ProjectCard name={"Personal Website"} icon={"https://images.bobby68.de/website-icon.png"} description={"This is a simple small Project to deliver a fast Website through Next.js 16. To be more precise its this Website :)"}/>
                    <ProjectCard name={"GitHub Release Notifyer"} icon={""} description={"A GitHub Notification Service to track GitHub Releases and Sendout Notifications"}/>
                    <ProjectCard name={"AniStack Documentation"} icon={"/documentation.png"} description={"AniStack Documentation Site to guide you through Usage and Contribution"}/>
                </div>
            </div>
    );
}

function ProjectCard(props: ProjectCardProps) {
return (
    <div className={"flex w-full h-64 bg-neutral-800 rounded-lg p-4"}>
        {props.icon ? <Image src={props.icon} alt={""} width={128} height={128} className={"w-16 h-16 hidden lg:block"}/> : <div className="w-16 h-16 hidden lg:block"/>}
        <div className={"flex flex-col w-full ml-4"}>
            <h2 className={"text-xl text-primary-foreground mb-2"}>{props.name}</h2>
            <p className={"flex flex-1 text-neutral-400"}>{props.description}</p>
            <div className={"flex w-full items-end justify-end"}>
                <Button variant="textOnly" className={"text-neutral-400"}>GitHub Repository</Button>
            </div>
        </div>
    </div>
)
}
