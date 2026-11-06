import React from 'react';
import { motion } from 'framer-motion';
import { domainTracks } from '../data/clubData';
import { Sparkles, Eye, Cpu, Trophy, ArrowRight } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Eye: Eye,
  Cpu: Cpu,
  Trophy: Trophy
};

export default function DomainTracks() {
  return (
    <section id="tracks" className="py-24 bg-paper-2 dark:bg-night-card/40 border-t border-black/5 dark:border-white/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-forest dark:text-emerald-400 font-semibold"
          >
            Specialized Sub-Teams
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl text-zinc-900 dark:text-night-text mt-2"
          >
            AI Research & <span className="italic text-forest dark:text-emerald-400">Engineering Tracks.</span>
          </motion.h2>
          <p className="text-base text-zinc-600 dark:text-night-muted mt-3">
            Every club member aligns with a specialized technical domain, collaborating on open-source packages, hackathon submissions, and research papers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {domainTracks.map((track, idx) => {
            const IconComponent = iconMap[track.icon] || Sparkles;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-3xl bg-paper dark:bg-[#15160f] border border-black/5 dark:border-white/10 hover:border-forest/50 dark:hover:border-emerald-400/50 transition-all hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-forest dark:text-emerald-400 font-bold tracking-wider px-2.5 py-1 rounded-md bg-forest/10 dark:bg-forest/20">
                      {track.code}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-forest/10 dark:bg-forest/20 flex items-center justify-center text-forest dark:text-emerald-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-night-text group-hover:text-forest dark:group-hover:text-emerald-400 transition-colors">
                    {track.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-600 dark:text-night-muted mt-3 leading-relaxed">
                    {track.summary}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2.5 font-semibold">
                    Core Focus Topics:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {track.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-paper-2 dark:bg-[#202119] text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5 hover:border-forest/40 transition-colors"
                      >
                        {topic}
                      </span>
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
