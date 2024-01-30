"use client"

import { TypingText } from "@/components/writing.component";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [gitmargin, setGitmargin] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setGitmargin(12);
    }, 1200);
  }, []);

  return (
    <div className="whitespace-nowrap overflow-auto scrollbar-hide">
      <div className="flex h-screen w-screen font-semibold" id="screen-1">
        <div className="h-screen w-2/5 p-24 justify-center" id="welcome">
          <p className="text-5xl mt-12 text-gray-400">Welcome on</p>
          <p className="flex">
            <span className="text-5xl mt-12 text-transparent">Welcome </span>
            <span className="text-5xl text-fuchsia-900">
              <TypingText text="Bobby68.de" time={100} />
            </span>
          </p>

          <div id="buttons" className="absolute w-2/5 h-fit bottom-24 flex flex-col gap-4 ">
            <button className={`w-2/5 h-12 mb-${gitmargin} bg-slate-900 font-bold text-fuchsia-900 rounded-md hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] duration-300`} onClick={() => router.push('https://github.com/luca-naujoks')}>My GitHub</button>
            <button className="w-2/5 h-12 bg-slate-900 font-bold text-fuchsia-900 rounded-md hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] duration-300" onClick={() => router.push('/luna')}>LUNA AI</button>
            <button className="w-2/5 h-12 bg-slate-900 font-bold text-fuchsia-900 rounded-md hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] duration-300" onClick={() => router.push('/projects')}>Projects</button>
          </div>
        </div>

        <div className="flex h-screen w-3/5 p-24">
          <div id="main_card" className="w-4/5 h-3/4 z-10 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
            <div id="head" className="flex items-center pl-2 gap-1 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            </div>
            <div id="body" className="flex border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
              <div className="flex mb-2"><div className="w-2/5 text-gray-400">Name:</div><div>Luca Naujoks</div></div>
              <div className="flex mb-2"><div className="w-2/5 text-gray-400">Current job:</div><div></div>Specialist for system integration</div>
              <div className="flex mb-6"><div className="w-2/5 text-gray-400">GitHub profile:</div><Link href={"https://github.com/luca-naujoks"} target="_blank">luca-naujoks</Link></div>
              <div className="flex mb-6"><div className="w-2/5 text-gray-400">Fields of interests:</div><div><p>Artificial Intelligence,</p> <p>Machine Learning,</p> <p>Software Engineering</p></div></div>
              <div className="flex mb-2"><div className="w-2/5 text-gray-400">My hobbies:</div><div><p>Programming,</p><p>Firefighter</p></div></div>
            </div>
          </div>

          <div id="main_card" className="w-4/5 h-3/4 z-0 transform -translate-x-1/3 translate-y-10 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
            <div id="head" className="flex-none border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">

            </div>
            <div id="body" className="flex flex-row border-b border-x border-slate-500 px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
              <div className="w-1/3 h-full"></div>
              <div className="w-2/3 h-full ml-2">
                <p className="mb-2"><span className="text-gray-400">Model Name: </span> <span>LUNA</span></p>
                <p className="mb-2"><span className="text-gray-400">Trained Themes: </span><span>General Chatting</span></p>
                <p className="mb-2"><span className="text-gray-400">Last Update: </span><span>27.08.2023</span></p>
                <p className="mb-6"><span className="text-gray-400">Censored: </span><span className="text-red-800">No</span></p>
                <p><span className="text-gray-400">Model Description: </span></p>
                <p><span>LUNA is an LLM-based <br /> personal assistant <br /> with basic language understanding <br /> to perform "question" "answer" tasks.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col p-24 h-screen w-screen font-semibold" id="screen-2">
        <h1 className="text-3xl">LUNA AI</h1>

        <div id="content-body" className="flex justify-between h-4/5">
          <div id="main_card" className="w-2/5 h-full mt-12 z-10 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
            <div id="head" className="flex items-center pl-2 gap-1 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            </div>
            <div id="body" className="flex border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
              <div className="flex mb-2"><div className="w-2/5 text-gray-400">Model Name:</div><div>LUNA</div></div>
              <div className="flex mb-2"><div className="w-2/5 text-gray-400">Current job:</div><div></div>Specialist for system integration</div>
              <div className="flex mb-6"><div className="w-2/5 text-gray-400">GitHub profile:</div><Link href={"https://github.com/luca-naujoks"} target="_blank">luca-naujoks</Link></div>
              <div className="flex mb-6"><div className="w-2/5 text-gray-400">Fields of interests:</div><div><p>Artificial Intelligence,</p> <p>Machine Learning,</p> <p>Software Engineering</p></div></div>
              <div className="flex mb-2"><div className="w-2/5 text-gray-400">My hobbies:</div><div><p>Programming,</p><p>Firefighter</p></div></div>
            </div>
          </div>

          <div id="main_card" className="w-2/5 h-1/2 mt-12 z-10 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
            <div id="head" className="flex items-center pl-2 gap-1 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            </div>
            <div id="body" className="flex border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
              Live demo
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="flex-col p-24 h-screen w-screen font-semibold" id="screen-3">
        <h1 className="text-3xl">Chirp</h1>

        <div id="content-body" className="flex justify-between h-4/5">
          <div id="main_card" className="w-2/5 h-full mt-12 z-10 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
            <div id="head" className="flex items-center pl-2 gap-1 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            </div>
            <div id="body" className="flex border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
              <div className="flex mb-2"><div className="w-2/5 text-gray-400">Project Name:</div><div>Chirp Messenger</div></div>
              <div className="flex mb-6"><div className="w-2/5 text-gray-400">Project Description:</div><div></div>Chirp is a live messenger chat application with user <br /> and group management. A backend Rest API, <br />a NestJS websocket server for live messaging <br />and a NextJS 14 frontend.</div>
              <div className="flex mb-2"><div className="w-2/5 text-gray-400">GitHub Repositorys:</div><Link href={"https://github.com/qwerty084/LF8"} target="_blank">LF8-Chirp Messenger</Link></div>
              <div className="flex mb-6"><div className="w-2/5 text-gray-400">Contributors:</div><div><p>Luca Helms,</p> <p>Filip ,</p> <p>Fabian Labus,</p><p>Luca Naujoks</p></div></div>
            </div>
          </div>

          <div id="main_card" className="w-2/5 h-full mt-12 z-10 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
            <div id="head" className="flex items-center pl-2 gap-1 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            </div>
            <div id="body" className="flex border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
              Live demo
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}