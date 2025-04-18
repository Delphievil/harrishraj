
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Professional Cloud Security Engineer',
      issuer: 'Google Cloud',
      status: 'Certified',
    },
    {
      title: 'Cloud Cybersecurity Certificate',
      issuer: 'Google Cloud',
      status: 'Certified',
    },
    {
      title: 'Certified Cyber Threat Intelligence Analyst (CCTIA)',
      issuer: 'Cyber Training 365',
      status: 'Certified',
    },
    {
      title: 'ISO/IEC 27001 Information Security Associate',
      issuer: 'SkillFront',
      status: 'Associate',
    },
    {
      title: 'Third Party Risk Management (CTPRME)',
      issuer: 'Security Scorecard',
      status: 'Certified',
    },
    {
      title: 'IBM Cyber Security Analyst',
      issuer: 'IBM',
      status: 'Certified',
    },
    {
      title: 'Google IT Support Specialist',
      issuer: 'Google & Coursera',
      status: 'Specialist',
    },
    {
      title: 'Ransomware Uncovered',
      issuer: 'ICTTF - Cyber Risk Academy',
      status: 'Specialist',
    },
    {
      title: 'SASE Expert',
      issuer: 'CATO Network',
      status: 'Level 1 & 2',
    },
    {
      title: 'Cyber Samurai Program in Cyber Defence',
      issuer: 'IIT Jodhpur (TISC)',
      status: 'Entry-Level',
    },
    {
      title: 'Google Cyber Security Specialization',
      issuer: 'Google & Coursera',
      status: 'Specialist',
    },
    {
      title: 'Palo Alto Cyber Security Networks Professional',
      issuer: 'Palo Alto & Coursera',
      status: 'Professional',
    },
    {
      title: 'Blue Team Junior Analyst',
      issuer: 'BTJA - SecurityBlue Team',
      status: 'Certified',
    },
    {
      title: 'Ethical Hacking Essentials',
      issuer: 'Codered by Eccouncil',
      status: 'Certified',
    },
    {
      title: 'Cyber security Specialist Professional Certificate',
      issuer: 'IBM, ISC2 & Coursera',
      status: 'Professional',
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-cyber-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-cyber-secondary/10 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-accent/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
            <span className="text-cyber-secondary">#</span> Certifications
          </h2>
          <p className="text-cyber-muted max-w-2xl mx-auto">
            Professional certifications and achievements in cybersecurity, cloud security, and information security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="p-6 bg-cyber-darker rounded-lg border border-cyber-light/10 hover:border-cyber-accent/30 transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyber-accent/10 rounded-full group-hover:bg-cyber-accent/20 transition-colors">
                  <Award className="h-6 w-6 text-cyber-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-cyber-text group-hover:text-cyber-accent transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-cyber-muted text-sm">{cert.issuer}</span>
                    <span className="text-cyber-accent text-sm">{cert.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
