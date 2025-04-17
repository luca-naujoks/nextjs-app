import { Navigation } from "@/components/Navigation";
import { PageHeadding } from "@/components/PageHeadding";
import { links } from "@/lib/constants";

export default function Page() {
  return (
    <div className="h-full flex flex-col px-12">
      <Navigation links={links} />
      <PageHeadding label="About Me" />
      <div
        id="innerBody"
        className="flex flex-col lg:flex-row flex-grow w-full mt-24 px-12 bg-foreground bg-radial-[at_0%_0%] from-effect to-foreground to-50% rounded-t-xl"
      >
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full pt-8 px-4 border-b-2 lg:border-b-0 lg:border-r-2">
          <PageHeadding label="luca-naujoks" size="text-5xl" />
          <p className="pt-4 text-xl">
            Hi, I am luca, a full stack developer from Germany. <br />
            <br />
            My core competencies are in the area of JavaScript. But I also have
            a broad portfolio from basic to advanced skills in Python, Java and
            C#.
            <br />
            <br />I am currently working at Thinformatics AG as a consultant and
            developer.
            <br />
            <br />
            For more Info about my Skills or Tools i use feel free to visit my
            GitHub
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full pt-8 px-4">
          <PageHeadding label="my hobbies" size="text-5xl" />
          <p className="pt-4 text-xl">
            Volunteer Firefighter:  I am a volunteer firefighter since 2017 and
            mastered a good amount of calls and challenges with my team
            <br />
            <br />
            Developer:  I started my career around 2019 with a friend developing
            Discord bots with Python, and have grown in skill and
            professionalism since then.
          </p>
        </div>
      </div>
    </div>
  );
}
