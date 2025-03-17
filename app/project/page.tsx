"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const router = useRouter();

  function ProjectName() {
    const projectName = useSearchParams().get("project");
    return <h1>Current Project: {projectName}</h1>;
  }

  return (
    <div>
      <h1>Project pages will be implemented soon</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProjectName />
      </Suspense>
      <button className="buttonStyle" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
}
