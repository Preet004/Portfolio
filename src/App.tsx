/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { TelemetryBanner } from './components/TelemetryBanner';
import { ProjectsBento } from './components/ProjectsBento';
import { SkillMatrix } from './components/SkillMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { RecruiterHandshake } from './components/RecruiterHandshake';
import { Footer } from './components/Footer';
import { LiveProjectModal } from './components/LiveProjectModal';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';
import { Project, PROJECTS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('telemetry');
  const [activeLiveProject, setActiveLiveProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLaunchAiStudio = () => {
    const cricprec = PROJECTS.find(p => p.id === 'cricprec');
    if (cricprec) {
      setActiveLiveProject(cricprec);
    }
  };

  return (
    <div className="bg-[#0d0e13] text-[#e3e1e9] min-h-screen selection:bg-[#00f0ff]/30 selection:text-[#dbfcff] bg-grid-mesh relative overflow-x-hidden flex flex-col">
      {/* Ambient Light Wells */}
      <div className="pointer-events-none fixed top-[-10rem] left-1/2 -translate-x-1/2 w-[72rem] h-[32rem] bg-gradient-to-b from-[#00f0ff]/10 via-[#7701d0]/10 to-transparent blur-[120px] -z-10"></div>
      <div className="pointer-events-none fixed top-[45rem] right-[-10rem] w-[45rem] h-[35rem] bg-[#7701d0]/10 blur-[140px] -z-10"></div>
      <div className="pointer-events-none fixed top-[90rem] left-[-10rem] w-[45rem] h-[35rem] bg-[#00f0ff]/05 blur-[140px] -z-10"></div>

      {/* Top Fixed Header */}
      <TopNavBar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenSchedule={() => scrollToSection('contact')}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 w-full flex flex-col gap-6">
        {/* Hero Section */}
        <HeroSection
          onExploreProjects={() => scrollToSection('projects')}
          onOpenCV={() => setIsResumeOpen(true)}
          onOpenSchedule={() => scrollToSection('contact')}
          onLaunchAiStudio={handleLaunchAiStudio}
        />

        {/* Live Telemetry / Benchmark Bento Strip */}
        <TelemetryBanner />

        {/* Featured Projects Bento (Highlighting CricPrec, Project-IL, BugSense, Network Infra) */}
        <ProjectsBento
          onOpenLiveModal={(project) => setActiveLiveProject(project)}
        />

        {/* Technical Skill Matrix & Telemetry Bars */}
        <SkillMatrix />

        {/* Experience & Academic Credentials Timeline */}
        <ExperienceTimeline
          onOpenCV={() => setIsResumeOpen(true)}
        />

        {/* Recruiter Handshake & Comms Protocol */}
        <RecruiterHandshake
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Shared Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCV={() => setIsResumeOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Live Interactive Project Modal (Embeds CricPrec or Project-IL with device switchers) */}
      <LiveProjectModal
        project={activeLiveProject}
        onClose={() => setActiveLiveProject(null)}
      />

      {/* Dual Resume / Verified CV Modal */}
      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive CLI Terminal Sandbox */}
      <InteractiveTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
