import React from 'react';
import { Quote } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const PartnershipSection = () => {

  return (
    <section className="py-20 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-alata font-bold text-primary mb-6">
            Leadership{' '}
            <span className="text-gradient-primary">Vision</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in">
            <SpotlightCard 
              className="shadow-medical"
              spotlightColor="rgba(59, 130, 246, 0.3)"
            >
              <div className="relative z-10 space-y-8">
                {/* Quote icon */}
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-secondary/10 to-accent/20 rounded-2xl">
                    <Quote size={32} className="text-secondary" />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-xl sm:text-xl lg:text-2xl font-alata font-bold text-primary leading-tight text-center italic">
                  "We are excited to invest in McAllen and bring a healthcare facility that meets the growing needs of the community. Not only will the hospital deliver <span className="text-gradient-primary">world-class healthcare</span> to the families of the Rio Grande Valley, but it will also create a hub for education, innovation, and research that will shape the next generation of physicians and healthcare leaders."
                </blockquote>

                {/* Attribution */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-1 bg-secondary rounded-full"></div>
                    <div>
                      <cite className="text-xl lg:text-2xl font-semibold text-secondary not-italic font-lexend">
                        Glen Adams
                      </cite>
                      <p className="text-base lg:text-lg text-muted-foreground font-lexend">CEO, Coaction International Development, Inc.</p>
                    </div>
                    <div className="w-16 h-1 bg-secondary rounded-full"></div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default PartnershipSection;