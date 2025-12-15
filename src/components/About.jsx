import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Introduction</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 animate-slide-right group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-600/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                <Code className="text-purple-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-purple-400">Who I Am</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate Full Stack Developer with over 2 years of hands-on experience in building robust web applications. My expertise spans across modern frontend frameworks like <span className="text-purple-400 font-semibold">React.js</span> and <span className="text-purple-400 font-semibold">Angular</span>, coupled with powerful backend technologies including <span className="text-pink-400 font-semibold">Node.js</span> and <span className="text-pink-400 font-semibold">Laravel</span>.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 animate-slide-left group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-pink-600/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                <Terminal className="text-pink-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-pink-400">What I Do</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in creating seamless user experiences, implementing real-time features, and developing scalable architectures. My project portfolio includes healthcare systems, job portals, delivery tracking platforms, and multi-tenant applications that serve thousands of users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;