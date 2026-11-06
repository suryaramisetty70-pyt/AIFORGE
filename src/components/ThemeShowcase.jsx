import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Eye, Sparkles, Layers, ArrowRight, ExternalLink } from 'lucide-react';

export default function ThemeShowcase({ currentTheme, onSelectTheme }) {
  const [activePreview, setActivePreview] = useState(null);

  const designThemes = [
    {
      id: "emerald-matrix",
      name: "Stealth Obsidian & Electric Emerald",
      tag: "Currently Active",
      badge: "Cyber Matrix",
      image: "/previews/emerald.jpg",
      colors: ["#07080b", "#00ff87", "#10b981", "#ffffff"],
      desc: "Cybernetic developer engineering club. Glowing matrix wireframes, emerald telemetry charts, and high-tech dark mode.",
      vibe: "Developer & Hacker Focus"
    },
    {
      id: "gemini-aurora",
      name: "Gemini Multimodal Aurora",
      tag: "Frontier AI",
      badge: "Google Gemini",
      image: "/previews/aurora.jpg",
      colors: ["#080b14", "#00f2fe", "#7928ca", "#ffffff"],
      desc: "Signature Google Gemini Multimodal design. Deep midnight void with glowing electric cyan and iris/violet fluid light beams.",
      vibe: "Intelligent & Ethereal"
    },
    {
      id: "violet-coral",
      name: "Royal Violet & Radiant Coral Sunset",
      tag: "Creative Studio",
      badge: "GenAI Studio",
      image: "/previews/violet_coral.jpg",
      colors: ["#0b0817", "#8b5cf6", "#ff6b4a", "#ffffff"],
      desc: "Creative generative AI studio. Flowing sunset-tinted light trails, radiant coral/amber gradients, and 3D floating cards.",
      vibe: "Energetic & Visionary"
    },
    {
      id: "linear-cobalt",
      name: "Titanium Minimalist & Electric Royal Blue",
      tag: "Linear / Vercel",
      badge: "Minimalist",
      image: null,
      colors: ["#050505", "#2563eb", "#38bdf8", "#e2e8f0"],
      desc: "Clean silicon-valley developer product aesthetic. Pitch black obsidian, razor-sharp 1px borders, and cobalt blue laser lines.",
      vibe: "Clean & Sophisticated"
    },
    {
      id: "teenage-orange",
      name: "Teenage Engineering Industrial Hardware",
      tag: "Retro Hardware",
      badge: "Analog Synth",
      image: null,
      colors: ["#1a1a1c", "#ff5722", "#f59e0b", "#f4f3ee"],
      desc: "Tactile mechanical aesthetic. Industrial safety orange, knurled knobs, dot-matrix telemetry, and precision Swiss engineering.",
      vibe: "Tactile & Physical AI"
    },
    {
      id: "cyberpunk-hud",
      name: "Neo-Tokyo Cyberpunk HUD",
      tag: "Sci-Fi HUD",
      badge: "Cyberpunk",
      image: null,
      colors: ["#040508", "#00f0ff", "#ff007f", "#ffe600"],
      desc: "High-octane cyberpunk anime interface. Holographic targeting reticles, scanlines, neon fuchsia, and electric cyan.",
      vibe: "Aggressive & Futuristic"
    },
    {
      id: "cosmic-gold",
      name: "NASA JPL Cosmic Supernova",
      tag: "Cosmic Deep Space",
      badge: "Observatory",
      image: null,
      colors: ["#03050c", "#fbbf24", "#06b6d4", "#ffffff"],
      desc: "Cosmic observatory majesty. Gravitational lensing particle vortex, starlight cyan, and molten supernova gold.",
      vibe: "Majestic & Scientific"
    },
    {
      id: "swiss-brutalist",
      name: "Swiss International Monolith",
      tag: "Avant-Garde",
      badge: "High-Contrast",
      image: null,
      colors: ["#000000", "#facc15", "#ffffff", "#27272a"],
      desc: "Bold kinetic typography, stark safety yellow contrast, brutalist concrete blocks, and zero-blur razor precision.",
      vibe: "Bold & Unapologetic"
    }
  ];

  return (
    <section id="design-lab" className="py-24 md:py-32 bg-[#07080b] text-white border-y border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[400px] bg-[#00ff87]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff87]/15 border border-[#00ff87]/30 text-[#00ff87] font-mono text-xs uppercase tracking-widest font-bold mb-3 shadow-[0_0_15px_rgba(0,255,135,0.25)]">
              <Palette className="w-3.5 h-3.5 text-[#00ff87]" /> Design Systems Lab
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
              Explore Our <span className="italic text-[#00ff87] drop-shadow-[0_0_25px_rgba(0,255,135,0.5)]">Design Concepts.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#94a3b8] leading-relaxed font-sans">
            Review the visual designs, color harmonies, and mood mockups generated for AI Forge. Click any design to view its full preview.
          </p>
        </div>

        {/* Designs Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designThemes.map((theme, idx) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-3xl bg-[#0e1118] border border-white/10 hover:border-[#00ff87]/60 transition-all hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden relative"
            >
              <div>
                {/* Visual Thumbnail / Mockup Container */}
                <div 
                  onClick={() => theme.image && setActivePreview(theme.image)}
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#07080b] border border-white/10 mb-4 cursor-pointer group-hover:border-[#00ff87]/40 transition-colors"
                >
                  {theme.image ? (
                    <>
                      <img
                        src={theme.image}
                        alt={theme.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-mono text-xs flex items-center gap-1.5 shadow-lg">
                          <Eye className="w-3.5 h-3.5 text-[#00ff87]" /> View Full Mockup
                        </span>
                      </div>
                    </>
                  ) : (
                    /* Dynamic CSS Palette Preview for options without image file */
                    <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-[#121620] to-[#07080b]">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                          {theme.badge}
                        </span>
                        <div className="flex gap-1.5">
                          {theme.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="h-2 w-3/4 rounded-full mb-2" style={{ backgroundColor: theme.colors[1] }} />
                        <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500">
                        CSS Design Palette
                      </span>
                    </div>
                  )}

                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/85 text-white backdrop-blur-md border border-white/15 font-bold">
                    {theme.badge}
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-2 mb-3">
                  {theme.colors.map((c, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: c }}
                      />
                      <span className="text-[10px] font-mono text-zinc-500">{c}</span>
                    </div>
                  ))}
                </div>

                {/* Title & Desc */}
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#00ff87] transition-colors leading-snug">
                  {theme.name}
                </h3>
                
                <p className="text-xs text-[#94a3b8] mt-2 font-sans leading-relaxed">
                  {theme.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">
                  {theme.vibe}
                </span>

                {theme.image && (
                  <button
                    onClick={() => setActivePreview(theme.image)}
                    className="text-xs font-mono text-[#00ff87] hover:underline flex items-center gap-1 font-bold"
                  >
                    Inspect ↗
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Image Lightbox Modal */}
      <AnimatePresence>
        {activePreview && (
          <div
            onClick={() => setActivePreview(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fade-in"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(0,255,135,0.3)] bg-[#07080b]"
            >
              <button
                onClick={() => setActivePreview(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-[#00ff87] hover:text-black flex items-center justify-center text-white transition-colors border border-white/20"
              >
                ✕
              </button>
              <img
                src={activePreview}
                alt="Theme Mockup Preview"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
