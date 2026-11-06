import React, { useState } from 'react';
import { Menu, X, Rocket, Flame } from 'lucide-react';
import { clubConfig } from '../data/clubData';

export default function Navbar({ onOpenJoin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#club-info" },
    { name: "Team", href: "#team" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Pipeline", href: "#workshops" },
    { name: "Gallery", href: "#gallery" },
    { name: "Attendance", href: "#student-portal" },
    { name: "Goals", href: "#goals" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#090714]/85 border-b border-[#231b40]/80 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#8b5cf6] via-[#a855f7] to-[#ff6b4a] p-[1.5px] shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_28px_rgba(255,107,74,0.6)] transition-all">
              <div className="w-full h-full bg-[#0d0a1c] rounded-2xl flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#ff6b4a] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ff6b4a] animate-ping" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#ff6b4a] group-hover:bg-clip-text transition-all">
                AI Forge
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ff6b4a]/15 text-[#ff6b4a] font-bold uppercase tracking-wider border border-[#ff6b4a]/30">
                Veltech
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-wider hidden sm:block font-medium">
              Dept of CSE (AI & ML)
            </p>
          </div>
        </a>

        {/* Center Pill Menu - Ordered Logically */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#140f2b]/90 border border-white/10 shadow-[0_0_25px_rgba(139,92,246,0.15)] backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Join Us Pill Button */}
          <button
            onClick={onOpenJoin}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#8b5cf6]/50 bg-[#161033]/80 hover:bg-[#8b5cf6]/20 hover:border-[#8b5cf6] transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)] active:scale-95 cursor-pointer"
          >
            Join Us
          </button>

          {/* Launch Project Gradient Button */}
          <button
            onClick={onOpenJoin}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ff6b4a] hover:from-[#7c3aed] hover:to-[#ff5533] shadow-[0_0_25px_rgba(255,107,74,0.45)] hover:shadow-[0_0_35px_rgba(255,107,74,0.65)] transition-all transform hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <Rocket className="w-3.5 h-3.5" />
            Join AI Forge
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0d0a1c] px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-[#ff6b4a] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJoin(); }}
              className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-[#8b5cf6]/50 bg-[#161033]"
            >
              Join Us
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJoin(); }}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] shadow-[0_0_25px_rgba(255,107,74,0.45)]"
            >
              Join AI Forge
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
