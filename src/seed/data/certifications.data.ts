export interface CertificationSeed {
  name: string;
  issuer: string;
  dateEarned: string;
  credentialUrl: string;
  image: string;
  published: boolean;
}

export const certificationsData: CertificationSeed[] = [
  {
    name: "ISTQB Certified Tester Advanced Level Test Automation Engineer",
    issuer: "ISTQB",
    dateEarned: "2025-09",
    credentialUrl:
      "https://atsqa.org/documents/certificates/ecdc7b4ac28e42dc9996c7e7bd2bc4c8-certificate.pdf?v=0805056bcf71e77b705789eb2d9624b4",
    image: "/images/tae.png",
    published: true,
  },
  {
    name: "ISTQB Certified Tester Advanced Level Test Analyst",
    issuer: "ISTQB",
    dateEarned: "2025-08",
    credentialUrl:
      "https://atsqa.org/documents/certificates/92bf2edd30504f57b4ac3098554c19a0-certificate.pdf?v=89fe43e477b9c00f22b1506f81977500",
    image: "/images/ta.png",
    published: true,
  },
  {
    name: "ISTQB Certified Tester Foundation Level Agile Tester",
    issuer: "ISTQB",
    dateEarned: "2024-05",
    credentialUrl:
      "https://atsqa.org/documents/certificates/b3a4de6b77384f00b50e3b76b1145cc5-certificate.pdf?v=e9dfbbb688563e8503b316ddda2f24ac",
    image: "/images/at.png",
    published: true,
  },
  {
    name: "ISTQB Certified Tester Foundation Level",
    issuer: "ISTQB",
    dateEarned: "2024-05",
    credentialUrl:
      "https://atsqa.org/documents/certificates/9322ed155350424d93701fc26121ab81-certificate.pdf?v=0c7eeb764a54874c281c814460dcee80",
    image: "/images/base.png",
    published: true,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    dateEarned: "2023-07",
    credentialUrl: "https://www.credly.com/badges/263fc8d5-f173-454d-abb5-58a6b2a7265b",
    image: "/images/cp.png",
    published: true,
  },
];
