
import { useState, useEffect } from 'react';
import { Menu, X, Shield, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Experience', href: '#experience' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8",
        scrolled ? "bg-cyber-darker bg-opacity-95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-cyber-accent group">
          <Shield className="h-6 w-6 group-hover:text-cyber-glow transition-colors duration-300" />
          <span className="text-xl font-bold font-mono tracking-tight">Harrishraj<span className="text-cyber-secondary">Portfolio</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-cyber-text hover:text-cyber-accent transition-colors duration-300 text-sm font-mono tracking-wider"
            >
              {link.title}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 border border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 transition-all rounded font-mono text-sm tracking-wider"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-cyber-text hover:text-cyber-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute left-0 right-0 bg-cyber-dark bg-opacity-95 backdrop-blur-sm transition-all duration-300 shadow-lg border-b border-cyber-light/20",
          isMenuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-cyber-text hover:text-cyber-accent py-2 transition-colors duration-300 font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 border border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 transition-all rounded font-mono text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
