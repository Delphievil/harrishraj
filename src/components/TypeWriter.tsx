
import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypeWriter = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
  className = ''
}: TypeWriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!texts || texts.length === 0) return;
    
    const currentFullText = texts[currentTextIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetween);
      
      return () => clearTimeout(pauseTimeout);
    }
    
    if (isTyping && !isDeleting) {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        setIsPaused(true);
      }
    }
    
    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        }, deletingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [
    currentText,
    currentTextIndex,
    isTyping,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);
  
  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">_</span>
    </span>
  );
};

export default TypeWriter;
