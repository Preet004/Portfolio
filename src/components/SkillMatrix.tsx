import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Bot, Network, Cloud, Search, CheckCircle } from 'lucide-react';

export const SkillMatrix: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-4 h-4 text-[#00f0ff]" />;
      case 'smart_toy':
        return <Bot className="w-4 h-4 text-purple-400" />;
      case 'settings_ethernet':
        return <Network className="w-4 h-4 text-emerald-400" />;
      default:
        return <Cloud className="w-4 h-4 text-[#00f0ff]" />;
    }
  };

  const getAccentBarColor = (accent: string) => {
    switch (accent) {
      case 'purple':
        return 'bg-gradient-to-r from-purple-500 to-fuchsia-400';
      case 'emerald':
        return 'bg-gradient-to-r from-emerald-500 to-teal-300';
      default:
        return 'bg-gradient-to-r from-[#00f0ff] to-cyan-300';
    }
  };

  return (
    <section className="flex flex-col gap-6 my-8" id="stack">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="font-mono text-xs text-purple-400 tracking-wider uppercase mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span>// RIGOROUS TECHNICAL FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skill Matrix & Telemetry
          </h2>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. OSPF, Gemini, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-lg bg-[#121420] border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff] w-48 sm:w-64"
            />
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_CATEGORIES.map((category) => {
          const matchingSkills = category.skills.filter(s =>
            searchQuery === '' ? true : s.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (matchingSkills.length === 0 && searchQuery !== '') return null;

          return (
            <div
              key={category.title}
              className="p-5 rounded-xl border border-white/10 bg-[#121420]/80 backdrop-blur-md flex flex-col gap-4 hover:border-white/20 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                {getPillarIcon(category.icon)}
                <h4 className="font-headline text-base font-semibold text-white truncate">
                  {category.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-3 font-mono text-xs">
                {matchingSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1">
                    <div className="flex justify-between items-baseline text-slate-200">
                      <span className="font-medium truncate pr-2">{skill.name}</span>
                      <span className="text-[11px] text-slate-400 shrink-0 font-mono">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="h-1.5 w-full bg-[#1c1f2e] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${getAccentBarColor(category.accent)}`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>

                    {skill.sublabel && (
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>{skill.sublabel}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
