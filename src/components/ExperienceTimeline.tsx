import React, { useState } from 'react';
import { EXPERIENCES, CANDIDATE_PROFILE } from '../data/portfolioData';
import { 
  GraduationCap, Briefcase, Award, Calendar, MapPin, 
  CheckCircle, ArrowUpRight, FileCheck 
} from 'lucide-react';

export const ExperienceTimeline: React.FC<{ onOpenCV: () => void }> = ({ onOpenCV }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'internships' | 'education'>('all');

  const internships = EXPERIENCES.filter(e => e.type === 'internship');
  const education = EXPERIENCES.filter(e => e.type === 'education');

  return (
    <section className="flex flex-col gap-6 my-8" id="timeline">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="font-mono text-xs text-emerald-400 tracking-wider uppercase mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>// CAREER VELOCITY & PEDIGREE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Interactive Experience & Academic Timeline
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                : 'text-slate-400 hover:text-white bg-[#141622] border border-white/5'
            }`}
          >
            All Tracks
          </button>
          <button
            onClick={() => setActiveTab('internships')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'internships'
                ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/50'
                : 'text-slate-400 hover:text-white bg-[#141622] border border-white/5'
            }`}
          >
            Internships ({internships.length})
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'education'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                : 'text-slate-400 hover:text-white bg-[#141622] border border-white/5'
            }`}
          >
            Education & Academics
          </button>
        </div>
      </div>

      {/* Grid Layout: Academic Foundation + Industry Internships */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column: Academic Foundation (AMC Engineering College) */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <div className={`${activeTab === 'education' ? 'md:col-span-12' : 'md:col-span-5'} rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-6 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#00f0ff]" />
                  <h3 className="font-headline text-lg font-semibold text-white">
                    Academic Foundation
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#00f0ff] font-semibold">
                  CLASS OF 2025-2026
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xl font-bold text-white font-headline">
                      B.E. in Computer Science
                    </h4>
                    <span className="font-mono text-xs text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                      CGPA {CANDIDATE_PROFILE.cgpa}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                    <span className="font-semibold text-purple-300">AMC Engineering College</span>
                    <span className="text-slate-500">•</span>
                    <span>Bengaluru, India</span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 mt-0.5">
                    Dec 2021 – Jul 2025 (Graduation Ready)
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0a0b10] border border-white/10 font-mono text-xs flex flex-col gap-2">
                  <span className="text-purple-300 font-semibold">// CORE CURRICULAR FOCUS:</span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Rigorous practical coursework in Computer Networks (OSI, TCP/IP, Routing Protocols, VLANs), Operating Systems, Distributed Systems, Database Management Systems (SQL/NoSQL), and Design & Analysis of Algorithms.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px] text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-[#181a28] border border-white/10">Computer Networks</span>
                  <span className="px-2 py-0.5 rounded bg-[#181a28] border border-white/10">Operating Systems</span>
                  <span className="px-2 py-0.5 rounded bg-[#181a28] border border-white/10">Network Security</span>
                  <span className="px-2 py-0.5 rounded bg-[#181a28] border border-white/10">Database Systems</span>
                  <span className="px-2 py-0.5 rounded bg-[#181a28] border border-white/10">Full-Stack MERN</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-slate-400 font-mono text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                VERIFIED TRANSCRIPT AVAILABLE
              </span>
              <button 
                onClick={onOpenCV}
                className="text-[#00f0ff] hover:underline"
              >
                Inspect CV
              </button>
            </div>
          </div>
        )}

        {/* Right Column: Industry Internships (Varcons, Internstech, Yhills) */}
        {(activeTab === 'all' || activeTab === 'internships') && (
          <div className={`${activeTab === 'internships' ? 'md:col-span-12' : 'md:col-span-7'} rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-6 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <h3 className="font-headline text-lg font-semibold text-white">
                    Industry Engineering Internships
                  </h3>
                </div>
                <span className="font-mono text-xs text-purple-400 font-semibold">
                  3x INDUSTRY STINTS
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {internships.map((exp, idx) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-white/10 hover:border-[#00f0ff] transition-colors group">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#121420] border-2 border-purple-400 group-hover:border-[#00f0ff] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-[#00f0ff]"></span>
                    </div>

                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <h4 className="text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2">
                        {exp.metricBadge && (
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            exp.isNdaProtected 
                              ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30' 
                              : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {exp.metricBadge}
                          </span>
                        )}
                        <span className="font-mono text-xs text-slate-400">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-purple-300 mb-2">
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="font-semibold hover:text-[#00f0ff] flex items-center gap-1 underline"
                        >
                          <span>{exp.company}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="font-semibold">{exp.company}</span>
                      )}
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{exp.location}</span>
                    </div>

                    <ul className="flex flex-col gap-1.5 text-xs text-slate-300 mb-3">
                      {exp.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#00f0ff] mt-0.5">›</span>
                          <span className="leading-relaxed">{hl}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {exp.skills.map(s => (
                        <span key={s} className="px-2 py-0.5 rounded bg-[#181a26] border border-white/10 text-slate-400">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-slate-400 font-mono text-xs">
              <span>ALL EXPERIENCE BENCHMARKED IN REAL DEPLOYMENTS</span>
              <span className="text-purple-300">REFERENCES AVAILABLE</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
