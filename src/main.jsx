import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Download, Briefcase, GraduationCap, Award, Instagram, Twitter } from 'lucide-react'
import './style.css';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Online Chess Game",
      description: "Real-time multiplayer chess game with matchmaking, move validation, and game history tracking",
      tech: ["React", "Socket.io", "Node.js", "Chess.js"],
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800&h=600&fit=crop"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with cart, payments, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-green-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      color: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
    }
  ];

  const skills = [
    { name: "Frontend", items: ["React", "Vue", "TypeScript", "Tailwind CSS"], icon: Code },
    { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"], icon: Zap },
    { name: "Design", items: ["Figma", "UI/UX", "Responsive Design", "Animation"], icon: Palette }
  ];

  const experience = [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Building custom websites and web applications for clients. Specializing in responsive design and modern JavaScript frameworks."
    },
    {
      title: "Personal Projects & Learning",
      company: "Independent Study",
      period: "2022 - Present",
      description: "Developed multiple full-stack projects using React, Node.js, and MongoDB. Continuously learning new technologies and best practices through online courses and documentation."
    },
    {
      title: "Open Source Contributor",
      company: "GitHub Community",
      period: "2023 - Present",
      description: "Contributing to open-source projects, fixing bugs, and collaborating with developers worldwide to improve code quality."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Vindhya Institute of Technology and Science, Satna M.P.",
      period: "2021 - 2025 (Expected)",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management, Software Engineering"
    }
  ];

  const certifications = [
    "FreeCodeCamp Responsive Web Design",
    "Udemy - The Complete Web Developer Bootcamp",
    "Coursera - React Specialization"
  ];

  const menuItems = [
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Landing Page / Hero Section */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row relative">
        {/* Mobile Menu Toggle - Fixed position */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden fixed top-6 right-6 z-[200] p-3 rounded-lg bg-black border-2 border-white/30 hover:border-white/50 transition-all shadow-2xl"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 md:p-16 flex flex-col justify-between relative min-h-screen">
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center max-w-md px-4 md:px-0 pt-20 md:pt-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Gaurav<br />Mishra
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm a passionate aspiring full-stack developer 
              who loves building innovative web applications. 
              My passion has driven me to learn continuously 
              and create projects that solve real-world 
              problems. Welcome to my world.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/iamgauravmisra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-mishra-8aa936288/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/gaurav_misra_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-gray-500 text-sm px-4 md:px-0">
            © 2024 Gaurav Mishra. All rights reserved.
          </div>
        </div>

        {/* Right Side - Navigation Only (Desktop) */}
        <div className="hidden md:flex md:w-1/2 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black items-center justify-center">
          {/* Navigation Menu - Desktop centered */}
          <nav className="flex flex-col gap-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-center text-2xl font-medium hover:text-gray-300 transition-colors relative group"
              >
                {item.name}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Mobile Navigation - Full Screen */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/98 z-[90] flex items-center justify-center">
          <nav className="flex flex-col gap-10 items-center">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-3xl font-medium hover:text-gray-300 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a passionate aspiring full-stack developer currently pursuing my degree in Computer Science. 
              I love building web applications and turning ideas into reality through code. Eager to learn and grow in the tech industry.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, working on personal projects, 
              or participating in coding challenges to sharpen my skills.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
            <button
              onClick={() => window.open('Gaurav Mishra Resume.pdf', '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-gray-300" />
              <h3 className="text-3xl font-bold">Experience & Activities</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-300 mb-1">{job.title}</h4>
                      <p className="text-xl text-slate-300">{job.company}</p>
                    </div>
                    <span className="text-slate-400 mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-gray-300" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-300 mb-1">{edu.degree}</h4>
                      <p className="text-xl text-slate-300">{edu.school}</p>
                    </div>
                    <span className="text-slate-400 mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-gray-300" />
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${project.color}`}></div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    View Project <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <Icon className="w-12 h-12 text-gray-300 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-slate-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12">
            Have a project in mind? Let's create something amazing together!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:gauravmishrawork@gmail.com"
              className="p-4 bg-slate-800 rounded-full hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/iamgauravmisra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 rounded-full hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-mishra-8aa936288/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 rounded-full hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-base"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-6 py-4 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all resize-none text-base"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (Demo only)');
                }}
                className="w-full px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2024 Gaurav Mishra. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
)