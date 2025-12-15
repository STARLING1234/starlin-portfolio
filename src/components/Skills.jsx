import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap } from 'lucide-react';

const Skills = () => {
  const skills = {
    'Frontend': { items: ['React.js', 'Angular', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'jQuery', 'Redux'], color: 'from-blue-500 to-cyan-500' },
    'Backend': { items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'REST APIs'], color: 'from-green-500 to-emerald-500' },
    'Database': { items: ['PostgreSQL', 'MySQL'], color: 'from-purple-500 to-pink-500' },
    'Tools & Others': { items: ['Socket.io', 'FCM', 'APN', 'WordPress', 'cPanel', 'Linux'], color: 'from-orange-500 to-red-500' }
  };

  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <Terminal size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Expertise</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, data], index) => (
            <div key={category} className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`bg-gradient-to-r ${data.color} p-3 rounded-lg`}>
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {data.items.map((skill, i) => (
                  <span key={i} className="group bg-slate-900/50 hover:bg-slate-900/80 text-purple-200 px-4 py-2 rounded-lg text-sm border border-purple-500/30 hover:border-purple-500 transition-all hover:scale-105 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;