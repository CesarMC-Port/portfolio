import { Code, Cpu, Globe, ChartColumn } from "@lucide/astro";
const geslord = './assets/geslord.webp';
const hackinghr = './assets/hackinghr.webp';
const kitcase = './assets/kitcase.webp';
const universidad = './assets/universidad.webp';
const realxpertai = './assets/realxpertai.webp';

export const projects = [
  {
    title: 'RealXpertAI',
    description: 'AI-powered real estate SaaS built from scratch. Implemented conversational voice agents (Gemini Live, OpenAI Realtime) for natural property creation and search, plus a distributed scraping system managing 700,000+ listings across multiple portals. Built a real-time semantic search engine with vector embeddings, Redis/BullMQ async queues and PostgreSQL + PostGIS geospatial queries, cutting response times from 5 minutes to 200 ms (99.93% faster). Added Computer Vision for automated property-photo analysis and helped scale the platform from zero to 30,000+ monthly visits in its first two months.',
    descriptionEs: 'SaaS inmobiliario con IA construido desde cero. Implementé agentes de voz conversacionales (Gemini Live, OpenAI Realtime) para la creación y búsqueda natural de propiedades, además de un sistema de scraping distribuido que gestiona más de 700.000 listados en múltiples portales. Construí un motor de búsqueda semántica en tiempo real con embeddings vectoriales, colas asíncronas Redis/BullMQ y consultas geoespaciales en PostgreSQL + PostGIS, reduciendo los tiempos de respuesta de 5 minutos a 200 ms (99,93% más rápido). Añadí Computer Vision para el análisis automático de fotografías y ayudé a escalar la plataforma de cero a más de 30.000 visitas mensuales en sus primeros dos meses.',
    tags: ['Fullstack', 'Next.js', 'React', 'NestJS', 'TypeScript', 'PostgreSQL', 'PostGIS', 'Redis', 'BullMQ', 'WebSockets', 'AI Agents', 'Gemini Live', 'OpenAI Realtime', 'Semantic Search', 'Computer Vision', 'Docker', 'SEO'],
    date: '2026',
    status: 'COMPLETED',
    statusEs: 'COMPLETADO',
    image: realxpertai,
    url: 'https://realxpert.ai/',
  },
  {
    title: 'Hacking HR',
    description: 'Delivered 20+ products within Hacking HR, including the full development of The AIx Summit. Projects ranged from dashboards and complex flows to Stripe integrations, chatbots, and admin panels, with a strong focus on UX, SEO, and scalability. Reduced AWS infrastructure costs by 50%, cut response and load times by 40% with Redis caching and code-splitting, and lowered critical production incidents by 15% through CI/CD and strict code review.',
    descriptionEs: 'Entregué más de 20 productos en Hacking HR, incluyendo el desarrollo completo de The AIx Summit. Los proyectos abarcaron dashboards y flujos complejos, integraciones con Stripe, chatbots y paneles de administración, con foco en UX, SEO y escalabilidad. Reduje los costos de infraestructura en AWS en un 50%, los tiempos de respuesta y carga en un 40% con caché Redis y code-splitting, y los incidentes críticos en producción en un 15% mediante CI/CD y revisiones de código estrictas.',
    tags: ['Fullstack', 'React', 'Next.js', 'SaaS', 'Stripe', 'SEO', 'AWS', 'CloudWatch', 'Redis', 'WebSockets', 'GitHub Actions', 'Tailwind', 'Figma'],
    date: '2022 - 2026',
    status: 'COMPLETED',
    statusEs: 'COMPLETADO',
    image: hackinghr,
    url: 'https://hackinghrlab.io/',
    url2: 'https://beta-app.hackinghrlab.io/',
    url3: 'https://theaixsummit.com/',
  },
  {
    title: 'Geslord',
    description: 'Built a complete financial and accounting management SaaS from the ground up for the Venezuelan market, from concept and UI design to backend and production deployment. Modeled the relational data layer, shipped a conversational agent that answers user questions and operates the panel, and scaled the product to 10 clients and 200–300 users. Production runs as a monorepo on DigitalOcean with CapRover as PaaS and Nginx as reverse proxy.',
    descriptionEs: 'Construí desde cero un SaaS completo de gestión financiera y contable para el mercado venezolano, desde el concepto y el diseño de interfaz hasta el backend y el despliegue en producción. Modelé la capa de datos relacional, lancé un agente conversacional que responde dudas y opera el panel, y escalé el producto a 10 clientes y 200–300 usuarios. Producción corre como monorepo en DigitalOcean con CapRover como PaaS y Nginx como proxy inverso.',
    tags: ['Fullstack', 'SaaS', 'Node.js', 'Vue3', 'PostgreSQL', 'AI Agents', 'DigitalOcean', 'CapRover', 'Nginx', 'Docker', 'Astro'],
    date: '2022 - 2025',
    status: 'COMPLETED',
    statusEs: 'COMPLETADO',
    image: geslord,
    url: 'https://geslord.com/',
  },
  {
    title: 'University Projects',
    description: 'A collection of innovative academic projects ranging from an MVP platform to connect students with professors, to a Hackathon-winning MVP, robotics and computer vision systems, sensor-based motion detection arms, and interactive interface experiments — all focused on merging technology, creativity, and practical problem-solving.',
    descriptionEs: 'Una colección de proyectos académicos innovadores: desde una plataforma MVP para conectar estudiantes con profesores hasta un MVP ganador de hackathon, sistemas de robótica y visión por computadora, brazos con detección de movimiento por sensores y experimentos de interfaces interactivas; todo enfocado en unir tecnología, creatividad y resolución práctica de problemas.',
    tags: ['Robotics', 'Computer Vision', 'AI', 'Hardware', 'Fullstack', 'Python'],
    date: '2024',
    status: 'COMPLETED',
    statusEs: 'COMPLETADO',
    image: universidad,
    url: 'https://cesarmc-port.github.io/PrepaUnet/',
    url2: 'https://cesarmc-port.github.io/zumo2025/',
  },
  {
    title: 'KitCase / Social Media',
    description: 'Kitcase is a social network designed to facilitate the sharing and understanding of scientific documents. Users can upload and explore PDF articles through optimized viewers, discover relevant research, and engage in discussions focused on the findings. Built the MVP architecture from scratch with React and PostgreSQL for smooth visualization of complex scientific documents.',
    descriptionEs: 'Kitcase es una red social para compartir y comprender documentos científicos. Los usuarios pueden subir y explorar artículos PDF con visores optimizados, descubrir investigaciones relevantes y participar en discusiones sobre los hallazgos. Construí la arquitectura del MVP desde cero con React y PostgreSQL para una visualización fluida de documentos científicos complejos.',
    tags: ['Fullstack', 'SaaS', 'React', 'Node.js', 'PostgreSQL'],
    date: '2021',
    status: 'COMPLETED',
    statusEs: 'COMPLETADO',
    image: kitcase,
  },
];

