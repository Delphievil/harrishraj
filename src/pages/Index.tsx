import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import CyberpunkBg from "../components/CyberpunkBg";
import LoadingScreen from "../components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentGradient, setCurrentGradient] = useState(1);
  
  const gradientClasses = [
    "gradient-cyber-1",
    "gradient-cyber-2",
    "gradient-cyber-3",
    "gradient-cyber-4",
    "gradient-cyber-5"
  ];

  useEffect(() => {
    document.title = "A. Harrish Raj | Senior Information Security Engineer";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentGradient((prev) => (prev + 1) % gradientClasses.length);
      }, 30000);
      
      return () => clearInterval(interval);
    }
  }, [isLoading, gradientClasses.length]);
  
  useEffect(() => {
    if (!isLoading) {
      document.body.className = "bg-black";
    }
  }, [currentGradient, isLoading]);

  return (
    <div className="min-h-screen text-cyber-text overflow-x-hidden bg-black">
      {isLoading && <LoadingScreen />}
      <CyberpunkBg />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
