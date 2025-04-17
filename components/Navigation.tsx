"use client";

import { usePathname } from "next/navigation";

export interface Ilink {
  label: string;
  to: string;
}
export function Navigation({ links }: { links: Ilink[] }) {
  const path = usePathname();

  return (
    <div className="flex justify-center w-full mt-4 mb-4">
      <div className="flex justify-between w-2/3 px-4 py-2 shadow-lg shadow-effect/75 rounded-lg">
        {links.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className={path == link.to ? "text-white" : "text-text"}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
