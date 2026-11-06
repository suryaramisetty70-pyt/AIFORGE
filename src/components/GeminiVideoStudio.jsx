import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Sparkles, Video, Wand2, Film, RefreshCw, Cpu, Layers, Maximize2, ShieldCheck, Zap } from 'lucide-react';

export default function GeminiVideoStudio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(65);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [cameraMode, setCameraMode] = useState('Orbit 3D');
  const canvasRef = useRef(null);
  const cardRef = useRef(null);

  // 3D tilt state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const presets = [
    {
      title: "Veltech Autonomous AI Nexus",
      prompt: "Cinematic drone shot flying through Veltech University campus at twilight, futuristic AI Nexus quadcopter scanning terrain with violet LiDAR beams and coral telemetry pulses, photorealistic 4K 60fps, ray tracing.",
      tag: "Robotics & CV",
      duration: "00:08s",
      seed: "94821",
      camera: "Dynamic Flyby"
    },
    {
      title: "Neural Synapse Cyber-Core",
      prompt: "Ultra-close macro view of glowing violet & coral neural network synapses firing in deep space, flowing data streams, Gemini multimodal tensor flows, volumetric cinematic lighting.",
      tag: "Deep Learning",
      duration: "00:12s",
      seed: "63109",
      camera: "Macro Zoom"
    },
    {
      title: "Vibe Coding AI Architect",
      prompt: "A cybernetic AI agent typing on a translucent holographic display in an obsidian lab, compiling full-stack Python FastAPI and React code in real time, violet neon reflections.",
      tag: "Agent Workflows",
      duration: "00:10s",
      seed: "88214",
      camera: "360 Orbit"
    },
    {
      title: "Edge IoT Sensor Mesh",
      prompt: "ESP32 microcontrollers and sensor telemetry visualizing real-time anomaly detection graphs in 3D holographic wireframe with sunset coral accents, 8K render.",
      tag: "IoT & Hardware",
      duration: "00:06s",
      seed: "41982",
      camera: "Isometric Pan"
    }
  ];

  const currentPreset = presets[selectedPreset];
  const [promptText, setPromptText] = useState(currentPreset.prompt);

  useEffect(() => {
    setPromptText(presets[selectedPreset].prompt);
  }, [selectedPreset]);

  // Live Canvas Simulation for generative video output in Violet & Coral
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let frame = 0;

    const render = () => {
      frame++;
      const w = canvas.width = canvas.parentElement.clientWidth || 800;
      const h = canvas.height = canvas.parentElement.clientHeight || 450;

      // Deep Obsidian Plum background
      ctx.fillStyle = '#090714';
      ctx.fillRect(0, 0, w, h);

      // Radial glowing core in Electric Violet & Sunset Coral
      const gradient = ctx.createRadialGradient(
        w / 2 + Math.sin(frame * 0.02) * 50,
        h / 2 + Math.cos(frame * 0.02) * 30,
        10,
        w / 2,
        h / 2,
        w * 0.55
      );
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
      gradient.addColorStop(0.4, 'rgba(255, 107, 74, 0.2)');
      gradient.addColorStop(1, 'rgba(9, 7, 20, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // 3D Perspective Grid in Violet
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)';
      ctx.lineWidth = 1;
      const horizon = h * 0.58;

      // Vertical perspective lines
      for (let x = -w * 0.5; x <= w * 1.5; x += 60) {
        ctx.beginPath();
        ctx.moveTo(w / 2, horizon);
        ctx.lineTo(x + Math.sin(frame * 0.01) * 20, h);
        ctx.stroke();
      }

      // Horizontal moving grid lines
      const gridOffset = (frame * 1.2) % 40;
      for (let y = horizon; y < h; y += 15 + (y - horizon) * 0.12) {
        const renderY = y + gridOffset * ((y - horizon) / (h - horizon));
        if (renderY > horizon && renderY < h) {
          ctx.beginPath();
          ctx.moveTo(0, renderY);
          ctx.lineTo(w, renderY);
          ctx.strokeStyle = `rgba(255, 107, 74, ${(renderY - horizon) / (h - horizon) * 0.28})`;
          ctx.stroke();
        }
      }

      // Floating Generative Particle Rings in Violet & Coral
      const ringCount = 3;
      for (let r = 0; r < ringCount; r++) {
        const ringRadius = 80 + r * 50 + Math.sin(frame * 0.03 + r) * 12;
        ctx.save();
        ctx.translate(w / 2, h / 2 - 20);
        ctx.rotate((frame * (0.015 - r * 0.005)));
        
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = r === 1 ? 'rgba(255, 107, 74, 0.75)' : 'rgba(139, 92, 246, 0.65)';
        ctx.lineWidth = r === 1 ? 1.5 : 1;
        ctx.setLineDash([8, 12]);
        ctx.stroke();
        ctx.restore();
      }

      // Scanning Violet/Coral Laser Beam
      const scanY = (Math.sin(frame * 0.04) * 0.5 + 0.5) * h;
      const scanGrad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      scanGrad.addColorStop(0, 'rgba(139, 92, 246, 0)');
      scanGrad.addColorStop(0.5, 'rgba(255, 107, 74, 0.9)');
      scanGrad.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 3, w, 6);

      animId = requestAnimationFrame(render);
    };

    if (isPlaying) {
      animId = requestAnimationFrame(render);
    }

    return () => cancelAnimationFrame(animId);
  }, [isPlaying, selectedPreset]);

  // Handle 3D Tilt
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({
      x: (x / (rect.width / 2)) * 8,
      y: -(y / (rect.height / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const triggerGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <section id="ai-tools" className="py-20 bg-[#090714] text-white relative overflow-hidden border-t border-[#231b40]/60">
      
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8b5cf6]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff6b4a]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff6b4a]/40 bg-[#161033] backdrop-blur-xl mb-4 shadow-[0_0_20px_rgba(255,107,74,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#ff8566] font-bold">
              Gemini 2.5 Flash & Veo Multimodal Engine
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Generative Video & Multimodal Lab
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            Experiment with next-generation prompt-to-video, spatial camera controls, and high-fidelity latent interpolation in real-time.
          </p>
        </div>

        {/* Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Preset Selectors & Parameter Controls */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.15)]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#c084fc] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Prompt Presets
              </h3>

              <div className="space-y-2.5">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPreset(idx)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      selectedPreset === idx
                        ? 'bg-[#1e1540] border-[#8b5cf6] shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                        : 'bg-[#161033]/60 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{preset.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-zinc-300 border border-white/10">
                        {preset.tag}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter Tweaks */}
            <div className="p-5 rounded-3xl bg-[#120e24]/90 border border-[#ff6b4a]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(255,107,74,0.15)] space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff8566] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" /> Camera & Aspect
              </h3>

              <div className="flex gap-2">
                {['16:9', '9:16', '1:1'].map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                      aspectRatio === ratio
                        ? 'bg-[#ff6b4a] text-white border-[#ff6b4a] shadow-[0_0_15px_rgba(255,107,74,0.4)]'
                        : 'bg-[#161033] border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                {['Orbit 3D', 'Dynamic Flyby', 'Macro Zoom'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setCameraMode(mode)}
                    className={`flex-1 py-1.5 rounded-xl text-[10px] font-mono border transition-all cursor-pointer ${
                      cameraMode === mode
                        ? 'bg-[#8b5cf6] text-white border-[#8b5cf6]'
                        : 'bg-[#161033] border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Main Video Studio Canvas & Controls */}
          <div className="lg:col-span-8">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
              className="rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/40 shadow-[0_0_40px_rgba(139,92,246,0.2)] overflow-hidden backdrop-blur-xl"
            >
              {/* Studio Window Bar */}
              <div className="h-10 bg-[#161033] px-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <Video className="w-3.5 h-3.5 text-[#ff6b4a]" />
                  <span>Veo Live Viewport (60 FPS)</span>
                </div>
                <div className="text-[10px] font-mono text-[#c084fc] flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>Gemini 2.5 Active</span>
                </div>
              </div>

              {/* Viewport Canvas */}
              <div className="relative h-80 sm:h-96 w-full bg-[#090714] overflow-hidden flex items-center justify-center">
                <canvas ref={canvasRef} className="w-full h-full object-cover" />

                {/* Overlay Generating State */}
                {isGenerating && (
                  <div className="absolute inset-0 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-30">
                    <RefreshCw className="w-8 h-8 text-[#ff6b4a] animate-spin" />
                    <span className="text-sm font-mono font-bold text-white">Synthesizing Latent Frames: {progress}%</span>
                    <div className="w-64 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] transition-all duration-200" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                )}

                {/* Floating Viewport Telemetry */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-pulse" />
                    <span>SEED: {currentPreset.seed}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
                    {currentPreset.duration}
                  </div>
                </div>
              </div>

              {/* Bottom Playback & Generation Controls */}
              <div className="p-4 bg-[#140f2e] border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center text-white hover:bg-[#8b5cf6] transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <div className="flex-1 w-full text-xs font-mono text-zinc-300 truncate px-2">
                  {promptText}
                </div>

                <button
                  onClick={triggerGenerate}
                  disabled={isGenerating}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,107,74,0.4)] cursor-pointer active:scale-95 transition-all"
                >
                  Regenerate
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
