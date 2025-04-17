
import { ArrowRight, Shield, ShieldAlert, Lock, Code, MoveRight } from 'lucide-react';
import { useState, useEffect } from 'react';

import TypeWriter from './TypeWriter';

const Hero = () => {
  const titles = ['Cybersecurity Analyst', 'Penetration Tester', 'Security Consultant', 'Network Defender'];
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.15]">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyber-secondary blur-[100px] rounded-full"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-cyber-accent blur-[100px] rounded-full"></div>
        <div className="absolute w-full h-full">
          {/* Binary pattern overlay */}
          <div className="absolute inset-0 opacity-10 select-none overflow-hidden font-mono text-xs">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap leading-none">
                {Array.from({ length: 100 }).map((_, j) => (
                  <span key={j}>{Math.round(Math.random())}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 mb-12 md:mb-0">
            <div className="inline-block font-mono text-cyber-accent mb-4 px-2 py-1 border border-cyber-accent/30 bg-cyber-accent/5 rounded">
              <span>Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cyber-text">
              Securing Digital Assets <br />
              in the Modern Threat Landscape
            </h1>
            
            <div className="h-8 mb-6">
              <p className="text-xl font-mono text-cyber-secondary">
                <span className="text-cyber-accent">&gt;</span> <TypeWriter texts={titles} />
              </p>
            </div>
            
            <p className="text-cyber-muted mb-8 max-w-lg">
              Specialized in identifying vulnerabilities, implementing defensive strategies, 
              and ensuring your systems remain secure against evolving cyber threats.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-cyber-accent text-cyber-darker font-medium rounded hover:bg-cyber-accent/90 transition-all flex items-center justify-center sm:justify-start"
                data-cursor-text="View Projects"
                data-cursor-variant="view"
              >
                View My Work <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-cyber-muted/30 text-cyber-text rounded hover:bg-cyber-light/10 transition-all flex items-center justify-center sm:justify-start"
                data-cursor-text="Get in Touch"
                data-cursor-variant="hack"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-cyber-darker border border-cyber-light/20 flex items-center justify-center relative">
                <div className="absolute inset-0 border-4 border-cyber-accent/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
                <div className="absolute inset-1 border-2 border-dashed border-cyber-secondary/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
                <Shield size={80} className="text-cyber-accent" />
              </div>
              
              <div className="absolute -bottom-4 left-0 bg-cyber-darker p-3 rounded-lg border border-cyber-light/20">
                <Lock size={24} className="text-cyber-secondary" />
              </div>
              
              <div className="absolute -top-4 right-0 bg-cyber-darker p-3 rounded-lg border border-cyber-light/20">
                <Code size={24} className="text-cyber-accent" />
              </div>
              
              <div className="absolute top-1/2 -right-4 bg-cyber-darker p-3 rounded-lg border border-cyber-light/20">
                <ShieldAlert size={24} className="text-cyber-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
