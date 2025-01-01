export function ProjectProgress({title, progress}: { title: string, progress: number }) {
    return (
        <div className="flex-col items-center w-1/2">
            <div className="flex justify-between">
                <p className="">{title}</p>
                <p className="text-sm" style={{left: `${progress}%`}}>{progress}%</p>
            </div>

            <div className="w-full">
                <div className="h-2 bg-gray-200 rounded-lg">
                    <div className="h-2 bg-purple-700 rounded-lg" style={{width: `${progress}%`}}/>
                </div>
            </div>
        </div>
    )

}