"use client";

import dynamic from "next/dynamic";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Interests } from "@/components/interests";
import { Courses } from "@/components/courses";



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <main className="relative z-10">
        <About />
        <Education />
        <Interests />
        <Courses />
      </main>
    </div>
  );
}
