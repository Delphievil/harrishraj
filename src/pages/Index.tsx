
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CodeAnimation from "../components/CodeAnimation";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Set document title
  useEffect(() => {
    document.title = "Cybersecurity Portfolio";
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-text overflow-x-hidden">
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <CodeAnimation />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
