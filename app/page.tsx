"use client"
import { calculateAge } from "@/components/age-component";

export default function Home() {
  const age = calculateAge();

  return (
    <div className="flex justify-center items-center">
      <div>

      </div>
    </div>
  );
}