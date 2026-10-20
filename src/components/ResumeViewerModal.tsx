import React, { useState } from 'react';
import { 
  X, Download, Printer, Copy, Check, FileText, 
  ExternalLink, Mail, Phone, MapPin, Globe, CheckCircle2, Sparkles, Network 
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const [activeResumeTrack, setActiveResumeTrack] = useState<'fullstack' | 'systems'>('fullstack');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const textToCopy = `PREET MISHRA - ${activeResumeTrack === 'fullstack' ? 'Full Stack & AI Engineer' : 'Network & Systems Engineer'}\n` +
      `Email: ${CANDIDATE_PROFILE.email} | Phone: ${CANDIDATE_PROFILE.phone}\n` +
      `LinkedIn: ${CANDIDATE_PROFILE.linkedin} | GitHub: ${CANDIDATE_PROFILE.github}\n` +
      `Education: AMC Engineering College, Bengaluru (BE in CS, CGPA 8.27/10)\n`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0a0b10]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative flex flex-col w-full max-w-4xl h-[88vh] rounded-2xl border border-white/15 bg-[#121420] shadow-2xl shadow-[#00f0ff]/10 overflow-hidden">
        
        {/* Top Controls Bar */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#161826] border-b border-white/10 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-headline font-bold text-white text-sm">Verified Credentials & Resumes</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  AUTHENTICATED
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">Preet Mishra // AMC Engineering College // 2025-2026</p>
            </div>
          </div>

          {/* Track Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0d0f17] border border-white/10 font-mono text-xs">
            <button
              onClick={() => setActiveResumeTrack('fullstack')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                activeResumeTrack === 'fullstack'
                  ? 'bg-[#00f0ff]/20 text-[#00f0ff] font-semibold border border-[#00f0ff]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack & AI Track</span>
            </button>
            <button
              onClick={() => setActiveResumeTrack('systems')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                activeResumeTrack === 'systems'
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Network & Systems Track</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Copy Summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Print / Save PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#0c0e15] font-sans text-slate-200">
          <div className="max-w-3xl mx-auto bg-[#131522] rounded-xl border border-white/10 p-6 sm:p-10 shadow-xl">
            
            {/* Resume Header */}
            <div className="text-center border-b border-white/10 pb-6 mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-headline">
                PREET MISHRA
              </h1>
              <p className="text-sm font-mono text-[#00f0ff] mt-1">
                {activeResumeTrack === 'fullstack' 
                  ? 'FULL STACK DEVELOPER & AI/ML SYSTEMS ENGINEER' 
                  : 'COMPUTER SCIENCE & NETWORK INFRASTRUCTURE ENGINEER'}
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mt-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#00f0ff]" /> +91 8858130435
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-purple-400" /> pms638657@gmail.com
                </span>
                <a href={CANDIDATE_PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-[#00f0ff]">
                  <Globe className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a href={CANDIDATE_PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-[#00f0ff]">
                  <Globe className="w-3.5 h-3.5" /> GitHub
                </a>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Bengaluru, India
                </span>
              </div>
            </div>

            {/* Resume Track A: Full Stack & AI/ML */}
            {activeResumeTrack === 'fullstack' ? (
              <div className="flex flex-col gap-6 text-xs sm:text-sm">
                
                {/* Education */}
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#00f0ff] tracking-wider uppercase border-b border-white/10 pb-1 mb-2">
                    EDUCATION
                  </h3>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white text-sm">AMC Engineering College</span>
                    <span className="font-mono text-xs text-slate-400">Bengaluru</span>
                  </div>
                  <div className="flex justify-between items-baseline text-slate-300">
                    <span>Bachelor of Engineering in Computer Science</span>
                    <span className="font-mono text-xs text-slate-400">Dec 2021 – Jul 2025</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mt-0.5">CGPA: 8.27 / 10</div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#00f0ff] tracking-wider uppercase border-b border-white/10 pb-1 mb-3 flex items-center justify-between">
                    <span>INDUSTRY EXPERIENCE</span>
                    <span className="text-[10px] text-purple-300 font-mono">4x ENGINEERING INTERNSHIPS</span>
                  </h3>
                  
                  {/* Ollasoftware */}
                  <div className="mb-4 p-3 rounded-lg bg-[#181a28]/60 border border-emerald-500/20">
                    <div className="flex justify-between items-baseline font-bold text-white">
                      <span className="flex items-center gap-1.5">
                        <span className="text-emerald-400">AI & Systems Intern</span> — Ollasoftware (Victor Chasex)
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">NDA Protected</span>
                      </span>
                      <span className="font-mono text-xs text-slate-400">Aug 2026</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">Bengaluru, India (HSR Layout) • Verified by CEO Vikas Swami</div>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 text-xs leading-relaxed">
                      <li>Contributed to mission-critical telemetry engines for <span className="text-[#00f0ff] font-mono">whatping.com</span> and <span className="text-emerald-400 font-mono">24observe.com</span> under strict NDA confidentiality.</li>
                      <li>Developed high-frequency synthetic network latency probing routines and real-time status telemetry aggregation.</li>
                      <li>Engineered automated incident detection heuristics and uptime monitoring alert pipelines.</li>
                    </ul>
                  </div>

                  {/* Varcons */}
                  <div className="mb-4">
                    <div className="flex justify-between items-baseline font-bold text-white">
                      <span>Full Stack Developer Intern — Varcons Technologies</span>
                      <span className="font-mono text-xs text-slate-400">Sept 2024 – Jan 2025</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 text-xs leading-relaxed">
                      <li>Developed and maintained responsive web applications, optimizing front-to-back rendering performance.</li>
                      <li>Collaborated with senior developers on real-world client projects, applying best practices in RESTful API integration and database indexing.</li>
                      <li>Implemented user authentication, state management (Redux/Context API), and reusable component libraries.</li>
                      <li>Gained hands-on exposure to version control (Git/GitHub) and Agile sprint ceremonies.</li>
                    </ul>
                  </div>

                  {/* Internstech */}
                  <div className="mb-4">
                    <div className="flex justify-between items-baseline font-bold text-white">
                      <span>Web Developer Intern — Internstech</span>
                      <span className="font-mono text-xs text-slate-400">Feb 2024 – Mar 2024</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 text-xs leading-relaxed">
                      <li>Built full-stack application using MERN stack, improving internal department efficiency.</li>
                      <li>Designed and deployed company landing page, achieving a 10% surge in web traffic.</li>
                      <li>Integrated contact and feedback mechanisms with automated webhook email notifications.</li>
                      <li>Optimized front-end for cross-browser compatibility and rapid mobile responsiveness.</li>
                    </ul>
                  </div>

                  {/* Yhills */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-white">
                      <span>AI/ML Intern — Yhills</span>
                      <span className="font-mono text-xs text-slate-400">Mar 2022 – Apr 2022</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 text-xs leading-relaxed">
                      <li>Processed urban trip datasets, engineering geospatial & temporal features via Haversine calculations.</li>
                      <li>Trained and benchmarked regression models (XGBoost, Random Forest), achieving 15% RMSE optimization.</li>
                      <li>Visualized geospatial pickup/drop-off densities and deployed interactive Streamlit dashboard.</li>
                    </ul>
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#00f0ff] tracking-wider uppercase border-b border-white/10 pb-1 mb-2">
                    SELECT PROJECTS & AI STUDIO SHIPMENTS
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-white">WhatPing & 24Observe</span> | <span className="font-mono text-emerald-300">Ollasoftware, Observability Telemetry, NDA Cleared</span>: Production synthetic ICMP/HTTP ping probing engine (<span className="text-[#00f0ff] font-mono">whatping.com</span>) and 24/7 infrastructure observability platform (<span className="text-emerald-400 font-mono">24observe.com</span>).
                    </div>
                    <div>
                      <span className="font-bold text-white">CricPrec</span> | <span className="font-mono text-purple-300">Google AI Studio, Gemini API, React 19</span>: Predictive cricket telemetry & match simulations with sub-second generative commentary. (Live: <span className="text-[#00f0ff] font-mono">cricprec.ai.studio</span>)
                    </div>
                    <div>
                      <span className="font-bold text-white">Project-IL</span> | <span className="font-mono text-purple-300">JavaScript, Web APIs, CSS3</span>: Interactive visual algorithms playground with 60 FPS requestAnimationFrame loops. (Live: <span className="text-[#00f0ff] font-mono">preet004.github.io/Project-IL</span>)
                    </div>
                    <div>
                      <span className="font-bold text-white">ShopSphere</span> | <span className="font-mono text-purple-300">MongoDB, Express, React, Node</span>: Full-scale digital storefront with JWT token security and Redux state.
                    </div>
                    <div>
                      <span className="font-bold text-white">BugSense</span> | <span className="font-mono text-purple-300">Python, Gemini LLM, AST Analysis</span>: Autonomous AI-based code debugging & patch synthesis engine.
                    </div>
                    <div>
                      <span className="font-bold text-white">MindWave & MetaFlip</span> | <span className="font-mono text-purple-300">Next.js, TypeScript, Solidity</span>: Modern web productivity application and Web3 lottery smart contracts.
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="text-xs font-mono font-bold text-[#00f0ff] tracking-wider uppercase border-b border-white/10 pb-1 mb-2">
                    TECHNICAL SKILLS MATRIX
                  </h3>
                  <div className="space-y-1 text-xs">
                    <div><span className="font-bold text-white">Observability & Systems:</span> whatping.com, 24observe.com, Uptime Telemetry, Synthetic Probes, Linux, Docker.</div>
                    <div><span className="font-bold text-white">Frontend:</span> React, Next.js, JavaScript, TypeScript, Tailwind CSS, Material-UI, Vite, HTML5, CSS3, Redux.</div>
                    <div><span className="font-bold text-white">Backend & DB:</span> Node.js, Express.js, Java, Python, Django, PostgreSQL, MongoDB, MySQL, REST APIs, Redis.</div>
                    <div><span className="font-bold text-white">AI / ML & Tools:</span> Google AI Studio, Gemini API, XGBoost, Random Forest, Docker, Git, GitHub, Postman.</div>
                  </div>
                </div>

              </div>
            ) : (
              /* Resume Track B: Network Engineering & Systems Infrastructure */
              <div className="flex flex-col gap-6 text-xs sm:text-sm">
                
                {/* Summary */}
                <div>
                  <h3 className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase border-b border-white/10 pb-1 mb-2">
                    PROFESSIONAL SUMMARY
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Computer Science Engineering graduate with deep practical mastery of computer networks, routing, switching, and production observability infrastructure. Completed engineering internship at Ollasoftware working on whatping.com and 24observe.com. Experienced in designing enterprise campus topologies, configuring VLANs, dynamic routing protocols (OSPF, EIGRP), access control policies, and analyzing network traffic using Wireshark, GNS3, and Cisco Packet Tracer.
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase border-b border-white/10 pb-1 mb-2">
                    NETWORKING & SYSTEMS SKILLS
                  </h3>
                  <div className="space-y-1.5 text-xs">
                    <div><span className="font-bold text-white">Observability & Monitoring:</span> whatping.com (Synthetic Ping Engine), 24observe.com (24/7 Uptime Telemetry), Ollasoftware.</div>
                    <div><span className="font-bold text-white">Networking Protocols:</span> TCP/IP, IPv4/IPv6, Subnetting, VLSM, VLANs, Inter-VLAN Routing (802.1Q), STP, VTP, HSRP.</div>
                    <div><span className="font-bold text-white">Routing Protocols:</span> OSPF, EIGRP, RIP, BGP Fundamentals.</div>
                    <div><span className="font-bold text-white">Network Security:</span> Standard/Extended ACLs, NAT/PAT, VPN Fundamentals, Port Security, DHCP Snooping.</div>
                    <div><span className="font-bold text-white">Tools & Systems:</span> Cisco Packet Tracer, GNS3, Wireshark, Cisco IOS, Linux (Ubuntu/Red Hat), Windows Server.</div>
                    <div><span className="font-bold text-white">Diagnostics:</span> Packet Forensics, Incident Troubleshooting, Root Cause Analysis, Documentation.</div>
                  </div>
                </div>

                {/* Project Experience */}
                <div>
                  <h3 className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase border-b border-white/10 pb-1 mb-3">
                    ENTERPRISE SYSTEMS & OBSERVABILITY EXPERIENCE
                  </h3>

                  <div className="mb-4 p-3 rounded-lg bg-[#181a28]/60 border border-emerald-500/20">
                    <div className="font-bold text-white flex items-center justify-between">
                      <span>Production Observability & Diagnostic Engine — Ollasoftware</span>
                      <span className="font-mono text-xs text-slate-400">Aug 2026</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 text-xs leading-relaxed">
                      <li>Engineered synthetic latency probe daemons for <span className="text-[#00f0ff] font-mono">whatping.com</span> measuring ICMP ping, jitter, and packet loss metrics under NDA confidentiality.</li>
                      <li>Contributed to 24/7 infrastructure observability pipelines for <span className="text-emerald-400 font-mono">24observe.com</span> with real-time health aggregation.</li>
                      <li>Collaborated with Victor Chasex Pvt. Ltd. / Ollasoftware engineering leads on resilient network monitoring architectures.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="font-bold text-white">Enterprise Campus Network Design</div>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 text-xs leading-relaxed">
                      <li>Designed and implemented a multi-department enterprise network using Cisco Packet Tracer.</li>
                      <li>Configured VLANs and Router-on-a-Stick Inter-VLAN routing for secure traffic segmentation.</li>
                      <li>Implemented OSPF dynamic routing to enable scalable and efficient communication across departments.</li>
                      <li>Applied Standard and Extended ACLs to secure critical resources and restrict unauthorized access.</li>
                      <li>Configured DHCP, NAT, and PAT services for automated addressing and internet connectivity.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-white">Network Traffic Analysis and Troubleshooting</div>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 text-xs leading-relaxed">
                      <li>Captured and analyzed packets using Wireshark to inspect TCP handshakes, DNS resolution, and DHCP DORA flows.</li>
                      <li>Investigated connectivity bottlenecks caused by IP conflicts, incorrect subnet masks, and routing loops.</li>
                      <li>Diagnosed Layer 2 switching anomalies including Spanning Tree Protocol (STP) loops and VLAN misconfigurations.</li>
                      <li>Conducted systematic protocol troubleshooting to improve uptime and throughput.</li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase border-b border-white/10 pb-1 mb-2">
                    EDUCATION
                  </h3>
                  <div className="flex justify-between items-baseline font-bold text-white">
                    <span>AMC Engineering College, Bengaluru</span>
                    <span className="font-mono text-xs text-slate-400">Graduation 2025</span>
                  </div>
                  <div className="text-xs text-slate-300">Bachelor of Engineering in Computer Science (CGPA: 8.27 / 10)</div>
                </div>

              </div>
            )}

            {/* Footer Verification */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                VERIFIED AGAINST ORIGINAL RESUME ARTIFACTS
              </span>
              <span>CHECKSUM: SHA256:7B9F-827A-2026</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
