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
  {
    title: "Whiteboard online",
    description:
      "A collaborative whiteboard where you can draw and chat with your friends in realtime.",
    image: "/projects/whiteboard_project.png",
    projectLinks: [
      {
        href: "https://tutoring-app-djdisterenterpise.koyeb.app/",
        name: "Demo",
      },
      {
        href: "https://github.com/DjDister/tutoring-app-v2",
        name: "Github",
        icon: <GithubIcon />,
      },
    ],
    techStack: ["React", "ExpressJs", "Socket.io", "TypeScript"],
  },
  {
    title: "Algorithms visualizer",
    description:
      "An interactive web application that visualizes different sorting algorithms. Which is being extended whenever I find a free time.",
    image: "/projects/algorithms_project.png",
    projectLinks: [
      {
        href: "https://algorithms-view.vercel.app/sorting-algorithms/merge-sort",
        name: "Demo",
      },
      {
        href: "https://github.com/DjDister/Algorithms-View",
        name: "Github",
        icon: <GithubIcon />,
      },
    ],
    techStack: ["React", "TypeScript"],
  },
  {
    title: "Stock Market Dashboard",
    description:
      "Developed with friends a stock market app to play with stocks and see the performance of the portfolio.",
    image: "/projects/stock_market_project.png",
    projectLinks: [
      {
        href: "https://stock-market-famk.vercel.app/",
        name: "Demo",
      },
      {
        href: "https://github.com/DjDister/StockMarketFAMK",

        name: "Github",
        icon: <GithubIcon />,
      },
    ],
    techStack: ["React", "TypeScript"],
  },
];
