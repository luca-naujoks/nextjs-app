"use client"
import { ProjectCard } from '@/components/projectcard.component'
import { usePathname } from 'next/navigation'

export default function Home() {
    const pathname = usePathname()
    return (
        <div className="flex flex-col-2">
            <div className='w-1/2'>
                <ProjectCard projectTitle='LUNA AI'>
                    <p></p>
                </ProjectCard>
            </div>
            <div className='w-1/2'>
            </div>
        </div>
    );
}