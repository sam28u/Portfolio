import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import BentoProfile from './components/BentoProfile';
import BentoSkills from './components/BentoSkills';
import BentoProjects from './components/BentoProjects';
import BentoResume from './components/BentoResume';
import BentoContact from './components/BentoContact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-dark-mode');
    return saved !== null ? JSON.parse(saved) : true; // Default to dark mode (Kinetic Noir)
  });
  
  const [activeSection, setActiveSection] = useState('about');
  const isScrollingRef = useRef(false);

  // Sync state with HTML element class
  useEffect(() => {
    localStorage.setItem('portfolio-dark-mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNavClick = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);
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

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 850);
    }
  };

  // Track active section via Intersection Observer
  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'resume', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the active view space
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Frame progress line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#f2f4f8] dark:bg-[#0c0c0c] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 relative selection:bg-orange-500/20 selection:text-orange-500">
      {/* Scroll Progress Line */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-orange-500 dark:bg-orange-400 origin-[0%] z-50 no-print" 
        style={{ scaleX }} 
      />

      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-orange-500/5 dark:bg-orange-500/[0.02] blur-[150px] pointer-events-none no-print" />
      <div className="absolute top-[30%] right-1/4 w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 dark:bg-indigo-500/[0.015] blur-[130px] pointer-events-none no-print" />
      <div className="absolute bottom-[20%] left-1/3 w-[45rem] h-[45rem] rounded-full bg-emerald-500/5 dark:bg-emerald-500/[0.015] blur-[160px] pointer-events-none no-print" />

      {/* Main Header */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onNavClick={handleNavClick}
      />

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16 space-y-24 relative z-10">
        
        {/* Intro / BentoProfile Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BentoProfile />
        </motion.section>

        {/* Divider / Intermediary */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent no-print" />

        {/* Technical Matrix / Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <BentoSkills />
        </motion.section>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent no-print" />

        {/* Selected Works / Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <BentoProjects />
        </motion.section>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent no-print" />

        {/* Interactive Resume Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <BentoResume />
        </motion.section>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent no-print" />

        {/* Secure Broadcast / Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <BentoContact />
        </motion.section>

      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
}
