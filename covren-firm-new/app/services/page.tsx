'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Code, Brain, Shield, Rocket, Users, Zap,
  ChevronRight, CheckCircle, TrendingUp, 
  Database, Globe, Cpu, Lock, Crown
} from 'lucide-react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('development');

  const services = {
    development: {
      title: 'FULL-STACK SOVEREIGN DEVELOPMENT',
      icon: <Code className="w-12 h-12" />,
      tagline: 'Not just code. Digital sovereignty.',
      description: 'We build AI systems that answer to you alone. No dependencies, no compromises, no limits.',
      capabilities: [
        {
          name: 'Custom AI Models',
          description: 'Purpose-built neural networks trained on your data, optimized for your objectives.',
          features: ['LLM Fine-tuning', 'Computer Vision', 'Predictive Analytics', 'NLP Systems']
        },
        {
          name: 'Sovereign Infrastructure',
          description: 'Complete ownership of your AI pipeline from metal to interface.',
          features: ['Private Cloud', 'Edge Deployment', 'Data Pipelines', 'Auto-scaling']
        },
        {
          name: 'Integration Mastery',
          description: 'Seamlessly connect AI to your existing systems without vendor lock-in.',
          features: ['API Development', 'Legacy Migration', 'Real-time Sync', 'Custom Protocols']
        }
      ],
      stats: [
        { metric: '100%', label: 'Code Ownership' },
        { metric: '0', label: 'Dependencies' },
        { metric: '∞', label: 'Scale Potential' }
      ],
      cta: 'INITIATE DEVELOPMENT'
    },
    consulting: {
      title: 'AI STRATEGY & SOVEREIGNTY CONSULTING',
      icon: <Brain className="w-12 h-12" />,
      tagline: 'From dependent to dominant.',
      description: 'Strategic guidance to break free from AI rental traps and build your sovereign empire.',
      capabilities: [
        {
          name: 'Sovereignty Assessment',
          description: 'Comprehensive analysis of your current AI dependencies and liberation path.',
          features: ['Dependency Audit', 'Cost Analysis', 'Risk Assessment', 'ROI Projection']
        },
        {
          name: 'Strategic Roadmap',
          description: 'Custom blueprint for achieving complete AI independence.',
          features: ['Migration Planning', 'Architecture Design', 'Timeline Development', 'Resource Allocation']
        },
        {
          name: 'Execution Support',
          description: 'Hands-on guidance through your sovereignty transformation.',
          features: ['Technical Mentorship', 'Team Training', 'Progress Monitoring', 'Optimization Cycles']
        }
      ],
      stats: [
        { metric: 'Full', label: 'Ownership Model' },
        { metric: 'Custom', label: 'Solutions' },
        { metric: 'Dedicated', label: 'Support' }
      ],
      cta: 'BOOK STRATEGY SESSION'
    },
    systems: {
      title: 'SOVEREIGN SYSTEM ARCHITECTURE',
      icon: <Shield className="w-12 h-12" />,
      tagline: 'Infrastructure that obeys only you.',
      description: 'Enterprise-grade AI systems with zero external dependencies. Your kingdom, your rules.',
      capabilities: [
        {
          name: 'Private AI Infrastructure',
          description: 'Complete AI stack deployed on your terms, your territory.',
          features: ['On-premise Options', 'Hybrid Cloud', 'Air-gapped Systems', 'Sovereign Data Centers']
        },
        {
          name: 'Security & Compliance',
          description: 'Military-grade security with complete regulatory compliance.',
          features: ['Zero-trust Architecture', 'Encryption at Rest', 'Audit Trails', 'Compliance Automation']
        },
        {
          name: 'Performance Engineering',
          description: 'Systems optimized for dominance, not just function.',
          features: ['Sub-second Response', 'Infinite Scaling', 'Fault Tolerance', '99.99% Uptime']
        }
      ],
      stats: [
        { metric: '0.1s', label: 'Response Time' },
        { metric: '256-bit', label: 'Encryption' },
        { metric: '24/7', label: 'Monitoring' }
      ],
      cta: 'ARCHITECT SOVEREIGNTY'
    },
    research: {
      title: 'ADVANCED AI RESEARCH LAB',
      icon: <Rocket className="w-12 h-12" />,
      tagline: 'Tomorrow\'s dominance, today.',
      description: 'Cutting-edge AI research translated into sovereign advantages for your empire.',
      capabilities: [
        {
          name: 'Custom Model Development',
          description: 'Proprietary AI models that give you capabilities your competitors can\'t buy.',
          features: ['Novel Architectures', 'Domain-specific Training', 'Model Optimization', 'Performance Tuning']
        },
        {
          name: 'Emerging Tech Integration',
          description: 'First access to breakthrough AI technologies before they hit the market.',
          features: ['Quantum-ready AI', 'Neuromorphic Computing', 'Edge AI Innovation', 'AGI Preparation']
        },
        {
          name: 'Competitive Intelligence',
          description: 'AI systems that monitor, predict, and outmaneuver market movements.',
          features: ['Market Prediction', 'Competitor Analysis', 'Trend Forecasting', 'Strategic Modeling']
        }
      ],
      stats: [
        { metric: 'Cutting', label: 'Edge Research' },
        { metric: 'Custom', label: 'Innovation' },
        { metric: 'Your', label: 'Advantage' }
      ],
      cta: 'ACCESS RESEARCH LAB'
    }
  };

  const currentService = services[selectedService as keyof typeof services];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 48%, #374151 49%, #374151 51%, transparent 52%)`,
              backgroundSize: '20px 20px',
              opacity: 0.1,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-full mb-8"
          >
            <Zap className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-gray-300 font-mono text-sm">
              SOVEREIGN CAPABILITIES
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-center mb-6"
          >
            <span className="text-white">WE BUILD</span>
            <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              AI EMPIRES
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 text-center max-w-3xl"
          >
            From strategy to execution, we deliver complete AI sovereignty. 
            <span className="text-white font-semibold"> No templates. No compromises. Pure dominance.</span>
          </motion.p>
        </div>
      </section>

      {/* Service Selector */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(services).map(([key, service]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(key)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                  selectedService === key
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-black shadow-lg shadow-green-500/25'
                    : 'bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                <div className={selectedService === key ? 'text-black' : 'text-gray-400'}>
                  {service.icon}
                </div>
                <span className="hidden sm:inline">{key.toUpperCase()}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Detail */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Service Header */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-block p-6 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl mb-8"
                >
                  <div className="text-green-500">{currentService.icon}</div>
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {currentService.title}
                  </span>
                </h2>
                
                <p className="text-2xl text-green-500 mb-4">{currentService.tagline}</p>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">{currentService.description}</p>
              </div>

              {/* Capabilities Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {currentService.capabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-gradient-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-xl hover:border-green-500/50 transition-all"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">{capability.name}</h3>
                    <p className="text-gray-400 mb-6">{capability.description}</p>
                    
                    <div className="space-y-3">
                      {capability.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-3 gap-8 p-8 bg-gradient-to-r from-green-900/20 to-transparent border border-green-500/30 rounded-2xl mb-12"
              >
                {currentService.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-green-500">{stat.metric}</div>
                    <div className="text-gray-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <div className="text-center">
                <Link href={`/contact?service=${selectedService}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-black text-xl rounded-xl shadow-2xl shadow-green-500/25"
                  >
                    {currentService.cta}
                    <ChevronRight className="inline ml-2 w-6 h-6" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">THE SOVEREIGNTY</span>
              <span className="block text-green-500">PROTOCOL</span>
            </h2>
            <p className="text-xl text-gray-400">
              From dependency to dominance in four phases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: '01',
                title: 'ASSESS',
                description: 'Deep analysis of your current AI dependencies and opportunities.',
                icon: <Brain className="w-8 h-8" />
              },
              {
                phase: '02',
                title: 'ARCHITECT',
                description: 'Design your sovereign AI infrastructure and migration path.',
                icon: <Database className="w-8 h-8" />
              },
              {
                phase: '03',
                title: 'DEPLOY',
                description: 'Build and launch your independent AI systems.',
                icon: <Rocket className="w-8 h-8" />
              },
              {
                phase: '04',
                title: 'DOMINATE',
                description: 'Scale infinitely while competitors pay rent.',
                icon: <Crown className="w-8 h-8" />
              }
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/50 transition-all">
                  <div className="text-6xl font-black text-gray-800 mb-4">{phase.phase}</div>
                  <div className="inline-block p-3 bg-green-500/20 rounded-lg mb-4">
                    <div className="text-green-500">{phase.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                </div>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sovereignty Section (Replaced Client Results) */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                WHY CHOOSE SOVEREIGNTY?
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              The principles that guide our approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                principle: 'Complete Ownership',
                description: 'Every line of code, every model, every byte of data - 100% yours. No subscriptions, no dependencies, no compromise.',
                icon: <Shield className="w-12 h-12" />
              },
              {
                principle: 'Unlimited Potential',
                description: 'Scale infinitely without per-request pricing. Your growth is limited only by your ambition, not your AI budget.',
                icon: <Rocket className="w-12 h-12" />
              },
              {
                principle: 'Trusted Partnership',
                description: 'We believe in transparency and trust. Your success is our success, built on a foundation of integrity and excellence.',
                icon: <Users className="w-12 h-12" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-gradient-to-b from-green-900/10 to-transparent border border-green-500/30 rounded-2xl text-center"
              >
                <div className="inline-block p-4 bg-green-500/20 rounded-xl mb-6">
                  <div className="text-green-500">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.principle}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gray-900/30 border border-gray-800 rounded-2xl text-center"
          >
            <p className="text-lg text-gray-300 italic">
              "We respect our clients' privacy and confidentiality. While we're proud of the transformative work we do, 
              <span className="text-white font-semibold"> we believe client trust is sacred.</span> 
              Your journey to AI sovereignty is yours alone to share."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-black border-2 border-green-500 rounded-3xl"
          >
            <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
            
            <h2 className="text-5xl font-black mb-6">
              <span className="text-white">READY TO STOP</span>
              <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                RENTING YOUR FUTURE?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Every day you wait, competitors claim more territory. 
              <span className="block text-white font-bold mt-2">
                Your sovereignty starts with one decision.
              </span>
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-black text-xl rounded-xl shadow-2xl shadow-green-500/50"
              >
                CLAIM YOUR SOVEREIGNTY NOW
                <ChevronRight className="inline ml-2 w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
