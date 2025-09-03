import React from 'react';
import { Button } from '@/components/ui/button';
import communityImage from '@/assets/community-care.jpg';
const CommunitySection = () => {
  return <section className="py-20 lg:py-32 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image First */}
          <div className="animate-fade-in hover-lift lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-medical">
              <img src={communityImage} alt="Community Healthcare" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"></div>
              
              {/* Floating Stats Overlay */}
              
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-fade-in lg:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-alata font-bold text-primary mb-8 leading-tight">
              Transforming{' '}
              <span className="text-gradient-primary">Community Care</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 font-lexend">
              Designed to meet the growing healthcare needs of the Rio Grande Valley, this hospital ensures residents no longer need to travel for advanced care.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-secondary font-lexend">Emergency & Trauma Services</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{
                animationDelay: '0.5s'
              }}></div>
                <span className="text-lg font-semibold text-secondary font-lexend">Advanced Surgical Capabilities</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{
                animationDelay: '1s'
              }}></div>
                <span className="text-lg font-semibold text-secondary font-lexend">Maternal & Pediatric Care</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{
                animationDelay: '1.5s'
              }}></div>
                <span className="text-lg font-semibold text-secondary font-lexend">Comprehensive Specialty Services</span>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-secondary pl-6 py-4 mb-8 bg-accent/20 rounded-r-lg">
              <p className="text-lg italic text-primary font-lexend mb-2">
                "All right here in McAllen. No more traveling hundreds of miles for the care your family deserves."
              </p>
              <footer className="text-secondary font-semibold font-lexend">— Community Healthcare Promise</footer>
            </blockquote>
            
            <Button variant="medical" size="lg">
              Learn About Services
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CommunitySection;