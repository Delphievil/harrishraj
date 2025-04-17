
import { useState } from 'react';
import { 
  Shield, Lock, Database, Network, Cloud, Terminal, FileCode, 
  FileSearch, Bug, CheckCircle, Settings, AlertTriangle
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'offensive', label: 'Security Frameworks' },
    { id: 'defensive', label: 'Technical Skills' },
    { id: 'compliance', label: 'Compliance & Governance' },
  ];
  
  const skills = [
    {
      title: 'Compliance & Regulatory Frameworks',
      icon: <CheckCircle className="h-10 w-10 text-cyber-accent" />,
      description: 'Expert in GDPR, PCI DSS, HIPAA, ISO/IEC, DORA EU, NIST, CIS Controls, MITRE ATT&CK, and 40+ other regulations and frameworks.',
      categories: ['compliance', 'offensive'],
    },
    {
      title: 'Security Documentation & Risk Assessment',
      icon: <FileSearch className="h-10 w-10 text-cyber-secondary" />,
      description: 'Skilled in creating comprehensive security documentation and conducting thorough risk assessments.',
      categories: ['defensive', 'compliance'],
    },
    {
      title: 'Cloud Security',
      icon: <Cloud className="h-10 w-10 text-cyber-accent" />,
      description: 'Expertise in securing AWS and GCP environments, implementing best practices for cloud infrastructure.',
      categories: ['defensive'],
    },
    {
      title: 'Vulnerability Assessment & Management',
      icon: <AlertTriangle className="h-10 w-10 text-cyber-secondary" />,
      description: 'Proficient in identifying, assessing, and managing security vulnerabilities across systems and applications.',
      categories: ['defensive', 'offensive'],
    },
    {
      title: 'Security Tools',
      icon: <Settings className="h-10 w-10 text-cyber-accent" />,
      description: 'Skilled with Burp Suite, Metasploit, Nikto, OWASP ZAP, Wireshark, Snort, and various open-source security tools.',
      categories: ['defensive', 'offensive'],
    },
    {
      title: 'Network Security Monitoring & Analysis',
      icon: <Network className="h-10 w-10 text-cyber-secondary" />,
      description: 'Expert in monitoring network traffic, analyzing security events, and identifying potential threats.',
      categories: ['defensive'],
    },
    {
      title: 'SIEM & SOAR',
      icon: <Terminal className="h-10 w-10 text-cyber-accent" />,
      description: 'Experience with Security Information and Event Management and Security Orchestration, Automation, and Response tools.',
      categories: ['defensive'],
    },
    {
      title: 'Security Control Mapping & Benchmarking',
      icon: <FileCode className="h-10 w-10 text-cyber-secondary" />,
      description: 'Skilled in mapping security controls to standards and frameworks, establishing security benchmarks.',
      categories: ['compliance', 'offensive'],
    },
    {
      title: 'Intrusion Detection & Prevention',
      icon: <Shield className="h-10 w-10 text-cyber-accent" />,
      description: 'Expertise in implementing and managing Intrusion Detection and Prevention Systems (IDS/IPS).',
      categories: ['defensive'],
    },
    {
      title: 'GRC',
      icon: <CheckCircle className="h-10 w-10 text-cyber-secondary" />,
      description: 'Specialization in Governance, Risk, and Compliance frameworks and methodologies.',
      categories: ['compliance'],
    },
    {
      title: 'OWASP TOP 10 & Security Standards',
      icon: <Bug className="h-10 w-10 text-cyber-accent" />,
      description: 'Deep knowledge of OWASP TOP 10, NIST, CIS framework, and benchmarks for application security.',
      categories: ['offensive', 'defensive'],
    },
    {
      title: 'Programming Skills',
      icon: <FileCode className="h-10 w-10 text-cyber-secondary" />,
      description: 'Proficient in Python and C++ for security automation, tool development, and security testing.',
      categories: ['defensive'],
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
            With expertise across multiple cybersecurity domains including GRC, cloud security, and information security,
            I provide comprehensive protection strategies against sophisticated threats.
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
