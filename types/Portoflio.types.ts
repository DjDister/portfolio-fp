export type ProjectType = {
  title: string;
  description: string;
  image: string;
  projectLinks: ProjectLink[];
  techStack: string[];
};

export type ProjectLink = {
  href: string;
  name: string;
  icon?: JSX.Element;
};
