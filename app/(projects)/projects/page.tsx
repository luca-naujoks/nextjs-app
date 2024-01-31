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

        <ul id="left-lane">
          <li><ProjectCard projectTitle="LUNA AI">
            <ProjectDetail label="Model Name">
              <p>LUNA</p>
            </ProjectDetail>
            <ProjectDetail label="Current job">
              <p>Specialist for system integration</p>
            </ProjectDetail>
            <ProjectDetail label="GitHub profile:" className="mb-6">
              <Link href={"https://github.com/luca-naujoks"} target="_blank" className="hover:opacity-50">luca-naujoks</Link>
            </ProjectDetail>
            <ProjectDetail label="Fields of interests:" className="mb-6">
              <p>not defined,</p>
              <p>not defined,</p>
              <p>not defined</p>
            </ProjectDetail>
            <ProjectDetail label="hobbies:" className="mb-6">
              <p>Programming,</p>
              <p>texting</p>
            </ProjectDetail>

          </ProjectCard></li>
          <li><ProjectCard projectTitle="Bobby69">
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
              <Link href={"https://github.com/luca-naujoks/bobbybot-bobby69"} target="_blank" className="hover:opacity-50">bobbybot-bobby69</Link>
            </ProjectDetail>
            <ProjectDetail label="Commands:" className="mb-6">
              <p>info (informations about the bot)</p>
              <p>Music (start, stop and resume)</p>
              <p>Casino (Create a wallet and gambel ;))</p>
              <p>Clear (clear multiple messages at once)</p>
            </ProjectDetail>
          </ProjectCard></li>
          <li><ProjectCard projectTitle="Lets Tinker">
            <ProjectDetail label="Project Name:" className="">
              <p>Let us Tinker</p>
            </ProjectDetail>
            <ProjectDetail label="Project Description" className="mb-6">
              <p>A Top Down survival game with long nights, short days and everything want to kill u</p>
            </ProjectDetail>
            <ProjectDetail label="GitHub Repositorys:" className="mb-6">
              <Link href={"https://github.com/luca-naujoks/Let-us-Tinker"} target="_blank" className="hover:opacity-50">LF8-Chirp Messenger</Link>
            </ProjectDetail>
          </ProjectCard></li>
        </ul>
        <ul>
          <li><ProjectCard projectTitle="Chirp">
            <ProjectDetail label="Project Name:" className="">
              <p>Chirp Messenger</p>
            </ProjectDetail>
            <ProjectDetail label="Project Description" className="mb-6">
              <p>Chirp is a live messenger chat application with user and group management. A backend Rest API, a NestJS websocket server for live messaging and a NextJS 14 frontend.</p>
            </ProjectDetail>
            <ProjectDetail label="GitHub Repositorys:" className="mb-6">
              <Link href={"https://github.com/qwerty084/LF8"} target="_blank" className="hover:opacity-50">LF8-Chirp Messenger</Link>
            </ProjectDetail>
            <ProjectDetail label="Contributors:" className="mb-6">
              <p>Luca Helms,</p>
              <p>Fabian Labus,</p>
              <p>Filip,</p>
              <p>Luca Naujoks</p>
            </ProjectDetail>
          </ProjectCard></li>
          <li><ProjectCard projectTitle="Marketplace">
            <ProjectDetail label="Project Name:" className="">
              <p>Marketplace Platform</p>
            </ProjectDetail>
            <ProjectDetail label="Project Description" className="mb-6">
              <p>The marketplace platform is a cross between Amazon, Fiverr and Etsy. It is a buy and sell platform where anyone can register for a 'business account' and sell items.</p>
            </ProjectDetail>
            <ProjectDetail label="GitHub Repositorys:" className="mb-6">
              <Link href={"https://github.com/luca-naujoks/Marketplace"} target="_blank" className="hover:opacity-50">Marketplace Platform</Link>
            </ProjectDetail>
            <ProjectDetail label="Contributors:" className="mb-6">
              <p>Luca Naujoks</p>
            </ProjectDetail>
          </ProjectCard></li>
        </ul>
      </div>
    </div>
  );
}