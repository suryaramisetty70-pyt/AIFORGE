import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weeklySessions } from '../data/clubData';
import { Calendar, Clock, User, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

export default function WeeklySchedule() {
  const [activeSession, setActiveSession] = useState(0);

  return (
    <section className="py-24 bg-paper-2 dark:bg-[#15160f] border-t border-black/5 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-forest dark:text-emerald-400 font-semibold"
            >
              Structured Rhythm
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl text-zinc-900 dark:text-night-text mt-2"
            >
              Three Weekly <span className="italic text-forest dark:text-emerald-400">Sessions.</span>
            </motion.h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-night-muted max-w-md">
            Conducted alternatively by the core leadership team. Theory, tools, and hands-on laboratory tasks balanced across each week.
          </p>
        </div>

        {/* 3 Interactive Session Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weeklySessions.map((session, idx) => {
            const isActive = activeSession === idx;

            return (
              <motion.div
                key={session.id}
                whileHover={{ y: -6 }}
                onClick={() => setActiveSession(idx)}
                className={`cursor-pointer p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-paper dark:bg-night-card border-forest dark:border-emerald-400 shadow-2xl ring-2 ring-forest/20'
                    : 'bg-paper/70 dark:bg-night-card/60 border-black/5 dark:border-white/10 hover:border-forest/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-forest/10 dark:bg-forest/30 text-forest dark:text-emerald-400 uppercase tracking-wider">
                      {session.day}
                    </span>
                    <span className="text-[11px] font-mono text-rust dark:text-rust-light font-semibold">
                      {session.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-zinc-900 dark:text-night-text mt-2">
                    {session.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-forest dark:text-emerald-400" />
                    <strong>Led by:</strong> {session.lead}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-night-muted mt-3 leading-relaxed font-sans">
                    {session.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2 font-semibold">
                    Session Deliverables:
                  </span>
                  <div className="space-y-1.5">
                    {session.focus.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest dark:text-emerald-400 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
