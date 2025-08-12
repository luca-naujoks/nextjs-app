export default function Home() {
    return (
        <div className={`flex w-full h-full p-4 bg-foreground/50 rounded-md`}>
            <div className={"border-r border-foreground p-4"}>
                <p className="pt-4 text-xl">
                    Hi, I am luca, a system integrator and full stack developer from Germany. <br/>
                    <br/>
                    My core competencies are in the area of Java/TypeScript.<br/> But I also have
                    a broad portfolio from basic to advanced skills in Python, Java and
                    Golang.
                    <br/>
                    <br/>
                    Interests:
                    Experiences:
                </p>
            </div>
            <div className={"border-l border-foreground p-4"}>
                <h1 className="mt-4 text-callToAction2 text-xl font-semibold">
                    Volunteer Firefighter:
                </h1>
                <p className="text-xl">
                    I am a volunteer firefighter since 2017 and mastered a good amount
                    of calls and challenges with my team.
                </p>
                <h1 className="mt-4 text-callToAction2 text-xl font-semibold">
                    Developing:
                </h1>
                <p>
                    I started my career around 2019 with a friend developing Discord
                    bots with Python, and have grown in skill and professionalism since
                    then.
                </p>
            </div>
        </div>
    );
}
