export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export interface ProjectSeed {
  _id: string;
  title: string;
  description: string;
  category: string;
  status: ProjectStatus;
  skillsUsed: string[];
  githubUrl: string;
  demoUrl: string;
  images: { url: string; caption: string }[];
  featured: boolean;
  dateCreated: string;
  published: boolean;
}

export const projectsData: ProjectSeed[] = [
  {
    _id: "project-portfolio",
    title: "Personal Portfolio Platform",
    description:
      "Full-stack portfolio application built using Angular, Node.js, and MongoDB. Designed around a database-driven architecture with REST APIs.",
    category: "Web Application",
    status: "In Progress",
    skillsUsed: [
      "skill-angular",
      "skill-node",
      "skill-mongodb",
      "skill-typescript",
    ],
    githubUrl: "https://github.com/shafi-hassan0/portfolio-website",
    demoUrl: "",
    images: [
      {
        url: "/images/projects/portfolio.png",
        caption: "Portfolio Dashboard",
      },
    ],
    featured: true,
    dateCreated: "2026",
    published: true,
  },
];
