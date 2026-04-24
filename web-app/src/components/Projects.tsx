import background from "../assets/backgrounds/subtle-prism.svg"

// Icon Imports
import {BackgroundImage} from "./BackgroundImage.tsx";
import {useEffect, useState} from "react";

interface Project {
    name: string
    description?: string
    icon?: string
    git_link?: string
    archived?: boolean
}

export function Projects() {
    const [projects, setProjects] = useState<Project[]>([])

    async function fetchProjects(): Promise<void> {
        const response = await fetch("/api/projects", {method: "GET"})
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => {
        fetchProjects().then()
    }, []);

    return (
        <div>
            <BackgroundImage src={background}/>
            <div className={"w-full py-4 px-4 md:py-8 md:px-16 h-screen overflow-scroll"}>
                <h1 className={"mb-4"}>My Projects</h1>
                <div className={"grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8"}>
                    {projects.map((project) => (
                        <ProjectCard name={project.name} description={project.description} icon={project.icon}
                                     git_link={project.git_link} archived={project.archived}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProjectCard(props: Project) {
    return (
        <div className={"flex w-full h-64 bg-neutral-800 border-2 border-neutral-700 rounded-lg p-4"}>
            <div className={"flex flex-col w-full ml-4"}>
                <h2 className={"mb-2"}>{props.name}</h2>
                <span className={"flex flex-1 text-base text-neutral-400"}>{props.description}</span>
                <div className={"flex w-full items-end justify-end"}>
                    <a href={props.git_link} target={"_blank"} className={"text-neutral-400 hover:text-neutral-500"}>GitHub Repository</a>
                </div>
            </div>
        </div>
    )
}