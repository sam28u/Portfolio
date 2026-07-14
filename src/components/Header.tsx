import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code, Terminal, FileText, Send, User } from 'lucide-react';
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
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'resume', label: 'Resume', icon: FileText },
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print ${
      scrolled 
        ? 'bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('about');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-mono font-bold text-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
            {contactInfo.name.charAt(0)}
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            {contactInfo.name.split(' ')[0]}
            <span className="text-orange-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-2xl border border-neutral-200/40 dark:border-neutral-800/40">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-colors duration-200 border ${
                  isActive
                    ? 'bg-white dark:bg-[#1a1a1a] text-orange-500 dark:text-orange-400 shadow-sm border-neutral-200/40 dark:border-neutral-800/40'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* Hire Me / Contact Shortcut */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-mono font-bold text-xs shadow-sm shadow-orange-500/20 transition-all active:scale-95"
          >
            Let's Talk
            <Send className="w-3 h-3" />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-center text-neutral-600 dark:text-neutral-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#121212] border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-mono font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-500 dark:text-orange-400'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center gap-2 w-full mt-2 py-3 rounded-xl bg-orange-500 text-white font-mono font-bold text-sm"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
