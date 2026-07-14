import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { contactInfo, profileSummary, projectsData, skillsData, cpData, valueProps } from '../data';
import { FileText, Download, Printer, Github, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function BentoResume() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handlePrint = () => {
    window.print();
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
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] hover:bg-neutral-50 dark:hover:bg-neutral-900 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 transition-all active:scale-95 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5 text-orange-500" />
            Print / Save as PDF
          </button>
          
          <button
            onClick={handleDownloadTXT}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 text-xs font-mono font-bold transition-all active:scale-95 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download Text CV
          </button>
        </div>
      </div>

      {/* Styled Interactive Resume Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        className="bento-card hover-glow p-8 md:p-12 print-full-width"
      >
        <div className="relative z-10 space-y-8">
          {/* Resume Heading */}
          <div className="border-b border-neutral-200/50 dark:border-neutral-800/50 pb-8 flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-1">
              <h3 className="font-display text-3xl font-black text-neutral-900 dark:text-white tracking-tight">
                {contactInfo.name}
              </h3>
              <p className="font-mono text-xs text-orange-500 dark:text-orange-400 font-bold uppercase tracking-wider">
                {contactInfo.title}
              </p>
              <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {contactInfo.subtitle}
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                {contactInfo.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                {contactInfo.phone}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {contactInfo.location}
              </span>
              <div className="flex gap-4 sm:col-span-2 pt-1 border-t border-neutral-100 dark:border-neutral-800/20">
                <a href={contactInfo.github} target="_blank" referrerPolicy="no-referrer" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a href={contactInfo.linkedin} target="_blank" referrerPolicy="no-referrer" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Profile Summary Section */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-neutral-400 border-l-2 border-orange-500 pl-3">
              Profile Summary
            </h4>
            <p className="font-sans text-neutral-600 dark:text-neutral-300 text-xs md:text-sm leading-relaxed">
              {profileSummary}
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column (Skills & CP) */}
            <div className="md:col-span-5 space-y-8">
              {/* Technical Skills */}
              <div className="space-y-4">
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-neutral-400 border-l-2 border-orange-500 pl-3">
                  Technical Expertise
                </h4>

                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-700 dark:text-neutral-300 block mb-1">
                      LANGUAGES & RUNTIMES
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      JavaScript (ES6+), TypeScript, Java, C++, Python, Bun, Node.js
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-700 dark:text-neutral-300 block mb-1">
                      FRAMEWORKS & LIBRARIES
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      React, Next.js (v15), Fastify, Express, TanStack (Query, Table, Router), LangChain, LangGraph
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-700 dark:text-neutral-300 block mb-1">
                      DATABASES & SYSTEM
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      PostgreSQL, MySQL, MongoDB, Drizzle ORM, System Design, RESTful APIs
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-700 dark:text-neutral-300 block mb-1">
                      SECURITY & AUTH
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      JWT, OAuth2, NextAuth.js, Clerk, CORS, RBAC (Role-Based Access Control)
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-neutral-700 dark:text-neutral-300 block mb-1">
                      TOOLING & DEVOPS
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Vite, Tailwind CSS, Git, GitHub Workflows, Linux, Deployment, Debugging
                    </p>
                  </div>
                </div>
              </div>

              {/* CP achievements */}
              <div className="space-y-4">
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-neutral-400 border-l-2 border-indigo-500 pl-3">
                  Competitive Programming
                </h4>

                <div className="space-y-3 font-sans text-xs">
                  {cpData.map((cp) => (
                    <div key={cp.platform} className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-150 dark:border-neutral-850">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
                          {cp.platform}
                        </span>
                        <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase">
                          {cp.ratingText}
                        </span>
                      </div>
                      <p className="text-neutral-500 dark:text-neutral-400 text-[11px] leading-relaxed">
                        {cp.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Projects & Value props) */}
            <div className="md:col-span-7 space-y-8">
              {/* Selected Projects */}
              <div className="space-y-4">
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-neutral-400 border-l-2 border-orange-500 pl-3">
                  Selected Projects
                </h4>

                <div className="space-y-5">
                  {projectsData.slice(0, 3).map((project) => (
                    <div key={project.id} className="space-y-1.5">
                      <div className="flex items-baseline justify-between gap-4">
                        <h5 className="font-display text-sm font-extrabold text-neutral-800 dark:text-neutral-200">
                          {project.title}
                        </h5>
                        <span className="font-mono text-[9px] text-neutral-400">
                          {project.tech.slice(0, 3).join(' • ')}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {project.longDescription || project.description}
                      </p>
                      {project.highlights && (
                        <ul className="space-y-1 pl-3">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-1.5">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Value propositions */}
              <div className="space-y-4">
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-neutral-400 border-l-2 border-emerald-500 pl-3">
                  How I Add Value
                </h4>

                <div className="grid grid-cols-1 gap-3.5">
                  {valueProps.map((prop, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center text-xs font-mono font-bold text-emerald-500">
                        {idx + 1}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                          {prop.title}
                        </span>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {prop.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
