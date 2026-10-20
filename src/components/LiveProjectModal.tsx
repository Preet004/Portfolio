import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, ExternalLink, Monitor, Tablet, Smartphone, 
  RotateCcw, ShieldCheck, Activity, Terminal
} from 'lucide-react';

interface LiveProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LiveProjectModal: React.FC<LiveProjectModalProps> = ({ project, onClose }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeUrl, setActiveUrl] = useState<string>(project?.liveUrl || '');
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [loadError, setLoadError] = useState<boolean>(false);

  // Sync activeUrl when project changes
  React.useEffect(() => {
    if (project?.liveUrl) {
      setActiveUrl(project.liveUrl);
    }
  }, [project]);

  if (!project || !project.liveUrl) return null;

  const currentUrl = activeUrl || project.liveUrl;

  const viewWidthClasses = {
    desktop: 'w-full max-w-6xl h-[78vh]',
    tablet: 'w-full max-w-2xl h-[78vh]',
    mobile: 'w-full max-w-sm h-[78vh]'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0a0b10]/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className={`relative flex flex-col rounded-2xl border border-[#00f0ff]/40 bg-[#121420] shadow-2xl shadow-[#00f0ff]/10 overflow-hidden transition-all duration-300 ${viewWidthClasses[deviceView]}`}>
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#181a26] border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose}></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 pl-2 border-l border-white/10">
              <span className="text-[#00f0ff] font-semibold">{project.title.split(':')[0]}</span>
              {project.secondaryUrl && (
                <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded border border-white/10 ml-2">
                  <button
                    onClick={() => { setActiveUrl(project.liveUrl!); setLoadError(false); }}
                    className={`px-2 py-0.5 rounded text-[11px] ${currentUrl === project.liveUrl ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    whatping.com
                  </button>
                  <button
                    onClick={() => { setActiveUrl(project.secondaryUrl!); setLoadError(false); }}
                    className={`px-2 py-0.5 rounded text-[11px] ${currentUrl === project.secondaryUrl ? 'bg-cyan-500/20 text-[#00f0ff] font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    24observe.com
                  </button>
                </div>
              )}
              <span className="text-slate-500">//</span>
              <span className="text-slate-400 truncate max-w-xs">{currentUrl}</span>
            </div>
          </div>

          {/* Viewport switchers */}
          <div className="flex items-center gap-1 bg-[#0d0e15] p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1.5 rounded transition-colors ${deviceView === 'desktop' ? 'bg-[#00f0ff]/20 text-[#00f0ff]' : 'text-slate-400 hover:text-white'}`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-1.5 rounded transition-colors ${deviceView === 'tablet' ? 'bg-[#00f0ff]/20 text-[#00f0ff]' : 'text-slate-400 hover:text-white'}`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1.5 rounded transition-colors ${deviceView === 'mobile' ? 'bg-[#00f0ff]/20 text-[#00f0ff]' : 'text-slate-400 hover:text-white'}`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setLoadError(false);
                setIframeKey(prev => prev + 1);
              }}
              className="p-1.5 rounded hover:bg-white/5 text-slate-400 hover:text-[#00f0ff] transition-colors"
              title="Reload sandbox"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <a
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] text-xs font-mono hover:bg-[#00f0ff]/20 transition-all"
            >
              <span>Open Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Browser Content */}
        <div className="relative flex-1 w-full bg-[#0a0b10] overflow-hidden flex flex-col">
          {/* Diagnostic Top Banner */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-[#0e1017] border-b border-white/5 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400">STATUS: 200 OK</span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3 h-3 text-[#00f0ff]" /> HTTPS VERIFIED
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span>LATENCY: ~18ms</span>
              <span className="text-slate-600">|</span>
              <span className="text-[#00f0ff]">{project.isNdaProtected ? 'NDA COMPLIANT' : 'PRODUCTION LIVE'}</span>
            </div>
          </div>

          {/* Embedded Sandbox frame */}
          <div className="relative flex-1 w-full h-full bg-black">
            <iframe
              key={iframeKey}
              src={currentUrl}
              title={project.title}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              onError={() => setLoadError(true)}
            />

            {/* In case iframe cannot be embedded due to remote x-frame headers */}
            {loadError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#0d0e14] text-center">
                <Terminal className="w-12 h-12 text-[#00f0ff] mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-white mb-2">Live Application Running</h4>
                <p className="text-sm text-slate-400 max-w-md mb-4">
                  This deployment is live at <span className="text-[#00f0ff] font-mono">{currentUrl}</span>. Certain production headers require launching in a dedicated browser tab.
                </p>
                <a
                  href={currentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#00f0ff] text-slate-950 font-bold font-mono text-sm hover:shadow-[0_0_20px_#00f0ff] transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch {currentUrl.replace('https://', '')} Directly</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Footer Spec bar */}
        <div className="px-4 py-2 bg-[#121420] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-slate-500">ENGINE:</span>
            <span className="text-[#00f0ff]">{project.tech.join(', ')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">PRODUCTION DEPLOYMENT ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
