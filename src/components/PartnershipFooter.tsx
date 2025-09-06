import React from 'react';
import coactionLogo from '@/assets/coaction-logo.png';
import texasGeneralLogo from '@/assets/texas-general-logo.png';
import ovationLogo from '@/assets/ovation-logo.png';

const PartnershipFooter = () => {
  return (
    <section className="py-16 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Partnership Text */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-muted-foreground font-lexend">
              Built in partnership with
            </h3>
            <p className="text-sm text-muted-foreground font-lexend">
              Texas General Medical Center - Coaction International Development, Inc. - Ovation Healthcare
            </p>
          </div>
          
          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-20">
            {/* Texas General Medical Center */}
            <a 
              href="#" 
              className="group transition-all duration-300 hover:scale-110 hover:opacity-80"
              onClick={(e) => {
                e.preventDefault();
                // Scroll to top for Texas General (landing page)
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative">
                <img 
                  src={texasGeneralLogo} 
                  alt="Texas General Medical Center" 
                  className="h-24 sm:h-28 lg:h-32 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
            
            {/* Coaction International Development */}
            <a 
              href="https://coactiongrp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110 hover:opacity-80"
            >
              <div className="relative">
                <img 
                  src={coactionLogo} 
                  alt="Coaction International Development, Inc." 
                  className="h-24 sm:h-28 lg:h-32 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
            
            {/* Ovation Healthcare */}
            <a 
              href="https://ovationhc.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110 hover:opacity-80"
            >
              <div className="relative">
                <img 
                  src={ovationLogo} 
                  alt="Ovation Healthcare" 
                  className="h-24 sm:h-28 lg:h-32 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipFooter;
