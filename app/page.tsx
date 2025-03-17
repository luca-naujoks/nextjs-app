import { HeadLine, ProjectStackItem, TechStackItem } from "./utils/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full p-4 bg-white/25 backdrop-blur-sm rounded-md">
      <h1 className="headline">Welcome to my Web Space</h1>

      <span className="mb-8">
        Hey i am Luca a fullstack developer. Using a Tech Stack around Next-,
        NestJS, SQL aswell as NoSQL Databases.
      </span>

      <h1 className="headline">My TechStack</h1>
      <div id="techStack" className="grid grid-cols-3 gap-4 mb-8">
        <TechStackItem name="Python" icon="/python.png" />
        <TechStackItem name="React" icon="/react.png" />
        <TechStackItem name="TypeScript" icon="/typescript.png" />
        <TechStackItem name="SharePoint Framework" icon="/spfx.png" />
        <TechStackItem name="SQLite" icon="/sql.png" />
      </div>

      <h1 className="headline">Some of my Side Projects</h1>
      <div id="projects" className="grid grid-cols-1 gap-4">
        <ProjectStackItem
          name="My Website"
          icon="/typescript.png"
          description=""
          state="in progress"
          mainTechnology="JavaScript"
        />
        <ProjectStackItem
          name="Observer"
          icon="/typescript.png"
          description="jfhshgfiuzgi nashudfahsuf as dhuad u udfh afua ua fuasf hu asjfhaufgsizf sgzf asgfug fuagfu ugasf uaszg fuag fuag "
          state="in progress"
          mainTechnology="JavaScript"
        />
      </div>
    </div>
  );
}
