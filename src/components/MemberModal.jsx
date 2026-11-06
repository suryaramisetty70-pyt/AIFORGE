import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Sparkles, Award, CheckCircle, Flame } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-[#120e24] border border-[#8b5cf6]/50 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.35)] max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff6b4a] hover:text-white flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-5">
            
            {/* Portrait side */}
            <div className="sm:col-span-2 relative bg-[#090714] min-h-[280px] sm:min-h-full">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120e24] via-transparent to-transparent sm:hidden" />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-xl bg-black/85 backdrop-blur-md text-white font-mono text-[11px] border border-white/15 shadow-md">
                Layer 0{member.layer} · {member.layerName}
              </div>
            </div>

            {/* Details side */}
            <div className="sm:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#ff6b4a]/15 text-[#ff8566] border border-[#ff6b4a]/30 font-bold">
                    {member.badge}
                  </span>
                  {member.vtuNo && (
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-white font-bold">
                      {member.vtuNo}
                    </span>
                  )}
                  <span className="font-mono text-xs text-[#c084fc] font-semibold">
                    {member.year} · {member.department}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  {member.name}
                </h3>
                <p className="font-mono text-xs text-[#ff6b4a] font-semibold mt-1">
                  {member.role}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed font-sans">
                  {member.bio}
                </p>

                {/* Core Focus / Specialties */}
                {member.specialties && (
                  <div className="mt-5">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 font-bold">
                      Focus Domains:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((s, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs px-2.5 py-1 rounded-lg bg-[#161033] border border-white/10 text-zinc-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Social / Contact links */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400">
                  {member.email ? member.email : 'contact@aiforge.edu'}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#8b5cf6] hover:text-white flex items-center justify-center text-zinc-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#ff6b4a] hover:text-white flex items-center justify-center text-zinc-300 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
