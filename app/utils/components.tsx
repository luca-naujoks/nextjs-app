"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeadLine({
  name,
  icon,
  className,
}: {
  name: string;
  icon: string;
  className?: string;
}) {
  return (
    <div id="headline" className={className + ` flex items-center rounded-md`}>
      <Image
        width={200}
        height={200}
        src={icon}
        alt="headline icon"
        className="h-14 w-14"
      />
      <span>{name}</span>
    </div>
  );
}

export function TechStackItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className="flex items-center justify-center p-2 bg-white/25 shadow-md rounded-md"
      title={name}
    >
      <Image
        width={200}
        height={200}
        src={icon}
        alt={name + " icon"}
        className="h-16 w-16"
      />
    </div>
  );
}

export function ProjectStackItem({
  name,
  icon,
  description,
  state,
  mainTechnology,
}: {
  name: string;
  icon: string;
  description: string;
  state: string;
  mainTechnology: string;
}) {
  const router = useRouter();
  function StateSwitch({ state }: { state: string }) {
    switch (state) {
      case "finished":
        return (
          <div className="w-4 h-4 bg-green-500 rounded-full" title="finished" />
        );
      case "in progress":
        return (
          <div
            className="w-4 h-4 bg-purple-500 rounded-full"
            title="in progress"
          />
        );
      default:
        return (
          <div className="w-4 h-4 bg-red-500 rounded-full" title="planned" />
        );
    }
  }

  return (
    <div
      className="flex items-center justify-start p-2 bg-white/25 shadow-md rounded-md"
      onClick={() => router.push("/project?project=" + name)}
      title={mainTechnology}
    >
      <Image
        width={200}
        height={200}
        src={icon}
        alt={name + " icon"}
        className="h-16 w-16"
      />
      <div className="w-full h-full">
        <section className="flex justify-between w-full">
          <h1 className="projectName">{name}</h1>
          <StateSwitch state={state} />
        </section>
        <div className="projectDescription">{description}</div>
      </div>
    </div>
  );
}
