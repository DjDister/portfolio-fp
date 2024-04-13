import GithubIcon from "@/app/components/assets/GithubIcon";
import { ProjectType } from "@/types/Portoflio.types";

export const PROJECTS: ProjectType[] = [
  {
    title: "Portfolio page",
    description:
      "Embark on my inaugural expedition into Three.js, where I navigate the complexities of 3D space and camera movement.",
    image: "/projects/portfolio_project.png",
    projectLinks: [
      { href: "https://portfolio-fp-navy.vercel.app/", name: "Demo" },
      {
        href: "https://github.com/DjDister/portfolio-fp",
        name: "Github",
        icon: <GithubIcon />,
      },
    ],
    techStack: ["NextJs", "TypeScript", "Three.js"],
  },
];
