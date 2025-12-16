import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, ArrowRight } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <Mail size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's create something amazing together!
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12 animate-on-scroll">
          <a href="mailto:starling2269@gmail.com" className="group bg-slate-800/30 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/30 transition-colors">
              <Mail size={28} className="text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">starling2269@gmail.com</p>
          </a>

          <a href="tel:+916374817043" className="group bg-slate-800/30 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="bg-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600/30 transition-colors">
              <Phone size={28} className="text-pink-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+91 6374817043</p>
          </a>

          <a href="https://www.linkedin.com/in/starlin-gnanaraj-sudhahar-003a38232/" target="_blank" rel="noopener noreferrer" className="group bg-slate-800/30 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors">
              <FaLinkedinIn className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </a>
        </div>

        <div className="animate-on-scroll flex justify-center gap-4 flex-wrap">
          {/* Email Button */}
          <a
            href="mailto:starling2269@gmail.com"
            className="inline-flex items-center gap-2 
              bg-gradient-to-r from-purple-600 to-pink-600 
              hover:from-purple-700 hover:to-pink-700 
              px-6 py-3 rounded-full 
              transition-all transform hover:scale-105 
              shadow-lg shadow-purple-500/40 
              text-base font-medium"
            >
            <Mail size={18} />
            <span>Send Me a Message</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;