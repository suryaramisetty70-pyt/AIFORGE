import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Activity, ArrowUp, BookOpen, Target, Camera, UserCheck } from 'lucide-react';

export default function FloatingDock() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const links = [
    { href: "#about", label: "Top", icon: Sparkles },
    { href: "#team", label: "Team", icon: Users },
    { href: "#curriculum", label: "Curriculum", icon: BookOpen },
    { href: "#workshops", label: "Pipeline", icon: Activity },
    { href: "#gallery", label: "Gallery", icon: Camera },
    { href: "#student-portal", label: "Attendance", icon: UserCheck },
    { href: "#goals", label: "Goals", icon: Target },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-2 p-2 rounded-full bg-[#120e24]/90 backdrop-blur-2xl border border-[#8b5cf6]/40 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
      {links.map((link, idx) => {
        const Icon = link.icon;
        const isHovered = hoveredIdx === idx;
        const isEven = idx % 2 === 0;

        return (
          <a
            key={link.label}
            href={link.href}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full text-zinc-300 transition-all ${
              isEven
                ? 'hover:bg-[#8b5cf6] hover:text-white'
                : 'hover:bg-[#ff6b4a] hover:text-white'
            }`}
            title={link.label}
          >
            <Icon className="w-4 h-4" />
            
            {/* Tooltip */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: -38, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                className={`absolute px-2.5 py-1 rounded-md text-white font-mono text-[10px] font-bold pointer-events-none whitespace-nowrap shadow-lg ${
                  isEven ? 'bg-[#8b5cf6]' : 'bg-[#ff6b4a]'
                }`}
              >
                {link.label}
              </motion.div>
            )}
          </a>
        );
      })}

      <div className="w-[1px] h-6 bg-white/15 mx-1" />

      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-gradient-to-r hover:from-[#8b5cf6] hover:to-[#ff6b4a] hover:text-white text-zinc-300 transition-all cursor-pointer"
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
