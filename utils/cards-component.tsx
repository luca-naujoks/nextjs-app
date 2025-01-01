"use client"
import React from 'react'
import {ProjectProgress} from "@/utils/project-progress-component";
import {ProjectPicture} from "@/utils/ProjectPicture-component";
import Link from "next/link";


export function BasicCard({ title, leftContent, pictorgram }: { title: string, leftContent: React.ReactNode, pictorgram: string }) {
    return (
        <div className="w-full max-w-md h-40 p-4 bg-gray-50  rounded-lg shadow-md">
            <div className="w-full h-1/6 mb-2">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <div className="flex h-4/5">
                <div className="w-1/2 p-1">
                    {leftContent}
                </div>
                <div className="w-1/2 p-2 bg-contain bg-no-repeat bg-right" style={{backgroundImage: `url(${pictorgram}`}}>
                </div>
            </div>
        </div>
    )
}

export function ProjectCard({title, description, progress, url}: { title: string, description:string, progress: number, url: string }) {
    return (
        <div className="col-span-5 md:col-span-1 row-span-5 w-full h-96 p-4 bg-white rounded-lg shadow-md">
            <div className={`h-2/5`}>
                <ProjectPicture title={title}/>

                <h2 className="text-xl font-bold">{title}</h2>
                <Link href={url} className={`flex items-center opacity-50 hover:opacity-100`}>
                    <img src={"/link.png"} alt={"link"} className={`w-4 h-4`}/>
                    {title} Repository
                </Link>
            </div>
            <div className={`h-2/5 text-wrap`}>
                {description}
            </div>
            <div className={`flex h-1/5 items-end`}>
                <ProjectProgress progress={progress}/>
            </div>
        </div>
    )
}

export function SkillBadge({title, description, image, alt, className}: { title: string, description:string, image: string, alt: string, className?: string }) {
    return (
        <div className={`flex justify-start items-center gap-4 w-64 h-32 p-2 bg-gray-100 rounded-lg cursor-pointer ${className}`}>
            <img src={image} alt={alt}/>
            <div className='flex flex-col justify-start items-start'>
                <span className={`font-bold`}>{title}</span>
                <span className={`text-sm w-32 text-wrap`}>{description}</span>
            </div>
        </div>
    )
}