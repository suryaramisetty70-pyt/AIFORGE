import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Code2, Cpu, Sparkles, Rocket, ArrowRight, X, CheckCircle2, Clock, Wrench, Layers, Terminal, BookCheck } from 'lucide-react';
import { curriculumTracks } from '../data/curriculumData';

export default function CurriculumRoadmap() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <section id="curriculum" className="py-24 bg-[#090714] text-white relative overflow-hidden border-t border-[#231b40]/60">
      
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#8b5cf6]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff6b4a]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#231b40]/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-xs font-mono text-[#c084fc] font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#ff6b4a]" /> Comprehensive Master Syllabus
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              What We Teach: <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">From Scratch to Pro</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
              No superficial overviews. We teach fundamental programming languages, core mathematics, applied machine learning, foundation models, and production agent engineering with functional project deliverables.
            </p>
          </div>

          {/* Club Handbook Slot */}
          <div className="p-4 rounded-2xl bg-[#161033]/80 border border-[#8b5cf6]/40 flex items-center gap-3 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#ff6b4a]/20 border border-[#ff6b4a]/40 flex items-center justify-center text-[#ff6b4a] shrink-0">
              <BookCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Official Club Handbook</h4>
              <p className="text-[11px] font-mono text-zinc-400">Complete curriculum book & notes</p>
            </div>
          </div>
        </div>

        {/* 6-Track Curriculum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculumTracks.map((track, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedTrack(track)}
                className={`p-6 sm:p-7 rounded-3xl bg-[#120e24]/90 border transition-all duration-300 flex flex-col justify-between cursor-pointer group backdrop-blur-xl ${
                  isEven
                    ? 'border-[#231b40] hover:border-[#8b5cf6]/70 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]'
                    : 'border-[#231b40] hover:border-[#ff6b4a]/70 hover:shadow-[0_0_35px_rgba(255,107,74,0.25)]'
                }`}
              >
                <div>
                  {/* Top Bar: Number & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                      TRACK {track.number}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      isEven
                        ? 'bg-[#8b5cf6]/20 text-[#c084fc] border-[#8b5cf6]/40'
                        : 'bg-[#ff6b4a]/20 text-[#ff8566] border-[#ff6b4a]/40'
                    }`}>
                      {track.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className={`text-xl font-extrabold text-white transition-colors leading-snug mb-2.5 ${
                    isEven ? 'group-hover:text-[#c084fc]' : 'group-hover:text-[#ff6b4a]'
                  }`}>
                    {track.title}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans mb-5">
                    {track.shortDesc}
                  </p>

                  {/* Project Highlight */}
                  <div className="p-3.5 rounded-2xl bg-[#090714]/80 border border-white/5 mb-5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-zinc-400 uppercase">
                      <Rocket className="w-3 h-3 text-[#ff6b4a]" /> Project Built:
                    </div>
                    <p className="text-xs font-semibold text-white line-clamp-1">
                      {track.project}
                    </p>
                  </div>

                  {/* Tools Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {track.tools.slice(0, 4).map((tool, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161033] border border-white/5 text-zinc-300">
                        {tool}
                      </span>
                    ))}
                    {track.tools.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161033] text-zinc-500">
                        +{track.tools.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-[#8b5cf6]" /> {track.duration}
                  </span>
                  <span className={`inline-flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform ${
                    isEven ? 'text-[#c084fc]' : 'text-[#ff6b4a]'
                  }`}>
                    View Syllabus <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Syllabus Detail Modal */}
      <AnimatePresence>
        {selectedTrack && (
          <div
            onClick={() => setSelectedTrack(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#120e24] border border-[#8b5cf6]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(139,92,246,0.35)] max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrack(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#ff6b4a] hover:text-white flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40 uppercase">
                  Track {selectedTrack.number} • {selectedTrack.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#ff6b4a]" /> {selectedTrack.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedTrack.title}
              </h3>
              <p className="text-sm text-zinc-300 mt-2 font-sans leading-relaxed">
                {selectedTrack.shortDesc}
              </p>

              {/* Concrete Portfolio Project Highlight */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#161033] to-[#140f2b] border border-[#ff6b4a]/40 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff8566] uppercase mb-1">
                  <Rocket className="w-4 h-4" /> Capstone Project Built in this Track:
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {selectedTrack.project}
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {selectedTrack.projectDesc}
                </p>
              </div>

              {/* Syllabus Breakdown by Modules */}
              <div className="mt-6 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#8b5cf6]" /> Detailed Module Breakdown
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedTrack.modules.map((mod, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#090714] border border-white/5 space-y-2">
                      <h5 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                        {mod.name}
                      </h5>
                      <ul className="space-y-1.5 pl-3 border-l border-white/10 text-xs text-zinc-400 font-mono">
                        {mod.topics.map((t, j) => (
                          <li key={j} className="flex items-start gap-1.5">
                            <span className="text-[#ff6b4a]">›</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Environment */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 uppercase font-bold">Tools Used:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTrack.tools.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-[#161033] border border-white/10 text-zinc-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-[#34d399] font-bold">100% Free Open-Source & Student Tier</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
