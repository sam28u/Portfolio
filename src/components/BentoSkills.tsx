import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data';
import { 
  Code, Settings, Database, Shield, Wrench, GitFork, Sparkles, 
  Terminal, Coffee, Cpu, Server, Zap, Layers, RefreshCw, 
  Share2, Globe, Key, Lock, Palette, Layout, Activity, 
  Package, GitBranch, CheckCircle, Flame 
} from 'lucide-react';

type SkillCategory = 'languages' | 'frameworks' | 'databases' | 'security' | 'tooling' | 'devops';

export default function BentoSkills() {
  const containerRef = useRef<HTMLDivElement>(null);

  const categoryGroups = [
    { id: 'languages', label: 'Languages & Runtimes', icon: Code, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'frameworks', label: 'Frameworks & Libraries', icon: Layers, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { id: 'databases', label: 'Databases & System Design', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { id: 'security', label: 'Security & Auth', icon: Shield, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { id: 'tooling', label: 'Tooling & UI', icon: Wrench, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { id: 'devops', label: 'DevOps & OS', icon: GitFork, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'none';
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set variables for radial hover glow
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Subtle 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px) scale(1.01)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  };

  const getSkillIcon = (skillName: string) => {
    const nameLower = skillName.toLowerCase();
    if (nameLower.includes('javascript') || nameLower.includes('typescript') || nameLower.includes('es6')) return Code;
    if (nameLower.includes('react')) return Sparkles;
    if (nameLower.includes('java') && !nameLower.includes('script')) return Coffee;
    if (nameLower.includes('c++')) return Terminal;
    if (nameLower.includes('python')) return Cpu;
    if (nameLower.includes('node') || nameLower.includes('express')) return Server;
    if (nameLower.includes('bun') || nameLower.includes('fastify') || nameLower.includes('vite')) return Zap;
    if (nameLower.includes('next.js')) return Layers;
    if (nameLower.includes('tanstack')) return RefreshCw;
    if (nameLower.includes('langchain') || nameLower.includes('ai')) return Share2;
    if (nameLower.includes('sql') || nameLower.includes('mongo') || nameLower.includes('database') || nameLower.includes('orm')) return Database;
    if (nameLower.includes('api') || nameLower.includes('system design')) return Globe;
    if (nameLower.includes('jwt') || nameLower.includes('token')) return Key;
    if (nameLower.includes('oauth') || nameLower.includes('auth') || nameLower.includes('clerk')) return Lock;
    if (nameLower.includes('cors') || nameLower.includes('security') || nameLower.includes('rbac')) return Shield;
    if (nameLower.includes('tailwind') || nameLower.includes('css') || nameLower.includes('shadcn') || nameLower.includes('chakra')) return Palette;
    if (nameLower.includes('html') || nameLower.includes('ui')) return Layout;
    if (nameLower.includes('gsap') || nameLower.includes('animation')) return Activity;
    if (nameLower.includes('npm') || nameLower.includes('package')) return Package;
    if (nameLower.includes('git')) return GitBranch;
    if (nameLower.includes('linux')) return Terminal;
    if (nameLower.includes('ci/cd') || nameLower.includes('pipeline')) return GitFork;
    if (nameLower.includes('test') || nameLower.includes('debug')) return CheckCircle;
    
    return Sparkles;
  };

  return (
    <div className="space-y-6" id="skills">
      {/* Section Header */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-[10px] font-bold uppercase tracking-wider w-fit mb-2">
              Technology Matrix
            </span>
            <h2 className="font-display text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
              Tech Stack
            </h2>
          </div>
        </div>
      </div>

      {/* Grid of Grouped Category Cards */}
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="wait">
          {categoryGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            const groupSkills = skillsData.filter(s => s.category === group.id);

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: groupIdx * 0.08, ease: "easeOut" }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="bento-card hover-glow p-5 sm:p-6 flex flex-col group transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5 border-b border-neutral-100 dark:border-neutral-800/60 pb-4">
                  <div className={`p-2 rounded-xl flex items-center justify-center transition-colors shadow-sm ${group.bg} ${group.color} border border-neutral-200/40 dark:border-white/5`}>
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                    {group.label}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {groupSkills.map((skill, idx) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: (groupIdx * 0.1) + (idx * 0.03) }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-colors"
                      >
                        <SkillIcon className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover:text-orange-500 transition-colors" />
                        <span className="font-sans text-[11px] sm:text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

