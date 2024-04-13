import { ProjectType } from "@/types/Portoflio.types";
import React from "react";
import StyledLink from "./Link";

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  return (
    <div className="w-full flex gap-8">
      <div className="w-[600px] rounded-lg aspect-square bg-[#1A1A1A] py-24 px-14 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-md h-[347px] object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <div className="text-3xl">{project.title}</div>
        <div className="text-[#C7C7C7] text-md">{project.description}</div>
        <div>
          <div className="py-2 border-[#484848]">TECHNOLOGY</div>
          <div>
            {project.techStack.map((tech) => {
              return (
                <div
                  key={tech}
                  className="mb-2 border-b-[1px] py-2 border-[#484848]"
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-8">
          {project.projectLinks.map((link) => (
            <StyledLink
              key={link.name}
              href={link.href}
              icon={link.icon}
              name={link.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
