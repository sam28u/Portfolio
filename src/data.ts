import { Project, Skill, CompetitiveProgramming } from './types';

export const contactInfo = {
  name: 'Sambhu Prasad Verma',
  title: 'Full‑Stack Web Developer | Competitive Programmer',
  subtitle: 'B.Tech in Computer Science & Engineering',
  email: 'sambhufirst11@gmail.com',
  phone: '+91 77889 27577',
  location: 'Bhubaneswar, Odisha',
  github: 'https://github.com/sam28u',
  linkedin: 'https://linkedin.com/in/sambhu-prasad-verma',
};

export const profileSummary = `Currently pursuing a B.Tech in Computer Science and Engineering at the International Institute of Information Technology (IIIT), Bhubaneswar. As a Full-Stack Developer with a builder’s mindset, I specialize in scalable architectures, modern web frameworks, and end-to-end product delivery. Proficient in the complete Software Development Lifecycle (SDLC), I prefer to build complex backend systems from scratch for maximum control and performance. I am an active competitive programmer with a strong analytical foundation in Data Structures and Algorithms, alongside a keen technical curiosity extending to low-level computer architecture and Linux system administration.`;

export const valueProps = [
  {
    title: "Builder's Mindset",
    desc: 'Rapidly ship high-quality, full-stack features, leveraging custom architectures for maximum optimization.'
  },
  {
    title: 'Design Communicator',
    desc: 'Translate complex UI/UX designs and system architectures into clean, production-ready code.'
  },
  {
    title: 'Analytical Problem Solver',
    desc: 'Apply competitive programming DSA expertise to solve complex, rigorous technical challenges.'
  }
];

export const projectsData: Project[] = [
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder',
    description: 'Intelligent Resume Generation Platform with real-time optimization.',
    longDescription: 'Created a next-generation resume authoring platform featuring generative text enhancement, keyword density score checking, and PDF compilation for perfect applicant tracking system (ATS) compatibility.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'LangGraph', 'PDFKit'],
    category: 'ai',
    githubUrl: 'https://github.com/sam28u/ai-resume-builder',
    highlights: [
      'Dynamic multi-step builder with real-time score assessment of ATS rules',
      'Generative rewriting utilizing stateful agents to structure profile statements',
      'Client-side print rendering optimized for instant high-quality single-page resumes'
    ],
    demoUrl: "https://www.google.com",
  },
  {
    id: 'costly',
    title: 'COSTLY',
    description: 'Habit Analytics & personal "Life-Tax" expense tracker.',
    longDescription: 'A full-stack habit tracking engine that quantifies the true hidden financial and chronological costs of repetitive routines, calculating time and cash leakages over time with comprehensive visual stats.',
    tech: ['Next.js 15', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'Drizzle ORM', 'Recharts'],
    category: 'fullstack',
    githubUrl: 'https://github.com/sam28u/costly',
    highlights: [
      'Visual mathematical modeling of routine habits as monetary and hourly expenses',
      'Dynamic interactive dashboard with charts showing habits streak retention and progress analytics',
      'Personal target goals engine with interactive alerts and recommendations'
    ],
    demoUrl: "google.com",
  },
  {
    id: 'ai-job-tracking',
    title: 'AI-Job-Tracking',
    description: 'AI-Powered Career Management Platform and workflow automation.',
    longDescription: 'Developed an AI-driven career and job search tracking dashboard integrating large language models to automate resume tailoring, application tracking, interview prepping, and actionable workflow pipelines.',
    tech: ['React', 'TypeScript', 'Node.js', 'LangChain', 'Google Gemini API', 'PostgreSQL', 'Clerk'],
    category: 'ai',
    githubUrl: 'https://github.com/sam28u/ai-job-tracking',
    highlights: [
      'AI assistant that scores resume matching scores for job descriptions',
      'Automated custom cover letter and follow-up email drafts',
      'Dynamic workflow drag-and-drop board for job applications'
    ],
    demoUrl: "google.com",
  },
  {
    id: 'ims-proc',
    title: 'IMS.proc',
    description: 'High-Performance Inventory Management System with real-time data handling.',
    longDescription: 'Architected a robust, lightning-fast inventory management system to handle rapid data flows with end-to-end type safety, high concurrency handling, and custom schema architecture.',
    tech: ['Next.js 15', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'TypeScript', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/sam28u/ims-proc',
    highlights: [
      'Type-safe query building and transactions using Drizzle ORM',
      'Fastify-powered ultra-fast REST APIs optimizing throughput',
      'Scalable relational database structure optimized with custom indexing'
    ],
    demoUrl: "google.com",
  },
  {
    id: 'seismic-io',
    title: 'SEISMIC.IO',
    description: 'Advanced Tectonic Surveillance & real-time seismic visualization system.',
    longDescription: 'Built a specialized TypeScript-based web application focused on processing, streaming, and visualizing real-time advanced tectonic surveillance data with map-based interfaces and reactive charts.',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'D3.js', 'Leaflet', 'Express'],
    category: 'frontend',
    githubUrl: 'https://github.com/sam28u/seismic-io',
    highlights: [
      'Real-time streaming telemetry processed client-side with minimal latency',
      'Interactive 3D/2D geographical map widgets showing seismic coordinates',
      'Rich animated charts displaying signal wavelengths using high-performance canvas layers'
    ],
    demoUrl: "google.com",
  }
];

