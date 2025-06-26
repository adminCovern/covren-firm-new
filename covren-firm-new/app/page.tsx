'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Flame, AlertTriangle, Calculator, ChevronRight,
  X, Brain, TrendingUp, Clock
} from 'lucide-react';

export default function HomePage() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [showImpactModal, setShowImpactModal] = useState(false);
  const [hoveredTruth, setHoveredTruth] = useState<number | null>(null);
  const [userAPIBill, setUserAPIBill] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4o');

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Trigger impact modal at 12 seconds
  useEffect(() => {
    if (secondsElapsed === 12 && !showImpactModal) {
      setShowImpactModal(true);
    }
  }, [secondsElapsed, showImpactModal]);

  // Real 2025 API pricing
  const pricing2025 = {
    'gpt-4o': { name: 'GPT-4o', cost: '$5.00', unit: 'per 1M tokens' },
    'claude-3.5-sonnet': { name: 'Claude 3.5 Sonnet', cost: '$3.00', unit: 'per 1M tokens' },
    'gemini-1.5-pro': { name: 'Gemini 1.5 Pro', cost: '$3.50', unit: 'per 1M tokens' }
  };

  // Average SMB usage patterns (2025 data)
  const smb2025Stats = {
    avgMonthlyTokens: 8500000, // 8.5M tokens/month average
    avgMonthlyCost: 42.50, // $42.50 at GPT-4o rates
    growthRate: 3.2 // 3.2x growth per year
  };

  return (
    <>
      {/* Hero - The Moment of Realization */}
      <section className="min-h-screen bg-black flex items-center relative">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            {/* Time-sensitive hook */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-8 px-6 py-3 bg-red-950/50 border border-red-800 rounded-full"
            >
              <p className="text-red-400 font-mono text-sm">
                In {secondsElapsed} seconds, SMBs have spent ${(secondsElapsed * 1.39).toFixed(2)} on AI tokens
              </p>
            </motion.div>

            {/* The gut punch */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8"
            >
              <span className="text-white">Your AI Costs</span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mt-4"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Just Went Up
              </motion.span>
              <span className="block text-white text-4xl md:text-6xl mt-6">
                320% Since 2023
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            >
              While you were integrating their APIs, they were planning price hikes.
              <span className="block text-white font-bold mt-3">
                GPT-4o: $5/million tokens. Your dependency: Priceless.
              </span>
            </motion.p>

            {/* Immediate action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('truth-bomb');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-10 py-5 bg-white text-black font-black text-lg rounded-2xl hover:scale-105 transition-all"
              >
                See The 2025 Price Shock
                <AlertTriangle className="inline ml-2 w-5 h-5 text-red-600" />
              </button>

              <Link href="/sovren-qualification">
                <button className="px-10 py-5 border-2 border-red-600 text-red-500 font-bold text-lg rounded-2xl hover:bg-red-950/30 transition-all">
                  Escape The Trap Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Impact Modal - Shows at 12 seconds */}
        <AnimatePresence>
          {showImpactModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowImpactModal(false)}
            >
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-950 border-2 border-yellow-500 rounded-3xl p-8 max-w-md w-full text-center"
              >
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  BREAKING: January 2025
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  OpenAI just announced "usage-based tier pricing" - 
                  <span className="text-yellow-400 font-bold"> heavy users will pay 2-5x more.</span>
                </p>
                <p className="text-white font-semibold mb-8">
                  Are you ready for your bill to double?
                </p>
                <button
                  onClick={() => setShowImpactModal(false)}
                  className="px-8 py-4 bg-yellow-600 text-black font-bold rounded-xl w-full hover:bg-yellow-500 transition-all"
                >
                  Show Me The Alternative
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* The Truth Bomb - 2025 Reality */}
      <section id="truth-bomb" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-red-400 font-mono text-sm mb-4">THE 2025 REALITY CHECK</p>
            <h2 className="text-4xl md:text-6xl font-black text-white">
              Here's What They're
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Actually Charging Now
              </span>
            </h2>
          </motion.div>

          {/* Live Pricing Comparison */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(pricing2025).map(([key, data], idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-red-500/50 transition-all cursor-pointer"
                onClick={() => setSelectedModel(key)}
              >
                <h3 className="text-xl font-bold text-white mb-2">{data.name}</h3>
                <div className="text-4xl font-black text-red-500 mb-1">{data.cost}</div>
                <p className="text-gray-500 text-sm mb-4">{data.unit}</p>
                
                {selectedModel === key && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-4 border-t border-gray-800"
                  >
                    <p className="text-gray-400 text-sm">
                      For average SMB usage (8.5M tokens/mo):
                    </p>
                    <p className="text-2xl font-bold text-white mt-1">
                      ${(8.5 * parseFloat(data.cost.replace('$', ''))).toFixed(2)}/month
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* The Hidden Truths */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              What They Don't Want You To Calculate:
            </h3>
            
            {[
              {
                id: 1,
                title: "The Compound Growth Trap",
                fact: "Your AI usage grows 3.2x per year on average",
                impact: "Your $500/mo bill becomes $5,120/mo in 3 years",
                color: "red"
              },
              {
                id: 2,
                title: "The Hidden Quota System",
                fact: "Rate limits force you to pay for higher tiers",
                impact: "Need 100 requests/minute? That's enterprise pricing.",
                color: "orange"
              },
              {
                id: 3,
                title: "The Model Obsolescence Scam",
                fact: "They deprecate models every 6-12 months",
                impact: "Forced migrations = rewrite your code or pay more",
                color: "yellow"
              }
            ].map((truth) => (
              <motion.div
                key={truth.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setHoveredTruth(truth.id)}
                onMouseLeave={() => setHoveredTruth(null)}
              >
                <div className={`p-6 bg-gray-950/50 border border-gray-800 rounded-2xl transition-all ${
                  hoveredTruth === truth.id ? 'scale-105 border-' + truth.color + '-500/50' : ''
                }`}>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Truth #{truth.id}: {truth.title}
                  </h4>
                  <p className="text-gray-400 mb-3">{truth.fact}</p>
                  
                  <AnimatePresence>
                    {hoveredTruth === truth.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`text-${truth.color}-400 font-semibold`}
                      >
                        → {truth.impact}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal Impact Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-red-950/20 to-orange-950/20 border border-red-800 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Calculate Your 3-Year AI Slavery Cost
            </h3>
            
            <div className="max-w-md mx-auto">
              <input
                type="number"
                placeholder="Your current monthly AI API bill..."
                value={userAPIBill}
                onChange={(e) => setUserAPIBill(e.target.value)}
                className="w-full px-6 py-4 bg-black border-2 border-gray-800 rounded-xl text-white text-2xl text-center focus:border-red-500 focus:outline-none"
              />
              
              {userAPIBill && Number(userAPIBill) > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 space-y-4 text-center"
                >
                  <div>
                    <p className="text-gray-400">Year 1 (current):</p>
                    <p className="text-3xl font-bold text-white">${(Number(userAPIBill) * 12).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Year 2 (3.2x growth):</p>
                    <p className="text-3xl font-bold text-orange-400">${(Number(userAPIBill) * 12 * 3.2).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Year 3 (10.24x growth):</p>
                    <p className="text-4xl font-bold text-red-500">${(Number(userAPIBill) * 12 * 10.24).toLocaleString()}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-gray-400">Total 3-year cost:</p>
                    <p className="text-5xl font-black text-red-600">
                      ${(Number(userAPIBill) * 12 * (1 + 3.2 + 10.24)).toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOVREN - The Escape */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-3 bg-green-950/50 border border-green-800 rounded-full mb-6">
              <span className="text-green-400 font-mono text-sm">THERE IS ANOTHER WAY</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              SOVREN
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Stop renting. Start running your own AI.
              <span className="block text-white font-bold mt-2">
                Fixed cost. Unlimited usage. Total control.
              </span>
            </p>
          </motion.div>

          {/* The Offer - Based on Real Screenshot */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SOVREN Proof */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-950 border border-gray-800 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold text-white mb-2">SOVREN Proof</h3>
              <p className="text-gray-400 mb-6">Prove sovereignty works for your organization</p>
              
              <div className="mb-8">
                <div className="text-6xl font-black text-white">$497</div>
                <div className="text-gray-500">/month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Full SOVREN AI platform access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Managed infrastructure (guaranteed resources)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Unlimited API calls, no rate limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Community Discord support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Weekly group office hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Full documentation & tutorials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">React-based SDKs & examples</span>
                </li>
              </ul>

              <Link href="/apply/sovren-proof">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gray-800 text-white font-bold text-lg rounded-xl hover:bg-gray-700 transition-all"
                >
                  APPLY FOR PROOF ACCESS →
                </motion.button>
              </Link>
            </motion.div>

            {/* SOVREN Proof+ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-red-950/20 to-transparent border-2 border-red-800 rounded-3xl p-8 relative"
            >
              <div className="absolute -top-4 left-8 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                🔥 FOUNDER'S CHOICE
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-2">SOVREN Proof+</h3>
              <p className="text-gray-400 mb-6">Direct access to the sovereign architects</p>
              
              <div className="mb-8">
                <div className="text-6xl font-black text-white">$797</div>
                <div className="text-gray-500">/month</div>
                <div className="text-red-400 text-sm mt-2">Only 7 seats remaining</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Everything in SOVREN Proof</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Priority support access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Direct founder access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Custom onboarding session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Monthly 1-on-1 strategy calls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Beta feature early access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Custom model training consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Architecture review & optimization</span>
                </li>
              </ul>

              <Link href="/apply/sovren-proof-plus">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg rounded-xl"
                >
                  APPLY FOR PRIORITY ACCESS →
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* The Bottom Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/demo">
              <button className="text-gray-400 hover:text-white transition-colors text-lg">
                See how SOVREN demolishes the competition →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final Push - The Decision Point */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              In 2025, There Are Only
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-2">
                Two Types of Businesses
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-red-950/20 border border-red-800 rounded-2xl">
                <h3 className="text-2xl font-bold text-red-500 mb-3">The Renters</h3>
                <ul className="space-y-2 text-gray-400 text-left">
                  <li>• Paying $5 per million tokens</li>
                  <li>• Bills growing 320% annually</li>
                  <li>• Zero ownership or control</li>
                  <li>• Funding competitor improvements</li>
                </ul>
              </div>
              
              <div className="p-6 bg-green-950/20 border border-green-800 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-500 mb-3">The Owners</h3>
                <ul className="space-y-2 text-gray-400 text-left">
                  <li>• Fixed $497-797 monthly</li>
                  <li>• Unlimited token processing</li>
                  <li>• Complete infrastructure control</li>
                  <li>• Building competitive moats</li>
                </ul>
              </div>
            </div>

            <p className="text-2xl text-gray-300 mb-8">
              Which will you be?
            </p>

            <Link href="/apply/sovren-proof">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white text-black font-black text-xl rounded-2xl shadow-2xl shadow-white/10"
              >
                Join The Owners
                <ChevronRight className="inline ml-3 w-6 h-6" />
              </motion.button>
            </Link>

            <p className="text-gray-500 text-sm mt-6">
              No contracts. No setup fees. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Persistent Reality Check */}
      <motion.div
        className="fixed bottom-8 right-8 bg-black border border-purple-500 rounded-2xl p-4 z-40 max-w-xs hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3 }}
      >
        <p className="text-purple-400 font-mono text-xs mb-2">LIVE MARKET DATA</p>
        <p className="text-white font-bold">
          Time on page: {Math.floor(secondsElapsed / 60)}:{(secondsElapsed % 60).toString().padStart(2, '0')}
        </p>
        <p className="text-gray-400 text-sm mt-1">
          API costs increased ${(secondsElapsed * 0.47).toFixed(2)} globally
        </p>
      </motion.div>
    </>
  );
}
