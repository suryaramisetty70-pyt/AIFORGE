import React from 'react';
import { motion } from 'framer-motion';
import { projectStages, clubConfig } from '../data/clubData';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function PipelineFlow() {
  return (
    <section id="roadmap" className="py-24 bg-[#080b14] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Proven Learning Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our 5-Stage <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Execution Blueprint.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-sans">
            How we take complete beginners and guide them through building real, portfolio-grade AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {projectStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="cyber-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400 mb-3 block">
                  {stage.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5" /> Milestone Checked
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