export const stats = [
  { value: '10+', label: 'YEARS OF EXPERIENCE', labelEs: 'AÑOS DE EXPERIENCIA' },
  { value: '40+', label: 'PROJECTS DELIVERED', labelEs: 'PROYECTOS ENTREGADOS' },
  { value: '700K+', label: 'LISTINGS INDEXED', labelEs: 'LISTADOS INDEXADOS' },
  { value: '1000+', label: 'CONTRIBUTIONS', labelEs: 'CONTRIBUCIONES' },
];

export const skills = [
  {
    code: Code,
    title: "Frontend Development",
    titleEs: "Desarrollo Frontend",
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Nuxt', 'Astro', 'AngularJS', 'Vite', 'Tailwind CSS', 'Bootstrap', 'UX/UI Design', 'Figma', 'Zustand', 'Mapbox', 'Framer Motion'],
  },
  {
    code: Cpu,
    title: "Backend Development",
    titleEs: "Desarrollo Backend",
    skills: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'PostGIS', 'MySQL', 'SQLite', 'MongoDB', 'Redis', 'BullMQ', 'Sequelize', 'GraphQL', 'Apollo', 'REST APIs', 'Socket.IO', 'TypeORM', 'Prisma'],
  },
  {
    code: Globe,
    title: "DevOps & Cloud",
    titleEs: "DevOps y Cloud",
    skills: ['Docker', 'Nginx', 'AWS', 'CloudWatch', 'Vercel', 'Linux', 'Ubuntu', 'Git', 'GitHub Actions', 'CI/CD', 'PowerShell', 'VSCode', 'DigitalOcean', 'CapRover', 'Dokku', 'Cloudflare', 'Playwright'],
  },
  {
    code: ChartColumn,
    title: "AI, Data & Automation",
    titleEs: "IA, Datos y Automatización",
    skills: ['Gemini Live', 'OpenAI Realtime', 'AI Agents', 'Semantic Search', 'Vector Embeddings', 'RAG', 'Computer Vision', 'Claude Code', 'OpenCode', 'Firecrawl'],
  },
  // {
  //   code: Pencil,
  //   title: "3D Design & CAD",
  //   skills: ['AutoCAD', 'SolidWorks', 'Inventor', 'Onshape', 'Blender'],
  // },
  // {
  //   code: UserCheck,
  //   title: "Product & Methodologies",
  //   skills: ['SCRUM / Kanban', 'System Design', 'Project Planning'],
  // },
];
