import React from 'react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenCV: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenCV, onNavigate }) => {
  return (
    <footer className="w-full bg-[#0a0b10] border-t border-white/10 mt-12 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-headline text-base font-bold text-white flex items-center gap-2">
            <span>SYS://DEV.2026</span>
            <span className="text-[#00f0ff]">//</span>
            <span className="text-slate-300">PREET MISHRA</span>
          </div>
          <div className="font-mono text-[11px] text-slate-500">
            © 2026 CORE_SYSTEMS_ENGINEERING. AMC CS CLASS OF 2025-2026. ALL PROTOCOLS RESERVED.
          </div>
        </div>

        {/* Links Array */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-mono text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('projects')} 
            className="hover:text-[#00f0ff] transition-colors"
          >
            Architecture Specs
          </button>
          <button 
            onClick={() => onNavigate('telemetry')} 
            className="text-[#00f0ff] underline font-medium hover:text-white transition-colors"
          >
            Live Telemetry
          </button>
          <button 
            onClick={onOpenTerminal} 
            className="hover:text-[#00f0ff] transition-colors"
          >
            CLI Terminal
          </button>
          <button 
            onClick={onOpenCV} 
            className="hover:text-purple-300 transition-colors"
          >
            Verified CV
          </button>
          <a 
            href={CANDIDATE_PROFILE.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#00f0ff] transition-colors"
          >
            GitHub
          </a>
          <a 
            href={CANDIDATE_PROFILE.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#00f0ff] transition-colors"
          >
            LinkedIn
          </a>
          <button 
            onClick={() => onNavigate('contact')} 
            className="hover:text-emerald-400 transition-colors"
          >
            Recruiter Comms
          </button>
        </div>

      </div>
    </footer>
  );
};
