import {ProjectCard} from "@/utils/cards-component";

export default function Page() {
    return (
            <div className={`grid grid-cols-5 grid-rows-11 gap-4 p-4`}>
                <div className={`hidden md:block`}/>
                <div className={`flex justify-around bg-white p-2 rounded-md col-span-5 md:col-span-4 row-span-1`}>
                    <a className="cursor-pointer hover:font-semibold text-xs md:text-lg"
                       id="home" href={"/"}>Home</a>
                    <a className="cursor-pointer hover:font-semibold text-xs md:text-lg"
                       id="profile"
                       href={"/profile"}>My Profile</a>
                    <a className="cursor-pointer hover:font-semibold text-xs md:text-lg"
                       id="projects" href={"/projects"}>Projects</a>
                </div>


                <ProjectCard title={"NextJs-App"} description={"My little personal website"} progress={70}
                             url={"https://github.com/luca-naujoks/nextjs-app"}/>
                <ProjectCard title={"DiscordJS Bot"} description={"My Discord bot is written in TypeScript using the DiscordJS library."} progress={100}
                             url={"https://github.com/luca-naujoks/discordJSBot"}/>
                <ProjectCard title={"Chirp Messenger"} description={"It started as a school project. Now it is a live messenger."} progress={30}
                             url={"https://github.com/luca-naujoks/chirpMessenger"}/>
                <ProjectCard title={"Marketplace"} description={"A marketplace that combines Amazon, Fiverr, and Etsy"} progress={40}
                             url={"https://github.com/luca-naujoks/Marketplace"}/>
                <ProjectCard title={"Anisquid Data Scraper"} description={"This was a little side project for testing and playing around with web scraping."} progress={100}
                             url={"https://github.com/luca-naujoks/AniSquid-DataScraper"}/>
                <ProjectCard title={"Cook & Book"} description={"An ordering and processing program for restaurants with front-ends for ordering and for the kitchen. Automatic scheduling, payment calculation and table management."} progress={0}
                             url={""}/>

            </div>
    )
}