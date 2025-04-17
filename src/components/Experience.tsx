
import { useState } from 'react';
import { Calendar, ArrowRight, Shield, Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  const workExperience = [
    {
      title: 'Senior Security Consultant',
      company: 'CyberShield Solutions',
      period: '2020 - Present',
      description: 'Lead security consultant for enterprise clients across financial services and healthcare sectors.',
      responsibilities: [
        'Conduct comprehensive security assessments and penetration tests for Fortune 500 clients',
        'Lead a team of 5 security professionals on large-scale security projects',
        'Develop custom security solutions for complex enterprise environments',
        'Present security findings to executive stakeholders and boards',
      ],
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: 'Cybersecurity Analyst',
      company: 'DefendTech Inc.',
      period: '2018 - 2020',
      description: 'Specialized in vulnerability management and security monitoring for cloud environments.',
      responsibilities: [
        'Implemented and maintained SIEM solutions for real-time threat detection',
        'Performed vulnerability assessments and coordinated remediation efforts',
        'Responded to security incidents and developed mitigation strategies',
        'Managed cloud security controls across AWS and Azure environments',
      ],
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: 'Network Security Engineer',
      company: 'SecureNet Technologies',
      period: '2015 - 2018',
      description: 'Focused on designing and implementing secure network architectures.',
      responsibilities: [
        'Designed and deployed network security controls including firewalls and IDS/IPS',
        'Conducted security audits against industry standards (NIST, ISO 27001)',
        'Developed and implemented security policies and procedures',
        'Provided technical guidance on secure network design principles',
      ],
      icon: <Shield className="h-5 w-5" />,
    },
  ];
  
  const education = [
    {
      degree: 'Master of Science in Cybersecurity',
      institution: 'National University of Cybersecurity',
      period: '2014 - 2015',
      description: 'Specialized in advanced penetration testing and security architecture.',
      achievements: [
        'Graduated with highest honors (4.0 GPA)',
        'Published research on zero-day vulnerability detection methods',
        'Led the university\'s ethical hacking team to national competition finals',
      ],
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      period: '2010 - 2014',
      description: 'Focus on network security and secure software development.',
      achievements: [
        'Dean\'s List all semesters',
        'Completed special project on secure coding practices',
        'Teaching assistant for network security courses',
      ],
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];
  
  const certifications = [
    {
      title: 'Certified Information Systems Security Professional (CISSP)',
      issuer: 'ISC²',
      date: '2019',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2018',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Offensive Security Certified Professional (OSCP)',
      issuer: 'Offensive Security',
      date: '2017',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2015',
      icon: <Award className="h-5 w-5" />,
    },
  ];
  
  return (
    <section id="experience" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-cyber-secondary/10 blur-[100px] rounded-full opacity-30"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
            <span className="text-cyber-secondary">~/</span>Experience
          </h2>
          <p className="text-cyber-muted max-w-2xl mx-auto">
            My professional journey in the cybersecurity field, including work experience, 
            education, and industry certifications.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 border-b border-cyber-light/10">
          <button
            className={`px-6 py-3 font-medium transition-all relative ${
              activeTab === 'work' 
                ? 'text-cyber-accent' 
                : 'text-cyber-muted hover:text-cyber-text'
            }`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
            {activeTab === 'work' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-accent"></span>
            )}
          </button>
          <button
            className={`px-6 py-3 font-medium transition-all relative ${
              activeTab === 'education' 
                ? 'text-cyber-accent' 
                : 'text-cyber-muted hover:text-cyber-text'
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
            {activeTab === 'education' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-accent"></span>
            )}
          </button>
          <button
            className={`px-6 py-3 font-medium transition-all relative ${
              activeTab === 'certifications' 
                ? 'text-cyber-accent' 
                : 'text-cyber-muted hover:text-cyber-text'
            }`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
            {activeTab === 'certifications' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-accent"></span>
            )}
          </button>
        </div>
        
        {/* Work Experience */}
        {activeTab === 'work' && (
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div 
                key={index} 
                className="p-6 bg-cyber-darker rounded-lg border border-cyber-light/10 hover:border-cyber-accent/30 transition-all"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold text-cyber-text">{job.title}</h3>
                  <span className="text-cyber-muted flex items-center text-sm">
                    <Calendar size={14} className="mr-1" />
                    {job.period}
                  </span>
                </div>
                <div className="flex items-center text-cyber-accent mb-4">
                  {job.icon}
                  <span className="ml-2">{job.company}</span>
                </div>
                <p className="text-cyber-muted mb-4">{job.description}</p>
                <h4 className="text-cyber-text font-medium mb-2">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight size={16} className="text-cyber-secondary mr-2 mt-1 shrink-0" />
                      <span className="text-cyber-muted">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {/* Education */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="p-6 bg-cyber-darker rounded-lg border border-cyber-light/10 hover:border-cyber-accent/30 transition-all"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold text-cyber-text">{edu.degree}</h3>
                  <span className="text-cyber-muted flex items-center text-sm">
                    <Calendar size={14} className="mr-1" />
                    {edu.period}
                  </span>
                </div>
                <div className="flex items-center text-cyber-accent mb-4">
                  {edu.icon}
                  <span className="ml-2">{edu.institution}</span>
                </div>
                <p className="text-cyber-muted mb-4">{edu.description}</p>
                <h4 className="text-cyber-text font-medium mb-2">Achievements:</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight size={16} className="text-cyber-secondary mr-2 mt-1 shrink-0" />
                      <span className="text-cyber-muted">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {/* Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="p-5 bg-cyber-darker rounded-lg border border-cyber-light/10 hover:border-cyber-accent/30 transition-all flex items-start"
              >
                <div className="mr-4 p-3 bg-cyber-accent/10 rounded-full">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-cyber-text">{cert.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-cyber-accent text-sm">{cert.issuer}</span>
                    <span className="text-cyber-muted text-sm">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
