import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Guilhermo Masid",
  initials: "GM",
  location: "Rio de Janeiro, Brazil",
  locationLink: "https://www.google.com/maps/place/Volta+Redonda",
  about:
    "Full Stack Software Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Software Engineer, I specialize in taking products from concept to launch. I excel in creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, and Node.js. I have over 5 years of experience working remotely with companies worldwide.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54289589?v=4",
  personalWebsiteUrl: "https://masid.dev",
  contact: {
    email: "guilhermomasid@gmail.com",
    tel: "+5524988395623",
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
      school: "École 42",
      degree:
        "Software Engineering - Intensive, project-based learning with emphasis on peer-to-peer and hands-on experience",
      start: "2022",
      end: "2025",
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
        "Implemented new features, improved code delivery process, and initiated migration from MUI Styles to Tailwind CSS. Technologies: React, TypeScript, Node.js",
    },
    {
      company: "Alltomatize",
      link: "https://alltomatize.com.br/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2021",
      end: "2023",
      description:
        "Leading the development of the Alltomatize platform. Technologies: React, TypeScript, Node.js",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js", "Node.js"],
  projects: [
    {
      title: "Task-it",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React/Next",
        "Node.js",
      ],
      description: "Keep project management simple as should be.",
      link: {
        label: "github.com",
        href: "https://tt.masid.dev/",
      },
    },
    {
      title: "Daktus",
      techStack: ["Full Stack Developer", "TypeScript", "React", "Node.js"],
      description:
        "Reducing avoidable deaths by training healthcare professionals.",
      link: {
        label: "daktus.com.br",
        href: "https://daktus.com.br/",
      },
    },
    {
      title: "Avante",
      techStack: ["Full Stack Developer", "TypeScript", "React", "Node.js"],
      description:
        "Manage orders, deliveries, and accounts with different user roles.",
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
      description: "Easily schedule and manage haircuts with barbers.",
      link: {
        label: "github.com",
        href: "https://github.com/peguimasid/GoBarber-Mobile",
      },
    },
    {
      title: "Challenges",
      techStack: ["Javascript", "Typescript", "Problem-solving"],
      description: "Over 800 solved coding problems from various websites.",
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
      description: "Discover and contribute new campgrounds.",
      link: {
        label: "github.com",
        href: "https://yc.masid.dev/",
      },
    },
  ],
} as const;
