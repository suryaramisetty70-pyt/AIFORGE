import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Search, CheckCircle2, XCircle, AlertCircle, Sparkles, Plus, Flame, Calendar, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function StudentPortal() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('aiforge_students_db');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Filter out any previous dummy test students like VTU23014, VTU23089, VTU24102
        const realOnly = parsed.filter(s => !['VTU23014', 'VTU23089', 'VTU24102'].includes(s.vtuNumber));
        return realOnly;
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [activeTab, setActiveTab] = useState(students.length > 0 ? 'attendance' : 'create');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(students[0] || null);
  const [newlyCreatedStudent, setNewlyCreatedStudent] = useState(null);

  // New Student Registration Form State
  const [newStudent, setNewStudent] = useState({
    name: '',
    vtuNumber: '',
    email: '',
    year: 'Year III',
    department: 'CSE (AI & ML)',
    track: 'Multimodal AI & Latent Diffusion'
  });

  useEffect(() => {
    localStorage.setItem('aiforge_students_db', JSON.stringify(students));
  }, [students]);

  // Handle Create Student ID
  const handleCreateStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.vtuNumber) {
      alert("Please provide student name and VTU / Roll number!");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const generatedId = `AF-VTU-2026-${randomNum}`;

    const createdRecord = {
      studentId: generatedId,
      vtuNumber: newStudent.vtuNumber.toUpperCase().trim(),
      name: newStudent.name.trim(),
      email: newStudent.email.trim() || `${newStudent.vtuNumber.toLowerCase()}@veltech.edu.in`,
      year: newStudent.year,
      department: newStudent.department,
      track: newStudent.track,
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      attendance: [
        { id: 1, session: "Orientation & AI Forge Inauguration", date: "Aug 12, 2026", status: "Present" },
        { id: 2, session: "Python & Math Foundations for AI", date: "Aug 26, 2026", status: "Present" },
        { id: 3, session: "Gemini 2.5 Multimodal Vision Lab", date: "Sep 15, 2026", status: "Present" },
        { id: 4, session: "Autonomous Multi-Agent Systems", date: "Oct 02, 2026", status: "Present" },
        { id: 5, session: "Veltech AI Project Sprint", date: "Oct 18, 2026", status: "Present" }
      ]
    };

    const updated = [createdRecord, ...students];
    setStudents(updated);
    setNewlyCreatedStudent(createdRecord);
    setSelectedStudent(createdRecord);
    setSearchQuery(createdRecord.vtuNumber);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        colors: ['#8b5cf6', '#ff6b4a', '#ffffff']
      });
    } catch (err) {}
  };

  // Search Student for Attendance Status
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    const found = students.find(s => 
      s.vtuNumber.toLowerCase() === query || 
      s.studentId.toLowerCase() === query || 
      s.name.toLowerCase().includes(query)
    );

    if (found) {
      setSelectedStudent(found);
    } else {
      alert(`Student with VTU / ID "${searchQuery}" not found. Create a student first using '+ Create Student ID'!`);
    }
  };

  // Toggle Attendance Status (Present <-> Absent)
  const handleToggleAttendance = (sessionId) => {
    if (!selectedStudent) return;

    const updatedAttendance = selectedStudent.attendance.map(item => {
      if (item.id === sessionId) {
        return {
          ...item,
          status: item.status === 'Present' ? 'Absent' : 'Present'
        };
      }
      return item;
    });

    const updatedStudent = {
      ...selectedStudent,
      attendance: updatedAttendance
    };

    setSelectedStudent(updatedStudent);

    const updatedList = students.map(s => s.studentId === updatedStudent.studentId ? updatedStudent : s);
    setStudents(updatedList);
  };

  // Calculate percentage
  const calculateAttendancePercentage = (attList) => {
    if (!attList || attList.length === 0) return 0;
    const presentCount = attList.filter(a => a.status === 'Present').length;
    return Math.round((presentCount / attList.length) * 100);
  };

  const currentPercentage = selectedStudent ? calculateAttendancePercentage(selectedStudent.attendance) : 0;
  const isEligible = currentPercentage >= 75;

  return (
    <section id="student-portal" className="py-24 bg-[#090714] text-white relative overflow-hidden border-t border-[#231b40]/60">
      
      {/* Background radial glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#8b5cf6]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-[#ff6b4a]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-xs font-mono text-[#c084fc] font-bold uppercase tracking-wider mb-2">
            <UserCheck className="w-3.5 h-3.5 text-[#ff6b4a]" /> Official Student System
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Student ID & <span className="bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#ff6b4a] bg-clip-text text-transparent">Attendance Status</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans">
            Issue unique digital student IDs, register official club members, and track session-by-session attendance for workshop certification.
          </p>

          {/* Navigation Tabs */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('attendance')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'attendance'
                  ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white shadow-[0_0_20px_rgba(255,107,74,0.35)]'
                  : 'bg-[#120e24] text-zinc-400 border border-white/10 hover:text-white'
              }`}
            >
              Check Attendance Status
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'create'
                  ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white shadow-[0_0_20px_rgba(255,107,74,0.35)]'
                  : 'bg-[#120e24] text-zinc-400 border border-white/10 hover:text-white'
              }`}
            >
              + Create Student ID
            </button>
            <button
              onClick={() => setActiveTab('roster')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'roster'
                  ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white shadow-[0_0_20px_rgba(255,107,74,0.35)]'
                  : 'bg-[#120e24] text-zinc-400 border border-white/10 hover:text-white'
              }`}
            >
              Club Roster ({students.length})
            </button>
          </div>
        </div>

        {/* TAB 1: ATTENDANCE STATUS CHECKER */}
        {activeTab === 'attendance' && (
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* If no students exist yet */}
            {students.length === 0 ? (
              <div className="text-center py-16 px-6 rounded-3xl bg-[#120e24]/60 border border-dashed border-[#8b5cf6]/30 max-w-xl mx-auto backdrop-blur-xl">
                <UserCheck className="w-12 h-12 text-[#ff6b4a] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white">No Students Registered Yet</h3>
                <p className="text-xs text-zinc-400 mt-2 font-sans">
                  Register your first club member to start tracking real session attendance and issuing certificates.
                </p>
                <button
                  onClick={() => setActiveTab('create')}
                  className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
                >
                  + Create Student ID
                </button>
              </div>
            ) : (
              <>
                {/* Search Box */}
                <form onSubmit={handleSearch} className="p-2 sm:p-3 rounded-2xl bg-[#120e24]/90 border border-[#8b5cf6]/40 shadow-xl backdrop-blur-xl flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center gap-3 w-full px-4 py-2">
                    <Search className="w-5 h-5 text-[#8b5cf6] shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Enter Student VTU Roll No. or Student ID..."
                      className="w-full bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shrink-0 cursor-pointer"
                  >
                    Inspect Attendance
                  </button>
                </form>

                {/* Quick Selector Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-400">
                  <span>Enrolled Members:</span>
                  {students.map((s) => (
                    <button
                      key={s.studentId}
                      onClick={() => {
                        setSelectedStudent(s);
                        setSearchQuery(s.vtuNumber);
                      }}
                      className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                        selectedStudent?.studentId === s.studentId
                          ? 'bg-[#8b5cf6]/30 text-white border-[#8b5cf6]'
                          : 'bg-[#161033] border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {s.name} ({s.vtuNumber})
                    </button>
                  ))}
                </div>

                {/* Student Attendance Card */}
                {selectedStudent && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 sm:p-8 rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/40 shadow-2xl backdrop-blur-xl"
                  >
                    {/* Profile Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#8b5cf6] to-[#ff6b4a] flex items-center justify-center text-xl font-bold text-white shadow-lg shrink-0">
                          {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                              {selectedStudent.name}
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ff6b4a]/15 text-[#ff6b4a] border border-[#ff6b4a]/30 font-bold">
                              {selectedStudent.vtuNumber}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-zinc-400 mt-0.5">
                            {selectedStudent.department} • {selectedStudent.year} • ID: <strong className="text-[#c084fc]">{selectedStudent.studentId}</strong>
                          </p>
                        </div>
                      </div>

                      {/* Attendance Rate Pill */}
                      <div className="text-left sm:text-right">
                        <div className="text-3xl font-extrabold font-mono" style={{ color: isEligible ? '#34d399' : '#f87171' }}>
                          {currentPercentage}%
                        </div>
                        <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                          isEligible
                            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                        }`}>
                          {isEligible ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {isEligible ? 'Certificate Eligible (≥ 75%)' : 'Attendance Warning (< 75%)'}
                        </span>
                      </div>
                    </div>

                    {/* Attendance Progress Bar */}
                    <div className="py-6 border-b border-white/10">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                        <span>Overall Minimum Required: 75%</span>
                        <span>Sessions Attended: {selectedStudent.attendance.filter(a => a.status === 'Present').length} / {selectedStudent.attendance.length}</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-[#090714] overflow-hidden p-0.5 border border-white/10">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isEligible
                              ? 'bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a]'
                              : 'bg-gradient-to-r from-rose-500 to-amber-500'
                          }`}
                          style={{ width: `${currentPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Session by Session Records */}
                    <div className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#8b5cf6]" />
                          Session Attendance Log
                        </h4>
                        <span className="text-[11px] font-mono text-zinc-400">
                          Founder Mode: Click status pill to toggle Present / Absent
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {selectedStudent.attendance.map((session) => (
                          <div
                            key={session.id}
                            className="p-3.5 rounded-2xl bg-[#161033]/60 border border-white/5 hover:border-white/15 flex items-center justify-between gap-4 transition-all"
                          >
                            <div>
                              <p className="text-sm font-bold text-white">
                                {session.session}
                              </p>
                              <span className="text-[11px] font-mono text-zinc-400">
                                {session.date} • Session 0{session.id}
                              </span>
                            </div>

                            {/* Status Toggle Button */}
                            <button
                              onClick={() => handleToggleAttendance(session.id)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                session.status === 'Present'
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                              }`}
                              title="Click to toggle status"
                            >
                              {session.status === 'Present' ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <XCircle className="w-3.5 h-3.5 text-rose-400" />
                              )}
                              <span>{session.status}</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}
              </>
            )}

          </div>
        )}

        {/* TAB 2: CREATE STUDENT ID & JOIN CLUB */}
        {activeTab === 'create' && (
          <div className="max-w-2xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/40 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-[#ff6b4a]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#ff6b4a] font-bold">
                  New Member Onboarding
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Generate Official Student ID Card
              </h3>
              <p className="text-xs text-zinc-400 mt-1 font-sans">
                Enter your details to create an official Veltech AI Forge digital identification card and register in the club roster.
              </p>

              <form onSubmit={handleCreateStudent} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    placeholder="e.g. Student Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">VTU / Roll No. *</label>
                    <input
                      type="text"
                      required
                      value={newStudent.vtuNumber}
                      onChange={(e) => setNewStudent({ ...newStudent, vtuNumber: e.target.value })}
                      placeholder="e.g. VTU 28000"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Email ID *</label>
                    <input
                      type="email"
                      required
                      value={newStudent.email}
                      onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                      placeholder="student@veltech.edu.in"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Academic Year</label>
                    <select
                      value={newStudent.year}
                      onChange={(e) => setNewStudent({ ...newStudent, year: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                    >
                      <option>Year I</option>
                      <option>Year II</option>
                      <option>Year III</option>
                      <option>Year IV</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Department</label>
                    <input
                      type="text"
                      disabled
                      value="CSE (AI & ML)"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090714]/60 border border-white/5 text-zinc-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1 font-semibold">Specialization Focus</label>
                  <select
                    value={newStudent.track}
                    onChange={(e) => setNewStudent({ ...newStudent, track: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-white/10 text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                  >
                    <option>Multimodal AI & Latent Diffusion</option>
                    <option>Autonomous Agent Architectures</option>
                    <option>Computer Vision & Robotics</option>
                    <option>Full-Stack AI Deployment</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ff6b4a] hover:from-[#7c3aed] hover:to-[#ff5533] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,107,74,0.45)] transition-all cursor-pointer active:scale-95"
                >
                  Generate Official Student ID Card
                </button>
              </form>

              {/* Display Generated Card */}
              {newlyCreatedStudent && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#161033] to-[#120e24] border-2 border-[#8b5cf6] shadow-[0_0_35px_rgba(139,92,246,0.3)] relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#ff6b4a] flex items-center justify-center text-white font-bold">
                          ⚡
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm text-white">AI FORGE STUDENT ID</h4>
                          <span className="text-[10px] font-mono text-zinc-400">Veltech University • CSE (AI & ML)</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-[#34d399]/20 text-[#34d399] border border-[#34d399]/40 text-[10px] font-mono font-bold uppercase">
                        Verified Member
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono my-4">
                      <div>
                        <span className="text-zinc-500 block text-[10px]">NAME</span>
                        <strong className="text-white text-sm">{newlyCreatedStudent.name}</strong>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">VTU ROLL NO.</span>
                        <strong className="text-[#ff6b4a] text-sm">{newlyCreatedStudent.vtuNumber}</strong>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">STUDENT ID</span>
                        <strong className="text-[#c084fc]">{newlyCreatedStudent.studentId}</strong>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">TRACK</span>
                        <span className="text-zinc-300">{newlyCreatedStudent.track}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-500">Issued: {newlyCreatedStudent.joinedDate}</span>
                      <button
                        onClick={() => setActiveTab('attendance')}
                        className="text-[#ff6b4a] hover:underline font-bold cursor-pointer"
                      >
                        View Attendance Record →
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* TAB 3: CLUB ROSTER */}
        {activeTab === 'roster' && (
          <div className="max-w-4xl mx-auto">
            {students.length === 0 ? (
              <div className="text-center py-16 px-6 rounded-3xl bg-[#120e24]/60 border border-dashed border-[#8b5cf6]/30 max-w-xl mx-auto">
                <UserCheck className="w-12 h-12 text-[#8b5cf6] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white">Roster is Empty</h3>
                <p className="text-xs text-zinc-400 mt-2 font-sans">
                  No students have been registered yet. Create an ID to register the first member.
                </p>
                <button
                  onClick={() => setActiveTab('create')}
                  className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ff6b4a] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
                >
                  + Create Student ID
                </button>
              </div>
            ) : (
              <div className="p-6 rounded-3xl bg-[#120e24]/90 border border-[#8b5cf6]/40 shadow-xl backdrop-blur-xl overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-xs font-mono text-zinc-400">
                      <th className="py-3 px-4">Student</th>
                      <th className="py-3 px-4">VTU No.</th>
                      <th className="py-3 px-4">Student ID</th>
                      <th className="py-3 px-4">Track</th>
                      <th className="py-3 px-4 text-center">Attendance</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-mono divide-y divide-white/5">
                    {students.map((st) => {
                      const rate = calculateAttendancePercentage(st.attendance);
                      return (
                        <tr key={st.studentId} className="hover:bg-white/5 transition-colors">
                          <td className="py-3 px-4">
                            <strong className="text-white block text-sm">{st.name}</strong>
                            <span className="text-zinc-500 text-[10px]">{st.year}</span>
                          </td>
                          <td className="py-3 px-4 text-[#ff6b4a] font-bold">{st.vtuNumber}</td>
                          <td className="py-3 px-4 text-[#c084fc]">{st.studentId}</td>
                          <td className="py-3 px-4 text-zinc-300">{st.track}</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                              rate >= 75 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                            }`}>
                              {rate}%
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => {
                                setSelectedStudent(st);
                                setSearchQuery(st.vtuNumber);
                                setActiveTab('attendance');
                              }}
                              className="px-3 py-1 rounded-lg bg-[#8b5cf6]/20 text-[#c084fc] hover:bg-[#8b5cf6] hover:text-white transition-all cursor-pointer"
                            >
                              Check
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
