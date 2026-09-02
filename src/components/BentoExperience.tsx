import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Award, Code2, Terminal, Cpu, CheckCircle2, ArrowUpRight, Sparkles, Layers } from 'lucide-react';

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'software' | 'algorithmic' | 'academic';
  badge: string;
  badgeColor: string;
  description: string;
  highlights: string[];
  skills: string[];
  metricLabel: string;
  metricValue: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 'exp-collegepur-intern',
    period: '2024',
    role: 'Next.js Intern',
    organization: 'CollegePur',
    type: 'software',
    badge: 'Industry Internship',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    description: 'Contributed directly to production web frontend pages and reactive UI architecture at CollegePur using Next.js and modern developer tooling.',
    highlights: [
      'Engineered and optimized core production website frontend pages at CollegePur using Next.js (App Router), React, and TypeScript.',
      'Implemented responsive layouts, dynamic state management, and component hydration strategies, significantly improving page load speeds and Core Web Vitals.',
      'Collaborated closely with design and engineering peers to turn complex user requirements into clean, accessible, and maintainable production frontend components.'
    ],
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Frontend Optimization', 'Git'],
    metricLabel: 'Production Frontend',
    metricValue: 'CollegePur Web'
  },
  {
    id: 'exp-opensource-contributor',
    period: '2024 — Present',
    role: 'Active Open-Source Contributor & Systems Architect',
    organization: 'Open Source Community & Independent Engineering',
    type: 'software',
    badge: 'Open Source Core',
    badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
    description: 'Actively contributing to and architecting high-performance open-source full-stack tools, backend engines, and real-time visualization platforms.',
    highlights: [
      'Architected high-concurrency open-source inventory engine (IMS.proc) utilizing Next.js 15, Fastify, PostgreSQL, and Drizzle ORM with sub-20ms transactional query latency.',
      'Built SEISMIC.IO for live streaming tectonic telemetry, achieving 60 FPS real-time canvas rendering using D3.js and Leaflet over WebSocket feeds.',
      'Created AI-driven open-source tooling including ATS-compliant resume builder engines and intelligent career progression tracking platforms.'
    ],
    skills: ['Next.js 15', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'TypeScript', 'Open Source'],
    metricLabel: 'Code Quality & Speed',
    metricValue: '100% Type-Safe'
  },
  {
    id: 'exp-cp-specialist',
    period: '2024 — Present',
    role: 'Competitive Programming Specialist & Division Contender',
    organization: 'Global Algorithmic Arenas (LeetCode & CodeForces)',
    type: 'algorithmic',
    badge: 'Top 15% Speed/Accuracy',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    description: 'Solving rigorous algorithmic problems under strict spatial-temporal complexity limits across international competitive programming contests.',
    highlights: [
      'Solved 600+ algorithmic problems on LeetCode (Max Rating: 1578), mastering dynamic programming state transitions, graph traversals, and segment trees.',
      'Solved 250+ problems on CodeForces (Rating: 1200+), regularly competing under high-pressure time limits in Division-2 and Division-3 standard rounds.',
      'Rigorous focus on reducing computational time complexity from brute-force O(N²) down to optimal O(N log N) and O(1) auxiliary space optimization using C++ (STL).'
    ],
    skills: ['C++ (STL)', 'Java', 'Python', 'Dynamic Programming', 'Graph Theory', 'Algorithm Optimization'],
    metricLabel: 'Total Problem Volume',
    metricValue: '800+ Solved'
  },
  {
    id: 'exp-clubs-societies',
    period: '2024 — Present',
    role: 'Technical Society Member & TARS Tech Member — Clubs & Societies',
    organization: 'Technical Society & TARS Robotics Society, IIIT Bhubaneswar',
    type: 'academic',
    badge: 'Campus Leadership',
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
    description: 'Active core technical member driving institute technical initiatives, developer culture, and robotics web interfaces.',
    highlights: [
      'Technical Society Member: Active core technical member organizing institute workshops, mentoring peer developers, and fostering competitive programming and full-stack culture on campus.',
      'TARS Robotics Society — Technical Member: Actively contributing to robotics software integrations, technical systems, and embedded/web platform interfaces (TARS Website).',
      'Collaborating on interdisciplinary technical projects combining web automation, sensor telemetry, and collaborative software engineering workflows.'
    ],
    skills: ['Technical Leadership', 'Web Systems', 'Robotics Engineering', 'Event Mentorship', 'Team Collaboration'],
    metricLabel: 'Clubs & Societies',
    metricValue: 'Tech Society Core'
  },
  {
    id: 'exp-academic-research',
    period: 'Aug 2024 — May 2028 (expected)',
    role: 'Bachelor of Technology in Computer Science & Engineering',
    organization: 'International Institute of Information Technology (IIIT), Bhubaneswar',
    type: 'academic',
    badge: 'Academic Excellence',
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    description: 'Pursuing comprehensive computer science theory combined with hands-on systems programming and low-level kernel concepts.',
    highlights: [
      'Core Engineering Focus: Advanced Data Structures & Algorithms, Operating Systems Kernel Behavior, ACID-compliant DBMS Design, and Computer Networks.',
      'Conducted extensive system administration labs using Linux shell automation (bash/zsh), kernel profiling, and automated CI/CD deployment pipelines.',
      'Translating complex theoretical computer science models directly into high-performance, production-ready web applications and scalable APIs.'
    ],
    skills: ['System Design', 'Operating Systems', 'DBMS Architecture', 'Computer Networks', 'Linux Shell'],
    metricLabel: 'Academic Trajectory',
    metricValue: 'B.Tech CSE (2024-28)'
  }
];

