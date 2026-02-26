// Personal Information
export const personalInfo = {
  name: "Omar AlMayouf",
  title: "Full Stack Developer",
  subtitle: "Full Stack Developer",
  email: "omaralmayouf@gmail.com",
  country: "Saudi Arabia",
  city: "Riyadh",
  university: "King Saud University",
  company: "Takamol Holding",
  role: "Associate Software Engineer",
};

import { formatPeriod } from "@/lib/date-utils";

// Hero Section
export const heroData = {
  subtitle: personalInfo.subtitle,
  name: personalInfo.name,
  tagline: `${personalInfo.role} at ${personalInfo.company}, building modern web apps with React & Spring Boot.`,
  cta: {
    primary: { text: "View My Work", href: "#projects" },
    secondary: { text: "Contact Me", href: "#contact" },
  },
};

// Social Links
export const socialLinks = {
  github: "https://github.com/OmarAlMayouf",
  linkedin: "https://www.linkedin.com/in/omaralmayouf",
  email: `mailto:${personalInfo.email}`,
};

// About Section
export const aboutData = {
  stats: [
    { icon: "Calendar", label: "Experience", value: "1+ Year" },
    { icon: "Briefcase", label: "Company", value: personalInfo.company },
    { icon: "Code2", label: "Focus", value: "Full Stack" },
    {
      icon: "MapPin",
      label: "Location",
      value: `${personalInfo.city}, ${personalInfo.country}`,
    },
  ],
  paragraphs: [
    `Information Systems graduate from ${personalInfo.university} and ${personalInfo.role} at ${personalInfo.company}. Passionate about building user-centric, scalable applications with clean architecture and strong performance.`,
    "Experienced in React, Spring Boot, REST APIs, and database-driven systems. I enjoy transforming complex requirements into intuitive, reliable, and production-ready software.",
  ],
};

// Experience Section
export const experiencesData = [
  {
    role: personalInfo.role,
    company: personalInfo.company,
    startDate: "2026-02",
    endDate: null,
    get period() {
      return formatPeriod(this.startDate, this.endDate);
    },
    description: [
      "Working as a full-time software engineer contributing to production systems and ongoing feature development",
    ],
    tech: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "REST APIs",
      "PostgreSQL",
      "JWT Security",
      "Redis",
      "GitLab",
      "CI/CD",
      "Mockito testing",
    ],
  },
  {
    role: "CO-OP",
    company: "Takamol Holding",
    startDate: "2025-07",
    endDate: "2026-02",
    get period() {
      return formatPeriod(this.startDate, this.endDate);
    },
    description: [
      "Developed and enhanced production features across multiple environments using GitLab",
      "Built full-stack solutions using React, Spring Boot, REST APIs, and SQL",
      "Followed clean code principles, Git branching strategy, and participated in code reviews",
      "Reviewed and validated database changes using Bytebase before backend integration",
      "Worked in Agile/Kanban environment using Jira with daily stand-ups and team collaboration",
      "Created technical documentation and Confluence pages for workflows and system features",
      "Completed internal backend training covering Redis caching, Liquibase, JWT security, Mockito testing, and CI/CD basics",
    ],
    tech: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "REST APIs",
      "PostgreSQL",
      "JWT Security",
      "Redis",
      "GitLab",
      "CI/CD",
      "Mockito testing",
    ],
  },
];

// Skills Section
export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Redux" },
      { name: "React Query" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
      { name: "Responsive design" },
      { name: "Performance optimization" },
      { name: "Figma" },
      { name: "Jest" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "Redis" },
      { name: "JUnit" },
      { name: "Mockito" },
      { name: "Swagger/OpenAPI" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Git" },
      { name: "GitLab" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Jira" },
    ],
  },
];

