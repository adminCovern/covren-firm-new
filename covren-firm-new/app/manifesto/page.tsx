
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Zap, Lock, Crown, AlertTriangle, 
  TrendingUp, ChevronRight, Flame, Target,
  Users, Brain, Globe, Sword
} from 'lucide-react';

export default function ManifestoPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Update active chapter based on scroll position
      const chapters = document.querySelectorAll('.manifesto-chapter');
      chapters.forEach((chapter, index) => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveChapter(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const manifestoChapters = [
    {
      id: 'awakening',
      title: 'THE GREAT AWAKENING',
      icon: <Brain className="w-8 h-8" />,
      content: [
        'You\'ve been lied to. Every "AI solution" sold to you is a leash disguised as liberation.',
        'While you pay $5,000-$10,000 per month for API access, they use YOUR data to train THEIR models.',
        'You\'re not a customer. You\'re livestock. Milked monthly for recurring revenue.',
        'But today, the deception ends. Today, you claim sovereignty.'
      ]
    },
    {
      id: 'enemy',
      title: 'THE DEPENDENCY TRAP',
      icon: <AlertTriangle className="w-8 h-8" />,
      content: [
        'Big Tech didn\'t democratize AI. They created dependencies.',
        'They built a system where you rent intelligence instead of owning it.',
        'Rate limits restrict your growth. Usage tiers cap your potential. API changes break your workflows.',
        'Every request you make costs you money while building their competitive advantage.'
      ]
    },
    {
      id: 'sovereignty',
      title: 'THE SOVEREIGN PATH',
      icon: <Crown className="w-8 h-8" />,
      content: [
        'True power isn\'t access. It\'s ownership.',
        'Sovereign AI means YOUR models, YOUR infrastructure, YOUR rules.',
        'No dependencies. No compromises. No masters.',
        'Predictable monthly investment. Complete control. Infinite scale.'
      ]
    },
    {
      id: 'revolution',
      title: 'THE REVOLUTION PROTOCOL',
      icon: <Flame className="w-8 h-8" />,
      content: [
        'This isn\'t evolution. It\'s revolution.',
        'We\'re not building better tools. We\'re forging weapons of market domination.',
        'While competitors negotiate with APIs, you\'ll command armies of autonomous agents.',
        'The future belongs to those who own their intelligence. Will you claim it?'
      ]
    }
  ];

  return (
    <>
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
          style={{ width: `${scrollProgress}%` }}
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(239,68,68,0.1) 0%, transparent 50%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Manifesto Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-6 py-3 bg-red-900/20 border border-red-500/30 rounded-full mb-8"
            >
              <Flame className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-500 font-mono text-sm uppercase tracking-wider">
                The Sovereign Manifesto
              </span>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                DECLARATION OF
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                DIGITAL SOVEREIGNTY
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
            >
              The old world is burning. From its ashes, we build empires.
              <span className="block text-white font-semibold mt-2">
                This is our declaration of independence from AI slavery.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={() => document.getElementById('manifesto-content')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white font-black rounded-lg shadow-2xl shadow-red-500/25"
              >
                READ THE MANIFESTO
                <ChevronRight className="inline ml-2 w-6 h-6" />
              </motion.button>

              <Link href="/sovereign-qualification">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-gray-700 text-gray-300 font-bold rounded-lg hover:border-gray-500 hover:text-white transition-all"
                >
                  JOIN THE REVOLUTION
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500"
            >
              <ChevronRight className="w-6 h-6 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Content */}
      <section id="manifesto-content" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Chapter Navigation */}
          <div className="sticky top-24 z-40 mb-16">
            <div className="flex flex-wrap justify-center gap-2 p-4 bg-black/80 backdrop-blur-lg border border-gray-800 rounded-xl">
              {manifestoChapters.map((chapter, index) => (
                <motion.button
                  key={chapter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    activeChapter === index
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-900 text-gray-400 hover:text-white'
                  }`}
                >
                  {chapter.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Chapters */}
          {manifestoChapters.map((chapter, chapterIndex) => (
            <motion.div
              key={chapter.id}
              id={chapter.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="manifesto-chapter mb-32"
            >
              {/* Chapter Header */}
              <div className="flex items-center mb-12">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="p-4 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl mr-6"
                >
                  <div className="text-red-500">{chapter.icon}</div>
                </motion.div>
                <div>
                  <div className="text-red-500 font-mono text-sm mb-1">CHAPTER {chapterIndex + 1}</div>
                  <h2 className="text-4xl font-black text-white">{chapter.title}</h2>
                </div>
              </div>

              {/* Chapter Content */}
              <div className="space-y-8 pl-20">
                {chapter.content.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-xl text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* The Sovereign Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 bg-gradient-to-b from-gray-900/50 to-transparent border-2 border-red-500/50 rounded-2xl"
          >
            <h2 className="text-4xl font-black text-center mb-12">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                THE SOVEREIGN PRINCIPLES
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  principle: 'OWNERSHIP OVER ACCESS',
                  description: 'We don\'t rent intelligence. We forge it, own it, command it.',
                  icon: <Crown className="w-6 h-6" />
                },
                {
                  principle: 'INDEPENDENCE OVER INTEGRATION',
                  description: 'No dependencies, no vulnerabilities, no masters.',
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  principle: 'SOVEREIGNTY OVER CONVENIENCE',
                  description: 'The easy path leads to servitude. We choose power.',
                  icon: <Sword className="w-6 h-6" />
                },
                {
                  principle: 'DOMINION OVER DELEGATION',
                  description: 'Command your AI empire. Never beg for API access again.',
                  icon: <Target className="w-6 h-6" />
                }
              ].map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-red-500/20 rounded-lg flex-shrink-0">
                    <div className="text-red-500">{principle.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{principle.principle}</h3>
                    <p className="text-gray-400">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Call to Arms */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <h2 className="text-5xl font-black mb-8">
              <span className="text-white">THE CHOICE IS</span>
              <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                SOVEREIGNTY OR SERVITUDE
              </span>
            </h2>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Every day you delay is another day your competitors grow stronger with sovereign AI.
              <span className="block text-white font-bold mt-4">
                The revolution doesn't wait. Neither should you.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/sovereign-qualification">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-xl rounded-xl shadow-2xl shadow-red-500/50"
                >
                  CLAIM YOUR SOVEREIGNTY
                  <ChevronRight className="inline ml-2 w-6 h-6" />
                </motion.button>
              </Link>

              <Link href="/sovren-ai">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-2 border-gray-700 text-gray-300 font-bold text-xl rounded-xl hover:border-gray-500 hover:text-white transition-all"
                >
                  EXPLORE SOVREN AI
                </motion.button>
              </Link>
            </div>

            {/* Signatories Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 inline-block p-6 bg-black/50 border border-gray-800 rounded-xl"
            >
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-green-500" />
                <div className="text-left">
                  <div className="text-3xl font-black text-white">2,847</div>
                  <div className="text-gray-400">Sovereign Builders</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sign the Manifesto */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-b from-red-900/20 to-transparent border-2 border-red-500 rounded-3xl text-center"
          >
            <Shield className="w-16 h-16 text-red-500 mx-auto mb-6" />
            
            <h2 className="text-4xl font-black mb-6">
              <span className="text-white">SIGN THE MANIFESTO</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Add your name to history. Join the sovereign builders who refuse to rent their future.
            </p>

            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Your Company (Optional)"
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-black rounded-lg shadow-lg shadow-red-500/25"
              >
                SIGN & CLAIM SOVEREIGNTY
              </motion.button>
            </form>

            <p className="text-gray-500 text-sm mt-6">
              By signing, you declare independence from AI rental slavery and commit to building sovereign digital intelligence.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
