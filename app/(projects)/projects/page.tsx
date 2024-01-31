import { ProjectCard } from "@/components/projectcard.component";
import Link from "next/link";

interface ProjectDetailProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function Home() {

  const ProjectDetail = ({ label, children, className }: ProjectDetailProps) => (
    <div className={`flex mb-2 ${className}`}>
      <div className="w-2/5 text-gray-400">{label}</div>
      <div className="w-3/5">{children}</div>
    </div>
  );

  return (
    <div className="">
      <h1 className="text-center font-semibold text-2xl text-gray-400 mt-4">My Projects & Contributions</h1>
      <div id="project_container" className="grid grid-cols-2">
        <ProjectCard projectTitle="LUNA AI">
          <ProjectDetail label="Model Name">
            <p>LUNA</p>
          </ProjectDetail>
          <ProjectDetail label="Current job">
            <p>Specialist for system integration</p>
          </ProjectDetail>
          <ProjectDetail label="GitHub profile:" className="mb-6">
            <Link href={"https://github.com/luca-naujoks"} target="_blank">luca-naujoks</Link>
          </ProjectDetail>
          <ProjectDetail label="Fields of interests:" className="mb-6">
            <p>not defined,</p>
            <p>not defined,</p>
            <p>not defined</p>
          </ProjectDetail>
          <ProjectDetail label="hobbies:">
            <p>Programming,</p>
            <p>texting</p>
          </ProjectDetail>

        </ProjectCard>

        <ProjectCard projectTitle="Chirp">
          <ProjectDetail label="Project Name:" className="">
            <p>Chirp Messenger</p>
          </ProjectDetail>
          <ProjectDetail label="Project Description" className="mb-6">
            <p>Chirp is a live messenger chat application with user and group management. A backend Rest API, a NestJS websocket server for live messaging and a NextJS 14 frontend.</p>
          </ProjectDetail>
          <ProjectDetail label="GitHub Repositorys:" className="mb-6">
            <Link href={"https://github.com/qwerty084/LF8"} target="_blank">LF8-Chirp Messenger</Link>
          </ProjectDetail>
          <ProjectDetail label="Contributors:" className="">
            <p>Luca Helms,</p>
            <p>Fabian Labus,</p>
            <p>Filip,</p>
            <p>Luca Naujoks</p>
          </ProjectDetail>
        </ProjectCard>

        <ProjectCard projectTitle="Bobby69">
          <ProjectDetail label="Project Name:" className="">
            <p>BobbyBot</p>
          </ProjectDetail>
          <ProjectDetail label="Project Description:" className="">
            <p></p>
          </ProjectDetail>
          <ProjectDetail label="Platform:">
            <span>Python 3.9 with Discord.py</span>
          </ProjectDetail>
          <ProjectDetail label="GitHub Repository:">
            <Link href={"https://github.com/luca-naujoks/bobbybot-bobby69"} target="_blank">bobbybot-bobby69</Link>
          </ProjectDetail>
        </ProjectCard>

        <ProjectCard projectTitle="Marketplace">
          <div></div>
        </ProjectCard>

        <ProjectCard projectTitle="Lets Tinker">
          <div></div>
        </ProjectCard>

      </div>
    </div>
  );
}