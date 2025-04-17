
import { useState } from 'react';
import { 
  Shield, Lock, Database, Network, Cloud, Terminal, FileCode, 
  FileSearch, Bug, CheckCircle, Settings, AlertTriangle
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'offensive', label: 'Offensive Security' },
    { id: 'defensive', label: 'Defensive Security' },
    { id: 'compliance', label: 'Compliance & Governance' },
  ];
  
  const skills = [
    {
      title: 'Penetration Testing',
      icon: <Bug className="h-10 w-10 text-cyber-accent" />,
      description: 'Authorized simulated attacks to evaluate the security of systems and identify vulnerabilities.',
      categories: ['offensive'],
    },
    {
      title: 'Vulnerability Assessment',
      icon: <FileSearch className="h-10 w-10 text-cyber-secondary" />,
      description: 'Systematic review of security weaknesses in systems and applications.',
      categories: ['offensive', 'defensive'],
    },
    {
      title: 'Security Architecture',
      icon: <Shield className="h-10 w-10 text-cyber-accent" />,
      description: 'Designing security systems that protect against unauthorized access and data breaches.',
      categories: ['defensive'],
    },
    {
      title: 'Incident Response',
      icon: <AlertTriangle className="h-10 w-10 text-cyber-secondary" />,
      description: 'Methodology for handling security breaches and restoring normal operations.',
      categories: ['defensive'],
    },
    {
      title: 'Network Security',
      icon: <Network className="h-10 w-10 text-cyber-accent" />,
      description: 'Protection of network infrastructure and data from unauthorized access.',
      categories: ['defensive'],
    },
    {
      title: 'Cloud Security',
      icon: <Cloud className="h-10 w-10 text-cyber-secondary" />,
      description: 'Securing cloud environments and applications against modern threats.',
      categories: ['defensive', 'compliance'],
    },
    {
      title: 'Security Compliance',
      icon: <CheckCircle className="h-10 w-10 text-cyber-accent" />,
      description: 'Ensuring systems meet industry standards and regulatory requirements like GDPR, HIPAA, PCI DSS.',
      categories: ['compliance'],
    },
    {
      title: 'Ethical Hacking',
      icon: <Terminal className="h-10 w-10 text-cyber-secondary" />,
      description: 'Legally breaking into computers and devices to test organizational defenses.',
      categories: ['offensive'],
    },
    {
      title: 'Database Security',
      icon: <Database className="h-10 w-10 text-cyber-accent" />,
      description: 'Protecting databases from compromises of confidentiality, integrity, and availability.',
      categories: ['defensive'],
    },
    {
      title: 'Security Auditing',
      icon: <FileCode className="h-10 w-10 text-cyber-secondary" />,
      description: 'Systematic evaluation of security of information system by measuring compliance to established criteria.',
      categories: ['compliance', 'defensive'],
    },
    {
      title: 'Cryptography',
      icon: <Lock className="h-10 w-10 text-cyber-accent" />,
      description: 'Implementation of encryption techniques to secure data in transit and at rest.',
      categories: ['defensive'],
    },
    {
      title: 'Security Engineering',
      icon: <Settings className="h-10 w-10 text-cyber-secondary" />,
      description: 'Building security into systems from the ground up using secure coding practices.',
      categories: ['offensive', 'defensive'],
    },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.categories.includes(activeCategory));
  
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-1/2 w-96 h-96 bg-cyber-accent/20 blur-[100px] rounded-full opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
            <span className="text-cyber-accent">&lt;</span>
            Technical Expertise
            <span className="text-cyber-accent">/&gt;</span>
          </h2>
          <p className="text-cyber-muted max-w-2xl mx-auto">
            With expertise across multiple cybersecurity domains, I provide comprehensive protection 
            strategies against sophisticated threats in today's digital landscape.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-cyber-accent text-cyber-darker'
                  : 'bg-cyber-light/10 text-cyber-text hover:bg-cyber-light/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-cyber-darker rounded-lg border border-cyber-light/10 hover:border-cyber-accent/30 transition-all duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-cyber-text mb-2 group-hover:text-cyber-accent transition-colors">
                {skill.title}
              </h3>
              <p className="text-cyber-muted">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
