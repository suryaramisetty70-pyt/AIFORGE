import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Bot, Check, Sparkles, Copy } from 'lucide-react';

export default function TerminalSimulator() {
  const [activePreset, setActivePreset] = useState('agent');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const presets = {
    agent: {
      title: "CrewAI Multi-Agent Pipeline",
      command: "python -m aiforge.agents.researcher --topic 'Campus Energy Optimization'",
      output: [
        { type: "info", text: "[00:00.12] ⚡ AI Forge Runtime v2.4 (Veltech Cluster)" },
        { type: "agent", text: "[AGENT-01: ResearchLead] Formulating energy telemetry hypothesis..." },
        { type: "agent", text: "[AGENT-02: DataAnalyst] Querying ESP32 IoT nodes in Lab Block-B..." },
        { type: "agent", text: "[AGENT-03: MLDeployer] Running XGBoost anomaly model (Accuracy: 98.4%)..." },
        { type: "success", text: "[SUCCESS] Generated 3 actionable efficiency protocols." },
        { type: "deploy", text: "🚀 Live dashboard updated at: https://energy.veltech-aiforge.internal" }
      ]
    },
    vision: {
      title: "Real-Time Edge Computer Vision",
      command: "yolo predict model=yolov10-campus.pt source='rtsp://camera.veltech/gate1' conf=0.75",
      output: [
        { type: "info", text: "[00:00.04] Loading YOLOv10-TensorRT weights on Jetson Orin..." },
        { type: "agent", text: "[DETECTION] 14 Vehicles detected | 28 Pedestrians tracked | 0 Anomalies" },
        { type: "agent", text: "[INFERENCE] Latency: 4.8ms @ 60 FPS | VRAM: 1.2 GB / 8 GB" },
        { type: "success", text: "[STATUS] Real-time density stream synchronized with campus API." }
      ]
    },
    rag: {
      title: "ForgeRAG Academic Assistant",
      command: `curl -X POST http://localhost:8000/api/v1/query -d '{"query": "AI Forge 3rd year syllabus"}'`,
      output: [
        { type: "info", text: "[00:00.08] Embedding query via text-embedding-3-small..." },
        { type: "agent", text: "[RETRIEVAL] ChromaDB returned 4 relevant chunks (Similarity: 0.94)" },
        { type: "agent", text: "[RERANK] Applying Cross-Encoder reranking over Veltech AI syllabus..." },
        { type: "success", text: "[RESPONSE] 'AI Forge covers Python math, Agent workflows, FastAPI & cloud hosting.'" }
      ]
    }
  };

  const current = presets[activePreset];

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(current.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 dark:bg-forest/25 text-forest dark:text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            Live Code Lab
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-zinc-900 dark:text-night-text">
            Interactive <span className="italic text-forest dark:text-emerald-400">AI Terminal Sandbox.</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-600 dark:text-night-muted max-w-md">
          Experience the autonomous agents, vision pipelines, and RAG architectures we build hands-on during club sessions.
        </p>
      </div>

      {/* Terminal Window Box */}
      <div className="bg-[#12130d] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-zinc-100 font-mono">
        
        {/* Terminal Header Bar */}
        <div className="px-6 py-4 bg-[#181912] border-b border-white/10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e2553a]" />
            <span className="w-3 h-3 rounded-full bg-[#e0a458]" />
            <span className="w-3 h-3 rounded-full bg-[#8fbb9c]" />
            <span className="ml-3 text-xs text-zinc-400 font-mono">
              aiforge@veltech-cluster: ~/{activePreset}
            </span>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-2">
            {Object.keys(presets).map((key) => (
              <button
                key={key}
                onClick={() => setActivePreset(key)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  activePreset === key
                    ? 'bg-emerald-500 text-zinc-950 font-bold shadow'
                    : 'bg-white/5 hover:bg-white/10 text-zinc-300'
                }`}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Command Bar */}
        <div className="px-6 py-3 bg-[#15160f] border-b border-white/5 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-emerald-400">
            <span className="text-zinc-500">$</span>
            <span className="whitespace-nowrap">{current.command}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Copy Command"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-forest hover:bg-forest-light text-white text-xs font-semibold transition-all active:scale-95 disabled:opacity-50"
            >
              <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
              {isRunning ? 'Executing...' : 'Re-run'}
            </button>
          </div>
        </div>

        {/* Output Stream */}
        <div className="p-6 sm:p-8 space-y-3 min-h-[220px] text-xs sm:text-sm leading-relaxed">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePreset}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-2.5"
            >
              {current.output.map((line, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${
                    line.type === 'success'
                      ? 'text-emerald-400 font-semibold'
                      : line.type === 'deploy'
                      ? 'text-cyan-300'
                      : line.type === 'info'
                      ? 'text-zinc-400'
                      : 'text-zinc-200'
                  }`}
                >
                  <span className="text-zinc-600 select-none">❯</span>
                  <span className="font-mono">{line.text}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2 text-emerald-400 pt-2">
            <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
            <span className="text-xs text-zinc-500">Ready for next instruction...</span>
          </div>
        </div>

      </div>

    </section>
  );
}
