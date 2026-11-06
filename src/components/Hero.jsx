import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Wand2, RefreshCw, Layers, Zap, X, UserCheck, Flame, BookOpen, Rocket, CheckCircle2, ShieldCheck, Target, Award } from 'lucide-react';
import GeminiFlowRibbon from './GeminiFlowRibbon';
import jayasuryaImg from '../assets/team/jayasurya.jpg';

export default function Hero({ onOpenJoin }) {
  const [prompt, setPrompt] = useState("Cybernetic neural nexus with glowing violet filaments and radiant sunset core in 8k");
  const [activeArtIdx, setActiveArtIdx] = useState(0);
  const [isForging, setIsForging] = useState(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);

  const presetTags = [
    { tag: "#SciFiArt", prompt: "Hyper-dimensional cybernetic avatar with violet neon circuitry and deep obsidian reflections" },
    { tag: "#Generative", prompt: "Fluid algorithmic vortex intertwining electric violet and radiant sunset coral particles" },
    { tag: "#ConceptDesign", prompt: "Futuristic autonomous AI computing node embedded in an obsidian crystal sanctuary" },
    { tag: "#NeuralCore", prompt: "Biomorphic neural graph pulsing with real-time multimodal inference energy" },
    { tag: "#VeltechAI", prompt: "Autonomous student-built rover utilizing Gemini Flash vision for real-world navigation" },
  ];

  const artGallery = [
    {
      title: "Neural Synthesis Mk.IV",
      style: "Cybernetic Obsidian",
      model: "Gemini 2.5 Flash Vision",
      latency: "128ms",
      seed: "#849204",
      bgGradient: "from-[#8b5cf6]/40 via-[#181135] to-[#ff6b4a]/30",
      accent: "#ff6b4a"
    },
    {
      title: "Bioluminescent Nexus",
      style: "Generative Coral Flow",
      model: "Imagen 3 Pro HD",
      latency: "210ms",
      seed: "#993108",
      bgGradient: "from-[#ff6b4a]/40 via-[#1a0e28] to-[#8b5cf6]/35",
      accent: "#8b5cf6"
    },
    {
      title: "Quantum Graph Core",
      style: "Multimodal Inference",
      model: "DeepMind Multimodal Alpha",
      latency: "94ms",
      seed: "#772154",
      bgGradient: "from-[#a855f7]/40 via-[#110c24] to-[#ff5533]/35",
      accent: "#c084fc"
    }
  ];

  const handleForge = () => {
    setIsForging(true);
    setTimeout(() => {
      setActiveArtIdx((prev) => (prev + 1) % artGallery.length);
      setIsForging(false);
    }, 600);
  };

  const handleTagClick = (tagItem) => {
    setPrompt(tagItem.prompt);
    handleForge();
  };

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden z-10 bg-[#090714]">
      {/* Dual Intertwined Violet & Coral Flow Ribbons */}
      <GeminiFlowRibbon />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges / Tagline & Founder Highlight */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {/* Founder Callout */}
          <motion.button
            onClick={() => setIsBlueprintOpen(true)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff6b4a]/50 bg-[#161033] backdrop-blur-xl shadow-[0_0_25px_rgba(255,107,74,0.35)] hover:border-[#ff6b4a] transition-all cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Head & Founder: <span className="text-[#ff6b4a] underline decoration-dotted">R. Jayasurya (VTU 27657)</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-300 group-hover:text-white">
              View Dossier ↗
            </span>
          </motion.button>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-[#140f2e]/80 px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" /> Veltech University • Dept. of CSE (AI & ML)
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            AI Forge: Where Innovation Ignites{" "}
            <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,107,74,0.45)]">
              Creative Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            Explore, experiment, and collaborate at the nexus of artificial intelligence and boundless creativity. Building production projects perfectly and mastering AI from scratch to pro.
          </motion.p>
        </div>

        {/* Interactive Prompt-to-Image / AI Workbench Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <div className="p-2 sm:p-2.5 rounded-full bg-[#130e29]/90 border border-[#8b5cf6]/40 shadow-[0_0_35px_rgba(139,92,246,0.25)] backdrop-blur-2xl flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-3 w-full px-4 py-2">
              <Sparkles className="w-5 h-5 text-[#8b5cf6] shrink-0" />
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your vision..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-zinc-400 focus:outline-none"
              />
            </div>
            <button
              onClick={handleForge}
              disabled={isForging}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ff6b4a] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,107,74,0.5)] shrink-0 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              <Wand2 className={`w-4 h-4 ${isForging ? 'animate-spin' : ''}`} />
              {isForging ? "Synthesizing..." : "Forge Art"}
            </button>
          </div>

          {/* Preset Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5">
            <span className="text-[11px] font-mono text-zinc-400 mr-1">Inspirations:</span>
            {presetTags.map((item) => (
              <button
                key={item.tag}
                onClick={() => handleTagClick(item)}
                className="text-xs font-mono px-3 py-1 rounded-full bg-[#161033]/70 hover:bg-[#8b5cf6]/20 border border-white/10 hover:border-[#8b5cf6]/50 text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                {item.tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Floating 3D Creative Studio Canvas (Mac OS frame) - CLICKABLE TO OPEN BLUEPRINT & FOUNDER DOSSIER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto mb-16 cursor-pointer group"
          onClick={() => setIsBlueprintOpen(true)}
          title="Click to Open Club Blueprint & Founder Dossier"
        >
          {/* Left Floating Parameter Badge */}
          <div className="hidden md:flex absolute -left-12 top-16 z-20 flex-col gap-2 p-3.5 rounded-2xl bg-[#140f2e]/90 border border-[#8b5cf6]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.3)] animate-float">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#c084fc]">
              <Zap className="w-3.5 h-3.5" />
              <span>{artGallery[activeArtIdx].model}</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-300">
              Latency: <span className="text-white font-bold">{artGallery[activeArtIdx].latency}</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-300">
              Resolution: <span className="text-[#ff6b4a] font-bold">4K Ultra HDR</span>
            </div>
          </div>

          {/* Right Floating Parameter Badge */}
          <div className="hidden md:flex absolute -right-12 bottom-16 z-20 flex-col gap-2 p-3.5 rounded-2xl bg-[#140f2e]/90 border border-[#ff6b4a]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(255,107,74,0.3)] animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#ff6b4a]">
              <Layers className="w-3.5 h-3.5" />
              <span>Neural Flow: 99.4%</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-300">
              Guidance Scale: <span className="text-white font-bold">7.5 (CFG)</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-300">
              Seed: <span className="text-[#8b5cf6] font-bold">{artGallery[activeArtIdx].seed}</span>
            </div>
          </div>

          {/* Window Container */}
          <div className="rounded-3xl bg-[#0f0b21]/95 border border-[#8b5cf6]/40 group-hover:border-[#ff6b4a]/70 group-hover:shadow-[0_0_60px_rgba(255,107,74,0.3)] transition-all duration-300 shadow-[0_0_50px_rgba(139,92,246,0.25)] overflow-hidden">
            {/* Top Mac Window Control Bar */}
            <div className="h-10 bg-[#161033] px-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                <span className="text-[#8b5cf6] font-bold">ai_forge_workspace.canvas</span>
                <span className="text-zinc-500">|</span>
                <span className="text-[#ff6b4a] font-semibold">Click to Open Club Blueprint & Founder Dossier ↗</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                  Inspect
                </span>
              </div>
            </div>

            {/* Canvas Viewport */}
            <div className={`relative h-72 sm:h-96 w-full bg-gradient-to-tr ${artGallery[activeArtIdx].bgGradient} flex items-center justify-center p-6 overflow-hidden transition-all duration-700`}>
              {/* Animated Neural Mesh Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
              
              {/* Radiant Central Artwork Display */}
              <div className="relative z-10 text-center max-w-lg p-6 rounded-2xl bg-[#090714]/85 border border-white/15 backdrop-blur-md shadow-2xl group-hover:scale-[1.02] transition-transform">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#8b5cf6] to-[#ff6b4a] p-[2px] shadow-[0_0_30px_rgba(255,107,74,0.5)]">
                  <div className="w-full h-full bg-[#0d0a1c] rounded-2xl flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  {artGallery[activeArtIdx].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-mono mb-4">
                  "{prompt.slice(0, 75)}..."
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b4a]/20 border border-[#ff6b4a]/40 text-[#ff8566] text-xs font-mono font-bold">
                  <span>Open Club Blueprint & Founder Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Action Cards directly under Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: Our Real Leadership Team (Radiant Coral Glow Border) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-3xl bg-[#120e24]/90 border border-[#ff6b4a]/70 shadow-[0_0_35px_rgba(255,107,74,0.22)] hover:shadow-[0_0_45px_rgba(255,107,74,0.35)] transition-all group backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b4a]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#ff6b4a]/15 text-[#ff6b4a] border border-[#ff6b4a]/30">
                Founding Leads
              </span>
              <span className="text-xs font-mono text-zinc-400">Priority #2</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff6b4a] transition-colors">
              Core Leadership & Coordinators
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
              Led by Club Head R. Jayasurya, Vice Heads Mani Sai & Manidhar Reddy, and 5 dedicated 3rd Year CSE (AI & ML) student coordinators.
            </p>
            <a
              href="#team"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff6b4a] hover:text-white transition-colors"
            >
              Meet All 8 Leads <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Card 2: Master Curriculum: From Scratch to Pro (Electric Violet Glow Border) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/70 shadow-[0_0_35px_rgba(139,92,246,0.22)] hover:shadow-[0_0_45px_rgba(139,92,246,0.35)] transition-all group backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#8b5cf6]/15 text-[#c084fc] border border-[#8b5cf6]/30">
                Syllabus & Agenda
              </span>
              <span className="text-xs font-mono text-zinc-400">Scratch to Pro</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#c084fc] transition-colors">
              What We Teach & Build
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
              Basic Python, Linear Algebra, Machine Learning from scratch, PyTorch deep learning, LLMs & production autonomous agent workflows.
            </p>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c084fc] hover:text-white transition-colors"
            >
              Explore Master Syllabus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>

      </div>

      {/* AI FORGE WORKSPACE BLUEPRINT & FOUNDER DOSSIER MODAL */}
      <AnimatePresence>
        {isBlueprintOpen && (
          <div
            onClick={() => setIsBlueprintOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#120e24] border border-[#8b5cf6]/60 rounded-3xl p-6 sm:p-10 shadow-[0_0_70px_rgba(139,92,246,0.4)] max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsBlueprintOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff6b4a] hover:text-white flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#ff6b4a]/20 text-[#ff8566] border border-[#ff6b4a]/40 text-xs font-mono font-bold uppercase tracking-wider">
                  Official Blueprint & Dossier
                </span>
                <span className="text-xs font-mono text-zinc-400">ai_forge_workspace.canvas</span>
              </div>

              {/* 1. FOUNDER PROFILE & PERSONAL STATEMENT */}
              <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#161033] to-[#140f2b] border border-white/10 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-4 flex flex-col items-center text-center">
                    <div className="w-32 h-36 rounded-2xl overflow-hidden border-2 border-[#ff6b4a] shadow-[0_0_25px_rgba(255,107,74,0.4)] mb-3">
                      <img
                        src={jayasuryaImg}
                        alt="R. Jayasurya"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h4 className="text-lg font-extrabold text-white">R. Jayasurya</h4>
                    <span className="text-xs font-mono text-[#ff6b4a] font-bold">Head & Founder, AI Forge</span>
                    <span className="text-[11px] font-mono text-zinc-400 mt-0.5">VTU 27657 • B.Tech 3rd Year</span>
                    <span className="text-[10px] font-mono text-zinc-500">Dept. of CSE (AI & ML)</span>
                  </div>

                  <div className="md:col-span-8 space-y-3">
                    <h5 className="text-sm font-mono font-bold uppercase tracking-wider text-[#c084fc] flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-[#ff6b4a]" /> Why I Started AI Forge:
                    </h5>
                    <p className="text-sm text-zinc-200 leading-relaxed font-sans italic">
                      "I started AI Forge because too many engineering students are confined to passive lecture slides without ever building production code or deploying functional systems. I wanted to establish an independent, 100% free collective where any student can master programming from scratch, harness cutting-edge AI and agentic tooling, and graduate with live deployed products, hackathon victories, and real engineering confidence."
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-md bg-black/40 text-[#ff8566] border border-white/10">
                        ⚡ Core: AI Tools & Agent Architecture
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-black/40 text-[#c084fc] border border-white/10">
                        🚀 Full-Stack Cloud Deployment
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. OUR 3-POINT CLUB AGENDA */}
              <div className="mb-8 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff6b4a] flex items-center gap-2">
                  <Target className="w-4 h-4" /> The AI Forge Agenda
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#090714] border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/20 text-[#c084fc] flex items-center justify-center font-mono font-bold text-xs">
                      01
                    </div>
                    <h5 className="font-bold text-white text-sm">Building Projects Perfectly</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Zero useless theory. Every module culminates in a functional, clean-code, error-handled repository with live cloud endpoints.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#090714] border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#ff6b4a]/20 text-[#ff8566] flex items-center justify-center font-mono font-bold text-xs">
                      02
                    </div>
                    <h5 className="font-bold text-white text-sm">Learning New AI Continuously</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Staying on the bleeding edge of foundation models, multi-agent swarms, RAG architectures, and multimodal perception.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#090714] border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#c084fc]/20 text-[#c084fc] flex items-center justify-center font-mono font-bold text-xs">
                      03
                    </div>
                    <h5 className="font-bold text-white text-sm">Adapting Practical AI Skills</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Mastering modern AI-assisted vibe coding, autonomous agents, and debugging so students can outbuild and outcompete anywhere.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. WHAT WE TEACH (FROM SCRATCH TO PRO) & REAL USES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* What We Teach */}
                <div className="p-5 rounded-2xl bg-[#090714] border border-white/10 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#c084fc] flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#8b5cf6]" /> What You Will Learn (Scratch to Pro)
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" /> Basic Python Syntax, OOP & Modular Code
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" /> Linear Algebra, Calculus & Gradient Descent
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" /> Pandas, Scikit-Learn & Predictive Modeling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" /> PyTorch Neural Networks & Computer Vision
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" /> Transformers, Prompt Engineering & RAG
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" /> Autonomous Multi-Agent Swarms & Cloud Deploy
                    </li>
                  </ul>
                </div>

                {/* Real Uses & Career Impact */}
                <div className="p-5 rounded-2xl bg-[#090714] border border-white/10 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff8566] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#ff6b4a]" /> Tangible Career Uses & Impact
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" /> Public Portfolio of Deployed Live Web Apps
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" /> Direct Hackathon Podiums & Prize Readiness
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" /> Unmatched Placement & Internship Advantage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" /> Verifiable On-Chain Completion Certificates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" /> 100% Free Collective — Strictly ₹0 Student Fee
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-zinc-400">
                  Ready to start? Enrollment is open to all Veltech CSE (AI & ML) students.
                </span>
                <button
                  onClick={() => { setIsBlueprintOpen(false); onOpenJoin(); }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  Join AI Forge (Free)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
