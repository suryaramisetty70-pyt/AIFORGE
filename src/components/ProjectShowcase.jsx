import React from 'react';
import { clubProjects } from '../data/clubData';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest dark:text-emerald-400 font-semibold">
            Lab Outputs
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-zinc-900 dark:text-night-text mt-2">
            Built at <span className="italic text-forest dark:text-emerald-400">AI Forge.</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-600 dark:text-night-muted max-w-sm">
          Open-source models, campus intelligence tools, and research breakthroughs authored by club students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clubProjects.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl p-7 bg-paper-card dark:bg-night-card border border-black/5 dark:border-white/10 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-forest/10 dark:bg-forest/30 text-forest dark:text-emerald-400 font-semibold">
                  {p.category}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {p.status}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-zinc-900 dark:text-night-text mb-3">
                {p.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-night-muted leading-relaxed font-sans mb-6">
                {p.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tech.map((t, i) => (
                  <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/10">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-xs font-mono font-medium transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Source Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-forest hover:bg-forest-light text-white transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
