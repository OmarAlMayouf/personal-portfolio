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
      { name: "React", level: 82 },
      { name: "TypeScript", level: 88 },
      { name: "HTML/CSS", level: 88 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "Java", level: 86 },
      { name: "REST APIs", level: 80 },
      { name: "JWT Security", level: 74 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Git", level: 86 },
      { name: "GitLab", level: 85 },
    ],
  },
];

// Projects Section
export const projectsData = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A full-stack admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Chart.js"],
    image: "🛒",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with drag-and-drop boards, real-time updates, and team management features.",
    tech: ["React", "TypeScript", "REST API", "Tailwind"],
    image: "📋",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and 7-day predictions.",
    tech: ["React", "API Integration", "CSS3", "Geolocation"],
    image: "🌤️",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "A full-stack admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Chart.js"],
    image: "🛒",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with drag-and-drop boards, real-time updates, and team management features.",
    tech: ["React", "TypeScript", "REST API", "Tailwind"],
    image: "📋",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and 7-day predictions.",
    tech: ["React", "API Integration", "CSS3", "Geolocation"],
    image: "🌤️",
    github: "https://github.com",
    demo: "#",
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
