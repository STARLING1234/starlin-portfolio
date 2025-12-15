import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <GraduationCap size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Academic Background</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 animate-slide-right group">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">B.E. – Computer Science & Engineering</h3>
                <p className="text-xl text-gray-300 mb-1">Dr. N.G.P. Institute of Technology</p>
                <p className="text-gray-400">2019 – 2023</p>
                <div className="mt-3 inline-block bg-purple-900/50 px-4 py-2 rounded-full border border-purple-500/30">
                  <span className="text-purple-300 font-semibold">83.5%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 animate-slide-left group">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-pink-400 mb-2">HSC – Higher Secondary</h3>
                <p className="text-xl text-gray-300 mb-1">Nyruthi Vidhya Bhavan Matric Hr. Sec. School</p>
                <div className="mt-3 inline-block bg-pink-900/50 px-4 py-2 rounded-full border border-pink-500/30">
                  <span className="text-pink-300 font-semibold">67.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;