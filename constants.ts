import { Education, Experience, Project, SkillCategory, SocialLink, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Derrick Chen",
  title: "Software Engineer",
  tagline: "Building scalable solutions & exploring the future of tech.",
  email: "derrickchen0201@gmail.com",
  website: "derrickchen.org",
  resumeLink: "/derrick_chen_resume.pdf",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/hiderrick", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/chenderrick", icon: "Linkedin" },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "Mail" },
];

export const EDUCATION: Education = {
  school: "Georgia Institute of Technology",
  degree: "Bachelor of Science in Computer Science",
  graduation: "Expected May 2027",
  gpa: "3.70",
  coursework: [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Design & Analysis of Algorithms",
    "Computer Architecture",
    "Operating Systems",
    "Database Design",
    "Mobile/Web Development",
    "Computer Audio"
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Next.js", "Flask", "JUnit", "Jest", "Django", "Spring Boot", "Express"]
  },
  {
    category: "Developer Tools",
    items: ["AWS", "Git/GitHub", "Vercel", "Jira", "Playwright", "Azure", "GCP", "Docker"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"]
  }
];

export const EXPERIENCE: Experience[] = [
  // {
  //   role: "Incoming Software Engineer Intern",
  //   company: "Walmart Global Tech",
  //   location: "Bentonville, AR",
  //   date: "Summer 2026",
  //   description: [
  //     "Incoming intern for the Summer 2026 cohort",
  //   ],
  //   skills: ["something cool"]
  // },
  {
    role: "Software Engineer Intern",
    company: "BigID",
    location: "Atlanta, GA",
    date: "June 2025 - Aug 2025",
    description: [
      "Developed integration for BigID customers to stream DSPM cases into AWS Security Lake using IAM and S3",
      "Built backend ETL pipelines in Node.js instead of RESTful APIs to handle terabytes of data, reducing ingestion time by over 100x",
      "Wrote Jest unit tests achieving 80%+ code coverage and built end-to-end integration tests using Jenkins for automation"
    ],
    skills: ["Node.js", "AWS S3", "AWS IAM", "ETL", "Jest", "Jenkins"]
  },
  {
    role: "Undergraduate Researcher",
    company: "GROWER Research Lab",
    location: "Atlanta, GA",
    date: "Aug 2024 - Dec 2024",
    description: [
      "Wrote Python scripts to web scrape data on power outages from 13+ sources, expanding dataset coverage by 15% of U.S. states",
      "Cleaned and analyzed datasets with 1M+ records for emergency response and public policy analysis",
      "Collaborated using Agile methodologies, partnering with Oak Ridge National Laboratory"
    ],
    skills: ["Python", "Pandas", "Matplotlib", "Data Analysis"]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "GT Notes",
    date: "July 2025 - Present",
    description: [
      "Deployed a fullstack web app with 480+ users for students to share lecture note.",
      "Designed a PostgreSQL schema with Drizzle ORM and AWS S3 for file storage",
      "Implemented stateless session management using JWT and OAuth 2.0 (Google & Microsoft)"
    ],
    stack: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Drizzle ORM"],
    image: "https://picsum.photos/seed/gtnotes/600/400",
    link: "https://gtnotes.org"
  },
  {
    name: "Movie Atlas",
    date: "Jan 2025",
    description: [
      "Built a movie discovery platform offering 10,000+ titles with live data from TMDB API.",
      "Accelerated page load times by 20% by optimizing Next.js server-side rendering.",
      "Optimized API requests with caching, reducing search latency by 66%."
    ],
    stack: ["TypeScript", "Next.js", "TailwindCSS", "TMDB API"],
    image: "https://picsum.photos/seed/movieatlas/600/400",
    link: "#"
  },
  {
    name: "MedScan",
    date: "Feb 2025",
    description: [
      "Integrated a PyTorch TorchXRayVision model into a Flask web app for x-ray diagnosis.",
      "Optimized AI response time by caching results of similar questions in a SQLite database."
    ],
    stack: ["Python", "Flask", "PyTorch", "SQLite"],
    image: "https://picsum.photos/seed/medscan/600/400",
    link: "#"
  }
];

export const AWARDS: Achievement[] = [
  { title: "Coca-Cola First Generation Scholar", description: "One of 15 people chosen every year" },
  { title: "Zell Miller Scholarship Recipient", description: "Full tuition scholarship" }
];

export const EXTRACURRICULARS = [
  "Greek Life (Director of Career Development)",
  "WebDev @ GT",
  "Intramural Sports",
  "Blockchain @ GT"
];