import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Guilhermo Masid",
  initials: "GM",
  location: "Rio de Janeiro, Brazil",
  locationLink: "https://www.google.com/maps/place/Rio+de+Janeiro",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products that make a meaningful impact.",
  summary: (
    <>
      Experienced Full Stack Engineer specializing in scalable React
      applications, robust backend services with Node.js and Elixir, delivering
      complete end-to-end solutions. Skilled at transforming ideas into
      high-performance products with expertise spanning both front-end and
      back-end technologies, particularly in the TypeScript ecosystem.
    </>
  ),
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
        "Advanced program with specializations in Artificial Intelligence and low-level programming",
      start: "2024",
      end: null,
    },
    {
      school: "École 42 - Common Core",
      degree:
        "Two-year foundational program in software engineering with project-based learning",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Daktus",
      link: "https://daktus.com.br",
      badges: ["Remote", "Elixir", "React", "TypeScript", "Healthcare"],
      title: "Full Stack Developer",
      start: "2020",
      end: null,
      description: (
        <>
          Leading development of a multi-platform Clinical Decision Support
          System (CDSS) for healthcare professionals.
          <ul className="list-inside list-disc">
            <li>
              Built microservices with Elixir and TypeScript for healthcare data
              processing
            </li>
            <li>
              Developed React/TypeScript apps across Web, Desktop, and Chrome
              extensions
            </li>
            <li>
              Implemented healthcare protocols to reduce medical errors and
              costs
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Alltomatize",
      link: "https://alltomatize.com.br/",
      badges: ["Remote", "React", "TypeScript", "Node.js"],
      title: "Full Stack Developer",
      start: "2021",
      end: "2023",
      description: (
        <>
          Spearheaded full-stack development of a comprehensive pharmacy
          management platform.
          <ul className="list-inside list-disc">
            <li>
              Built multi-role dashboards for clients, administrators, and
              providers
            </li>
            <li>Focused on scalability and user experience optimization</li>
            <li>
              Delivered robust platform tailored for pharmaceutical industry
              needs
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js/Express",
    "Elixir/Phoenix",
    "C/C++",
    "Python",
    "React Native",
    "PostgreSQL/MongoDB",
    "AWS",
    "Docker",
    "Git/GitHub",
    "Chrome Extensions",
    "Electron",
    "System Architecture",
  ],
  projects: [
    {
      title: "Task-it",
      techStack: ["TypeScript", "React", "Next.js", "Node.js"],
      description:
        "Minimal project management tool with clean interface and essential features",
      link: {
        label: "tt.masid.dev",
        href: "https://tt.masid.dev/",
      },
    },
    {
      title: "ChatX",
      techStack: ["Elixir", "Phoenix", "LiveView", "Real-time"],
      description:
        "Minimal real-time chat application showcasing Phoenix LiveView capabilities",
      link: {
        label: "chat.masid.dev",
        href: "https://chat.masid.dev",
      },
    },
    {
      title: "Coding Challenges",
      techStack: ["JavaScript", "TypeScript", "Algorithms", "Problem Solving"],
      description:
        "Collection of 800+ solved coding problems across various platforms demonstrating algorithmic thinking",
      link: {
        label: "github.com",
        href: "https://github.com/peguimasid/Challenges",
      },
    },
  ],
} as const;
