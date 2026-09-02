import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code, Terminal, FileText, Send, User, Briefcase, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { contactInfo } from '../data';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onNavClick?: (sec: string) => void;
}

export default function Header({ darkMode, setDarkMode, activeSection, setActiveSection, onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    if (onNavClick) {
      onNavClick(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 no-print ${
      scrolled 
        ? 'bg-white/70 dark:bg-[#0c0c0c]/75 backdrop-blur-2xl border-b border-neutral-200/60 dark:border-neutral-800/60 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('about');
          }}
          className="flex items-center gap-2.5 group relative"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500/15 via-orange-500/10 to-amber-500/15 dark:from-orange-500/25 dark:via-orange-500/15 dark:to-amber-500/25 border border-orange-500/40 dark:border-orange-500/50 flex items-center justify-center text-orange-600 dark:text-orange-400 font-mono font-black text-lg group-hover:scale-105 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
            {contactInfo.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg sm:text-xl tracking-tight text-neutral-900 dark:text-white group-hover:text-orange-500 transition-colors">
              {contactInfo.name.split(' ')[0]}
              <span className="text-orange-500 animate-pulse">.</span>
            </span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 -mt-1 hidden sm:block">
              Portfolio
            </span>
          </div>
        </a>

        {/* Premium Glassmorphism Horizontal Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/80 dark:bg-[#141414]/85 backdrop-blur-2xl px-3 py-1.5 rounded-full border border-neutral-200/80 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ scale: 1.04, y: -1.5 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-4 py-2 rounded-full font-mono text-xs font-bold transition-colors flex items-center gap-2 z-10 ${
                  isActive
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {/* Smooth Sliding Active Background Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/15 via-orange-500/10 to-amber-500/15 dark:from-orange-500/25 dark:via-orange-500/15 dark:to-amber-500/25 border border-orange-500/40 dark:border-orange-500/50 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] -z-10"
                  />
                )}

                <Icon className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'scale-110 text-orange-500 dark:text-orange-400' : 'text-neutral-400 group-hover:text-neutral-600'}`} />
                <span>{item.label}</span>

              </motion.button>
            );
          })}
        </nav>

        {/* Right Side Dock: Theme Toggle & Let's Talk CTA */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.08, rotate: 12 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-2xl bg-white dark:bg-[#161616] border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/40 transition-colors shadow-sm"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-orange-500" />}
          </motion.button>

          {/* Let's Talk / Contact CTA */}
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-mono font-black text-xs shadow-md shadow-orange-500/25 border border-orange-400/30 hover:shadow-orange-500/40 transition-all relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-1.5">
              Let's Talk <Sparkles className="w-3.5 h-3.5" />
            </span>
          </motion.button>

          {/* Mobile Menu Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-2xl bg-white dark:bg-[#161616] border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 shadow-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-orange-500" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-2xl border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1.5">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-2xl text-xs font-mono font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500/15 to-amber-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/30'
                        : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900/80'
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-orange-500 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center gap-2 w-full mt-3 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-mono font-black text-xs shadow-lg shadow-orange-500/25"
              >
                Let's Talk <Sparkles className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
