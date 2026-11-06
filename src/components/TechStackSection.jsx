import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/clubData';
import { Cpu, Terminal, Code2, Database, GitBranch, Sparkles, Bot, Radio, Cloud } from 'lucide-react';

export default function TechStackSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-forest dark:text-emerald-400 font-semibold"
          >
            Modern AI Tooling
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl text-zinc-900 dark:text-night-text mt-2"
          >
            Tools & <span className="italic text-forest dark:text-emerald-400">Technologies We Master.</span>
          </motion.h2>
        </div>
        <p className="text-sm text-zinc-600 dark:text-night-muted max-w-md">
          From open-source agent frameworks like CrewAI & OpenHands to IoT edge hardware with ESP32 and cloud hosting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {techStack.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-paper-card dark:bg-night-card border border-black/5 dark:border-white/10 hover:border-forest/40 transition-all flex items-start justify-between gap-4"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-forest/10 dark:bg-forest/25 text-forest dark:text-emerald-400 font-semibold">
                {tech.category}
              </span>
              <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-night-text mt-2">
                {tech.name}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-night-muted mt-1 leading-relaxed">
                {tech.desc}
              </p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-paper-2 dark:bg-[#15160f] flex items-center justify-center text-forest dark:text-emerald-400 flex-shrink-0">
              ⚡
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
