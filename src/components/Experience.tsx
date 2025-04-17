
import { useState } from 'react';
import { Calendar, ArrowRight, Shield, Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  const workExperience = [
    {
      title: 'Senior Information Security Engineer',
      company: 'Banyan Cloud Inc.',
      period: 'May 2024 - Present',
      description: 'Working on security initiatives and regulatory compliance.',
      responsibilities: [
        'Working on the Middle East regulations and Cyber Threat Intelligence using MITRE ATT&CK Framework for Product\'s AI Capabilities',
        'Creating and implementing security controls of product according to BFSI regulations of India'
      ],
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: 'Information Security Engineer',
      company: 'Banyan Cloud Inc.',
      period: 'August 2021 - April 2024',
      description: 'Managed security across multiple domains while ensuring compliance with global standards.',
      responsibilities: [
        'Managed security across all domains, including testing, monitoring regulations, and mapping security controls while collaborating with GRC teams',
        'Ensured product security and compliance with GDPR, NIST, PCI DSS, HIPAA, ISO/IEC standards, and DORA EU through control mapping and implementation',
        'Worked with cloud SMEs to test use cases, identify vulnerabilities, and secure cloud IAM across diverse environments',
        'Contributed to R&D in vulnerability assessment, cyber threat intelligence, and malware analysis',
        'Designed and implemented privacy regulations and security controls for the US, UK, and Middle East, ensuring regional compliance',
        'Assigned CIS Benchmarks and MITRE ATT&CK controls to cloud environments (AWS, Azure, OCI), strengthening security and compliance'
      ],
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: 'Data Security Consultant',
      company: 'Banyan Cloud Inc.',
      period: 'May 2021 - August 2021',
      description: 'Conducted security testing and implemented data protection solutions.',
      responsibilities: [
        'Conducted security testing across multiple environments, identifying and mitigating vulnerabilities to protect internal data',
        'Collaborated with the infrastructure team to implement a DLP solution, preventing unauthorized data access and theft'
      ],
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: 'Cyber Security Intern',
      company: 'Virtually Testing Foundation',
      period: 'January 2021 - March 2021',
      description: 'Remote internship focused on foundational cybersecurity skills.',
      responsibilities: [
        'Gained foundational cybersecurity skills through hands-on learning and research',
        'Completed mini projects to deepen domain knowledge and practical expertise'
      ],
      icon: <Briefcase className="h-5 w-5" />,
    }
  ];
  
  const education = [
    {
      degree: 'Bachelor of Engineering, Computer Science & Engineering',
      institution: 'Dhanalakshmi Srinivasan Engineering College',
      period: 'August 2017 - June 2021',
      description: 'CGPA: 8.2/10 (equivalent to GPA: 3.32/4.0)',
      achievements: [
        'Completed coursework in computer science and engineering fundamentals',
        'Gained strong technical foundation in programming and security concepts'
      ],
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      degree: 'Higher Secondary Certificate, Computer Science',
      institution: 'St. James Matriculation Higher Secondary School',
      period: '2016 - 2017',
      description: 'Percentage: 80.3% (equivalent to GPA: 3.21/4.0)',
      achievements: [
        'Focused on computer science curriculum',
        'Developed early interest in technology and programming'
      ],
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      degree: 'Secondary School Leaving Certificate',
      institution: 'St. James Matriculation Higher Secondary School',
      period: '2014 - 2015',
      description: 'Percentage: 87%',
      achievements: [
        'Established strong academic foundation',
        'Participated in extracurricular activities'
      ],
      icon: <GraduationCap className="h-5 w-5" />,
    }
  ];
  
  const certifications = [
    {
      title: 'Professional Cloud Security Engineer',
      issuer: 'Google Cloud',
      date: 'Certified',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Cloud Cybersecurity Certificate',
      issuer: 'Google Cloud',
      date: 'Certified',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Certified Cyber Threat Intelligence Analyst (CCTIA)',
      issuer: 'Cyber Training 365',
      date: 'Certified',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'ISO/IEC 27001 Information Security Associate',
      issuer: 'SkillFront',
      date: 'Associate',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Third Party Risk Management (CTPRME)',
      issuer: 'Security Scorecard',
      date: 'Certified',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'IBM Cyber Security Analyst',
      issuer: 'IBM',
      date: 'Certified',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Google IT Support Specialist',
      issuer: 'Google & Coursera',
      date: 'Specialist',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Ransomware Uncovered',
      issuer: 'ICTTF - Cyber Risk Academy',
      date: 'Specialist',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'SASE Expert',
      issuer: 'CATO Network',
      date: 'Level 1 & 2',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Cyber Samurai Program in Cyber Defence',
      issuer: 'IIT Jodhpur (TISC)',
      date: 'Entry-Level',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Google Cyber Security Specialization',
      issuer: 'Google & Coursera',
      date: 'Specialist',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Palo Alto Cyber Security Networks Professional',
      issuer: 'Palo Alto & Coursera',
      date: 'Professional',
      icon: <Award className="h-5 w-5" />,
    }
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
            My professional journey in information security, including work experience, 
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
