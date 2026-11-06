import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { learningPipeline } from '../data/clubData';
import { BookOpen, Terminal, Layers, CloudLightning, Trophy, CheckCircle, Zap } from 'lucide-react';

const iconMap = {
  BookOpen: BookOpen,
  Terminal: Terminal,
  Layers: Layers,
  CloudLightning: CloudLightning,
  Trophy: Trophy
};

export default function LearningPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = learningPipeline[activeStep] || learningPipeline[0];

  return (
    <section id="workshops" className="py-24 bg-[#090714] border-y border-[#231b40]/60 relative overflow-hidden">
      
      {/* Background Accent Diffuser */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-[#8b5cf6]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#c084fc] font-mono text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(139,92,246,0.25)]"
          >
            The 5-Stage Core Pipeline
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Learn → Practice → Build → <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">Deploy → Present</span>
          </motion.h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-sans">
            No passive memorization. Every concept is tested live in code, converted into an end-to-end practical project, and deployed to cloud infrastructure with verifiable certification.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {learningPipeline.map((p, idx) => {
            const Icon = iconMap[p.icon] || BookOpen;
            const isActive = activeStep === idx;

            return (
              <motion.button
                key={p.step}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white border-transparent shadow-[0_0_25px_rgba(255,107,74,0.45)] scale-[1.03]'
                    : 'bg-[#120e24] border-white/10 hover:border-[#8b5cf6]/40 text-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                    PHASE 0{p.step}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-black/20 text-white' : 'bg-white/5 text-[#8b5cf6]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{p.phase || p.title}</h4>
                  <p className={`text-[11px] font-mono mt-0.5 line-clamp-1 ${isActive ? 'text-white/80' : 'text-zinc-400'}`}>
                    {p.summary || p.outcome || p.title}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/30 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#ff6b4a]/15 text-[#ff6b4a] border border-[#ff6b4a]/30 font-mono text-xs font-bold uppercase">
                    Stage {currentStage.step} Details
                  </span>
                  <span className="text-xs font-mono text-zinc-400">Duration: 1-2 Weeks</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                  {currentStage.title} — <span className="text-[#ff6b4a]">{currentStage.phase || "Milestone"}</span>
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {currentStage.summary || currentStage.description || "Hands-on implementation of production AI workflows."}
                </p>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider">Concrete Deliverables:</h4>
                  {[
                    "Complete reproducible source repository with clean commit history",
                    "Automated integration test validation & API benchmarks",
                    "Live cloud endpoint deployment with cryptographic verification ID"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-mono">
                      <CheckCircle className="w-4 h-4 text-[#ff6b4a] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#090714] p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-[#c084fc]">Pipeline Telemetry</span>
                  <span>Zero-Cost Guarantee</span>
                </div>
                <div className="p-4 rounded-xl bg-[#161033] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Stage Progress</span>
                    <span className="text-[#ff6b4a] font-bold font-mono">{(activeStep + 1) * 20}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a]" style={{ width: `${(activeStep + 1) * 20}%` }} />
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#161033] border border-white/5 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#ff6b4a] shrink-0" />
                  <p className="text-xs text-zinc-300 font-mono">
                    Students receive automatic tamper-evident certificate issuance upon successful founder review.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
