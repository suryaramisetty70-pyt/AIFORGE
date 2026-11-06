import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClubInfo from './components/ClubInfo';
import FilmStrip from './components/FilmStrip';
import TeamOrbit from './components/TeamOrbit';
import CurriculumRoadmap from './components/CurriculumRoadmap';
import GoalsGrid from './components/GoalsGrid';
import LearningPipeline from './components/LearningPipeline';
import ClubGallery from './components/ClubGallery';
import StudentPortal from './components/StudentPortal';
import ActivitiesHub from './components/ActivitiesHub';
import BenefitsSection from './components/BenefitsSection';
import MemberModal from './components/MemberModal';
import JoinModal from './components/JoinModal';
import Footer from './components/Footer';
import NeuralCanvas from './components/NeuralCanvas';
import ScrollProgress from './components/ScrollProgress';
import FloatingDock from './components/FloatingDock';

export default function App() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#090714] text-white font-sans antialiased relative selection:bg-[#ff6b4a] selection:text-white">
      
      {/* Top Reading Scroll Progress */}
      <ScrollProgress />

      {/* Interactive Background Neural Particles (Violet & Coral) */}
      <NeuralCanvas />

      {/* Floating Quick Action Dock */}
      <FloatingDock />

      {/* Header */}
      <Navbar onOpenJoin={() => setJoinModalOpen(true)} />

      {/* 1. Hero Section (Visuals, Tagline, Founder Highlight & Interactive Workspace Canvas Blueprint) */}
      <div id="about">
        <Hero onOpenJoin={() => setJoinModalOpen(true)} />
      </div>

      {/* 2. Club Info & Identity (Department, Purpose, Core Pillars) */}
      <div id="club-info">
        <ClubInfo />
      </div>

      {/* 3. Team Details & Photos (Priority #2 as requested) */}
      <div id="team">
        <FilmStrip onSelectMember={(member) => setSelectedMember(member)} />
      </div>

      {/* 4. Leadership Structure: 3-Layer Orbital Architecture */}
      <div id="structure">
        <TeamOrbit onSelectMember={(member) => setSelectedMember(member)} />
      </div>

      {/* 5. What We Teach: From Scratch to Pro Master Curriculum (Interactive Syllabus Explorer) */}
      <div id="curriculum">
        <CurriculumRoadmap />
      </div>

      {/* 6. Main Goals & Vision (Researched, High-Impact Objectives) */}
      <div id="goals">
        <GoalsGrid />
      </div>

      {/* 7. 5-Stage Project Building Pipeline (Agenda: Building Projects Perfectly) */}
      <div id="workshops">
        <LearningPipeline />
      </div>

      {/* 8. College & Club Events Gallery */}
      <div id="gallery">
        <ClubGallery />
      </div>

      {/* 9. Official Student System: Student ID Generator & Attendance Status Tracker */}
      <div id="student-portal">
        <StudentPortal />
      </div>

      {/* 10. Club Activities & Campus Events Hub */}
      <div id="events">
        <ActivitiesHub />
      </div>

      {/* 11. Expected Benefits for Students & Verifiable Certification */}
      <div id="benefits">
        <BenefitsSection onOpenJoin={() => setJoinModalOpen(true)} />
      </div>

      {/* 12. Footer */}
      <Footer />

      {/* Modals */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />

    </div>
  );
}
