import { Code, Cpu, Globe, BarChart, Edit2, UserCheck } from "@lucide/astro"; 
const geslord = '../assets/geslord.webp';
const hackinghr = '../assets/hackinghr.webp';
const kitcase = '../assets/kitcase.webp';
const universidad = '../assets/universidad.webp';

export const projects = [
  {
    title: 'Hacking HR',
    description: 'Delivered 20+ products within Hacking HR, including the full development of The AIx Summit. Projects ranged from dashboards and complex flows to Stripe integrations, chatbots, and admin panels, with a strong focus on UX, SEO, and scalability. Successfully reduced server costs by 50% and optimized internal workflows.',
    tags: ['Fullstack', 'React', 'Next.js', 'SaaS', 'Stripe', 'SEO', 'Optimization', 'AWS', 'Redis', 'Tailwind', 'Figma'],
    date: '2022 - In Progress',
    status: 'CURRENT POSITION',
    image: hackinghr,
    url: 'https://theaixsummit.com/',
    url2: 'https://beta-app.hackinghrlab.io/',
  },
  {
    title: 'Geslord',
    description: 'Built a complete financial and accounting management product from the ground up, tailored for the Venezuelan market. Led the entire development lifecycle — from concept and UI design to backend integration and deployment — ensuring reliability and compliance with local financial requirements.',
    tags: ['Fullstack', 'SaaS', 'Node.js', 'Vue3', 'Integrations', 'Astro', 'Digital Ocean', 'Docker'],
    date: '2023 - In Progress',
    status: 'IN PROGRESS',
    image: geslord,
    url: 'https://geslord.com/',
  },
  {
    title: 'University Projects',
    description: 'A collection of innovative academic projects ranging from an MVP platform to connect students with professors, to a Hackathon-winning MVP, robotics and computer vision systems, sensor-based motion detection arms, and interactive interface experiments — all focused on merging technology, creativity, and practical problem-solving.',
    tags: ['Robotics', 'Computer Vision', 'AI', 'Hardware', 'Fullstack', 'Python'],
    date: '2024',
    status: 'COMPLETED',
    image: universidad,
    url: 'https://cesarmc-port.github.io/PrepaUnet/',
  },
  {
    title: 'KitCase / Social Media',
    description: 'Kitcase is a social network designed to facilitate the sharing and understanding of scientific documents. Users can upload and explore PDF articles through optimized viewers, discover relevant research, and engage in discussions focused on the findings. The goal is to enhance collective knowledge and make academic reading more accessible and collaborative.',
    tags: ['Fullstack', 'SaaS', 'Node.js', 'Vue3'],
    date: '2021',
    status: 'COMPLETED',
    image: kitcase,
  },
];

export const stats = [
  { value: '6+', label: 'YEARS OF EXPERIENCE' },
  { value: '40+', label: 'PROJECTS DELIVERED' },
  { value: '40+', label: 'TECH SKILLS & LEARNING' },
  { value: '1000+', label: 'CONTRIBUTIONS' },
];

export const skills = [
  {
    code: Code,
    title: "Frontend Development",
    skills: ['JavaScript','TypeScript','React','Next.js','Vue.js','Nuxt','AngularJS','Vite','Tailwind CSS','Bootstrap','UX/UI Design','Figma'],
  },
  {
    code: Cpu,
    title: "Backend Development",
    skills: ['Node.js','Express','FastAPI','Flask','NestJS','PostgreSQL','MySQL','SQLite','MongoDB','Redis','Sequelize','GraphQL','Apollo','REST APIs'],
  },
  {
    code: Globe,
    title: "DevOps & Cloud",
    skills: ['Docker','Nginx','AWS','Vercel','Linux','Ubuntu','Git','CI/CD','PowerShell','VSCode','Digital Ocean','Cloudflare'],
  },
  {
    code: BarChart,
    title: "AI, Data & Automation",
    skills: ['Python','YOLOv8','Data Processing','Automation Scripts'],
  },
  {
    code: Edit2,
    title: "3D Design & CAD",
    skills: ['AutoCAD','SolidWorks','Inventor','Onshape','Blender'],
  },
  {
    code: UserCheck,
    title: "Product & Methodologies",
    skills: ['SCRUM / Kanban','System Design','Project Planning'],
  },
];