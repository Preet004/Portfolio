import React, { useState } from 'react';
import { 
  Mail, Phone, ExternalLink, Key, Copy, Check, 
  Send, Calendar, Clock, CheckCircle2, Sparkles, MessageSquare 
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface RecruiterHandshakeProps {
  onOpenResume: () => void;
}

export const RecruiterHandshake: React.FC<RecruiterHandshakeProps> = ({ onOpenResume }) => {
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    roleType: 'Full-Stack & Systems Engineer',
    preferredSlot: 'Tomorrow afternoon',
    message: ''
  });

  const handleCopyPgp = () => {
    navigator.clipboard.writeText(CANDIDATE_PROFILE.pgpKey);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section className="w-full my-8" id="contact">
      <div className="rounded-2xl border border-[#00f0ff]/40 bg-[#121420]/95 backdrop-blur-xl p-6 sm:p-10 relative overflow-hidden neon-cyan-glow">
        
        {/* Ambient corner watermarks */}
        <div className="absolute -right-6 -bottom-6 font-mono text-[80px] sm:text-[110px] font-bold text-white/[0.03] select-none pointer-events-none">
          PORT:2026
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* Left Column: Handshake Vision & Direct Actions */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
              <span>// RECRUITER HANDSHAKE PROTOCOL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-headline">
              Ready to deploy high-velocity engineering to your team.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Seeking Full-Time Systems, Full-Stack, Infrastructure, or Agentic AI Engineering opportunities starting 2026. 
              Open to Bengaluru, Tier-1 Relocation, or High-Impact Remote engineering teams. 
              Let's schedule an initial screening or technical code dive.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`mailto:${CANDIDATE_PROFILE.email}`}
                className="px-5 py-3 rounded-lg border border-[#00f0ff] bg-[#00f0ff]/15 font-mono text-xs font-semibold text-[#00f0ff] hover:bg-[#00f0ff]/25 transition-all flex items-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{CANDIDATE_PROFILE.email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-3 rounded-lg border border-white/20 bg-[#181a28] font-mono text-xs text-slate-300 hover:text-white hover:bg-[#1e2133] transition-all flex items-center gap-1.5"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>

              <button
                onClick={handleCopyPgp}
                className="px-4 py-3 rounded-lg border border-white/20 bg-[#181a28] font-mono text-xs text-slate-300 hover:border-white/40 transition-all flex items-center gap-2"
              >
                <Key className="w-4 h-4 text-purple-400" />
                <span>{copiedPgp ? 'PGP Copied!' : 'COPY PGP: 0x9F3A...'}</span>
              </button>
            </div>

            {/* Recruiter direct calendar slot selector */}
            <div className="mt-4 p-4 rounded-xl bg-[#0a0b10] border border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#00f0ff] font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> FAST-TRACK 20-MIN TECHNICAL SCREEN
                </span>
                <span className="text-emerald-400">INSTANT DISPATCH</span>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <input
                    type="text"
                    required
                    placeholder="Your Name (e.g. Sarah Connor)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="p-2.5 rounded bg-[#141624] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="p-2.5 rounded bg-[#141624] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
                  />
                  <input
                    type="text"
                    placeholder="Company / Org (e.g. Google, Datadog)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="p-2.5 rounded bg-[#141624] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
                  />
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="p-2.5 rounded bg-[#141624] border border-white/10 text-slate-300 focus:outline-none focus:border-[#00f0ff]"
                  >
                    <option value="Full-Stack & Systems Engineer">Full-Stack & Systems Engineer</option>
                    <option value="AI / ML & Agentic Engineer">AI / ML & Agentic Engineer</option>
                    <option value="Network & Infrastructure Engineer">Network & Infrastructure Engineer</option>
                    <option value="General Software Engineer">General Software Engineer (Fresher)</option>
                  </select>

                  <div className="sm:col-span-2">
                    <textarea
                      rows={2}
                      placeholder="Optional briefing notes or JD link..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 rounded bg-[#141624] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
                    />
                  </div>

                  <div className="sm:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded bg-[#00f0ff] text-slate-950 font-bold font-mono text-xs hover:shadow-[0_0_15px_#00f0ff] transition-all flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Screening Request</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Transmitted to {CANDIDATE_PROFILE.email}! Preet will respond within 4 hours.</span>
                  </div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-slate-400 hover:text-white underline"
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Direct Comms Channels */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3 bg-[#0a0b10]/80 p-5 sm:p-6 rounded-xl border border-white/10 font-mono text-xs">
            <div className="text-slate-400 text-[11px] pb-2 border-b border-white/10 uppercase font-semibold flex items-center justify-between">
              <span>Direct Comms Channels</span>
              <span className="text-[#00f0ff]">ONLINE</span>
            </div>

            {/* GitHub */}
            <a
              href={CANDIDATE_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-[#141624] hover:bg-[#1c2033] text-slate-200 hover:text-[#00f0ff] transition-all group border border-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>github.com/Preet004</span>
              </div>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-[#00f0ff]" />
            </a>

            {/* LinkedIn */}
            <a
              href={CANDIDATE_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-[#141624] hover:bg-[#1c2033] text-slate-200 hover:text-[#00f0ff] transition-all group border border-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
                <span>linkedin.com/in/preet-mishra-a35ab922a</span>
              </div>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-[#00f0ff]" />
            </a>

            {/* Phone */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#141624] text-slate-200 border border-white/5">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-mono">{CANDIDATE_PROFILE.phone}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold">CALL / WHATSAPP</span>
            </div>

            {/* Live links highlight */}
            <div className="p-3 rounded-lg bg-[#141624]/70 border border-purple-500/20 text-slate-300 space-y-1 text-xs">
              <div className="text-[11px] text-purple-300 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" /> PRODUCTION SYSTEMS & LABS:
              </div>
              <div className="text-[11px] text-slate-400">
                • <a href="https://whatping.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline font-mono">whatping.com</a> & <a href="https://24observe.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline font-mono">24observe.com</a> (<a href="https://ollasoftware.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline">Ollasoftware</a> - NDA Cleared)
              </div>
              <div className="text-[11px] text-slate-400">
                • <a href="https://cricprec.ai.studio/" target="_blank" rel="noreferrer" className="text-[#00f0ff] underline font-mono">cricprec.ai.studio</a> (AI Studio LLM Engine)
              </div>
              <div className="text-[11px] text-slate-400">
                • <a href="https://preet004.github.io/Project-IL/" target="_blank" rel="noreferrer" className="text-purple-300 underline font-mono">preet004.github.io/Project-IL</a> (Interactive Lab)
              </div>
            </div>

            {/* SLA Strip */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> RESPONSE SLA: &lt; 4 HOURS
              </span>
              <span>TIMEZONE: IST (UTC+5:30)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
