interface ProjectCardProps {
    children: React.ReactNode;
    projectTitle: string
    scale: boolean
    className?: string
}

interface ProjectDetailProps {
    label: string;
    children: React.ReactNode;
    className?: string;
}

export const ProjectCard = ({ children, projectTitle, className, scale }: ProjectCardProps) => {
    return (
        <div id="main_card" className={`h-fit mt-8 z-10 ${scale == true ? "hover:scale-105 duration-300 cursor-pointer" : ""} hover:shadow-[0_35px_60px_-15px_rgba(112,26,117,0.3)] ${className}`}>
            <div id="head" className="flex items-center pl-2 gap-1 border border-slate-500 bg-slate-900 w-full h-10 rounded-t-xl">
                <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
            </div>
            <div id="body" className="flex border-b border-x border-slate-500 flex-col px-2 pt-2 bg-slate-900 rounded-b-xl">
                <h1 className="mb-8 font-semibold text-xl text-gray-400">{projectTitle}</h1>
                {children}
            </div>
        </div>
    )
}

export const ProjectDetail = ({ label, children, className }: ProjectDetailProps) => (
    <div className={`flex mb-2 ${className}`}>
        <div className="w-2/5 text-gray-400">{label}</div>
        <div className="w-3/5">{children}</div>
    </div>
);
