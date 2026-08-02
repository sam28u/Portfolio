import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { contactInfo, profileSummary, valueProps, cpData } from '../data';
import { Trophy, Code, Award, MapPin, Mail, Phone, ArrowUpRight, Github, Linkedin, Terminal, Sparkles } from 'lucide-react';

export default function BentoProfile() {
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
    const rotateX = ((y - centerY) / centerY) * -1.8;
    const rotateY = ((x - centerX) / centerX) * 1.8;

    card.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px) scale(1.003)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease';
    card.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  };

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-6" id="about">
      {/* Intro Card (Hero) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bento-card bento-card-interactive hover-glow md:col-span-8 p-8 flex flex-col justify-between"
      >
        <div className="z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              Personal Narrative
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
              <span>Available for full-time & freelance</span>
            </div>
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight mb-4">
            Building interfaces, <span className="text-orange-500 dark:text-orange-400">architecting backends</span>, and solving problems.
          </h1>
          
          <p className="font-sans text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            {profileSummary}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-200/50 dark:border-neutral-800/50 pt-6 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500 dark:text-neutral-400">
              <MapPin className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">LOCATION</span>
              <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">{contactInfo.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500 dark:text-neutral-400">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">EMAIL</span>
              <a href={`mailto:${contactInfo.email}`} className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500 dark:text-neutral-400">
              <Phone className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">PHONE</span>
              <a href={`tel:${contactInfo.phone}`} className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Profile Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bento-card bento-card-interactive hover-glow md:col-span-4 flex flex-col justify-between overflow-hidden"
      >
        {/* Full-width Passport / Portrait Photo Container */}
        <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200/50 dark:border-neutral-800/50 group/img z-10 flex-shrink-0">
          {/* 
            INSTRUCTION TO ADD YOUR MANUAL PHOTO:
            Place your passport size / portrait image into the 'public' folder as 'profile.jpg'.
            It will automatically load here full width! Until then, a demo portrait image is shown.
          */}
          <img
            src="/profile.jpg"
            alt={contactInfo.name}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.includes('/profile.jpg')) {
                target.src = '/profile pic.jpg';
              } else if (target.src.includes('/profile') && !target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
              }
            }}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
          />
          {/* Subtle gradient overlay at bottom of image for seamless integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
          
          {/* Floating Status Badge inside the image */}
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Work</span>
          </div>
        </div>

        {/* Content Area (Moved slightly lower to accommodate full-width image) */}
        <div className="p-6 md:p-7 flex flex-col justify-between flex-1 z-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white leading-tight mb-1">
              {contactInfo.name}
            </h2>
            <p className="font-mono text-xs text-orange-500 dark:text-orange-400 font-semibold mb-5">
              {contactInfo.title}
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300">
                  IIIT Bhubaneswar CSE Student
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300">
                  Full-Stack Architecture Focus
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300">
                  Competitive C++ & TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Socials buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1 z-10">
            <a
              href={contactInfo.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-mono font-semibold transition-all group"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-mono font-semibold transition-all group"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Competitive Programming Bento Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bento-card bento-card-interactive hover-glow md:col-span-6 p-8 flex flex-col justify-between"
      >
        <div className="z-10">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              Algorithmic Core
            </span>
            <Trophy className="w-5 h-5 text-indigo-500" />
          </div>

          <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white leading-snug mb-3">
            Competitive Programming
          </h3>
          <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 mb-6">
            Rigorous mental training with high-performance algorithmic execution on premium platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cpData.map((cp, idx) => (
              <a
                key={cp.platform}
                href={cp.profileUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="block p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/30 dark:border-neutral-800/30 hover:border-indigo-500/20 dark:hover:border-indigo-400/20 hover:bg-neutral-100/50 dark:hover:bg-neutral-900 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-extrabold text-neutral-800 dark:text-neutral-200">
                    {cp.platform}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-500 transition-colors" />
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-display text-xl font-black text-indigo-600 dark:text-indigo-400">
                    {cp.solved}+
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">SOLVED</span>
                </div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 font-medium">
                  {cp.ratingText}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/30 dark:border-indigo-900/30 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 leading-relaxed z-10">
          ⚡ Solved 800+ combined problems focusing on Data Structures (trees, graphs, heap, trie) & Algorithms (DP, sliding window, backtracking, binary search).
        </div>
      </motion.div>

      {/* How I Add Value Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bento-card bento-card-interactive hover-glow md:col-span-6 p-8 flex flex-col justify-between"
      >
        <div className="z-10">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              Builder Philosophy
            </span>
            <Award className="w-5 h-5 text-emerald-500" />
          </div>

          <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white leading-snug mb-5">
            How I Add Value
          </h3>

          <div className="space-y-4">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100/20 dark:border-emerald-900/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                  <span className="font-mono text-xs font-bold">{idx + 1}</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                    {prop.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-0.5">
                    {prop.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-neutral-200/50 dark:border-neutral-800/50 pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 z-10">
          <span>Continuous Integration mindset</span>
          <span>Ship fast. Ship robust.</span>
        </div>
      </motion.div>
    </div>
  );
}
