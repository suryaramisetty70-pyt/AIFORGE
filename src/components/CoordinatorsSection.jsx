import React from 'react';
import { motion } from 'framer-motion';
import { studentCoordinators } from '../data/clubData';
import { Users, Sparkles, Shield, Eye } from 'lucide-react';

export default function CoordinatorsSection({ onSelectMember }) {
  return (
    <section id="coordinators" className="py-24 bg-[#0a0d17] border-y border-white/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" /> Support & Operations Team
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Student <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Coordinators.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
            Dedicated student coordinators managing workshop logistics, hands-on lab sprints, hackathon operations, and student technical assistance.
          </p>
        </div>

        {/* 5 Real Coordinators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {studentCoordinators.map((coord, idx) => (
            <motion.div
              key={coord.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => onSelectMember(coord)}
              className="group cyber-glass rounded-2xl p-4 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Photo Portrait */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-900 mb-4">
                  <img
                    src={coord.avatar}
                    alt={coord.name}
                    className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-108 transition-all duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-purple-300 border border-white/10">
                    0{idx + 1}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="inline-flex items-center gap-1 text-[11px] text-purple-300 font-mono font-semibold">
                      <Eye className="w-3.5 h-3.5" /> View Profile
                    </span>
                  </div>
                </div>

                {/* Details */}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold block w-fit mb-2">
                  {coord.badge}
                </span>

                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                  {coord.name}
                </h3>
                
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {coord.role}
                </p>

                <p className="text-xs text-zinc-400 mt-2 line-clamp-2 font-sans">
                  {coord.bio}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1">
                {coord.skills.slice(0, 2).map((s, i) => (
                  <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">
                    {s}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
