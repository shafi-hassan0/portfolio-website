export interface EducationSeed {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  published: boolean;
  image?: string;
}

export const educationData: EducationSeed[] = [
  {
    school: "John Tyler Community College",
    degree: "Associate of Science",
    field: "Computer Science",
    startDate: "2018",
    endDate: "2020",
    achievements: [],
    published: true,
    image: "/images/john-tyler.png",
  },
  {
    school: "Virginia Commonwealth University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2020",
    endDate: "2023",
    achievements: [],
    published: true,
    image: "/images/vcu.jpeg",
  },
];
