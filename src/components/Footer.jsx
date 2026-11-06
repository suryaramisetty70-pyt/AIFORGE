import React from 'react';
import { clubConfig } from '../data/clubData';
import { Mail, ArrowUp, Flame, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090714] text-white border-t border-[#231b40]/70 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#231b40]">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8b5cf6] to-[#ff6b4a] flex items-center justify-center font-bold text-lg text-white shadow-[0_0_20px_rgba(255,107,74,0.4)]">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                {clubConfig.name} · {clubConfig.university}
              </span>
            </div>
            <p className="text-sm text-zinc-400 mt-4 max-w-sm leading-relaxed font-sans">
              Veltech University's premier student-led AI engineering collective. Master generative models, build autonomous agent workflows, and ship production-ready projects.
            </p>
            <p className="text-xs font-mono text-[#ff8566] mt-3">
              {clubConfig.department} · Veltech University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#ff6b4a] font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-zinc-300">
              <li><a href="#about" className="hover:text-[#ff6b4a] transition-colors">Hero Overview</a></li>
              <li><a href="#gallery" className="hover:text-[#ff6b4a] transition-colors">College Gallery</a></li>
              <li><a href="#student-portal" className="hover:text-[#ff6b4a] transition-colors">Student Attendance</a></li>
              <li><a href="#team" className="hover:text-[#ff6b4a] transition-colors">8 Founding Members</a></li>
              <li><a href="#ai-tools" className="hover:text-[#c084fc] transition-colors">Multimodal Lab ↗</a></li>
              <li><a href="#workshops" className="hover:text-[#ff6b4a] transition-colors">Learning Pipeline</a></li>
              <li><a href="#events" className="hover:text-[#ff6b4a] transition-colors">Workshops & Events</a></li>
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6] font-bold mb-4">
                Connect
              </h4>
              <div className="flex items-center gap-3">
                <a href={clubConfig.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#8b5cf6] hover:border-[#8b5cf6] hover:text-white border border-white/10 flex items-center justify-center transition-all">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a href={clubConfig.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#ff6b4a] hover:border-[#ff6b4a] hover:text-white border border-white/10 flex items-center justify-center transition-all">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href={clubConfig.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#c084fc] hover:border-[#c084fc] hover:text-white border border-white/10 flex items-center justify-center transition-all">
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 sm:mt-0 flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#ff6b4a]" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>© 2026 AI Forge • Department of CSE (AI & ML), Veltech University.</p>
          <p className="text-zinc-400">Strictly ₹0 Budget • Autonomous Open Source</p>
        </div>

      </div>
    </footer>
  );
}
