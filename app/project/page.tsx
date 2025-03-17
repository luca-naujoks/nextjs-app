"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const projectName = useSearchParams().get("project");
  const router = useRouter();
  return (
    <div>
      <h1>Project pages will be implemented soon</h1>
      <h1>Current Project: {projectName}</h1>
      <button className="buttonStyle" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
}
