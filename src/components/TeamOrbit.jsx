import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../data/clubData';
import { Layers, Sparkles, ChevronRight, User, CheckCircle, Eye, Shield, Flame } from 'lucide-react';

export default function TeamOrbit({ onSelectMember }) {
  const [activeLayer, setActiveLayer] = useState(1);

  const layers = [
    { id: 1, name: "Club Head", desc: "AI Tools, Agent Workflows & Full-Stack Deployment", count: 1, color: "#ff6b4a", label: "Strategic Lead" },
    { id: 2, name: "Core Executive", desc: "AI/ML Theory, Predictive Pipelines, Python & Math", count: 2, color: "#8b5cf6", label: "Executive Leads" },
    { id: 3, name: "Student Coordinators", desc: "Hands-on Coordination, Lab Assistance & Operations", count: 5, color: "#c084fc", label: "Student Coordinators" },
  ];

  const filteredMembers = teamMembers.filter(m => m.layer === activeLayer);

  return (
    <section id="structure" className="py-24 bg-[#090714] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#231b40]/60">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b4a]/15 border border-[#ff6b4a]/30 text-xs font-mono text-[#ff8566] font-bold uppercase tracking-wider mb-2"
          >
            <Flame className="w-3.5 h-3.5" /> Department Structure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight"
          >
            The Team Driving <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">AI Forge</span>
          </motion.h2>
        </div>
        <p className="max-w-md text-sm text-zinc-400 leading-relaxed font-sans">
          Three specialized core leads with complementary domains supported by five dedicated student coordinators from B.Tech 3rd Year, CSE (AI & ML) Department at Veltech.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive 3D Visual Orbit Radar */}
        <div className="lg:col-span-5 bg-[#120e24]/90 border border-[#8b5cf6]/40 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl min-h-[420px] backdrop-blur-xl">
          
          <div className="text-center mb-4 z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b4a] font-bold">
              Live Orbital Architecture
            </span>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">Click any orbital ring to inspect that layer</p>
          </div>

          {/* SVG Orbit Radar */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            
            {/* Outer Ring - Layer 3 (Student Coordinators) */}
            <motion.div
              onClick={() => setActiveLayer(3)}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className={`absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-dashed transition-all cursor-pointer ${
                activeLayer === 3
                  ? 'border-[#ff6b4a] border-2 shadow-[0_0_25px_rgba(255,107,74,0.45)]'
                  : 'border-white/20 hover:border-[#ff6b4a]/60'
              }`}
            >
              <div className="absolute top-2 left-4 w-5 h-5 rounded-full bg-[#ff6b4a] shadow-[0_0_10px_#ff6b4a] flex items-center justify-center text-[9px] text-white font-mono font-bold">
                3
              </div>
            </motion.div>

            {/* Inner Ring - Layer 2 (Core Executive) */}
            <motion.div
              onClick={() => setActiveLayer(2)}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className={`absolute w-40 h-40 sm:w-44 sm:h-44 rounded-full border border-dashed transition-all cursor-pointer ${
                activeLayer === 2
                  ? 'border-[#8b5cf6] border-2 shadow-[0_0_25px_rgba(139,92,246,0.5)]'
                  : 'border-white/20 hover:border-[#8b5cf6]/60'
              }`}
            >
              <div className="absolute -top-2.5 right-6 w-5 h-5 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6] flex items-center justify-center text-[9px] text-white font-mono font-bold">
                2
              </div>
            </motion.div>

            {/* Core Node - Layer 1 (Club Head) */}
            <motion.button
              onClick={() => setActiveLayer(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-center p-2 transition-all cursor-pointer z-20 ${
                activeLayer === 1
                  ? 'bg-gradient-to-tr from-[#8b5cf6] to-[#ff6b4a] text-white shadow-[0_0_30px_rgba(255,107,74,0.6)]'
                  : 'bg-[#161033] border border-white/20 text-zinc-300 hover:border-[#ff6b4a]'
              }`}
            >
              <Flame className="w-5 h-5 mb-1 text-white" />
              <span className="font-mono text-[10px] font-bold leading-tight">HEAD</span>
            </motion.button>
          </div>

          {/* Quick Select Buttons */}
          <div className="flex gap-2 mt-6 z-10 w-full">
            {layers.map(layer => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex-1 py-2 px-1 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                  activeLayer === layer.id
                    ? 'bg-white/10 text-white border-white/30 shadow-md'
                    : 'bg-black/30 text-zinc-400 border-white/5 hover:text-white'
                }`}
              >
                L0{layer.id} ({layer.count})
              </button>
            ))}
          </div>

        </div>

        {/* Right Column: Layer Details & Members List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-2xl bg-[#161033] border border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>{layers[activeLayer - 1].name}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/40 text-[#ff6b4a] border border-[#ff6b4a]/30">
                  {layers[activeLayer - 1].label}
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">{layers[activeLayer - 1].desc}</p>
            </div>
            <span className="text-xs font-mono text-zinc-500 font-bold">
              {filteredMembers.length} {filteredMembers.length === 1 ? 'Leader' : 'Coordinators'}
            </span>
          </div>

          <div className="space-y-3">
            <AnimatePresence mode="wait">
              {filteredMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  onClick={() => onSelectMember(member)}
                  className="p-4 rounded-2xl bg-[#120e24]/90 border border-[#231b40] hover:border-[#ff6b4a]/60 transition-all flex items-center justify-between group cursor-pointer hover:shadow-[0_0_25px_rgba(255,107,74,0.2)]"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-xl object-cover object-top border border-white/20 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-[#ff6b4a] transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs font-mono text-zinc-400">{member.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                      {member.track || "AI/ML Systems"}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>

    </section>
  );
}
