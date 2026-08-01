import "./projects.css"
import {createEffect, createSignal} from "solid-js";

interface Project {
    name: string
    description?: string
    icon?: string
    git_link?: string
    archived?: boolean
}

export function Projects() {
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
        <div class={"relative z-10 w-full px-4 md:px-16 h-screen overflow-scroll pt-4 pb-16"}>
            <div class={"grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-16"}>
                <p class={fetchError() ? "col-span-1 md:col-span-3 xl:col-span-4 text-center" : "hidden"}>{fetchError()}</p>
                {projects().map((project: Project) => (
                    <ProjectCard name={project.name} description={project.description} icon={project.icon}
                                 git_link={project.git_link} archived={project.archived}/>
                ))}
            </div>
        </div>
    );
}

function ProjectCard(props: Project) {
    return (
        <div class="project-card group">
            <div class="project-card-overlay"/>
            <div class={"relative flex flex-col h-full"}>
                <div class={"flex justify-between items-start gap-3 mb-3"}>
                    <h3 class="project-card-title">
                        {props.name}
                    </h3>
                    {props.archived && (
                        <span
                            class={"shrink-0 px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 rounded border border-yellow-500/30 whitespace-nowrap"}>
                            Archived
                        </span>
                    )}
                </div>
                <p class="project-card-description">
                    {props.description || "No description available"}
                </p>
                <div class={"flex items-center gap-2"}>
                    {props.icon && (
                        <img src={props.icon} alt={props.name}
                             class={"w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"}/>
                    )}
                    <a
                        href={props.git_link}
                        target={"_blank"}
                        class={"text-sm font-medium text-[#6750a4] hover:text-[#c084fc] transition-colors duration-200 inline-flex items-center gap-1 group/link"}>
                        View on GitHub
                        <svg class={"w-4 h-4 group-hover/link:translate-x-1 transition-transform"} fill="none"
                             stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}