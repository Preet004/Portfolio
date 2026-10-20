import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { CANDIDATE_PROFILE, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectLive?: (projectUrl: string) => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'sys.init --candidate=preet',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-[#00f0ff] font-bold">PREET_MISHRA_OS v2026.4 [TTY: pty/0]</p>
          <p className="text-slate-400">Connected to Bengaluru Node // AMC Engineering College Class of 2025-2026.</p>
          <p className="text-slate-400">Type <span className="text-purple-300 font-bold">help</span> to view available diagnostics or <span className="text-[#00f0ff] font-bold">cricprec</span> to launch the AI Studio model.</p>
        </div>
      )
    }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let result: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        result = (
          <div className="text-slate-300 space-y-1">
            <p className="text-[#00f0ff] font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              <div><span className="text-emerald-400 font-bold">ollasoftware</span> - Inspect Ollasoftware internship (NDA Safe)</div>
              <div><span className="text-emerald-400 font-bold">whatping</span> - Details on whatping.com latency engine</div>
              <div><span className="text-emerald-400 font-bold">24observe</span> - Details on 24observe.com uptime engine</div>
              <div><span className="text-purple-300 font-bold">cricprec</span> - Inspect Google AI Studio project</div>
              <div><span className="text-purple-300 font-bold">project-il</span> - Inspect Project-IL live interactive lab</div>
              <div><span className="text-purple-300 font-bold">projects</span> - List all repositories & production apps</div>
              <div><span className="text-purple-300 font-bold">skills</span> - Display full technical skill matrix</div>
              <div><span className="text-purple-300 font-bold">experience</span> - Show 4 industry internships & academics</div>
              <div><span className="text-purple-300 font-bold">net-diag</span> - Run simulated OSPF & packet trace</div>
              <div><span className="text-purple-300 font-bold">contact</span> - Show recruiter handshake info & channels</div>
            </div>
          </div>
        );
        break;

      case 'ollasoftware':
        result = (
          <div className="text-slate-300 space-y-1 bg-[#141624] p-3 rounded border border-emerald-500/30">
            <p className="text-emerald-400 font-bold flex items-center gap-1.5">
              Ollasoftware (Victor Chasex Pvt. Ltd.) — AI & Systems Intern
            </p>
            <p className="text-xs text-purple-300 font-mono">[NDA COMPLIANT TELEMETRY OVERVIEW]</p>
            <p className="text-xs text-slate-300">Tenure: August 3, 2026 – August 31, 2026 // Bengaluru (HSR Layout)</p>
            <p className="text-xs text-slate-300">CEO & Founder: Vikas Swami</p>
            <p className="text-xs text-slate-300">Production Systems Worked On: <a href="https://whatping.com" target="_blank" rel="noreferrer" className="text-[#00f0ff] underline">whatping.com</a> & <a href="https://24observe.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">24observe.com</a></p>
            <p className="text-xs text-slate-400">Scope: High-frequency ICMP/HTTP synthetic latency probes, automated network status checks, and 24/7 uptime monitoring.</p>
          </div>
        );
        break;

      case 'whatping':
        result = (
          <div className="text-slate-300 space-y-1 bg-[#141624] p-3 rounded border border-cyan-500/30">
            <p className="text-[#00f0ff] font-bold">WhatPing (whatping.com) — Network Diagnostic & Ping Telemetry</p>
            <p className="text-xs">Live URL: <a href="https://whatping.com" target="_blank" rel="noreferrer" className="text-[#00f0ff] underline">https://whatping.com</a></p>
            <p className="text-xs text-slate-400">Synthetic latency probing engine measuring response times, packet loss, and jitter across globally distributed endpoints. (Ollasoftware)</p>
          </div>
        );
        break;

      case '24observe':
        result = (
          <div className="text-slate-300 space-y-1 bg-[#141624] p-3 rounded border border-emerald-500/30">
            <p className="text-emerald-400 font-bold">24Observe (24observe.com) — 24/7 Infrastructure Observability</p>
            <p className="text-xs">Live URL: <a href="https://24observe.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">https://24observe.com</a></p>
            <p className="text-xs text-slate-400">Continuous enterprise uptime monitoring, health check dispatchers, and automated incident alert pipelines. (Ollasoftware)</p>
          </div>
        );
        break;

      case 'cricprec':
        result = (
          <div className="text-slate-300 space-y-1 bg-[#141624] p-3 rounded border border-cyan-500/30">
            <p className="text-[#00f0ff] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> CricPrec: AI Cricket Intelligence (Google AI Studio)
            </p>
            <p className="text-xs">Live URL: <a href="https://cricprec.ai.studio/" target="_blank" rel="noreferrer" className="text-[#00f0ff] underline">https://cricprec.ai.studio/</a></p>
            <p className="text-xs text-slate-400">Architecture: Gemini models, match momentum analytics, multi-factor win probability simulator.</p>
          </div>
        );
        break;

      case 'project-il':
        result = (
          <div className="text-slate-300 space-y-1 bg-[#141624] p-3 rounded border border-purple-500/30">
            <p className="text-purple-300 font-bold">Project-IL: Interactive Computational Lab</p>
            <p className="text-xs">Live URL: <a href="https://preet004.github.io/Project-IL/" target="_blank" rel="noreferrer" className="text-purple-300 underline">https://preet004.github.io/Project-IL/</a></p>
            <p className="text-xs text-slate-400">High-responsiveness visual computing engine on GitHub Pages with 60 FPS animation loops.</p>
          </div>
        );
        break;

      case 'projects':
        result = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-[#00f0ff] font-bold">FEATURED PROJECTS:</p>
            {PROJECTS.map(p => (
              <div key={p.id} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-white/5">
                <span className="font-semibold text-white">{p.title.split(':')[0]}</span>
                <span className="text-slate-400 font-mono text-[11px]">{p.tech.slice(0, 3).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        result = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">TECHNICAL SKILLS SUMMARY:</p>
            {SKILL_CATEGORIES.map(cat => (
              <div key={cat.title}>
                <p className="text-[#00f0ff] font-semibold">{cat.title}:</p>
                <p className="text-slate-400 pl-2">{cat.skills.map(s => s.name).join(' • ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        result = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-purple-300 font-bold">WORK HISTORY & ACADEMICS (4 STINTS):</p>
            <div>1. AI & Systems Intern @ <span className="text-emerald-400 font-bold">Ollasoftware</span> (Aug 2026) - whatping.com & 24observe.com [NDA Compliant]</div>
            <div>2. Full Stack Developer Intern @ <span className="text-cyan-400 font-bold">Varcons Technologies</span> (Sept 2024 - Jan 2025)</div>
            <div>3. Web Developer Intern @ <span className="text-cyan-400 font-bold">Internstech</span> (Feb 2024 - Mar 2024)</div>
            <div>4. AI/ML Intern @ <span className="text-cyan-400 font-bold">Yhills</span> (Mar 2022 - Apr 2022)</div>
            <div className="text-slate-400 pt-1">Academic: B.E. in Computer Science @ AMC Engineering College (2021-2025, CGPA 8.27/10)</div>
          </div>
        );
        break;

      case 'net-diag':
        result = (
          <div className="space-y-1 font-mono text-xs text-emerald-400 bg-black/60 p-3 rounded border border-emerald-500/30">
            <p className="text-white font-bold">[ROUTER-SIMULATOR] OSPF AREA 0 CONVERGENCE CHECK</p>
            <p>&gt; Checking LSA Database: 12 routers discovered</p>
            <p>&gt; Shortest Path First (Dijkstra) execution: 0.18ms</p>
            <p>&gt; VLAN 10, 20, 30 802.1Q subinterfaces: UP/UP</p>
            <p>&gt; Wireshark packet capture: 0 drop, 100% throughput</p>
            <p className="text-[#00f0ff] font-bold">&gt; STATUS: CONVERGED & SECURE</p>
          </div>
        );
        break;

      case 'contact':
        result = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-[#00f0ff] font-bold">RECRUITER HANDSHAKE:</p>
            <p>Name: {CANDIDATE_PROFILE.name}</p>
            <p>Email: <span className="text-[#00f0ff]">{CANDIDATE_PROFILE.email}</span></p>
            <p>Phone: <span className="text-emerald-400">{CANDIDATE_PROFILE.phone}</span></p>
            <p>LinkedIn: <a href={CANDIDATE_PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-purple-300 underline">{CANDIDATE_PROFILE.linkedin}</a></p>
            <p>GitHub: <a href={CANDIDATE_PROFILE.github} target="_blank" rel="noreferrer" className="text-purple-300 underline">{CANDIDATE_PROFILE.github}</a></p>
            <p>PGP Fingerprint: {CANDIDATE_PROFILE.pgpKey}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        result = (
          <p className="text-red-400 text-xs">
            command not found: "{inputVal}". Type <span className="text-[#00f0ff] underline cursor-pointer" onClick={() => setInputVal('help')}>help</span> for available commands.
          </p>
        );
        break;
    }

    setHistory(prev => [...prev, { command: inputVal, output: result }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0a0b10]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className={`relative flex flex-col rounded-xl border border-[#00f0ff]/30 bg-[#0d0f17] shadow-2xl shadow-[#00f0ff]/10 overflow-hidden font-mono text-xs transition-all duration-300 ${isMaximized ? 'w-full h-full' : 'w-full max-w-4xl h-[75vh]'}`}>
        
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161826] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-slate-300 text-xs font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00f0ff]" />
              preet@workstation-2026: ~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white hover:bg-white/5 rounded"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-white hover:bg-white/5 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-300 bg-[#0c0e15]">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-white font-semibold">
                <span className="text-[#00f0ff]">guest@preet:~$</span>
                <span>{h.command}</span>
              </div>
              <div className="pl-3 border-l border-white/10">{h.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 text-white">
            <span className="text-[#00f0ff]">guest@preet:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0"
              placeholder="type help, cricprec, net-diag, skills..."
              autoFocus
            />
            <button type="submit" className="text-slate-500 hover:text-[#00f0ff]">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer Quick Buttons */}
        <div className="px-4 py-2 bg-[#121422] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-500">QUICK:</span>
            {['help', 'ollasoftware', 'whatping', '24observe', 'cricprec', 'project-il', 'skills', 'net-diag'].map(c => (
              <button
                key={c}
                onClick={() => {
                  setInputVal(c);
                  setTimeout(() => inputRef.current?.focus(), 50);
                }}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00f0ff]"
              >
                {c}
              </button>
            ))}
          </div>
          <span className="text-[#00f0ff]">SESSION: ACTIVE</span>
        </div>

      </div>
    </div>
  );
};
