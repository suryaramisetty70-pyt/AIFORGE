import React from 'react';
import { motion } from 'framer-motion';
import { mainGoals } from '../data/clubData';
import { Brain, Calculator, Cpu, Sparkles, FolderGit2, Cloud, Presentation, Users, ArrowUpRight } from 'lucide-react';

const goalIcons = {
  Brain: Brain,
  Calculator: Calculator,
  Cpu: Cpu,
  Sparkles: Sparkles,
  FolderGit2: FolderGit2,
  Cloud: Cloud,
  Presentation: Presentation,
  Users: Users
};

export default function GoalsGrid() {
  return (
    <section id="goals" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#090714]">
      
      <div className="max-w-3xl mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff6b4a] font-bold"
        >
          Core Objectives
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight"
        >
          Our Main <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">Goals & Vision</span>
        </motion.h2>
        <p className="text-base text-zinc-400 mt-3 font-sans">
          Engineered specifically for students at Veltech University to move from raw beginner concepts to autonomous AI developers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainGoals.map((g, idx) => {
          const Icon = goalIcons[g.icon] || Brain;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group p-6 sm:p-7 rounded-3xl bg-[#120e24]/90 border transition-all flex flex-col justify-between cursor-default backdrop-blur-xl ${
                isEven
                  ? 'border-[#231b40] hover:border-[#8b5cf6]/60 hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)]'
                  : 'border-[#231b40] hover:border-[#ff6b4a]/60 hover:shadow-[0_10px_30px_rgba(255,107,74,0.25)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                    isEven
                      ? 'bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#c084fc] group-hover:scale-110 group-hover:bg-[#8b5cf6] group-hover:text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                      : 'bg-[#ff6b4a]/15 border border-[#ff6b4a]/30 text-[#ff8566] group-hover:scale-110 group-hover:bg-[#ff6b4a] group-hover:text-white shadow-[0_0_15px_rgba(255,107,74,0.3)]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-500">
                    0{g.id}
                  </span>
                </div>

                <h3 className={`text-xl font-bold text-white transition-colors ${
                  isEven ? 'group-hover:text-[#c084fc]' : 'group-hover:text-[#ff6b4a]'
                }`}>
                  {g.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-sans">
                  {g.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Phase Outcome</span>
                <span className={`font-semibold ${isEven ? 'text-[#8b5cf6]' : 'text-[#ff6b4a]'}`}>Verified</span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
