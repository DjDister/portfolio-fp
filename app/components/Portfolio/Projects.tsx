import { ProjectType } from "@/types/Portoflio.types";
import React from "react";
import Project from "./Project";
import GithubIcon from "../assets/GithubIcon";

const PROJECTS: ProjectType[] = [
  {
    title: "Promotional landing page for our favorite show",
    description:
      "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
    image: "https://via.placeholder.com/150",
    projectLinks: [
      { href: "https://demo.com", name: "Demo" },
      { href: "https://github.com", name: "Github", icon: <GithubIcon /> },
    ],
    techStack: ["React", "TypeScript", "Three.js"],
  },
];

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
