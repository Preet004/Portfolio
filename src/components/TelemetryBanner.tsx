import React from 'react';
import { Sparkles, Award, Zap, Briefcase, Activity, ShieldCheck } from 'lucide-react';
import { SystemLogsTicker } from './SystemLogsTicker';

export const TelemetryBanner: React.FC = () => {
  return (
    <section className="w-full my-4" id="telemetry">
      <div className="rounded-xl bg-gradient-to-r from-white/10 via-[#00f0ff]/20 to-purple-500/20 p-[1px]">
        <div className="bg-[#121420]/95 backdrop-blur-md rounded-xl overflow-hidden flex flex-col">
          
          {/* Top: 4 Stat Bento Strip */}
          <div className="p-5 grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="flex flex-col gap-1 px-2 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>AI STUDIO RUNTIMES</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#dbfcff] font-headline tracking-tight">
                Gemini 2.5
              </div>
              <div className="text-xs text-slate-400">
                Live at <span className="text-[#00f0ff] font-mono">cricprec.ai.studio</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-1 px-2 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>PROD OBSERVABILITY</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-300 font-headline tracking-tight flex items-baseline gap-1">
                <span>WhatPing + 24Obs</span>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1">
                <span>Ollasoftware</span>
                <span className="text-slate-600">•</span>
                <span className="text-purple-300 font-mono text-[10px]">NDA Cleared</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-1 px-2 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>PRODUCTION INTERNSHIPS</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00f0ff] font-headline tracking-tight">
                4 Rigorous Stints
              </div>
              <div className="text-xs text-slate-400 truncate">
                Ollasoftware, Varcons, Internstech, Yhills
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-1 px-2 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-300 font-headline tracking-tight">
                8.27 CGPA
              </div>
              <div className="text-xs text-slate-400">
                B.E. Computer Science // AMC College
              </div>
            </div>
          </div>

          {/* Bottom: Scrolling System Logs Component */}
          <SystemLogsTicker />

        </div>
      </div>
    </section>
  );
};
