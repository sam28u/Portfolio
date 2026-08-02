import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { contactInfo, profileSummary, projectsData, skillsData, cpData, valueProps } from '../data';
import { FileText, Download, Github, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function BentoResume() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'none';
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -1.5;
    const rotateY = ((x - centerX) / centerX) * 1.5;

    card.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px) scale(1.002)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease';
    card.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  };


  const handleDownloadTXT = () => {
    const resumeText = `
SAMBHU PRASAD VERMA
B.Tech | Full-Stack Web Developer | Competitive Programmer

Email: ${contactInfo.email}
Phone: ${contactInfo.phone}
Location: ${contactInfo.location}
GitHub: ${contactInfo.github}
LinkedIn: ${contactInfo.linkedin}

--------------------------------------------------
PROFILE SUMMARY
--------------------------------------------------
${profileSummary}

--------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------
Languages & Runtimes: JavaScript, TypeScript, Java, C++, Python, Bun, Node.js
Frameworks & Libraries: React, Next.js (v15), Fastify, Express, TanStack (Query, Table, Router), LangChain, LangGraph
Databases & Architecture: PostgreSQL, MySQL, MongoDB, Drizzle ORM, System Design, RESTful APIs
Security & Auth: JWT, OAuth2, NextAuth.js, Clerk, CORS, RBAC (Role-Based Access Control)
Tooling & UI: Vite, Tailwind CSS, GSAP, Shadcn UI, Chakra UI, HTML5, CSS3, pnpm/npm
DevOps & OS: Git, GitHub, Linux, Deployment, Unit Testing, Debugging

--------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------
${projectsData.map(p => `
* ${p.title} - ${p.description}
  Tech Stack: ${p.tech.join(', ')}
  Highlights:
  ${p.highlights?.map(h => `  - ${h}`).join('\n') || ''}
`).join('\n')}

--------------------------------------------------
COMPETITIVE PROGRAMMING & EXTRACURRICULARS
--------------------------------------------------
${cpData.map(cp => `
* ${cp.platform}
  Solved: ${cp.solved}+
  Rating: ${cp.ratingText}
  Details: ${cp.details}
`).join('\n')}

--------------------------------------------------
VALUE PROPOSITION
--------------------------------------------------
${valueProps.map(v => `* ${v.title}: ${v.desc}`).join('\n')}
    `;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sambhu_Prasad_Verma_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6" id="resume">
      {/* Header with control buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
        <div className="flex flex-col">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-[10px] font-bold uppercase tracking-wider w-fit mb-2">
            Curriculum Vitae
          </span>
          <h2 className="font-display text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
            Interactive Resume
          </h2>
        </div>

        {/* Print & Download buttons */}
        <div className="flex flex-wrap gap-2.5">
          <a
            href="/Resume.pdf"
            download="Sambhu_Prasad_Verma_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-mono font-bold transition-all active:scale-95 shadow-md shadow-orange-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            Download Official PDF
          </a>


          <button
            onClick={handleDownloadTXT}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 text-xs font-mono font-bold transition-all active:scale-95 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download TXT
          </button>
        </div>
      </div>

      {/* Styled Interactive Resume Container - Exact 1:1 Match of Resume.pdf */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bento-card hover-glow p-8 md:p-14 print-full-width bg-white dark:bg-[#0f0f0f] border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-3xl text-neutral-900 dark:text-neutral-100"
      >
        <div className="relative z-10 space-y-7 font-sans text-xs md:text-sm leading-relaxed">
          {/* Header Block (Exact Typography & Structure) */}
          <div className="space-y-2 pb-2">
            <h1 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
              SAMBHU PRASAD VERMA
            </h1>
            <p className="font-serif italic text-sm md:text-base text-neutral-700 dark:text-neutral-300">
              B.Tech | Full-Stack Web Developer | Competitive Programmer
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs font-medium text-neutral-800 dark:text-neutral-300 border-b border-transparent">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>{contactInfo.phone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>{contactInfo.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <a href={contactInfo.linkedin} target="_blank" referrerPolicy="no-referrer" className="hover:underline font-semibold">Linkedin</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <a href={contactInfo.github} target="_blank" referrerPolicy="no-referrer" className="hover:underline font-semibold">Github</a>
              </span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="space-y-2">
            <h3 className="font-display text-base font-extrabold text-neutral-950 dark:text-white pb-1 border-b-2 border-neutral-900 dark:border-neutral-200 uppercase tracking-wide">
              Profile
            </h3>
            <p className="text-neutral-800 dark:text-neutral-300 text-justify leading-relaxed">
              Currently pursuing a B.Tech in Computer Science and Engineering at the International Institute of Information Technology (IIIT), Bhubaneswar. As a <strong className="font-semibold text-neutral-950 dark:text-white">Full-Stack Developer</strong> with a builder’s mindset, I specialize in <strong className="font-semibold text-neutral-950 dark:text-white">scalable architectures, modern web frameworks</strong>, and <strong className="font-semibold text-neutral-950 dark:text-white">end-to-end product delivery</strong>. Proficient in the complete <strong className="font-semibold text-neutral-950 dark:text-white">Software Development Lifecycle (SDLC)</strong>, I prefer to build <strong className="font-semibold text-neutral-950 dark:text-white">complex backend systems</strong> from scratch for maximum control and performance. I am an active <strong className="font-semibold text-neutral-950 dark:text-white">competitive programmer</strong> with a strong analytical foundation in <strong className="font-semibold text-neutral-950 dark:text-white">Data Structures and Algorithms</strong>, alongside a keen technical curiosity extending to <strong className="font-semibold text-neutral-950 dark:text-white">low-level computer architecture</strong> and <strong className="font-semibold text-neutral-950 dark:text-white">Linux system administration</strong>.
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-extrabold text-neutral-950 dark:text-white pb-1 border-b-2 border-neutral-900 dark:border-neutral-200 uppercase tracking-wide">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-1">
              {/* Column 1 */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-neutral-950 dark:text-white text-xs md:text-sm">Languages & Runtimes</h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs">JavaScript (ES6+), TypeScript, Java, C++, Python, Bun, Node.js</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950 dark:text-white text-xs md:text-sm">Databases & Architecture</h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs">PostgreSQL, MySQL, MongoDB, Drizzle ORM, System Design, RESTful APIs</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950 dark:text-white text-xs md:text-sm">Tooling & UI</h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs">Vite, Tailwind CSS, GSAP, Shadcn UI, Chakra UI, HTML5, CSS3, pnpm/npm</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-neutral-950 dark:text-white text-xs md:text-sm">Frameworks & Libraries</h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs">React, Next.js (v15), Fastify, Express, TanStack (Query, Table, Router), LangChain, LangGraph</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950 dark:text-white text-xs md:text-sm">Security & Auth</h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs">JWT, OAuth2, NextAuth.js, Clerk, CORS, RBAC (Role-Based Access Control)</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950 dark:text-white text-xs md:text-sm">DevOps & OS</h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs">Git, GitHub, Linux, Deployment, Unit Testing, Debugging</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-extrabold text-neutral-950 dark:text-white pb-1 border-b-2 border-neutral-900 dark:border-neutral-200 uppercase tracking-wide">
              Projects
            </h3>
            <div className="space-y-3 pt-1">
              {/* IMS.proc */}
              <div className="space-y-0.5">
                <h4 className="font-bold text-neutral-950 dark:text-white flex items-center gap-1.5 text-xs md:text-sm">
                  IMS.proc <a href="https://github.com/sam28u/ims-proc" target="_blank" referrerPolicy="no-referrer" className="text-neutral-500 hover:text-orange-500 font-normal text-xs">🔗</a> <span className="font-normal text-neutral-600 dark:text-neutral-400">, High-Performance Inventory System</span>
                </h4>
                <div className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-800 dark:before:text-neutral-200 text-xs text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  Architected a robust inventory management system utilizing <strong className="font-semibold text-neutral-950 dark:text-white">Next.js 15, Fastify, PostgreSQL</strong>, and <strong className="font-semibold text-neutral-950 dark:text-white">Drizzle ORM</strong> to ensure rapid data handling and a <strong className="font-semibold text-neutral-950 dark:text-white">scalable end-to-end architecture</strong>.
                </div>
              </div>

              {/* SEISMIC.IO */}
              <div className="space-y-0.5">
                <h4 className="font-bold text-neutral-950 dark:text-white flex items-center gap-1.5 text-xs md:text-sm">
                  SEISMIC.IO <a href="https://github.com/sam28u/seismic-io" target="_blank" referrerPolicy="no-referrer" className="text-neutral-500 hover:text-orange-500 font-normal text-xs">🔗</a> <span className="font-normal text-neutral-600 dark:text-neutral-400">, Advanced Tectonic Surveillance</span>
                </h4>
                <div className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-800 dark:before:text-neutral-200 text-xs text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  Built a specialized TypeScript-based web application focused on <strong className="font-semibold text-neutral-950 dark:text-white">processing and visualizing real-time</strong> advanced tectonic surveillance data.
                </div>
              </div>

              {/* AI-Job-Tracking */}
              <div className="space-y-0.5">
                <h4 className="font-bold text-neutral-950 dark:text-white flex items-center gap-1.5 text-xs md:text-sm">
                  AI-Job-Tracking <a href="https://github.com/sam28u/ai-job-tracking" target="_blank" referrerPolicy="no-referrer" className="text-neutral-500 hover:text-orange-500 font-normal text-xs">🔗</a> <span className="font-normal text-neutral-600 dark:text-neutral-400">, AI-Powered Career Management Platform</span>
                </h4>
                <div className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-800 dark:before:text-neutral-200 text-xs text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  Developed an AI-powered job tracking platform leveraging <strong className="font-semibold text-neutral-950 dark:text-white">LLM integrations, workflow automation, and analytics dashboards</strong> to streamline application management and career insights.
                </div>
              </div>

              {/* COSTLY */}
              <div className="space-y-0.5">
                <h4 className="font-bold text-neutral-950 dark:text-white flex items-center gap-1.5 text-xs md:text-sm">
                  COSTLY <a href="https://github.com/sam28u/costly" target="_blank" referrerPolicy="no-referrer" className="text-neutral-500 hover:text-orange-500 font-normal text-xs">🔗</a> <span className="font-normal text-neutral-600 dark:text-neutral-400">, Habit Analytics & "Life-Tax" Tracker</span>
                </h4>
                <div className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-800 dark:before:text-neutral-200 text-xs text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  Built a full-stack habit tracker with <strong className="font-semibold text-neutral-950 dark:text-white">Next.js 15 and PostgreSQL</strong> that calculates the <strong className="font-semibold text-neutral-950 dark:text-white">hidden time and money costs</strong> of your daily routines while dynamically <strong className="font-semibold text-neutral-950 dark:text-white">visualizing your progress toward personal goals</strong>.
                </div>
              </div>

              {/* AI Resume Builder */}
              <div className="space-y-0.5">
                <h4 className="font-bold text-neutral-950 dark:text-white flex items-center gap-1.5 text-xs md:text-sm">
                  AI Resume Builder <a href="https://github.com/sam28u/ai-resume-builder" target="_blank" referrerPolicy="no-referrer" className="text-neutral-500 hover:text-orange-500 font-normal text-xs">🔗</a> <span className="font-normal text-neutral-600 dark:text-neutral-400">, Intelligent Resume Generation Platform</span>
                </h4>
                <div className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-800 dark:before:text-neutral-200 text-xs text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  Created an AI-driven resume generation platform that utilizes <strong className="font-semibold text-neutral-950 dark:text-white">LLM-powered content optimization and dynamic PDF generation</strong> to help users craft ATS-friendly resumes.
                </div>
              </div>

              {/* Other Projects */}
              <div className="space-y-0.5">
                <h4 className="font-bold text-neutral-950 dark:text-white text-xs md:text-sm">
                  Other Projects
                </h4>
                <div className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-800 dark:before:text-neutral-200 text-xs text-neutral-800 dark:text-neutral-300 leading-relaxed">
                  Built projects including <strong className="font-semibold text-neutral-950 dark:text-white">TARS Website, Finance Dashboard, Job Posting and Searching Platform</strong>, and <strong className="font-semibold text-neutral-950 dark:text-white">Heart Stroke Prediction</strong>, gaining experience in <strong className="font-semibold text-neutral-950 dark:text-white">team collaboration, data visualization, machine learning, full-stack development</strong>, and modern technologies such as <strong className="font-semibold text-neutral-950 dark:text-white">React, TypeScript, Node.js, PostgreSQL</strong>, and <strong className="font-semibold text-neutral-950 dark:text-white">AI integrations</strong>.
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Programming & Extracurriculars */}
          <div className="space-y-2">
            <h3 className="font-display text-base font-extrabold text-neutral-950 dark:text-white pb-1 border-b-2 border-neutral-900 dark:border-neutral-200 uppercase tracking-wide">
              Competitive Programming & Extracurriculars
            </h3>
            <div className="space-y-2 pt-1 text-xs">
              <div>
                <h4 className="font-bold text-neutral-950 dark:text-white flex items-center gap-1">
                  LeetCode <a href="https://leetcode.com/sam28u" target="_blank" referrerPolicy="no-referrer" className="text-neutral-500 hover:text-orange-500 font-normal">🔗</a>
                </h4>
                <p className="text-neutral-800 dark:text-neutral-300">
                  Solved <strong className="font-semibold text-neutral-950 dark:text-white">500+ problems</strong> (Max Rating: <strong className="font-semibold text-neutral-950 dark:text-white">1567</strong>); consistently active in weekly contests and algorithmic challenges utilizing C++, Java, and Python.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-950 dark:text-white flex items-center gap-1">
                  CodeForces <a href="https://codeforces.com/profile/sam28u" target="_blank" referrerPolicy="no-referrer" className="text-neutral-500 hover:text-orange-500 font-normal">🔗</a>
                </h4>
                <p className="text-neutral-800 dark:text-neutral-300">
                  Solved <strong className="font-semibold text-neutral-950 dark:text-white">200+ problems</strong> (Rating: <strong className="font-semibold text-neutral-950 dark:text-white">1200+</strong>); regular participant in <strong className="font-semibold text-neutral-950 dark:text-white">Div-2/Div-3</strong> rounds, focusing on speed and accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* How I add value */}
          <div className="space-y-2">
            <h3 className="font-display text-base font-extrabold text-neutral-950 dark:text-white pb-1 border-b-2 border-neutral-900 dark:border-neutral-200 uppercase tracking-wide">
              How I add value
            </h3>
            <div className="space-y-1 pt-1 text-xs text-neutral-800 dark:text-neutral-300">
              <p>
                <strong className="font-bold text-neutral-950 dark:text-white">Builder’s Mindset:</strong> Rapidly ship high-quality, full-stack features, leveraging custom architectures for maximum optimization.
              </p>
              <p>
                <strong className="font-bold text-neutral-950 dark:text-white">Design Communicator:</strong> Translate complex UI/UX designs and system architectures into clean, production-ready code.
              </p>
              <p>
                <strong className="font-bold text-neutral-950 dark:text-white">Analytical Problem Solver:</strong> Apply competitive programming DSA expertise to solve complex, rigorous technical challenges.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
