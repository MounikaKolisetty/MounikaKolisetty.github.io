import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  enval,
  jobit,
  tripguide,
  threejs,
  wianco,
  ciai,
  johndeere,
  kshema,
  accenture
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "React Native Developer",
    companyName: "Kshema General Insurance Limited, India",
    icon: kshema,
    iconBg: "#D2D8E4",
    date: "Nov 2024 - Present",
    points: [
      "Developed and maintained cross-platform mobile apps using React Native.",
      "Integrated RESTful APIs and SDKs for real-time claim status, policy updates, and notifications.",
      "Collaborated with designers to ensure UI matched Figma specs and achieved pixel-perfect accuracy.",
      "Optimized app performance and reduced initial load time by 30% through bundle size tuning and lazy loading.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Cyber Intellectus, India",
    icon: ciai,
    iconBg: "#EEEEF0",
    date: "Sep 2023 - Oct 2024",
    points: [
      "Delivered client projects using Angular, React.js, and Tailwind CSS onto GoDaddy.",
      "Developed and maintained backend APIs using PHP for form submissions, user management, and content modules.",
      "Collaborated with UI/UX designers to create responsive and user-friendly interfaces for client portals.",
      "Migrated selected Angular modules to React, enhancing code maintainability and performance.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "WIANCO OTT Robotics GmbH, Germany",
    icon: wianco,
    iconBg: "#000101",
    date: "Jun 2022 - Aug 2023",
    points: [
      "Developed enterprise-grade web applications using Angular and .NET, tailored for robotic automation workflows.",
      "Customized DevExpress UI components based on product owner requirements to deliver highly specific functionality.",
      "Integrated MySQL database for storing user configuration data.",
      "Collaborated with cross-functional team following Agile methodology to deliver iterative enhancements.",
    ],
  },
  {
    title: "Software Developer",
    companyName: "John Deere, Germany",
    icon: johndeere,
    iconBg: "#FFFFFF",
    date: "May 2021 - May 2022",
    points: [
      "Developed internal web tools using React.js and integrated them with .NET Core APIs.",
      "Collaborated with global engineering teams on agricultural IoT solutions, handling data on the frontend.",
      "Maintained unit and integration test coverage above 85% using Jest and Cypress.",
      "Participated in user research sessions to iterate on UI features for farm management dashboards.",
    ],
  },
  {
    title: "Associate Software Engineer",
    companyName: "Accenture, India",
    icon: accenture,
    iconBg: "#FFFDFF",
    date: "May 2017 - May 2019",
    points: [
      "Assisted in building enterprise web applications using Angular and ASP.NET Web API.",
      "Wrote frontend modules and reusable services while following Agile development practices.",
      "Created automated scripts for regression testing using Selenium.",
      "Worked in client-facing role to gather and clarify requirements for portal UI components.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Enval",
    description:
      "ENVAL is a digital platform offering courses in Value Engineering, including training, consulting, and AI-powered tools for public, private, and academic sectors.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: enval,
    sourceCodeLink: "https://github.com/MounikaKolisetty/enval",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
