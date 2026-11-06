import React from 'react';
import { motion } from 'framer-motion';

export default function GeminiFlowRibbon() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient Radial Diffusers: Left Violet Glow, Right Coral Glow */}
      <div className="absolute -top-20 left-1/4 w-[750px] h-[500px] bg-gradient-to-br from-[#8b5cf6]/25 via-[#a855f7]/15 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[700px] h-[550px] bg-gradient-to-bl from-[#ff6b4a]/20 via-[#f97316]/15 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-t from-[#6d28d9]/20 via-[#ff5733]/10 to-transparent blur-[180px] rounded-full pointer-events-none" />

      {/* Dual Intertwined Violet & Coral Flow SVG Waves */}
      <svg
        className="absolute w-[220%] h-full -left-[60%] top-0 opacity-70"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Electric Violet Gradient Ribbon */}
          <linearGradient id="violetRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="25%" stopColor="#7c3aed" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="85%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
          </linearGradient>

          {/* Radiant Sunset Coral Gradient Ribbon */}
          <linearGradient id="coralRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b4a" stopOpacity="0" />
            <stop offset="25%" stopColor="#ff5733" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#f97316" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#ffedd5" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#ff6b4a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>

          <filter id="violetGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="coralGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Violet Ribbon Wave 1 (Upper Curve) */}
        <motion.path
          d="M0,260 C400,140 750,380 1150,220 C1350,150 1500,320 1600,260"
          stroke="url(#violetRibbonGrad)"
          strokeWidth="5"
          filter="url(#violetGlowFilter)"
          fill="none"
          animate={{
            d: [
              "M0,260 C400,140 750,380 1150,220 C1350,150 1500,320 1600,260",
              "M0,320 C400,380 750,160 1150,310 C1350,390 1500,180 1600,300",
              "M0,240 C400,200 750,340 1150,180 C1350,220 1500,350 1600,240",
              "M0,260 C400,140 750,380 1150,220 C1350,150 1500,320 1600,260",
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Radiant Sunset Coral Ribbon Wave 2 (Crossing Under & Intertwining) */}
        <motion.path
          d="M0,390 C420,490 800,280 1200,450 C1380,530 1520,320 1600,410"
          stroke="url(#coralRibbonGrad)"
          strokeWidth="4"
          filter="url(#coralGlowFilter)"
          fill="none"
          animate={{
            d: [
              "M0,390 C420,490 800,280 1200,450 C1380,530 1520,320 1600,410",
              "M0,330 C420,250 800,470 1200,300 C1380,240 1520,440 1600,330",
              "M0,430 C420,510 800,250 1200,480 C1380,550 1520,290 1600,430",
              "M0,390 C420,490 800,280 1200,450 C1380,530 1520,320 1600,410",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Ambient Secondary Harmonic Light Stream */}
        <motion.path
          d="M100,500 C500,350 900,520 1300,380 C1450,320 1550,420 1600,400"
          stroke="rgba(255, 107, 74, 0.35)"
          strokeWidth="2"
          strokeDasharray="8 8"
          fill="none"
          animate={{
            d: [
              "M100,500 C500,350 900,520 1300,380 C1450,320 1550,420 1600,400",
              "M100,440 C500,480 900,360 1300,460 C1450,510 1550,350 1600,450",
              "M100,500 C500,350 900,520 1300,380 C1450,320 1550,420 1600,400",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
