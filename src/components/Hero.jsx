import { useState, useEffect } from 'react';
import { Mail, ChevronRight, ArrowRight } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';

const Hero = ({ scrollToSection }) => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* <div className="mb-8 animate-scale-in">
          <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl shadow-purple-500/50 animate-pulse-slow relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-md"></div>
            <span className="relative z-10">SG</span>
          </div>
        </div> */}

        <div className="animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Starlin Gnanaraj Sudhahar
          </h1>
          <div className="text-3xl md:text-4xl text-purple-300 mb-8 h-12 font-mono">
            {text}<span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-up-delayed leading-relaxed">
          Crafting <span className="text-purple-400 font-semibold">scalable</span> and <span className="text-pink-400 font-semibold">innovative</span> web solutions with 2+ years of experience in modern technologies
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-up-more-delayed">
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75"
          >
            <Mail className="w-5 h-5" />
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://www.linkedin.com/in/starlin-gnanaraj-sudhahar-003a38232/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-full transition-all transform hover:scale-105 border border-purple-500/30 hover:border-purple-500/60"
          >
            <FaLinkedinIn className="w-5 h-5" />
            <span>LinkedIn</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-16 animate-bounce-slow">
          <button onClick={() => scrollToSection('about')} className="text-purple-400 hover:text-purple-300 transition-colors">
            <ChevronRight size={32} className="rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;