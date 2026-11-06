import React from 'react';
import { motion } from 'framer-motion';
import { coreLeadership } from '../data/clubData';
import { Sparkles, Terminal, Code2, Cpu, CheckCircle, ExternalLink, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function CoreTeam({ onSelectMember }) {
  return (
    <section id="leadership" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
          <Award className="w-3.5 h-3.5" /> Core Executive Leadership
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          The Architects Behind <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Forge.</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
          Three specialized leads guiding students through mathematical foundations, machine learning theory, modern AI agent frameworks, and live deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {coreLeadership.map((lead, idx) => (
          <motion.div
            key={lead.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -8 }}
            className="group cyber-glass rounded-3xl p-6 sm:p-8 border border-white/10 cyber-glass-hover flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Background Gradient */}
            <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${lead.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-35 transition-opacity`} />

            <div>
              {/* Photo & Header */}
              <div className="flex items-start gap-5 mb-6">
                <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-cyan-400/80 transition-all shadow-xl flex-shrink-0 bg-slate-900">
                  <img
                    src={lead.avatar}
                    alt={lead.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/80 text-cyan-300 border border-white/10">
                    {lead.vtuNo}
                  </div>
                </div>

                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {lead.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5 group-hover:text-cyan-300 transition-colors">
                    {lead.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {lead.role}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-2 font-mono text-cyan-400/90 font-medium">
                    ⚡ {lead.focus}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
                {lead.bio}
              </p>

              {/* Curriculum & Key Topics Covered */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                  Curriculum & Sessions Handled:
                </span>
                <ul className="space-y-2">
                  {lead.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills & Action */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {lead.skills.slice(0, 3).map((s, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectMember(lead)}
                className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
              >
                Inspect ↗
              </button>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
