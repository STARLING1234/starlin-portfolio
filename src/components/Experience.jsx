import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Developed and maintained multiple full-stack applications using React.js, Angular, Node.js, and Laravel',
    'Implemented real-time features using Socket.io and push notifications with FCM and APNs',
    'Built secure REST APIs with authentication and role-based access control',
    'Deployed applications on Linux servers and managed production environments'
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <Briefcase size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Career</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
        </div>

        <div className="relative animate-on-scroll">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 ml-0 md:ml-4">
            <div className="flex items-start gap-6">
              <div className="hidden md:block bg-purple-600 p-4 rounded-xl shadow-lg shadow-purple-500/50 animate-pulse-slow">
                <Briefcase size={32} />
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">Full Stack Web Developer</h3>
                  <p className="text-xl text-gray-300 mb-1">Agnitio Systems</p>
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>March 2023 – Present</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                      <ChevronRight className="text-purple-400 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" size={20} />
                      <p className="text-gray-300 text-lg">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;