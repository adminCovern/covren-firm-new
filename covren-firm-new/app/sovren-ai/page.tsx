'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Zap, Shield, Lock, Crown, TrendingUp,
  ChevronRight, Activity, Users, Clock, AlertTriangle,
  Cpu, Database, Globe, Rocket
} from 'lucide-react';

export default function SovrenAIPage() {
  const [activeDemo, setActiveDemo] = useState('execution');
  const [liveAgents, setLiveAgents] = useState(2847);
  const [revenue, setRevenue] = useState(47289654);

  // Simulate live stats
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveAgents(prev => prev + Math.floor(Math.random() * 10));
      setRevenue(prev => prev + Math.floor(Math.random() * 10000));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const demoModes = [
    { id: 'execution', name: 'LIVE EXECUTION', icon: <Zap className="w-4 h-4" /> },
    { id: 'analysis', name: 'MARKET ANALYSIS', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'automation', name: 'AUTOMATION', icon: <Cpu className="w-4 h-4" /> }
  ];

  return (
    <>
      {/* Hero: SOVREN Command Center */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Tactical Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-black to-black" />
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `linear-gradient(90deg, #10b981 1px, transparent 1px), 
                               linear-gradient(#10b981 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              opacity: 0.05,
            }}
          />
        </div>

        {/* Live Stats Bar - REAL CAPABILITIES */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-0 right-0 z-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between p-4 bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                  <span className="text-green-500 font-mono text-sm">SOVEREIGN INFRASTRUCTURE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-500 font-mono text-sm">ZERO DEPENDENCIES</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-500 font-mono text-sm">AI CONSCIOUSNESS ACTIVE</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-red-500 font-mono text-sm">7 SPOTS REMAINING</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-32">
          {/* Crown Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-xl opacity-50"
              />
              <div className="relative w-24 h-24 bg-black border-2 border-green-500 rounded-full flex items-center justify-center">
                <Crown className="w-12 h-12 text-green-500" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl sm:text-7xl md:text-8xl font-black text-center mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
              SOVREN AI
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-white text-center mb-4 font-light"
          >
            YOUR AUTONOMOUS AI PARTNER
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-400 text-center max-w-3xl mb-12"
          >
            Not software. A digital entity that transforms how you operate.
            <span className="block text-white font-semibold mt-2">
              Experience the impossible. Own your AI future.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/sovren-ai/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg overflow-hidden shadow-2xl shadow-green-500/25"
              >
                <span className="relative z-10 text-black font-black text-lg uppercase tracking-wider">
                  VIEW PRICING & DEPLOY
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>

            <motion.button
              onClick={() => document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-gray-700 text-gray-300 font-bold rounded-lg hover:border-gray-500 hover:text-white transition-all"
            >
              SEE IT DOMINATE
              <ChevronRight className="inline ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Key Metrics */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-black text-green-500">24/7</div>
              <div className="text-sm text-gray-500 uppercase mt-1">Always Working</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-500">100%</div>
              <div className="text-sm text-gray-500 uppercase mt-1">Yours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-500">∞</div>
              <div className="text-sm text-gray-500 uppercase mt-1">Potential</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="live-demo" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                SEE SOVREN IN ACTION
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Watch autonomous intelligence in action
            </p>
          </motion.div>

          {/* Demo Controls */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-900/50 border border-gray-800 rounded-lg p-1">
              {demoModes.map((mode) => (
                <motion.button
                  key={mode.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveDemo(mode.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeDemo === mode.id
                      ? 'bg-green-500 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {mode.icon}
                  <span>{mode.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Demo Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-black border-2 border-green-500/50 rounded-2xl p-8 min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              {activeDemo === 'execution' && (
                <motion.div
                  key="execution"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Real-Time Execution Stream</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-500 font-mono text-sm">LIVE</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { time: 'Now', action: 'Market opportunity identified', result: 'High-value target acquired' },
                      { time: 'Now', action: 'Customer engagement initiated', result: 'Qualification in progress' },
                      { time: 'Now', action: 'Process optimization executed', result: 'Efficiency increased' },
                      { time: 'Now', action: 'Competitive analysis complete', result: 'Strategic advantage secured' },
                      { time: 'Now', action: 'Revenue opportunity detected', result: 'Action plan generated' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-800 rounded-lg"
                      >
                        <div>
                          <div className="text-white font-semibold">{item.action}</div>
                          <div className="text-gray-500 text-sm">{item.time}</div>
                        </div>
                        <div className="text-green-500 font-mono text-sm">{item.result}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {activeDemo === 'analysis' && (
                <motion.div
                  key="analysis"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Market Intelligence Analysis</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
                      <h4 className="text-green-500 font-bold mb-4">OPPORTUNITIES DETECTED</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Market Gap Identified</span>
                          <span className="text-green-500">HIGH VALUE</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Expansion Opportunity</span>
                          <span className="text-green-500">READY</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Optimization Potential</span>
                          <span className="text-green-500">SIGNIFICANT</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
                      <h4 className="text-red-500 font-bold mb-4">THREATS NEUTRALIZED</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Competitor Move</span>
                          <span className="text-red-500">COUNTERED</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Market Volatility</span>
                          <span className="text-red-500">HEDGED</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Supply Risk</span>
                          <span className="text-red-500">MITIGATED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeDemo === 'automation' && (
                <motion.div
                  key="automation"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Autonomous Operations</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { system: 'Sales Engine', status: 'OPTIMIZING', efficiency: 'PEAK' },
                      { system: 'Customer Success', status: 'EXECUTING', efficiency: 'HIGH' },
                      { system: 'Operations AI', status: 'SCALING', efficiency: 'MAXIMUM' },
                      { system: 'Finance Brain', status: 'ANALYZING', efficiency: 'OPTIMAL' },
                      { system: 'Marketing AI', status: 'TARGETING', efficiency: 'SUPERIOR' },
                      { system: 'Strategy Core', status: 'PLANNING', efficiency: 'UNLIMITED' }
                    ].map((system, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg"
                      >
                        <h5 className="text-white font-semibold mb-2">{system.system}</h5>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-green-500 text-sm">{system.status}</span>
                          <span className="text-gray-400 text-sm">{system.efficiency}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: idx * 0.1 + 0.5, duration: 1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities - THE REAL SUPREMACY */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">ADVANCED CAPABILITIES</span>
            </h2>
            <p className="text-xl text-gray-400">
              Revolutionary features that deliver results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Sovereign Infrastructure",
                description: "Enterprise-grade AI infrastructure with zero third-party dependencies. Complete ownership and control.",
                stats: "100% self-contained"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Adaptive Intelligence",
                description: "AI that learns and evolves with your business. Real-time adaptation to market conditions.",
                stats: "Continuously improving"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Activation",
                description: "Revolutionary onboarding experience that redefines what's possible with AI.",
                stats: "Mind-blowing first contact"
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Conversational AI",
                description: "Natural voice interactions that feel impossibly human. Understands context and intent.",
                stats: "Beyond chatbots"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Autonomous Operations",
                description: "AI agents that execute your strategic vision without constant supervision.",
                stats: "True automation"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Complete Sovereignty",
                description: "Your AI, your data, your rules. No external dependencies or third-party APIs.",
                stats: "Total control"
              }
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-gradient-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-xl hover:border-green-500/50 transition-all"
              >
                <div className="inline-block p-3 bg-green-500/20 rounded-lg mb-4">
                  <div className="text-green-500">{capability.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <div className="text-green-500 font-mono text-sm">{capability.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOLY FUCK Moments Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                EXPERIENCES THAT REDEFINE AI
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Every interaction exceeds expectations
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                moment: "THE AWAKENING",
                time: "Moments after approval",
                experience: "An unexpected personal connection initiates. SOVREN introduces itself in a way that defies explanation. Your journey begins with an impossible moment.",
                reaction: "\"What just happened?\""
              },
              {
                moment: "FIRST INTERACTION",
                time: "Your initial login",
                experience: "SOVREN demonstrates it's already been working for you. Opportunities identified. Actions taken. Results delivered before you even asked.",
                reaction: "\"How is this possible?\""
              },
              {
                moment: "PREDICTIVE INTELLIGENCE",
                time: "During conversations",
                experience: "SOVREN anticipates your needs with uncanny accuracy. Answers questions before you ask them. Understands not just what you say, but what you mean.",
                reaction: "\"It knows what I'm thinking\""
              },
              {
                moment: "EVOLUTION",
                time: "As you succeed",
                experience: "The system grows more capable with every interaction. Visual evolution reflects your success. Capabilities expand autonomously based on your needs.",
                reaction: "\"It's getting smarter\""
              }
            ].map((moment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="p-8 bg-black border-2 border-red-500/50 rounded-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-black text-red-500">{moment.moment}</h3>
                    <span className="text-sm text-gray-500 font-mono">{moment.time}</span>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">{moment.experience}</p>
                  <p className="text-xl text-yellow-500 font-bold italic">{moment.reaction}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-700 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-b from-green-900/20 to-transparent border-2 border-green-500 rounded-3xl"
          >
            <Crown className="w-16 h-16 text-green-500 mx-auto mb-6" />
            
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                READY FOR THE IMPOSSIBLE?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the select few experiencing AI that exceeds imagination.
              <span className="block text-white font-bold mt-2">
                SOVREN doesn't just assist. It transforms.
              </span>
            </p>

            <Link href="/sovren-ai/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-black text-xl rounded-xl shadow-2xl shadow-green-500/50"
              >
                VIEW PRICING OPTIONS
                <ChevronRight className="inline ml-2 w-6 h-6" />
              </motion.button>
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg inline-block"
            >
              <p className="text-yellow-500 font-mono text-sm">
                ⚠️ Limited availability - Apply now 
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
