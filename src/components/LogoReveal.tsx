import React, { useEffect, useState } from 'react';
import texasGeneralLogo from '@/assets/texas-general-logo.png';

const LogoReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    // Start the reveal animation
    const revealTimer = setTimeout(() => setIsRevealed(true), 1000);
    
    // Animate scan progress
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(revealTimer);
      clearInterval(scanInterval);
    };
  }, []);

  return (
    <div className="relative inline-block">
      {/* Main logo container */}
      <div className={`relative transition-all duration-1000 ${
        isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-2xl blur-2xl opacity-0 animate-pulse-glow"></div>
        
        {/* Logo with glass effect */}
        <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
          <img 
            src={texasGeneralLogo} 
            alt="Texas General Medical Center" 
            className="h-20 w-auto"
          />
          
          {/* Tech scan overlay */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-80"
              style={{
                transform: `translateX(${scanProgress}%)`,
                transition: 'transform 0.1s linear'
              }}
            />
            
            {/* Grid overlay for tech feel */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-secondary/20"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating data points */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-ping opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-1/2 -right-3 w-1 h-1 bg-accent rounded-full animate-bounce opacity-70"></div>
      </div>
      
      {/* Status indicator */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-xs text-white/70 font-mono">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>SYSTEM ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default LogoReveal;
