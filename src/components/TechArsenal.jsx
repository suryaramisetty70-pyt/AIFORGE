import React from 'react';
import { motion } from 'framer-motion';
import { techArsenal, clubActivities } from '../data/clubData';
import { Cpu, Terminal, Sparkles, BookOpen, Trophy, Presentation, Wrench, Flame } from 'lucide-react';

const iconMap = {
  Code2: Terminal,
  Trophy: Trophy,
  Wrench: Wrench,
  Flame: Flame,
  Presentation: Presentation,
  BookOpen: BookOpen
};

export default function TechArsenal() {
  return (
    <section id="arsenal" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Tech Grid */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
          <Cpu className="w-3.5 h-3.5" /> Technology Matrix
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Tools & Frameworks We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Teach & Deploy.</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-sans">
          Industry-standard libraries, modern agentic systems, vibe coding frameworks, and deployment engines.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-24">
        {techArsenal.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="p-4 rounded-2xl cyber-glass border border-white/10 hover:border-cyan-400/50 transition-all text-center flex flex-col items-center justify-center"
          >
            <span className="text-2xl sm:text-3xl mb-2">{tech.icon}</span>
            <h4 className="text-sm font-bold text-white">{tech.name}</h4>
            <span className="text-[10px] font-mono text-zinc-400 mt-1">{tech.category}</span>
          </motion.div>
        ))}
      </div>

      {/* Club Activities */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Dynamic Club <span className="text-cyan-400">Activities.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubActivities.map((act, idx) => {
          const IconComp = iconMap[act.icon] || Sparkles;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl cyber-glass border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                    {act.tag}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-cyan-300">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {act.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
