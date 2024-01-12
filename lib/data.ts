import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import askAny from "@/public/askany.png";
import atlanticEnergy from "@/public/atlantic_energy.png";
import auvenir from "@/public/auvenir.png";
import frankSalt from "@/public/franksalt.png";
import iyyara from "@/public/franksalt.png";
import salestime from "@/public/salestime.png";
import waodate from "@/public/waodate.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Vietnam National University",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "So, picture this—I landed myself a job gig back when I was just a sophomore, juggling work and classes like a pro. Fast forward, and I nailed it! I officially graduated after hustling through four years of studying. It's been a journey, but hey, I made it!",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Waodate",
    location: "Software Developer",
    description:
      "I'm part of the team working together on the development of Waodate and AskAny, which are like the rockstars of our company's product lineup. It's all about that teamwork, making these two products stand out in the crowd.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Software Developer",
    location: "TISOHA Solution",
    description:
      "I'm all in as a full-stack developer, diving deep into the world of web development. It's not just a gig; it's my playground where I wear the full-stack superhero cape. From coding the back end to crafting the front end, I'm in the thick of it, making the web do its magic.",
    icon: React.createElement(FaLaptopCode),
    date: "2021 - present",
  },
] as const;

export const projectData = [
  {
    title: "Salestime",
    description:
      "Enterprise Resource Planning (ERP) platform for businesses in Malta.",
    tags: ["Kotlin", "ReactJS", "MySQL", "Google Cloud"],
    imageUrl: salestime,
  },
  {
    title: "Auvenir",
    description:
      "Cloud-based audit solution for small to medium-sized audits in Canada.",
    tags: [".NET Core", "MS SQL Server", "Azure"],
    imageUrl: auvenir,
  },
  {
    title: "Iyyara",
    description:
      "Exclusive platform catering to the needs of Halal food enthusiasts.",
    tags: ["NodeJS", "TypeScript", "ReactJS", "MongoDB", "AWS"],
    imageUrl: iyyara,
  },
  {
    title: "Atlantic Energy",
    description:
      "Smart device monitoring system for both home and business environments.",
    tags: [".NET Core", "MS SQL Server"],
    imageUrl: atlanticEnergy,
  },
  {
    title: "Frank Salt",
    description:
      "Digital platform for real estate trading and management in Malta.",
    tags: [".NET Core", "MS SQL Server"],
    imageUrl: frankSalt,
  },
  {
    title: "Ask Any",
    description:
      "Platform connecting curious users with domain experts seamlessly.",
    tags: ["NodeJS", "ReactJS", "Flutter", "MongoDB"],
    imageUrl: askAny,
  },
  {
    title: "Waodate",
    description: "Dating platform connects singles throughout Vietnam.",
    tags: ["NodeJS", "ReactJS", "Flutter", "MongoDB"],
    imageUrl: waodate,
  },
] as const;

export const skillsData = [
  "C#",
  "JavaScript",
  "TypeScript",
  "Bash",
  "Java",
  "Kotlin",
  "Go",
  "Python",
  "ReactJS",
  "Next.js",
  "Flask",
  "Spring Boot",
  ".NET Core",
  "Git",
  "Linux",
  "Docker",
  "CI/CD",
  "AWS",
  "Azure",
  "TensorFlow",
  "PyTorch",
] as const;
