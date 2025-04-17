import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'aharrishraj1@gmail.com',
      link: 'mailto:aharrishraj1@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 8838767615',
      link: 'tel:+918838767615',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Bengaluru, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: 'Github',
      link: 'https://github.com/',
      color: 'hover:text-white',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/harrishraj',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: 'Twitter',
      link: 'https://twitter.com/itsmeharrish',
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-cyber-darker relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-cyber-accent/10 to-transparent opacity-30"></div>
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyber-secondary/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
            <span className="text-cyber-secondary">{'{'}</span>
            Get In Touch
            <span className="text-cyber-secondary">{'}'}</span>
          </h2>
          <p className="text-cyber-muted max-w-2xl mx-auto">
            I am eager to contribute my skills and dedication to your organization, aiming to support its growth while continuing to grow personally and professionally
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-cyber-light/10 rounded-full text-cyber-accent mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-cyber-text font-medium">{item.label}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-cyber-muted hover:text-cyber-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-cyber-muted">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-cyber-text font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-cyber-light/10 rounded-full text-cyber-muted ${social.color} transition-colors`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="mt-6">
              <h3 className="text-cyber-text font-bold mb-2">Download Resume</h3>
              <a
                href="https://app.flowcv.com/api/public/download_resume?token=7irb4reqc6"
                download
                className="inline-flex items-center px-4 py-2 bg-cyber-accent text-cyber-dark font-semibold rounded-md hover:bg-cyber-glow transition"
              >
                📄 Harrishraj-sr.infosec-eng
              </a>
            </div>

            <div className="p-6 border border-cyber-accent/20 bg-cyber-accent/5 rounded-lg">
              <h3 className="text-cyber-text font-bold mb-2">Its Great to see here</h3>
              <p className="text-cyber-muted mb-4">
                Get to know about my Experience and Knowledge
              </p>
              <a 
                href="mailto:aharrishraj1@gmail.com" 
                className="inline-flex items-center text-cyber-accent hover:text-cyber-glow transition-colors"
              >
                <Phone size={16} className="mr-2" />
                Ping Me Up
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="p-6 bg-cyber-dark border border-cyber-light/10 rounded-lg"
            >
              <h3 className="text-xl font-bold text-cyber-text mb-6">Send Me a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-cyber-muted mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-cyber-darker border border-cyber-light/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent/50 text-cyber-text"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cyber-muted mb-2 text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-cyber-darker border border-cyber-light/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent/50 text-cyber-text"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-cyber-muted mb-2 text-sm">
                 Subject
                </label>
                <input
                   type="text"
                   id="subject"
                   name="subject"
                   value={formState.subject}
                   onChange={handleChange}
                   required
                   placeholder="Enter the subject"
                   className="w-full px-4 py-2 bg-cyber-darker border border-cyber-light/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent/50 text-cyber-text"
                    />
               </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-cyber-muted mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-cyber-darker border border-cyber-light/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-accent/50 text-cyber-text resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md flex items-center justify-center transition-all ${
                  isSubmitting 
                    ? 'bg-cyber-secondary/70 cursor-wait' 
                    : 'bg-cyber-secondary hover:bg-cyber-secondary/90'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 text-green-400 rounded-md">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 text-red-400 rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
