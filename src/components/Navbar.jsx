import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient cursor-pointer" onClick={() => scrollToSection('hero')}>
            &lt;Starlin.dev/&gt;
          </div>
          
          <div className="hidden md:flex space-x-1">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => { scrollToSection(item.toLowerCase()); setIsMenuOpen(false); }}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.toLowerCase() ? 'bg-purple-600/20 text-purple-400 shadow-lg shadow-purple-500/20' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-purple-500/20 animate-slide-down">
          <div className="px-4 py-4 space-y-2">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => { scrollToSection(item.toLowerCase()); setIsMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 hover:bg-purple-900/30 rounded-lg transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;