// Projects Section
export const projectsData = [
  {
    title: "Spring Redis Rate Limiter",
    description:
      "An open-source, annotation-based distributed rate limiter built with Spring Boot and Redis. Supports dynamic rate limiting using SpEL for per-user, per-email, per-IP, or global limits. Designed for multi-instance deployments using Redis atomic operations and Spring AOP.",
    tech: ["Java", "Spring Boot", "Redis", "Spring AOP", "Distributed Systems"],
    github: "https://github.com/OmarAlMayouf/spring-redis-ratelimiter",
    demo: "",
  },
  {
    title: "Pharmaseek - Mobile App (Graduation Project)",
    description:
      "A mobile application that aggregates pharmacy databases into one platform, allowing users to search medicines, compare prices, locate nearby pharmacies in Riyadh, and set medicine reminders.",
    tech: [
      "React Native",
      "JavaScript",
      "Tailwind CSS",
      "Appwrite",
      "Figma",
      "Agile",
    ],
    github: "https://github.com/OmarAlMayouf/Pharmaseek",
    demo: "",
  },
  {
    title: "Pharmaseek - Web App (Graduation Project)",
    description:
      "A web application for admins that allows them to manage pharmacy inventory such as adding, editing, and removing entries per branch, managing branches, view dashboard analytics, and handle user inquiries.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "Figma",
      "Agile",
    ],
    github: "https://github.com/OmarAlMayouf/Pharmaseek-Admin-Portal",
    demo: "",
  },
  {
    title: "Dev Daily Tasks",
    description:
      "A modern productivity tool for developers with clean kanban-style interface to manage their daily tasks and improve focus. Features include dark mode, task prioritization, filtering, custom settings, and more.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Shadcn-ui"],
    github: "https://github.com/OmarAlMayouf/dev-daily-tasks",
    demo: "https://omaralmayouf.github.io/dev-daily-tasks",
  },
  {
    title: "Pharmacy Inventory Management System",
    description:
      "A web-based system for managing pharmacy inventory, tracking stock levels and expiration dates. Built with Django backend and a responsive Bootstrap-based frontend.",
    tech: ["Django", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/OmarAlMayouf/IS424-Project",
    demo: "",
  },
  {
    title: "Movie & TV Show Ratings Web App",
    description:
      "A web application that allows users to browse, rate, and explore movies and TV shows with an interactive interface powered by React and Firebase.",
    tech: ["React", "Vite", "Firebase", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/OmarAlMayouf/Movie_Ratings",
    demo: "https://omaralmayouf.github.io/Movie_Ratings/",
  },
    {
    title: "Car Sales App",
    description:
      "A C2C mobile app enabling users to buy and sell cars securely. Features vehicle listings, browsing, and direct user communication in a clean and responsive interface.",
    tech: ["React Native", "JavaScript", "Appwrite", "Tailwind CSS"],
    github: "https://github.com/OmarAlMayouf/CarSalesApp",
    demo: "",
  },
  {
    title: "Note Sharing App",
    description:
      "A collaborative note-sharing mobile app with real-time push notifications. Users can share notes within groups and receive instant updates when new content is posted.",
    tech: ["React Native", "JavaScript", "Tailwind CSS", "Appwrite"],
    github: "https://github.com/OmarAlMayouf/NoteSharingApp",
    demo: "",
  },
  {
    title: "RSA Encryption System",
    description:
      "A Python-based RSA encryption system with a GUI that demonstrates asymmetric cryptography, allowing users to generate keys, encrypt messages, and decrypt ciphertext.",
    tech: ["Python", "Tkinter", "RSA Algorithm", "Cryptography"],
    github: "https://github.com/OmarAlMayouf/RSAProject",
    demo: "",
  },
  {
    title: "Server-Client Restaurant Management System",
    description:
      "A client-server restaurant management system using socket programming for real-time order processing and inventory updates.",
    tech: ["Python", "Socket Programming", "SQLite", "Tkinter"],
    github:
      "https://github.com/OmarAlMayouf/server_client_python_resturant_managment_system",
    demo: "",
  },
  {
    title: "Mini Database Management System (DBMS)",
    description:
      "A custom-built relational database system in Java implementing B+ tree indexing, query processing (joins, aggregation), buffer pool management, and ACID-compliant transactions.",
    tech: [
      "Java",
      "B+ Trees",
      "Concurrency Control",
      "JUnit",
      "Database Design",
    ],
    github: "https://github.com/faresdu/DBMS335",
    demo: "",
  },
  {
    title: "Advanced News Classifier",
    description:
      "A machine learning news classifier using GloVe embeddings and Deeplearning4J to improve contextual understanding and semantic accuracy in text classification.",
    tech: ["Java", "NLP", "GloVe", "Deeplearning4J", "Machine Learning"],
    github: "https://github.com/sattamalmuwallad/Advanced-News-Classifier",
    demo: "",
  },
  {
    title: "News Classifier (TF-IDF)",
    description:
      "A text classification system trained on news articles using TF-IDF embeddings to categorize content based on semantic similarity.",
    tech: ["Java", "TF-IDF", "NLP", "Machine Learning"],
    github: "https://github.com/sattamalmuwallad/News-Classifier",
    demo: "",
  },
];

// Contact Section
export const contactData = {
  heading: "Let's connect",
  description:
    "Whether you have an opportunity, a question, or just want to say hello. Feel free to reach out!",
  email: personalInfo.email,
  location: `${personalInfo.city} ${personalInfo.country}`,
  toast: {
    title: "Message sent!",
    description: "Thanks for reaching out. I'll get back to you soon.",
  },
  footer: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
};

// Resume Section
export const resumeData = {
  description:
    "Interested in working together? Download my resume to learn more about my skills, experience, and qualifications.",
};

// Navigation
export const navData = {
  links: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  resumeLink: { label: "Resume", href: "#resume" },
};
