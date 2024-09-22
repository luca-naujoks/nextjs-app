import {ProjectCard} from "@/components/cards-component";

export default function Page() {
    return (
        <div className="p-4 gap-6 grid grid-cols-4">
            <ProjectCard title={"Project 1"} description={"This is a project"} giturl={"https://github.com"} pictorgram={"/questionmark.png"}/>
            <ProjectCard title={"Project 1"} description={"This is a project"} giturl={"https://github.com"} pictorgram={"/questionmark.png"}/>
            <ProjectCard title={"Project 1"} description={"This is a project"} giturl={"https://github.com"} pictorgram={"/questionmark.png"}/>
            <ProjectCard title={"Project 1"} description={"This is a project"} giturl={"https://github.com"} pictorgram={"/questionmark.png"}/>
            <ProjectCard title={"Project 1"} description={"This is a project"} giturl={"https://github.com"} pictorgram={"/questionmark.png"}/>
        </div>
    )
}