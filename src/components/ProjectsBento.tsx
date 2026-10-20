import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { 
  ExternalLink, Code2, Sparkles, Network, ArrowRight, 
  Terminal, ShieldCheck, ChevronRight, Layers, Eye
} from 'lucide-react';

interface ProjectsBentoProps {
  onOpenLiveModal: (project: Project) => void;
}

export const ProjectsBento: React.FC<ProjectsBentoProps> = ({ onOpenLiveModal }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'systems'>('all');
  const [expandedArchitectureId, setExpandedArchitectureId] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const toggleArchitecture = (id: string) => {
    setExpandedArchitectureId(prev => (prev === id ? null : id));
  };

  return (
    <section className="flex flex-col gap-6 my-8" id="projects">
      {/* Section Header with category tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="font-mono text-xs text-[#00f0ff] tracking-wider uppercase mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
            <span>// SYSTEMS LABORATORY & RUNTIME RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects Bento
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filter === 'all'
                ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/50'
                : 'text-slate-400 hover:text-white bg-[#141622] border border-white/5'
            }`}
          >
            All Repos ({PROJECTS.length})
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              filter === 'ai'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                : 'text-slate-400 hover:text-white bg-[#141622] border border-white/5'
            }`}
          >
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>AI Studio & ML</span>
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filter === 'fullstack'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                : 'text-slate-400 hover:text-white bg-[#141622] border border-white/5'
            }`}
          >
            Full Stack (MERN)
          </button>
          <button
            onClick={() => setFilter('systems')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              filter === 'systems'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                : 'text-slate-400 hover:text-white bg-[#141622] border border-white/5'
            }`}
          >
            <Network className="w-3 h-3 text-emerald-400" />
            <span>Networks & Systems</span>
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* CARD 1: CricPrec - Hero Card (Span 8 or 12 depending on filter) */}
        {filteredProjects.find(p => p.id === 'cricprec') && (
          <div className="md:col-span-8 rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#00f0ff]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-mono text-[11px] font-bold tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                    AI STUDIO DEPLOYMENT
                  </span>
                  <span className="font-mono text-xs text-slate-500">cricprec.ai.studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const proj = PROJECTS.find(p => p.id === 'cricprec')!;
                      onOpenLiveModal(proj);
                    }}
                    className="p-1.5 rounded bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] transition-colors"
                    title="Open Live Sandbox Frame"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href="https://cricprec.ai.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-[#00f0ff] transition-colors"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors font-headline">
                  CricPrec: AI Cricket Intelligence & Predictive Telemetry Engine
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                  An advanced predictive intelligence platform engineered with Google AI Studio and Gemini models. Replaces heuristic scoring with zero-shot multi-factor match simulation, momentum drift analytics, and sub-second dynamic commentary.
                </p>
              </div>

              {/* Architecture Spec Graphic (Bento visual style from mockup) */}
              <div className="rounded-lg bg-[#0a0b10] border border-white/10 p-3.5 font-mono text-xs flex flex-col gap-2">
                <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-white/10 pb-1.5">
                  <span className="text-slate-400">PIPELINE: MATCH TELEMETRY &gt; GEMINI REASONING &gt; WIN PROBABILITY</span>
                  <span className="text-emerald-400 font-semibold">&lt; 240ms P99 Inference</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1 text-[11px]">
                  <div className="p-2 rounded bg-[#161824] border border-white/10">
                    <span className="text-slate-400">Match Simulation</span>
                    <div className="text-[#00f0ff] font-bold mt-1">Multi-Variable</div>
                  </div>
                  <div className="p-2 rounded bg-[#161824] border border-white/10">
                    <span className="text-slate-400">Reasoning Core</span>
                    <div className="text-purple-400 font-bold mt-1">Google AI Studio</div>
                  </div>
                  <div className="p-2 rounded bg-[#161824] border border-white/10">
                    <span className="text-slate-400">Forecast Accuracy</span>
                    <div className="text-emerald-400 font-bold mt-1">88.4% Precision</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 mt-4">
              <div className="flex flex-wrap items-center gap-1.5">
                {['Google AI Studio', 'Gemini API', 'React 19', 'TypeScript', 'Tailwind'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded bg-[#181a26] border border-white/10 text-slate-400 text-[10px] font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  const proj = PROJECTS.find(p => p.id === 'cricprec')!;
                  onOpenLiveModal(proj);
                }}
                className="text-[#00f0ff] font-mono text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold"
              >
                <span>Launch Live Studio Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* CARD: WhatPing & 24Observe (Ollasoftware Production Systems - NDA Compliant) */}
        {filteredProjects.find(p => p.id === 'whatping-24observe') && (
          <div className="md:col-span-8 rounded-xl border border-emerald-500/30 bg-[#121420]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(101,242,181,0.2)] transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-bold tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    OLLASOFTWARE PRODUCTION INFRA
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[10px] font-semibold">
                    NDA COMPLIANT SPEC
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const proj = PROJECTS.find(p => p.id === 'whatping-24observe')!;
                      onOpenLiveModal(proj);
                    }}
                    className="p-1.5 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-colors"
                    title="Open in Sandbox Frame"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href="https://whatping.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-colors flex items-center gap-1 text-[11px] font-mono"
                    title="Visit whatping.com"
                  >
                    <span>whatping.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://24observe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-[#00f0ff] transition-colors flex items-center gap-1 text-[11px] font-mono"
                    title="Visit 24observe.com"
                  >
                    <span>24observe.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors font-headline">
                  WhatPing & 24Observe: Enterprise Observability & Uptime Telemetry Suite
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                  Developed production-grade observability tools during internship at <a href="https://ollasoftware.com" target="_blank" rel="noreferrer" className="text-emerald-300 underline font-medium">Ollasoftware</a> (Victor Chasex). Engineered high-frequency ICMP/HTTP network diagnostic probing engines (<span className="text-[#00f0ff] font-mono text-xs">whatping.com</span>) and 24/7 infrastructure observability and alert dispatchers (<span className="text-emerald-400 font-mono text-xs">24observe.com</span>). Handled under strict NDA protocols.
                </p>
              </div>

              {/* Architecture Spec Graphic */}
              <div className="rounded-lg bg-[#0a0b10] border border-white/10 p-3.5 font-mono text-xs flex flex-col gap-2">
                <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-white/10 pb-1.5">
                  <span className="text-slate-400">PIPELINE: DISTRIBUTED SYNTHETIC PROBES &gt; LATENCY HISTOGRAM &gt; 24/7 INCIDENT ENGINE</span>
                  <span className="text-emerald-400 font-semibold">&lt; 5ms Probe Resolution</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1 text-[11px]">
                  <div className="p-2 rounded bg-[#161824] border border-white/10">
                    <span className="text-slate-400">whatping.com</span>
                    <div className="text-[#00f0ff] font-bold mt-1">Synthetic Ping Probes</div>
                  </div>
                  <div className="p-2 rounded bg-[#161824] border border-white/10">
                    <span className="text-slate-400">24observe.com</span>
                    <div className="text-emerald-400 font-bold mt-1">24/7 Uptime Engine</div>
                  </div>
                  <div className="p-2 rounded bg-[#161824] border border-white/10">
                    <span className="text-slate-400">Company</span>
                    <div className="text-purple-300 font-bold mt-1">Ollasoftware (Victor Chasex)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 mt-4">
              <div className="flex flex-wrap items-center gap-1.5">
                {['whatping.com', '24observe.com', 'ollasoftware.com', 'Observability', 'Uptime Telemetry', 'NDA Cleared'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded bg-[#181a26] border border-white/10 text-slate-400 text-[10px] font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => toggleArchitecture('whatping-24observe')}
                className="font-mono text-xs text-emerald-300 hover:text-white flex items-center gap-1 font-semibold"
              >
                <span>{expandedArchitectureId === 'whatping-24observe' ? 'Hide NDA Sanitized Spec' : 'Inspect Sanitized Architecture'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedArchitectureId === 'whatping-24observe' ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {expandedArchitectureId === 'whatping-24observe' && (
              <div className="mt-3 p-3.5 rounded bg-[#0a0b10] border border-emerald-500/30 text-xs font-mono text-slate-300 space-y-1">
                <p className="text-emerald-400 font-bold">// SANITIZED TECHNICAL HIGHLIGHTS (NDA COMPLIANT):</p>
                <p>• Distributed ICMP, HTTP/S, and TCP synthetic handshake check engines for enterprise endpoints.</p>
                <p>• Telemetry ingestion tracking packet loss percentages, jitter bounds, and millisecond latency percentiles.</p>
                <p>• Anomaly detection alerts triggered when downtime thresholds or latency SLA violations occur.</p>
                <p>• Production deployments verified by Ollasoftware (Victor Chasex Pvt. Ltd.), HSR Layout, Bengaluru.</p>
              </div>
            )}
          </div>
        )}

        {/* CARD 2: Project-IL - Live Project (Span 4) */}
        {filteredProjects.find(p => p.id === 'project-il') && (
          <div className="md:col-span-4 rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(119,1,208,0.25)] transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/40 text-purple-300 font-mono text-[11px] font-bold tracking-wider">
                  LIVE REPO LAB
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const proj = PROJECTS.find(p => p.id === 'project-il')!;
                      onOpenLiveModal(proj);
                    }}
                    className="p-1 rounded bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
                    title="Launch Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href="https://preet004.github.io/Project-IL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors font-headline">
                  Project-IL: Interactive Computational Lab
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Interactive web experiment platform demonstrating responsive visual computing, algorithm step-execution, and ultra-compact DOM rendering hosted on GitHub Pages.
                </p>
              </div>

              {/* Execution Log Mock */}
              <div className="rounded-lg bg-[#0a0b10] border border-white/10 p-3 font-mono text-[11px] text-slate-400 flex flex-col gap-1">
                <div className="text-slate-400">[RENDER_CORE] 60 FPS requestAnimationFrame loop</div>
                <div className="text-purple-400">[HOST] preet004.github.io/Project-IL</div>
                <div className="text-emerald-400">[BUNDLE_CHECK] 17.8KB Gzip // Zero deps</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400">JavaScript // Web APIs</span>
              <button
                onClick={() => {
                  const proj = PROJECTS.find(p => p.id === 'project-il')!;
                  onOpenLiveModal(proj);
                }}
                className="font-mono text-xs text-purple-300 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Live Playground</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* CARD 3: BugSense - AI Based Code Debugger (Span 6) */}
        {filteredProjects.find(p => p.id === 'bugsense') && (
          <div className="md:col-span-6 rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-purple-500/60 transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[11px] font-bold">
                  AI AGENTIC DEBUGGER
                </span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors font-headline">
                  BugSense: Autonomous AI Code Debugger & Patch Synthesizer
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Autonomous reasoning engine that ingests faulty code blocks, parses Abstract Syntax Trees (ASTs), identifies subtle race conditions or boundary exceptions, and generates verified fixes.
                </p>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                <div className="px-2.5 py-1 rounded bg-[#161824] border border-white/10 text-slate-300">
                  Patch Confidence: <span className="text-emerald-400 font-bold">92.6%</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#161824] border border-white/10 text-slate-300">
                  Parse Speed: <span className="text-[#00f0ff] font-bold">1.2s</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400">Python 3.12 // Google AI // AST</span>
              <button 
                onClick={() => toggleArchitecture('bugsense')}
                className="font-mono text-xs text-purple-300 hover:text-white flex items-center gap-1"
              >
                <span>{expandedArchitectureId === 'bugsense' ? 'Hide Details' : 'View Architecture'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedArchitectureId === 'bugsense' ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {expandedArchitectureId === 'bugsense' && (
              <div className="mt-3 p-3 rounded bg-[#0a0b10] border border-purple-500/30 text-xs font-mono text-slate-300">
                <p>Pipeline: AST Lexer &rarr; Static Code Flow Graph &rarr; Gemini Reasoning Prompt &rarr; Unified Diff Generator &rarr; Validation Sandbox.</p>
              </div>
            )}
          </div>
        )}

        {/* CARD 4: Enterprise Campus Network Design (Span 6) */}
        {filteredProjects.find(p => p.id === 'enterprise-network') && (
          <div className="md:col-span-6 rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-emerald-500/60 transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-bold">
                  CISCO ENTERPRISE INFRA
                </span>
                <Network className="w-4 h-4 text-emerald-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors font-headline">
                  Enterprise Campus Network Architecture & Defense
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Multi-department enterprise network engineered in Cisco Packet Tracer & GNS3. Features VLAN segmentation, Router-on-a-Stick Inter-VLAN routing, OSPF dynamic failover, Extended ACLs, and NAT/PAT translation.
                </p>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                <div className="px-2.5 py-1 rounded bg-[#161824] border border-white/10 text-slate-300">
                  Routing: <span className="text-emerald-400 font-bold">OSPF Dynamic</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#161824] border border-white/10 text-slate-300">
                  Security: <span className="text-[#00f0ff] font-bold">Extended ACLs + NAT</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-400">Cisco IOS // OSPF // VLANs // Wireshark</span>
              <button 
                onClick={() => toggleArchitecture('enterprise-network')}
                className="font-mono text-xs text-emerald-300 hover:text-white flex items-center gap-1"
              >
                <span>{expandedArchitectureId === 'enterprise-network' ? 'Hide Details' : 'Inspect Topology'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedArchitectureId === 'enterprise-network' ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {expandedArchitectureId === 'enterprise-network' && (
              <div className="mt-3 p-3 rounded bg-[#0a0b10] border border-emerald-500/30 text-xs font-mono text-slate-300">
                <p>Configured: VLAN 10 (Sales), VLAN 20 (Engineering), VLAN 30 (Management); 802.1Q subinterfaces, OSPF cost tuning for redundant paths, DHCP helper addresses, and PAT overload.</p>
              </div>
            )}
          </div>
        )}

        {/* CARD 5: ShopSphere MERN (Span 4) */}
        {filteredProjects.find(p => p.id === 'shopsphere') && (
          <div className="md:col-span-4 rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-5 flex flex-col justify-between hover:border-[#00f0ff]/50 transition-all group">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-[#00f0ff] font-mono text-[10px]">
                  MERN STACK
                </span>
                <Code2 className="w-4 h-4 text-slate-400 group-hover:text-[#00f0ff]" />
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-[#00f0ff]">ShopSphere: Commerce Engine</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full-stack digital storefront with JWT token security, Redux Toolkit centralized state, product catalog compound indexing in MongoDB, and administrative management portals.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 mt-3 font-mono text-[11px] text-slate-400 flex justify-between">
              <span>React // Node // Mongo</span>
              <span className="text-[#00f0ff]">P95 42ms</span>
            </div>
          </div>
        )}

        {/* CARD 6: Wireshark Traffic Analyzer (Span 4) */}
        {filteredProjects.find(p => p.id === 'network-troubleshooter') && (
          <div className="md:col-span-4 rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-5 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px]">
                  PACKET FORENSICS
                </span>
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-300">Network Traffic Forensics</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deep protocol packet capture analyzing TCP SYN/ACK handshakes, DNS resolution delays, DHCP DORA flow anomalies, and STP layer-2 loop isolation.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 mt-3 font-mono text-[11px] text-slate-400 flex justify-between">
              <span>Wireshark // Scapy // Linux</span>
              <span className="text-emerald-400">L2 - L7 Inspection</span>
            </div>
          </div>
        )}

        {/* CARD 7: MindWave & MetaFlip (Span 4) */}
        {filteredProjects.find(p => p.id === 'mindwave') && (
          <div className="md:col-span-4 rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md p-5 flex flex-col justify-between hover:border-purple-500/50 transition-all group">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[10px]">
                  NEXT.JS & SOLIDITY
                </span>
                <Layers className="w-4 h-4 text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-purple-300">MindWave & MetaFlip dApp</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-performance Next.js application suite accompanied by Solidity smart contracts deployed on Ethereum testnet with MetaMask wallet integration.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 mt-3 font-mono text-[11px] text-slate-400 flex justify-between">
              <span>Next.js // Solidity // Web3</span>
              <span className="text-purple-300">98 Lighthouse</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
