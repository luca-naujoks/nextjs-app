"use client"
import { calculateAge } from "@/components/age-component";

import { useEffect } from "react";

export default function Home() {
  const age = calculateAge();

  useEffect(() => {
  }, []);

  return (
    <div className="whitespace-nowrap overflow-auto scrollbar-hide">
    </div>
  );
}