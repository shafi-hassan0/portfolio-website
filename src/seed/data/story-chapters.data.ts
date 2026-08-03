export interface StoryChapterSeed {
  chapterNumber: number;
  title: string;
  dateStart: string;
  dateEnd: string;
  content: string;
  images: { url: string; caption: string }[];
  order: number;
  published: boolean;
}

export const storyChaptersData: StoryChapterSeed[] = [
  {
    chapterNumber: 1,
    title: "The First Line of Code",
    dateStart: "2000s",
    dateEnd: "2010s",
    content:
      "My first encounter with technology was not through a classroom or a computer science program. It started at my parents' pc center. While helping at the register, I found myself with some downtime and noticed a textbook my mom had sitting around about building HTML webpages. Out of curiosity, I started reading it.\n\nAs I flipped through the pages, something clicked. The idea that someone could write instructions and create something that appeared on a screen fascinated me. I decided to try it myself. With no real experience, I created a simple webpage containing my name, information about myself, and messages for my parents.\n\nIt was a small project, but to me it felt like magic. I had taken an idea, written something myself, and created something that did not exist before.\n\nWhen I showed my parents the webpage, seeing their excitement and pride gave me a feeling I never forgot. That moment sparked my curiosity and planted the seed that would eventually grow into my passion for software development, problem solving, and building things that people can interact with.",
    images: [
      {
        url: "/images/story/pc-center.png",
        caption: "Where my curiosity for technology began",
      },
    ],
    order: 1,
    published: true,
  },
  {
    chapterNumber: 2,
    title: "Finding My Path",
    dateStart: "2018",
    dateEnd: "2020",
    content:
      "When I first started college at Virginia Commonwealth University, I did not yet know exactly where I wanted my future to lead. Following the advice of my parents, I initially pursued dentistry. I knew it was a respected career path, but over time I realized it was not something I was truly passionate about.\n\nThe biology courses were challenging, expensive, and more importantly, they did not give me the same excitement I felt when creating things with technology. I began looking for another direction and discovered the associate degree programs available through the local community colleges.\n\nI decided to attend John Tyler Community College to explore different fields and find something that genuinely interested me. That is where I rediscovered computer science.\n\nMy first programming classes immediately brought back the feeling I had years earlier when I created my first HTML page. I loved the process of breaking down problems, designing solutions, and watching something I built come to life.\n\nOne of my earliest programming assignments was to create a program using a for loop. The assignment was open to anything so I created a program that printed the lyrics from 'This Old Man' based on user input. Instead of just completing the requirement, I built a small interactive application where a user could enter a number and the program would display the corresponding verse.\n\nWhen I proudly brought the program home to show my parents, my first real software bug was discovered. My mother entered a letter instead of a number, and the program immediately failed.\n\nAt the time, that bug was frustrating. I had built something I was proud of, and seeing it break was disappointing. Looking back, that moment taught me one of the most important lessons in software engineering: users will always interact with your software in ways you don't expect, and building reliable solutions requires thinking beyond the happy path.\n\nThat small bug report became one of my earliest lessons in problem solving, testing, and understanding that great software is built by continuously learning and improving.",
    images: [
      {
        url: "/images/story/john-tyler.png",
        caption: "Discovering computer science",
      },
    ],
    order: 2,
    published: true,
  },
  {
    chapterNumber: 3,
    title: "Building My Foundation",
    dateStart: "2020",
    dateEnd: "2023",
    content:
      "After discovering my passion for computer science at John Tyler Community College, I transferred back to Virginia Commonwealth University with a renewed sense of purpose. This time I wasn't simply pursuing a degree—I was pursuing a career that genuinely excited me.\n\nAt VCU, every course felt like another piece of a much larger puzzle. Algorithms taught me how to think efficiently, database courses showed me how information could be organized and connected, and software engineering introduced me to the importance of collaboration, architecture, and writing maintainable code. I found myself spending more time outside the classroom experimenting with new technologies, building small applications, and constantly asking myself how things worked beneath the surface.\n\nOne of the greatest lessons I learned during this time was that software development isn't just about writing code. It's about solving problems for people. Every assignment challenged me to think critically, break down complex problems into manageable pieces, and build solutions that were reliable and understandable.\n\nBy the time I graduated with a Bachelor of Science in Computer Science, I had gained far more than technical knowledge. I had developed the confidence to tackle unfamiliar problems, the curiosity to keep learning, and the determination to continue growing as an engineer long after graduation.",
    images: [
      {
        url: "/images/story/vcu.svg",
        caption: "Graduating from Virginia Commonwealth University",
      },
    ],
    order: 3,
    published: true,
  },
  {
    chapterNumber: 4,
    title: "From Classroom to Career",
    dateStart: "2022",
    dateEnd: "2023",
    content:
      "While I was still completing my degree, I was given the opportunity to begin my professional career at Tahzoo. It was my first experience working alongside experienced software engineers on applications used by real clients, and it completely changed my perspective on software development.\n\nThe projects were larger than anything I had built in school, and every decision mattered. I learned how teams collaborated through Agile ceremonies, participated in code reviews, worked with version control systems, and experienced firsthand how communication was just as important as technical ability.\n\nAs I developed React components and worked with modern web technologies, I also became increasingly interested in software quality. I found myself asking questions beyond 'Does it work?' and instead wondered 'How can we be confident it will continue working tomorrow?' That curiosity naturally led me toward automated testing.\n\nI had the opportunity to build Cypress automation frameworks from the ground up for new applications. Seeing automated tests quickly validate entire user workflows showed me how powerful quality engineering could be. It wasn't just about finding bugs—it was about giving developers confidence to move faster while protecting the user experience.\n\nLooking back, Tahzoo gave me something invaluable: my first glimpse into what professional software engineering truly looked like and introduced me to the world of automation that would shape the next stage of my career.",
    images: [
      {
        url: "/images/story/tahzoo.jpg",
        caption: "My first professional software engineering experience",
      },
    ],
    order: 4,
    published: true,
  },
  {
    chapterNumber: 5,
    title: "Engineering for Quality",
    dateStart: "2023",
    dateEnd: "Present",
    content:
      "Joining Kinsale Insurance marked another turning point in my journey. While my previous experience introduced me to automation, Kinsale allowed me to fully immerse myself in the discipline of quality engineering.\n\nI quickly learned that quality isn't something added at the end of development—it is something that should be built into every stage of the software lifecycle. I began designing and maintaining Playwright and Pytest automation frameworks, creating reliable API tests, integrating automated testing into CI/CD pipelines, and collaborating closely with developers to improve both software quality and engineering processes.\n\nAs my experience grew, I found myself contributing beyond writing automated tests. I authored testing strategies, created automation plans, developed load testing specifications, and helped teammates expand their own automation knowledge. One of the most rewarding aspects of my work has been building tools and frameworks that enable other engineers to work more efficiently and confidently.\n\nThinking back to the day my mother accidentally broke my first computer program by entering a letter instead of a number, I realize that experience shaped more of my career than I ever expected. Today, I spend my time anticipating those unexpected situations before users ever encounter them. That early lesson in thinking beyond the happy path became the foundation of my approach to quality engineering.",
    images: [
      {
        url: "/images/story/kinsale.png",
        caption: "Building confidence through automation",
      },
    ],
    order: 5,
    published: true,
  },
  {
    chapterNumber: 6,
    title: "Always Building",
    dateStart: "2026",
    dateEnd: "Present",
    content:
      "One of the things I love most about technology is that there is always something new to learn. My career has taught me that great engineers never stop growing, and that mindset has become a guiding principle in both my professional and personal projects.\n\nOutside of work, I enjoy exploring full-stack development, cloud technologies, and software architecture. Building this portfolio has become much more than creating a website—it has been an opportunity to design APIs, model databases, architect scalable applications, and tell the story of my journey in a way that reflects who I am as an engineer.\n\nWhether I'm developing automation frameworks, designing REST APIs, experimenting with cloud infrastructure, or creating entirely new applications, I find the same excitement that I felt years ago while reading that HTML textbook in my parents' pc center.\n\nLooking ahead, my goal is simple: continue learning, continue building, and continue creating software that makes a meaningful impact. Every project is another opportunity to improve, every challenge is another lesson, and every line of code is another step forward in a journey that is still just getting started.",
    images: [
      {
        url: "/images/story/future.png",
        caption: "The journey continues",
      },
    ],
    order: 6,
    published: true,
  },
];
