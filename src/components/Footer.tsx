import React from 'react';
import { contactInfo } from '../data';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200/50 dark:border-neutral-800/50 py-12 bg-neutral-50 dark:bg-[#111] no-print">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-sm tracking-tight text-neutral-800 dark:text-neutral-200">
              Sambhu Prasad Verma
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400">
            © {new Date().getFullYear()} All Rights Reserved. Crafted with care.
          </span>
        </div>

        {/* Center / Made with */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>in Bhubaneswar, India</span>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={contactInfo.github}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-xl bg-white dark:bg-[#161616] border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-center text-neutral-500 hover:text-orange-500 hover:border-orange-500/20 dark:hover:text-orange-400 transition-all shadow-sm"
            title="GitHub"
          >
            <Github className="w-4.5 h-4.5" />
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-xl bg-white dark:bg-[#161616] border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-center text-neutral-500 hover:text-orange-500 hover:border-orange-500/20 dark:hover:text-orange-400 transition-all shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="w-9 h-9 rounded-xl bg-white dark:bg-[#161616] border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-center text-neutral-500 hover:text-orange-500 hover:border-orange-500/20 dark:hover:text-orange-400 transition-all shadow-sm"
            title="Email"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
