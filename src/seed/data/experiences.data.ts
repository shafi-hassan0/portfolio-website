export interface ExperienceSeed {
  _id: string;
  company: string;
  role: string;
  logo: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  skillsUsed: string[];
  order: number;
  published: boolean;
}

export const experiencesData: ExperienceSeed[] = [
  {
    _id: "experience-kinsale",
    company: "Kinsale Insurance",
    role: "QA Analyst",
    logo: "/images/exp/kinsale-insurance.svg",
    location: "Richmond, VA",
    employmentType: "Full-Time",
    startDate: "2023-07",
    endDate: null,
    description:
      "Quality Engineer architecting frontend and backend test automation frameworks across SCRUM and KANBAN release cycles, integrating suites into CI/CD pipelines and mentoring teammates on automation and quality engineering best practices.",
    responsibilities: [
      "Architected and maintained a frontend test automation framework in Playwright across JavaScript and TypeScript over 3+ years, verifying software quality across SCRUM and KANBAN release cycles",
      "Built and scaled backend service test automation using Pytest over 1.5 years, validating API behavior and business logic across microservices prior to release",
      "Authored test strategy documents, test automation plans, and load testing NFR specifications, sharing testing knowledge and best practices to help teammates grow their own quality engineering skills",
      "Created and maintained detailed test case documentation for both classic and target-state applications, ensuring traceability from requirements to test outcomes",
      "Partnered with the QAOPS team to build and automate test suites for legacy applications, mentoring teammates on automation best practices to raise testing capability and improve process efficiency org-wide",
      "Integrated frontend and backend automated test suites into CI/CD pipelines, enabling any engineer to trigger and run tests on demand, reducing manual testing overhead and supporting a sustainable team pace",
      "Used Claude and custom AI skill development to accelerate test framework development and automate repetitive engineering tasks",
    ],
    skillsUsed: [
      "skill-playwright",
      "skill-pytest",
      "skill-typescript",
      "skill-python",
      "skill-javascript",
      "skill-selenium",
      "skill-gatling",
      "skill-jmeter",
      "skill-gitlab-cicd",
      "skill-postman",
      "skill-git",
      "skill-jira",
      "skill-claude",
      "skill-ai-skill-development",
    ],
    order: 1,
    published: true,
  },
  {
    _id: "experience-tahzoo",
    company: "Tahzoo",
    role: "Software Engineer",
    logo: "/images/exp/tahzoo.svg",
    location: "Richmond, VA",
    employmentType: "Full-Time",
    startDate: "2022-05",
    endDate: "2023-06",
    description:
      "Frontend software engineer developing React web components for a fully remote, distributed team, building Cypress automation frameworks from the ground up and applying QA practices to verify output against design specifications.",
    responsibilities: [
      "Developed functional web components using React in a fully remote, distributed team environment, applying QA testing practices to verify output against design specifications",
      "Integrated CMS ContentStack for structured data management, maintaining data integrity and consistency across remote client deliverables",
      "Communicated daily in fully remote Agile/Scrum ceremonies, ensuring every distributed team member had equal visibility into progress and blockers regardless of location or time zone",
      "Collaborated asynchronously with a cross-functional, geographically distributed team of developers, BAs, and DevOps, fostering an inclusive workflow across varied schedules and time zones",
      "Built Cypress automation frameworks from the ground up for new web applications, establishing repeatable, scalable test coverage integrated into the remote development workflow",
      "Participated in remote code reviews and managed code repositories using Git to enforce standards and maintain version control integrity across a distributed team",
    ],
    skillsUsed: [
      "skill-react",
      "skill-javascript",
      "skill-cypress",
      "skill-git",
      "skill-jira",
      "skill-tailwind",
    ],
    order: 2,
    published: true,
  },
];
