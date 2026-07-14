import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { contactInfo } from '../data';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function BentoContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Status states
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [loadingStep, setLoadingStep] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const validateEmail = (emailVal: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailVal);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (val && !validateEmail(val)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!message.trim()) {
      alert('Please enter your message.');
      return;
    }

    // Enter loading state
    setStatus('loading');
    setLoadingStep(0);

    // Dynamic processing terminal messages
    const steps = [
      'Validating form inputs...',
      'Encrypting messaging payload...',
      'Establishing remote secure channel...',
      'Broadcasting payload to Bhubaneswar...',
      'Finalizing transaction...'
    ];

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
          }, 600);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6" id="contact">
      {/* Contact Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        className="bento-card hover-glow md:col-span-8 p-8 md:p-10 flex flex-col justify-between"
      >
        <div className="z-10 w-full">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              Secure Broadcast
            </span>
            <Send className="w-4 h-4 text-orange-500" />
          </div>

          <h3 className="font-display text-2xl font-black text-neutral-900 dark:text-white tracking-tight mb-2">
            Send a Message
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold mb-6">
            Establishing client-to-developer broadcast routing tunnels.
          </p>

          <AnimatePresence mode="wait">
            {status === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 flex flex-col items-center justify-center space-y-4"
              >
                <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                <div className="text-center font-mono text-xs space-y-1.5">
                  <p className="text-neutral-800 dark:text-neutral-200 font-bold uppercase tracking-wide">
                    TRANSMITTING PAYLOAD
                  </p>
                  <p className="text-orange-500 font-semibold h-4">
                    {loadingStep === 0 && 'Validating form inputs...'}
                    {loadingStep === 1 && 'Encrypting messaging payload...'}
                    {loadingStep === 2 && 'Establishing remote secure channel...'}
                    {loadingStep === 3 && 'Broadcasting payload to Bhubaneswar...'}
                    {loadingStep === 4 && 'Finalizing transaction...'}
                  </p>
                </div>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-10 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <p className="font-display text-lg font-bold text-neutral-900 dark:text-white">
                    Transmission Successful!
                  </p>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-sm">
                    Thank you for reaching out, Sambhu will reply to your broadcast via email within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300 transition-all active:scale-95"
                >
                  Broadcast Another Message
                </button>
              </motion.div>
            )}

            {status === 'idle' && (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white font-sans text-sm focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white font-sans text-sm focus:outline-none transition-all ${
                        emailError 
                          ? 'border-rose-500 focus:border-rose-500' 
                          : 'border-neutral-200 dark:border-neutral-800 focus:border-orange-500'
                      }`}
                    />
                    {emailError && (
                      <span className="flex items-center gap-1 font-mono text-[10px] text-rose-500 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        {emailError}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                    Your Message
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your project, inquiry, or just say hello..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white font-sans text-sm focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-black uppercase tracking-wider transition-all active:scale-95 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20"
                  >
                    Submit Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Side Cluster / Info Cards (4 Columns) */}
      <div className="md:col-span-4 flex flex-col gap-6">
        {/* Available Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onMouseMove={handleMouseMove}
          className="bento-card hover-glow p-6 flex flex-col gap-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs font-black text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">
              Available for Projects
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-semibold">
            Accepting freelances, full-stack development requests, open-source queries, or full-time roles starting immediately.
          </p>
        </motion.div>

        {/* Structured Locations Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onMouseMove={handleMouseMove}
          className="bento-card hover-glow p-6 flex-1 flex flex-col justify-between"
        >
          <div className="z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/20 dark:border-neutral-800/20 font-mono text-[9px] font-bold uppercase">
                Base of Operations
              </span>
              <MapPin className="w-4 h-4 text-orange-500" />
            </div>

            <h4 className="font-display text-base font-extrabold text-neutral-800 dark:text-neutral-200 leading-snug mb-2">
              Bhubaneswar, Odisha
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Based in Odisha's vibrant educational core, operating remotely or hybrid globally.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50 font-mono text-[10px] text-neutral-400 z-10">
            <span>GMT+5:30 (IST Zone)</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
