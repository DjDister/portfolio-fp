import React from "react";
import Project from "./Project";
import { PROJECTS } from "@/utils/projects.consts";

export default function Projects() {
  return (
    <div className="flex flex-col gap-24 w-full py-16 border-y-2 border-[#484848]">
      <div className="flex flex-col gap-1 ">
        <div className=" text-4xl">FEATURED PROJECTS</div>
        <div className=" text-[#C7C7C7] max-w-md text-sm mt-2">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </div>
      </div>
      {PROJECTS.map((project) => {
        return <Project key={project.title} project={project} />;
      })}
    </div>
  );
}
