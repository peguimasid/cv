import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Guilhermo Masid",
  initials: "GM",
  location: "Rio de Janeiro, Brazil",
  locationLink: "https://www.google.com/maps/place/Volta+Redonda",
  about:
    "Full Stack Software Engineer dedicated to building high-quality products that make a meaningful impact.",
  summary:
    "Experienced Full Stack Engineer skilled at transforming ideas into scalable, high-performance products. I have a strong foundation in both front-end and back-end technologies, specializing in TypeScript, React, and Node.js. With over 5 years in remote collaboration, I’m adept at creating streamlined, user-focused solutions that drive success for global teams.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54289589?v=4",
  personalWebsiteUrl: "https://masid.dev",
  contact: {
    email: "guilhermomasid@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/peguimasid",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guilhermomasid/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/guilhermo_masid",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "École 42 - Advanced Specialization",
      degree:
        "An advanced program with specializations across various computer programming fields. I chose to focus on Artificial Intelligence and low-level programming, delving into algorithmic design, assembly language, and systems optimization. This path sharpens skills in complex problem-solving, computational efficiency, and scalable systems architecture, preparing for impactful roles in software engineering.",
      start: "2024",
      end: null,
    },
    {
      school: "École 42 - Common Core",
      degree:
        "A two-year foundational program emphasizing project-based learning and collaboration. The curriculum covers essential software engineering topics: algorithms, data structures, networks, and operating systems. This stage builds autonomy, critical thinking, and practical problem-solving skills. It simulates real-world engineering environments, fostering both individual initiative and teamwork.",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Daktus",
      link: "https://daktus.com.br",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2020",
      end: null,
      description:
        "Led key features, optimized code workflows, and introduced Tailwind CSS for improved UI efficiency. Developed scalable microservices, including one that dynamically renders Notion page content and another that structures and generates medical reports stored on S3. Tech stack: React, TypeScript, Node.js, AWS, Elixir, Go.",
    },
    {
      company: "Alltomatize",
      link: "https://alltomatize.com.br/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2021",
      end: "2023",
      description:
        "Spearheaded the full-stack development of a robust platform tailored for pharmacies, with multi-role dashboards for clients, administrators, and providers. Built with a focus on scalability and ease of use. Tech stack: React, TypeScript, Node.js.",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "React/Next.js", url: "https://reactjs.org/" },
    { name: "Node.js", url: "https://nodejs.org/" },
    {
      name: "C/C++",
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    { name: "Python", url: "https://www.python.org/" },
    { name: "AWS", url: "https://aws.amazon.com/" },
    { name: "Elixir", url: "https://elixir-lang.org/" },
    { name: "Express", url: "https://expressjs.com/" },
    { name: "Nest.js", url: "https://nestjs.com/" },
    { name: "Adonis.js", url: "https://adonisjs.com/" },
    { name: "React Native", url: "https://reactnative.dev/" },
    { name: "Plasmo", url: "https://www.plasmo.com/" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Git", url: "https://git-scm.com/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "Docker", url: "https://www.docker.com/" },
    { name: "Vitest", url: "https://vitest.dev/" },
    { name: "Figma", url: "https://www.figma.com/" },
  ],
  projects: [
    {
      title: "Task-it",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React/Next",
        "Node.js",
      ],
      description: "A minimal project management tool.",
      link: {
        label: "github.com",
        href: "https://tt.masid.dev/",
      },
    },
    {
      title: "Daktus",
      techStack: ["Full Stack Developer", "TypeScript", "React", "Node.js"],
      description:
        "Healthcare platform implementing protocols during appointments to reduce errors and costs.",
      link: {
        label: "daktus.com.br",
        href: "https://daktus.com.br/",
      },
    },
    {
      title: "Avante",
      techStack: ["Full Stack Developer", "TypeScript", "React", "Node.js"],
      description:
        "Platform for managing orders, deliveries, and accounts across user roles.",
      link: {
        label: "avante.com.br",
        href: "https://develop.avanteb2b.com.br",
      },
    },
    {
      title: "Go-Barber",
      techStack: [
        "Full Stack Developer",
        "Javascript",
        "React",
        "React Native",
        "Node.js",
      ],
      description: "App for managing barbershop appointments.",
      link: {
        label: "github.com",
        href: "https://github.com/peguimasid/GoBarber-Mobile",
      },
    },
    {
      title: "Challenges",
      techStack: ["Javascript", "Typescript", "Problem-solving"],
      description: "Over 800 coding problems solved across various platforms.",
      link: {
        label: "github.com",
        href: "https://github.com/peguimasid/Challenges",
      },
    },
    {
      title: "Yelp Camp",
      techStack: [
        "Full Stack Developer",
        "Javascript",
        "React/Next",
        "Node.js",
        "MongoDB",
      ],
      description: "Community-driven platform for discovering campgrounds.",
      link: {
        label: "github.com",
        href: "https://yc.masid.dev/",
      },
    },
  ],
} as const;
