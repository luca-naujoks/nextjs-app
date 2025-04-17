import { Navigation } from "@/components/Navigation";
import { PageHeadding } from "@/components/PageHeadding";
import { ProjectContainer } from "@/components/ProjectContainer";
import { links } from "@/lib/constants";

export default function Page() {
  return (
    <div className="h-full flex flex-col px-12">
      <Navigation links={links} />
      <PageHeadding label="My Projects" />
      <div
        id="innerBody"
        className="flex flex-col flex-grow justify-between w-full bg-foreground mt-24 px-12 rounded-t-xl bg-radial-[at_0%_0%] from-effect to-foreground to-50%"
      >
        <div className="flex flex-col lg:flex-row justify-around lg:justify-between lg:items-center w-full h-full overflow-scroll">
          <ProjectContainer
            label="Observer"
            description="Observer is the standard counterpart to the Oberserver-API. It
              should provide a standard user interface that leverages the power
              of the Observer-API."
            languages={["TypeScript"]}
            frameworks={["NextJS"]}
            githublink="https://github.com/luca-naujoks/observer"
          />
          <ProjectContainer
            label="Observer-API"
            description="Observer-API is a Standalone Backend for Media Servers. Its build
              to deliver a Solid Foundation for selfhosted media entertainment
              systems."
            languages={["TypeScript"]}
            frameworks={["NestJS"]}
            githublink="https://github.com/luca-naujoks/observer-backend"
          />
          <p className="w-1/4" id="SECRET PLACE HOLDER ;)" />
        </div>
      </div>
    </div>
  );
}