export default function BentoExperience() {
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'algorithmic' | 'academic'>('all');

  const filteredExperience = activeTab === 'all' 
    ? experienceData 
    : experienceData.filter(item => item.type === activeTab);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'none';
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -1.8;
    const rotateY = ((x - centerX) / centerX) * 1.8;

    card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px) scale(1.006)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease';
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  };

  return (
    <div className="space-y-12" id="experience">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              Career & Milestones
            </span>
            <span className="h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500">Experience.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            A chronological timeline of full-stack system architecture, rigorous competitive programming milestones, and core academic trajectory at IIIT Bhubaneswar.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800 shadow-sm w-full md:w-auto">
          {[
            { id: 'all', label: 'All Track', icon: Layers },
            { id: 'software', label: 'Systems & Dev', icon: Terminal },
            { id: 'algorithmic', label: 'Algorithmic CP', icon: Code2 },
            { id: 'academic', label: 'Education & Clubs', icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all relative ${
                  isActive
                    ? 'text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 shadow-md scale-[1.02]'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-500 dark:text-orange-600' : 'text-neutral-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Compact Stacked Timeline */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredExperience.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="bento-card hover-glow p-5 sm:p-6 bg-white dark:bg-[#121212] border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl shadow-lg relative overflow-hidden transition-all duration-300 group flex flex-col md:flex-row gap-5 sm:gap-8"
                >
                  {/* Subtle Ambient Gradient Corner Glow */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-orange-500/10 dark:bg-orange-500/5 blur-3xl pointer-events-none" />

                  {/* Left Column: Context (Role, Org, Date, Metric) */}
                  <div className="md:w-1/3 flex-shrink-0 space-y-4 border-b md:border-b-0 md:border-r border-neutral-100 dark:border-neutral-800/60 pb-5 md:pb-0 md:pr-6 flex flex-col relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1.5 font-mono text-[10px] font-extrabold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-200/50 dark:border-orange-500/20">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display text-lg sm:text-xl font-black text-neutral-900 dark:text-white tracking-tight leading-snug group-hover:text-orange-500 transition-colors">
                        {item.role}
                      </h3>
                      <p className="font-sans text-xs font-bold text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                        <span>{item.organization}</span>
                      </p>
                    </div>

                    <div className="mt-auto pt-4 hidden md:flex flex-col items-start bg-neutral-50 dark:bg-neutral-900/50 px-3 py-2 rounded-xl border border-neutral-150 dark:border-neutral-850 w-fit">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">
                        {item.metricLabel}
                      </span>
                      <span className="font-display text-sm font-black text-orange-500 dark:text-orange-400">
                        {item.metricValue}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Details (Description, Highlights, Skills) */}
                  <div className="md:w-2/3 flex flex-col justify-between space-y-4 relative z-10">
                    <div className="space-y-3">
                      <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                        {item.description}
                      </p>

                      <div className="space-y-1.5">
                        {item.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-auto border-t border-neutral-100 dark:border-neutral-800/50">
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800 text-[10px] font-mono font-semibold text-neutral-600 dark:text-neutral-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Mobile Impact Metric Box */}
                      <div className="md:hidden flex flex-col items-end flex-shrink-0">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">
                          {item.metricLabel}
                        </span>
                        <span className="font-display text-xs font-black text-orange-500">
                          {item.metricValue}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Bottom Highlight Feature Banner */}
      <div
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
        className="bento-card hover-glow p-8 sm:p-10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#1e140a] text-white rounded-3xl shadow-2xl relative overflow-hidden border border-orange-500/30"
      >
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs text-orange-400 font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Engineering Philosophy
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight">
              Built for Scale, Optimized for Speed.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Whether building a high-throughput backend API from scratch or competing in algorithmic speed contests, I combine theoretical computer science rigor with modern developer velocity to deliver exceptional software systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-shrink-0 w-full sm:w-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <span className="font-display text-2xl sm:text-3xl font-black text-orange-400 block">100%</span>
              <span className="font-mono text-[10px] text-neutral-300 uppercase tracking-wider">Builder Focus</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <span className="font-display text-2xl sm:text-3xl font-black text-amber-400 block">800+</span>
              <span className="font-mono text-[10px] text-neutral-300 uppercase tracking-wider">Problems Solved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
