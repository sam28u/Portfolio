import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { Github, ExternalLink, ArrowUpRight, Code, Sparkles, Database, Terminal } from 'lucide-react';

type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'ai';

export default function BentoProjects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'fullstack', label: 'Full-Stack', icon: Database },
    { id: 'frontend', label: 'Frontend / UI', icon: Code },
    { id: 'ai', label: 'AI & Automation', icon: Terminal },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'all') return true;
    return project.category === activeTab;
  });

  return (
    <div className="space-y-6" id="projects">
      {/* Filters */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-[10px] font-bold uppercase tracking-wider w-fit mb-2">
              Selected Works
            </span>
            <h2 className="font-display text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-400">
            Filtering interactive full-stack modules
          </span>
        </div>

        {/* Tab List */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl w-full">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProjectCategory)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-colors duration-200 border ${
                  isSelected
                    ? 'bg-white dark:bg-[#1a1a1a] text-orange-600 dark:text-orange-400 shadow-sm border-neutral-200/60 dark:border-neutral-800/20'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-neutral-800/50 border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-full"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseMove={handleMouseMove}
                className="bento-card bento-card-interactive hover-glow p-8 flex flex-col justify-between transition-colors duration-200"
              >
                <div className="z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200/30 dark:border-neutral-800/30 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {project.category === 'fullstack' ? 'Full-Stack System' : 
                       project.category === 'frontend' ? 'Frontend / UI' : 
                       project.category === 'ai' ? 'Generative AI' : 'Other Module'}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                          title="View Code on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed font-semibold">
                    {project.longDescription || project.description}
                  </p>

                  {/* Highlights List */}
                  {project.highlights && (
                    <ul className="space-y-1.5 mb-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                          <span className="text-orange-500 font-mono mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Tech Tags */}
                <div className="border-t border-neutral-100 dark:border-neutral-800/50 pt-5 flex flex-wrap gap-1.5 items-center justify-between z-10">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 rounded-md bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/30 dark:border-neutral-800/30 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-500 dark:text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
