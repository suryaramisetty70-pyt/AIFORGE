import React from 'react';
import { upcomingEvents } from '../data/clubData';
import { Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function EventsTimeline() {
  return (
    <section id="events" className="py-20 bg-paper-2 dark:bg-night-card/40 border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest dark:text-emerald-400 font-semibold">
            Calendar & Sprints
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-zinc-900 dark:text-night-text mt-2">
            Flagship <span className="italic text-forest dark:text-emerald-400">Events.</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-night-muted mt-3">
            Join our open workshops, hackathons, and speaker sessions designed to give hands-on exposure to practical AI.
          </p>
        </div>

        <div className="space-y-6">
          {upcomingEvents.map((evt, idx) => (
            <div
              key={evt.id}
              className="p-6 sm:p-8 rounded-3xl bg-paper dark:bg-[#15160f] border border-black/5 dark:border-white/10 hover:border-forest/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-rust/10 text-rust dark:text-rust-light">
                    {evt.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {evt.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-zinc-900 dark:text-night-text mt-1">
                  {evt.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-night-muted mt-2 leading-relaxed max-w-2xl">
                  {evt.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-xs font-mono text-zinc-500 dark:text-night-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-forest dark:text-emerald-400" />
                    {evt.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-forest dark:text-emerald-400" />
                    {evt.location}
                  </span>
                </div>
              </div>

              <div>
                <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest hover:bg-forest-light text-white font-medium text-sm transition-all shadow-sm">
                  Register Interest <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
