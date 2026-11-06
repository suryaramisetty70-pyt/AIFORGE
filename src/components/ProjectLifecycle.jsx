import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectLifecycle } from '../data/clubData';
import { Rocket, ArrowRight, Check } from 'lucide-react';

export default function ProjectLifecycle() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-paper-2 dark:bg-[#15160f] border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-forest dark:text-emerald-400 font-semibold"
          >
            Engineering Roadmap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl text-zinc-900 dark:text-night-text mt-2"
          >
            8-Stage Project <span className="italic text-forest dark:text-emerald-400">Development Lifecycle.</span>
          </motion.h2>
          <p className="text-base text-zinc-600 dark:text-night-muted mt-3">
            How we guide every student team from raw brainstorming to deployment and final demonstration.
          </p>
        </div>

        {/* 8-Step Grid Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectLifecycle.map((p, idx) => {
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={p.step}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-forest text-white border-forest shadow-xl scale-[1.02]'
                    : 'bg-paper dark:bg-night-card border-black/5 dark:border-white/10 hover:border-forest/40 text-zinc-900 dark:text-night-text'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-emerald-200' : 'text-forest dark:text-emerald-400'}`}>
                      STAGE {p.step}
                    </span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/5 text-zinc-400'}`}>
                      {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold mt-1">
                    {p.title}
                  </h3>

                  <p className={`text-xs mt-2 leading-relaxed font-sans ${isActive ? 'text-emerald-100' : 'text-zinc-600 dark:text-night-muted'}`}>
                    {p.desc}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-mono flex items-center gap-1 ${isActive ? 'border-white/20 text-white' : 'border-black/5 dark:border-white/5 text-zinc-400'}`}>
                  <span>Phase Milestone</span> →
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
