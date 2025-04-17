
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Shield, Lock, FileSearch, Bot, Code, Database } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: 'CVE Alert Notification Mechanism',
      type: 'Vulnerability Alert',
      description: 'Implemented a CVE alert notification mechanism to automate vulnerability tracking and alerting, enabling timely risk assessment and remediation planning within the organization.',
      technologies: ['Python', 'lib'],
      achievements: [
        'Served as team lead, guiding team members in code development',
        'Designed and Implemented the required techstacks and Softwares with NIST CVE Database',
        'Created a own mechanism that fetch the latest CVEs from third party and NVD Database',
        'Currrently, it supports Cloud,software libraries and Database techstacks'
      ],
      icon: <Bot className="h-10 w-10" />,
      image: 'https://distill.io/blog/cybersecurity-cve-alerts/images/banner.jpg',
    },
    {
      title: 'Shayera AI - Virtual Assistant for PC',
      type: 'AI & Development',
      description: 'Led a team of three members to create a voice-controlled virtual assistant for computers using artificial intelligence for voice recognition and response.',
      technologies: ['Python', 'AI', 'Voice Recognition', 'Natural Language Processing'],
      achievements: [
        'Served as team lead, guiding team members in code development',
        'Implemented voice control functionality with AI-powered recognition',
        'Created a responsive virtual assistant that can perform various computer tasks',
        'Established foundation for future development of more advanced AI assistant models'
      ],
      icon: <Bot className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    },
    {
      title: 'Neural Network from Scratch in TensorFlow',
      type: 'Machine Learning',
      description: 'Completed a guided project through Coursera to implement a neural network from scratch using TensorFlow and solve a multi-class classification problem.',
      technologies: ['TensorFlow', 'Python', 'Neural Networks', 'Machine Learning', 'Classification'],
      achievements: [
        'Implemented neural network architecture from scratch using TensorFlow',
        'Successfully solved multi-class classification problems',
        'Gained deeper understanding of neural network fundamentals',
        'Applied machine learning concepts to practical problems'
      ],
      icon: <Code className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    },
    {
      title: 'Exposing Vulnerable IP Cameras around the Globe',
      type: 'Security Research',
      description: 'Led a team of four members to experiment with ways to find vulnerable IP cameras globally with limited access, as part of a project organized by the College Research Development Department.',
      technologies: ['Security Research', 'Network Security', 'Vulnerability Assessment', 'OSINT'],
      achievements: [
        'Served as project lead for a security research initiative',
        'Developed methodology to identify vulnerable IP cameras',
        'Demonstrated real-world security vulnerabilities in IoT devices',
        'Contributed to awareness of IoT security issues'
      ],
      icon: <Shield className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31',
    },
  ];
  
  return (
    <section id="projects" className="py-20 bg-cyber-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-cyber-secondary/10 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-accent/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
            <span className="text-cyber-secondary">#</span> Featured Projects
          </h2>
          <p className="text-cyber-muted max-w-2xl mx-auto">
            A selection of my technical projects demonstrating expertise in security, 
            AI development, and research initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {projects.map((project, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg text-left transition-all ${
                activeProject === index
                  ? 'bg-cyber-accent/10 border border-cyber-accent'
                  : 'bg-cyber-darker border border-cyber-light/10 hover:border-cyber-light/30'
              }`}
              onClick={() => setActiveProject(index)}
            >
              <div className={`${
                activeProject === index ? 'text-cyber-accent' : 'text-cyber-muted'
              }`}>
                {project.icon}
              </div>
              <h3 className={`text-lg font-medium mt-2 ${
                activeProject === index ? 'text-cyber-accent' : 'text-cyber-text'
              }`}>
                {project.title}
              </h3>
              <p className="text-cyber-muted text-sm mt-1">{project.type}</p>
            </button>
          ))}
        </div>
        
        <div className="bg-cyber-darker p-6 md:p-8 rounded-lg border border-cyber-light/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-cyber-accent text-sm font-mono mb-2">
                // {projects[activeProject].type}
              </span>
              <h3 className="text-2xl font-bold text-cyber-text mb-4">
                {projects[activeProject].title}
              </h3>
              <p className="text-cyber-muted mb-6">
                {projects[activeProject].description}
              </p>
              
              <h4 className="text-cyber-accent font-medium mb-2 font-mono">Key Achievements:</h4>
              <ul className="space-y-2 mb-6">
                {projects[activeProject].achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight size={16} className="text-cyber-secondary mr-2 mt-1 shrink-0" />
                    <span className="text-cyber-text/80">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-cyber-light/10 text-cyber-text/80 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center text-cyber-accent hover:text-cyber-glow transition-colors">
                  <ExternalLink size={18} className="mr-1" />
                  <span>View Details</span>
                </button>
                <button className="flex items-center text-cyber-text hover:text-cyber-accent transition-colors">
                  <Github size={18} className="mr-1" />
                  <span>Repository</span>
                </button>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden border border-cyber-light/20 h-64 md:h-80">
              <img 
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover object-center opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
