import {useEffect, useState} from "react";

export function ProjectProgress({title, progress}: { title?: string, progress: number }) {
    const [progressPercentage, setProgressPercentage] = useState(0);
    const duration = 1000; // 1 second

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressPercentage(prev => {
                if (prev < progress) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, duration / progress);

        return () => clearInterval(interval);
    }, [progress, duration]);

    return (
        <div className={title ? "flex-col items-center w-full md:w-1/2" : "flex-col items-center w-full md:w-full"}>
            <div className={title ? "flex justify-between" : "flex justify-center"}>
                <p className={title ? "block": "hidden"}>{title}</p>
                <p className="text-sm" style={{left: `${progressPercentage}%`}}>{progressPercentage}%</p>
            </div>

            <div className="w-full">
                <div className="h-2 bg-gray-200 rounded-lg">
                    <div className="h-2 bg-purple-500 rounded-lg" style={{width: `${progressPercentage}%`}}/>
                </div>
            </div>
        </div>
    )

}