import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clubActivities } from '../data/clubData';
import { Sparkles, CheckCircle, Flame, Users, Rocket, Trophy } from 'lucide-react';

export default function ActivitiesHub() {
  const [activeTab, setActiveTab] = useState(clubActivities[0]?.id || "workshops");

  const currentActivity = clubActivities.find(a => a.id === activeTab) || clubActivities[0];

  return (
    <section id="events" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#090714]">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff6b4a]/15 border border-[#ff6b4a]/30 text-[#ff8566] font-mono text-xs font-bold uppercase tracking-wider mb-2"
        >
          <Flame className="w-3.5 h-3.5" /> Hands-on Engagements
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight"
        >
          Club Activities & <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">Events</span>
        </motion.h2>
        <p className="text-base text-zinc-400 mt-3 font-sans">
          Beyond core curriculum, AI Forge conducts technical bootcamps, campus hackathons, ideathons, and debugging clinics to foster active innovation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {clubActivities.map((act) => {
          const isActive = activeTab === act.id;
          return (
            <button
              key={act.id}
              onClick={() => setActiveTab(act.id)}
              className={`px-6 py-3 rounded-full font-mono text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white shadow-[0_0_25px_rgba(255,107,74,0.45)] scale-105 font-bold'
                  : 'bg-[#120e24] text-zinc-300 border border-white/10 hover:border-[#8b5cf6]/50'
              }`}
            >
              {act.title}
            </button>
          );
        })}
      </div>

      {/* Active Activity Panel */}
      {currentActivity && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/40 shadow-2xl backdrop-blur-xl"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40 font-bold">
                  {currentActivity.badge || "Skill Building"}
                </span>
                <span className="text-xs font-mono text-zinc-400">Target: All CSE (AI & ML) Students</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                {currentActivity.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {currentActivity.desc || currentActivity.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider">Key Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(currentActivity.items || currentActivity.highlights || []).map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#161033] border border-white/5 text-xs sm:text-sm text-zinc-300 font-mono">
                      <CheckCircle className="w-4 h-4 text-[#ff6b4a] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

    </section>
  );
}
