import React from 'react';
import { motion } from 'framer-motion';
import { clubConfig } from '../data/clubData';
import { Sparkles, ShieldCheck, Cpu, Code2, Users2, Rocket, Flame, GraduationCap, Building2 } from 'lucide-react';

export default function ClubInfo() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Student-Led Community",
      desc: "Founded and operated by 3rd Year B.Tech CSE (AI & ML) students at Veltech University to bridge academic theory with industry execution.",
      accent: "#8b5cf6"
    },
    {
      icon: Cpu,
      title: "Demystifying Modern AI",
      desc: "Zero-jargon approach. We take students step-by-step from core Python and math foundations to autonomous agents and multimodal models.",
      accent: "#ff6b4a"
    },
    {
      icon: ShieldCheck,
      title: "Strictly ₹0 Budget",
      desc: "100% free for all motivated students. Leveraging free-tier cloud credits, open-source models, and community GPU resources.",
      accent: "#c084fc"
    },
    {
      icon: Rocket,
      title: "Ship Deployed Projects",
      desc: "Every member builds and deploys real full-stack AI web applications to public URLs to create portfolio-grade proof of work.",
      accent: "#ff8566"
    }
  ];

  return (
    <section id="club-info" className="py-20 bg-[#090714] text-white relative overflow-hidden border-t border-[#231b40]/60">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 -left-28 w-80 h-80 bg-[#8b5cf6]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-28 w-80 h-80 bg-[#ff6b4a]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Department & Club Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b4a]/15 border border-[#ff6b4a]/30 text-xs font-mono text-[#ff8566] font-bold uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(255,107,74,0.3)]"
          >
            <Building2 className="w-3.5 h-3.5" /> Department of CSE (AI & ML) • Veltech University
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            About <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">AI Forge</span>
          </motion.h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            {clubConfig.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#161033] border border-white/10 text-zinc-300">
              ⚡ Philosophy: <strong className="text-white">{clubConfig.tagline}</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#161033] border border-white/10 text-zinc-300">
              👥 Founding Leads: <strong className="text-[#ff6b4a]">8 Coordinators</strong>
            </span>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-[#120e24]/90 border border-[#231b40] hover:border-[#8b5cf6]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] group flex flex-col justify-between backdrop-blur-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#161033] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ color: p.accent }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b4a] transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.accent }} />
                  <span>Veltech Academic Year 2026</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
