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
    status: "Completed",
    skillsUsed: [
      "skill-angular",
      "skill-node",
      "skill-mongodb",
      "skill-typescript",
      "skill-github-actions",
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
  {
    _id: "project-api-tests",
    title: "Portfolio API Test Suite",
    description:
      "REST Assured API test suite covering the portfolio backend's endpoints, with positive and negative coverage — validation errors, not-found on both valid and malformed IDs, unknown routes — plus a tag-gated live test for the contact form and a GitHub Actions pipeline that runs nightly against production and is triggered automatically whenever the backend changes.",
    category: "Test Automation",
    status: "Completed",
    skillsUsed: [
      "skill-java",
      "skill-maven",
      "skill-rest-assured",
      "skill-junit",
      "skill-github-actions",
    ],
    githubUrl: "https://github.com/shafi-hassan0/portfolio-api-tests",
    demoUrl: "",
    images: [
      {
        url: "/images/projects/portfolio-api-testing.png",
        caption: "API Test Suite",
      },
    ],
    featured: false,
    dateCreated: "2026",
    published: true,
  },
];
