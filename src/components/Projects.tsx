
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Shield, Lock, FileSearch } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: 'Corporate Network Penetration Test',
      type: 'Offensive Security',
      description: 'Conducted a comprehensive penetration test for a financial services company, identifying critical vulnerabilities in their network infrastructure and providing actionable remediation steps.',
      technologies: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'OWASP ZAP'],
      achievements: [
        'Identified and documented 12 critical security vulnerabilities',
        'Provided detailed remediation strategies prioritized by risk level',
        'Developed custom exploitation tools for unique environment constraints',
        'Delivered executive report and technical findings documentation',
      ],
      icon: <Shield className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    },
    {
      title: 'Security Compliance Framework Implementation',
      type: 'Governance & Compliance',
      description: 'Developed and implemented a comprehensive security compliance framework aligned with ISO 27001 and NIST standards for a healthcare organization handling sensitive patient data.',
      technologies: ['ISO 27001', 'NIST', 'HIPAA', 'GRC Tools', 'Risk Assessment'],
      achievements: [
        'Successfully guided client through ISO 27001 certification process',
        'Reduced compliance gaps by 94% within 6 months',
        'Implemented automated compliance monitoring tools',
        'Created training materials for staff security awareness',
      ],
      icon: <FileSearch className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    },
    {
      title: 'Cloud Security Architecture Design',
      type: 'Defensive Security',
      description: 'Designed and implemented a secure cloud architecture for a SaaS startup, incorporating security controls across all layers of the application stack and CI/CD pipeline.',
      technologies: ['AWS Security', 'Azure Sentinel', 'IAM', 'DevSecOps', 'Container Security'],
      achievements: [
        'Implemented zero-trust architecture across cloud resources',
        'Reduced attack surface by 76% through proper segmentation',
        'Integrated security testing into CI/CD pipeline',
        'Designed disaster recovery plan with 99.99% availability',
      ],
      icon: <Lock className="h-10 w-10" />,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
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
            A selection of my professional cybersecurity projects demonstrating technical 
            expertise across various security domains.
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
