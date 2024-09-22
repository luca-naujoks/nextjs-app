"use client"
import React from 'react'

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

export function ProjectCard({title, description, giturl, pictorgram}:{title: string, description: string, giturl: string, pictorgram: string}) {
    return (
        <div className="w-full max-w-md h-40 p-4 bg-gray-50  rounded-lg shadow-md">
            <div className="w-full h-1/6 mb-2">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <div className="flex h-4/5">
                <div className="w-1/2">
                    <div className="h-3/5">
                        {description}
                    </div>
                    <div className="h-1/5">
                        Repository: <a href={giturl}>GitHub</a>
                    </div>
                </div>
                <div className="w-1/2 p-2 bg-contain bg-no-repeat bg-right"
                     style={{backgroundImage: `url(${pictorgram}`}}>
                </div>
            </div>
        </div>
    )
}