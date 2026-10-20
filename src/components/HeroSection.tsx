import React, { useState } from 'react';
import { 
  Terminal, Download, ExternalLink, RefreshCw, 
  Wifi, Layers, Sparkles, CheckCircle2, Copy, Check
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenCV: () => void;
  onOpenSchedule: () => void;
  onLaunchAiStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenCV,
  onOpenSchedule,
  onLaunchAiStudio,
}) => {
  const [pingLatency, setPingLatency] = useState<number>(12);
  const [isPinging, setIsPinging] = useState<boolean>(false);
  const [copiedPgp, setCopiedPgp] = useState<boolean>(false);

  const handleRePing = () => {
    setIsPinging(true);
    setTimeout(() => {
      setPingLatency(Math.floor(Math.random() * 8) + 9);
      setIsPinging(false);
    }, 450);
  };

  const copyPgpKey = () => {
    navigator.clipboard.writeText(CANDIDATE_PROFILE.pgpKey);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  return (
    <section className="relative pt-8 pb-4" id="hero">
      {/* Telemetry Host Status & Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2.5 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 backdrop-blur font-mono text-[11px] text-[#00f0ff] font-semibold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
          <span>FULL-STACK & SYSTEMS // {CANDIDATE_PROFILE.classYear}</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border border-white/10 bg-[#121420] font-mono text-[11px] text-slate-400">
          <span>HOST: PREET_NODE_X86_64</span>
          <span className="text-slate-600">::</span>
          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> SYS_OK
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 font-mono text-[11px] text-purple-300">
          <Sparkles className="w-3 h-3 text-purple-400" />
          <span>AI STUDIO POWERED</span>
        </div>
      </div>

      {/* Main Grid: Headline & Terminal Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Vision & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.08]">
            BUILDING RESILIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dbfcff] via-[#00f0ff] to-[#dcb8ff] text-glow-cyan">DISTRIBUTED SYSTEMS</span> & NEXT-GEN AGENTIC RUNTIMES.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
            Computer Science Fresher from <span className="text-white font-medium">AMC Engineering College</span> (CGPA 8.27). 
            Engineered enterprise observability and synthetic latency diagnostics at <span className="text-emerald-400 font-medium">Ollasoftware</span> (<span className="text-slate-300 font-mono text-xs">whatping.com</span> & <span className="text-slate-300 font-mono text-xs">24observe.com</span>), Google AI Studio intelligent analytics pipelines, and full-stack MERN backends. 
            Completed 4 engineering internships across <span className="text-[#00f0ff] font-medium">Ollasoftware</span>, <span className="text-[#00f0ff] font-medium">Varcons</span>, <span className="text-[#00f0ff] font-medium">Internstech</span>, and <span className="text-[#00f0ff] font-medium">Yhills</span>.
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-5 py-3 rounded-lg border border-[#00f0ff] bg-[#00f0ff]/10 font-mono text-xs font-semibold text-[#00f0ff] hover:bg-[#00f0ff]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] active:scale-95 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#00f0ff]" />
              <span>EXPLORE PROJECT LABS</span>
            </button>

            <button
              onClick={onOpenCV}
              className="px-5 py-3 rounded-lg border border-white/20 bg-[#161824] font-mono text-xs font-semibold text-slate-200 hover:border-[#00f0ff]/50 hover:bg-[#1a1d2d] active:scale-95 transition-all flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 text-purple-400 group-hover:text-[#00f0ff] transition-colors" />
              <span>VERIFIED CV (PDF)</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#0a0b10] border border-white/10 text-slate-400">
                SHA256:827A
              </span>
            </button>

            <button
              onClick={onLaunchAiStudio}
              className="px-4 py-3 rounded-lg border border-purple-500/50 bg-purple-500/10 font-mono text-xs font-semibold text-purple-300 hover:bg-purple-500/20 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>LAUNCH CRICPREC (AI STUDIO)</span>
            </button>
          </div>

          {/* Micro specs strip */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-slate-400 font-mono text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-[#00f0ff] font-semibold">LANGS:</span>
              <span className="text-slate-300">TypeScript, Python, Node.js, Java, SQL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-purple-400 font-semibold">AI ARCH:</span>
              <span className="text-slate-300">Google AI Studio, Gemini 2.5, LangChain</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-semibold">SYSTEMS:</span>
              <span className="text-slate-300">Cisco IOS, OSPF, Wireshark, Docker</span>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Sandbox */}
        <div className="lg:col-span-5">
          <div className="w-full rounded-xl border border-white/15 bg-[#121420]/90 backdrop-blur-xl shadow-2xl shadow-[#00f0ff]/5 overflow-hidden font-mono text-xs">
            {/* Terminal Header */}
            <div className="px-4 py-2.5 bg-[#181a28] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-[11px] text-slate-400 font-medium">pty/tty0 :: preet.sys</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <Wifi className="w-3.5 h-3.5" />
                <span>LIVE</span>
              </div>
            </div>

            {/* Terminal Code Body */}
            <div className="p-4 flex flex-col gap-2.5 text-slate-300 text-[12px] leading-relaxed bg-[#0d0f17]">
              <div className="flex items-center gap-2 text-white">
                <span className="text-[#00f0ff]">guest@portfolio:~$</span>
                <span>preet.fetchProfile()</span>
                <span className="w-1.5 h-4 bg-[#00f0ff] animate-pulse inline-block"></span>
              </div>

              <div className="pl-2 border-l border-white/10 text-slate-300 font-mono text-[11px] flex flex-col gap-1">
                <div className="text-slate-500">// telemetry handshake complete in {pingLatency}ms</div>
                <div><span className="text-purple-400">"candidate"</span>: <span className="text-[#dbfcff]">"{CANDIDATE_PROFILE.name}"</span>,</div>
                <div><span className="text-purple-400">"education"</span>: <span className="text-slate-200">"B.E. Computer Science // CGPA {CANDIDATE_PROFILE.cgpa}"</span>,</div>
                <div><span className="text-purple-400">"institution"</span>: <span className="text-slate-400">"{CANDIDATE_PROFILE.institution}"</span>,</div>
                <div><span className="text-purple-400">"specialization"</span>: <span className="text-emerald-400">"AI Studio + Enterprise Observability + Full-Stack"</span>,</div>
                <div><span className="text-purple-400">"metrics"</span>: &#123;</div>
                <div className="pl-4"><span className="text-slate-400">"internships_completed"</span>: <span className="text-[#00f0ff]">4</span>,</div>
                <div className="pl-4"><span className="text-slate-400">"production_telemetry"</span>: <span className="text-emerald-400 font-semibold">"whatping.com, 24observe.com"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">"live_projects"</span>: <span className="text-[#00f0ff] font-semibold">"CricPrec (AI Studio), Project-IL"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">"core_stacks"</span>: <span className="text-[#00f0ff]">"React, Node, Python, Network Probing"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">"nda_clearance"</span>: <span className="text-purple-300">"STRICTLY_COMPLIANT"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">"cgpa"</span>: <span className="text-[#00f0ff]">"8.27 / 10"</span></div>
                <div>&#125;,</div>
                <div><span className="text-purple-400">"clearance_status"</span>: <span className="text-emerald-400">"IMMEDIATELY_AVAILABLE"</span></div>
              </div>

              {/* Terminal Bottom Controls */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-500">EXEC_MEM: 12.8MB // V8</span>
                <button
                  onClick={handleRePing}
                  disabled={isPinging}
                  className="text-[#00f0ff] hover:underline flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <RefreshCw className={`w-3 h-3 ${isPinging ? 'animate-spin' : ''}`} />
                  <span>{isPinging ? 'pinging...' : 're-ping profile'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
