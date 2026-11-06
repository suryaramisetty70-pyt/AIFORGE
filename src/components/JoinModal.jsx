import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, Flame, Rocket } from 'lucide-react';
import { clubConfig } from '../data/clubData';

export default function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    vtuNumber: '',
    email: '',
    year: 'Year III',
    department: 'CSE (AI & ML)',
    interest: 'Multimodal AI & Latent Diffusion'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        colors: ['#8b5cf6', '#ff6b4a', '#ffffff', '#c084fc'],
        origin: { y: 0.6 }
      });
    } catch(err) {}
  };

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-[#120e24] border border-[#8b5cf6]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(139,92,246,0.35)] max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#ff6b4a] hover:text-white flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-[#ff6b4a]/20 text-[#ff6b4a] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#ff6b4a]/40 shadow-[0_0_25px_rgba(255,107,74,0.5)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Welcome to AI Forge!
              </h3>
              <p className="text-zinc-300 text-sm mt-3 max-w-md mx-auto">
                Your application has been received. You will receive an invitation to the student Discord server, compute cluster keys, and workshop registration access.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-[#090714] border border-white/10 text-xs font-mono text-zinc-400">
                Issued ID: <span className="text-[#ff6b4a] font-bold">AF-2026-ENROLL-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <button
                onClick={onClose}
                className="mt-8 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#8b5cf6] to-[#ff6b4a] flex items-center justify-center text-white">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b4a] font-bold">
                  Veltech AI Forge Collective
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Apply for Club Membership
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-sans">
                Open to all motivated B.Tech CSE (AI & ML) students. Strictly ₹0 fee.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">VTU / Roll No. *</label>
                    <input
                      type="text"
                      required
                      value={formData.vtuNumber}
                      onChange={(e) => setFormData({...formData, vtuNumber: e.target.value})}
                      placeholder="e.g. 23000..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Email ID *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="student@veltech.edu.in"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Academic Year</label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({...formData, year: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                    >
                      <option>Year I</option>
                      <option>Year II</option>
                      <option>Year III</option>
                      <option>Year IV</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Primary Track Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                    >
                      <option>Multimodal AI & Latent Diffusion</option>
                      <option>Autonomous Agent Architectures</option>
                      <option>Computer Vision & Robotics</option>
                      <option>Full-Stack AI Deployment</option>
                      <option>Edge AI & Embedded Inference</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ff6b4a] hover:from-[#7c3aed] hover:to-[#ff5533] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,107,74,0.45)] transition-all cursor-pointer active:scale-95"
                >
                  Submit Application (Free)
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
