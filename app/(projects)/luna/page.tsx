"use client"
import Image from 'next/image'
import Link from 'next/link'
import { LoadingBubbles } from '@/components/loading.component'
import { ProjectCard, ProjectDetail } from '@/components/projectcard.component'
import { usePathname } from 'next/navigation'

interface MessageWrapperProps {
    children: React.ReactNode;
    type: string;

}

const MessageWrapper = ({ children, type }: MessageWrapperProps) => {
    return (
        <div className={`w-full flex ${type == "ai" ? "justify-start" : "justify-end"} w-full h-fit p-4 rounded-xl`}>
            <p className={`w-1/2 p-2 ${type == "ai" ? "bg-slate-800 bg-opacity-50 rounded-r-xl rounded-bl-xl" : "bg-slate-800 rounded-l-xl rounded-br-xl"}`}>
                {children}
            </p>
        </div>
    )
};

export default function Home() {
    const pathname = usePathname()
    return (
        <div className="flex flex-col-2 p-2">
            <div className='w-1/2 ml-12'>
                <ProjectCard projectTitle='LUNA AI'>
                    <div className='ml-4'>
                        <ProjectDetail label="Model Name:">
                            <p>LUNA Core</p>
                        </ProjectDetail>
                        <ProjectDetail label="Trained On:">
                            <p>Personal Assistance,</p>
                            <p>Modular expandability</p>
                        </ProjectDetail>
                        <ProjectDetail label="Last Updated:">
                            <p>06.02.2024</p>
                        </ProjectDetail>
                        <ProjectDetail label="Includes as Module:">
                            <p>LUNA Gaming Model</p>
                        </ProjectDetail>
                        <ProjectDetail label="Interaction:">
                            <p className='mb-12'>Through system integration</p>
                        </ProjectDetail>

                        <ProjectDetail label="Model Name:">
                            <p>LUNA Gaming Model</p>
                        </ProjectDetail>
                        <ProjectDetail label="Trained On:">
                            <p>Minecraft</p>
                            <p>Oxygen Not Included</p>
                            <p>AmongUs</p>
                            <p>Raft</p>
                            <p>Cyberpunk 2077 (just informations)</p>
                        </ProjectDetail>
                        <ProjectDetail label="Last Updated:">
                            <p>06.02.2024</p>
                        </ProjectDetail>
                        <ProjectDetail label="Gameplay Interactions:">
                            <p className='mb-6'>Through system integration via Software</p>
                        </ProjectDetail>
                    </div>

                </ProjectCard>
            </div>

            <div id="example_chat" className="w-1/3 mx-auto mt-8 shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)]">
                <div id="head" className="flex items-center pl-2 gap-1 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </div>
                <div id="body" className="flex border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 h-full w-full rounded-b-xl">
                    <p className='text-center text-gray-200 text-xl opacity-75'>LUNA Gaming Model</p>
                    <MessageWrapper type='user'>
                        <p>Hi LUNA, are you familiar with Cyberpunk 2077?</p>
                    </MessageWrapper>
                    <MessageWrapper type='ai'>
                        <p>Yes, it&apos;s an open-world, Cyber, action-adventure game.</p>
                    </MessageWrapper>
                    <MessageWrapper type='user'>
                        <p>Any tips for the &quot;Down on the Street&quot; mission?</p>
                    </MessageWrapper>
                    <MessageWrapper type='ai'>
                        <p>Use a variety of weapons, explore for items and choose your dialogues wisely.</p>
                    </MessageWrapper>
                    <MessageWrapper type='user'>
                        <p>Where can I find the Sandevistan that David uses in the game?</p>
                    </MessageWrapper>
                    <MessageWrapper type='ai'>
                        <p>It&apos;s available at every Ripperdoc in Night City in a variety of versions and variations.</p>
                    </MessageWrapper>
                </div>
            </div>
        </div>
    );
}