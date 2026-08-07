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
    _id: "project-api",
    title: "Portfolio REST API",
    description:
      "Node/Express/MongoDB backend serving all of this site's content — projects, skills, experience, and more — over a versioned REST API, with static image hosting and a database-driven, no-redeploy-to-edit-content architecture.",
    category: "Web Application",
    status: "Completed",
    skillsUsed: [
      "skill-node",
      "skill-mongodb",
      "skill-typescript",
      "skill-github-actions",
    ],
    githubUrl: "https://github.com/shafi-hassan0/portfolio-website-api",
    demoUrl: "https://shafihassan.com/api/health",
    images: [
      {
        url: "/images/projects/portfolio-api.png",
        caption: "Portfolio REST API",
      },
    ],
    featured: true,
    dateCreated: "2026",
    published: true,
  },
  {
    _id: "project-ui",
    title: "Portfolio Frontend",
    description:
      "Angular single-page application for shafihassan.com — every page (projects, skills, experience, resume, even a small playground of mini-games) driven by live data from the companion REST API rather than hardcoded content.",
    category: "Web Application",
    status: "Completed",
    skillsUsed: [
      "skill-angular",
      "skill-typescript",
      "skill-tailwind",
      "skill-github-actions",
    ],
    githubUrl: "https://github.com/shafi-hassan0/portfolio-website-ui",
    demoUrl: "https://shafihassan.com",
    images: [
      {
        url: "/images/projects/portfolio-ui.png",
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
  {
    _id: "project-infra",
    title: "Portfolio Deployment Infra",
    description:
      "Docker Compose stack running the portfolio's backend, frontend, and Nginx reverse proxy on a home server, exposed to the internet via a Cloudflare Tunnel with no inbound ports opened. GitHub Actions pipeline deploys automatically on every backend/frontend push, then dispatches and waits on the downstream test suites, reporting their real pass/fail back as its own job status.",
    category: "DevOps",
    status: "Completed",
    skillsUsed: [
      "skill-docker",
      "skill-cloudflare",
      "skill-git",
      "skill-github-actions",
    ],
    githubUrl: "https://github.com/shafi-hassan0/portfolio-website-infra",
    demoUrl: "",
    images: [
      {
        url: "/images/projects/portfolio-infra.png",
        caption: "Deployment Infra",
      },
    ],
    featured: false,
    dateCreated: "2026",
    published: true,
  },
];
