import React, { useState } from 'react';
import { Terminal, Calendar, Menu, X, FileText, Sparkles } from 'lucide-react';

interface TopNavBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSchedule: () => void;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeSection,
  onNavigate,
  onOpenSchedule,
  onOpenResume,
  onOpenTerminal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'telemetry', label: 'Telemetry' },
    { id: 'projects', label: 'Projects' },
    { id: 'stack', label: 'Stack' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'terminal', label: 'Terminal', isAction: true },
    { id: 'resume', label: 'Verified CV', isAction: true },
  ];

  const handleLinkClick = (id: string, isAction?: boolean) => {
    if (id === 'terminal') {
      onOpenTerminal();
    } else if (id === 'resume') {
      onOpenResume();
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 inset-x-3 md:inset-x-auto md:max-w-6xl md:left-1/2 md:-translate-x-1/2 rounded-xl z-40 bg-[#121420]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-[#00f0ff]/5 transition-all">
      <div className="flex justify-between items-center w-full px-4 py-2.5">
        {/* Brand Logo / Identity Anchor */}
        <button 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="w-7 h-7 rounded border border-[#00f0ff]/40 bg-[#1c1f2e] flex items-center justify-center font-mono text-xs text-[#00f0ff] group-hover:shadow-[0_0_15px_#00f0ff] transition-all">
            <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-wider text-white group-hover:text-[#00f0ff] transition-colors">
              SYS://DEV.2026
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">
              PREET.MISHRA // BE CS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id, link.isAction)}
                className={`py-1 transition-colors relative ${
                  isActive 
                    ? 'text-[#00f0ff] font-medium' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Cluster */}
        <div className="flex items-center gap-2.5">
          {/* Live Signal Badge */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#65f2b5]"></span>
            <span className="font-mono text-[10px] text-emerald-300 font-semibold tracking-wider uppercase">
              Available 2026
            </span>
          </div>

          {/* Quick CV button */}
          <button
            onClick={onOpenResume}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded border border-purple-500/40 bg-purple-500/10 font-mono text-xs text-purple-300 hover:bg-purple-500/20 transition-all"
            title="Inspect Verified Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Schedule Screen button */}
          <button
            onClick={onOpenSchedule}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-[#00f0ff]/60 bg-[#00f0ff]/10 font-mono text-xs text-[#00f0ff] hover:bg-[#00f0ff]/20 hover:border-[#00f0ff] active:scale-95 transition-all shadow-sm shadow-[#00f0ff]/10"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Screen</span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded text-slate-300 hover:text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 px-4 py-3 bg-[#121420]/95 rounded-b-xl flex flex-col gap-2 font-mono text-xs">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id, link.isAction)}
              className="text-left py-2 px-3 rounded hover:bg-white/5 text-slate-300 hover:text-[#00f0ff] flex items-center justify-between"
            >
              <span>{link.label}</span>
              {link.id === 'terminal' && <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />}
              {link.id === 'resume' && <FileText className="w-3.5 h-3.5 text-purple-400" />}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              IMMEDIATELY AVAILABLE
            </span>
            <span>BENGALURU, IN</span>
          </div>
        </div>
      )}
    </header>
  );
};
