import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      name: 'Nurture',
      tech: 'React.js + Node.js',
      description: 'Hospital management system with appointment scheduling and real-time communication',
      features: ['Physicians Module', 'Patient Portal', 'Admin Dashboard', 'Real-time Chat']
    },
    {
      name: 'SAP Portal',
      tech: 'Angular + Node.js',
      description: 'Job portal with employer and job seeker modules',
      features: ['Job Posting', 'Applicant Tracking', 'Role-based Access', 'Advanced Search']
    },
    {
      name: 'PickupDrop',
      tech: 'React.js + Node.js',
      description: 'Real-time delivery tracking system with live updates',
      features: ['Task Assignment', 'Live Tracking', 'Push Notifications', 'Voice Calls']
    },
    {
      name: 'KEC Inventory',
      tech: 'Laravel',
      description: 'Inventory management and order tracking system',
      features: ['Admin Module', 'Customer Portal', 'Order Management', 'Inventory Tracking']
    },
    {
      name: '11Systems',
      tech: 'Angular + Node.js',
      description: 'Healthcare platform with telemedicine features',
      features: ['Appointment System', 'Video Calls', 'Patient Monitoring', 'Chat Integration']
    },
    {
      name: 'Swim School',
      tech: 'Laravel',
      description: 'Multi-tenant school management platform',
      features: ['Multi-tenant Architecture', 'Student Management', 'Attendance Tracking', 'Skills Assessment']
    }
  ];

  const skills = {
    'Frontend': ['React.js', 'Angular', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'jQuery', 'Redux'],
    'Backend': ['Node.js', 'Express.js', 'Laravel', 'PHP', 'REST APIs'],
    'Database': ['PostgreSQL', 'MySQL'],
    'Tools & Others': ['Socket.io', 'FCM', 'APN', 'WordPress', 'cPanel', 'Linux']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Starlin G.S
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 hover:bg-purple-900/50 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl">
              SG
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Starlin Gnanaraj Sudhahar
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-8">Full Stack Developer</p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            2+ years of experience crafting scalable web applications with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+916374817073" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all transform hover:scale-105">
              <Phone size={20} /> Contact Me
            </a>
            <a href="https://www.linkedin.com/in/starlin-gnanaraj-sudhahar-003a38232/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all transform hover:scale-105">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with over 2 years of hands-on experience in building robust web applications. My expertise spans across modern frontend frameworks like React.js and Angular, coupled with powerful backend technologies including Node.js and Laravel.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in creating seamless user experiences, implementing real-time features, and developing scalable architectures. My project portfolio includes healthcare systems, job portals, delivery tracking platforms, and multi-tenant applications.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-400">Full Stack Web Developer</h3>
                <p className="text-xl text-gray-300">Agnitio Systems</p>
                <p className="text-gray-400">March 2023 – Present</p>
              </div>
            </div>
            <div className="space-y-4 pl-16">
              <div className="flex items-start gap-2">
                <ChevronRight className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300">Developed and maintained multiple full-stack applications using React.js, Angular, Node.js, and Laravel</p>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300">Implemented real-time features using Socket.io and push notifications with FCM and APNs</p>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300">Built secure REST APIs with authentication and role-based access control</p>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300">Deployed applications on Linux servers and managed production environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-purple-400">{project.name}</h3>
                  <Code className="text-pink-400" size={24} />
                </div>
                <p className="text-sm text-purple-300 mb-3">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-purple-900/50 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-500/30 hover:border-purple-500 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-400">B.E. – Computer Science & Engineering</h3>
                  <p className="text-gray-300">Dr. N.G.P. Institute of Technology</p>
                  <p className="text-gray-400">2019 – 2023 | 83.5%</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-400">HSC – Higher Secondary</h3>
                  <p className="text-gray-300">Nyruthi Vidhya Bhavan Matric Hr. Sec. School</p>
                  <p className="text-gray-400">67.3%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:starling2269@gmail.com" className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full transition-all transform hover:scale-105">
              <Mail size={24} /> Email Me
            </a>
            <a href="tel:+916374817073" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-full transition-all transform hover:scale-105">
              <Phone size={24} /> Call Me
            </a>
            <a href="https://www.linkedin.com/in/starlin-gnanaraj-sudhahar-003a38232/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-full transition-all transform hover:scale-105">
              <Linkedin size={24} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Starlin Gnanaraj Sudhahar. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React + Vite</p>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;