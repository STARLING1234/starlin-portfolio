import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Code, Briefcase, GraduationCap, Award, ChevronRight, Menu, X, ArrowRight, Sparkles, Terminal, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Nurture',
      tech: 'React.js + Node.js',
      description: 'Hospital management system with appointment scheduling and real-time communication',
      features: ['Physicians Module', 'Patient Portal', 'Admin Dashboard', 'Real-time Chat'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'SAP Portal',
      tech: 'Angular + Node.js',
      description: 'Job portal with employer and job seeker modules',
      features: ['Job Posting', 'Applicant Tracking', 'Role-based Access', 'Advanced Search'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'PickupDrop',
      tech: 'React.js + Node.js',
      description: 'Real-time delivery tracking system with live updates',
      features: ['Task Assignment', 'Live Tracking', 'Push Notifications', 'Voice Calls'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'KEC Inventory',
      tech: 'Laravel',
      description: 'Inventory management and order tracking system',
      features: ['Admin Module', 'Customer Portal', 'Order Management', 'Inventory Tracking'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: '11Systems',
      tech: 'Angular + Node.js',
      description: 'Healthcare platform with telemedicine features',
      features: ['Appointment System', 'Video Calls', 'Patient Monitoring', 'Chat Integration'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Swim School',
      tech: 'Laravel',
      description: 'Multi-tenant school management platform',
      features: ['Multi-tenant Architecture', 'Student Management', 'Attendance Tracking', 'Skills Assessment'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
            <Zap size={16} className="text-purple-400" />
            <span className="text-purple-300 text-sm">Portfolio</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">A selection of projects I've worked on</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.name}</h3>
                <div className={`bg-gradient-to-br ${project.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Code size={24} className="text-white" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  {project.tech}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="space-y-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full`}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;