export const skillsData: Skill[] = [
  // Languages & Runtimes
  { name: 'JavaScript (ES6+)', category: 'languages', level: 95 },
  { name: 'TypeScript', category: 'languages', level: 95 },
  { name: 'TypeScript React', category: 'languages', level: 92 },
  { name: 'Java', category: 'languages', level: 85 },
  { name: 'C++', category: 'languages', level: 90 },
  { name: 'Python', category: 'languages', level: 82 },
  { name: 'Node.js', category: 'languages', level: 90 },
  { name: 'Bun', category: 'languages', level: 80 },

  // Frameworks & Libraries
  { name: 'React', category: 'frameworks', level: 94 },
  { name: 'Next.js (v15)', category: 'frameworks', level: 90 },
  { name: 'Express', category: 'frameworks', level: 88 },
  { name: 'Fastify', category: 'frameworks', level: 85 },
  { name: 'TanStack Query', category: 'frameworks', level: 88 },
  { name: 'TanStack Table & Router', category: 'frameworks', level: 85 },
  { name: 'LangChain / LangGraph', category: 'frameworks', level: 82 },

  // Databases & Architecture
  { name: 'PostgreSQL', category: 'databases', level: 90 },
  { name: 'MySQL', category: 'databases', level: 85 },
  { name: 'MongoDB', category: 'databases', level: 80 },
  { name: 'Drizzle ORM', category: 'databases', level: 90 },
  { name: 'System Design & RESTful APIs', category: 'databases', level: 88 },

  // Security & Auth
  { name: 'JWT Tokens', category: 'security', level: 90 },
  { name: 'OAuth2 Integration', category: 'security', level: 88 },
  { name: 'NextAuth.js', category: 'security', level: 85 },
  { name: 'Clerk Auth', category: 'security', level: 90 },
  { name: 'CORS & Security Headers', category: 'security', level: 85 },
  { name: 'Role-Based Access Control (RBAC)', category: 'security', level: 88 },

  // Tooling & UI
  { name: 'Vite', category: 'tooling', level: 92 },
  { name: 'Tailwind CSS', category: 'tooling', level: 95 },
  { name: 'Shadcn UI', category: 'tooling', level: 92 },
  { name: 'GSAP Animations', category: 'tooling', level: 80 },
  { name: 'Chakra UI', category: 'tooling', level: 85 },
  { name: 'HTML5 & CSS3', category: 'tooling', level: 95 },
  { name: 'pnpm / npm', category: 'tooling', level: 90 },

  // DevOps & OS
  { name: 'Git & GitHub Workflows', category: 'devops', level: 92 },
  { name: 'Linux System Administration', category: 'devops', level: 88 },
  { name: 'CI/CD Deployment Pipelines', category: 'devops', level: 80 },
  { name: 'Unit Testing & Debugging', category: 'devops', level: 85 }
];

export const cpData: CompetitiveProgramming[] = [
  {
    platform: 'LeetCode',
    solved: 600,
    maxRating: 1578,
    ratingText: 'Max Rating: 1578',
    details: 'Consistently active in weekly contests and algorithmic challenges using C++, Java, and Python to craft optimized spatial-temporal complexity solutions.',
    profileUrl: 'https://leetcode.com/sam28u'
  },
  {
    platform: 'CodeForces',
    solved: 250,
    maxRating: 1200,
    ratingText: 'Max Rating: 1250+ (Pupil/Specialist range)',
    details: 'Regular participant in Div-2/Div-3 standard rounds, focusing on rapid problem comprehension, algorithmic translation, speed, and logical precision under strict time constraint conditions.',
    profileUrl: 'https://codeforces.com/profile/sam28u'
  }
];
