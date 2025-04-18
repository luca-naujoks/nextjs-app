import { Navigation } from "@/components/Navigation";
import { PageHeadding } from "@/components/PageHeadding";
import { TechStackCard } from "@/components/TechStackCard";
import { links } from "@/lib/constants";

export default function Home() {
  return (
    <div className="h-full flex flex-col px-12">
      <Navigation links={links} />
      <PageHeadding label="All around" />
      <PageHeadding label="Development" />
      <PageHeadding label="luca-naujoks" size="text-xl" />
      <p className="w-1/2 mt-12 border-callToAction2 border hidden lg:block" />
      <div
        id="innerBody"
        className="flex flex-col flex-grow lg:justify-between w-full bg-foreground mt-24 px-12 pt-12 rounded-t-xl bg-radial-[at_0%_0%] from-callToAction2 to-foreground to-75%"
      >
        <PageHeadding label="My Tech Stack" size="text-4xl" />
        <div className="flex flex-col lg:flex-row justify-around lg:justify-between items-center lg:items-end w-full h-full mt-12 lg:mt-0 ">
          <TechStackCard
            label="Frontend"
            listItems={[
              "NextJS",
              "React",
              "TypeScript",
              "Tailwindcss",
              "SPFx",
              "Docker",
            ]}
          />
          <TechStackCard
            label="Backend"
            listItems={["NestJS", "TypeScript", "TypeOrm", "Docker"]}
          />
          <TechStackCard
            label="Databases"
            listItems={["SQLite", "PostgreSQL", "MongoDB", "neo4j"]}
          />
        </div>
      </div>
    </div>
  );
}
