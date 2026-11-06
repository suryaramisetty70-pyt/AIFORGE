import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/clubData';
import { ChevronLeft, ChevronRight, Sparkles, Flame, UserCheck } from 'lucide-react';

export default function FilmStrip({ onSelectMember }) {
  const [hoveredId, setHoveredId] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-20 bg-[#090714] text-white border-y border-[#231b40]/70 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8b5cf6]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ff6b4a]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b4a]/15 border border-[#ff6b4a]/30 text-xs font-mono text-[#ff8566] font-bold uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5" /> Core Leadership Collective
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Meet the <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">8 Founders & Leads</span>
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Veltech University • Dept. of CSE (AI & ML) • B.Tech 3rd Year
          </p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-white/20 bg-[#161033] hover:bg-[#8b5cf6] hover:border-[#8b5cf6] flex items-center justify-center text-white transition-all shadow-md active:scale-95 cursor-pointer"
            title="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-white/20 bg-[#161033] hover:bg-[#ff6b4a] hover:border-[#ff6b4a] flex items-center justify-center text-white transition-all shadow-md active:scale-95 cursor-pointer"
            title="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline-block">
            Click frame to inspect details ↗
          </span>
        </div>
      </div>

      {/* Cinematic Filmstrip container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#120e24]/90 rounded-3xl p-4 sm:p-6 border border-[#231b40] shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl">
          
          {/* Top Perforations */}
          <div className="h-[6px] w-full mb-4 opacity-80 film-perforations" />

          {/* Scrollable Container with all 8 members */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-3 pt-1 scroll-smooth"
          >
            {teamMembers.map((member, idx) => {
              const isHovered = hoveredId === member.id;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={member.id}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onSelectMember(member)}
                  className={`group relative flex-shrink-0 w-64 sm:w-72 bg-[#161033]/80 rounded-2xl p-4 border transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between ${
                    isEven
                      ? 'border-white/10 hover:border-[#8b5cf6] hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]'
                      : 'border-white/10 hover:border-[#ff6b4a] hover:shadow-[0_0_30px_rgba(255,107,74,0.35)]'
                  }`}
                >
                  
                  {/* Portrait with Natural Color & Hover Glow */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#090714] shadow-inner">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090714] via-transparent to-transparent opacity-60" />

                    {/* Frame Index Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isEven ? 'bg-[#8b5cf6]' : 'bg-[#ff6b4a]'}`} />
                      <span>FRAME 0{idx + 1}</span>
                    </div>

                    {/* Role Tag on Bottom Image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-md border ${
                        isEven
                          ? 'bg-[#8b5cf6]/20 text-[#c084fc] border-[#8b5cf6]/40'
                          : 'bg-[#ff6b4a]/20 text-[#ff8566] border-[#ff6b4a]/40'
                      }`}>
                        {member.role.split('·')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-bold text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#ff6b4a] group-hover:bg-clip-text transition-all">
                        {member.name}
                      </h3>
                      <UserCheck className="w-4 h-4 text-zinc-400 group-hover:text-[#ff6b4a] transition-colors" />
                    </div>

                    <p className="text-xs font-mono text-zinc-400 mt-1 line-clamp-1">
                      {member.track || "Autonomous AI & ML Systems"}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>B.Tech 3rd Year</span>
                      <span className={isEven ? 'text-[#8b5cf6]' : 'text-[#ff6b4a]'}>CSE (AI & ML)</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Perforations */}
          <div className="h-[6px] w-full mt-4 opacity-80 film-perforations" />
        </div>
      </div>
    </section>
  );
}
