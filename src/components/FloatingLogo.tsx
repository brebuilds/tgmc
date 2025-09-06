import React, { useEffect, useRef, useState } from 'react';
import texasGeneralLogo from '@/assets/texas-general-logo.png';

const FloatingLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Trigger visibility animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const parallaxOffset = scrollY * 0.3; // Parallax speed
  const rotation = scrollY * 0.1; // Subtle rotation based on scroll

  return (
    <div 
      ref={logoRef}
      className={`fixed top-8 right-8 z-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transform: `translateY(${parallaxOffset}px) rotate(${rotation}deg)`,
      }}
    >
      <div className="group relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Logo container */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300 hover:scale-105">
          <img 
            src={texasGeneralLogo} 
            alt="Texas General Medical Center" 
            className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          {/* Tech scan line effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
      </div>
    </div>
  );
};

export default FloatingLogo;
