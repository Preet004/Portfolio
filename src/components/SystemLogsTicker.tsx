import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Play, Pause, RotateCcw, ChevronDown, ChevronUp, 
  Wifi, ShieldCheck, Cpu, ArrowRight 
} from 'lucide-react';

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'SUCCESS' | 'TRACE' | 'DIAG';
  channel: 'whatping' | '24observe' | 'cricprec' | 'systems' | 'ai-studio';
  tag: string;
  message: string;
  metric?: string;
}

const INITIAL_LOG_POOL: Omit<LogEntry, 'id' | 'timestamp'>[] = [
  {
    level: 'INFO',
    channel: 'whatping',
    tag: 'PROBE:whatping',
    message: 'Synthetic ICMP echo dispatched to blr-edge-node01.ollasoftware.internal',
    metric: '1.24ms RTT // 0% loss'
  },
  {
    level: 'SUCCESS',
    channel: 'cricprec',
    tag: 'GEMINI:ai-studio',
    message: 'Multimodal win-probability tensor generated via Gemini 2.5 Flash',
    metric: '184ms inference'
  },
  {
    level: 'INFO',
    channel: '24observe',
    tag: 'OBSERVE:24observe',
    message: 'Continuous HTTP/2 synthetic probe: 200 OK on https://24observe.com/api/v1/health',
    metric: '99.998% uptime'
  },
  {
    level: 'TRACE',
    channel: 'systems',
    tag: 'ROUTER:ospf',
    message: 'OSPF Area 0.0.0.0 Link-State Update (LSU) verified on GigabitEthernet0/0/0',
    metric: 'SPF time: 84µs'
  },
  {
    level: 'SUCCESS',
    channel: 'ai-studio',
    tag: 'AST:bugsense',
    message: 'Autonomous AST syntax graph parsing complete on TypeScript AST tree',
    metric: '0 race conditions'
  },
  {
    level: 'INFO',
    channel: 'whatping',
    tag: 'PING:jitter',
    message: 'Global DNS root round-trip probe completed across 14 edge collectors',
    metric: 'jitter < 0.42ms'
  },
  {
    level: 'TRACE',
    channel: 'systems',
    tag: 'KERNEL:ebpf',
    message: 'eBPF XDP socket bypass packet filter active on eth0 interface',
    metric: '240,110 pps'
  },
  {
    level: 'SUCCESS',
    channel: 'cricprec',
    tag: 'STREAM:cricprec',
    message: 'Ball-by-ball momentum drift vector recalculated with pitch decay coefficient',
    metric: 'P99: 0.84ms'
  },
  {
    level: 'INFO',
    channel: '24observe',
    tag: 'STATUS:incident',
    message: 'Zero anomaly events across monitored enterprise endpoints (Ollasoftware NDA)',
    metric: 'Health: 100%'
  },
  {
    level: 'TRACE',
    channel: 'systems',
    tag: 'NET:wireshark',
    message: 'TCP 3-way handshake captured: SYN &rarr; SYN-ACK &rarr; ACK (Seq=0, Ack=1)',
    metric: 'Win=65535'
  }
];

