"use client"

import { TypingText } from "@/components/writing.component";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

interface ProjectDetailProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function Home() {
  const router = useRouter();

  const [gitmargin, setGitmargin] = useState('');
  const [cardsScale, setCardsScale] = useState('');

  const age = Math.floor(
    (new Date().getTime() - new Date("2005-06-08").getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );

  const ProjectDetails = ({ label, children, className }: ProjectDetailProps) => (
    <div className={`flex mb-2 ${className}`}>
      <div className="w-2/5 text-gray-400">{label}</div>
      <div className="w-3/5">{children}</div>
    </div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setGitmargin('mb-12')
    }, 1200);
    const timer2 = setTimeout(() => {
      setCardsScale('scale-105')
    }, 1400);
    return () => (clearTimeout(timer), clearTimeout(timer2));
  }, []);

  return (
    <div className="whitespace-nowrap overflow-auto scrollbar-hide">
      <div className="flex h-screen w-screen font-semibold" id="screen-1">
        <div className="h-screen w-2/5 p-24 justify-center" id="welcome">
          <p className="text-5xl mt-12 text-gray-400">Welcome on</p>
          <p className="flex">
            <span className="text-4xl mt-12 text-transparent">Wow a Secret</span>
            <span className="text-5xl text-fuchsia-900">
              <TypingText text="Bobby68.de" time={100} />
            </span>
          </p>

          <div id="buttons" className="absolute w-2/5 h-fit bottom-24 flex flex-col gap-4 ">
            <button className={`w-2/5 h-12 ${gitmargin} bg-slate-900 font-bold text-fuchsia-900 rounded-md hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] duration-300`} onClick={() => router.push('https://github.com/luca-naujoks')}>My GitHub</button>
            <button className="w-2/5 h-12 bg-slate-900 font-bold text-fuchsia-900 rounded-md hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] duration-300" onClick={() => router.push('/luna')}>LUNA AI</button>
            <button className="w-2/5 h-12 bg-slate-900 font-bold text-fuchsia-900 rounded-md hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] duration-300" onClick={() => router.push('/projects')}>Projects</button>
          </div>
        </div>

        <div className={`${cardsScale} flex h-screen w-3/5 p-24 duration-300`}>

          <div id="main_card" className="w-4/5 h-3/4 z-10 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
            <div id="head" className="flex items-center pl-2 gap-1 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            </div>
            <div id="body" className="flex border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
              <ProjectDetails label="Name:" className="">
                <p>Luca Naujoks</p>
              </ProjectDetails>
              <ProjectDetails label="Age:" className="mt-6">
                <p>{age}</p>
              </ProjectDetails>
              <ProjectDetails label="Current Job:" className="mt-6">
                <p>Specialist for system integration</p>
              </ProjectDetails>
              <ProjectDetails label="GitHub Profile:" className="mt-6">
                <Link href={"https://github.com/luca-naujoks"} target="_blank" className="hover:opacity-50">luca-naujoks</Link>
              </ProjectDetails>
              <ProjectDetails label="Fields of Interests:" className="mt-6">
                <p>Artificial Intelligence,</p>
                <p>Machine Learning,</p>
                <p>Software Engineering</p>
              </ProjectDetails>
              <ProjectDetails label="My Hobbies:" className="mt-6">
                <p>Programming,</p>
                <p>Firefighter</p>
              </ProjectDetails>
              <div>
                <p className="w-2/5 text-gray-400 mt-6 mb-2">My Tools:</p>
                <div className="flex gap-4 w-full">
                  <Image src={"/vscode.svg"} alt="vscode" width={50} height={50} />
                  <Image src={"/docker.svg"} alt="docker" width={50} height={50} />
                  <Image src={"/git.svg"} alt="git" width={50} height={50} />
                  <Image src={"/next.png"} alt="nextjs" width={50} height={50} />
                  <Image src={"/react.png"} alt="react" width={50} height={50} />
                  <Image src={"/tailwindcss.svg"} alt="tailwindcss" width={50} height={50} />
                </div>
              </div>

            </div>
          </div>

          <div id="main_card" className="w-4/5 h-3/4 z-0 transform -translate-x-1/3 translate-y-10 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
            <div id="head" className="flex-none border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl" />
            <div id="body" className="flex flex-row border-b border-x border-slate-500 px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
              <div className="w-1/3 h-full"></div>
              <div className="w-2/3 h-full ml-2">
                <ProjectDetails label="Model Name:" className="">
                  <p>LUNA</p>
                </ProjectDetails>
                <ProjectDetails label="Trained On:" className="mt-6">
                  <p>General Chatting</p>
                </ProjectDetails>
                <ProjectDetails label="Last Update:" className="mt-6">
                  <p>27.08.2023</p>
                </ProjectDetails>
                <ProjectDetails label="Censored:" className="mt-6 mb-6">
                  <p className="text-red-800">No</p>
                </ProjectDetails>
                <p className="text-gray-400">Model Description: </p>
                <p className="max-w-1/3 text-wrap">LUNA is an LLM-based personal assistant with basic language understanding to perform "question" "answer" tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}