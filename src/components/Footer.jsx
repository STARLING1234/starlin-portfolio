import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-purple-500/20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Starlin Gnanaraj Sudhahar
            </h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex gap-6">
            <a href="mailto:starling2269@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+916374817073" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Phone size={24} />
            </a>
            <a href="https://www.linkedin.com/in/starlin-gnanaraj-sudhahar-003a38232/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>© 2025 Starlin Gnanaraj Sudhahar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;