export const SystemLogsTicker: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'OBSERVABILITY' | 'AI STUDIO' | 'SYSTEMS'>('ALL');
  
  const getTimestamp = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const ms = String(now.getMilliseconds()).padStart(3, '0');
    return `${h}:${m}:${s}.${ms}`;
  };

  const [logs, setLogs] = useState<LogEntry[]>(() => {
    return INITIAL_LOG_POOL.slice(0, 5).map((item, idx) => ({
      ...item,
      id: `init-${idx}`,
      timestamp: getTimestamp()
    }));
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const poolIndexRef = useRef<number>(5);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const template = INITIAL_LOG_POOL[poolIndexRef.current % INITIAL_LOG_POOL.length];
      poolIndexRef.current += 1;

      const newEntry: LogEntry = {
        ...template,
        id: `log-${Date.now()}-${Math.random()}`,
        timestamp: getTimestamp()
      };

      setLogs(prev => {
        const next = [...prev, newEntry];
        return next.length > 30 ? next.slice(next.length - 30) : next;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const filteredLogs = logs.filter(log => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'OBSERVABILITY') return log.channel === 'whatping' || log.channel === '24observe';
    if (activeFilter === 'AI STUDIO') return log.channel === 'cricprec' || log.channel === 'ai-studio';
    if (activeFilter === 'SYSTEMS') return log.channel === 'systems';
    return true;
  });

  const getLevelStyle = (level: LogEntry['level']) => {
    switch (level) {
      case 'SUCCESS':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'TRACE':
        return 'text-purple-300 bg-purple-500/10 border-purple-500/30';
      case 'DIAG':
        return 'text-amber-300 bg-amber-500/10 border-amber-500/30';
      default:
        return 'text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/30';
    }
  };

  const getChannelTagColor = (channel: LogEntry['channel']) => {
    switch (channel) {
      case 'whatping':
        return 'text-[#00f0ff]';
      case '24observe':
        return 'text-emerald-400';
      case 'cricprec':
      case 'ai-studio':
        return 'text-purple-300';
      default:
        return 'text-slate-300';
    }
  };

  return (
    <div className="w-full border-t border-white/10 bg-[#0a0b12]/95 backdrop-blur-md rounded-b-xl overflow-hidden font-mono text-xs">
      {/* Ticker Header / Control Bar */}
      <div className="flex flex-wrap items-center justify-between px-3 sm:px-4 py-2 bg-[#0e101a] border-b border-white/5 gap-2">
        {/* Left: Indicator & Title */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#65f2b5]"></span>
            <span className="font-bold text-white text-[11px] tracking-wider uppercase flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>SYSTEM LOGS // REALTIME TELEMETRY</span>
            </span>
          </div>
          <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            STREAMING (60 FPS)
          </span>
        </div>

        {/* Center: Channel Filter Pills */}
        <div className="hidden md:flex items-center gap-1 text-[10px]">
          {(['ALL', 'OBSERVABILITY', 'AI STUDIO', 'SYSTEMS'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-2 py-0.5 rounded transition-all ${
                activeFilter === filter
                  ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Right: Controls (Play/Pause, Expand/Collapse) */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded hover:bg-white/5 hover:text-[#00f0ff] transition-colors flex items-center gap-1 text-[11px]"
            title={isPlaying ? 'Pause log stream' : 'Resume log stream'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-emerald-400" />
                <span className="hidden sm:inline text-slate-400">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#00f0ff]" />
                <span className="hidden sm:inline text-slate-400">Resume</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setLogs(INITIAL_LOG_POOL.slice(0, 4).map((item, idx) => ({
                ...item,
                id: `reset-${idx}-${Date.now()}`,
                timestamp: getTimestamp()
              })));
            }}
            className="p-1 rounded hover:bg-white/5 hover:text-white transition-colors"
            title="Flush buffer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] transition-colors"
          >
            <span>{isExpanded ? 'Compact' : 'Expand'}</span>
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Scrolling Log Output Container */}
      <div
        ref={scrollRef}
        className={`px-3 sm:px-4 py-2.5 overflow-y-auto space-y-1.5 transition-all duration-300 bg-[#07080e]/95 ${
          isExpanded ? 'max-h-64' : 'max-h-24 sm:max-h-20'
        }`}
      >
        {filteredLogs.length === 0 ? (
          <div className="text-slate-500 py-2 text-center text-xs">
            No events in channel "{activeFilter}". Waiting for next telemetry packet...
          </div>
        ) : (
          filteredLogs.map((log) => (
            <div
              key={log.id}
              className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 py-0.5 border-b border-white/[0.03] text-[11px] hover:bg-white/[0.02] px-1 rounded transition-colors group"
            >
              {/* Timestamp */}
              <span className="text-slate-500 text-[10px] shrink-0 tabular-nums">
                [{log.timestamp}]
              </span>

              {/* Level Badge */}
              <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold border shrink-0 ${getLevelStyle(log.level)}`}>
                {log.level}
              </span>

              {/* Tag */}
              <span className={`font-semibold shrink-0 ${getChannelTagColor(log.channel)}`}>
                [{log.tag}]
              </span>

              {/* Message */}
              <span className="text-slate-300 truncate flex-1 min-w-[200px] group-hover:text-white transition-colors">
                {log.message}
              </span>

              {/* Metric Tag */}
              {log.metric && (
                <span className="text-slate-400 text-[10px] px-1.5 py-0.5 rounded bg-[#131622] border border-white/5 shrink-0 font-medium group-hover:border-[#00f0ff]/30 transition-colors">
                  {log.metric}
                </span>
              )}
            </div>
          ))
        )}
      </div>

      {/* Micro Status Footer */}
      <div className="px-3 sm:px-4 py-1 bg-[#090b14] border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">HOST: PREET_NODE_X86_64</span>
          <span>•</span>
          <span className="text-emerald-400">TELEMETRY_PIPELINE: ACTIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">BUFFER: {filteredLogs.length} events</span>
          <span>•</span>
          <span className="text-purple-300">OLLASOFTWARE + AI STUDIO NODES</span>
        </div>
      </div>
    </div>
  );
};
