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
    githubUrl: "https://github.com/shafi-hassan0/portfolio-website-api",
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
    githubUrl: "https://github.com/shafi-hassan0/portfolio-website-api-tests",
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
  {
    _id: "project-ui-tests",
    title: "Portfolio UI Test Suite",
    description:
      "Playwright end-to-end suite covering every page of the portfolio frontend, with content cross-checked live against the API rather than hardcoded — navigation, forms, the skills/experience detail dialogs, slider navigation and image loading, working external links, and all six Playground games — plus a GitHub Actions pipeline triggered automatically whenever the frontend deploys, reporting results back as a commit status.",
    category: "Test Automation",
    status: "Completed",
    skillsUsed: [
      "skill-playwright",
      "skill-node",
      "skill-github-actions",
      "skill-typescript",
    ],
    githubUrl: "https://github.com/shafi-hassan0/portfolio-website-ui-tests",
    demoUrl: "",
    images: [
      {
        url: "/images/projects/portfolio-ui-testing.png",
        caption: "UI Test Suite",
      },
    ],
    featured: false,
    dateCreated: "2026",
    published: true,
  },
];
