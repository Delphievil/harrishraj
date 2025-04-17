
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnterLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button')) {
        setLinkHovered(true);
        
        // Check for data attributes to customize cursor
        const dataText = target.getAttribute('data-cursor-text') || 
                         target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
                         
        const dataVariant = target.getAttribute('data-cursor-variant') || 
                            target.closest('[data-cursor-variant]')?.getAttribute('data-cursor-variant');
        
        if (dataText) setCursorText(dataText);
        if (dataVariant) setCursorVariant(dataVariant);
      } else {
        setLinkHovered(false);
        setCursorText('');
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => setHidden(true);

    // Add background image variation on interval
    const switchBackground = () => {
      const backgrounds = ['bg-cyber-1', 'bg-cyber-2', 'bg-cyber-3'];
      const body = document.body;
      
      // Remove any existing background classes
      backgrounds.forEach(bg => body.classList.remove(bg));
      
      // Add a random background
      const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      body.classList.add(randomBg);
    };
    
    // Switch background every 30 seconds
    const backgroundInterval = setInterval(switchBackground, 30000);
    
    // Initial background change
    switchBackground();

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseEnterLink);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseEnterLink);
      clearInterval(backgroundInterval);
    };
  }, []);

  // Don't render custom cursor on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${
          clicked ? 'scale-90' : 'scale-100'
        } ${
          linkHovered ? 'w-8 h-8' : 'w-6 h-6'
        } ${
          cursorVariant === 'view' ? 'bg-cyber-accent' : 
          cursorVariant === 'hack' ? 'bg-red-500' : 'bg-cyber-secondary'
        } transition-[transform,opacity,width,height,background-color] duration-200`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className={`fixed pointer-events-none z-50 rounded-full border ${
          cursorVariant === 'view' ? 'border-cyber-accent' : 
          cursorVariant === 'hack' ? 'border-red-500' : 'border-cyber-accent'
        } ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${
          linkHovered ? 'w-16 h-16' : 'w-10 h-10'
        } flex items-center justify-center transition-[width,height,opacity,border-color] duration-300 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {cursorText && linkHovered && (
          <span className="text-xs font-mono text-white whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
      
      {/* Matrix cursor trailing effect */}
      <div
        className={`fixed pointer-events-none z-40 ${
          hidden ? 'opacity-0' : 'opacity-80'
        } transition-opacity duration-300 ease-out text-xs font-mono text-cyber-accent select-none`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute opacity-30"
            style={{
              left: `${Math.cos(i / 5 * Math.PI * 2) * 20}px`,
              top: `${Math.sin(i / 5 * Math.PI * 2) * 20}px`,
              opacity: 1 - (i / 10),
              fontSize: `${10 - i}px`
            }}
          >
            {Math.round(Math.random()) === 1 ? '1' : '0'}
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomCursor;
