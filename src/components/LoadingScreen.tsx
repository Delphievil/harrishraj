
import { useState, useEffect } from 'react';
import { Shield, Lock } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [securityChecks, setSecurityChecks] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  
  const securityCheckMessages = [
    "Initializing security protocols...",
    "Scanning network for vulnerabilities...",
    "Establishing encrypted connection...",
    "Verifying digital signatures...",
    "Deploying intrusion countermeasures...",
    "Securing communication channels...",
    "Activating firewall protection...",
    "Security assessment complete."
  ];
  
  useEffect(() => {
    const incrementProgress = () => {
      setProgress(prevProgress => {
        const nextProgress = prevProgress + Math.random() * 15;
        return nextProgress > 100 ? 100 : nextProgress;
      });
    };
    
    const addSecurityCheck = (index: number) => {
      if (index < securityCheckMessages.length) {
        setSecurityChecks(prev => [...prev, securityCheckMessages[index]]);
      }
    };
    
    // Initial delay before starting
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        incrementProgress();
      }, 200);
      
      return () => clearInterval(interval);
    }, 500);
    
    // Add security check messages with intervals
    securityCheckMessages.forEach((_, index) => {
      setTimeout(() => {
        addSecurityCheck(index);
      }, 500 + (index * 800));
    });
    
    // Complete the loading after all checks
    setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsComplete(true);
      }, 1000);
    }, 500 + (securityCheckMessages.length * 800));
    
    return () => clearTimeout(initialDelay);
  }, []);
  
  if (isComplete) return null;
  
  return (
    <div className="fixed inset-0 bg-cyber-darker z-50 flex flex-col items-center justify-center">
      <div className="w-20 h-20 mb-8 relative">
        <Shield size={80} className="text-cyber-accent animate-pulse" />
        <Lock size={24} className="text-cyber-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <h1 className="text-3xl font-bold text-cyber-text mb-2">Harrish Raj Portfolio</h1>
      <p className="text-cyber-accent font-mono mb-8">Initializing Secure Environment</p>
      
      <div className="w-80 md:w-96 bg-cyber-dark rounded-lg overflow-hidden mb-4 border border-cyber-light/20">
        <div 
          className="h-2 bg-gradient-to-r from-cyber-accent to-cyber-secondary transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="font-mono text-cyber-muted text-sm max-w-md h-32 overflow-hidden">
        <div className="flex flex-col-reverse h-full justify-start space-y-reverse space-y-1">
          {securityChecks.map((check, index) => (
            <div 
              key={index} 
              className={`flex items-center transition-all duration-500 ${
                index === securityChecks.length - 1 ? 'text-cyber-accent' : 'text-cyber-muted'
              }`}
            >
              <span className="text-cyber-secondary mr-2">&gt;</span> {check}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
