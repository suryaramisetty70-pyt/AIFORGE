import React from 'react';
import { motion } from 'framer-motion';
import { studentBenefits } from '../data/clubData';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export default function BenefitsSection({ onOpenJoin }) {
  return (
    <section className="py-24 bg-[#090714] text-white border-t border-[#231b40]/60 relative overflow-hidden">
      
      {/* Violet & Coral ambient diffusers */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[#8b5cf6]/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#ff6b4a]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#c084fc] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6b4a]" />
              Student Impact & Certification
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Expected Benefits for <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">Every Member</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-sans">
              AI Forge bridges academic coursework with modern industry practice. You graduate with live deployed projects, hackathon achievements, and verifiable cryptographic completion certificates on your resume.
            </p>

            <button
              onClick={onOpenJoin}
              className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ff6b4a] hover:from-[#7c3aed] hover:to-[#ff5533] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(255,107,74,0.45)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              Apply to Join AI Forge
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {studentBenefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-[#120e24]/90 border border-[#231b40] flex items-start gap-3.5 hover:border-[#8b5cf6]/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all backdrop-blur-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-[#ff6b4a] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  {b}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
