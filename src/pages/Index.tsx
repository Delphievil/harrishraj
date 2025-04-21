
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import MatrixBg from "../components/CyberpunkBg";
import LoadingScreen from "../components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "A. Harrish Raj | Senior Information Security Engineer";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Matrix/hacker dark theme
    document.body.classList.add("bg-black");
    document.body.style.overflow = "auto";
    document.body.style.position = "relative";
    return () => {
      document.body.classList.remove("bg-black");
    };
  }, []);

  return (
    <div className="min-h-screen text-cyber-text overflow-x-hidden relative">
      {isLoading && <LoadingScreen />}
      <MatrixBg />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
