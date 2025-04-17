
import { Shield, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="py-10 bg-cyber-darker relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="absolute right-6 bottom-20 md:bottom-10">
          <button 
            onClick={scrollToTop}
            className="p-3 bg-cyber-accent/10 border border-cyber-accent rounded-full text-cyber-accent hover:bg-cyber-accent hover:text-cyber-darker transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-cyber-light/10 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-5 w-5 text-cyber-accent mr-2" />
              <span className="text-lg font-bold text-cyber-text">Cyber<span className="text-cyber-secondary">Sec</span></span>
            </div>
            
            <div className="text-cyber-muted text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
              <p className="mt-1">Cybersecurity Professional Portfolio</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-cyber-muted text-xs">
              <span className="text-cyber-accent font-mono">// </span>
              Protecting digital assets in an increasingly connected world.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
