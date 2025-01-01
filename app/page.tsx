"use client";
import { calculateAge } from "@/utils/age-component";
import { SkillBadge } from "@/utils/cards-component";
import { CircularProgressBar } from "@/utils/circular-progress-bar-component";

export default function Home() {
  const age = calculateAge();

  return (
    <div className="flex flex-col gap-4 p-4">
      <div
        className="flex justify-evenly h-[10%] ml-[25%] p-2 bg-white m-4 rounded-md"
        id="Navigation"
      >
        <a
          className="flex justify-center items-center cursor-pointer hover:font-semibold"
          id="home"
          href={"/"}
        >
          Home
        </a>
        <a
          className="flex justify-center items-center cursor-pointer hover:font-semibold"
          id="profile"
          href={"/profile"}
        >
          My Profile
        </a>
        <a
          className="flex justify-center items-center cursor-pointer hover:font-semibold"
          id="projects"
          href={"/projects"}
        >
          Projects
        </a>
        <a className="flex justify-center items-center cursor-pointer hover:font-semibold">
          Place Holder
        </a>
      </div>
      <div id="MainContent" className="flex flex-row h-full w-full gap-4">
        <div className="flex flex-col gap-4 w-1/4 h-full">
          <div className="flex flex-col gap-4 p-2 h-1/4 bg-white rounded-md">
            <SmallPersonalInfo age={age} />
          </div>
          <div className="flex flex-col gap-4 p-2 bg-white rounded-md">
            <MessageQueue />{" "}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-3/4 h-full">
          <div className="flex flex-col gap-4 p-2 w-full h-1/4 bg-white rounded-md">
            <AboutMe age={age} />
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallPersonalInfo({ age }: { age: number }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="font-bold">Name</div>
          <div className="font-bold">Age</div>
          <div className="font-bold">Location</div>
        </div>
        <div className="flex flex-col">
          <div>John Doe</div>
          <div>{age}</div>
          <div>San Francisco, CA</div>
        </div>
      </div>
    </div>
  );
}

function MessageQueue() {
  return <div>Message Queue</div>;
}

function AboutMe({ age }: { age: number }) {
  return (
    <div>
      <h1>About Me</h1>
      <article className={`text-wrap`}>
        <p>
          Hello, I’m Luca Naujoks, a dedicated {age}-year-old Full-Stack
          developer with a comprehensive background in system integration. I
          currently work at Thinformatics as a specialist for system
          integration. My technical expertise is rooted in my experience as an
          IT system electronics technician. My professional interests span web
          development, machine learning, and game development.
        </p>
        <br />
        <p>
          In addition to my professional activities, I am a gamer, a volunteer
          firefighter, and I have a passion for diving.
        </p>
      </article>
    </div>
  );
}

function Skills() {
    return (
        <div className="bg-white p-2 rounded-md">
            <h1 className="text-center md:text-left text-2xl font-bold mb-2">My Tool Suite</h1>
            <div className="flex gap-4 w-full h-full flex-wrap">
                <SkillBadge title="React" description="JavaScript Framework" image="/react.png" alt={"React"}/>
                <SkillBadge title="Python" description="Programming Language" image="/python.png" alt={"python"}/>
                <SkillBadge title="Git" description="Version Control Tool" image="/react.png" alt={"Git"}/>
                <SkillBadge title="MongoDB" description="Document based Database" image="/react.png" alt={"mongodb"}/>
                <SkillBadge title="MySQL" description="SQL based Database" image="/sql.png" alt={"mysql"}/>
                <SkillBadge title="JavaScript" description="Programming Language" image="/react.png" alt={"JavaScript"}/>
                <SkillBadge title="TypeScript" description="JavaScript Framework" image="/typescript.png" alt={"typescript"}/>
                <SkillBadge title="SPFx" description="SharePoint Framework for JavaScript" image="/spfx.png" alt={"spfx"}/>
            </div>
        </div>
    )
}
