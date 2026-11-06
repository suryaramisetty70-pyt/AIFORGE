import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Radio, Bell, ArrowUpRight, Flame, Layers, UserCheck } from 'lucide-react';

export default function CommunityCreations() {
  const [selectedArt, setSelectedArt] = useState(null);
  const [likes, setLikes] = useState({ 1: 148, 2: 230, 3: 182, 4: 314 });

  const artworks = [
    {
      id: 1,
      title: "Quantum Botanical Nexus",
      author: "Aarav Sharma",
      role: "B.Tech 3rd Year · CSE (AI & ML)",
      tags: ["#Generative", "#LatentDiffusion"],
      model: "Gemini 2.5 Flash",
      colorGradient: "from-[#8b5cf6] via-[#4c1d95] to-[#ff6b4a]",
      prompt: "Bioluminescent botanical crystalline structures pulsing with quantum energy, violet filaments intertwining with sunset coral nodes in hyper-detail 8k.",
      badge: "Staff Pick"
    },
    {
      id: 2,
      title: "Cybernetic Vision Core",
      author: "Priya Patel",
      role: "B.Tech 3rd Year · CSE (AI & ML)",
      tags: ["#SciFiArt", "#VisionAPI"],
      model: "Imagen 3 Pro",
      colorGradient: "from-[#ff6b4a] via-[#7c2d12] to-[#8b5cf6]",
      prompt: "Hyper-detailed cybernetic humanoid core reflecting glowing obsidian city lights with violet neon telemetry interfaces.",
      badge: "Trending"
    },
    {
      id: 3,
      title: "Obsidian Fractal Horizon",
      author: "Karthik R.",
      role: "B.Tech 3rd Year · CSE (AI & ML)",
      tags: ["#Multimodal", "#NeuralMesh"],
      model: "DeepMind Alpha Latent",
      colorGradient: "from-[#a855f7] via-[#2e1065] to-[#ff5733]",
      prompt: "Infinite obsidian geometry refracting coral sunset rays across an undulating neural topological terrain.",
      badge: "Featured"
    },
    {
      id: 4,
      title: "Autonomous Agent Hivemind",
      author: "Sneha M.",
      role: "B.Tech 3rd Year · CSE (AI & ML)",
      tags: ["#MultiAgent", "#GeminiFlash"],
      model: "Gemini 2.5 Flash",
      colorGradient: "from-[#ff6b4a] via-[#831843] to-[#c084fc]",
      prompt: "Decentralized autonomous AI agents forming a luminous swarm intellect, dynamic glowing paths and real-time inference halos.",
      badge: "Top Rated"
    }
  ];

  const newsItems = [
    {
      tag: "SYMPOSIUM",
      title: "Annual AI Symposium 2026",
      desc: "Keynote presentation & multimodal AI agent hackathon at Veltech University campus.",
      time: "Nov 28, 2026",
      color: "#ff6b4a"
    },
    {
      tag: "COMPUTE",
      title: "New Forge Lab High-Compute Access",
      desc: "Instant playground access for all enrolled students with dedicated Gemini 2.5 API keys.",
      time: "Available Now",
      color: "#8b5cf6"
    },
    {
      tag: "CERTIFICATE",
      title: "Verifiable Public Proofs (₹0 Budget)",
      desc: "Cryptographically verifiable certificates for all students who ship and complete projects.",
      time: "Live System",
      color: "#c084fc"
    }
  ];

  const liveFeed = [
    { user: "Aarav Sharma", action: "generated 'Quantum Botanical Nexus'", time: "2m ago", avatar: "AS" },
    { user: "Priya Patel", action: "enrolled in 'Multimodal AI & Gemini 2.5'", time: "5m ago", avatar: "PP" },
    { user: "R. Danisha", action: "approved Certificate #AF-2026-9042", time: "12m ago", avatar: "RD" },
    { user: "Karthik S.", action: "verified project 'Autonomous RAG Agent'", time: "18m ago", avatar: "KS" },
    { user: "Mani Sai", action: "published workshop 'Multi-Agent Workflows'", time: "25m ago", avatar: "MS" }
  ];

  const handleLike = (e, id) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <section id="community" className="py-20 relative bg-[#090714] border-t border-[#231b40]/60 overflow-hidden">
      
      {/* Background ambient radial violet & coral */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b5cf6]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ff6b4a]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-xs font-mono text-[#c084fc] font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Option 3 • User-Generated Art & Projects
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              User-generated Art & Creations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
              Real generative AI artwork, agent workflows, and multimodal projects crafted by Veltech AI Forge community members.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Radio className="w-4 h-4 text-[#ff6b4a] animate-pulse" />
            <span>Live Community Stream Active</span>
          </div>
        </div>

        {/* 2-Column Grid: Left (Artworks 8 Cols) + Right (News & Live Feed 4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Artworks 2x2 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {artworks.map((art) => (
              <motion.div
                key={art.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedArt(art)}
                className="rounded-3xl bg-[#120e24]/90 border border-[#231b40] hover:border-[#8b5cf6]/60 p-4 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] cursor-pointer group flex flex-col justify-between"
              >
                {/* Art Thumbnail Visualizer */}
                <div className={`relative h-48 rounded-2xl bg-gradient-to-tr ${art.colorGradient} p-4 flex flex-col justify-between overflow-hidden`}>
                  {/* Grid Lines Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {art.badge}
                    </span>
                    <button
                      onClick={(e) => handleLike(e, art.id)}
                      className="p-1.5 rounded-full bg-black/50 backdrop-blur-md text-white hover:text-[#ff6b4a] transition-colors flex items-center gap-1 text-xs font-mono"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>{likes[art.id]}</span>
                    </button>
                  </div>

                  {/* Artwork Center Logo / Symbol */}
                  <div className="relative z-10 text-center my-auto">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                      ⚡
                    </div>
                  </div>

                  {/* Bottom Model Tag */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/90">
                    <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-md">{art.model}</span>
                    <span className="text-zinc-200">Click to Inspect</span>
                  </div>
                </div>

                {/* Details */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b4a] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">
                    By <span className="text-zinc-200 font-semibold">{art.author}</span> • {art.role.split('·')[0]}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {art.tags.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#161033] border border-white/10 text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: News & Live Activity Widget */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* News Widget */}
            <div className="p-6 rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/40 shadow-[0_0_25px_rgba(139,92,246,0.15)] backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-4 h-4 text-[#8b5cf6]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Forge News & Announcements
                </h3>
              </div>

              <div className="space-y-4">
                {newsItems.map((news, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="px-2 py-0.5 rounded font-bold" style={{ backgroundColor: `${news.color}20`, color: news.color }}>
                        {news.tag}
                      </span>
                      <span className="text-zinc-400">{news.time}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white hover:text-[#ff6b4a] transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                      {news.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="p-6 rounded-3xl bg-[#120e24]/90 border border-[#ff6b4a]/40 shadow-[0_0_25px_rgba(255,107,74,0.15)] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#ff6b4a]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Live Activity
                  </h3>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-ping" />
              </div>

              <div className="space-y-3">
                {liveFeed.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-xl bg-[#161033]/60 border border-white/5 hover:border-white/15 transition-all">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#ff6b4a] flex items-center justify-center text-[10px] font-mono font-bold text-white shrink-0">
                      {item.avatar}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-white truncate">
                        <span className="font-semibold text-zinc-200">{item.user}</span>{" "}
                        <span className="text-zinc-400">{item.action}</span>
                      </p>
                      <span className="text-[10px] font-mono text-zinc-400">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Art Inspection Modal */}
      {selectedArt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#120e24] border border-[#8b5cf6]/50 rounded-3xl max-w-xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
            >
              ✕
            </button>
            <div className={`h-48 rounded-2xl bg-gradient-to-tr ${selectedArt.colorGradient} flex items-center justify-center text-4xl mb-4 shadow-lg`}>
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-white">{selectedArt.title}</h3>
            <p className="text-xs font-mono text-[#ff6b4a] mt-1">{selectedArt.author} • {selectedArt.role}</p>
            <div className="mt-4 p-3 rounded-xl bg-[#090714] border border-white/10 text-xs text-zinc-300 font-mono">
              <span className="text-zinc-400 font-bold block mb-1">PROMPT:</span>
              "{selectedArt.prompt}"
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Model: <strong className="text-white">{selectedArt.model}</strong></span>
              <span>Resolution: <strong className="text-[#ff6b4a]">4K HDR</strong></span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
