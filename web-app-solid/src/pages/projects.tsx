import background from "../assets/backgrounds/subtle-prism.svg"
import {createEffect, createSignal} from "solid-js";
import {BackgroundImage} from "../components/BackgroundImage";

interface Project {
    name: string
    description?: string
    icon?: string
    git_link?: string
    archived?: boolean
}

export default function Projects() {
    const [projects, setProjects] = createSignal<Project[]>([])
    const [fetchError, setFetchError] = createSignal<string>("")

    async function projectFetcher(): Promise<Project[]> {
        const response = await fetch("/api/projects", {method: "GET"})
        if (!response.ok) {
            setFetchError("Error retrieving Projects from GitHub")
            return []
        }

        setFetchError("")
        return await response.json()
    }

    createEffect(() => {
        projectFetcher().then((projects: Project[]) => setProjects(projects))
    })

    return (
        <div class={"relative max-w-screen max-h-screen overflow-hidden"}>
            <BackgroundImage src={background}/>
            <div class={"relative z-10 w-full py-4 px-4 md:py-8 md:px-16 h-screen overflow-scroll"}>
                <h1 class={"mb-4"}>My Projects</h1>
                <div class={"grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8"}>
                    <p class={fetchError() ? "col-span-1 md:col-span-3 xl:col-span-4 text-center" : "hidden"}>{fetchError()}</p>
                    {projects().map((project: Project) => (
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
        <div class={"flex w-full h-52 bg-neutral-800 border-2 border-neutral-700 p-4 rounded-xs"}>
            <div class={"flex flex-col w-full ml-4"}>
                <div id={"header"} class={"flex justify-between"}>
                    <h2 class={"mb-2"}>{props.name}</h2>
                    <span
                        class={props.archived ? "h-fit px-2 bg-yellow-700/50 text-yellow-600 rounded-sm cursor-default" : "hidden"}>Archived</span>
                </div>
                <span class={"flex flex-1 text-base text-neutral-400"}>{props.description}</span>
                <div class={"flex w-full items-end justify-end"}>
                    <a href={props.git_link} target={"_blank"} class={"text-neutral-400 hover:text-neutral-500"}>GitHub
                        Repository</a>
                </div>
            </div>
        </div>
    )
}