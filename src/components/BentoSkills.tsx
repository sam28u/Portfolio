import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data';
import { 
  Code, Settings, Database, Shield, Wrench, GitFork, Sparkles, 
  Terminal, Coffee, Cpu, Server, Zap, Layers, RefreshCw, 
  Share2, Globe, Key, Lock, Palette, Layout, Activity, 
  Package, GitBranch, CheckCircle, Flame 
} from 'lucide-react';

type SkillCategory = 'all' | 'languages' | 'frameworks' | 'databases' | 'security' | 'tooling' | 'devops';

export default function BentoSkills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Stack', icon: Sparkles },
    { id: 'languages', label: 'Languages & Runtimes', icon: Code },
    { id: 'frameworks', label: 'Frameworks', icon: Settings },
    { id: 'databases', label: 'Databases & System', icon: Database },
    { id: 'security', label: 'Security & Auth', icon: Shield },
    { id: 'tooling', label: 'Tooling & UI', icon: Wrench },
    { id: 'devops', label: 'DevOps & OS', icon: GitFork },
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

    // Calculate prominent 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale(1.02)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease';
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  };

  const filteredSkills = skillsData.filter((skill) => {
    if (activeTab === 'all') return true;
    return skill.category === activeTab;
  });

  const getSkillIcon = (skillName: string, category: string) => {
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
    
    switch (category) {
      case 'languages': return Code;
      case 'frameworks': return Settings;
      case 'databases': return Database;
      case 'security': return Shield;
      case 'tooling': return Wrench;
      case 'devops': return GitFork;
      default: return Sparkles;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'languages': 
        return {
          badge: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
          iconBox: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white dark:group-hover:text-white group-hover:border-amber-500',
          dot: 'bg-amber-500'
        };
      case 'frameworks': 
        return {
          badge: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20',
          iconBox: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white dark:group-hover:text-white group-hover:border-orange-500',
          dot: 'bg-orange-500'
        };
      case 'databases': 
        return {
          badge: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
          iconBox: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-white group-hover:border-emerald-500',
          dot: 'bg-emerald-500'
        };
      case 'security': 
        return {
          badge: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20',
          iconBox: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white dark:group-hover:text-white group-hover:border-rose-500',
          dot: 'bg-rose-500'
        };
      case 'tooling': 
        return {
          badge: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20',
          iconBox: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-white group-hover:border-cyan-500',
          dot: 'bg-cyan-500'
        };
      case 'devops': 
        return {
          badge: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
          iconBox: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white dark:group-hover:text-white group-hover:border-purple-500',
          dot: 'bg-purple-500'
        };
      default: 
        return {
          badge: 'text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
          iconBox: 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20 group-hover:bg-neutral-500 group-hover:text-white dark:group-hover:text-white group-hover:border-neutral-500',
          dot: 'bg-neutral-500'
        };
    }
  };

  return (
    <div className="space-y-6" id="skills">
      {/* Tab Selectors */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-[10px] font-bold uppercase tracking-wider w-fit mb-2">
              Technology Matrix
            </span>
            <h2 className="font-display text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
              Skills & Expertise
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-400">
            Hover cards for interactive 3D inspection
          </span>
        </div>

        {/* Tab List */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl w-full">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as SkillCategory)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-colors duration-200 border ${
                  isSelected
                    ? 'bg-white dark:bg-[#1a1a1a] text-orange-600 dark:text-orange-400 shadow-sm border-neutral-200/60 dark:border-neutral-800/20'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-neutral-800/50 border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of interactive skill blocks */}
      <div 
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 col-span-full"
          >
            {filteredSkills.map((skill) => {
              const styles = getCategoryStyles(skill.category);
              const SkillIcon = getSkillIcon(skill.name, skill.category);

              return (
                <div
                  key={skill.name}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="bento-card bento-card-interactive hover-glow p-5 flex flex-col justify-between group transition-colors duration-200"
                >
                  {/* Top bar with category badge and status indicator */}
                  <div className="flex items-center justify-between mb-4 z-10">
                    <span className={`px-2.5 py-0.5 rounded-md border text-[9px] font-mono font-black uppercase tracking-wider transition-colors ${styles.badge}`}>
                      {skill.category}
                    </span>
                    
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${styles.dot} group-hover:scale-125 transition-transform`} />
                    </div>
                  </div>

                  {/* Center interactive icon & text */}
                  <div className="flex items-center gap-3.5 z-10 my-2">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.18 }}
                      transition={{ duration: 0.35 }}
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-sm ${styles.iconBox}`}
                    >
                      <SkillIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </motion.div>

                    <div className="flex flex-col">
                      <h4 className="font-display text-sm font-extrabold text-neutral-800 dark:text-neutral-100 tracking-tight leading-snug group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-medium mt-0.5">
                        Production Verified
                      </span>
                    </div>
                  </div>

                  {/* Bottom interactive hint */}
                  <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/40 flex items-center justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500 z-10">
                    <span className="group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                      3D Perspective Tilt
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 text-orange-500 font-bold transition-opacity">
                      Tech Stack
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

