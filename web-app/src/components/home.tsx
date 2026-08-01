import avatar from "../assets/avatar/personal-logo.webp"
import avatarAVIF from "../assets/avatar/personal-logo.avif"
import avatarSVG from "../assets/avatar/personal-logo.svg"

interface ICompetency {
    title: string,
    competencies: string[]
}

export function Home() {
    const competencies: ICompetency[] = [
        {title: "Frameworks", competencies: ["Gin-Gonic", "NextJS", "React", "SolidJS"]},
        {title: "Operating Systems", competencies: ["macOS", "Debian", "Proxmox", "Docker"]},
        {title: "Databases", competencies: ["PostgreSQL", "SQLite", "MongoDB"]},
        {title: "Programming Languages", competencies: ["GoLang", "TypeScript", "Python"]}
    ]

    return (
        <div class={"home-wrapper"}>
            <div class={"relative grid grid-cols-1 lg:grid-cols-5 gap-4 h-full w-3/4 lg:w-2/3"}>
                <div class={"hidden lg:flex col-span-1 row-span-1 card avatar-Card"}>
                    <picture>
                        <source srcset={avatarSVG} type={"image/svg+xml"}/>
                        <source srcset={avatarAVIF} type={"image/avif"}/>
                        <source srcset={avatar} type={"image/webp"}/>

                        <img src={avatar} alt={"personal-logo"} width={320} height={320}/>
                    </picture>
                </div>
                <div class={"col-span-1 lg:col-span-4 row-span-1 card"}>
                    <h1 class={"mb-4 text-2xl"}>luca-naujoks</h1>
                    <p class={"inline w-2/3 md:w-3/5 lg:w-1/2"}>
                        I'm luca a <span class={"highlight"}>full‑stack</span> developer focused around
                        Golang and the Web.
                        I am building Backends with <span class={"highlight"}>Golang</span> and frontend facing parts
                        with <span class={"highlight"}>React, SolidJS</span> and <span
                        class={"highlight"}>Tailwind CSS</span>.
                    </p>
                </div>
                <div class={"col-span-1 lg:col-span-5 row-span-2 card"}>
                    <h1 class={"mb-8 text-2xl"}>My Competencies</h1>
                    <div class={"flex flex-col divide-y divide-white/10"}>
                        {competencies.map((competency: ICompetency) => (
                            <div class={"flex items-center justify-between py-3 text-lg"}>
                                <h2 class={"text-white/60 text-base font-medium w-1/4 shrink-0"}>{competency.title}</h2>
                                <div class={"flex flex-wrap gap-x-3 gap-y-1 justify-end"}>
                                    {competency.competencies.map((item: string, index: number) => (
                                        <>
                                            {index > 0 && <span class={"text-white/30 select-none"}>·</span>}
                                            <span>{item}</span>
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


